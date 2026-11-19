// The "Siguiente" button shown once a step is complete. Used by the subsection
// and evaluation pages.

import { Link } from 'react-router-dom'
import { sectionPath } from '../sections/types'
import type { ItemStatus } from '../progress'

export default function NextStepLink({ item }: { item: ItemStatus }) {
    const next = item.next
    if (!next) return <p className="font-semibold">¡Terminaste todas las secciones!</p>

    // Within a section, go straight to the next step; into a new section,
    // open that section's page first.
    const sameSection = next.section === item.section
    return (
        <Link
            className="self-start px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600"
            to={sameSection ? next.path : sectionPath(next.section)}
        >
            {sameSection ? `Siguiente: ${next.title}` : `Siguiente sección: ${next.section.title}`}
        </Link>
    )
}
