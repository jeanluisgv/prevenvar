/**
 * Frontend - NavigationBar.tsx
 * ------------------------------
 * Purpose: Top navigation bar: hamburger to show/hide the sidebar, where the
 * user is (section title, linking to it), the logo in the center, and the
 * logged-in user's email and logout button on the right.
 */
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom'
import TopBar, { navLinkStyle } from './TopBar'
import { sections } from '../sections'
import { sectionPath } from '../sections/types'

type NavigationBarProps = {
    sidebarOpen: boolean
    onToggleSidebar: () => void
    email: string
    /** Shows a link to the admin dashboard. */
    admin: boolean
    onLogout: () => void
}

/** The section the URL is in (its page or one of its steps), or null on Inicio. */
function currentSection(pathname: string) {
    return sections.find(s => pathname === sectionPath(s) || pathname.startsWith(`${sectionPath(s)}/`)) ?? null
}

export default function NavigationBar({ sidebarOpen, onToggleSidebar, email, admin, onLogout }: NavigationBarProps) {
    const { pathname } = useLocation()
    const section = currentSection(pathname)

    return (
        <TopBar
            home="/inicio"
            email={email}
            onLogout={onLogout}
            left={<>
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
            </>}
        >
            {admin && <Link to="/admin/datos" className={navLinkStyle}>Panel</Link>}
        </TopBar>
    )
}
