// Recording evaluation attempts, for evaluations with `recordEvaluation: true`
// (see src/sections/types.ts). Evaluations without it keep using /api/progress.

import { sessionTokenHash, now } from './session'
import { ITEM_FORMAT, progressWrite, type ProgressRow } from './progress'
// Plenty for dozens of questions; stops anyone filling the table with junk.
const MAX_ANSWERS_LENGTH = 20_000

const isCount = (n: unknown): n is number => Number.isInteger(n) && (n as number) >= 0 && (n as number) <= 1000

/**
 * POST /api/evaluations  { item, answers, score, total, passed }
 * ONE D1 call (a batch), or 0 on bad input:
 *  - saves the attempt in `evaluations` (passed or failed),
 *  - if passed, also marks the evaluation done in `progress`, so passing
 *    doesn't need a second request to /api/progress.
 * Both statements check the session inside the SQL, like /api/progress.
 * Returns the progress row when passed, so the page can unlock the next step.
 */
export async function recordEvaluation(request: Request, env: Env) {
    let body: { item?: unknown, answers?: unknown, score?: unknown, total?: unknown, passed?: unknown }
    try {
        body = await request.json()
    } catch {
        return Response.json({ error: 'Solicitud inválida.' }, { status: 400 })
    }
    const { item, answers, score, total, passed } = body
    if (
        // "<sectionId>/<evaluation id>": evaluations can sit anywhere in a section.
        typeof item !== 'string' || !ITEM_FORMAT.test(item)
        || typeof answers !== 'string' || answers.length > MAX_ANSWERS_LENGTH
        || !isCount(score) || !isCount(total) || score > total
        || typeof passed !== 'boolean'
    ) {
        return Response.json({ error: 'Solicitud inválida.' }, { status: 400 })
    }

    const tokenHash = await sessionTokenHash(request)
    if (!tokenHash) return Response.json({ error: 'No autenticado.' }, { status: 401 })

    const t = now()
    const statements = [
        env.DB.prepare(`INSERT INTO evaluations (user_id, item, answers, score, total, passed, created_at)
                        SELECT user_id, ?, ?, ?, ?, ?, ? FROM sessions WHERE token_hash = ? AND expires_at > ?`)
            .bind(item, answers, score, total, passed ? 1 : 0, t, tokenHash, t),
    ]
    if (passed) statements.push(progressWrite(env, tokenHash, item, 'done', t))

    const [saved, progress] = await env.DB.batch<ProgressRow>(statements)

    // No valid session: the SELECT found nothing, so nothing was written.
    if (saved.meta.changes === 0) return Response.json({ error: 'No autenticado.' }, { status: 401 })
    return Response.json({ row: progress?.results[0] ?? null, now: t })
}
