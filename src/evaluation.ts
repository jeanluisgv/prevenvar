// Building and grading an evaluation attempt. No UI here; the page is
// src/pages/EvaluationPage.tsx and the questions live in each section's file.

import type { ReactNode } from 'react'
import type { Evaluation, Question } from './sections/types'

/** A question as shown in one attempt: every type becomes a list of options. */
export type AskedQuestion = {
    /** Position in the section's question bank, starting at 1. */
    number: number
    prompt: string
    options: string[]
    correct: string[]
    /** true: checkboxes (pick all that apply); false: radio buttons (pick one). */
    multiple: boolean
    explanation?: ReactNode
}

const TRUE = 'Verdadero'
const FALSE = 'Falso'

function shuffle<T>(list: T[]): T[] {
    const copy = [...list]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
}

function toAsked(q: Question, number: number, shuffleOptions: boolean): AskedQuestion {
    const common = { number, prompt: q.prompt, explanation: q.explanation }
    switch (q.type) {
        case 'true-false':
            // Always Verdadero then Falso; shuffling two options only confuses.
            return { ...common, options: [TRUE, FALSE], correct: [q.correct ? TRUE : FALSE], multiple: false }
        case 'single':
            return { ...common, options: shuffleOptions ? shuffle(q.options) : q.options, correct: [q.correct], multiple: false }
        case 'multiple':
            return { ...common, options: shuffleOptions ? shuffle(q.options) : q.options, correct: q.correct, multiple: true }
    }
}

/** Picks the questions for a new attempt (a random subset if questionsToAsk is set). */
export function buildAttempt(ev: Evaluation): AskedQuestion[] {
    const numbered = ev.questions.map((q, i) => ({ q, number: i + 1 }))
    const count = ev.questionsToAsk ?? numbered.length
    const picked = count < numbered.length ? shuffle(numbered).slice(0, count) : numbered
    return picked.map(({ q, number }) => toAsked(q, number, ev.shuffleOptions ?? false))
}

/**
 * The attempt as one string for the `evaluations` table, in the order the
 * questions were shown: [{"q":3,"a":["Correcta"],"ok":true}, ...]
 * q: question number in the bank, a: what the user picked, ok: right or wrong.
 */
export function answersString(questions: AskedQuestion[], answers: string[][], results: boolean[]): string {
    return JSON.stringify(questions.map((q, i) => ({ q: q.number, a: answers[i], ok: results[i] })))
}

/** Correct answers needed to pass an attempt with `asked` questions. */
export function neededToPass(ev: Evaluation, asked: number): number {
    return ev.passingScore === 'all' ? asked : Math.min(ev.passingScore, asked)
}

/** Right only if exactly the correct options are selected. */
export function isCorrect(q: AskedQuestion, selected: string[]): boolean {
    return selected.length === q.correct.length && q.correct.every(c => selected.includes(c))
}
