// Admins: users who registered with one of the codes in the ADMIN_CODES secret
// (comma-separated, like REGISTRATION_CODES). The page unlocks every step for
// them, with no waits (src/progress.tsx), and lets them open the dashboard
// (worker/adminData.ts). The code is never sent to the browser, only whether
// the user is an admin.
//
// Set it with `npx wrangler secret put ADMIN_CODES`, and in .dev.vars locally.
// If it isn't set, nobody is an admin.

/** The admin codes, trimmed and lowercase (codes are case-insensitive). */
export function adminCodes(env: Env): string[] {
    return (env.ADMIN_CODES ?? '').split(',').map(c => c.trim().toLowerCase()).filter(Boolean)
}

export function isAdmin(env: Env, codigo: string | null | undefined): boolean {
    if (!codigo) return false
    return adminCodes(env).includes(codigo.trim().toLowerCase())
}
