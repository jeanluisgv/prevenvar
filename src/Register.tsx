import { useNavigate } from 'react-router-dom'
import logo from './assets/prevenvarLogo.png'
import { useState } from 'react'
import { validateEmail, validatePassword, validateFirstName, validateLastName, validateCodigo } from './validation'
import { homePath, setSessionFromResponse } from './auth'


function Register() {

    const [showTip, setShowTip] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [codigo, setCodigo] = useState('')
    const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', password: '', passwordConfirm: '', codigo: '', form: '' })
    const [submitting, setSubmitting] = useState(false)

    const navigate = useNavigate()
    const btn_style = "px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600 "
    const input_style = "w-full px-3 py-2 border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    const error_style = "text-sm text-red-600 self-start"


    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault() // stop the browser from reloading the page

        const newErrors = {
            firstName: validateFirstName(firstName),
            lastName: validateLastName(lastName),
            email: validateEmail(email),
            password: validatePassword(password),
            codigo: validateCodigo(codigo),
            passwordConfirm: password !== passwordConfirm ? 'Las contraseñas no coinciden.' : '',
            form: '',
        }
        setErrors(newErrors)
        if (newErrors.firstName || newErrors.lastName || newErrors.email
            || newErrors.password || newErrors.passwordConfirm || newErrors.codigo || submitting) return

        setSubmitting(true)
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, email, password, codigo }),
            })
            if (res.ok) {
                const data = await res.json()
                setSessionFromResponse(data) // so the next page doesn't have to ask /api/me
                navigate(homePath({ admin: data.admin === true }))
                return
            }
            const data = await res.json().catch(() => ({}))
            if (res.status === 409) {
                setErrors({ ...newErrors, email: data.error ?? 'Ya existe una cuenta con ese email.' })
            } else {
                setErrors({ ...newErrors, form: data.error ?? 'No se pudo crear la cuenta. Intenta de nuevo.' })
            }
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
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-semibold pd-2 pt-5">
                        Registrate
                    </h1>
                </div>
                <form className="flex flex-col items-center" onSubmit={handleSubmit} noValidate>
                    <div className="pt-5 pb-2 w-full">
                        <label className="flex flex-col items-center gap-2 w-full ">
                            <p className="text-xl">Nombre</p>
                            <input
                                className={input_style}
                                name="first_name"
                                type="text"
                                autoComplete="given-name"
                                maxLength={100}
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                aria-invalid={!!errors.firstName}
                            />
                            {errors.firstName && <p className={error_style}>{errors.firstName}</p>}
                        </label>
                    </div>
                    <div className="pt-3 pb-2 w-full">
                        <label className="flex flex-col items-center gap-2 w-full ">
                            <p className="text-xl">Apellido</p>
                            <input
                                className={input_style}
                                name="last_name"
                                type="text"
                                autoComplete="family-name"
                                maxLength={100}
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                aria-invalid={!!errors.lastName}
                            />
                            {errors.lastName && <p className={error_style}>{errors.lastName}</p>}
                        </label>
                    </div>
                    <div className="pt-3 pb-2 w-full">
                        <label className="flex flex-col items-center gap-2 w-full ">
                            <p className="text-xl">Email</p>
                            <input
                                className={input_style}
                                name="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && <p className={error_style}>{errors.email}</p>}
                        </label>
                    </div>
                    <div className="pb-5 pt-3 pb-3 w-full">
                        <label className="flex flex-col items-center gap-2 w-full ">
                            <p className="text-xl">Contraseña</p>
                            <input
                                className={input_style}
                                name="password"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                aria-invalid={!!errors.password}
                            />
                            {errors.password && <p className={error_style}>{errors.password}</p>}
                        </label>

                    </div>
                    <div className="pb-5 pt-3 pb-3 w-full">
                        <label className="flex flex-col items-center gap-2 w-full ">
                            <p className="text-xl">Confirma la contraseña</p>
                            <input
                                className={input_style}
                                name="password_confirm"
                                type="password"
                                value={passwordConfirm}
                                onChange={e => setPasswordConfirm(e.target.value)}
                                aria-invalid={!!errors.passwordConfirm}
                            />
                            {errors.passwordConfirm && <p className={error_style}>{errors.passwordConfirm}</p>}
                        </label>
                    </div>
                    <div className="pb-5 pt-3 w-full">
                        <div className="flex items-center justify-center gap-2">
                            <label htmlFor="codigo" className="text-xl">Codigo</label>
                            <div className="relative group">
                                <button
                                    type="button"
                                    aria-label="¿Dónde encuentro mi código?"
                                    aria-expanded={showTip}
                                    onClick={() => setShowTip(v => !v)}
                                    className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-800 text-xs font-bold text-white hover:bg-blue-600"
                                >
                                    ?
                                </button>
                                <span
                                    role="tooltip"
                                    className={`absolute left-6 top-0 z-10 w-56 rounded-lg bg-gray-800 p-2 text-sm text-white shadow-lg ${showTip ? 'block' : 'hidden group-hover:block'}`}
                                >
                                    Tu código es promovido por tu superior.
                                </span>
                            </div>
                        </div>
                        <div className="mt-2 w-full items-center">
                            <input
                                id="codigo"
                                name="codigo"
                                type="text"
                                className={input_style}
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                                aria-invalid={!!errors.codigo}
                            />
                            {errors.codigo && <p className={error_style}>{errors.codigo}</p>}
                        </div>
                    </div>

                    {errors.form && <p className="text-sm text-red-600">{errors.form}</p>}
                    <div className="flex flex-row">
                        <div className="p-5">
                            <button className={btn_style} type="submit" disabled={submitting}>Registrate</button>
                        </div>
                    </div>
                    <div className="flex flex-row p-5">
                        <p className=" flex items-center text-md">
                            Ya tienes una cuenta?
                        </p>
                        <div className=" pl-3">
                            <button className={btn_style} type="button" onClick={() => navigate('/')}>Iniciar Sesion</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register
