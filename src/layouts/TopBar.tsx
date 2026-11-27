/**
 * The bar at the top of every logged-in page (course and admin): whatever the
 * page puts on the left, the logo in the center, and on the right the user's
 * email, any extra links, and the logout button.
 */
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/prevenvarLogo.png'

type TopBarProps = {
    left: ReactNode
    /** Where the logo links to. */
    home: string
    email: string
    onLogout: () => void
    /** Extra links, shown between the email and the logout button. */
    children?: ReactNode
}

export const navLinkStyle = 'shrink-0 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200'

export default function TopBar({ left, home, email, onLogout, children }: TopBarProps) {
    return (
        // Three columns: the side ones share the leftover space equally, so the
        // logo stays exactly in the middle whatever is on the left or right.
        <nav className="sticky top-0 z-30 h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 border-b bg-white">
            <div className="flex items-center gap-3 min-w-0">{left}</div>

            <Link to={home} aria-label="Inicio">
                <img src={logo} alt="PREVENVAR" className="h-10 w-auto" />
            </Link>

            <div className="flex items-center justify-end gap-3 min-w-0">
                <span className="hidden lg:block truncate text-sm text-gray-600">{email}</span>
                {children}
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
