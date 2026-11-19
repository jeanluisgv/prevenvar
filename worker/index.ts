import { hashPassword, verifyPassword, getDummyHash } from './password'
import { newSession, destroySession, now } from './session'
import { me, recordProgress, type ProgressRow } from './progress'
import { validateEmail, validatePassword, validateFirstName, validateLastName, validateCodigo } from '../src/validation'
import { recordEvaluation } from './evaluations'
import { isAdmin } from './admin'
type Credentials = {
    email?: unknown, password?: unknown, codigo?: unknown,
    firstName?: unknown, lastName?: unknown,
}

async function readCredentials(request: Request) {
    let body: Credentials
    try {
        body = await request.json()
    } catch {
        return null
    }
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const password = typeof body.password === 'string' ? body.password : ''
    const codigo = typeof body.codigo === 'string' ? body.codigo.trim() : ''
    const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : ''
    const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : ''
    return { email, password, codigo, firstName, lastName }
}

async function register(request: Request, env: Env) {
    const creds = await readCredentials(request)
    if (!creds) return Response.json({ error: 'Solicitud inválida.' }, { status: 400 })

    // Re-check on the server: the browser checks can be bypassed.
    const error = validateFirstName(creds.firstName) || validateLastName(creds.lastName)
        || validateEmail(creds.email) || validatePassword(creds.password) || validateCodigo(creds.codigo)
    if (error) return Response.json({ error }, { status: 400 })

    const codes = (env.REGISTRATION_CODES ?? '').split(',').map(c => c.trim().toLowerCase()).filter(Boolean)
    if (!codes.includes(creds.codigo.toLowerCase())) {
        return Response.json({ error: 'El codigo no esta en nuestro registro' }, { status: 400 })
    }

    const passwordHash = await hashPassword(creds.password)

    const session = await newSession(request)

    // ONE D1 call creates the user and signs them in, with no reads:
    // - No "does this email exist?" SELECT. The UNIQUE constraint on email does
    //   that check, and ON CONFLICT DO NOTHING turns a duplicate into 0 changes.
    // - The session INSERT runs only if the user INSERT changed a row, and takes
    //   the new user's id from last_insert_rowid(). A batch runs in order as one
    //   transaction, so both see the previous statement's result.
    const [userInsert] = await env.DB.batch([
        env.DB.prepare(`INSERT INTO users (email, password_hash, codigo, first_name, last_name)
                        VALUES (?, ?, ?, ?, ?) ON CONFLICT(email) DO NOTHING`)
            .bind(creds.email, passwordHash, creds.codigo || null, creds.firstName, creds.lastName),
        env.DB.prepare('INSERT INTO sessions (token_hash, user_id, expires_at) SELECT ?, last_insert_rowid(), ? WHERE changes() = 1')
            .bind(session.tokenHash, session.expiresAt),
    ])

    if (userInsert.meta.changes === 0) {
        return Response.json({ error: 'Ya existe una cuenta con ese email.' }, { status: 409 })
    }
    // Returning what /api/me would lets the page skip that call afterwards.
    // A brand-new user has no progress, so there's nothing to read.
    return Response.json(
        { email: creds.email, firstName: creds.firstName, lastName: creds.lastName, progress: [], now: now(), admin: isAdmin(env, creds.codigo) },
        { status: 201, headers: { 'Set-Cookie': session.setCookie } },
    )
}

async function login(request: Request, env: Env) {
    const creds = await readCredentials(request)
    if (!creds || !creds.email || !creds.password) {
        return Response.json({ error: 'Email o contraseña incorrectos.' }, { status: 401 })
    }

    // D1 call 1 of 2: only the columns we need, at most one row, found through
    // the email index. Has to be separate: the password is checked in between.
    const row = await env.DB
        .prepare('SELECT id, password_hash, codigo, first_name, last_name FROM users WHERE email = ? LIMIT 1')
        .bind(creds.email)
        .first<{ id: number, password_hash: string, codigo: string | null, first_name: string, last_name: string }>()

    const ok = await verifyPassword(creds.password, row?.password_hash ?? await getDummyHash())
    if (!row || !ok) {
        // Same message whether the email or the password is wrong.
        return Response.json({ error: 'Email o contraseña incorrectos.' }, { status: 401 })
    }
    // D1 call 2 of 2, one batch that:
    //  - clears this user's expired sessions (user_id index), so the table stays
    //    small without a separate cleanup job,
    //  - creates the new session,
    //  - reads the user's progress, so the page doesn't need /api/me afterwards.
    const session = await newSession(request)
    const [, , progress] = await env.DB.batch<ProgressRow>([
        env.DB.prepare('DELETE FROM sessions WHERE user_id = ? AND expires_at <= ?').bind(row.id, now()),
        env.DB.prepare('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)')
            .bind(session.tokenHash, row.id, session.expiresAt),
        env.DB.prepare('SELECT item, started_at, done_at FROM progress WHERE user_id = ?').bind(row.id),
    ])
    return Response.json(
        { email: creds.email, firstName: row.first_name, lastName: row.last_name, progress: progress.results, now: now(), admin: isAdmin(env, row.codigo) },
        { headers: { 'Set-Cookie': session.setCookie } },
    )
}

/**
 * How names and codes are compared in password recovery: Unicode-aware
 * lowercase (Spanish rules, so É/Ñ/Ú count too, unlike SQLite's NOCASE),
 * trimmed, repeated spaces collapsed, and composed the same way (NFC), so
 * "  JOSÉ  " matches "José". Only used to compare: the stored values keep
 * their original capitals for the certificate.
 */
const normalize = (s: string) => s.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('es')

/**
 * POST /api/reset-password { firstName, lastName, email, codigo, password }
 * "Forgot password" without email: the user proves who they are by repeating
 * the name, last name and code they registered with (see `normalize`).
 * A mismatch gives the same answer whichever field was wrong, so it doesn't
 * reveal which emails exist.
 * D1: 1 call on a mismatch (read by email), 2 on success (read, then one batch
 * that sets the new hash and logs the user out everywhere). Two calls because
 * SQLite can't lowercase accented letters, so the comparison happens here.
 */
async function resetPassword(request: Request, env: Env) {
    const creds = await readCredentials(request)
    if (!creds) return Response.json({ error: 'Solicitud inválida.' }, { status: 400 })

    const error = validateFirstName(creds.firstName) || validateLastName(creds.lastName)
        || validateEmail(creds.email) || validateCodigo(creds.codigo) || validatePassword(creds.password)
    if (error) return Response.json({ error }, { status: 400 })

    const user = await env.DB
        .prepare('SELECT id, first_name, last_name, codigo FROM users WHERE email = ? LIMIT 1')
        .bind(creds.email)
        .first<{ id: number, first_name: string, last_name: string, codigo: string }>()

    const matches = user !== null
        && normalize(user.first_name) === normalize(creds.firstName)
        && normalize(user.last_name) === normalize(creds.lastName)
        && normalize(user.codigo) === normalize(creds.codigo)
    if (!matches) {
        return Response.json({ error: 'Los datos no coinciden con ninguna cuenta.' }, { status: 400 })
    }

    const passwordHash = await hashPassword(creds.password)
    await env.DB.batch([
        env.DB.prepare('UPDATE users SET password_hash = ? WHERE id = ?').bind(passwordHash, user.id),
        env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(user.id),
    ])
    return Response.json({ ok: true })
}

// D1 calls per request (keep these as low as possible when adding endpoints):
//   POST /api/register  1  (user + session in one batch, no reads)
//   POST /api/login     2  (read hash, then one batch: session + progress)
//   GET  /api/me        1  (email + all progress), or 0 without a valid-looking cookie
//   POST /api/progress  1  (session check is a subquery in the write), 0 on bad input
//   POST /api/reset-password 2  (read by email, then update + log out in one batch); 1 on a mismatch, 0 on bad input
//   POST /api/logout    1, or 0 without a valid-looking cookie
//   POST /api/evaluations 1  (attempt + "done" if passed, one batch), 0 on bad input
//   bad input / bad JSON / failed validation: 0
export default {
    async fetch(request: Request, env: Env) {
        const url = new URL(request.url)

        if (url.pathname === '/api/hello') {
            return Response.json({ message: 'Worker is running!' })
        }

        if (url.pathname === '/api/register' && request.method === 'POST') {
            return register(request, env)
        }

        if (url.pathname === '/api/login' && request.method === 'POST') {
            return login(request, env)
        }

        if (url.pathname === '/api/reset-password' && request.method === 'POST') {
            return resetPassword(request, env)
        }

        if (url.pathname === '/api/logout' && request.method === 'POST') {
            const setCookie = await destroySession(request, env)
            return Response.json({ ok: true }, { headers: { 'Set-Cookie': setCookie } })
        }

        if (url.pathname === '/api/me' && request.method === 'GET') {
            return me(request, env)
        }

        if (url.pathname === '/api/progress' && request.method === 'POST') {
            return recordProgress(request, env)
        }

        if (url.pathname === '/api/evaluations' && request.method === 'POST') {
            return recordEvaluation(request, env)
        }

        return new Response('Not found', { status: 404 })
    },
}
