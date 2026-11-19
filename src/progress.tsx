// Unlock rules and the user's progress.
//
// All steps (subsections and evaluations), across all sections, form one chain
// in the order of sections/index.ts and each section's `subsections` list (a
// section's end-of-section `evaluation` comes last). The rules:
//   - The first step of the first section is always unlocked.
//   - A subsection is COMPLETE once the user has pressed "Done" on it AND at
//     least `waitSeconds` have passed since they first opened it.
//   - An evaluation is COMPLETE once the user passes it (no wait).
//   - Each step unlocks when the one before it is complete, so a step after an
//     evaluation (in the same section or the next) waits for it to be passed.
//   - A section is unlocked when its first step is.
//   - Admins: everything unlocked, no waits.
//
// Times come from the server, so changing the computer's clock can't skip a wait.

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { sections } from './sections'
import {
    isEvaluationStep, progressKey, sectionSteps, stepPath, stepTitle,
    type Section, type Subsection,
} from './sections/types'
import { updateCachedProgress, type ProgressRow, type SessionData } from './auth'

/** One step in the chain: a subsection, or a section's evaluation. */
export type ItemStatus = {
    key: string
    kind: 'subsection' | 'evaluation'
    section: Section
    /** The subsection, or null for an evaluation. */
    sub: Subsection | null
    title: string
    path: string
    waitSeconds: number
    unlocked: boolean
    /** When the user first opened it (server time, seconds), or null. */
    startedAt: number | null
    /** When the user pressed Done (or passed the evaluation), or null. */
    doneAt: number | null
    /** When it counts as complete (Done + wait), or null if not Done yet. */
    completeAt: number | null
    complete: boolean
    /** The next step in the chain, or null for the very last one. */
    next: ItemStatus | null
}

/**
 * Applies the rules above to the user's saved progress at time `now`.
 * `admin`: every step is unlocked and has no wait (progress is still saved).
 */
export function computeStatus(rows: Map<string, ProgressRow>, now: number, admin = false): ItemStatus[] {
    const items: ItemStatus[] = []
    for (const section of sections) {
        const steps: Pick<ItemStatus, 'key' | 'kind' | 'sub' | 'title' | 'path' | 'waitSeconds'>[] =
            sectionSteps(section).map(step => {
                const isEvaluation = isEvaluationStep(step)
                return {
                    key: progressKey(section, step),
                    kind: isEvaluation ? 'evaluation' : 'subsection',
                    sub: isEvaluation ? null : step,
                    title: stepTitle(step),
                    path: stepPath(section, step),
                    // An evaluation is complete as soon as it's passed.
                    waitSeconds: admin || isEvaluation ? 0 : step.waitSeconds ?? section.waitSeconds,
                }
            })
        for (const step of steps) {
            const row = rows.get(step.key)
            const prev = items[items.length - 1]
            const completeAt = row?.done_at != null ? Math.max(row.done_at, row.started_at + step.waitSeconds) : null
            const item: ItemStatus = {
                ...step,
                section,
                unlocked: admin || !prev || prev.complete,
                startedAt: row?.started_at ?? null,
                doneAt: row?.done_at ?? null,
                completeAt,
                complete: false,
                next: null,
            }
            item.complete = item.unlocked && completeAt !== null && completeAt <= now
            if (prev) prev.next = item
            items.push(item)
        }
    }
    return items
}

type ProgressContextValue = {
    /** The logged-in user (email, name, admin). */
    session: SessionData
    items: ItemStatus[]
    byKey: Map<string, ItemStatus>
    isSectionUnlocked: (section: Section) => boolean
    isSectionComplete: (section: Section) => boolean
    /** The server's current time in seconds. */
    serverNow: () => number
    /** Record that the user opened a subsection (only the first time costs a request). */
    start: (key: string) => void
    /** Record that the user pressed Done, or passed an evaluation. */
    markDone: (key: string) => Promise<void>
    /**
     * Save an evaluation attempt (for `recordEvaluation: true`). If it passed,
     * the same request also marks the evaluation done.
     */
    recordEvaluation: (key: string, attempt: EvaluationAttempt) => Promise<void>
}

export type EvaluationAttempt = { answers: string, score: number, total: number, passed: boolean }

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function useProgress(): ProgressContextValue {
    const value = useContext(ProgressContext)
    if (!value) throw new Error('useProgress must be used inside <ProgressProvider>')
    return value
}

export function ProgressProvider({ session, children }: { session: SessionData, children: ReactNode }) {
    const [rows, setRows] = useState(() => new Map(session.progress.map(r => [r.item, r])))
    const serverNow = useCallback(() => Date.now() / 1000 + session.clockOffset, [session.clockOffset])

    // Recompute only when something can actually change: when progress changes,
    // or at the exact moment the next pending wait finishes (not every second).
    const [tick, setTick] = useState(0)
    const items = useMemo(() => computeStatus(rows, serverNow(), session.admin), [rows, serverNow, tick, session.admin])
    useEffect(() => {
        const now = serverNow()
        const upcoming = items
            .filter(i => i.unlocked && !i.complete && i.completeAt !== null && i.completeAt > now)
            .map(i => i.completeAt!)
        if (upcoming.length === 0) return
        const ms = (Math.min(...upcoming) - now) * 1000 + 50
        const timer = setTimeout(() => setTick(t => t + 1), ms)
        return () => clearTimeout(timer)
    }, [items, serverNow])

    const byKey = useMemo(() => new Map(items.map(i => [i.key, i])), [items])

    // Both endpoints answer { row }: the item's updated progress, or null when
    // nothing changed (a failed evaluation attempt).
    const post = useCallback(async (url: string, body: object) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        if (!res.ok) throw new Error(`Save failed: ${url} (${res.status})`)
        const { row } = await res.json() as { row: ProgressRow | null }
        if (!row) return
        setRows(prev => {
            const nextRows = new Map(prev).set(row.item, row)
            updateCachedProgress([...nextRows.values()])
            return nextRows
        })
    }, [])

    const save = useCallback((key: string, action: 'start' | 'done') =>
        post('/api/progress', { item: key, action }), [post])

    const recordEvaluation = useCallback((key: string, attempt: EvaluationAttempt) =>
        post('/api/evaluations', { item: key, ...attempt }), [post])

    // Avoid sending "start" twice for the same item (e.g. StrictMode in dev).
    const starting = useRef(new Set<string>())
    const start = useCallback((key: string) => {
        if (rows.has(key) || starting.current.has(key)) return
        starting.current.add(key)
        save(key, 'start')
            .catch(err => console.error(err))
            .finally(() => starting.current.delete(key))
    }, [rows, save])

    const markDone = useCallback((key: string) => save(key, 'done'), [save])

    const value = useMemo<ProgressContextValue>(() => ({
        session,
        items,
        byKey,
        isSectionUnlocked: section => byKey.get(progressKey(section, section.subsections[0]))?.unlocked ?? false,
        isSectionComplete: section => items.every(i => i.section !== section || i.complete),
        serverNow,
        start,
        markDone,
        recordEvaluation,
    }), [session, items, byKey, serverNow, start, markDone, recordEvaluation])

    return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

/** "1:05" or "1:02:03". */
export function formatDuration(totalSeconds: number): string {
    const s = Math.max(0, Math.ceil(totalSeconds))
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = String(s % 60).padStart(2, '0')
    return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${sec}` : `${m}:${sec}`
}
