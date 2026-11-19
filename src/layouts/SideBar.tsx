/**
 * Frontend - SideBar.tsx
 * ------------------------------
 * Purpose: Navigation built from the sections list (src/sections/index.ts).
 * Nothing about specific sections is written here: add a section, subsection
 * or evaluation in its file and it shows up automatically, locked or unlocked
 * per the rules in src/progress.tsx.
 *
 * Each section can be collapsed or expanded with its arrow. The section the
 * user is in opens by itself; the others start collapsed.
 */
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaLock, FaCheckCircle, FaChevronRight } from 'react-icons/fa'
import { sections } from '../sections'
import { sectionPath } from '../sections/types'
import { useProgress } from '../progress'
import StepIcon from '../pages/StepIcon'

type SideBarProps = {
    open: boolean
    /** Called after a link is clicked, so the mobile overlay can close. */
    onNavigate: () => void
}

const linkBase = 'flex items-center gap-2 rounded-lg px-3 py-2'
const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? 'bg-blue-800 text-white' : 'hover:bg-gray-300'}`
const lockedClass = `${linkBase} text-gray-400 cursor-not-allowed`

/** The id of the section the URL is in (its page or one of its steps), or null. */
function currentSectionId(pathname: string): string | null {
    const section = sections.find(s => pathname === sectionPath(s) || pathname.startsWith(`${sectionPath(s)}/`))
    return section?.id ?? null
}

export default function SideBar({ open, onNavigate }: SideBarProps) {
    const { items, isSectionUnlocked, isSectionComplete } = useProgress()
    const { pathname } = useLocation()
    const current = currentSectionId(pathname)

    // Ids of the expanded sections. Starts with the current one.
    const [expanded, setExpanded] = useState(() => new Set(current ? [current] : []))
    const setOpen = (id: string, isOpen: boolean) => setExpanded(prev => {
        if (prev.has(id) === isOpen) return prev
        const next = new Set(prev)
        if (isOpen) next.add(id)
        else next.delete(id)
        return next
    })

    // Moving into another section (sidebar, "next step" link, back button) opens it.
    useEffect(() => {
        if (current) setOpen(current, true)
    }, [current])

    return (
        <aside
            id="sidebar"
            aria-label="Secciones"
            hidden={!open}
            className="fixed bottom-0 left-0 top-16 z-20 w-64 overflow-y-auto border-r bg-gray-100 p-3
                       md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:shrink-0"
        >
            <ul className="flex flex-col gap-3">
                {sections.map(section => {
                    const isOpen = expanded.has(section.id)
                    const listId = `sidebar-steps-${section.id}`
                    return (
                        <li key={section.id}>
                            <div className="flex items-start gap-1">
                                <button
                                    type="button"
                                    onClick={() => setOpen(section.id, !isOpen)}
                                    aria-expanded={isOpen}
                                    aria-controls={listId}
                                    aria-label={`${isOpen ? 'Contraer' : 'Expandir'} ${section.title}`}
                                    className="mt-1 shrink-0 rounded-md p-2 text-gray-600 hover:bg-gray-300"
                                >
                                    <FaChevronRight
                                        aria-hidden="true"
                                        className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                                    />
                                </button>

                                <div className="min-w-0 flex-1">
                                    {isSectionUnlocked(section) ? (
                                        <NavLink
                                            to={sectionPath(section)}
                                            end
                                            className={linkClass}
                                            onClick={() => { setOpen(section.id, true); onNavigate() }}
                                        >
                                            {isSectionComplete(section)
                                                ? <FaCheckCircle className="shrink-0 text-green-600" aria-label="Completada" />
                                                : null}
                                            <span className="font-semibold">{section.title}</span>
                                        </NavLink>
                                    ) : (
                                        <span className={lockedClass} aria-disabled="true">
                                            <FaLock className="shrink-0" aria-label="Bloqueada" />
                                            <span className="font-semibold">{section.title}</span>
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* The section's steps (subsections and evaluations), in order. */}
                            <ul
                                id={listId}
                                hidden={!isOpen}
                                className="mt-1 ml-9 flex flex-col gap-1 border-l border-gray-300 pl-2"
                            >
                                {items.filter(item => item.section === section).map(item => (
                                    <li key={item.key}>
                                        {item.unlocked ? (
                                            <NavLink to={item.path} className={p => `${linkClass(p)} text-sm`} onClick={onNavigate}>
                                                <StepIcon item={item} />
                                                {item.title}
                                            </NavLink>
                                        ) : (
                                            <span className={`${lockedClass} text-sm`} aria-disabled="true">
                                                <StepIcon item={item} />
                                                {item.title}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}
