
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '/src/layouts/Layout.tsx'
import LogIn from '/src/LogIn.tsx'
import Register from '/src/Register.tsx'
import RecuperarContrasena from '/src/RecuperarContrasena.tsx'
import Home from '/src/Home.tsx'
import SectionPage from '/src/pages/SectionPage.tsx'
import SubsectionPage from '/src/pages/SubsectionPage.tsx'
import EvaluationPage from '/src/pages/EvaluationPage.tsx'
import { sections } from '/src/sections'
import { isEvaluationStep, progressKey, sectionPath, sectionSteps, stepPath } from '/src/sections/types'

function App() {
    return (
        <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recuperar" element={<RecuperarContrasena />} />

            {/* Everything inside here needs a logged-in user and shows the sidebar. */}
            <Route element={<Layout />}>
                <Route path="/inicio" element={<Home />} />

                {/* One route per section, subsection and evaluation, built from src/sections. */}
                {sections.map(section => (
                    <Fragment key={section.id}>
                        <Route path={sectionPath(section)} element={<SectionPage section={section} />} />
                        {sectionSteps(section).map(step => (
                            <Route
                                key={step.id}
                                path={stepPath(section, step)}
                                element={isEvaluationStep(step)
                                    ? <EvaluationPage key={progressKey(section, step)} section={section} step={step} />
                                    : <SubsectionPage key={progressKey(section, step)} section={section} sub={step} />}
                            />
                        ))}
                    </Fragment>
                ))}
            </Route>
        </Routes>
    )
}

export default App
