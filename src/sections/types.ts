import type { ComponentType, ReactNode } from 'react'

/**
 * A subsection: one page the user works through in order.
 * Its route is /<section id>/<subsection id>.
 */
export type Subsection = {
    /**
     * Part of the URL, and how the user's progress is saved in the database.
     * Lowercase letters, numbers and dashes only. Don't change it once users
     * have progress, or that progress is lost for this subsection.
     */
    id: string
    /** Shown in the sidebar and as the page heading. */
    title: string
    /**
     * Minimum seconds between first opening this subsection and the next one
     * unlocking. Leave it out to use the section's `waitSeconds`.
     */
    waitSeconds?: number
    /** The page content. */
    Content: ComponentType
}

/**
 * An evaluation placed anywhere in a section's `subsections` list. The step
 * after it stays locked until the user passes it. Its route is
 * /<section id>/<id>, and its title is `evaluation.title` (default "Evaluación").
 *
 *   subsections: [
 *       { id: 'bienvenida', title: 'Bienvenida', Content: Bienvenida },
 *       { id: 'prueba-1', evaluation: { passingScore: 'all', questions: [...] } },
 *       { id: 'primeros-pasos', title: 'Primeros pasos', Content: PrimerosPasos },
 *   ]
 */
export type EvaluationStep = {
    /** Same rules as Subsection.id, and must be unique within the section. */
    id: string
    evaluation: Evaluation
}

/** One entry of a section's `subsections` list. */
export type Step = Subsection | EvaluationStep

export const isEvaluationStep = (step: Step): step is EvaluationStep => 'evaluation' in step

/**
 * A section: a group of subsections, with its own overview page.
 * Its route is /<section id>. Each section lives in its own file in this folder
 * and is listed in sections/index.ts, which sets the order.
 */
export type Section = {
    /** Same rules as Subsection.id. Must not be "inicio", "register" or "api". */
    id: string
    title: string
    /** Default wait for every subsection in this section, in seconds. */
    waitSeconds: number
    /** Content of the section's own page (shown above its list of subsections). */
    Overview: ComponentType
    /**
     * In order. A section needs at least one. Can include evaluations at any
     * position (see EvaluationStep).
     */
    subsections: Step[]
    /**
     * Optional multiple-choice test after the last subsection: a shortcut for
     * adding { id: 'evaluacion', evaluation } at the end of `subsections`.
     * The next section stays locked until the user passes it.
     */
    evaluation?: Evaluation
}

/**
 * The kinds of question an evaluation can ask:
 *  - 'single':     pick one option.         correct: the right option's text.
 *  - 'multiple':   pick all that apply.     correct: every right option's text.
 *                  Counts only if exactly those are picked.
 *  - 'true-false': Verdadero / Falso.       correct: true or false.
 */
export type Question = (
    | { type: 'single', prompt: string, options: string[], correct: string }
    | { type: 'multiple', prompt: string, options: string[], correct: string[] }
    | { type: 'true-false', prompt: string, correct: boolean }
) & {
    /**
     * Optional "¿Por qué?" shown under the question after submitting. Text or
     * JSX. Hidden on a failed attempt for questions the user got wrong, unless
     * `showCorrectAnswers` is on, so it doesn't give the answer away before a retry.
     */
    explanation?: ReactNode
}

export type Evaluation = {
    /** Heading and sidebar label. Defaults to "Evaluación". */
    title?: string
    /**
     * Optional text shown under the title, before the questions (instructions,
     * a case to read, etc.). Text or JSX, e.g. <><p>…</p><p>…</p></>.
     */
    intro?: ReactNode
    /** The question bank. */
    questions: Question[]
    /**
     * How many questions to ask, picked at random from `questions` on every
     * attempt. Leave it out to ask all of them, in order.
     */
    questionsToAsk?: number
    /** Correct answers needed to pass: a number, or 'all'. */
    /**
     * 0 makes it a survey: every submission passes, and no score or right/wrong
     * marks are shown (questions still need a `correct`, but it isn't shown;
     * with `recordEvaluation: true` the answers are still saved).
     */
    passingScore: number | 'all'
    /** Shuffle the options of each question on every attempt. Default false. */
    shuffleOptions?: boolean
    /**
     * After a failed attempt, show the right answers (true) or only which
     * questions were wrong (false, the default, so retrying still takes thought).
     */
    showCorrectAnswers?: boolean
    /**
     * Save every submitted attempt (passed or failed) in the `evaluations`
     * table: the answers in order, the score and whether it passed.
     * Costs one request per attempt. Default false: only a pass is saved, as
     * progress, and failed attempts cost nothing.
     */
    recordEvaluation?: boolean
}

/** The id of a section's end-of-section `evaluation`. No other step can use it then. */
export const EVALUATION_ID = 'evaluacion'

/** Every step of a section in order: `subsections`, then `evaluation` if set. */
export function sectionSteps(section: Section): Step[] {
    return section.evaluation
        ? [...section.subsections, { id: EVALUATION_ID, evaluation: section.evaluation }]
        : section.subsections
}

export const stepTitle = (step: Step) =>
    isEvaluationStep(step) ? step.evaluation.title ?? 'Evaluación' : step.title

export const sectionPath = (section: Section) => `/${section.id}`
export const stepPath = (section: Section, step: Step) => `/${section.id}/${step.id}`
/** How a step is identified in the database: "<section id>/<step id>". */
export const progressKey = (section: Section, step: Step) => `${section.id}/${step.id}`
