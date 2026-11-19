/**
 * Frontend - Layout.tsx
 * ------------------------------
 * Purpose: Shell for every page that needs a logged-in user.
 *
 * - Checks the session once (src/auth.ts); sends visitors who aren't logged
 *   in back to the login page.
 * - Provides the user's progress to the sidebar and pages.
 * - Renders the top bar, the sidebar, and the current page (<Outlet />).
 *
 * It's used as a parent route in App.tsx, so it stays mounted while the user
 * moves between pages: the sidebar keeps its open/closed state.
 */

import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavigationBar from './NavigationBar.tsx'
import SideBar from './SideBar.tsx'
import { getSession, setSessionFromResponse, type SessionData } from '../auth'
import { ProgressProvider } from '../progress'

const isDesktop = () => window.matchMedia('(min-width: 768px)').matches

export default function Layout() {
    const navigate = useNavigate()
    const [session, setSession] = useState<SessionData | null>(null)
    // Open by default on wide screens; on phones it starts closed so it
    // doesn't cover the page.
    const [sidebarOpen, setSidebarOpen] = useState(isDesktop)

    useEffect(() => {
        let cancelled = false
        getSession().then(s => {
            if (cancelled) return
            if (s) setSession(s)
            else navigate('/', { replace: true })
        })
        return () => { cancelled = true }
    }, [navigate])

    async function logOut() {
        await fetch('/api/logout', { method: 'POST' }).catch(() => { })
        setSessionFromResponse(null)
        navigate('/', { replace: true })
    }

    if (!session) return null // still checking the session

    return (
        <ProgressProvider session={session}>
            <div className="min-h-screen flex flex-col bg-gray-200">
                <NavigationBar
                    sidebarOpen={sidebarOpen}
                    onToggleSidebar={() => setSidebarOpen(o => !o)}
                    email={session.email}
                    onLogout={logOut}
                />
                <div className="flex flex-1">
                    <SideBar
                        open={sidebarOpen}
                        onNavigate={() => { if (!isDesktop()) setSidebarOpen(false) }}
                    />
                    {/* On phones the sidebar floats over the page; tapping outside closes it. */}
                    {sidebarOpen && (
                        <div
                            className="fixed bottom-0 left-0 right-0 top-16 z-10 bg-black/30 md:hidden"
                            onClick={() => setSidebarOpen(false)}
                            aria-hidden="true"
                        />
                    )}
                    <main className="flex-1 min-w-0 p-4 md:p-8">
                        {/* Pages are a readable-width column, centered in the space next to the sidebar. */}
                        <div className="mx-auto w-full max-w-3xl">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </ProgressProvider>
    )
}
