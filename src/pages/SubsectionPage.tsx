// The page for a subsection (/<section id>/<subsection id>): its content, a
// "Done" button (locked until the subsection's minimum time has passed, with a
// countdown), and a link to the next part.
// The same page is used for every subsection; the content comes from the
// section's file.

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaLock } from 'react-icons/fa'
import { progressKey, sectionPath, type Section, type Subsection } from '../sections/types'
import { formatDuration, useProgress, type ItemStatus } from '../progress'
import LockedNotice from './LockedNotice'
import NextStepLink from './NextStepLink'

const btn_style = 'px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50'
// While the minimum time hasn't passed: gray, no hover, not clickable.
const btn_locked = 'flex items-center gap-2 px-5 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed'

export default function SubsectionPage({ section, sub }: { section: Section, sub: Subsection }) {
    const { byKey, start } = useProgress()
    const item = byKey.get(progressKey(section, sub))!

    // Opening an unlocked subsection starts its wait timer (saved once).
    useEffect(() => {
        if (item.unlocked) start(item.key)
    }, [item.unlocked, item.key, start])

    if (!item.unlocked) return <LockedNotice />

    const { Content } = sub
    return (
        <article className="max-w-3xl flex flex-col gap-6">
            <p className="text-sm text-gray-600">
                <Link to={sectionPath(section)} className="hover:underline">{section.title}</Link>
            </p>
            <h1 className="text-[25px] font-semibold -mt-4">{sub.title}</h1>
            <div className="flex flex-col gap-3"><Content /></div>
            <DoneBar item={item} />
        </article>
    )
}

/** Re-renders every second while `active`, for the countdown. */
function useSecondTick(active: boolean) {
    const [, setTick] = useState(0)
    useEffect(() => {
        if (!active) return
        const timer = setInterval(() => setTick(t => t + 1), 1000)
        return () => clearInterval(timer)
    }, [active])
}

function DoneBar({ item }: { item: ItemStatus }) {
    const { markDone, serverNow } = useProgress()
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState('')

    // Time left on this subsection's wait, counted from when it was first opened.
    const remaining = item.startedAt === null ? item.waitSeconds : item.startedAt + item.waitSeconds - serverNow()
    const waiting = !item.complete && remaining > 0
    useSecondTick(waiting)

    async function onDone() {
        setSaving(true)
        setError('')
        try {
            await markDone(item.key)
        } catch {
            setError('No se pudo guardar. Intenta de nuevo.')
        } finally {
            setSaving(false)
        }
    }

    const next = item.next
    return (
        <div className="flex flex-col gap-3 rounded-lg border-2 border-gray-300 bg-white p-4">
            {item.doneAt === null ? (
                <div className="flex flex-wrap items-center gap-4">
                    {waiting ? (
                        // Can't be marked until the minimum time is up. It unlocks
                        // by itself when the countdown reaches 0 (no reload needed).
                        <>
                            <button className={btn_locked} type="button" disabled aria-describedby="done-wait">
                                <FaLock aria-hidden="true" /> Marcar como hecho
                            </button>
                            <p id="done-wait" className="text-sm text-gray-600">
                                Podrás marcarlo como hecho en {formatDuration(remaining)}
                            </p>
                        </>
                    ) : (
                        <button className={btn_style} type="button" onClick={onDone} disabled={saving}>
                            Marcar como hecho
                        </button>
                    )}
                </div>
            ) : (
                <p className="flex items-center gap-2 font-semibold text-green-700">
                    <FaCheckCircle aria-hidden="true" /> Hecho
                </p>
            )}

            {/* Only for steps marked done before the button waited for the timer. */}
            {item.doneAt !== null && waiting && (
                <p className="text-sm text-gray-600" aria-live="polite">
                    {next ? 'Lo siguiente' : 'El final'} se desbloquea en {formatDuration(remaining)}
                </p>
            )}

            {item.complete && <NextStepLink item={item} />}

            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    )
}
