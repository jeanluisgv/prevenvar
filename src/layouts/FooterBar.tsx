/**
 * Frontend - FooterBar.tsx
 * ------------------------------
 * Purpose: Bottom footer bar
 */

export default function FooterBar() {
    return (
        <footer className="p-4 border-t text-sm">
            <p>© {new Date().getFullYear()} MOM Website</p>
        </footer>
    )
}
