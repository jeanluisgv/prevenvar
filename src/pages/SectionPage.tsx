// The page for a section (/<section id>): its overview content plus a list of
// its steps (subsections and evaluations, in order). The same page is used
// for every section; the content comes from the section's file.

import { Link } from 'react-router-dom'
import type { Section } from '../sections/types'
import { useProgress } from '../progress'
import LockedNotice from './LockedNotice'
import StepIcon from './StepIcon'

export default function SectionPage({ section }: { section: Section }) {
    const { items, isSectionUnlocked } = useProgress()
    if (!isSectionUnlocked(section)) return <LockedNotice />

    const { Overview } = section
    return (
        <article className="max-w-3xl flex flex-col gap-6">
            <h1 className="text-[25px] font-semibold">{section.title}</h1>
            <div className="flex flex-col gap-3"><Overview /></div>

            <ul className="flex flex-col gap-2">
                {items.filter(item => item.section === section).map(item => (
                    <li key={item.key}>
                        {item.unlocked ? (
                            <Link
                                to={item.path}
                                className="flex items-center gap-3 rounded-lg border-2 border-gray-300 bg-white px-4 py-3 hover:border-blue-500"
                            >
                                <StepIcon item={item} />{item.title}
                            </Link>
                        ) : (
                            <span className="flex items-center gap-3 rounded-lg border-2 border-gray-200 px-4 py-3 text-gray-400">
                                <StepIcon item={item} />{item.title}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </article>
    )
}
