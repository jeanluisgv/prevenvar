import type { Section } from './types'
import PreguntaPractica from '../components/PreguntaPractica'
import SeleccionMultiple from '../components/SeleccionMultiple'

import VideoBase from '../components/VideoBase'
import ImageBase from '../components/ImageBase'

import img_3_1_1 from '../assets/img_3_1_1.jpg'
import img_3_2_1 from '../assets/img_3_2_1.jpg'
import img_3_3_1 from '../assets/img_3_3_1.jpg'
import img_3_4_1 from '../assets/img_3_4_1.jpg'
import img_3_5_1 from '../assets/img_3_5_1.jpg'
import img_3_6_1 from '../assets/img_3_6_1.jpg'


function Overview() {
    return (
        <>

            <h3><strong>Duracion Total:</strong> 10 Horas</h3>
            <VideoBase src="https://drive.google.com/file/d/1vn6JrXQ4yDSeOKdgUTNFMw6Q87ec3glJ/preview" title="Intro to modulo 3" />

            <h3>
                <strong>Objetivo Del Modulo </strong>


            </h3>
            <div>
                <p>
                    Al finalizar este módulo, las personas trabajadoras identificarán situaciones de violencia, acoso laboral, acoso sexual y discriminación en el trabajo, conocerán los mecanismos de denuncia y aplicarán buenas prácticas para promover una cultura laboral basada en el respeto, la igualdad y la dignidad humana.
                </p>
            </div>
        </>

    )
}


function Unidad1() {
    return (
        <>
            {/* ---------- Contenido (video introductorio) ---------- */}
            <ImageBase src={img_3_1_1} />

            {/* ---------- 1.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.1 Conceptos Generales </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        La violencia laboral es cualquier acción, conducta o comportamiento que cause daño físico, psicológico, verbal, sexual o económico a una persona dentro del entorno de trabajo.
                    </p>
                    <p>
                        Puede ocurrir entre compañeros de trabajo, superiores, subordinados, clientes, contratistas o cualquier persona relacionada con la actividad laboral.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>La violencia laboral afecta: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-1">
                            <li>La salud física y mental.</li>
                            <li>El clima laboral.</li>
                            <li>La productividad.</li>
                            <li>La motivación de los trabajadores.</li>
                            <li>La reputación de la empresa.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 1.2 ---------- */}
            <section className="mb-12">

                <h1 className="text-2xl mb-4">
                    <strong>1.2 Tipos de Violencia Laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>

                    <h3 className="text-lg pt-2">
                        <strong>Violencia Física </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Comprende agresiones que provocan daño corporal.</p>
                        <p><strong>Ejemplos:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Golpes.</li>
                            <li>Empujones.</li>
                            <li>Amenazas físicas.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Violencia Psicológica </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Acciones que afectan la estabilidad emocional de la persona.</p>
                        <p><strong>Ejemplos:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Humillaciones.</li>
                            <li>Burlas constantes.</li>
                            <li>Amenazas.</li>
                            <li>Aislamiento.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Violencia Verbal </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Uso de palabras ofensivas o agresivas.</p>
                        <p><strong>Ejemplos:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Insultos.</li>
                            <li>Gritos.</li>
                            <li>Comentarios despectivos.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Violencia Sexual </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Conductas de naturaleza sexual no deseadas.</p>
                        <p><strong>Ejemplos:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Comentarios sexuales inapropiados.</li>
                            <li>Insinuaciones.</li>
                            <li>Contacto físico no consentido.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Violencia Económica </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Acciones destinadas a perjudicar económicamente al trabajador.</p>
                        <p><strong>Ejemplos:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Retención injustificada de pagos.</li>
                            <li>Negación indebida de beneficios.</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* ---------- 1.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.3 ¿Qué hacer ante una situación de violencia laboral?
                    </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7 mb-4">
                    <p>Si una persona es víctima o testigo de violencia laboral, se recomienda: </p>

                    <ul className="pl-6 space-y-1">
                        <li>✅ Mantener la calma.</li>
                        <li>✅ Registrar los hechos ocurridos. </li>
                        <li>✅ Guardar pruebas cuando existan. </li>
                        <li>✅ Informar a la jefatura o al área de Recursos Humanos. </li>
                        <li>✅ Utilizar los canales internos de denuncia establecidos por la empresa. </li>
                        <li>
                            ✅ Solicitar apoyo cuando la situación afecte su bienestar físico o emocional.
                        </li>
                    </ul>

                    <p>
                        <strong>Idea Clave:</strong>
                        <br />
                        La violencia laboral no debe normalizarse ni mantenerse en silencio. Reportarla oportunamente permite adoptar medidas de protección y prevenir que la situación continúe.
                    </p>


                </div>
                <div className="ml-4 leading-7">
                    <h2 className="text-lg"><strong>Ejemplo práctico </strong></h2>
                    <p className="mt-2">Carlos recibe insultos y gritos constantes de su supervisor frente a sus compañeros. Estas conductas ocurren varias veces por semana y le generan estrés y desmotivación.</p>
                    <p className='mt-2'>
                        <strong>Análisis:</strong> La situación constituye violencia verbal y psicológica porque afecta la dignidad y bienestar de la persona trabajadora.
                    </p>
                    <p className='mt-2'>
                        <strong>Idea Clave:</strong> Las relaciones laborales deben basarse en el respeto. Ninguna persona debe ser objeto de humillaciones, amenazas o agresiones dentro del entorno laboral.
                    </p>

                </div>


            </section>

            {/* ---------- Video ---------- */}

            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Violencia laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <VideoBase src="https://drive.google.com/file/d/1R6f8RFkh76V_tR4Ovwby8lmb5CHA6uJ2/preview" title="Violencias en el lugar de trabajo" />
                </div>
            </section>
        </>
    )
}


function Unidad2() {
    return (
        <>
            <ImageBase src={img_3_2_1} />
            {/* ---------- 2.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.1 ¿Qué es el acoso laboral? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        El acoso laboral o <em>mobbing</em> consiste en conductas repetidas que buscan intimidar, humillar, aislar o perjudicar a un trabajador o trabajadora.
                    </p>
                    <p>
                        Estas conductas afectan la dignidad, generan estrés y deterioran el ambiente de trabajo.
                    </p>
                </div>
            </section>

            {/* ---------- 2.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.2 Conductas Prohibidas </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>Son ejemplos de acoso laboral:</p>
                    <ul className="pl-4 space-y-1">
                        <li>❌ Ridiculizar a una persona delante de otros trabajadores.</li>
                        <li>❌ Excluirla deliberadamente de reuniones importantes.</li>
                        <li>❌ Asignar tareas imposibles de cumplir.</li>
                        <li>❌ Difundir rumores.</li>
                        <li>❌ Gritar o insultar constantemente.</li>
                        <li>❌ Amenazar con despidos sin justificación.</li>
                    </ul>
                </div>
            </section>

            {/* ---------- 2.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.3 Consecuencias del Acoso Laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>

                    <h3 className="text-lg pt-2">
                        <strong>Para la persona: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Estrés.</li>
                            <li>Ansiedad.</li>
                            <li>Depresión.</li>
                            <li>Baja autoestima.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Para la empresa: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Mayor rotación de personal.</li>
                            <li>Ausentismo.</li>
                            <li>Disminución de productividad.</li>
                            <li>Deterioro del clima laboral.</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* ---------- 2.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.4 Consecuencias del Acoso Laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>Un desacuerdo ocasional entre compañeros no necesariamente constituye acoso laboral.

                        El acoso laboral suele caracterizarse por: </p>
                    <ul className="pl-6 space-y-1">
                        <li>
                            ✅ Conductas repetidas.
                        </li>
                        <li>✅ Intención de intimidar o perjudicar. </li>
                        <li>✅ Afectación a la dignidad de la persona. </li>
                        <li>
                            ✅ Persistencia en el tiempo.
                        </li>
                    </ul>
                    <p><strong>Ejemplo</strong></p>
                    <p>Una discusión aislada entre dos compañeros no constituye necesariamente acoso laboral.

                        Las humillaciones constantes durante varios meses sí pueden constituir acoso laboral.

                        Esto fortalece mucho la capacitación. </p>
                </div>
            </section>
            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Identificando el acoso laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        <a
                            href="https://www.youtube.com/watch?v=QZG1Yvrk-2Y"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-700"
                        >
                            PIEL FINA | Corto sobre Acoso Laboral | Gobierno Vasco | Departamento Economía, Trabajo y Empleo
                        </a>
                    </p>

                    <VideoBase src="https://drive.google.com/file/d/1h9LYdG7IfiFma6MNjCnWofjL6ouJVu_0/preview" title="IEL FINA | Corto sobre Acoso Laboral" />
                </div>
            </section>

            {/* ---------- Caso Práctico ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Caso Práctico </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <PreguntaPractica
                        contexto="Juan recibe burlas constantes de su supervisor frente a sus compañeros. Además, se le asignan tareas imposibles de completar y se le excluye de reuniones de trabajo."
                        pregunta="¿Esta situación puede considerarse acoso laboral?"
                        opciones={['Sí', 'No', 'Solo si existe agresión física', 'Solo si la empresa lo reconoce']}
                        correcta="Sí"
                        explicacion="Las burlas constantes, la asignación de tareas imposibles y la exclusión de reuniones son conductas repetidas que buscan humillar y aislar a Juan. Esto constituye acoso laboral, aunque no exista agresión física y aunque la empresa no lo haya reconocido."
                    />
                </div>
            </section>
        </>
    )
}


function Unidad3() {
    return (
        <>
            <ImageBase src={img_3_3_1} />
            {/* ---------- 3.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.1 Concepto </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        El acoso sexual es toda conducta de naturaleza sexual no deseada que afecta la dignidad de una persona y genera un ambiente intimidante, hostil, humillante u ofensivo.
                    </p>
                    <p>
                        Puede ocurrir entre compañeros, supervisores o cualquier persona vinculada al entorno laboral.
                    </p>
                </div>
            </section>

            {/* ---------- 3.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.2 Ejemplos de Acoso Sexual </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <ul className="pl-4 space-y-1">
                        <li>❌ Comentarios o bromas sexuales.</li>
                        <li>❌ Solicitudes de favores sexuales.</li>
                        <li>❌ Miradas incómodas o insistentes.</li>
                        <li>❌ Mensajes con contenido sexual.</li>
                        <li>❌ Contacto físico no consentido.</li>
                        <li>❌ Promesas de beneficios a cambio de favores sexuales.</li>
                    </ul>
                </div>
            </section>

            {/* ---------- 3.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.3 Prevención </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>Para prevenir el acoso sexual:</p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ Respetar los límites personales.</li>
                        <li>✅ Mantener conductas profesionales.</li>
                        <li>✅ Aplicar protocolos internos.</li>
                        <li>✅ Capacitar continuamente al personal.</li>
                        <li>✅ Reportar conductas inapropiadas.</li>
                    </ul>
                </div>
            </section>
            {/* ---------- 3.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.4 ¿Qué hacer ante una situación de acoso sexual? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <ul className="pl-4 space-y-1">
                        <li>✅ Conservar evidencias. </li>
                        <li>✅ Informar mediante los canales internos. </li>
                        <li>✅ Solicitar apoyo institucional. </li>
                        <li>✅ Evitar enfrentar la situación en soledad. </li>
                        <li>✅ Utilizar los procedimientos establecidos. </li>
                    </ul>
                    <p>
                        <strong>Idea clave
                        </strong><br />

                        Toda persona tiene derecho a trabajar en un ambiente libre de acoso sexual.
                    </p>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Prevención del acoso sexual </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">


                    <VideoBase src="https://drive.google.com/file/d/1OA0Anf0t7uQQlsuA7JjbB3dmwBDJKqm1/preview" title="¿Alguna vez viviste o escuchaste sobre una situación de violencia laboral así?" />
                </div>
            </section>

            {/* ---------- Actividad ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Actividad Unidad 3 </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <SeleccionMultiple
                        pregunta="Seleccione cuáles son ejemplos de acoso sexual."
                        opciones={[
                            'Solicitar documentación laboral',
                            'Enviar mensajes sexuales no solicitados',
                            'Hacer comentarios sexuales inapropiados',
                            'Felicitar el trabajo realizado',
                            'Ofrecer beneficios laborales a cambio de favores sexuales',
                        ]}
                        correctas={[
                            'Enviar mensajes sexuales no solicitados',
                            'Hacer comentarios sexuales inapropiados',
                            'Ofrecer beneficios laborales a cambio de favores sexuales',
                        ]}
                        explicacion="Los mensajes sexuales no solicitados, los comentarios sexuales inapropiados y ofrecer beneficios a cambio de favores sexuales son conductas de naturaleza sexual no deseadas que afectan la dignidad de la persona. Solicitar documentación y felicitar el trabajo son conductas profesionales normales."
                    />
                </div>
            </section>
        </>
    )
}

function Unidad4() {
    return (
        <>
            {/* ---------- 4.1 ---------- */}
            <ImageBase src={img_3_4_1} />
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.1 ¿Qué es la discriminación laboral? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        La discriminación laboral ocurre cuando una persona recibe un trato desigual o desfavorable debido a características personales que no tienen relación con su capacidad para desempeñar un trabajo.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>La discriminación puede afectar: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Contratación.</li>
                            <li>✅ Promoción.</li>
                            <li>✅ Capacitación.</li>
                            <li>✅ Remuneración.</li>
                            <li>✅ Permanencia en el empleo.</li>
                            <li>✅ Acceso a beneficios.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Ninguna persona debe ser discriminada por motivos de: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Sexo.</li>
                            <li>Género.</li>
                            <li>Edad.</li>
                            <li>Embarazo.</li>
                            <li>Discapacidad.</li>
                            <li>Nacionalidad.</li>
                            <li>Etnia.</li>
                            <li>Religión.</li>
                            <li>Orientación sexual.</li>
                            <li>Estado civil.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 4.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.2 Discriminación Directa </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        Ocurre cuando una persona recibe un trato menos favorable por una característica personal.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplos </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>❌ Rechazar a una candidata porque está embarazada.</li>
                            <li>❌ Negar un ascenso por ser mujer.</li>
                            <li>❌ Excluir a una persona por tener discapacidad.</li>
                            <li>❌ No contratar a una persona por ser mayor de 50 años.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Caso práctico </strong>
                    </h3>
                    <div className="pl-4">
                        <PreguntaPractica
                            contexto={<>Una empresa publica una vacante indicando: <em>"Se requiere personal menor de 30 años."</em></>}
                            pregunta="¿Qué tipo de conducta representa?"
                            opciones={['Selección objetiva', 'Discriminación directa', 'Evaluación de desempeño', 'Capacitación']}
                            correcta="Discriminación directa"
                            explicacion="La vacante excluye a las personas de 30 años o más únicamente por su edad, una característica personal que no tiene relación con su capacidad para desempeñar el trabajo. Por eso es discriminación directa."
                        />
                    </div>
                </div>
            </section>

            {/* ---------- 4.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.3 Discriminación Indirecta </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        Se produce cuando una norma aparentemente neutral afecta negativamente a ciertos grupos.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Una empresa exige disponibilidad total para viajar permanentemente sin que sea una necesidad real del cargo.
                        </p>
                        <p>
                            Este requisito podría excluir injustificadamente a personas con responsabilidades familiares o condiciones de salud específicas.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 4.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.4 Trato Igualitario en el Trabajo </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        El trato igualitario implica que todas las personas reciban las mismas oportunidades y el mismo respeto durante su vida laboral.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Esto incluye: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Igual acceso a capacitación.</li>
                            <li>✅ Igual acceso a ascensos.</li>
                            <li>✅ Igualdad salarial por trabajo de igual valor.</li>
                            <li>✅ Respeto a la diversidad.</li>
                            <li>✅ Aplicación justa de normas y procedimientos.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 4.5 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.5 Inclusión y Ajustes Razonables </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        La inclusión laboral no significa tratar a todas las personas exactamente de la misma manera, sino eliminar barreras para que todas puedan desarrollar su trabajo en igualdad de condiciones.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplos </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Rampas de acceso para personas con movilidad reducida.</li>
                            <li>✅ Información accesible.</li>
                            <li>✅ Adecuaciones razonables del puesto.</li>
                            <li>✅ Horarios flexibles cuando corresponda legalmente.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Discriminacion en el Trabajo </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">


                    <VideoBase src="https://drive.google.com/file/d/1V_xxqTz8K_budAeijaABNH_qAVyhmraM/preview" title="Discriminacion en el Trabajo" />
                </div>
            </section>
        </>
    )
}

function Unidad5() {
    return (
        <>
            {/* ---------- 5.1 ---------- */}
            <section className="mb-12">
                <ImageBase src={img_3_5_1} />
                <h1 className="text-2xl mt-4 mb-4">
                    <strong>5.1 Cómo Denunciar </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        Toda persona víctima o testigo de violencia, acoso o discriminación puede reportar los hechos utilizando los canales establecidos por la empresa.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Es recomendable: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Registrar fechas y hechos.</li>
                            <li>Guardar evidencias.</li>
                            <li>Identificar posibles testigos.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 5.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.2 Canales Internos </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>Los principales canales pueden incluir:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Recursos Humanos.</li>
                        <li>Comité de Igualdad.</li>
                        <li>Comité de Ética.</li>
                        <li>Canal de denuncias.</li>
                        <li>Jefatura inmediata.</li>
                    </ul>
                </div>
            </section>

            {/* ---------- 5.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.3 Confidencialidad </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>Toda denuncia debe ser atendida con:</p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ Respeto.</li>
                        <li>✅ Confidencialidad.</li>
                        <li>✅ Imparcialidad.</li>
                        <li>✅ Protección contra represalias.</li>
                    </ul>
                </div>
            </section>
            {/* ---------- 5.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.4 Investigación de los hechos </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>Cuando se recibe una denuncia: </p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ La organización debe analizar la información recibida. </li>
                        <li>✅ Revisar evidencias disponibles. </li>
                        <li>✅ Escuchar a las personas involucradas. </li>
                        <li>✅ Actuar con imparcialidad. </li>
                        <li>✅ Mantener la confidencialidad durante el proceso. </li>
                    </ul>
                    <p><strong>Idea clave</strong></p>
                    <p>Toda denuncia debe ser evaluada de manera objetiva y respetuosa. </p>
                </div>
            </section>
            {/* ---------- 5.5 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.5 Protección de la persona denunciante </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>Las personas que denuncian de buena fe tienen derecho a: </p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ No sufrir represalias. </li>
                        <li>✅ Ser tratadas con respeto. </li>
                        <li>✅ Mantener la confidencialidad de la información. </li>
                        <li>✅ Recibir información sobre el proceso cuando corresponda. </li>
                    </ul>

                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: ¿Qué hacer si eres víctima o testigo? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        <a
                            href="https://www.youtube.com/watch?v=61P3JNA2qiw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-700"
                        >
                            Acoso laboral en Ecuador: Cómo identificarlo y qué hacer (Sector público y privado)
                        </a>
                    </p>

                    <VideoBase src="https://drive.google.com/file/d/1XApaHGPOCOkGyYgu2csyKqrE9nZ7XdXX/preview" title="Acoso laboral en Ecuador: Cómo identificarlo y qué hacer" />
                </div>
            </section>

            {/* ---------- Actividad Práctica ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Actividad Práctica </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <PreguntaPractica
                        contexto="María observa que un compañero realiza comentarios discriminatorios contra una trabajadora mayor de 60 años."
                        pregunta="¿Cuál es la acción correcta?"
                        opciones={[
                            'Ignorar la situación.',
                            'Compartir el hecho con otros compañeros.',
                            'Utilizar los canales de denuncia establecidos.',
                            'Publicarlo en redes sociales.',
                        ]}
                        correcta="Utilizar los canales de denuncia establecidos."
                        explicacion="Los canales de denuncia de la empresa permiten atender el caso con respeto, confidencialidad e imparcialidad, y protegen a la trabajadora contra represalias. Ignorar la situación permite que continúe, y comentarlo con compañeros o en redes sociales expone a la víctima y no resuelve el problema."
                    />
                </div>
            </section>
        </>
    )
}

function Unidad6() {
    return (
        <>
            {/* ---------- 6.1 ---------- */}
            <section className="mb-12">
                <ImageBase src={img_3_6_1} />
                <h1 className="text-2xl mt-4 mb-4">
                    <strong>6.1 Comunicación Asertiva </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        La comunicación asertiva consiste en expresar ideas y opiniones con claridad, respeto y empatía.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplos </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Escuchar a los demás.</li>
                            <li>✅ Hablar con respeto.</li>
                            <li>✅ Resolver conflictos mediante el diálogo.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 6.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.2 Convivencia Laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>La convivencia saludable implica:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Colaboración.</li>
                        <li>Respeto.</li>
                        <li>Solidaridad.</li>
                        <li>Trabajo en equipo.</li>
                    </ul>
                </div>
            </section>

            {/* ---------- 6.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.3 Respeto Mutuo </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>Todas las personas merecen un trato digno independientemente de:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Edad.</li>
                        <li>Género.</li>
                        <li>Etnia.</li>
                        <li>Nacionalidad.</li>
                        <li>Discapacidad.</li>
                        <li>Orientación sexual.</li>
                        <li>Creencias.</li>
                    </ul>
                </div>
            </section>

            {/* ---------- 6.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mt-4 mb-4">
                    <strong>6.4 Buenas prácticas para prevenir violencia, acoso y discriminación</strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Utilizar lenguaje respetuoso. </li>
                            <li>✅ Escuchar opiniones diferentes. </li>
                            <li>✅ Resolver conflictos mediante el diálogo. </li>
                            <li>✅ Reportar situaciones inapropiadas. </li>
                            <li>✅ Respetar la diversidad. </li>
                            <li>✅ Promover la inclusión. </li>
                            <li>✅ Colaborar con los compañeros de trabajo. </li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="mb-12">
                <h2 className="text-lg mb-2"><strong>Caso práctico</strong></h2>
                <h3 className="mb-2"><strong>Situación</strong></h3>
                <PreguntaPractica
                    contexto={<>
                        <p>
                            Durante una reunión, un trabajador realiza comentarios ofensivos sobre la nacionalidad de un compañero. Varias personas escuchan los comentarios, pero nadie interviene.
                        </p>

                    </>}
                    pregunta="¿Qué acción contribuye a una cultura de respeto? "
                    opciones={["Ignorar la situación. ", "Reírse de los comentarios.", "Promover el respeto y reportar la situación cuando corresponda.", "Compartir los comentarios con otras personas. "]}
                    correcta="Promover el respeto y reportar la situación cuando corresponda."
                    explicacion="Todas las personas contribuyen a construir ambientes laborales respetuosos mediante conductas responsables y el rechazo de cualquier forma de violencia o discriminación."
                />
            </section>
            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Construyendo un ambiente saludable </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        <a
                            href="https://www.youtube.com/watch?v=WIOhCNzxtGs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-700"
                        >
                            Convivencia laboral: tips e ideas para una mejor experiencia en el trabajo
                        </a>
                    </p>

                    <VideoBase src="https://drive.google.com/file/d/1MuJj7fSMkp9aHJZgEGU8t5ECHfmymEjX/preview" title="Convivencia laboral: tips e ideas para una mejor experiencia en el trabajo" />
                </div>
            </section>

            {/* ---------- Actividad Final ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Actividad Final Unidad 6 </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <SeleccionMultiple
                        pregunta="Marque las acciones que contribuyen a una cultura de respeto."
                        opciones={[
                            'Escuchar opiniones diferentes',
                            'Utilizar lenguaje respetuoso',
                            'Tratar a todos con igualdad',
                            'Colaborar con compañeros',
                            'Reportar casos de violencia o discriminación',
                        ]}
                        correctas={[
                            'Escuchar opiniones diferentes',
                            'Utilizar lenguaje respetuoso',
                            'Tratar a todos con igualdad',
                            'Colaborar con compañeros',
                            'Reportar casos de violencia o discriminación',
                        ]}
                        explicacion="Todas estas acciones contribuyen a una cultura de respeto: promueven la comunicación asertiva, la convivencia saludable, el trato digno para todas las personas y la protección frente a la violencia y la discriminación."
                    />
                </div>
            </section>
        </>
    )
}

const modulo3: Section = {
    id: "modulo3",
    title: "Modulo 3: Prevención De La Violencia, El Acoso Y La Discriminacion En El Trabajo",
    waitSeconds: 600,
    Overview,
    subsections: [
        {
            id: 'unidad1',
            title: 'Unidad 1: Violencia Laboral',
            waitSeconds: 1000,
            Content: Unidad1
        },
        {
            id: 'unidad1-eval',
            evaluation: {
                title: 'Evaluación Unidad 1',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: "single",
                        prompt: "La violencia laboral es:",
                        options: [
                            "Un conflicto ocasional sin consecuencias.",
                            "Una conducta que puede causar daño físico o psicológico.",
                            "Una diferencia de opinión.",
                            "Un error administrativo.",
                        ],
                        correct: "Una conducta que puede causar daño físico o psicológico.",
                        explanation:
                            "La violencia laboral comprende acciones, comportamientos o situaciones que afectan la integridad física, emocional o psicológica de una persona trabajadora, generando consecuencias negativas para su bienestar y desempeño.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál es un ejemplo de violencia psicológica?",
                        options: [
                            "Entregar un informe.",
                            "Humillar constantemente a un compañero.",
                            "Cumplir una orden laboral.",
                            "Solicitar una reunión.",
                        ],
                        correct: "Humillar constantemente a un compañero.",
                        explanation:
                            "Las burlas, humillaciones, amenazas, menosprecios o críticas constantes son formas de violencia psicológica que pueden afectar la autoestima, la salud emocional y el ambiente de trabajo.",
                    },
                    {
                        type: "single",
                        prompt: "¿Qué afecta la violencia laboral?",
                        options: [
                            "Solamente a la víctima.",
                            "A la víctima, al clima laboral y a la organización.",
                            "Únicamente a Recursos Humanos.",
                            "Solo a los supervisores.",
                        ],
                        correct: "A la víctima, al clima laboral y a la organización.",
                        explanation:
                            "La violencia laboral no solo perjudica a quien la sufre directamente. También afecta las relaciones entre compañeros, disminuye la confianza, reduce la productividad y deteriora el clima organizacional.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál de las siguientes situaciones constituye violencia económica?",
                        options: [
                            "Retener injustificadamente pagos al trabajador",
                            "Otorgar vacaciones",
                            "Realizar capacitaciones",
                            "Reconocer un logro",
                        ],
                        correct: "Retener injustificadamente pagos al trabajador",
                        explanation:
                            "La violencia económica ocurre cuando se limita o afecta injustamente el acceso de una persona a los recursos económicos que le corresponden, como salarios, beneficios o pagos legalmente reconocidos.",
                    },
                    {
                        type: "single",
                        prompt: "Si una persona es víctima o testigo de violencia laboral, debe:",
                        options: [
                            "Ignorar la situación",
                            "Utilizar los canales establecidos para reportarla",
                            "Difundir rumores",
                            "Guardar silencio",
                        ],
                        correct: "Utilizar los canales establecidos para reportarla",
                        explanation:
                            "La violencia laboral puede afectar la seguridad, la dignidad y el bienestar de las personas en el lugar de trabajo. Tanto las víctimas como los testigos tienen un papel importante en su prevención y atención. Utilizar los canales de denuncia o reporte establecidos por la organización permite que la situación sea investigada y tratada de manera adecuada, contribuyendo a mantener un ambiente laboral seguro, respetuoso y libre de violencia. Ignorar la situación, guardar silencio o difundir rumores puede agravar el problema y dificultar su solución.",
                    },
                ]
            }
        },
        {
            id: 'unidad2',
            title: 'Unidad 2: Acoso Laboral',
            waitSeconds: 1200,
            Content: Unidad2
        },
        {
            id: 'unidad2-eval',
            evaluation: {
                title: 'Evaluación Unidad 2',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: "single",
                        prompt: "El acoso laboral se caracteriza por:",
                        options: [
                            "Una observación ocasional.",
                            "Conductas repetidas que afectan la dignidad de una persona.",
                            "Una capacitación.",
                            "Un cambio de puesto.",
                        ],
                        correct: "Conductas repetidas que afectan la dignidad de una persona.",
                        explanation:
                            "El acoso laboral consiste en conductas reiteradas de hostigamiento, intimidación, humillación o menosprecio que afectan la dignidad, el bienestar y el desempeño de una persona en su lugar de trabajo.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál es una conducta de acoso?",
                        options: [
                            "Capacitar a un trabajador.",
                            "Ridiculizarlo constantemente.",
                            "Felicitar un logro.",
                            "Entregar información.",
                        ],
                        correct: "Ridiculizarlo constantemente.",
                        explanation:
                            "Ridiculizar, humillar o descalificar de forma constante a una persona son conductas de acoso laboral porque generan un ambiente hostil y afectan su autoestima y bienestar emocional.",
                    },
                    {
                        type: "single",
                        prompt: "Una consecuencia del acoso laboral es:",
                        options: [
                            "Mayor motivación.",
                            "Estrés y afectación emocional.",
                            "Mayor satisfacción laboral.",
                            "Mejora del clima laboral.",
                        ],
                        correct: "Estrés y afectación emocional.",
                        explanation:
                            "El acoso laboral puede provocar estrés, ansiedad, desmotivación, problemas de salud emocional e incluso afectar el desempeño y las relaciones laborales de la persona afectada.",
                    },
                    {
                        type: "single",
                        prompt: "Una conducta de acoso laboral puede ser:",
                        options: [
                            "Difundir rumores sobre un trabajador",
                            "Felicitar un desempeño",
                            "Capacitar personal",
                            "Entregar información",
                        ],
                        correct: "Difundir rumores sobre un trabajador",
                        explanation:
                            "Difundir rumores, información falsa o comentarios malintencionados sobre una persona puede dañar su reputación, afectar sus relaciones laborales y constituir una forma de acoso laboral.",
                    },
                    {
                        type: "single",
                        prompt: "El acoso laboral afecta principalmente:",
                        options: [
                            "La dignidad de la persona",
                            "La infraestructura",
                            "Los equipos tecnológicos",
                            "La producción exclusivamente",
                        ],
                        correct: "La dignidad de la persona",
                        explanation:
                            "El acoso laboral vulnera la dignidad, el respeto y la integridad de las personas trabajadoras. Además, puede afectar su salud física y emocional, así como el clima laboral de toda la organización.",
                    },
                ]
            }
        },
        {
            id: 'unidad3',
            title: 'Unidad 3: Acoso Sexual',
            waitSeconds: 0,
            Content: Unidad3
        },
        {
            id: 'unidad3-eval',
            evaluation: {
                title: 'Evaluación Unidad 3',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: "single",
                        prompt: "El acoso sexual es:",
                        options: [
                            "Conducta sexual no deseada.",
                            "Una broma inocente.",
                            "Una práctica aceptable.",
                            "Un estilo de comunicación.",
                        ],
                        correct: "Conducta sexual no deseada.",
                        explanation:
                            "El acoso sexual comprende conductas, comentarios, insinuaciones o comportamientos de naturaleza sexual que no son deseados por la persona que los recibe y que pueden generar incomodidad, intimidación o afectar su bienestar.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál es un ejemplo de acoso sexual?",
                        options: [
                            "Dar instrucciones de trabajo.",
                            "Solicitar favores sexuales a cambio de beneficios.",
                            "Capacitar personal.",
                            "Presentar informes.",
                        ],
                        correct: "Solicitar favores sexuales a cambio de beneficios.",
                        explanation:
                            "Solicitar favores sexuales ofreciendo beneficios laborales o amenazando con consecuencias negativas constituye una forma grave de acoso sexual y vulnera la dignidad y los derechos de las personas trabajadoras.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál de las siguientes conductas puede constituir acoso sexual?",
                        options: [
                            "Solicitar un informe",
                            "Enviar mensajes sexuales no solicitados",
                            "Entregar instrucciones",
                            "Asignar tareas",
                        ],
                        correct: "Enviar mensajes sexuales no solicitados",
                        explanation:
                            "El envío de mensajes, imágenes o comentarios de contenido sexual sin consentimiento puede constituir acoso sexual, especialmente cuando genera incomodidad, presión o un ambiente laboral hostil.",
                    },
                    {
                        type: "single",
                        prompt: "El acoso sexual puede ocurrir entre:",
                        options: [
                            "Solo supervisores",
                            "Solo compañeros",
                            "Cualquier persona relacionada con el ámbito laboral",
                            "Solo clientes",
                        ],
                        correct: "Cualquier persona relacionada con el ámbito laboral",
                        explanation:
                            "El acoso sexual puede producirse entre compañeros de trabajo, supervisores, subordinados, clientes, proveedores u otras personas vinculadas al entorno laboral. Todas las personas tienen derecho a un ambiente de trabajo seguro y respetuoso.",
                    },
                    {
                        type: "single",
                        prompt: "Una acción para prevenir el acoso sexual es:",
                        options: [
                            "Ignorar conductas inapropiadas",
                            "Mantener conductas profesionales",
                            "Compartir rumores",
                            "Evitar reportes",
                        ],
                        correct: "Mantener conductas profesionales",
                        explanation:
                            "Promover relaciones basadas en el respeto, mantener una conducta profesional y comunicar de manera adecuada son acciones que contribuyen a prevenir situaciones de acoso sexual en el lugar de trabajo.",
                    },
                ]
            }
        },
        {
            id: 'unidad4',
            title: 'Unidad 4: Discriminación Laboral Y Trato Igualitario',
            waitSeconds: 900,
            Content: Unidad4
        },
        {
            id: 'unidad4-eval',
            evaluation: {
                title: 'Evaluación Unidad 4',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: "single",
                        prompt: "La discriminación laboral ocurre cuando:",
                        options: [
                            "Todas las personas reciben las mismas oportunidades.",
                            "Una persona recibe un trato desfavorable por características personales.",
                            "Se realiza una capacitación.",
                            "Se entrega una evaluación.",
                        ],
                        correct: "Una persona recibe un trato desfavorable por características personales.",
                        explanation:
                            "La discriminación laboral ocurre cuando una persona es tratada de manera injusta debido a características como su género, edad, discapacidad, origen étnico, religión u otra condición personal, limitando su acceso a oportunidades laborales.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál es un ejemplo de discriminación directa?",
                        options: [
                            "Contratar a la persona más calificada.",
                            "Negar una oportunidad laboral por la edad de la persona.",
                            "Realizar una entrevista.",
                            "Promover capacitación.",
                        ],
                        correct: "Negar una oportunidad laboral por la edad de la persona.",
                        explanation:
                            "La discriminación directa ocurre cuando una persona recibe un trato menos favorable de manera explícita por una característica personal, como la edad, el género, la discapacidad o el origen.",
                    },
                    {
                        type: "single",
                        prompt: "La discriminación indirecta ocurre cuando:",
                        options: [
                            "Una norma aparentemente neutral perjudica a ciertos grupos.",
                            "Existe una capacitación.",
                            "Se realiza una evaluación.",
                            "Se entrega un beneficio.",
                        ],
                        correct: "Una norma aparentemente neutral perjudica a ciertos grupos.",
                        explanation:
                            "La discriminación indirecta se produce cuando una política, requisito o práctica que parece aplicarse por igual a todas las personas termina afectando de forma desproporcionada a un grupo específico.",
                    },
                    {
                        type: "single",
                        prompt: "El trato igualitario implica:",
                        options: [
                            "Aplicar condiciones distintas sin justificación.",
                            "Garantizar respeto y oportunidades para todas las personas.",
                            "Favorecer únicamente a ciertos trabajadores.",
                            "Excluir grupos específicos.",
                        ],
                        correct: "Garantizar respeto y oportunidades para todas las personas.",
                        explanation:
                            "El trato igualitario significa que todas las personas deben recibir respeto, consideración y acceso a oportunidades en condiciones justas, sin favoritismos ni discriminación.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál es un ejemplo de inclusión laboral?",
                        options: [
                            "Limitar la participación de ciertos trabajadores.",
                            "Implementar ajustes razonables para facilitar el trabajo de una persona con discapacidad.",
                            "Negar oportunidades de capacitación.",
                            "Aplicar criterios discriminatorios.",
                        ],
                        correct: "Implementar ajustes razonables para facilitar el trabajo de una persona con discapacidad.",
                        explanation:
                            "La inclusión laboral busca eliminar barreras y promover la participación de todas las personas. Los ajustes razonables permiten que quienes tienen alguna discapacidad puedan desempeñar sus funciones en igualdad de condiciones.",
                    },
                ]
            }
        },
        {
            id: 'unidad5',
            title: 'Unidad 5: Denuncia, Investigacion Y Proteccion De La Victima',
            waitSeconds: 900,
            Content: Unidad5
        },
        {
            id: 'unidad5-eval',
            evaluation: {
                title: 'Evaluación Unidad 5',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: "single",
                        prompt: "Si una persona es víctima de violencia laboral debe:",
                        options: [
                            "Ignorar la situación",
                            "Utilizar los canales de denuncia establecidos",
                            "Publicarlo en redes sociales",
                            "Guardar silencio",
                        ],
                        correct: "Utilizar los canales de denuncia establecidos",
                        explanation:
                            "Cuando una persona considera que está siendo víctima de violencia laboral, es importante utilizar los canales de denuncia disponibles en la organización o las instituciones competentes para que la situación pueda ser atendida de manera adecuada.",
                    },
                    {
                        type: "single",
                        prompt: "Antes de presentar una denuncia es recomendable:",
                        options: [
                            "Eliminar evidencias",
                            "Guardar evidencias",
                            "Evitar testigos",
                            "No registrar información",
                        ],
                        correct: "Guardar evidencias",
                        explanation:
                            "Conservar correos electrónicos, mensajes, documentos, registros o cualquier otra evidencia relacionada con los hechos puede ayudar a respaldar la denuncia y facilitar el análisis de la situación.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál es un canal interno de denuncia?",
                        options: ["Recursos Humanos", "Registro Civil", "Municipio", "ANT"],
                        correct: "Recursos Humanos",
                        explanation:
                            "El área de Recursos Humanos suele ser uno de los canales internos establecidos para recibir, gestionar o derivar denuncias relacionadas con situaciones de violencia, acoso o discriminación laboral.",
                    },
                    {
                        type: "single",
                        prompt: "Las denuncias deben ser tratadas con:",
                        options: ["Confidencialidad", "Publicidad", "Discrecionalidad", "Difusión general"],
                        correct: "Confidencialidad",
                        explanation:
                            "La confidencialidad es fundamental para proteger la privacidad de las personas involucradas, fomentar la confianza en los procesos de denuncia y evitar posibles afectaciones durante la investigación.",
                    },
                    {
                        type: "single",
                        prompt: "La protección contra represalias busca:",
                        options: [
                            "Garantizar seguridad y confianza a quien denuncia",
                            "Evitar investigaciones",
                            "Sancionar automáticamente",
                            "Eliminar procedimientos",
                        ],
                        correct: "Garantizar seguridad y confianza a quien denuncia",
                        explanation:
                            "Las medidas de protección contra represalias tienen como objetivo que las personas puedan reportar situaciones de violencia, acoso o discriminación sin temor a sufrir consecuencias negativas por haber realizado una denuncia de buena fe.",
                    },
                ]
            }
        },
        {
            id: 'unidad6',
            title: 'Unidad 6: Cultura De Respeto Y Prevencion',
            waitSeconds: 0,
            Content: Unidad6
        },
        {
            id: 'unidad6-eval',
            evaluation: {
                title: 'Evaluación Unidad 6',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: "single",
                        prompt: "La comunicación asertiva consiste en:",
                        options: [
                            "Expresar ideas con respeto y claridad",
                            "Imponer opiniones",
                            "Evitar dialogar",
                            "Ignorar conflictos",
                        ],
                        correct: "Expresar ideas con respeto y claridad",
                        explanation:
                            "La comunicación asertiva permite expresar opiniones, necesidades e inquietudes de forma clara, respetuosa y directa, favoreciendo relaciones laborales positivas y una mejor resolución de conflictos.",
                    },
                    {
                        type: "single",
                        prompt: "La convivencia laboral saludable promueve:",
                        options: ["Respeto y colaboración", "Exclusión", "Violencia", "Hostilidad"],
                        correct: "Respeto y colaboración",
                        explanation:
                            "Un ambiente laboral saludable se construye mediante el respeto mutuo, la cooperación y el trabajo en equipo, contribuyendo al bienestar de las personas y al logro de los objetivos organizacionales.",
                    },
                    {
                        type: "single",
                        prompt: "El respeto mutuo debe aplicarse:",
                        options: [
                            "Solo a ciertos trabajadores",
                            "A todas las personas",
                            "Solo a directivos",
                            "Solo a supervisores",
                        ],
                        correct: "A todas las personas",
                        explanation:
                            "El respeto es un valor fundamental que debe estar presente en todas las relaciones laborales, independientemente del cargo, función o nivel jerárquico de cada persona.",
                    },
                    {
                        type: "single",
                        prompt: "Una acción que fortalece la cultura de respeto es:",
                        options: [
                            "Escuchar opiniones diferentes",
                            "Difundir rumores",
                            "Burlarse de compañeros",
                            "Excluir trabajadores",
                        ],
                        correct: "Escuchar opiniones diferentes",
                        explanation:
                            "Escuchar y valorar distintos puntos de vista favorece la inclusión, fortalece la comunicación y contribuye a crear espacios de trabajo más abiertos, participativos y respetuosos.",
                    },
                    {
                        type: "single",
                        prompt: "Una cultura preventiva contribuye a:",
                        options: [
                            "Reducir conflictos y discriminación",
                            "Incrementar violencia",
                            "Fomentar exclusión",
                            "Limitar participación",
                        ],
                        correct: "Reducir conflictos y discriminación",
                        explanation:
                            "La prevención ayuda a identificar riesgos, promover conductas adecuadas y evitar situaciones de violencia, acoso o discriminación antes de que ocurran, fortaleciendo el clima laboral.",
                    },
                ]
            }
        },
        {
            id: 'unidad6-act',
            evaluation: {
                title: "CASO PRÁCTICO INTEGRADOR",
                intro: <>
                    <h1 className="text-xl">
                        <strong>Prevención de la Violencia, el Acoso y la Discriminación en el Trabajo</strong>
                    </h1>
                    <h2 className="text-lg">
                        <strong>Situación</strong>
                    </h2>
                    <p>
                        María recibe comentarios ofensivos relacionados con su edad por parte de un supervisor. Además, es excluida de reuniones importantes y un compañero le envía mensajes con contenido personal que ella no ha solicitado. <br />

                        Estas situaciones comienzan a afectar su bienestar emocional y desempeño laboral.
                    </p>
                </>,
                questionsToAsk: 3,
                passingScore: 3,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: "single",
                        prompt: "Los comentarios ofensivos relacionados con la edad constituyen:",
                        options: [
                            "Acoso laboral y discriminación",
                            "Capacitación",
                            "Evaluación de desempeño",
                            "Comunicación efectiva",
                        ],
                        correct: "Acoso laboral y discriminación",
                    },
                    {
                        type: "single",
                        prompt: "Los mensajes personales con contenido no solicitado pueden constituir:",
                        options: [
                            "Comunicación informal",
                            "Acoso sexual",
                            "Capacitación",
                            "Actividad recreativa",
                        ],
                        correct: "Acoso sexual",
                    },
                    {
                        type: "single",
                        prompt: "¿Qué acción debería tomar María?",
                        options: [
                            "Guardar silencio",
                            "Utilizar los canales de denuncia establecidos",
                            "Ignorar los hechos",
                            "Compartir rumores",
                        ],
                        correct: "Utilizar los canales de denuncia establecidos",
                    },
                ]
            }
        }


    ],
    evaluation: {
        title: "Examen Final Del Módulo 3",
        questionsToAsk: 10,
        passingScore: 7,
        shuffleOptions: true,
        showCorrectAnswers: false,
        recordEvaluation: false,
        questions: [
            {
                type: "single",
                prompt: "Una acción que contribuye a una cultura de respeto es:",
                options: [
                    "Difundir rumores.",
                    "Escuchar opiniones diferentes con respeto.",
                    "Excluir compañeros de trabajo.",
                    "Ignorar situaciones de discriminación.",
                ],
                correct: "Escuchar opiniones diferentes con respeto.",
                explanation:
                    "Una cultura de respeto se construye mediante la escucha activa, la empatía, el diálogo y el reconocimiento de la diversidad. Estas prácticas favorecen ambientes laborales saludables, inclusivos y libres de violencia y discriminación.",
            },
            {
                type: "single",
                prompt: "¿Cuál es un ejemplo de acoso laboral?",
                options: [
                    "Capacitar a un trabajador.",
                    "Humillarlo constantemente frente a sus compañeros.",
                    "Dar instrucciones.",
                    "Delegar tareas normales.",
                ],
                correct: "Humillarlo constantemente frente a sus compañeros.",
                explanation:
                    "El acoso laboral se caracteriza por conductas repetidas que buscan intimidar, humillar, aislar o perjudicar a una persona trabajadora. Las humillaciones constantes afectan la dignidad, el bienestar emocional y el ambiente de trabajo.",
            },
            {
                type: "single",
                prompt: "¿Qué es el acoso sexual?",
                options: [
                    "Un comentario profesional.",
                    "Una conducta sexual no deseada que afecta la dignidad de una persona.",
                    "Una evaluación.",
                    "Una capacitación.",
                ],
                correct: "Una conducta sexual no deseada que afecta la dignidad de una persona.",
                explanation:
                    "El acoso sexual comprende conductas, comentarios, insinuaciones o comportamientos de naturaleza sexual que no son deseados por la persona que los recibe. Estas conductas pueden generar un ambiente hostil, intimidante u ofensivo y vulneran la dignidad de las personas.",
            },
            {
                type: "single",
                prompt: "¿Cuál es una conducta discriminatoria?",
                options: [
                    "Capacitar sin distinción.",
                    "Negar un ascenso por la edad de la persona.",
                    "Aplicar una evaluación.",
                    "Reconocer el desempeño.",
                ],
                correct: "Negar un ascenso por la edad de la persona.",
                explanation:
                    "La discriminación laboral ocurre cuando una persona recibe un trato desfavorable por características personales que no guardan relación con su capacidad o desempeño laboral. La edad, el género, la discapacidad, la nacionalidad u otras condiciones personales no deben utilizarse para limitar oportunidades de empleo o desarrollo profesional.",
            },
            {
                type: "single",
                prompt: "Si eres víctima o testigo de violencia laboral, debes:",
                options: [
                    "Guardar silencio.",
                    "Ignorar la situación.",
                    "Utilizar los canales de denuncia establecidos.",
                    "Difundir rumores sobre el caso.",
                ],
                correct: "Utilizar los canales de denuncia establecidos.",
                explanation:
                    "Toda persona trabajadora tiene derecho a reportar situaciones de violencia, acoso o discriminación utilizando los mecanismos establecidos por la organización. Denunciar oportunamente ayuda a proteger a las personas afectadas, facilita la adopción de medidas correctivas y contribuye a mantener un ambiente laboral seguro y respetuoso.",
            },
            {
                type: "single",
                prompt: "La violencia económica puede manifestarse mediante:",
                options: [
                    "Reconocimiento de logros",
                    "Retención injustificada de pagos",
                    "Capacitación continua",
                    "Asignación de tareas",
                ],
                correct: "Retención injustificada de pagos",
                explanation:
                    "La violencia económica ocurre cuando se afecta injustamente el acceso de una persona a recursos económicos que le corresponden, como salarios, beneficios o pagos laborales.",
            },
            {
                type: "single",
                prompt: "¿Cuál es una característica del acoso laboral?",
                options: [
                    "Conducta aislada y ocasional",
                    "Conductas repetidas que afectan a una persona",
                    "Una capacitación obligatoria",
                    "Un procedimiento administrativo",
                ],
                correct: "Conductas repetidas que afectan a una persona",
                explanation:
                    "El acoso laboral se caracteriza por comportamientos reiterados de hostigamiento, intimidación o humillación que afectan la dignidad y bienestar de una persona trabajadora.",
            },
            {
                type: "single",
                prompt: "¿Cuál de las siguientes acciones ayuda a prevenir el acoso sexual?",
                options: [
                    "Ignorar conductas inapropiadas",
                    "Mantener conductas profesionales y respetuosas",
                    "Compartir rumores",
                    "Evitar reportes",
                ],
                correct: "Mantener conductas profesionales y respetuosas",
                explanation:
                    "Mantener relaciones laborales basadas en el respeto, establecer límites adecuados y utilizar los canales de reporte contribuye a prevenir situaciones de acoso sexual.",
            },
            {
                type: "single",
                prompt: "La discriminación laboral puede afectar:",
                options: [
                    "Únicamente la contratación",
                    "Solo la capacitación",
                    "El acceso a oportunidades laborales y beneficios",
                    "Únicamente las evaluaciones",
                ],
                correct: "El acceso a oportunidades laborales y beneficios",
                explanation:
                    "La discriminación puede presentarse en distintas etapas de la relación laboral, incluyendo contratación, ascensos, capacitación, remuneración y acceso a beneficios.",
            },
            {
                type: "single",
                prompt: "¿Qué es la discriminación indirecta?",
                options: [
                    "Un trato desigual explícito",
                    "Una norma aparentemente neutral que perjudica a ciertos grupos",
                    "Una sanción disciplinaria",
                    "Una evaluación laboral",
                ],
                correct: "Una norma aparentemente neutral que perjudica a ciertos grupos",
                explanation:
                    "La discriminación indirecta ocurre cuando una política o requisito que parece aplicarse a todas las personas afecta de manera desproporcionada a determinados grupos.",
            },
            {
                type: "single",
                prompt: "Antes de presentar una denuncia es recomendable:",
                options: [
                    "Eliminar la información relacionada",
                    "Guardar evidencias de los hechos",
                    "Evitar identificar testigos",
                    "No registrar lo sucedido",
                ],
                correct: "Guardar evidencias de los hechos",
                explanation:
                    "Conservar mensajes, correos, documentos o cualquier otro elemento relacionado con los hechos puede ayudar a respaldar adecuadamente una denuncia.",
            },
            {
                type: "single",
                prompt: "Las denuncias deben ser tratadas con:",
                options: [
                    "Difusión pública",
                    "Confidencialidad e imparcialidad",
                    "Publicidad inmediata",
                    "Favoritismo",
                ],
                correct: "Confidencialidad e imparcialidad",
                explanation:
                    "La confidencialidad y la imparcialidad son principios fundamentales para proteger a las personas involucradas y garantizar un proceso justo.",
            },
            {
                type: "single",
                prompt: "¿Cuál de las siguientes acciones favorece una convivencia laboral saludable?",
                options: [
                    "Excluir a compañeros de trabajo",
                    "Promover la colaboración y el respeto",
                    "Difundir rumores",
                    "Generar conflictos",
                ],
                correct: "Promover la colaboración y el respeto",
                explanation:
                    "La convivencia laboral saludable se basa en el respeto mutuo, la colaboración y el trabajo en equipo, fortaleciendo el bienestar y la productividad.",
            },
            {
                type: "single",
                prompt: "La comunicación asertiva consiste en:",
                options: [
                    "Imponer opiniones personales",
                    "Expresar ideas con claridad y respeto",
                    "Evitar toda conversación",
                    "Ignorar diferencias",
                ],
                correct: "Expresar ideas con claridad y respeto",
                explanation:
                    "La comunicación asertiva facilita relaciones laborales positivas al permitir expresar opiniones y necesidades de forma clara, respetuosa y constructiva.",
            },
            {
                type: "single",
                prompt: "Una cultura preventiva busca:",
                options: [
                    "Reducir situaciones de violencia, acoso y discriminación",
                    "Aumentar conflictos laborales",
                    "Favorecer conductas irrespetuosas",
                    "Limitar la participación de los trabajadores",
                ],
                correct: "Reducir situaciones de violencia, acoso y discriminación",
                explanation:
                    "La prevención promueve ambientes laborales seguros, respetuosos e inclusivos, contribuyendo a evitar conductas que afecten la dignidad y bienestar de las personas trabajadoras.",
            },
        ]

    }

}

export default modulo3