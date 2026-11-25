import type { Section } from './types'
import PreguntaPractica from '../components/PreguntaPractica'
import SeleccionMultiple from '../components/SeleccionMultiple'
import DescargarCertificado from '../components/DescargarCertificado'


function Overview() {
    return (<h3><strong>Felicitaciones por llegar hasta aquí </strong></h3>)
}


function CierreCurso() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎉 ¡Felicitaciones! </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>Ha completado satisfactoriamente los cuatro módulos del curso:</p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ Derechos Laborales de Mujeres y Hombres</li>
                        <li>✅ Igualdad de Género e Igualdad Salarial</li>
                        <li>✅ Prevención de la Violencia, el Acoso y la Discriminación en el Trabajo</li>
                        <li>✅ Buenas Prácticas Laborales e Inclusión Organizacional</li>
                    </ul>
                    <p>
                        Durante este proceso ha fortalecido sus conocimientos sobre derechos laborales, igualdad de oportunidades, igualdad salarial, trabajo de igual valor, prevención de la discriminación, prevención de la violencia y promoción de ambientes laborales inclusivos y respetuosos.
                    </p>
                    <p>
                        Los conocimientos adquiridos le permitirán reconocer prácticas adecuadas dentro del entorno de trabajo, ejercer sus derechos con responsabilidad y contribuir activamente a la construcción de espacios laborales basados en el respeto, la igualdad y la dignidad humana.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Antes de continuar </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        A continuación, realizará la <strong>Evaluación Final General del Curso</strong>, cuyo objetivo es verificar los conocimientos adquiridos durante el desarrollo de la capacitación.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Importante: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Lea cada pregunta con atención.</li>
                            <li>✅ Seleccione la respuesta que considere correcta.</li>
                            <li>✅ Puede responder la evaluación una vez finalizada la revisión de todos los contenidos.</li>
                            <li>✅ La aprobación de esta evaluación es uno de los requisitos para la obtención del certificado del curso.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <div className="rounded-lg p-6 border border-green-600 bg-green-50 space-y-2 leading-7 text-center">
                    <p className="text-lg"><strong>Le deseamos muchos éxitos.</strong></p>
                    <p>
                        ¡Gracias por su participación y compromiso con la construcción de ambientes laborales más justos, seguros e inclusivos!
                    </p>
                </div>
            </section>
        </>
    )
}

function FinalizacionCurso() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>✅ Finalización del Curso </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Felicitaciones por completar el curso <strong>"Derechos Laborales, Igualdad Laboral, Igualdad de Género, No Discriminación y Trabajo de Igual Valor"</strong>.
                    </p>
                    <p>
                        Su participación demuestra el compromiso con la promoción de ambientes laborales respetuosos, inclusivos, equitativos y libres de discriminación.
                    </p>
                    <p>
                        Le invitamos a aplicar los conocimientos adquiridos en sus actividades diarias y a contribuir activamente al fortalecimiento de una cultura organizacional basada en el respeto, la igualdad de oportunidades y la dignidad humana.
                    </p>
                    <p>
                        Gracias por formar parte de este proceso de aprendizaje.
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎓 Emisión de Certificado </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>Para obtener el certificado del curso es necesario:</p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ Completar los 4 módulos.</li>
                        <li>✅ Aprobar la Evaluación Final General del Curso.</li>
                        <li>✅ Visualizar los recursos obligatorios.</li>
                    </ul>
                    <DescargarCertificado />
                </div>
            </section>
        </>
    )
}
const modulo5: Section = {
    id: "modulo5",
    title: "Cierre Del Curso",
    waitSeconds: 0,
    Overview,
    subsections: [
        {
            id: 'unidad1',
            title: 'Felicidades',
            waitSeconds: 0,
            Content: CierreCurso
        },

        {
            id: 'final-eval',
            evaluation: {
                title: "Examen Final General Del Curso",
                intro: (<>
                    <h1><strong>Derechos Laborales, Igualdad Laboral, Igualdad de Género, No Discriminación y Trabajo de Igual Valor </strong></h1>
                    <h3><strong>Instrucciones:</strong></h3>
                    <p>Seleccione la respuesta que considere correcta. Esta evaluación tiene como finalidad verificar los conocimientos adquiridos durante todo el curso.</p><br />
                    <section className="mb-12">
                        <h1 className="text-2xl mb-4">
                            <strong>Escala de Resultados </strong>
                        </h1>
                        <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                            <ul className="pl-4 space-y-2">
                                <li>✅ <strong>18 a 20 respuestas correctas:</strong> Excelente comprensión de los temas abordados.</li>
                                <li>✅ <strong>15 a 17 respuestas correctas:</strong> Buen nivel de conocimiento.</li>
                                <li>✅ <strong>12 a 14 respuestas correctas:</strong> Nivel satisfactorio; se recomienda reforzar algunos temas.</li>
                                <li>⚠️ <strong>Menos de 12 respuestas correctas:</strong> Se recomienda revisar nuevamente los contenidos del curso antes de concluir la capacitación.</li>
                            </ul>
                        </div>
                    </section>

                </>
                ),
                questionsToAsk: 20,
                passingScore: 12,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: true,
                questions: [
                    {
                        type: 'single',
                        prompt: 'Los derechos laborales son:',
                        options: ['Renunciables', 'Irrenunciables', 'Opcionales', 'Negociables'],
                        correct: 'Irrenunciables'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál es la institución encargada de supervisar el cumplimiento de la normativa laboral en Ecuador?',
                        options: ['Registro Civil', 'Ministerio del Trabajo', 'Municipio', 'ANT'],
                        correct: 'Ministerio del Trabajo'
                    },
                    {
                        type: 'single',
                        prompt: 'La dignidad humana implica:',
                        options: ['Tener un cargo superior', 'Recibir privilegios especiales', 'Merecer respeto y trato justo', 'Tener mayor antigüedad'],
                        correct: 'Merecer respeto y trato justo'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál de los siguientes es un principio fundamental del derecho laboral?',
                        options: ['Competitividad', 'Irrenunciabilidad de derechos', 'Productividad', 'Rentabilidad'],
                        correct: 'Irrenunciabilidad de derechos'
                    },
                    {
                        type: 'single',
                        prompt: 'La igualdad de oportunidades significa:',
                        options: ['Favorecer a determinados grupos', 'Garantizar acceso justo para todas las personas', 'Contratar únicamente mujeres', 'Contratar únicamente hombres'],
                        correct: 'Garantizar acceso justo para todas las personas'
                    },
                    {
                        type: 'single',
                        prompt: 'El género se refiere a:',
                        options: ['Características biológicas', 'Roles y expectativas sociales', 'ADN', 'Genética'],
                        correct: 'Roles y expectativas sociales'
                    },
                    {
                        type: 'single',
                        prompt: 'La igualdad de género implica:',
                        options: ['Igualdad de oportunidades', 'Privilegios para un grupo', 'Diferencias salariales', 'Restricciones laborales'],
                        correct: 'Igualdad de oportunidades'
                    },
                    {
                        type: 'single',
                        prompt: 'La brecha salarial corresponde a:',
                        options: ['Un beneficio económico', 'Una diferencia injustificada de remuneración', 'Una bonificación', 'Un incentivo laboral'],
                        correct: 'Una diferencia injustificada de remuneración'
                    },
                    {
                        type: 'single',
                        prompt: 'El trabajo de igual valor promueve:',
                        options: ['Diferencias salariales', 'Equidad salarial', 'Competencia interna', 'Antigüedad laboral'],
                        correct: 'Equidad salarial'
                    },
                    {
                        type: 'single',
                        prompt: 'Las decisiones laborales deben basarse principalmente en:',
                        options: ['Edad', 'Género', 'Méritos y competencias', 'Estado civil'],
                        correct: 'Méritos y competencias'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál de las siguientes situaciones constituye discriminación laboral?',
                        options: ['Contratar a la persona más capacitada', 'Excluir a una persona por su edad', 'Capacitar trabajadores', 'Evaluar desempeño'],
                        correct: 'Excluir a una persona por su edad'
                    },
                    {
                        type: 'single',
                        prompt: 'La violencia laboral es:',
                        options: ['Un desacuerdo ocasional', 'Una conducta que puede causar daño físico o psicológico', 'Una capacitación', 'Una evaluación'],
                        correct: 'Una conducta que puede causar daño físico o psicológico'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál es un ejemplo de acoso laboral?',
                        options: ['Felicitar el desempeño', 'Humillar constantemente a un trabajador', 'Capacitar personal', 'Delegar tareas habituales'],
                        correct: 'Humillar constantemente a un trabajador'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál de las siguientes conductas constituye acoso sexual?',
                        options: ['Solicitar un informe', 'Enviar mensajes sexuales no solicitados', 'Realizar una capacitación', 'Entregar instrucciones'],
                        correct: 'Enviar mensajes sexuales no solicitados'
                    },
                    {
                        type: 'single',
                        prompt: 'Si una persona es víctima o testigo de violencia, acoso o discriminación, debe:',
                        options: ['Ignorar la situación', 'Utilizar los canales de denuncia establecidos', 'Compartir rumores', 'Publicar el caso en redes sociales'],
                        correct: 'Utilizar los canales de denuncia establecidos'
                    },
                    {
                        type: 'single',
                        prompt: 'La selección inclusiva busca:',
                        options: ['Favorecer determinados grupos', 'Garantizar igualdad de oportunidades', 'Limitar la participación', 'Excluir candidatos'],
                        correct: 'Garantizar igualdad de oportunidades'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál es uno de los beneficios de la diversidad organizacional?',
                        options: ['Menor innovación', 'Mayor innovación', 'Menor productividad', 'Mayor rotación'],
                        correct: 'Mayor innovación'
                    },
                    {
                        type: 'single',
                        prompt: 'La capacitación continua permite:',
                        options: ['Mantener conocimientos obsoletos', 'Desarrollar nuevas competencias', 'Limitar oportunidades', 'Reducir productividad'],
                        correct: 'Desarrollar nuevas competencias'
                    },
                    {
                        type: 'single',
                        prompt: 'La conciliación entre la vida laboral y familiar favorece:',
                        options: ['El estrés laboral', 'El equilibrio entre responsabilidades', 'El ausentismo', 'La disminución del desempeño'],
                        correct: 'El equilibrio entre responsabilidades'
                    },
                    {
                        type: 'single',
                        prompt: 'Una cultura organizacional positiva promueve:',
                        options: ['Violencia laboral', 'Acoso', 'Discriminación', 'Respeto, inclusión y colaboración'],
                        correct: 'Respeto, inclusión y colaboración'
                    }
                ]

            }
        },
        {
            id: 'mensajes-finales',
            title: 'Finalizacion del Curso',
            waitSeconds: 0,
            Content: FinalizacionCurso
        }
    ]
    ,

}

export default modulo5