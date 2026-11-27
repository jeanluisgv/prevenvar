// /admin: where admins land after logging in. Pick the course or the dashboard.

import { Link } from 'react-router-dom'

const card = 'flex flex-col gap-2 rounded-lg border-2 border-gray-300 bg-white p-6 hover:border-blue-800'

export default function AdminHome() {
    return (
        <div className="mx-auto max-w-3xl flex flex-col gap-6">
            <h1 className="text-[25px] font-semibold">¿A dónde quieres ir?</h1>
            <div className="grid gap-4 sm:grid-cols-2">
                <Link to="/inicio" className={card}>
                    <span className="text-xl font-semibold">Curso</span>
                    <span className="text-gray-600">Ver las secciones como un participante (todo desbloqueado).</span>
                </Link>
                <Link to="/admin/datos" className={card}>
                    <span className="text-xl font-semibold">Panel</span>
                    <span className="text-gray-600">Usuarios, progreso y evaluaciones.</span>
                </Link>
            </div>
        </div>
    )
}
