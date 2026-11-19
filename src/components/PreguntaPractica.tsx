// A practice question to put anywhere inside a subsection's content.
// Unlike an evaluation, it isn't saved and doesn't lock anything: the user picks
// an answer, sees right/wrong and the explanation, and can try again.
//
//   <PreguntaPractica
//       contexto="María descubre que la empresa no la ha afiliado al IESS durante ocho meses."
//       pregunta="¿A qué organismo puede acudir inicialmente?"
//       opciones={['Registro Civil', 'Ministerio del Trabajo', 'ANT', 'Municipio']}
//       correcta="Ministerio del Trabajo"
//       explicacion="El Ministerio del Trabajo es la entidad competente para…"
//   />
//
// Options are lettered a), b), c)… automatically, in the order given.

import { useState, type ReactNode } from 'react'

type Props = {
    /** Optional story or situation shown before the question. Text or JSX. */
    contexto?: ReactNode
    pregunta: ReactNode
    opciones: string[]
    /** The right option's text, exactly as written in `opciones`. */
    correcta: string
    /** Shown after answering ("¿Por qué?"). Optional. */
    explicacion?: ReactNode
}

const letra = (i: number) => String.fromCharCode(97 + i) // 0 → "a"

export default function PreguntaPractica({ contexto, pregunta, opciones, correcta, explicacion }: Props) {
    const [seleccion, setSeleccion] = useState<string | null>(null)

    const respondida = seleccion !== null
    const acerto = seleccion === correcta
    const letraCorrecta = letra(opciones.indexOf(correcta))

    if (import.meta.env.DEV && !opciones.includes(correcta)) {
        console.error(`PreguntaPractica: la respuesta correcta "${correcta}" no está entre las opciones.`)
    }

    const estiloOpcion = (op: string) => {
        if (!respondida) return 'border-gray-300 hover:bg-gray-100 cursor-pointer'
        if (op === correcta) return 'border-green-600 bg-green-100'
        if (op === seleccion) return 'border-red-600 bg-red-100'
        return 'border-gray-200 opacity-60'
    }

    return (
        <div className="leading-7">
            <p>
                {contexto && <>{contexto} <br /></>}
                <strong>Pregunta:</strong> {pregunta}
            </p>

            <div className="flex flex-col gap-2 my-4">
                {opciones.map((op, i) => (
                    <button
                        key={op}
                        type="button"
                        disabled={respondida}
                        onClick={() => setSeleccion(op)}
                        className={`text-left border rounded-lg px-4 py-2 transition ${estiloOpcion(op)}`}
                    >
                        {letra(i)}) {op}
                        {respondida && op === correcta && ' ✅'}
                        {respondida && op === seleccion && !acerto && ' ❌'}
                    </button>
                ))}
            </div>

            {respondida && (
                <div className={`rounded-lg p-4 border ${acerto ? 'border-green-600 bg-green-50' : 'border-red-600 bg-red-50'}`}>
                    {acerto ? (
                        <p><strong>¡Correcto! 🎉</strong></p>
                    ) : (
                        <p>
                            <strong>Incorrecto.</strong> La respuesta correcta es{' '}
                            <strong>{letraCorrecta}) {correcta}</strong>.
                        </p>
                    )}
                    {explicacion && <p><strong>¿Por qué?</strong> {explicacion}</p>}
                    <button type="button" onClick={() => setSeleccion(null)} className="mt-3 underline">
                        Intentar de nuevo
                    </button>
                </div>
            )}
        </div>
    )
}
