import type { Section } from './types'
import PreguntaPractica from '../components/PreguntaPractica'
import SeleccionMultiple from '../components/SeleccionMultiple'

import VideoBase from '../components/VideoBase'
import ImageBase from '../components/ImageBase'


import img_4_1_1 from '../assets/img_4_1_1.jpg'
import img_4_2_1 from '../assets/img_4_2_1.jpg'
import img_4_3_1 from '../assets/img_4_3_1.jpg'
import img_4_4_1 from '../assets/img_4_4_1.jpg'
import img_4_5_1 from '../assets/img_4_5_1.jpg'
import img_4_6_1 from '../assets/img_4_6_1.jpg'


function Overview() {
    return (
        <>
            <h3><strong>Duracion Total:</strong> 2 Horas</h3>
            <h3><strong>Objetivo del Módulo </strong></h3>
            <p>
                Al finalizar este módulo, las personas trabajadoras comprenderán la importancia de las buenas prácticas laborales y la inclusión organizacional, identificando acciones que promuevan ambientes de trabajo respetuosos, equitativos, diversos y orientados al bienestar de todos los colaboradores.
            </p>

            <VideoBase src="https://drive.google.com/file/d/1QOwHaNQ1FxaDq8i-DvIy9mgi8SNoLI1w/preview" title="Intro to Modlo 4" />

        </>

    )
}


function Unidad1() {
    return (
        <>


            {/* ---------- 1.1 ---------- */}
            <section className="mb-12">
                <ImageBase src={img_4_1_1} />
                <h1 className="text-2xl mb-4 mt-4">
                    <strong>1.1 ¿Qué es la selección inclusiva? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7 pb-4">

                    <p>
                        La selección inclusiva consiste en garantizar que todas las personas tengan las mismas oportunidades de acceder a un empleo, sin importar su sexo, edad, discapacidad, etnia, nacionalidad, orientación sexual, identidad de género o condición social.
                    </p>
                    <p>
                        El objetivo es contratar a las personas más competentes para el puesto mediante criterios objetivos y transparentes.
                    </p>
                </div>

                <h2 className="text-lg mb-4 pl-4">
                    <strong>¿Cómo funciona un proceso de selección inclusivo desde el inicio?</strong>
                </h2>
                <div className='pl-8 pb-4' >
                    <p >
                        La selección inclusiva comienza mucho antes de la entrevista: inicia desde la redacción de la oferta laboral. Un anuncio inclusivo describe únicamente las funciones, conocimientos técnicos y competencias necesarias para el cargo, evitando solicitar fotografías en la hoja de vida, rangos de edad arbitrarios o especificar un sexo determinado. Además, garantiza que el proceso sea accesible para todas las personas, incluyendo candidatos con discapacidad o pertenecientes a grupos históricamente excluidos.
                    </p>
                </div>
            </section>

            {/* ---------- 1.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.2 Prácticas de contratación sin discriminación </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>

                    <h3 className="text-lg pt-2">
                        <strong>Las empresas deben evitar preguntas relacionadas con: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>❌ Estado civil.</li>
                            <li>❌ Embarazo.</li>
                            <li>❌ Religión.</li>
                            <li>❌ Orientación sexual.</li>
                            <li>❌ Edad (cuando no sea un requisito legal).</li>
                            <li>✅ Deben evaluar experiencia, conocimientos y competencias.</li>
                        </ul>
                    </div>

                    <h2 className="text-lg mb-4 pl-2">
                        <strong>Normativa ecuatoriana sobre contratación sin discriminación
                        </strong>
                    </h2>
                    <div className='pl-8 pb-4' >
                        <p >
                            En el Ecuador, el <strong>Acuerdo Ministerial Nro. MDT-2017-082 </strong> (Normativa para la <em>Erradicación de la Discriminación en el Ámbito Laboral </em>) prohíbe expresamente a todos los empleadores del sector público y privado:
                        </p>
                        <div className="pl-8 space-y-1">
                            <ul className='list-disc'>
                                <li>Exigir pruebas de embarazo como requisito para contratar o renovar un contrato. </li>
                                <li>Solicitar pruebas de detección de VIH/SIDA. </li>
                                <li>Exigir certificados de antecedentes penales (récord policial), salvo en las excepciones estrictamente permitidas por la ley. </li>
                                <li>Condicionar la contratación a la apariencia física, estado civil, número de hijos o afiliación política o religiosa. </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* ---------- 1.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.3 Beneficios de la contratación inclusiva </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <ul className="list-disc pl-6 space-y-1">
                        <li>Mayor diversidad de ideas.</li>
                        <li>Mejores decisiones empresariales.</li>
                        <li>Incremento de la innovación.</li>
                        <li>Mejor clima laboral.</li>
                        <li>Cumplimiento legal.</li>
                    </ul>
                    <h2 className="text-lg mb-4 pl-2">
                        <strong>Ampliación de la reserva de talento y reducción de rotación
                        </strong>
                    </h2>
                    <div className='pl-8 pb-4' >
                        <p >
                            Cuando una empresa elimina filtros discriminatorios, amplía significativamente su base de candidatos calificados, permitiéndole encontrar talento valioso que otras organizaciones pasan por alto. Además, los colaboradores que ingresan a una empresa que valora sus competencias por encima de cualquier prejuicio desarrollan un mayor sentido de pertenencia, compromiso y permanencia a largo plazo.
                        </p>
                    </div>
                </div>

            </section>
            {/*----- Ejemplo Practice*/}

            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Ejemplo práctico</strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2><strong>Situación</strong></h2>
                    <p>
                        Dos candidatos poseen experiencia y competencias similares para un cargo. Durante la entrevista, el reclutador decide seleccionar a uno de ellos únicamente por su edad.
                    </p>
                    <h2><strong>Análisis </strong></h2>
                    <p>
                        La decisión no se basa en criterios objetivos relacionados con el puesto y podría constituir una práctica discriminatoria.
                    </p>
                    <h2><strong>Idea clave  </strong></h2>
                    <p>Las decisiones de contratación deben fundamentarse en competencias, conocimientos y experiencia.
                    </p>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Inserción laboral, discapacidad y sus tópicos </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Las personas con discapacidad tienen los mismos derechos y capacidades para desarrollarse profesionalmente cuando cuentan con oportunidades, accesibilidad y entornos de trabajo inclusivos.
                    </p>
                    <p>
                        La verdadera inclusión laboral no significa brindar privilegios, sino garantizar igualdad de oportunidades para demostrar competencias y aportar valor a la organización.
                    </p>


                    <VideoBase src="https://www.youtube.com/embed/DhL6W_qTLNU?si=4Tzd5BLI-us_bBZd" title="UN DÍA NORMAL - Inserción laboral, discapacidad y sus tópicos" />
                </div>
            </section>

            {/* Reflexion */}
            <section className='mb-12'>
                <h1 className='text-2xl pb-2'>
                    <strong>
                        Actividad Práctica de Reflexión
                    </strong>
                </h1>
                <div className='pl-6 space-y-2'>
                    <p>
                        Tras observar el video "Un día normal", reflexione sobre las siguientes preguntas aplicadas a su entorno laboral:
                    </p>
                    <ul className='pl-8 list-decimal pt-2 space-y-2'>
                        <li>¿Qué barreras físicas o de comunicación suelen enfrentar las personas con discapacidad durante una entrevista de trabajo tradicional y cómo podrían eliminarse? </li>
                        <li>evise mentalmente los requisitos de su propio puesto de trabajo: ¿son todos indispensables para cumplir las funciones, o existe alguno que podría excluir innecesariamente a una persona calificada? </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

function Unidad2() {
    return (
        <>
            {/* ---------- 2.1 ---------- */}
            <section className="mb-12">
                <ImageBase src={img_4_2_1} />
                <h1 className="text-2xl mb-4 mt-4">
                    <strong>2.1 Igualdad de oportunidades </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        Todas las personas tienen derecho a acceder a capacitación, ascensos y oportunidades de crecimiento profesional.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Las oportunidades deben otorgarse en función de: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Méritos.</li>
                            <li>Resultados.</li>
                            <li>Competencias.</li>
                            <li>Experiencia.</li>
                        </ul>
                    </div>
                    <h2 className="text-lg mb-4">
                        <strong>Respaldo constitucional y legal en el Ecuador</strong>
                    </h2>
                    <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                        En el Ecuador, el <strong>Artículo 331 de la Constitución </strong>garantiza la igualdad de oportunidades en la formación y promoción laboral y profesional. Esto significa que ninguna empresa puede reservar los planes de carrera, becas o ascensos únicamente para un grupo determinado ni excluir a mujeres embarazadas, madres en período de lactancia, personas con discapacidad o trabajadores mayores de 40 años. El crecimiento dentro de la organización debe ser un camino abierto para toda persona que demuestre capacidad y compromiso.
                    </div>
                </div>
            </section>

            {/* ---------- 2.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.2 Capacitación continua </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>La formación permanente permite que los trabajadores:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Mejoren sus competencias.</li>
                        <li>Se adapten a nuevas tecnologías.</li>
                        <li>Incrementen su productividad.</li>
                        <li>Accedan a mejores oportunidades laborales.</li>
                    </ul>

                    <h2 className="text-lg mb-4">
                        <strong>El deber de capacitación en la normativa ecuatoriana</strong>
                    </h2>
                    <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                        De acuerdo con el Código del Trabajo y el <strong>Acuerdo Ministerial Nro. MDT-2025-006</strong>, la capacitación continua no solo fortalece las habilidades técnicas de cada trabajador, sino que también promueve el desarrollo humano, la igualdad de género y la prevención de riesgos. Para garantizar un acceso verdaderamente igualitario, las organizaciones deben programar las capacitaciones dentro de la jornada laboral (o con facilidades reales de horario) para que quienes tienen responsabilidades familiares puedan participar en igualdad de condiciones.</div>
                </div>
            </section>

            {/* ---------- 2.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.3 Promoción basada en mérito </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>Los ascensos deben fundamentarse en:</p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ Desempeño.</li>
                        <li>✅ Conocimientos.</li>
                        <li>✅ Liderazgo.</li>
                        <li>✅ Cumplimiento de objetivos.</li>
                    </ul>
                    <p>
                        <strong>No</strong> en favoritismos o preferencias personales.
                    </p>
                    <h2 className="text-lg mb-4">
                        <strong>¿Cómo se garantiza un proceso de ascenso justo?</strong>
                    </h2>
                    <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                        <p>
                            Para evitar que los sesgos inconscientes o las afinidades personales influyan en una promoción, las empresas aplican buenas prácticas como: publicar internamente todas las vacantes de ascenso, establecer perfiles claros con requisitos medibles, realizar evaluaciones de desempeño periódicas con indicadores objetivos y brindar retroalimentación constructiva a quienes postulan, explicando qué habilidades deben fortalecer para futuras oportunidades.
                        </p>
                    </div>
                    <h2 className="text-lg mb-4">
                        <strong>Ejemplo práctico </strong>
                    </h2>
                    <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                        <p>
                            En una empresa comercial se abre una vacante para Coordinador de Ventas. Postulan dos colaboradores: Elena, quien ha superado el 110% de sus metas durante dos años consecutivos y ha capacitado a compañeros nuevos, y Roberto, quien tiene menor cumplimiento de metas, pero comparte actividades deportivas con el gerente de área. Si la empresa aplica la promoción basada en el mérito, seleccionará a Elena por sus resultados objetivos y liderazgo demostrado, fortaleciendo la confianza de todo el equipo. </p>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Igualdad de Oportunidades </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <VideoBase src="https://www.youtube.com/embed/pxkgOSpO0n8?si=0GtTsaTJoNu5LGZD" title="Igualdad de Oportunidades" />
                </div>
            </section>

            {/* ---------- Actividad ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Actividad </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <SeleccionMultiple
                        pregunta="Seleccione los criterios correctos para otorgar un ascenso."
                        opciones={['Competencias', 'Resultados', 'Desempeño', 'Género', 'Edad']}
                        correctas={['Competencias', 'Resultados', 'Desempeño']}
                        explicacion="Los ascensos deben basarse en criterios objetivos como las competencias, los resultados y el desempeño. El género y la edad son características personales que no miden la capacidad para el puesto; usarlas como criterio sería discriminación."
                    />
                </div>
            </section>
        </>
    )
}

function Unidad3() {
    return (
        <>
            {/* ---------- 3.1 ---------- */}
            <section className="mb-12">
                <ImageBase src={img_4_3_1} />
                <h1 className="text-2xl mb-4 mt-4">
                    <strong>3.1 ¿Qué es la diversidad? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        La diversidad reconoce que las personas son diferentes y que esas diferencias aportan valor a la organización.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Incluye aspectos como: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Género.</li>
                            <li>Edad.</li>
                            <li>Cultura.</li>
                            <li>Nacionalidad.</li>
                            <li>Etnia.</li>
                            <li>Discapacidad.</li>
                            <li>Experiencia laboral.</li>
                        </ul>
                    </div>
                    <h3 className='text-lg'><strong>La riqueza de la diversidad en el Ecuador</strong></h3>
                    <div className='pl-6 space-y-2'>
                        <p>
                            Ecuador es un país constitucionalmente reconocido como intercultural y plurinacional (Art. 1 de la Constitución). En nuestros centros de trabajo conviven personas de distintas regiones (Costa, Sierra, Amazonía y Galápagos), pueblos y nacionalidades indígenas, afroecuatorianas y montubias, personas con discapacidad, trabajadores jóvenes y adultos mayores. Esta diversidad de orígenes, conocimientos y vivencias es una ventaja estratégica cuando se gestiona con respeto.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 3.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.2 ¿Qué es la inclusión? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        La inclusión implica crear un entorno donde todas las personas sean respetadas, escuchadas y tengan las mismas oportunidades de participación.
                    </p>
                    <p>
                        No basta con contratar personas diversas; es necesario que se sientan valoradas e integradas.
                    </p>
                </div>
                <h3 className='text-lg mt-2 mb-2'><strong>La diferencia práctica: Diversidad vs. Inclusión </strong></h3>
                <div className='pl-6 '>
                    <ul className='list-disc space-y-2'>
                        <li>
                            <strong>Diversidad</strong> es "invitar a todas las personas a la reunión" (que exista representación variada en la plantilla de la empresa).
                        </li>
                        <li>
                            <strong>Inclusión</strong> es "darles voz real en la reunión" (que sus ideas sean escuchadas, respetadas y tomadas en cuenta para tomar decisiones, sin barreras físicas, tecnológicas ni culturales).
                            De nada sirve cumplir con una cuota de contratación si las personas recién integradas son aisladas o excluidas de los proyectos importantes.
                        </li>
                    </ul>
                </div>
            </section>

            {/* ---------- 3.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.3 Beneficios para la empresa </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>Las empresas inclusivas logran:</p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ Mayor innovación.</li>
                        <li>✅ Mayor creatividad.</li>
                        <li>✅ Mejor clima laboral.</li>
                        <li>✅ Más compromiso de los trabajadores.</li>
                        <li>✅ Mejor reputación empresarial.</li>
                    </ul>
                </div>

            </section>

            {/* ---------- 3.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.4 Conductas que favorecen la inclusión </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <ul className="pl-4 space-y-1">
                        <li>✅ Escuchar opiniones diferentes. </li>
                        <li>✅ Respetar las diferencias individuales. </li>
                        <li>✅ Utilizar lenguaje respetuoso. </li>
                        <li>✅ Promover la participación de todas las personas. </li>
                        <li>✅ Evitar estereotipos y prejuicios. </li>
                    </ul>
                </div>
                <h3 className='text-lg mt-2 mb-2'><strong>Ejemplo práctico de inclusión cotidiana</strong></h3>
                <div className='pl-6 '>
                    <p>
                        En un equipo de proyecto participa Mateo, un colaborador con discapacidad visual que utiliza un lector de pantalla en su computadora, y Sofía, una compañera recién trasladada desde otra provincia. El líder del equipo se asegura de enviar todos los documentos de las reuniones en formato digital accesible (evitando imágenes sin texto) y fomenta que todos opinen por turnos sin interrupciones ni burlas sobre el acento o forma de hablar de nadie. De este modo, ambos colaboradores aportan todo su talento en igualdad de condiciones.
                    </p>
                </div>
            </section>
            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Comprender qué es la diversidad </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <VideoBase src="https://www.youtube.com/embed/KQA_7X96Zh4?si=ZZjrqfhkAB24sCMT" title="Gestión de talento y la diversidad" />
                </div>
            </section>
        </>
    )
}

function Unidad4() {
    return (
        <>
            {/* ---------- 4.1 ---------- */}
            <section className="mb-12">
                <ImageBase src={img_4_4_1} />
                <h1 className="text-2xl mb-4 mt-4">
                    <strong>4.1 Bienestar laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7 pb-2">

                    <p>
                        El bienestar laboral comprende las acciones que buscan mejorar la salud física, emocional y social de los trabajadores.
                    </p>
                </div>
                <h2 className='text-lg pl-4'><strong>Respaldo constitucional en el Ecuador</strong></h2>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>
                        En el Ecuador, el <strong>Artículo 326 (numeral 5) de la Constitución </strong>establece que toda persona tendrá derecho a desarrollar sus labores en un ambiente adecuado y propicio, que garantice su salud, integridad, seguridad, higiene y bienestar. Esto significa que la calidad de vida en el trabajo no es un simple beneficio opcional de la empresa, sino una garantía constitucional que busca proteger integralmente al ser humano durante toda su jornada.
                    </p>
                </div>
            </section>

            {/* ---------- 4.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.2 Factores que mejoran el bienestar </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7 pb-2">
                    <img></img>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Ambientes seguros.</li>
                        <li>Comunicación efectiva.</li>
                        <li>Reconocimiento laboral.</li>
                        <li>Capacitación.</li>
                        <li>Equilibrio entre vida personal y trabajo.</li>
                    </ul>
                </div>
                <h2 className='text-lg pl-4'><strong>El derecho a la desconexión digital y el equilibrio personal</strong></h2>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>
                        En la legislación laboral ecuatoriana se reconoce el <strong>derecho a la desconexión </strong> (de al menos 12 horas continuas en un período de 24 horas), lo que implica que, una vez concluida la jornada laboral, usted tiene derecho a no responder correos electrónicos, mensajes de texto o llamadas de trabajo, salvo situaciones de emergencia debidamente justificadas. Respetar los horarios familiares y de descanso es clave para evitar el agotamiento físico y mental.
                    </p>
                </div>
            </section>

            {/* ---------- 4.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.3 Salud mental en el trabajo </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7 pb-2">
                    <img></img>
                    <p>La salud mental es fundamental para:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Mantener la productividad.</li>
                        <li>Reducir el estrés.</li>
                        <li>Mejorar la satisfacción laboral.</li>
                        <li>Prevenir conflictos.</li>
                    </ul>
                </div>
                <h2 className='text-lg pl-4'><strong>Prevención de riesgos psicosociales en el Ecuador</strong></h2>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>
                        De acuerdo con las normativas del Ministerio del Trabajo (Acuerdo Ministerial Nro. MDT-2017-082), todas las organizaciones en el Ecuador deben implementar programas de prevención de <strong>riesgos psicosociales </strong> para evitar el estrés laboral crónico, la sobrecarga de trabajo y el desgaste emocional (<em>síndrome de burnout</em>). Cuidar la salud mental en el trabajo es tan importante como usar casco o equipos de protección física.
                    </p>
                </div>
            </section>

            {/* ---------- 4.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.4 Buenas prácticas para promover el bienestar </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7 pb-2">

                    <ul className="pl-4 space-y-1">
                        <li>✅ Comunicación respetuosa. </li>
                        <li>✅ Reconocimiento de logros. </li>
                        <li>✅ Trabajo en equipo. </li>
                        <li>✅ Participación activa. </li>
                        <li>✅ Respeto por los tiempos de descanso. </li>
                        <li>
                            ✅ Apoyo mutuo entre compañeros.
                        </li>
                    </ul>
                </div>
                <h2 className='text-lg pl-4'><strong>Ejemplo práctico</strong></h2>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>
                        En el área administrativa de una empresa, la jefatura implementa reuniones semanales breves para distribuir de forma equilibrada las cargas de trabajo, felicita públicamente los logros alcanzados por el equipo y respeta estrictamente el horario de salida y la hora de almuerzo sin interrupciones. Como resultado, disminuye el estrés diario, mejora la comunicación entre compañeros y aumenta la calidad del servicio ofrecido.
                    </p>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: La importancia del bienestar laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <VideoBase src="https://www.youtube.com/embed/nLoUMO7zKAc?si=8lRttFCfa7mRMP1q" title="Salud Laboral — El bienestar de tus empleados determina la productividad de tu empresa" />
                </div>
            </section>

            {/* ---------- Actividad ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Actividad </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <SeleccionMultiple
                        pregunta="Identifique cuáles acciones promueven bienestar laboral."
                        opciones={[
                            'Comunicación respetuosa',
                            'Reconocimiento al desempeño',
                            'Ambientes seguros',
                            'Maltrato verbal',
                            'Exclusión de trabajadores',
                        ]}
                        correctas={['Comunicación respetuosa', 'Reconocimiento al desempeño', 'Ambientes seguros']}
                        explicacion="La comunicación respetuosa, el reconocimiento al desempeño y los ambientes seguros mejoran la salud física, emocional y social de los trabajadores. En cambio, el maltrato verbal y la exclusión dañan el bienestar y el clima laboral."
                    />
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
                <ImageBase src={img_4_5_1} />
                <h1 className="text-2xl mb-4 mt-4">
                    <strong>5.1 Equilibrio vida-trabajo </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7 pb-2">
                    <img></img>
                    <p>
                        El equilibrio entre la vida laboral y familiar permite que las personas cumplan adecuadamente sus responsabilidades personales y profesionales.
                    </p>
                </div>
                <h2 className="text-lg mb-4 pl-2">
                    <strong>¿Qué ocurre cuando no existe equilibrio entre el trabajo y la vida personal? </strong>
                </h2>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    Cuando las exigencias laborales invaden constantemente el tiempo de descanso y de familia, se produce un desgaste físico y emocional que afecta todas las áreas de la vida. Muchas personas sienten culpa por no dedicar tiempo suficiente a sus hijos o familiares, y al mismo tiempo sienten presión por responder mensajes o tareas fuera de horario. Lograr una verdadera conciliación no significa trabajar menos ni descuidar las metas de la empresa, sino <strong>organizar el tiempo de manera inteligente </strong> y respetar los límites entre la jornada laboral y la vida privada.
                </div>
            </section>


            {/* ---------- 5.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.2 Corresponsabilidad familiar </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7 pb-4">
                    <img></img>
                    <p>
                        La corresponsabilidad implica distribuir equitativamente las tareas del hogar y el cuidado familiar.
                    </p>
                </div>

                <h2 className="text-lg mb-4 pl-2">
                    <strong> Respaldo constitucional en el Ecuador (Artículo 333)</strong>
                </h2>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        La Constitución de la República del Ecuador reconoce en su <strong>Artículo 333</strong> como labor productiva el trabajo no remunerado de autosustento y cuidado humano que se realiza en los hogares. Asimismo, ordena que el régimen laboral funcione en armonía con las necesidades del cuidado humano, facilitando horarios adecuados y servicios de apoyo, e impulsando la corresponsabilidad y reciprocidad entre hombres y mujeres en el trabajo doméstico y las obligaciones familiares. De "ayudar en casa" a "compartir responsabilidades"
                    </p>
                    <p>
                        La corresponsabilidad rompe con la idea tradicional de que el hombre simplemente "ayuda" a la mujer con los hijos o el hogar. Tanto el padre como la madre tienen exactamente el mismo deber y derecho de cuidar, educar, asistir a reuniones escolares, llevar a controles médicos y administrar las tareas domésticas. Cuando ambos comparten estas responsabilidades, las mujeres tienen mayores oportunidades reales de crecer profesionalmente y los hombres fortalecen su vínculo afectivo con sus hijos.
                    </p>

                </div>
            </section>

            {/* ---------- 5.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.3 Beneficios de la conciliación </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Menor estrés.</li>
                        <li>Mayor satisfacción laboral.</li>
                        <li>Mejor clima organizacional.</li>
                        <li>Mayor productividad.</li>
                    </ul>
                    <h2 className="text-lg mb-4">
                        <strong> ¿Cómo gana la empresa cuando apoya la conciliación? </strong>
                    </h2>
                    <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                        <ul className='list-disc'>
                            <li><strong>Reducción del ausentismo y rotación: </strong> Los colaboradores que cuentan con comprensión y flexibilidad ante emergencias familiares o citas médicas faltan menos y permanecen más tiempo en la organización. </li>
                            <li><strong>Mayor enfoque durante la jornada:</strong> Una persona que sabe que su familia está atendida y que su horario de salida será respetado trabaja con mayor concentración y eficiencia durante sus 8 horas laborales. </li>
                        </ul>
                    </div>
                    <h2 className="text-lg"><strong>Ejemplos de concilación</strong></h2>
                    <ul className="pl-4 space-y-1">
                        <li>✅ Organización adecuada del tiempo. </li>
                        <li>✅ Uso responsable de permisos y licencias. </li>
                        <li>✅ Respeto a horarios de trabajo y descanso.  </li>
                        <li>✅ Participación activa. </li>
                        <li>✅ Planificación de responsabilidades laborales y familiares. </li>

                    </ul>

                    <h2 className="text-lg mb-4">
                        <strong> Herramientas legales que facilitan la conciliación en el Ecuador</strong>
                    </h2>
                    <p>
                        La legislación laboral ecuatoriana contempla diversos mecanismos que permiten armonizar el trabajo con la vida familiar:
                    </p>
                    <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                        <ul className='list-disc'>
                            <li><strong>Licencias remuneradas: </strong> Licencia por maternidad (12 semanas), licencia por paternidad (15 días), permiso por adopción (15 días) y licencia de hasta 25 días para el cuidado de hijos hospitalizados o con patologías degenerativas. </li>
                            <li><strong>Período de lactancia:</strong>Jornada reducida a 6 horas diarias durante los 15 meses posteriores al parto. </li>
                            <li><strong>Derecho a la desconexión digital:</strong> Garantía de descanso efectivo de al menos 12 horas continuas fuera de la jornada laboral, sin obligación de responder mensajes o correos de trabajo. </li>
                            <li><strong>Teletrabajo y horarios flexibles: </strong> Modalidades permitidas por el Código del Trabajo cuando la naturaleza del cargo lo permite, facilitando el ahorro de tiempo en traslados. </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Reflexion */}
            <section className="mb-12">
                <h1 className='text-xl'>
                    <strong>Caso práctico de reflexión</strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Carlos y Andrea trabajan en la misma empresa. Ambos tienen un hijo en edad escolar que necesita acudir a una consulta médica programada en horario de la mañana. Tradicionalmente, Andrea siempre pedía permiso para llevarlo, afectando la percepción de su disponibilidad en su área. Esta vez, aplicando la corresponsabilidad familiar, Carlos solicita el permiso médico correspondiente en su departamento para acompañar a su hijo, mientras Andrea cumple una reunión importante en su oficina.
                    </p>
                    <p>
                        <strong>Análisis: </strong> La corresponsabilidad permite que hombres y mujeres compartan por igual el cuidado de sus hijos y equilibren sus compromisos profesionales, eliminando prejuicios y fortaleciendo el bienestar familiar y laboral.
                    </p>
                </div>
            </section>
            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Trabajo y familia: un equilibrio posible </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">


                    <VideoBase src="https://www.youtube.com/embed/rO8F5NS0dw4?si=2zptBrblTeqdvru6" title='Cómo encontrar el equilibrio entre el trabajo y tu vida personal' />
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
                <ImageBase src={img_4_6_1} />
                <h1 className="text-2xl mb-4 pt-4">
                    <strong>6.1 Buenas prácticas laborales </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        Son acciones destinadas a promover ambientes de trabajo seguros, inclusivos y respetuosos.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplos </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Igualdad de oportunidades.</li>
                            <li>✅ Respeto a los derechos laborales.</li>
                            <li>✅ Prevención de la discriminación.</li>
                            <li>✅ Capacitación permanente.</li>
                            <li>✅ Comunicación transparente.</li>
                        </ul>
                    </div>
                    <h3 className='text-lg'>
                        <strong>¿Qué diferencia a una buena práctica de una simple obligación legal?</strong>
                    </h3>
                    <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                        <p>
                            Cumplir la ley (pagar el sueldo a tiempo, afiliar al IESS o respetar las vacaciones) es el piso mínimo obligatorio para cualquier empresa en el Ecuador. Las buenas prácticas laborales van un paso más allá: son acciones voluntarias, sostenidas y verificables que buscan elevar el bienestar humano, prevenir conflictos antes de que ocurran y construir un entorno donde cada persona sienta orgullo y seguridad al trabajar.


                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 6.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.2 Compromiso organizacional </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>Las empresas deben impulsar:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Políticas de igualdad.</li>
                        <li>Programas de inclusión.</li>
                        <li>Capacitación continua.</li>
                        <li>Protocolos de prevención del acoso y la violencia.</li>
                    </ul>
                </div>
                <h3 className='text-lg pt-2 pl-4'>
                    <strong>El rol del liderazgo y la corresponsabilidad de todo el equipo</strong>
                </h3>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Para que una cultura organizacional inclusiva sea real y no se quede solo en un documento colgado en la pared, se requiere el ejemplo visible de la alta dirección (como exige el <strong>Acuerdo Ministerial Nro. MDT-2025-006 </strong>al disponer la participación obligatoria de los representantes legales en las capacitaciones de igualdad) y el compromiso diario de cada trabajador. Cuando líderes y colaboradores practican la coherencia entre lo que dicen y lo que hacen, el respeto se convierte en un hábito natural de la empresa.
                    </p>
                </div>
            </section>

            {/* ---------- 6.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.3 Mejora continua </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        Las organizaciones deben evaluar periódicamente sus prácticas laborales para identificar oportunidades de mejora.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Herramientas </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Encuestas de clima laboral.</li>
                            <li>Auditorías internas.</li>
                            <li>Indicadores de gestión.</li>
                            <li>Programas de capacitación.</li>
                        </ul>
                    </div>
                    <h3 className='text-lg pt-2'>
                        <strong>El rol del liderazgo y la corresponsabilidad de todo el equipo</strong>
                    </h3>
                    <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                        <p>
                            El ciclo de mejora continua aplicado a la inclusión (Planificar - Hacer - Verificar - Actuar)
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Planificar: </strong> Diseñar políticas claras de igualdad salarial, inclusión y prevención de riesgos psicosociales. </li>
                            <li><strong>Hacer: </strong> Ejecutar los programas de capacitación, sensibilización y selección objetiva. </li>
                            <li><strong>Verificar: </strong> Medir el clima laboral de forma anónima, revisar estadísticas de ascensos y auditar las escalas salariales. </li>
                            <li><strong>Actuar: </strong>Corregir de inmediato cualquier brecha detectada y actualizar los protocolos internos. </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 6.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Ejemplos de buenas prácticas laborales  </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <div className="pl-4">
                        <ul className="pl-6 space-y-1">
                            <li>✅ Comunicación transparente.</li>
                            <li>✅ Trato respetuoso. </li>
                            <li>✅ Procesos de selección objetivos. </li>
                            <li>✅ Capacitación continua. </li>
                            <li>✅ Prevención de discriminación. </li>
                            <li>✅ Respeto por la diversidad. </li>
                            <li>✅ Participación de los trabajadores. </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h3 className='text-2xl pt-2 pb-2'>
                    <strong>Caso práctico de cierre </strong>
                </h3>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Una empresa ecuatoriana aplica cada año una encuesta anónima de clima laboral y realiza una auditoría interna de sueldos y ascensos. Al revisar los resultados, detecta que, aunque la mayoría del personal operativo son mujeres, casi todos los cargos de supervisión están ocupados por hombres, y que varios colaboradores desconocen cómo funciona el canal de denuncias. La empresa decide implementar un programa de formación en liderazgo abierto a todo el personal, publicar internamente todas las vacantes de ascenso y reforzar la difusión de sus protocolos de respeto e igualdad.
                    </p>
                    <p>
                        <strong>Análisis: </strong> Este ejemplo demuestra cómo la mejora continua y el compromiso organizacional transforman los datos en acciones concretas para construir una empresa más justa, transparente e inclusiva.
                    </p>
                </div>
            </section>
            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Empresas que promueven la igualdad y las buenas prácticas laborales </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">


                    <VideoBase src="https://www.youtube.com/embed/tEtPYqbwRmA?si=JtiH5cUtmH_0p-Em" title="Igualdad de Género y Oportunidades en el Trabajo | Capacitación Laboral Ecuador 2025 SOLEC" />
                </div>
            </section>
        </>
    )
}


function ActividadFinal() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Buenas Prácticas Laborales e Inclusión Organizacional </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h3 className="text-lg">
                        <strong>Situación </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            La empresa donde trabaja María implementa nuevas prácticas organizacionales: procesos de selección basados en competencias, programas de capacitación para todo el personal, encuestas de clima laboral y políticas de igualdad e inclusión.
                        </p>
                        <p>
                            Con el tiempo, los trabajadores perciben un ambiente más respetuoso y colaborativo.
                        </p>
                    </div>

                    <h3 className="text-lg pt-4">
                        <strong>Pregunta 1 </strong>
                    </h3>
                    <div className="pl-4">
                        <PreguntaPractica
                            pregunta="¿Qué práctica está aplicando la empresa al evaluar a las personas por sus competencias?"
                            opciones={['Selección inclusiva', 'Discriminación', 'Exclusión', 'Favoritismo']}
                            correcta="Selección inclusiva"
                            explicacion="Evaluar a las personas por sus competencias, con criterios objetivos y transparentes, es la base de la selección inclusiva: todas las personas tienen las mismas oportunidades de acceder al empleo."
                        />
                    </div>

                    <h3 className="text-lg pt-4">
                        <strong>Pregunta 2 </strong>
                    </h3>
                    <div className="pl-4">
                        <PreguntaPractica
                            pregunta="¿Cuál es uno de los beneficios de la diversidad en una organización?"
                            opciones={['Menor innovación', 'Mayor innovación', 'Menor productividad', 'Mayor discriminación']}
                            correcta="Mayor innovación"
                            explicacion="Las diferencias entre las personas aportan nuevas ideas y perspectivas, lo que impulsa la innovación y la creatividad dentro de la organización."
                        />
                    </div>

                    <h3 className="text-lg pt-4">
                        <strong>Pregunta 3 </strong>
                    </h3>
                    <div className="pl-4">
                        <PreguntaPractica
                            pregunta="¿Qué valor reflejan las acciones implementadas por la empresa?"
                            opciones={['Respeto, inclusión e igualdad', 'Exclusión', 'Acoso laboral', 'Discriminación']}
                            correcta="Respeto, inclusión e igualdad"
                            explicacion="La selección por competencias, la capacitación para todo el personal, las encuestas de clima laboral y las políticas de igualdad buscan que todas las personas sean tratadas con respeto y tengan las mismas oportunidades."
                        />
                    </div>

                    <h3 className="text-lg pt-4">
                        <strong>Retroalimentación </strong>
                    </h3>
                    <div className="pl-4">
                        <p className="rounded-lg p-4 border border-blue-300 bg-blue-50">
                            Las buenas prácticas laborales contribuyen a crear ambientes de trabajo más inclusivos, respetuosos y productivos para todas las personas.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- Actividad Final del Módulo ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Actividad Final del Módulo </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h3 className="text-lg">
                        <strong>Compromiso Personal </strong>
                    </h3>
                    <div className="pl-4">
                        <SeleccionMultiple
                            pregunta="Marque las acciones que se compromete a aplicar en su lugar de trabajo."
                            opciones={[
                                'Tratar a todas las personas con respeto.',
                                'Promover la inclusión.',
                                'Evitar conductas discriminatorias.',
                                'Utilizar comunicación asertiva.',
                                'Contribuir a un ambiente laboral saludable.',
                                'Respetar la diversidad.',
                            ]}
                            correctas={[
                                'Tratar a todas las personas con respeto.',
                                'Promover la inclusión.',
                                'Evitar conductas discriminatorias.',
                                'Utilizar comunicación asertiva.',
                                'Contribuir a un ambiente laboral saludable.',
                                'Respetar la diversidad.',
                            ]}
                            explicacion="Cada una de estas acciones ayuda a construir un lugar de trabajo más respetuoso, inclusivo y saludable para todas las personas."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
const modulo4: Section = {
    id: "modulo4",
    title: "Modulo 4: Buenas Prácticas Laborales E Inclusión Organizacional",
    waitSeconds: 600,
    Overview,
    subsections: [
        {
            id: 'modulo4-encuesta',
            evaluation: {
                title: 'Encuesta Diagnóstica Inicial',
                questionsToAsk: 5,
                passingScore: 0,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: true,
                questions: [
                    {
                        type: 'single',
                        prompt: '¿Cuál es el principal objetivo de la inclusión laboral?',
                        options: ['Beneficiar únicamente a ciertos grupos', 'Garantizar igualdad de oportunidades para todas las personas', 'Limitar los procesos de contratación', 'Reducir la diversidad en la empresa'],
                        correct: 'Garantizar igualdad de oportunidades para todas las personas',
                        explanation: 'La inclusión laboral busca que todas las personas tengan acceso equitativo a oportunidades de empleo y desarrollo.'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál de los siguientes criterios debería utilizarse para seleccionar personal?',
                        options: ['Estado civil', 'Edad', 'Competencias y experiencia', 'Apariencia física'],
                        correct: 'Competencias y experiencia',
                        explanation: 'Las decisiones de contratación deben basarse en criterios objetivos relacionados con el puesto.'
                    },
                    {
                        type: 'single',
                        prompt: 'La diversidad en una organización contribuye a:',
                        options: ['Menor innovación', 'Mayor creatividad e innovación', 'Menor productividad', 'Más discriminación'],
                        correct: 'Mayor creatividad e innovación',
                        explanation: 'Los equipos diversos aportan diferentes perspectivas y soluciones.'
                    },
                    {
                        type: 'single',
                        prompt: '¿Qué acción favorece el bienestar laboral?',
                        options: ['Maltrato verbal', 'Exclusión de trabajadores', 'Comunicación respetuosa', 'Discriminación'],
                        correct: 'Comunicación respetuosa',
                        explanation: 'El respeto y la comunicación positiva fortalecen el clima laboral.'
                    },
                    {
                        type: 'single',
                        prompt: 'Los ascensos deberían otorgarse principalmente considerando:',
                        options: ['Preferencias personales', 'Edad', 'Mérito y desempeño', 'Amistad con los jefes'],
                        correct: 'Mérito y desempeño',
                        explanation: 'El crecimiento profesional debe basarse en criterios objetivos y transparentes.'
                    }
                ]
            }
        },
        {
            id: 'unidad1',
            title: 'Unidad 1: Reclunamiento Y Selección Inclusiva',
            waitSeconds: 600,
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
                        prompt: "¿Qué debe evaluarse durante un proceso de selección?",
                        options: [
                            "Estado civil.",
                            "Edad.",
                            "Competencias y experiencia.",
                            "Apariencia física.",
                        ],
                        correct: "Competencias y experiencia.",
                        explanation:
                            "Los procesos de selección deben centrarse en las habilidades, conocimientos, experiencia y competencias necesarias para desempeñar el puesto, garantizando igualdad de oportunidades para todas las personas candidatas.",
                    },
                    {
                        type: "single",
                        prompt: "La selección inclusiva busca:",
                        options: [
                            "Favorecer un grupo específico.",
                            "Garantizar igualdad de oportunidades.",
                            "Limitar la participación.",
                            "Excluir candidatos.",
                        ],
                        correct: "Garantizar igualdad de oportunidades.",
                        explanation:
                            "La selección inclusiva promueve que todas las personas tengan las mismas oportunidades de participar en los procesos de contratación, sin discriminación por género, edad, discapacidad u otras características personales.",
                    },
                    {
                        type: "single",
                        prompt:
                            "¿Cuál de las siguientes preguntas no debería realizarse durante una entrevista laboral?",
                        options: [
                            "Experiencia profesional",
                            "Competencias técnicas",
                            "Estado de embarazo",
                            "Formación académica",
                        ],
                        correct: "Estado de embarazo",
                        explanation:
                            "La información relacionada con el embarazo no debe utilizarse como criterio de selección. Las entrevistas deben enfocarse únicamente en aspectos relacionados con el puesto de trabajo y las competencias de la persona candidata.",
                    },
                    {
                        type: "single",
                        prompt: "La contratación inclusiva beneficia a la empresa porque:",
                        options: [
                            "Reduce la diversidad",
                            "Aumenta la innovación",
                            "Limita candidatos",
                            "Incrementa conflictos",
                        ],
                        correct: "Aumenta la innovación",
                        explanation:
                            "Los equipos diversos aportan diferentes perspectivas, experiencias e ideas, lo que favorece la creatividad, la innovación y una mejor capacidad para resolver problemas dentro de la organización.",
                    },
                    {
                        type: "single",
                        prompt: "Un proceso de selección inclusivo debe ser:",
                        options: ["Subjetivo", "Transparente y objetivo", "Discrecional", "Preferencial"],
                        correct: "Transparente y objetivo",
                        explanation:
                            "La transparencia y la objetividad ayudan a garantizar que las decisiones de contratación se basen en criterios claros, justos y relacionados con las competencias requeridas para el puesto.",
                    },
                ]
            }
        },
        {
            id: 'unidad2',
            title: 'Unidad 2: Desarrollo Y Crecimiento Profesional',
            waitSeconds: 900,
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
                        prompt: "Las oportunidades de crecimiento profesional deben basarse en:",
                        options: ["Méritos y competencias", "Edad", "Género", "Estado civil"],
                        correct: "Méritos y competencias",
                        explanation:
                            "Las oportunidades de desarrollo y crecimiento profesional deben otorgarse considerando el desempeño, los conocimientos, las habilidades y las competencias de cada persona, garantizando procesos justos y equitativos.",
                    },
                    {
                        type: "single",
                        prompt: "La capacitación continua permite:",
                        options: [
                            "Mantener conocimientos obsoletos",
                            "Desarrollar nuevas competencias",
                            "Reducir productividad",
                            "Limitar oportunidades",
                        ],
                        correct: "Desarrollar nuevas competencias",
                        explanation:
                            "La capacitación continua ayuda a las personas trabajadoras a actualizar conocimientos, adquirir nuevas habilidades y fortalecer sus capacidades para responder a los cambios y desafíos del entorno laboral.",
                    },
                    {
                        type: "single",
                        prompt: "Un ascenso justo debe considerar:",
                        options: [
                            "Resultados y desempeño",
                            "Preferencias personales",
                            "Apariencia física",
                            "Nacionalidad",
                        ],
                        correct: "Resultados y desempeño",
                        explanation:
                            "Los ascensos deben fundamentarse en criterios objetivos como el rendimiento, el cumplimiento de metas, las competencias demostradas y la contribución al logro de los objetivos de la organización.",
                    },
                    {
                        type: "single",
                        prompt: "La igualdad de oportunidades implica:",
                        options: [
                            "Mismos privilegios para unos pocos",
                            "Acceso equitativo al desarrollo profesional",
                            "Exclusión de ciertos grupos",
                            "Favorecer a una sola persona",
                        ],
                        correct: "Acceso equitativo al desarrollo profesional",
                        explanation:
                            "La igualdad de oportunidades garantiza que todas las personas tengan acceso a capacitación, promoción y crecimiento profesional sin discriminación por género, edad, discapacidad u otras características personales.",
                    },
                    {
                        type: "single",
                        prompt: "La formación permanente beneficia:",
                        options: ["Solo a la empresa", "Solo al trabajador", "A trabajadores y organización", "A nadie"],
                        correct: "A trabajadores y organización",
                        explanation:
                            "La formación continua fortalece las capacidades de las personas trabajadoras, mejora su desempeño y contribuye al crecimiento, la competitividad y el éxito de la organización.",
                    },
                ]
            }
        },
        {
            id: 'unidad3',
            title: 'Unidad 3: Diversidad E Inclusión Organizacional',
            waitSeconds: 600,
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
                        prompt: "¿Qué significa inclusión laboral?",
                        options: [
                            "Contratar únicamente ciertos grupos.",
                            "Garantizar participación y oportunidades para todas las personas.",
                            "Otorgar beneficios especiales solo a algunos trabajadores.",
                            "Diferenciar empleados por su edad.",
                        ],
                        correct: "Garantizar participación y oportunidades para todas las personas.",
                        explanation:
                            "La inclusión laboral busca que todas las personas, independientemente de sus características, condiciones o circunstancias, tengan acceso a oportunidades de empleo, desarrollo y participación en igualdad de condiciones.",
                    },
                    {
                        type: "single",
                        prompt: "Un beneficio de la diversidad es:",
                        options: ["Menor creatividad.", "Mayor innovación.", "Más conflictos.", "Menor productividad."],
                        correct: "Mayor innovación.",
                        explanation:
                            "La diversidad aporta diferentes perspectivas, experiencias y conocimientos, lo que favorece la creatividad, la generación de nuevas ideas y la búsqueda de soluciones innovadoras dentro de la organización.",
                    },
                    {
                        type: "single",
                        prompt: "La inclusión organizacional significa:",
                        options: [
                            "Contratar personas diferentes únicamente",
                            "Crear espacios de participación para todos",
                            "Dar beneficios a un solo grupo",
                            "Separar trabajadores",
                        ],
                        correct: "Crear espacios de participación para todos",
                        explanation:
                            "La inclusión organizacional implica promover un entorno donde todas las personas se sientan valoradas, escuchadas y con las mismas oportunidades de participar y aportar al éxito de la organización.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál de los siguientes aspectos forma parte de la diversidad?",
                        options: ["Edad", "Nacionalidad", "Discapacidad", "Todas las anteriores"],
                        correct: "Todas las anteriores",
                        explanation:
                            "La diversidad incluye características como la edad, nacionalidad, discapacidad, género, cultura, experiencias y otras condiciones que enriquecen los equipos de trabajo y fortalecen la convivencia laboral.",
                    },
                    {
                        type: "single",
                        prompt: "Una organización inclusiva promueve:",
                        options: ["Respeto y participación", "Exclusión", "Discriminación", "Desigualdad"],
                        correct: "Respeto y participación",
                        explanation:
                            "Las organizaciones inclusivas fomentan el respeto, la igualdad de oportunidades y la participación de todas las personas, contribuyendo a un ambiente laboral más colaborativo, productivo y equitativo.",
                    },
                ]
            }
        },
        {
            id: 'unidad4',
            title: 'Unidad 4: Bienestar Y Calidad De Vida Laboral',
            waitSeconds: 600,
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
                        prompt: "El bienestar laboral busca:",
                        options: [
                            "Mejorar la calidad de vida de los trabajadores",
                            "Reducir beneficios",
                            "Incrementar conflictos",
                            "Limitar participación",
                        ],
                        correct: "Mejorar la calidad de vida de los trabajadores",
                        explanation:
                            "El bienestar laboral comprende acciones y condiciones que favorecen la salud, la satisfacción, la motivación y la calidad de vida de las personas trabajadoras dentro de la organización.",
                    },
                    {
                        type: "single",
                        prompt: "¿Cuál de estas acciones promueve bienestar laboral?",
                        options: [
                            "Reconocer el desempeño",
                            "Ridiculizar errores",
                            "Excluir compañeros",
                            "Ignorar necesidades",
                        ],
                        correct: "Reconocer el desempeño",
                        explanation:
                            "Reconocer los logros y el esfuerzo de las personas trabajadoras fortalece la motivación, el compromiso y el sentido de pertenencia, contribuyendo a un ambiente laboral positivo.",
                    },
                    {
                        type: "single",
                        prompt: "La salud mental influye en:",
                        options: [
                            "Productividad y satisfacción laboral",
                            "Solo en la vida familiar",
                            "El clima externo",
                            "Ninguna",
                        ],
                        correct: "Productividad y satisfacción laboral",
                        explanation:
                            "La salud mental es un factor importante para el desempeño laboral, la toma de decisiones, las relaciones interpersonales y el bienestar general de las personas trabajadoras.",
                    },
                    {
                        type: "single",
                        prompt: "Un ambiente laboral saludable se caracteriza por:",
                        options: ["Comunicación respetuosa", "Acoso", "Violencia", "Exclusión"],
                        correct: "Comunicación respetuosa",
                        explanation:
                            "La comunicación basada en el respeto, la escucha activa y la colaboración favorece relaciones laborales positivas y contribuye a prevenir conflictos y situaciones de violencia.",
                    },
                    {
                        type: "single",
                        prompt: "El bienestar laboral beneficia:",
                        options: ["Solo al empleador", "Solo a los trabajadores", "A toda la organización", "Ninguna"],
                        correct: "A toda la organización",
                        explanation:
                            "Cuando las personas trabajadoras se sienten valoradas y cuentan con un entorno saludable, aumenta la satisfacción, el compromiso y la productividad, generando beneficios para toda la organización.",
                    },
                ]
            }
        },
        {
            id: 'unidad5',
            title: 'Unidad 5: Concilación Entre La Vida Laboral Y Familiar',
            waitSeconds: 600,
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
                        prompt: "¿Qué es la corresponsabilidad?",
                        options: [
                            "Que las tareas familiares correspondan únicamente a la mujer.",
                            "Compartir responsabilidades familiares de manera equitativa.",
                            "Delegar todas las tareas domésticas.",
                            "No participar en actividades familiares.",
                        ],
                        correct: "Compartir responsabilidades familiares de manera equitativa.",
                        explanation:
                            "La corresponsabilidad implica que las tareas del hogar, el cuidado de hijos e hijas y otras responsabilidades familiares sean compartidas de manera justa entre los integrantes de la familia, promoviendo la igualdad y el bienestar de todos.",
                    },
                    {
                        type: "single",
                        prompt: "La conciliación laboral favorece:",
                        options: [
                            "Mayor estrés",
                            "Equilibrio entre responsabilidades",
                            "Más conflictos",
                            "Menor productividad",
                        ],
                        correct: "Equilibrio entre responsabilidades",
                        explanation:
                            "La conciliación laboral permite compatibilizar las responsabilidades laborales, familiares y personales, contribuyendo a una mejor organización del tiempo y una mayor calidad de vida.",
                    },
                    {
                        type: "single",
                        prompt: "La corresponsabilidad familiar implica:",
                        options: [
                            "Participación equitativa de madres y padres",
                            "Responsabilidad exclusiva de la mujer",
                            "Responsabilidad exclusiva del hombre",
                            "Responsabilidad de la empresa",
                        ],
                        correct: "Participación equitativa de madres y padres",
                        explanation:
                            "La corresponsabilidad familiar promueve que madres y padres compartan de manera equilibrada las tareas de cuidado, educación y apoyo a los miembros de la familia.",
                    },
                    {
                        type: "single",
                        prompt: "Una ventaja de la conciliación es:",
                        options: [
                            "Mejor bienestar emocional",
                            "Más ausentismo",
                            "Menor satisfacción",
                            "Menor productividad",
                        ],
                        correct: "Mejor bienestar emocional",
                        explanation:
                            "Cuando las personas pueden equilibrar adecuadamente sus responsabilidades laborales y familiares, disminuye el estrés y mejora su bienestar físico, emocional y social.",
                    },
                    {
                        type: "single",
                        prompt: "El equilibrio entre trabajo y familia contribuye a:",
                        options: [
                            "Mejor desempeño laboral",
                            "Más agotamiento",
                            "Menor compromiso",
                            "Menor bienestar",
                        ],
                        correct: "Mejor desempeño laboral",
                        explanation:
                            "Mantener un equilibrio saludable entre la vida laboral y familiar favorece la motivación, la concentración, el compromiso y la productividad en el trabajo.",
                    },
                ]
            }
        },
        {
            id: 'unidad6',
            title: 'Unidad 6: Cultura Organizacional Y Buenas Prácticas Laborales',
            waitSeconds: 600,
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
                        prompt: "Una buena práctica laboral es:",
                        options: [
                            "Promover igualdad de oportunidades",
                            "Favorecer discriminación",
                            "Restringir capacitaciones",
                            "Excluir trabajadores",
                        ],
                        correct: "Promover igualdad de oportunidades",
                        explanation:
                            "Las buenas prácticas laborales buscan garantizar que todas las personas tengan acceso a las mismas oportunidades de empleo, capacitación, desarrollo y crecimiento profesional, sin discriminación.",
                    },
                    {
                        type: "single",
                        prompt: "Las políticas de inclusión ayudan a:",
                        options: [
                            "Crear ambientes respetuosos",
                            "Generar conflictos",
                            "Limitar participación",
                            "Reducir diversidad",
                        ],
                        correct: "Crear ambientes respetuosos",
                        explanation:
                            "Las políticas de inclusión promueven el respeto por la diversidad y favorecen que todas las personas se sientan valoradas, respetadas y parte importante de la organización.",
                    },
                    {
                        type: "single",
                        prompt: "¿Qué herramienta permite conocer la percepción de los trabajadores?",
                        options: ["Encuesta de clima laboral", "Factura", "Organigrama", "Inventario"],
                        correct: "Encuesta de clima laboral",
                        explanation:
                            "Las encuestas de clima laboral permiten recopilar opiniones y experiencias de los trabajadores sobre distintos aspectos del entorno laboral, identificando fortalezas y oportunidades de mejora.",
                    },
                    {
                        type: "single",
                        prompt: "La mejora continua busca:",
                        options: [
                            "Identificar oportunidades de mejora",
                            "Mantener errores",
                            "Evitar capacitación",
                            "Eliminar procesos",
                        ],
                        correct: "Identificar oportunidades de mejora",
                        explanation:
                            "La mejora continua consiste en evaluar periódicamente los procesos y prácticas de la organización para identificar oportunidades de fortalecimiento y lograr mejores resultados.",
                    },
                    {
                        type: "single",
                        prompt: "Una cultura organizacional positiva promueve:",
                        options: ["Respeto e inclusión", "Violencia", "Acoso", "Discriminación"],
                        correct: "Respeto e inclusión",
                        explanation:
                            "Una cultura organizacional positiva fomenta el respeto, la colaboración, la inclusión y la valoración de la diversidad, contribuyendo al bienestar de las personas y al éxito de la organización.",
                    },
                ]
            }
        }, {
            id: 'unidad7',
            title: 'Caso Práctico Inegrador',
            waitSeconds: 600,
            Content: ActividadFinal
        }

    ],
    evaluation: {
        title: "Examen Final Del Módulo 4",
        questionsToAsk: 10,
        passingScore: 7,
        shuffleOptions: true,
        showCorrectAnswers: false,
        recordEvaluation: false,
        questions: [
            {
                type: "single",
                prompt: "¿Qué busca la selección inclusiva?",
                options: [
                    "Favorecer determinados grupos.",
                    "Garantizar igualdad de oportunidades.",
                    "Limitar la contratación.",
                    "Excluir candidatos.",
                ],
                correct: "Garantizar igualdad de oportunidades.",
                explanation:
                    "La selección inclusiva busca que todas las personas tengan las mismas oportunidades de acceder a un empleo, sin discriminación por género, edad, discapacidad, nacionalidad u otras características personales. Las decisiones de contratación deben basarse en competencias, experiencia y méritos relacionados con el puesto.",
            },
            {
                type: "single",
                prompt: "¿Qué es la inclusión organizacional?",
                options: [
                    "Dar beneficios solo a ciertos trabajadores.",
                    "Garantizar participación y respeto para todas las personas.",
                    "Separar grupos de trabajadores.",
                    "Aplicar diferencias injustificadas.",
                ],
                correct: "Garantizar participación y respeto para todas las personas.",
                explanation:
                    "La inclusión organizacional consiste en crear un entorno de trabajo donde todas las personas se sientan valoradas, respetadas y tengan las mismas oportunidades de participar, aportar ideas y desarrollarse profesionalmente dentro de la organización.",
            },
            {
                type: "single",
                prompt: "¿Las oportunidades de crecimiento profesional deben basarse en?",
                options: ["Edad", "Género", "Méritos y competencias", "Preferencias personales"],
                correct: "Méritos y competencias",
                explanation:
                    "Las oportunidades de capacitación, promoción y desarrollo profesional deben otorgarse utilizando criterios objetivos relacionados con el desempeño, las competencias y los resultados de cada persona trabajadora.",
            },
            {
                type: "single",
                prompt: "¿Qué significa corresponsabilidad?",
                options: [
                    "Compartir responsabilidades familiares de forma equitativa.",
                    "Que una sola persona asuma las tareas familiares.",
                    "Evitar responsabilidades.",
                    "Ninguna de las anteriores.",
                ],
                correct: "Compartir responsabilidades familiares de forma equitativa.",
                explanation:
                    "La corresponsabilidad implica que las responsabilidades del hogar y el cuidado de los miembros de la familia sean compartidas de manera justa y equilibrada. Esto favorece la igualdad de oportunidades y contribuye a una mejor conciliación entre la vida laboral y familiar.",
            },
            {
                type: "single",
                prompt: "Una buena práctica laboral es:",
                options: [
                    "Aplicar igualdad de oportunidades.",
                    "Discriminar trabajadores.",
                    "Excluir personas mayores.",
                    "Limitar el acceso a capacitaciones.",
                ],
                correct: "Aplicar igualdad de oportunidades.",
                explanation:
                    "Las buenas prácticas laborales promueven ambientes de trabajo seguros, inclusivos y respetuosos. Garantizar la igualdad de oportunidades permite que todas las personas accedan a empleo, capacitación y desarrollo profesional en condiciones justas y sin discriminación.",
            },
            {
                type: "single",
                prompt: "¿Cuál de los siguientes aspectos debe considerarse en un proceso de selección inclusivo?",
                options: ["Apariencia física", "Estado civil", "Competencias y experiencia", "Religión"],
                correct: "Competencias y experiencia",
                explanation:
                    "Los procesos de selección inclusivos deben centrarse en las competencias, conocimientos, experiencia y habilidades necesarias para el puesto, evitando criterios relacionados con características personales que puedan generar discriminación.",
            },
            {
                type: "single",
                prompt: "La capacitación continua permite:",
                options: [
                    "Limitar el desarrollo profesional",
                    "Mantener conocimientos obsoletos",
                    "Fortalecer competencias y habilidades",
                    "Reducir oportunidades laborales",
                ],
                correct: "Fortalecer competencias y habilidades",
                explanation:
                    "La capacitación continua permite actualizar conocimientos, desarrollar nuevas habilidades y mejorar el desempeño, favoreciendo el crecimiento profesional de las personas trabajadoras.",
            },
            {
                type: "single",
                prompt: "¿Cuál es un beneficio de la diversidad en los equipos de trabajo?",
                options: ["Menor creatividad", "Mayor innovación", "Más exclusión", "Menor participación"],
                correct: "Mayor innovación",
                explanation:
                    "La diversidad aporta distintas perspectivas, experiencias y conocimientos, lo que favorece la creatividad, la innovación y la búsqueda de soluciones más efectivas para los desafíos organizacionales.",
            },
            {
                type: "single",
                prompt: "La inclusión organizacional implica:",
                options: [
                    "Integrar y valorar a todas las personas",
                    "Favorecer únicamente a ciertos grupos",
                    "Limitar la participación",
                    "Separar trabajadores",
                ],
                correct: "Integrar y valorar a todas las personas",
                explanation:
                    "La inclusión organizacional busca que todas las personas se sientan respetadas, valoradas y con igualdad de oportunidades para participar y desarrollarse dentro de la organización.",
            },
            {
                type: "single",
                prompt: "¿Cuál de las siguientes acciones favorece el bienestar laboral?",
                options: [
                    "Maltrato verbal",
                    "Reconocimiento al desempeño",
                    "Exclusión de trabajadores",
                    "Discriminación",
                ],
                correct: "Reconocimiento al desempeño",
                explanation:
                    "Reconocer el esfuerzo y los logros de las personas trabajadoras fortalece la motivación, el compromiso y la satisfacción laboral, contribuyendo a un ambiente de trabajo positivo.",
            },
            {
                type: "single",
                prompt: "La salud mental en el trabajo es importante porque contribuye a:",
                options: [
                    "Reducir la productividad",
                    "Generar conflictos",
                    "Mejorar la satisfacción laboral y el desempeño",
                    "Limitar la comunicación",
                ],
                correct: "Mejorar la satisfacción laboral y el desempeño",
                explanation:
                    "La salud mental influye directamente en la productividad, las relaciones laborales, la toma de decisiones y el bienestar general de las personas trabajadoras.",
            },
            {
                type: "single",
                prompt: "¿Cuál es uno de los beneficios de la conciliación entre la vida laboral y familiar?",
                options: [
                    "Mayor estrés",
                    "Menor productividad",
                    "Mejor equilibrio entre responsabilidades",
                    "Más conflictos",
                ],
                correct: "Mejor equilibrio entre responsabilidades",
                explanation:
                    "La conciliación permite armonizar las responsabilidades laborales y personales, favoreciendo una mejor calidad de vida, menor estrés y mayor bienestar.",
            },
            {
                type: "single",
                prompt: "La corresponsabilidad familiar significa:",
                options: [
                    "Que una sola persona asuma todas las tareas del hogar",
                    "Compartir de manera equilibrada las responsabilidades familiares",
                    "Delegar todas las tareas a terceros",
                    "Evitar participar en actividades familiares",
                ],
                correct: "Compartir de manera equilibrada las responsabilidades familiares",
                explanation:
                    "La corresponsabilidad implica que los integrantes de la familia compartan de forma justa las tareas domésticas y de cuidado, promoviendo la igualdad y el bienestar familiar.",
            },
            {
                type: "single",
                prompt:
                    "¿Qué herramienta permite conocer la percepción de los trabajadores sobre el ambiente laboral?",
                options: ["Inventario", "Factura", "Encuesta de clima laboral", "Organigrama"],
                correct: "Encuesta de clima laboral",
                explanation:
                    "Las encuestas de clima laboral permiten identificar fortalezas y oportunidades de mejora en la organización a partir de la opinión y experiencia de los trabajadores.",
            },
            {
                type: "single",
                prompt: "Una cultura organizacional positiva promueve:",
                options: [
                    "Discriminación",
                    "Violencia laboral",
                    "Respeto, inclusión y colaboración",
                    "Exclusión de trabajadores",
                ],
                correct: "Respeto, inclusión y colaboración",
                explanation:
                    "Una cultura organizacional positiva fomenta el respeto mutuo, la inclusión, el trabajo en equipo y la valoración de la diversidad, contribuyendo al bienestar de las personas y al logro de los objetivos organizacionales.",
            },
        ]

    }

}

export default modulo4