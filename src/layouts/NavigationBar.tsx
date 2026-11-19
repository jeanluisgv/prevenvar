/**
 * Frontend - NavigationBar.tsx
 * ------------------------------
 * Purpose: Top navigation bar: hamburger to show/hide the sidebar, where the
 * user is (section title, linking to it), the logo in the center, and the
 * logged-in user's email and logout button on the right.
 */
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/prevenvarLogo.svg'
import { sections } from '../sections'
import { sectionPath } from '../sections/types'

type NavigationBarProps = {
    sidebarOpen: boolean
    onToggleSidebar: () => void
    email: string
    onLogout: () => void
}

/** The section the URL is in (its page or one of its steps), or null on Inicio. */
function currentSection(pathname: string) {
    return sections.find(s => pathname === sectionPath(s) || pathname.startsWith(`${sectionPath(s)}/`)) ?? null
}

export default function NavigationBar({ sidebarOpen, onToggleSidebar, email, onLogout }: NavigationBarProps) {
    const { pathname } = useLocation()
    const section = currentSection(pathname)

    return (
        // Three columns: the side ones share the leftover space equally, so the
        // logo stays exactly in the middle whatever is on the left or right.
        <nav className="sticky top-0 z-30 h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 border-b bg-white">
            <div className="flex items-center gap-3 min-w-0">
                <button
                    type="button"
                    onClick={onToggleSidebar}
                    aria-label={sidebarOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={sidebarOpen}
                    aria-controls="sidebar"
                    className="shrink-0 p-2 rounded-lg hover:bg-gray-200"
                >
                    <GiHamburgerMenu className="h-6 w-6" />
                </button>
                <Link
                    to={section ? sectionPath(section) : '/inicio'}
                    className="hidden sm:block truncate text-lg font-semibold"
                >
                    {section ? section.title : 'Inicio'}
                </Link>
            </div>

            <Link to="/inicio" aria-label="Inicio">
                <img src={logo} alt="PREVENVAR" className="h-10 w-auto" />
            </Link>

            <div className="flex items-center justify-end gap-3 min-w-0">
                <span className="hidden lg:block truncate text-sm text-gray-600">{email}</span>
                <button
                    type="button"
                    onClick={onLogout}
                    className="shrink-0 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600 text-sm whitespace-nowrap"
                >
                    Cerrar Sesion
                </button>
            </div>
        </nav>
    )
}
