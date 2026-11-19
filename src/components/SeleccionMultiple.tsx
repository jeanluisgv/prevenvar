import { useState, type ReactNode } from 'react'

type Props = {
    /** Optional story or situation shown before the instruction. Text or JSX. */
    contexto?: ReactNode
    /** The instruction, e.g. "Seleccione los beneficios de la igualdad de género". */
    pregunta: ReactNode
    opciones: string[]
    /** Every correct option's text, exactly as written in `opciones`. */
    correctas: string[]
    /** Shown after checking ("¿Por qué?"). Optional. */
    explicacion?: ReactNode
}

export default function SeleccionMultiple({ contexto, pregunta, opciones, correctas, explicacion }: Props) {
    const [marcadas, setMarcadas] = useState<string[]>([])
    const [comprobado, setComprobado] = useState(false)

    if (import.meta.env.DEV) {
        const faltantes = correctas.filter((c) => !opciones.includes(c))
        if (faltantes.length) {
            console.error(`SeleccionMultiple: estas respuestas correctas no están entre las opciones: ${faltantes.join(', ')}`)
        }
    }

    const esCorrecta = (op: string) => correctas.includes(op)
    const marcada = (op: string) => marcadas.includes(op)

    const alternar = (op: string) => {
        if (comprobado) return
        setMarcadas((prev) => (prev.includes(op) ? prev.filter((o) => o !== op) : [...prev, op]))
    }

    // Todo bien = marcó todas las correctas y ninguna incorrecta
    const acerto =
        correctas.every((c) => marcadas.includes(c)) && marcadas.every((m) => correctas.includes(m))

    const estiloOpcion = (op: string) => {
        if (!comprobado) {
            return marcada(op)
                ? 'border-blue-600 bg-blue-50 cursor-pointer'
                : 'border-gray-300 hover:bg-gray-100 cursor-pointer'
        }
        if (esCorrecta(op)) return 'border-green-600 bg-green-100'
        if (marcada(op)) return 'border-red-600 bg-red-100'
        return 'border-gray-200 opacity-60'
    }

    // Icono que aparece después de comprobar
    const icono = (op: string) => {
        if (!comprobado) return null
        if (esCorrecta(op) && marcada(op)) return ' ✅'
        if (esCorrecta(op) && !marcada(op)) return ' ✅ (no la marcaste)'
        if (!esCorrecta(op) && marcada(op)) return ' ❌'
        return null
    }

    const reiniciar = () => {
        setMarcadas([])
        setComprobado(false)
    }

    return (
        <div className="leading-7">
            <p>
                {contexto && <>{contexto} <br /></>}
                <strong>Actividad:</strong> {pregunta}
            </p>
            <p className="text-sm text-gray-600">Puedes marcar más de una opción.</p>

            <div className="flex flex-col gap-2 my-4">
                {opciones.map((op) => (
                    <label
                        key={op}
                        className={`flex items-center gap-3 border rounded-lg px-4 py-2 transition ${estiloOpcion(op)}`}
                    >
                        <input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={marcada(op)}
                            disabled={comprobado}
                            onChange={() => alternar(op)}
                        />
                        <span>
                            {op}
                            {icono(op)}
                        </span>
                    </label>
                ))}
            </div>

            {!comprobado && (
                <button
                    type="button"
                    disabled={marcadas.length === 0}
                    onClick={() => setComprobado(true)}
                    className="border rounded-lg px-4 py-2 border-gray-400 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Comprobar
                </button>
            )}

            {comprobado && (
                <div className={`rounded-lg p-4 border ${acerto ? 'border-green-600 bg-green-50' : 'border-red-600 bg-red-50'}`}>
                    {acerto ? (
                        <p><strong>¡Correcto! 🎉</strong> Marcaste todas las opciones correctas.</p>
                    ) : (
                        <p>
                            <strong>Casi.</strong> Las respuestas correctas son:{' '}
                            <strong>{correctas.join(', ')}</strong>.
                        </p>
                    )}
                    {explicacion && <p><strong>¿Por qué?</strong> {explicacion}</p>}
                    <button type="button" onClick={reiniciar} className="mt-3 underline">
                        Intentar de nuevo
                    </button>
                </div>
            )}
        </div>
    )
}