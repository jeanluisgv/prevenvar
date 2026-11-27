// Shared by the course layout (Layout.tsx) and the admin one (admin/AdminLayout.tsx).

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSession, setSessionFromResponse, type SessionData } from '../auth'

/**
 * The logged-in user, or null while checking (render nothing until then).
 * Not logged in → login page. With `adminOnly`, a non-admin → the course.
 */
export function useRequiredSession({ adminOnly = false } = {}): SessionData | null {
    const navigate = useNavigate()
    const [session, setSession] = useState<SessionData | null>(null)

    useEffect(() => {
        let cancelled = false
        getSession().then(s => {
            if (cancelled) return
            if (!s) navigate('/', { replace: true })
            else if (adminOnly && !s.admin) navigate('/inicio', { replace: true })
            else setSession(s)
        })
        return () => { cancelled = true }
    }, [navigate, adminOnly])

    return session
}

/** Logs out (1 request) and goes back to the login page. */
export function useLogOut() {
    const navigate = useNavigate()
    return async function logOut() {
        await fetch('/api/logout', { method: 'POST' }).catch(() => { })
        setSessionFromResponse(null)
        navigate('/', { replace: true })
    }
}
