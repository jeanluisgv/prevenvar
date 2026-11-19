// The list of sections, in the order users unlock them. The sidebar and the
// routes are both built from this list, so this is the only place to register
// a section.
//
// To add a section:
//   1. Copy section1.tsx to a new file (e.g. section3.tsx) and edit it.
//   2. Import it below and add it to the list.
//
// Inserting a section or subsection before ones users have already reached
// locks everything after it for them until they complete the new one.

import { EVALUATION_ID, isEvaluationStep, sectionSteps, type Section } from './types'

import intro from './intro'
import modulo1 from './modulo1'
import modulo2 from './modulo2'
import modulo3 from './modulo3'
import modulo4 from './modulo4'
import modulo5 from './modulo5'
export const sections: Section[] = [
    intro,
    modulo1,
    modulo2,
    modulo3,
    modulo4,
    modulo5
]

// Catch mistakes in the section files while developing.
if (import.meta.env.DEV) {
    const ID = /^[a-z0-9-]{1,50}$/
    const reserved = new Set(['inicio', 'register', 'api'])
    const seen = new Set<string>()
    for (const section of sections) {
        if (!ID.test(section.id)) console.error(`Section id "${section.id}" must be lowercase letters, numbers and dashes.`)
        if (reserved.has(section.id)) console.error(`Section id "${section.id}" is reserved for another page.`)
        if (seen.has(section.id)) console.error(`Two sections use the id "${section.id}".`)
        seen.add(section.id)
        if (section.subsections.length === 0) console.error(`Section "${section.id}" needs at least one subsection.`)
        if (section.evaluation && section.subsections.some(s => s.id === EVALUATION_ID)) {
            console.error(`Section "${section.id}" has a step with the id "${EVALUATION_ID}", which is reserved for its end-of-section evaluation.`)
        }
        const stepIds = new Set<string>()
        for (const step of sectionSteps(section)) {
            if (!ID.test(step.id)) console.error(`Step id "${section.id}/${step.id}" must be lowercase letters, numbers and dashes.`)
            if (stepIds.has(step.id)) console.error(`Section "${section.id}" has two steps with the id "${step.id}".`)
            stepIds.add(step.id)
            if (!isEvaluationStep(step)) continue

            const ev = step.evaluation
            const where = `Evaluation "${section.id}/${step.id}"`
            const asked = ev.questionsToAsk ?? ev.questions.length
            if (ev.questions.length === 0) console.error(`${where} has no questions.`)
            if (asked < 1 || asked > ev.questions.length) console.error(`${where}: questionsToAsk (${asked}) must be between 1 and the number of questions (${ev.questions.length}).`)
            if (ev.passingScore !== 'all' && (!Number.isInteger(ev.passingScore) || ev.passingScore < 0 || ev.passingScore > asked)) console.error(`${where}: passingScore (${JSON.stringify(ev.passingScore)}) must be 'all' or a number from 0 (survey: everyone passes) to the questions asked (${asked}).`)
            ev.questions.forEach((q, n) => {
                const label = `${where}, question ${n + 1}`
                if (q.type === 'true-false') return
                if (new Set(q.options).size !== q.options.length) console.error(`${label} has duplicate options.`)
                const correct = q.type === 'single' ? [q.correct] : q.correct
                if (correct.length === 0) console.error(`${label} has no correct option.`)
                for (const c of correct) {
                    if (!q.options.includes(c)) console.error(`${label}: correct answer "${c}" isn't one of its options.`)
                }
            })
        }
    }
}
