// Shown when someone opens the URL of a section or subsection that is still locked.

import { Link } from 'react-router-dom'
import { FaLock } from 'react-icons/fa'

export default function LockedNotice() {
    return (
        <div className="max-w-3xl flex flex-col items-start gap-4">
            <h1 className="flex items-center gap-3 text-[25px] font-semibold">
                <FaLock aria-hidden="true" /> Todavía está bloqueado
            </h1>
            <p>Completa las partes anteriores para desbloquear esta.</p>
            <Link to="/inicio" className="px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600">
                Volver al inicio
            </Link>
        </div>
    )
}
