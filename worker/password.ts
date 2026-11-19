// Password hashing with PBKDF2-SHA256 (built into Workers' Web Crypto, no dependencies).
// Stored format: pbkdf2$<iterations>$<salt base64>$<hash base64>
// Keeping the iteration count in the string lets you raise it later without
// breaking existing accounts.

const ITERATIONS = 100_000 // the Workers runtime caps PBKDF2 at 100,000
const SALT_BYTES = 16
const HASH_BITS = 256

const encoder = new TextEncoder()

function toBase64(bytes: Uint8Array): string {
    return btoa(String.fromCharCode(...bytes))
}

function fromBase64(b64: string): Uint8Array {
    return Uint8Array.from(atob(b64), c => c.charCodeAt(0))
}

async function derive(password: string, salt: Uint8Array, iterations: number): Promise<Uint8Array> {
    const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits'])
    const bits = await crypto.subtle.deriveBits(
        { name: 'PBKDF2', hash: 'SHA-256', salt, iterations },
        key,
        HASH_BITS,
    )
    return new Uint8Array(bits)
}

export async function hashPassword(password: string): Promise<string> {
    const salt = crypto.getRandomValues(new Uint8Array(SALT_BYTES))
    const hash = await derive(password, salt, ITERATIONS)
    return `pbkdf2$${ITERATIONS}$${toBase64(salt)}$${toBase64(hash)}`
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
    const [scheme, iter, saltB64, hashB64] = stored.split('$')
    if (scheme !== 'pbkdf2' || !iter || !saltB64 || !hashB64) return false

    const expected = fromBase64(hashB64)
    const actual = await derive(password, fromBase64(saltB64), Number(iter))
    if (actual.byteLength !== expected.byteLength) return false
    // Constant-time comparison so the check doesn't leak how many bytes matched
    return crypto.subtle.timingSafeEqual(actual, expected)
}

// A real hash of a throwaway password. Login checks against it when the email
// doesn't exist, so "no such user" takes as long as "wrong password" and
// response timing can't be used to discover which emails are registered.
// Created on first use: Workers don't allow random values at module load time.
let dummyHash: Promise<string> | undefined
export function getDummyHash(): Promise<string> {
    dummyHash ??= hashPassword(crypto.randomUUID())
    return dummyHash
}
