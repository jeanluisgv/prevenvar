// /inicio: welcome page after logging in, with a button that takes the user to
// the first step (subsection or evaluation) they haven't completed yet.

import { Link } from 'react-router-dom'
import { useProgress } from './progress'

function Home() {
    const { items } = useProgress()
    // The first unlocked step that isn't complete (null = all finished).
    const current = items.find(i => i.unlocked && !i.complete) ?? null
    const started = items.some(i => i.startedAt !== null)

    return (
        <div className="max-w-3xl flex flex-col items-start gap-5">
            <h1 className="text-[25px] font-semibold">IGUALDAD LABORAL, IGUALDAD DE GÉNERO, NO DISCRIMINACIÓN Y TRABAJO DE IGUAL VALOR</h1>
            <h3>
                <strong>Duración Total:</strong> 40 Horas
            </h3>
            {current ? (
                <>

                    <p>Estás en <strong>{current.section.title}: {current.title}</strong>.</p>
                    <Link
                        to={current.path}
                        className="px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600"
                    >
                        {started ? 'Continuar' : 'Empezar'}
                    </Link>
                </>
            ) : (
                <p>¡Terminaste todas las secciones!</p>
            )}
        </div>
    )
}

export default Home
