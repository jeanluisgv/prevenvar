// Remembers who is logged in (and their progress) for the life of the page, so
// moving between pages doesn't ask the server (and its database) again.
//
// - The first getSession() calls /api/me once; every later or simultaneous call
//   (including React StrictMode's double effects in dev) reuses that answer.
// - Login and register responses carry the same data, so they fill the cache
//   directly and the next page never needs to call /api/me.

export type ProgressRow = { item: string, started_at: number, done_at: number | null }

export type SessionData = {
    email: string
    firstName: string
    lastName: string
    progress: ProgressRow[]
    /** Seconds to add to the browser's clock to get the server's clock. */
    clockOffset: number
    /** Admin (registered with an admin code): every step unlocked, no waits. */
    admin: boolean
}

/** The JSON that /api/me, /api/login and /api/register return on success. */
type SessionResponse = { email: string, firstName?: string, lastName?: string, progress: ProgressRow[], now: number, admin?: boolean }

let current: Promise<SessionData | null> | null = null

function fromResponse(data: SessionResponse): SessionData {
    return {
        email: data.email,
        firstName: data.firstName ?? '',
        lastName: data.lastName ?? '',
        progress: data.progress,
        clockOffset: data.now - Date.now() / 1000,
        admin: data.admin === true,
    }
}

export function getSession(): Promise<SessionData | null> {
    current ??= fetch('/api/me')
        .then(res => (res.ok ? res.json() : null))
        .then(data => (data ? fromResponse(data) : null))
        .catch(() => {
            current = null // network error: allow a retry later
            return null
        })
    return current
}

/** Store the response of login/register (or null after logout). */
export function setSessionFromResponse(data: SessionResponse | null) {
    current = Promise.resolve(data ? fromResponse(data) : null)
}

/** Keep the cached progress in sync after the user opens or completes something. */
export function updateCachedProgress(progress: ProgressRow[]) {
    current = current?.then(s => (s ? { ...s, progress } : s)) ?? null
}
