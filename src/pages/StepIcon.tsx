// The status icon next to a subsection or evaluation, used by the sidebar and
// the section page so both always look the same.

import { FaLock, FaCheckCircle, FaRegCircle, FaClipboardList } from 'react-icons/fa'
import type { ItemStatus } from '../progress'

export default function StepIcon({ item }: { item: ItemStatus }) {
    if (!item.unlocked) return <FaLock className="shrink-0" aria-label="Bloqueada" />
    if (item.complete) return <FaCheckCircle className="shrink-0 text-green-600" aria-label="Completada" />
    if (item.kind === 'evaluation') return <FaClipboardList className="shrink-0" aria-label="Evaluación pendiente" />
    return <FaRegCircle className="shrink-0" aria-label="Pendiente" />
}
