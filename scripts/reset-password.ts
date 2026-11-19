// Sets a new password for a user (e.g. someone who forgot theirs).
//
//   npm run reset-password -- someone@example.com NuevaClave123
//   npm run reset-password -- someone@example.com NuevaClave123 --local   (local test DB)
//
// Hashes the password with the same code the site uses (worker/password.ts),
// checks it against the same rules as the registration form, then in ONE D1
// call updates the hash and logs the user out everywhere (deletes their sessions).
// Asks for confirmation before touching the production database.

import { execFileSync } from 'node:child_process'
import { createInterface } from 'node:readline/promises'
import { hashPassword } from '../worker/password.ts'
import { validateEmail, validatePassword } from '../src/validation.ts'

const DB = 'moms-website-db'

const args = process.argv.slice(2)
const local = args.includes('--local')
const [email, password] = args.filter(a => a !== '--local')

if (!email || !password) {
    console.error('Uso: npm run reset-password -- <email> <nueva contraseña> [--local]')
    process.exit(1)
}

const normalizedEmail = email.trim().toLowerCase()
const problem = validateEmail(normalizedEmail) || validatePassword(password)
if (problem) {
    console.error(problem)
    process.exit(1)
}

const hash = await hashPassword(password)
const sqlString = (s: string) => `'${s.replaceAll("'", "''")}'`
const e = sqlString(normalizedEmail)

// Sessions first (they need the user's id), then the new hash.
// SELECT changes() reports whether a user with that email exists.
const sql = [
    `DELETE FROM sessions WHERE user_id = (SELECT id FROM users WHERE email = ${e})`,
    `UPDATE users SET password_hash = ${sqlString(hash)} WHERE email = ${e}`,
    `SELECT changes() AS updated`,
].join('; ')

const target = local ? 'LOCAL (test)' : 'PRODUCTION (prevenvar.com)'
const rl = createInterface({ input: process.stdin, output: process.stdout })
const answer = await rl.question(`Cambiar la contraseña de ${normalizedEmail} en la base ${target}? (s/N) `)
rl.close()
if (!/^s(i|í)?$/i.test(answer.trim())) {
    console.log('Cancelado.')
    process.exit(0)
}

const out = execFileSync(
    'npx',
    ['wrangler', 'd1', 'execute', DB, local ? '--local' : '--remote', '--json', '--command', sql],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] },
)
const results = JSON.parse(out) as { results: { updated?: number }[] }[]
const updated = results.at(-1)?.results[0]?.updated ?? 0

if (updated === 1) {
    console.log(`Listo. ${normalizedEmail} ya puede entrar con la nueva contraseña (sus sesiones abiertas se cerraron).`)
} else {
    console.error(`No existe ningún usuario con el email ${normalizedEmail}. No se cambió nada.`)
    process.exit(1)
}
