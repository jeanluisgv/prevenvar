// The page for an evaluation (/<section id>/<evaluation id>), wherever it sits
// in the section. The same page is used for every evaluation; the questions and
// settings come from the `evaluation` in the section's file.
//
// Grading happens in the browser. Normally failed attempts cost no requests and
// passing saves once (1 database call) and unlocks the next step. With
// `recordEvaluation: true`, every attempt is saved (1 database call each), and
// a passing one is marked done in that same call.

import { useState } from 'react'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { progressKey, sectionPath, type Evaluation, type EvaluationStep, type Section } from '../sections/types'
import { answersString, buildAttempt, isCorrect, neededToPass, type AskedQuestion } from '../evaluation'
import { useProgress } from '../progress'
import { Link } from 'react-router-dom'
import LockedNotice from './LockedNotice'
import NextStepLink from './NextStepLink'

const btn_style = 'px-5 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50'

export default function EvaluationPage({ section, step }: { section: Section, step: EvaluationStep }) {
    const { byKey } = useProgress()
    const item = byKey.get(progressKey(section, step))!
    const { evaluation } = step
    // Bumping this key throws away the current attempt and starts a fresh one.
    const [attemptNo, setAttemptNo] = useState(0)

    if (!item.unlocked) return <LockedNotice />

    return (
        <article className="max-w-3xl flex flex-col gap-6">
            <p className="text-sm text-gray-600">
                <Link to={sectionPath(section)} className="hover:underline">{section.title}</Link>
            </p>
            <h1 className="text-[25px] font-semibold -mt-4">{item.title}</h1>
            {evaluation.intro && <div className="flex flex-col gap-3 leading-7">{evaluation.intro}</div>}

            {item.complete && attemptNo === 0 ? (
                // Passed on an earlier visit.
                <div className="flex flex-col gap-4 rounded-lg border-2 border-gray-300 bg-white p-4">
                    <p className="flex items-center gap-2 font-semibold text-green-700">
                        <FaCheckCircle aria-hidden="true" />
                        {evaluation.passingScore === 0 ? 'Ya respondiste esta encuesta.' : 'Ya aprobaste esta evaluación.'}
                    </p>
                    <NextStepLink item={item} />
                </div>
            ) : (
                <Attempt
                    key={attemptNo}
                    evaluation={evaluation}
                    itemKey={item.key}
                    onRetry={() => { setAttemptNo(n => n + 1); window.scrollTo({ top: 0 }) }}
                />
            )}
        </article>
    )
}

type AttemptProps = { evaluation: Evaluation, itemKey: string, onRetry: () => void }

function Attempt({ evaluation, itemKey, onRetry }: AttemptProps) {
    const { byKey, markDone, recordEvaluation } = useProgress()
    const record = evaluation.recordEvaluation ?? false
    const [questions] = useState(() => buildAttempt(evaluation))
    const [answers, setAnswers] = useState<string[][]>(() => questions.map(() => []))
    const [submitted, setSubmitted] = useState(false)
    const [saveError, setSaveError] = useState(false)
    const [saving, setSaving] = useState(false)

    const needed = neededToPass(evaluation, questions.length)
    // passingScore 0: a survey. Everyone passes; no score or right/wrong marks.
    const survey = needed === 0
    const results = questions.map((q, i) => isCorrect(q, answers[i]))
    const score = results.filter(Boolean).length
    const passed = score >= needed
    const answeredCount = answers.filter(a => a.length > 0).length
    const item = byKey.get(itemKey)!

    function choose(qIndex: number, option: string, multiple: boolean) {
        setAnswers(prev => prev.map((selected, i) => {
            if (i !== qIndex) return selected
            if (!multiple) return [option]
            return selected.includes(option) ? selected.filter(o => o !== option) : [...selected, option]
        }))
    }

    async function save() {
        setSaving(true)
        setSaveError(false)
        try {
            if (record) {
                // One request saves the attempt and, if passed, marks it done.
                await recordEvaluation(itemKey, {
                    answers: answersString(questions, answers, results),
                    score,
                    total: questions.length,
                    passed,
                })
            } else {
                await markDone(itemKey)
            }
        } catch {
            setSaveError(true)
        } finally {
            setSaving(false)
        }
    }

    async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()
        setSubmitted(true)
        if (passed || record) await save()
    }

    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <p className="text-gray-700">
                {questions.length} {questions.length === 1 ? 'pregunta' : 'preguntas'}.
                {!survey && <> Necesitas {needed === questions.length ? 'todas correctas' : `${needed} correctas`} para aprobar.</>}
            </p>

            {questions.map((q, i) => (
                <QuestionCard
                    key={i}
                    number={i + 1}
                    question={q}
                    selected={answers[i]}
                    onChoose={option => choose(i, option, q.multiple)}
                    submitted={submitted}
                    graded={!survey}
                    correct={results[i]}
                    showCorrectAnswers={evaluation.showCorrectAnswers ?? false}
                    // Not for a wrong answer the user is about to retry without
                    // seeing the right ones: the explanation would give it away.
                    showExplanation={submitted && (results[i] || passed || (evaluation.showCorrectAnswers ?? false))}
                />
            ))}

            <div className="flex flex-col gap-3 rounded-lg border-2 border-gray-300 bg-white p-4" aria-live="polite">
                {!submitted ? (
                    <div className="flex flex-wrap items-center gap-4">
                        <button className={btn_style} type="submit" disabled={answeredCount < questions.length}>
                            Enviar respuestas
                        </button>
                        <p className="text-sm text-gray-600">Respondidas: {answeredCount} de {questions.length}</p>
                    </div>
                ) : (
                    <>
                        {!survey && <p className="font-semibold">Obtuviste {score} de {questions.length} (necesitas {needed}).</p>}
                        {saving && <p className="text-sm text-gray-600">Guardando…</p>}
                        {saveError && (
                            <div className="flex flex-wrap items-center gap-3">
                                <p className="text-sm text-red-600">No se pudo guardar tu resultado.</p>
                                <button className={btn_style} type="button" onClick={save}>Reintentar</button>
                            </div>
                        )}
                        {passed ? (
                            <>
                                <p className="flex items-center gap-2 font-semibold text-green-700">
                                    <FaCheckCircle aria-hidden="true" /> {survey ? '¡Gracias por tus respuestas!' : '¡Aprobaste!'}
                                </p>
                                {item.complete && <NextStepLink item={item} />}
                            </>
                        ) : (
                            <>
                                <p className="flex items-center gap-2 font-semibold text-red-700">
                                    <FaTimesCircle aria-hidden="true" /> No aprobaste esta vez.
                                    {evaluation.showCorrectAnswers ? ' Revisa las respuestas correctas arriba.' : ' Revisa las preguntas marcadas arriba.'}
                                </p>
                                <button className={`${btn_style} self-start`} type="button" onClick={onRetry}>
                                    Intentar de nuevo
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>
        </form>
    )
}

type QuestionCardProps = {
    number: number
    question: AskedQuestion
    selected: string[]
    onChoose: (option: string) => void
    submitted: boolean
    /** false for surveys: never show right/wrong. */
    graded: boolean
    correct: boolean
    showCorrectAnswers: boolean
    showExplanation: boolean
}

function QuestionCard({ number, question, selected, onChoose, submitted: locked, graded, correct, showCorrectAnswers, showExplanation }: QuestionCardProps) {
    // `locked`: answers can't change after submitting. `submitted`: show the marks.
    const submitted = locked && graded
    const border = !submitted ? 'border-gray-300' : correct ? 'border-green-600' : 'border-red-600'
    return (
        <fieldset className={`flex flex-col gap-2 rounded-lg border-2 bg-white p-4 ${border}`}>
            <legend className="px-1 font-semibold">
                {number}. {question.prompt}
            </legend>
            {question.multiple && <p className="text-sm text-gray-600">Selecciona todas las correctas.</p>}

            {question.options.map(option => {
                const isRight = question.correct.includes(option)
                const highlight = submitted && !correct && showCorrectAnswers && isRight
                return (
                    <label
                        key={option}
                        className={`flex items-center gap-3 rounded-md px-2 py-1 ${locked ? '' : 'cursor-pointer hover:bg-gray-100'} ${highlight ? 'bg-green-100' : ''}`}
                    >
                        <input
                            type={question.multiple ? 'checkbox' : 'radio'}
                            name={`pregunta-${number}`}
                            value={option}
                            checked={selected.includes(option)}
                            onChange={() => onChoose(option)}
                            disabled={locked}
                            className="h-4 w-4"
                        />
                        {option}
                        {highlight && <span className="text-sm text-green-700">(correcta)</span>}
                    </label>
                )
            })}

            {submitted && (
                <p className={`flex items-center gap-2 text-sm font-semibold ${correct ? 'text-green-700' : 'text-red-700'}`}>
                    {correct
                        ? <><FaCheckCircle aria-hidden="true" /> Correcta</>
                        : <><FaTimesCircle aria-hidden="true" /> Incorrecta</>}
                </p>
            )}

            {showExplanation && question.explanation && (
                <p className="rounded-md bg-gray-50 p-3 text-sm leading-6">
                    <strong>¿Por qué?</strong> {question.explanation}
                </p>
            )}
        </fieldset>
    )
}
