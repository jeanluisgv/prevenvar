// Shared input validation for LogIn and Register.
// Each function returns an error message, or '' when the value is valid.

export function validateFirstName(name: string): string {
    if (!name.trim()) return 'El nombre es obligatorio.'
    if (name.trim().length > 100) return 'El nombre no puede tener más de 100 caracteres.'
    return ''
}

export function validateLastName(name: string): string {
    if (!name.trim()) return 'El apellido es obligatorio.'
    if (name.trim().length > 100) return 'El apellido no puede tener más de 100 caracteres.'
    return ''
}

export function validateEmail(email: string): string {
    if (!email.trim()) return 'El email es obligatorio.'
    if (!email.includes('@')) return 'El email debe contener una @.'
    return ''
}

export function validatePassword(password: string): string {
    if (!password) return 'La contraseña es obligatoria.'
    if (password.length < 8) return 'La contraseña debe tener al menos 8 caracteres.'
    if (!/[A-Z]/.test(password)) return 'La contraseña debe tener al menos una mayúscula.'
    if (!/[0-9]/.test(password)) return 'La contraseña debe tener al menos un número.'
    return ''
}

export function validateCodigo(codigo: string): string {
    if (!codigo.trim()) return 'El codigo es obligatorio.'
    return ''
}