// Shell for the admin pages (/admin and /admin/datos): only admins get in.
// Not logged in → login page. Logged in but not an admin → the course.
// Full width and no sidebar, so wide tables have room.

import { NavLink, Outlet } from 'react-router-dom'
import TopBar, { navLinkStyle } from '../layouts/TopBar'
import { useLogOut, useRequiredSession } from '../layouts/useAccount'

const link = ({ isActive }: { isActive: boolean }) => `${navLinkStyle} ${isActive ? 'bg-gray-200' : ''}`

export default function AdminLayout() {
    const session = useRequiredSession({ adminOnly: true })
    const logOut = useLogOut()

    if (!session) return null

    return (
        <div className="min-h-screen flex flex-col bg-gray-200">
            <TopBar
                home="/admin"
                email={session.email}
                onLogout={logOut}
                left={<>
                    <NavLink to="/inicio" className={link}>Curso</NavLink>
                    <NavLink to="/admin/datos" className={link}>Panel</NavLink>
                </>}
            />
            <main className="flex-1 min-w-0 p-4 md:p-8">
                <Outlet />
            </main>
        </div>
    )
}
