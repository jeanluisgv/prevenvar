import { useNavigate } from 'react-router-dom'
import logo from './assets/prevenvarLogo.svg'
import { useEffect, useState } from 'react'
import { validateEmail, validatePassword } from './validation'
import { getSession, setSessionFromResponse } from './auth'


function LogIn() {
    const navigate = useNavigate()
    const btn_style = "px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600 "
    const input_style = "w-full px-3 py-2 border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    const error_style = "text-sm text-red-600 self-start"
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ email: '', password: '', form: '' })
    const [submitting, setSubmitting] = useState(false)

    // Already logged in (valid session cookie)? Skip the form.
    useEffect(() => {
        getSession().then(s => { if (s) navigate('/inicio', { replace: true }) })
    }, [navigate])

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault() // stop the browser from reloading the page

        const newErrors = {
            email: validateEmail(email),
            password: validatePassword(password),
            form: '',
        }
        setErrors(newErrors)
        if (newErrors.email || newErrors.password || submitting) return

        setSubmitting(true)
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }), // data comes straight from state
            })

            if (res.ok) {
                const data = await res.json()
                setSessionFromResponse(data) // so the next page doesn't have to ask /api/me
                navigate('/inicio')
            } else {
                setErrors({ ...newErrors, form: 'Email o contraseña incorrectos.' })
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
                    <h1 className="text-[25px] font-semibold pt-10 pb-2">
                        Inicia Sesion
                    </h1>
                </div>
                <form className="flex flex-col items-center" onSubmit={handleSubmit} noValidate>
                    <div className="pt-5 pb-2 w-full">
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
                    <div className="pb-5 pt-3 w-full">
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
                    {errors.form && <p className="text-sm text-red-600">{errors.form}</p>}
                    <div className="flex flex-row">
                        <div className="p-5">
                            <button className={btn_style} type="submit" disabled={submitting}>Iniciar Sesion</button>
                        </div>
                    </div>
                    <div className="flex flex-row p-5">
                        <p className=" flex items-center text-md">
                            No tienes una cuenta?
                        </p>
                        <div className="pl-5">
                            <button className={btn_style} type="button" onClick={() => navigate('/register')}>Registrate</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LogIn
