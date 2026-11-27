// A generic table for the admin dashboard: click a header to sort (click again
// to reverse), type to search, optional checkboxes to select rows, and optional
// rows that open (arrow) to show their own rows underneath.
// Everything happens on the data already in memory: no requests.

import { Fragment, useMemo, useState, type ReactNode } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

/** What a cell sorts and searches by. null = empty (no date yet, etc.). */
export type CellValue = string | number | null

export type Column<T> = {
    label: string
    /** The value used to sort and search. */
    value: (row: T) => CellValue
    /** What's shown, if not just the value (e.g. a formatted date). */
    display?: (row: T) => ReactNode
    /** Text searched, if not the value (e.g. the formatted date). */
    searchText?: (row: T) => string
    /** With `subRows`: the open/close arrow goes in this column. */
    toggle?: boolean
}

type Selection<T> = { id: (row: T) => number, selected: Set<number>, onChange: (selected: Set<number>) => void }

type Props<T> = {
    rows: T[]
    columns: Column<T>[]
    /** Unique per row (React needs it to tell rows apart). */
    rowKey: (row: T) => string | number
    /** Show checkboxes; `id` is what gets selected. */
    selection?: Selection<T>
    /**
     * Makes each row openable: these rows appear under it, in the same columns.
     * Sorting orders the rows and, inside each open row, its sub-rows.
     * Searching keeps a row if it or any of its sub-rows match.
     */
    subRows?: (row: T) => T[]
}

/** Lowercase, no accents: "José" is found by typing "jose". */
const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('es')

/**
 * Order of two cell values for an ascending sort (negative: a first).
 * Numbers and dates are numbers; text is Spanish text (Ñ, accents, any case).
 * Assumes each column's `value` returns one type (or null); if a column ever
 * mixes them, they're compared as text so it still sorts without crashing.
 * Empty values (null) are handled by the caller, so they stay last either way.
 */
export function compareValues(a: string | number, b: string | number): number {
    if (typeof a === 'number' && typeof b === 'number') return a - b
    return String(a).localeCompare(String(b), 'es', { sensitivity: 'base', numeric: true })
}

/** What a cell is searched by: its `searchText`, else its value. */
export const cellText = <T,>(c: Column<T>, row: T) => c.searchText?.(row) ?? String(c.value(row) ?? '')

/** What a cell shows: its `display`, else its value, else "—". */
export const cellContent = <T,>(c: Column<T>, row: T) => (c.display ? c.display(row) : (c.value(row) ?? '—'))

/** A copy of `set` with `key` added, or removed if it was there. */
function toggled<K>(set: Set<K>, key: K): Set<K> {
    const next = new Set(set)
    if (next.has(key)) next.delete(key)
    else next.add(key)
    return next
}

export default function DataTable<T>({ rows, columns, rowKey, selection, subRows }: Props<T>) {
    const [sort, setSort] = useState<{ col: number, dir: 1 | -1 } | null>(null)
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState<Set<string | number>>(new Set())

    // Each visible row with its visible sub-rows (empty without `subRows`),
    // both searched and sorted.
    const visible = useMemo(() => {
        const q = fold(query.trim())
        const matches = (row: T) => q === '' || columns.some(c => fold(cellText(c, row)).includes(q))
        // Sorts anything that holds a row (rows themselves, or {row, children})
        // by the sorted column, so rows and sub-rows follow the same rule.
        const ordered = <X,>(list: X[], rowOf: (x: X) => T): X[] => {
            if (!sort) return list
            const value = columns[sort.col].value
            // Copy first: sort() changes the array in place.
            return [...list].sort((xa, xb) => {
                const a = value(rowOf(xa)), b = value(rowOf(xb))
                // Empty cells go last in both directions, so flipping the sort
                // doesn't bury the real values under a pile of "—".
                if (a === null || b === null) return a === b ? 0 : a === null ? 1 : -1
                return compareValues(a, b) * sort.dir
            })
        }
        const found = rows.flatMap(row => {
            const all = subRows?.(row) ?? []
            // A row that matches shows all its sub-rows; otherwise only the matching ones.
            const children = matches(row) ? all : all.filter(matches)
            return matches(row) || children.length > 0 ? [{ row, children: ordered(children, r => r) }] : []
        })
        return ordered(found, f => f.row)
    }, [rows, columns, query, sort, subRows])

    const toggleOpen = (key: string | number) => setOpen(prev => toggled(prev, key))

    function toggleSort(col: number) {
        setSort(s => (s?.col === col ? { col, dir: s.dir === 1 ? -1 : 1 } : { col, dir: 1 }))
    }

    const visibleIds = selection ? visible.map(v => selection.id(v.row)) : []
    const allSelected = selection !== undefined && visibleIds.length > 0 && visibleIds.every(id => selection.selected.has(id))

    function toggleAll() {
        if (!selection) return
        const next = new Set(selection.selected)
        for (const id of visibleIds) {
            if (allSelected) next.delete(id)
            else next.add(id)
        }
        selection.onChange(next)
    }

    const toggleOne = (id: number) => selection?.onChange(toggled(selection.selected, id))

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
                <input
                    type="search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Buscar…"
                    aria-label="Buscar en la tabla"
                    className="w-full sm:w-72 px-3 py-2 border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">{visible.length} de {rows.length} filas</span>
            </div>

            <div className="overflow-x-auto rounded-lg border-2 border-gray-300 bg-white">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            {selection && (
                                <th className="w-10 px-3 py-2">
                                    <input type="checkbox" checked={allSelected} onChange={toggleAll} aria-label="Seleccionar todas las filas visibles" className="h-4 w-4" />
                                </th>
                            )}
                            {columns.map((c, i) => (
                                <th
                                    key={c.label}
                                    className="px-3 py-2 font-semibold whitespace-nowrap"
                                    aria-sort={sort?.col === i ? (sort.dir === 1 ? 'ascending' : 'descending') : 'none'}
                                >
                                    <button type="button" onClick={() => toggleSort(i)} className="hover:underline">
                                        {c.label}{sort?.col === i ? (sort.dir === 1 ? ' ▲' : ' ▼') : ''}
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {visible.map(({ row, children }) => {
                            const key = rowKey(row)
                            const id = selection?.id(row) ?? 0
                            const checked = selection?.selected.has(id) ?? false
                            // While searching, rows open by themselves to show what matched.
                            const isOpen = subRows !== undefined && (open.has(key) || query.trim() !== '')
                            return (
                                <Fragment key={key}>
                                    <tr className={`border-t ${checked ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                                        {selection && (
                                            <td className="px-3 py-2">
                                                <input type="checkbox" checked={checked} onChange={() => toggleOne(id)} aria-label="Seleccionar fila" className="h-4 w-4" />
                                            </td>
                                        )}
                                        {columns.map(c => (
                                            <td key={c.label} className="px-3 py-2 whitespace-nowrap">
                                                {subRows && c.toggle ? (
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleOpen(key)}
                                                        aria-expanded={isOpen}
                                                        aria-label={isOpen ? 'Ocultar filas' : 'Mostrar filas'}
                                                        className="flex items-center gap-2 text-left hover:underline"
                                                    >
                                                        {isOpen ? <FaChevronDown aria-hidden="true" /> : <FaChevronRight aria-hidden="true" />}
                                                        {cellContent(c, row)}
                                                    </button>
                                                ) : cellContent(c, row)}
                                            </td>
                                        ))}
                                    </tr>
                                    {isOpen && children.map(child => (
                                        <tr key={rowKey(child)} className="bg-gray-50 text-gray-700">
                                            {selection && <td />}
                                            {columns.map(c => (
                                                // pl-9 lines the sub-rows up with the text after the arrow.
                                                <td key={c.label} className={`py-1.5 whitespace-nowrap ${c.toggle ? 'pl-9 pr-3' : 'px-3'}`}>
                                                    {cellContent(c, child)}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </Fragment>
                            )
                        })}
                        {visible.length === 0 && (
                            <tr>
                                <td colSpan={columns.length + (selection ? 1 : 0)} className="px-3 py-6 text-center text-gray-600">
                                    Sin resultados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
