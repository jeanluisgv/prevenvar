// "¿Olvidaste tu contraseña?" page (/recuperar).
// The user proves who they are with the same nombre, apellido, email and
// código they registered with, and picks a new password. No email is sent.
// Checked on the server by POST /api/reset-password (worker/index.ts).
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logo from './assets/prevenvarLogo.png'
import { validateEmail, validatePassword, validateFirstName, validateLastName, validateCodigo } from './validation'

type Field = 'firstName' | 'lastName' | 'email' | 'codigo' | 'password' | 'passwordConfirm'

const FIELDS: { key: Field, label: string, type: string, autoComplete: string }[] = [
    { key: 'firstName', label: 'Nombre', type: 'text', autoComplete: 'given-name' },
    { key: 'lastName', label: 'Apellido', type: 'text', autoComplete: 'family-name' },
    { key: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    { key: 'codigo', label: 'Codigo', type: 'text', autoComplete: 'off' },
    { key: 'password', label: 'Nueva contraseña', type: 'password', autoComplete: 'new-password' },
    { key: 'passwordConfirm', label: 'Confirmar nueva contraseña', type: 'password', autoComplete: 'new-password' },
]

const EMPTY: Record<Field, string> = { firstName: '', lastName: '', email: '', codigo: '', password: '', passwordConfirm: '' }

export default function RecuperarContrasena() {
    const navigate = useNavigate()
    const btn_style = "px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600 "
    const input_style = "w-full px-3 py-2 border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    const error_style = "text-sm text-red-600 self-start"

    const [values, setValues] = useState(EMPTY)
    const [errors, setErrors] = useState({ ...EMPTY, form: '' })
    const [submitting, setSubmitting] = useState(false)
    const [done, setDone] = useState(false)

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()

        const newErrors = {
            firstName: validateFirstName(values.firstName),
            lastName: validateLastName(values.lastName),
            email: validateEmail(values.email),
            codigo: validateCodigo(values.codigo),
            password: validatePassword(values.password),
            passwordConfirm: values.password !== values.passwordConfirm ? 'Las contraseñas no coinciden.' : '',
            form: '',
        }
        setErrors(newErrors)
        if (Object.values(newErrors).some(Boolean) || submitting) return

        setSubmitting(true)
        try {
            const { passwordConfirm: _, ...body } = values
            const res = await fetch('/api/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (res.ok) {
                setDone(true)
                return
            }
            const data = await res.json().catch(() => ({}))
            setErrors({ ...newErrors, form: data.error ?? 'No se pudo cambiar la contraseña. Intenta de nuevo.' })
        } catch {
            setErrors({ ...newErrors, form: 'No se pudo conectar con el servidor.' })
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-white px-4 py-8">
            <img src={logo} alt="PREVENVAR" className="h-24 w-auto max-w-full" />
            <div className="w-full max-w-sm px-4 border-2 border-black rounded-lg">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-xl font-semibold pt-5">Recuperar contraseña</h1>
                    {!done && (
                        <p className="pt-2 text-sm text-gray-600">
                            Escriba los mismos datos que usó al registrarse y elija una nueva contraseña.
                        </p>
                    )}
                </div>

                {done ? (
                    <div className="flex flex-col items-center gap-4 p-5 text-center">
                        <p className="text-green-700">✅ Su contraseña fue cambiada. Ya puede iniciar sesión con la nueva contraseña.</p>
                        <button className={btn_style} type="button" onClick={() => navigate('/')}>Iniciar Sesion</button>
                    </div>
                ) : (
                    <form className="flex flex-col items-center" onSubmit={handleSubmit} noValidate>
                        {FIELDS.map(f => (
                            <div key={f.key} className="pt-4 w-full">
                                <label className="flex flex-col items-center gap-2 w-full">
                                    <p className="text-xl">{f.label}</p>
                                    <input
                                        className={input_style}
                                        name={f.key}
                                        type={f.type}
                                        autoComplete={f.autoComplete}
                                        value={values[f.key]}
                                        onChange={e => setValues(v => ({ ...v, [f.key]: e.target.value }))}
                                        aria-invalid={!!errors[f.key]}
                                    />
                                    {errors[f.key] && <p className={error_style}>{errors[f.key]}</p>}
                                </label>
                            </div>
                        ))}
                        {errors.form && <p className="pt-4 text-sm text-red-600">{errors.form}</p>}
                        <div className="p-5">
                            <button className={btn_style} type="submit" disabled={submitting}>
                                {submitting ? 'Cambiando…' : 'Cambiar contraseña'}
                            </button>
                        </div>
                        <button type="button" onClick={() => navigate('/')} className="pb-5 text-sm text-blue-800 hover:underline">
                            Volver a Iniciar Sesion
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}
