// The admin dashboard's data: fetched from /api/admin/data once (1 D1 call) and
// kept in this tab's memory. Going back and forth between the course and the
// dashboard reuses it; only "Recargar" (or reloading the page) fetches again.
// Not saved in localStorage on purpose: it's other people's personal data.

import { sections } from '../sections'
import { progressKey, sectionSteps, stepTitle } from '../sections/types'

export type AdminUser = { id: number, email: string, first_name: string, last_name: string, codigo: string, created_at: number }
export type AdminProgress = { user_id: number, item: string, started_at: number, done_at: number | null }
export type AdminEvaluation = { id: number, user_id: number, item: string, score: number, total: number, passed: number, created_at: number }
export type AdminData = { users: AdminUser[], progress: AdminProgress[], evaluations: AdminEvaluation[], now: number }

let cache: Promise<AdminData> | null = null

export function loadAdminData(refresh = false): Promise<AdminData> {
    if (refresh) cache = null
    cache ??= fetch('/api/admin/data').then(async res => {
        if (!res.ok) throw new Error(res.status === 403 ? 'No autorizado.' : 'No se pudo cargar.')
        return res.json() as Promise<AdminData>
    }).catch(err => {
        cache = null // allow a retry
        throw err
    })
    return cache
}

/** Every step of the course, in order: "<section>/<step>" → its title and position. */
export const STEPS = new Map(
    sections.flatMap(section => sectionSteps(section).map(step => [
        progressKey(section, step),
        { section: section.title, title: stepTitle(step) },
    ] as const)).map(([key, info], order) => [key, { ...info, order }]),
)

export const FINAL_EXAM_KEY = 'modulo5/final-eval'

/** "25 nov 2026, 14:03" in the admin's time zone, or "—". */
export function formatDate(seconds: number | null): string {
    if (seconds === null) return '—'
    return new Date(seconds * 1000).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' })
}
