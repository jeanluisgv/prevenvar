// Per-user progress through the sections (see src/sections/).
// The worker only records timestamps; the unlock rules live in the frontend
// (src/progress.tsx), next to the section data they depend on.

import { sessionTokenHash, clearCookie, now } from './session'
import { isAdmin } from './admin'

export type ProgressRow = { item: string, started_at: number, done_at: number | null }

// "<sectionId>/<subsectionId>": lowercase letters, numbers and dashes. Rejecting
// anything else keeps junk rows out of the table and costs no D1 call.
export const ITEM_FORMAT =/^[a-z0-9-]{1,50}\/[a-z0-9-]{1,50}$/

/**
 * GET /api/me: the user's email plus all their progress, in ONE D1 call.
 * The LEFT JOIN returns one row per progress item (or a single row with NULLs
 * for a user with no progress yet), so a valid session always yields >= 1 row.
 */
export async function me(request: Request, env: Env) {
    const tokenHash = await sessionTokenHash(request)
    const hadCookie = /(^|;\s*)session=/.test(request.headers.get('Cookie') ?? '')

    if (tokenHash) {
        const { results } = await env.DB
            .prepare(`SELECT u.email, u.codigo, u.first_name, u.last_name, p.item, p.started_at, p.done_at
                      FROM sessions s
                      JOIN users u ON u.id = s.user_id
                      LEFT JOIN progress p ON p.user_id = s.user_id
                      WHERE s.token_hash = ? AND s.expires_at > ?`)
            .bind(tokenHash, now())
            .all<{ email: string, codigo: string | null, first_name: string, last_name: string } & { item: string | null, started_at: number | null, done_at: number | null }>()

        if (results.length > 0) {
            const progress: ProgressRow[] = results
                .filter(r => r.item !== null)
                .map(r => ({ item: r.item!, started_at: r.started_at!, done_at: r.done_at }))
            return Response.json(
                { email: results[0].email, firstName: results[0].first_name, lastName: results[0].last_name, progress, now: now(), admin: isAdmin(env, results[0].codigo) },
                { headers: { 'Cache-Control': 'no-store' } },
            )
        }
    }
    // Clear a dead cookie so the browser stops sending it.
    const headers: HeadersInit = hadCookie ? { 'Set-Cookie': clearCookie(request) } : {}
    return Response.json({ error: 'No autenticado.' }, { status: 401, headers })
}

/**
 * POST /api/progress  { item, action: "start" | "done" }
 * ONE D1 call: the session check is a subquery inside the write itself.
 *  - start: records when the user first opened the item (later opens change nothing).
 *  - done:  records when they pressed Done (keeps the first time if pressed twice).
 * Returns the item's row so the page can update without reloading progress.
 */
export async function recordProgress(request: Request, env: Env) {
    let body: { item?: unknown, action?: unknown }
    try {
        body = await request.json()
    } catch {
        return Response.json({ error: 'Solicitud inválida.' }, { status: 400 })
    }
    const item = typeof body.item === 'string' ? body.item : ''
    const action = body.action
    if (!ITEM_FORMAT.test(item) || (action !== 'start' && action !== 'done')) {
        return Response.json({ error: 'Solicitud inválida.' }, { status: 400 })
    }

    const tokenHash = await sessionTokenHash(request)
    if (!tokenHash) return Response.json({ error: 'No autenticado.' }, { status: 401 })

    const t = now()
    const row = await progressWrite(env, tokenHash, item, action, t).first<ProgressRow>()

    if (!row) return Response.json({ error: 'No autenticado.' }, { status: 401 })
    return Response.json({ row, now: t })
}

/**
 * The progress write, as a statement so other endpoints can put it in their own
 * batch (see worker/evaluations.ts). INSERT ... SELECT from sessions: no valid
 * session means the SELECT finds no row, nothing is written, and RETURNING
 * gives back nothing.
 */
export function progressWrite(env: Env, tokenHash: string, item: string, action: 'start' | 'done', t: number) {
    const doneAt = action === 'done' ? t : null
    return env.DB
        .prepare(`INSERT INTO progress (user_id, item, started_at, done_at)
                  SELECT user_id, ?, ?, ? FROM sessions WHERE token_hash = ? AND expires_at > ?
                  ON CONFLICT (user_id, item) DO UPDATE SET
                      done_at = COALESCE(progress.done_at, excluded.done_at)
                  RETURNING item, started_at, done_at`)
        .bind(item, t, doneAt, tokenHash, t)
}
