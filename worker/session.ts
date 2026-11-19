// Cookie-based sessions backed by the D1 `sessions` table.
// The browser gets a random token in an HttpOnly cookie. The database stores only
// the token's SHA-256 hash, so a leaked copy of the table can't be used to log in.

const COOKIE_NAME = 'session'
const SESSION_SECONDS = 60 * 60 * 24 * 7 // 7 days

export const now = () => Math.floor(Date.now() / 1000)

function toHex(bytes: ArrayBuffer): string {
    return [...new Uint8Array(bytes)].map(b => b.toString(16).padStart(2, '0')).join('')
}

async function hashToken(token: string): Promise<string> {
    return toHex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token)))
}

// Tokens we issue are always 64 hex characters. Anything else is rejected
// without touching the database.
const TOKEN_FORMAT = /^[0-9a-f]{64}$/

/** The session cookie's value: null if absent, '' if present but malformed. */
function readCookie(request: Request): string | null {
    const header = request.headers.get('Cookie')
    if (!header) return null
    for (const part of header.split(';')) {
        const [name, ...rest] = part.trim().split('=')
        if (name === COOKIE_NAME) {
            const value = rest.join('=')
            return TOKEN_FORMAT.test(value) ? value : ''
        }
    }
    return null
}

function cookie(request: Request, value: string, maxAge: number): string {
    // Secure only over https, so the cookie still works on http://localhost in dev.
    const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : ''
    // HttpOnly: page JavaScript can't read it. SameSite=Lax: not sent on
    // cross-site form posts, which blocks basic CSRF.
    return `${COOKIE_NAME}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`
}

/** A Set-Cookie value that deletes the session cookie in the browser. */
export function clearCookie(request: Request): string {
    return cookie(request, '', 0)
}

/**
 * Makes a new session token. This does NOT touch the database: the caller adds
 * the INSERT to its own batch, so creating a session never costs an extra D1 call.
 */
export async function newSession(request: Request) {
    const token = toHex(crypto.getRandomValues(new Uint8Array(32)).buffer)
    return {
        tokenHash: await hashToken(token),
        expiresAt: now() + SESSION_SECONDS,
        setCookie: cookie(request, token, SESSION_SECONDS),
    }
}

/**
 * Looks up the logged-in user. One D1 call (one session row and one user row,
 * both by primary key), or zero when there's no cookie or it's malformed.
 * `hadCookie` tells the caller to clear a cookie that turned out to be dead, so
 * the browser stops sending it and future requests skip the database.
 */
export async function getSessionUser(request: Request, env: Env) {
    const token = readCookie(request)
    if (token === null) return { user: null, hadCookie: false }
    if (token === '') return { user: null, hadCookie: true }
    const user = await env.DB
        .prepare(`SELECT u.id, u.email FROM sessions s JOIN users u ON u.id = s.user_id
                  WHERE s.token_hash = ? AND s.expires_at > ? LIMIT 1`)
        .bind(await hashToken(token), now())
        .first<{ id: number, email: string }>()
    return { user, hadCookie: true }
}

/**
 * The hash of the request's session token, or null if there's no well-formed
 * cookie. Lets other endpoints look up the user *inside their own query*
 * (`WHERE user_id = (SELECT user_id FROM sessions WHERE token_hash = ? ...)`),
 * so checking the session and doing the work costs one D1 call, not two.
 */
export async function sessionTokenHash(request: Request): Promise<string | null> {
    const token = readCookie(request)
    return token ? hashToken(token) : null
}

/** Ends the session: one D1 call, or zero when there's no valid cookie. */
export async function destroySession(request: Request, env: Env): Promise<string> {
    const token = readCookie(request)
    if (token) {
        await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await hashToken(token)).run()
    }
    return clearCookie(request)
}
