// /admin/datos: the database, as three tables (users, progress, evaluations).
// Loaded once (1 D1 call, see data.ts); sorting, searching and selecting run on
// that copy. Selecting users in "Usuarios" limits the other two tabs to them.

import { useEffect, useMemo, useState } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import DataTable, { cellContent, cellText, type Column } from './DataTable'
import {
    FINAL_EXAM_KEY, STEPS, formatDate, loadAdminData,
    type AdminData, type AdminEvaluation, type AdminProgress, type AdminUser,
} from './data'

type Tab = 'usuarios' | 'progreso' | 'evaluaciones'

const btn_style = 'px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600 text-sm disabled:opacity-50'
const tabStyle = (active: boolean) =>
    `px-4 py-2 rounded-t-lg text-sm font-semibold border-2 border-b-0 ${active ? 'bg-white border-gray-300' : 'border-transparent hover:bg-gray-100'}`

/** A user row plus the numbers worked out from their progress. */
type UserSummary = AdminUser & { done: number, finalExam: number | null }

/**
 * A row of the Progreso tab. The top row of each user sums up their progress:
 * `item` is the furthest step they've opened, `started_at` the first time they
 * opened anything, `done_at` the last time they finished something. `steps`
 * (only on that top row) are their real rows, shown when it's opened.
 */
type ProgressView = AdminProgress & { steps?: AdminProgress[] }

/** A user's summary row for the Progreso tab, from their (non-empty) steps. */
function summarize(user_id: number, steps: AdminProgress[]): ProgressView {
    const done = steps.map(s => s.done_at).filter((t): t is number => t !== null)
    return {
        user_id,
        item: steps.reduce((a, b) => (stepOrder(b.item) > stepOrder(a.item) ? b : a)).item,
        started_at: Math.min(...steps.map(s => s.started_at)),
        done_at: done.length > 0 ? Math.max(...done) : null,
        steps,
    }
}

const stepName = (item: string) => {
    const step = STEPS.get(item)
    return step ? `${step.section} · ${step.title}` : item // a step since removed from the course
}
// Sort steps in course order, not alphabetically. Unknown ones go last.
const stepOrder = (item: string) => STEPS.get(item)?.order ?? Number.MAX_SAFE_INTEGER

// Column builders, so each kind of column is defined in one place.

/** A timestamp: sorts by time, shows and searches the formatted date. */
const dateColumn = <R,>(label: string, get: (r: R) => number | null): Column<R> =>
    ({ label, value: get, display: r => formatDate(get(r)), searchText: r => formatDate(get(r)) })

/** A course step: sorts in course order, shows and searches its name. */
const stepColumn = <R,>(label: string, get: (r: R) => string): Column<R> =>
    ({ label, value: r => stepOrder(get(r)), display: r => stepName(get(r)), searchText: r => stepName(get(r)) })

/** Blank (and not searched) on a Progreso summary row; still sorts by its value. */
const stepRowsOnly = (col: Column<ProgressView>): Column<ProgressView> => ({
    ...col,
    display: p => (p.steps ? '' : cellContent(col, p)),
    searchText: p => (p.steps ? '' : cellText(col, p)),
})

const passedIcon = (ok: boolean) => ok
    ? <span className="flex items-center gap-1 text-green-700"><FaCheckCircle aria-hidden="true" /> Sí</span>
    : <span className="flex items-center gap-1 text-red-700"><FaTimesCircle aria-hidden="true" /> No</span>

export default function Dashboard() {
    const [data, setData] = useState<AdminData | null>(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [tab, setTab] = useState<Tab>('usuarios')
    const [selected, setSelected] = useState<Set<number>>(new Set())

    function load(refresh: boolean) {
        setLoading(true)
        setError('')
        loadAdminData(refresh)
            .then(setData)
            .catch((e: Error) => setError(e.message))
            .finally(() => setLoading(false))
    }
    useEffect(() => { load(false) }, [])

    const usersById = useMemo(() => new Map(data?.users.map(u => [u.id, u]) ?? []), [data])
    const userName = (id: number) => {
        const u = usersById.get(id)
        return u ? `${u.first_name} ${u.last_name}` : `#${id}`
    }
    const userColumn = <R extends { user_id: number }>(): Column<R> => ({ label: 'Usuario', value: r => userName(r.user_id) })

    // Each user's progress rows, grouped once for both the Usuarios and Progreso tabs.
    const progressByUser = useMemo(() => {
        const byUser = new Map<number, AdminProgress[]>()
        for (const p of data?.progress ?? []) {
            const list = byUser.get(p.user_id)
            if (list) list.push(p)
            else byUser.set(p.user_id, [p])
        }
        return byUser
    }, [data])

    const users: UserSummary[] = useMemo(() => (data?.users ?? []).map(u => {
        const mine = progressByUser.get(u.id) ?? []
        return {
            ...u,
            done: mine.filter(p => p.done_at !== null).length,
            finalExam: mine.find(p => p.item === FINAL_EXAM_KEY)?.done_at ?? null,
        }
    }), [data, progressByUser])

    // Selected users only, or everyone when nobody is selected.
    const isShown = (userId: number) => selected.size === 0 || selected.has(userId)
    const progress = useMemo(
        () => [...progressByUser].filter(([id]) => isShown(id)).map(([id, steps]) => summarize(id, steps)),
        [progressByUser, selected],
    )
    const evaluations = useMemo(() => (data?.evaluations ?? []).filter(e => isShown(e.user_id)), [data, selected])

    const userColumns: Column<UserSummary>[] = useMemo(() => [
        { label: 'ID', value: u => u.id },
        { label: 'Nombre', value: u => u.first_name },
        { label: 'Apellido', value: u => u.last_name },
        { label: 'Email', value: u => u.email },
        { label: 'Código', value: u => u.codigo },
        dateColumn('Registro', u => u.created_at),
        { label: 'Pasos hechos', value: u => u.done, display: u => `${u.done} / ${STEPS.size}` },
        dateColumn('Examen final', u => u.finalExam),
    ], [])

    const progressColumns: Column<ProgressView>[] = useMemo(() => [
        // The name only on the user's top row; their steps sit right under it.
        { ...userColumn<ProgressView>(), display: p => (p.steps ? userName(p.user_id) : '') },
        // On the top row these cells are blank (just the arrow): their values
        // only decide the order of the users when sorting by that column.
        { ...stepRowsOnly(stepColumn('Paso', p => p.item)), toggle: true },
        stepRowsOnly(dateColumn('Abierto', p => p.started_at)),
        stepRowsOnly(dateColumn('Hecho', p => p.done_at)),
    ], [usersById])

    const evaluationColumns: Column<AdminEvaluation>[] = useMemo(() => [
        userColumn<AdminEvaluation>(),
        stepColumn('Evaluación', e => e.item),
        { label: 'Puntaje', value: e => e.score / (e.total || 1), display: e => `${e.score} / ${e.total}`, searchText: e => `${e.score}/${e.total}` },
        { label: 'Aprobó', value: e => e.passed, display: e => passedIcon(e.passed === 1), searchText: e => (e.passed ? 'sí' : 'no') },
        dateColumn('Fecha', e => e.created_at),
    ], [usersById])

    if (!data) {
        return (
            <div className="mx-auto max-w-7xl flex flex-col items-start gap-3">
                {error ? <>
                    <p className="text-red-600">{error}</p>
                    <button className={btn_style} type="button" onClick={() => load(true)} disabled={loading}>Reintentar</button>
                </> : <p className="text-gray-600">Cargando…</p>}
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-7xl flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-[25px] font-semibold">Panel</h1>
                <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-gray-600">Datos de {formatDate(data.now)}</span>
                    <button className={btn_style} type="button" onClick={() => load(true)} disabled={loading}>
                        {loading ? 'Cargando…' : 'Recargar'}
                    </button>
                </div>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}

            {selected.size > 0 && (
                <div className="flex flex-wrap items-center gap-3 rounded-lg bg-blue-50 border-2 border-blue-200 px-4 py-2 text-sm">
                    <span>{selected.size} {selected.size === 1 ? 'usuario seleccionado' : 'usuarios seleccionados'}: progreso y evaluaciones muestran solo a ellos.</span>
                    <button type="button" onClick={() => setSelected(new Set())} className="text-blue-800 font-semibold hover:underline">
                        Quitar selección
                    </button>
                </div>
            )}

            <div role="tablist" className="flex gap-1 border-b-2 border-gray-300">
                {([
                    ['usuarios', `Usuarios (${data.users.length})`],
                    ['progreso', `Progreso (${progress.length})`],
                    ['evaluaciones', `Evaluaciones (${evaluations.length})`],
                ] as const).map(([id, label]) => (
                    <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={tabStyle(tab === id)}>
                        {label}
                    </button>
                ))}
            </div>

            {tab === 'usuarios' && (
                <DataTable rows={users} columns={userColumns} rowKey={u => u.id} selection={{ id: u => u.id, selected, onChange: setSelected }} />
            )}
            {tab === 'progreso' && (
                <>
                    <p className="text-sm text-gray-600">
                        Una fila por usuario; la flecha muestra sus pasos. Al ordenar, los usuarios se ordenan por
                        su paso más avanzado (Paso), el primero que abrió (Abierto) o el último que terminó (Hecho).
                    </p>
                    <DataTable
                        rows={progress}
                        columns={progressColumns}
                        rowKey={p => (p.steps ? `u${p.user_id}` : `${p.user_id}|${p.item}`)}
                        subRows={p => p.steps ?? []}
                    />
                </>
            )}
            {tab === 'evaluaciones' && (
                <DataTable rows={evaluations} columns={evaluationColumns} rowKey={e => e.id} />
            )}
        </div>
    )
}
