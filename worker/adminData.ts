// GET /api/admin/data: everything the admin dashboard shows (src/admin/), in
// ONE D1 call. The page keeps it in memory and does all sorting, searching and
// filtering itself, so browsing the dashboard costs no further requests.
//
// Rows read: about (users + progress rows + evaluation rows), once per load.

import { sessionTokenHash, now } from './session'
import { adminCodes } from './admin'

export type AdminUserRow = { id: number, email: string, first_name: string, last_name: string, codigo: string, created_at: number }
export type AdminProgressRow = { user_id: number, item: string, started_at: number, done_at: number | null }
export type AdminEvaluationRow = { id: number, user_id: number, item: string, score: number, total: number, passed: number, created_at: number }

const forbidden = () => Response.json({ error: 'No autorizado.' }, { status: 403 })

export async function adminData(request: Request, env: Env) {
    const codes = adminCodes(env)
    const tokenHash = await sessionTokenHash(request)
    // No cookie, or no admin codes configured: nobody can be an admin. 0 D1 calls.
    if (!tokenHash || codes.length === 0) {
        return forbidden()
    }

    // The admin check runs inside every SELECT: "a live session whose user has
    // an admin code exists". It doesn't depend on the row, so SQLite works it out
    // once per statement. Not an admin → every SELECT returns nothing.
    const guard = `EXISTS (SELECT 1 FROM sessions s JOIN users a ON a.id = s.user_id
                           WHERE s.token_hash = ? AND s.expires_at > ?
                             AND lower(a.codigo) IN (${codes.map(() => '?').join(', ')}))`
    const args = [tokenHash, now(), ...codes]

    const [users, progress, evaluations] = await env.DB.batch<Record<string, unknown>>([
        // Never password_hash. created_at is text in this table; converted to unix
        // seconds so every date in the response has the same format.
        env.DB.prepare(`SELECT id, email, first_name, last_name, codigo,
                               CAST(strftime('%s', created_at) AS INTEGER) AS created_at
                        FROM users WHERE ${guard}`).bind(...args),
        env.DB.prepare(`SELECT user_id, item, started_at, done_at FROM progress WHERE ${guard}`).bind(...args),
        env.DB.prepare(`SELECT id, user_id, item, score, total, passed, created_at FROM evaluations WHERE ${guard}`).bind(...args),
    ])

    // The admin is a user, so an admin always gets at least one user row.
    if (users.results.length === 0) {
        return forbidden()
    }
    return Response.json(
        { users: users.results, progress: progress.results, evaluations: evaluations.results, now: now() },
        { headers: { 'Cache-Control': 'no-store' } },
    )
}
