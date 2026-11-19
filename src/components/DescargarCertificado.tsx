// "Descargar certificado" button: draws the user's name and completion date on
// src/assets/certificado.png (in the browser, no server call) and downloads it.
//
// TWEAK THE LAYOUT HERE. Positions are in pixels of the original image
// (3509 x 2484). x/y is the CENTER of the text (textAlign 'center',
// textBaseline 'middle'). Change `align` to 'left' to make x the left edge.

import { useState } from 'react'
import certificadoUrl from '../assets/certificado.png'
import { useProgress } from '../progress'

const LAYOUT = {
    name: { x: 1754, y: 750, font: 'bold 140px Georgia, serif', color: '#1f2937', align: 'center' as CanvasTextAlign },
    date: { x: 1975, y: 1570, font: '60px Georgia, serif', color: '#1f2937', align: 'center' as CanvasTextAlign },
}

/** The step whose pass date goes on the certificate ("<section id>/<step id>"). */
const FINAL_EXAM_KEY = 'modulo5/final-eval'

function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
    })
}

function drawText(ctx: CanvasRenderingContext2D, text: string, cfg: typeof LAYOUT.name) {
    ctx.font = cfg.font
    ctx.fillStyle = cfg.color
    ctx.textAlign = cfg.align
    ctx.textBaseline = 'middle'
    ctx.fillText(text, cfg.x, cfg.y)
}

export default function DescargarCertificado() {
    const { session, byKey, serverNow } = useProgress()
    const [busy, setBusy] = useState(false)
    const exam = byKey.get(FINAL_EXAM_KEY)

    if (!exam?.complete && !session.admin) return null

    const name = `${session.firstName} ${session.lastName}`.trim()
    // Server time of passing the exam (admins who skipped it get today).
    const completedAt = new Date((exam?.doneAt ?? serverNow()) * 1000)
    const date = completedAt.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })

    async function download() {
        setBusy(true)
        try {
            const img = await loadImage(certificadoUrl)
            await document.fonts?.ready
            const canvas = document.createElement('canvas')
            canvas.width = img.naturalWidth
            canvas.height = img.naturalHeight
            const ctx = canvas.getContext('2d')!
            ctx.drawImage(img, 0, 0)
            drawText(ctx, name, LAYOUT.name)
            drawText(ctx, date, LAYOUT.date)

            const blob = await new Promise<Blob | null>(r => canvas.toBlob(r, 'image/png'))
            if (!blob) throw new Error('No se pudo generar el certificado')
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `certificado-${name.replace(/\s+/g, '-') || 'curso'}.png`
            a.click()
            setTimeout(() => URL.revokeObjectURL(url), 1000)
        } catch (err) {
            console.error(err)
            alert('No se pudo generar el certificado. Intente de nuevo.')
        } finally {
            setBusy(false)
        }
    }

    return (
        <button
            type="button"
            onClick={download}
            disabled={busy}
            className="mt-2 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60"
        >
            {busy ? 'Generando…' : '⬇️ Descargar certificado'}
        </button>
    )
}
