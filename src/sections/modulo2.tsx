import type { Section } from './types'
import PreguntaPractica from '../components/PreguntaPractica'
import SeleccionMultiple from '../components/SeleccionMultiple'
import ImageBase from '../components/ImageBase'
import VideoBase from '../components/VideoBase'
import img_2_1_1 from '../assets/img_2_1_1.jpg'
import img_2_2_1 from '../assets/img_2_2_1.jpg'
import img_2_3_1 from '../assets/img_2_3_1.jpg'
import img_2_4_1 from '../assets/img_2_4_1.jpg'
import img_2_5_1 from '../assets/img_2_5_1.jpg'
import img_2_6_1 from '../assets/img_2_6_1.jpg'
function Overview() {
    return (
        <>
            <h3><strong>Duracion Total:</strong> 10 Horas</h3>
            <VideoBase src="https://www.youtube.com/embed/e8jFZGnVkHw?si=bUH-oa5RR00_BzmG" title="Intro to modulo 2" />
            <h3>
                <strong>Objetivo Del Modulo </strong>


            </h3>
            <div>
                <p>
                    Al finalizar este módulo, la persona participante comprenderá los conceptos de igualdad de género, igualdad salarial y trabajo de igual valor, identificando prácticas discriminatorias y promoviendo ambientes laborales inclusivos, diversos y respetuosos.
                </p>
                <p>
                    Este módulo responde directamente a las disposiciones de la Ley Orgánica para la Igualdad Salarial entre Mujeres y Hombres y del Acuerdo Ministerial Nro. MDT-2025-006 del Ministerio del Trabajo del Ecuador, brindando herramientas prácticas para valorar los puestos de trabajo con justicia y erradicar toda brecha salarial injustificada en el entorno laboral.
                </p>
            </div>
        </>

    )
}


function Unidad1() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Objetivo General </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">
                        <p>
                            Al finalizar este módulo, la persona participante comprenderá los conceptos de igualdad de género, igualdad salarial y trabajo de igual valor, identificando prácticas discriminatorias y promoviendo ambientes laborales inclusivos, diversos y respetuosos.
                        </p>
                        <p>
                            Este módulo responde directamente a las disposiciones de la <strong>Ley Orgánica para la Igualdad Salarial entre Mujeres y Hombres</strong> y del <strong>Acuerdo Ministerial Nro. MDT-2025-006</strong> del Ministerio del Trabajo del Ecuador, brindando herramientas prácticas para valorar los puestos de trabajo con justicia y erradicar toda brecha salarial injustificada en el entorno laboral.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Objetivo de aprendizaje </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">
                        <p className="text-sm italic">Duración estimada: 1 hora 30 minutos</p>
                        <p>
                            Comprender los conceptos de sexo, género, roles de género y estereotipos para reconocer cómo influyen en la vida laboral.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 1.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.1 Sexo y Género </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_2_1_1} />
                    <div className="pl-4">
                        <p>
                            Aunque suelen utilizarse como sinónimos, sexo y género tienen significados diferentes.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Sexo </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>Se refiere a las características biológicas con las que nacen las personas.</p>
                        <p><strong>Ejemplos:</strong></p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Hombre.</li>
                            <li>Mujer.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Género </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>Se refiere a los roles, comportamientos y expectativas que la sociedad asigna a mujeres y hombres.</p>
                        <p>
                            <strong>Ejemplo:</strong> Pensar que cierto trabajo "es para hombres" o "es para mujeres".
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Por qué es importante distinguirlos en el trabajo?</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            Mientras que el sexo responde a condiciones biológicas universales que no cambian según el país o la época, el género es una construcción social y cultural. Esto significa que las ideas sobre qué tareas "corresponden" a un hombre o a una mujer fueron creadas por la sociedad y, por lo tanto, pueden transformarse. En el ámbito laboral, confundir sexo con género lleva a excluir talento valioso basándose en costumbres antiguas y no en las verdaderas capacidades profesionales de cada persona.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 1.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.2 Roles de Género </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            Son las actividades, funciones o comportamientos que tradicionalmente la sociedad asigna a hombres y mujeres.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplos </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <ul className="pl-4 space-y-1">
                            <li>❌ "Los hombres deben trabajar fuera de casa."</li>
                            <li>❌ "Las mujeres deben encargarse únicamente del hogar."</li>
                        </ul>
                        <p>
                            Actualmente, tanto hombres como mujeres pueden desarrollar cualquier actividad laboral o familiar.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>El impacto de los roles tradicionales en la vida laboral</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            Cuando se asigna a las mujeres la responsabilidad exclusiva del cuidado del hogar, de los hijos o de adultos mayores (lo que se conoce como <strong>trabajo de cuidado no remunerado</strong>), ellas enfrentan una "doble jornada" que limita su tiempo para capacitarse o aceptar cargos de mayor responsabilidad. Por otro lado, a los hombres suele presionárseles para ser los únicos proveedores económicos, dificultando que ejerzan plenamente su derecho a la paternidad activa. Promover roles flexibles y compartidos permite que tanto mujeres como hombres equilibren su vida personal y profesional en igualdad de condiciones.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 1.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.3 Estereotipos de Género </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            Son ideas preconcebidas que pueden limitar oportunidades.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplos </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <ul className="pl-4 space-y-1">
                            <li>❌ Los hombres son mejores líderes.</li>
                            <li>❌ Las mujeres no pueden trabajar en construcción.</li>
                            <li>❌ Los hombres no deben cuidar niños.</li>
                        </ul>
                        <p>
                            Estos estereotipos pueden generar discriminación y desigualdad.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Cómo se manifiestan los estereotipos en las decisiones diarias de una empresa?</strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Segregación ocupacional:</strong> Concentrar a las mujeres únicamente en áreas administrativas, de limpieza o atención al cliente, y a los hombres únicamente en áreas técnicas, operativas, de transporte o gerenciales.
                            </li>
                            <li>
                                <strong>Sesgos en las evaluaciones:</strong> Calificar a un hombre firme como "un líder con carácter", mientras que a una mujer con la misma actitud se la etiqueta como "autoritaria" o "conflictiva".
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Caso práctico de reflexión</strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            En una empresa industrial se abre una vacante para Supervisor de Planta. Dos candidatos internos postulan: Valeria, ingeniera industrial con 6 años de experiencia en producción, y Jhon, técnico con 3 años de experiencia. Durante la entrevista, un miembro del comité comenta: <em>"Ese puesto requiere tratar con operarios de turno nocturno, mejor pongamos a un hombre porque a una mujer no la van a respetar".</em>
                        </p>
                        <p>
                            <strong>Análisis:</strong> Esta decisión está basada en un estereotipo de género y no en méritos objetivos. La capacidad de liderazgo y supervisión depende de la formación, experiencia y habilidades de gestión de la persona, nunca de su género.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Diferencia entre sexo y género </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <VideoBase src="https://www.youtube.com/embed/4tf7A3AJzVg?si=OnYpUSLurEz4v8o_" title='¿Sabes cuál es la diferencia entre sexo y género?' />
                    </div>
                </div>
            </section>
        </>
    )
}

function Unidad2() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Objetivo de aprendizaje </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            Reconocer la importancia de la igualdad de género y sus beneficios para las personas y las organizaciones.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 2.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.1 Igualdad de Derechos </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">
                        <p>
                            La igualdad de género significa que todas las personas tienen los mismos derechos, responsabilidades y oportunidades.
                        </p>
                        <p>
                            Nadie debe recibir un trato diferente por ser hombre o mujer.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Respaldo en la Constitución del Ecuador</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            El Artículo 70 y el Artículo 331 de la Constitución de la República del Ecuador obligan al Estado y a las organizaciones a garantizar a las mujeres igualdad en el acceso al empleo, a la formación, a la promoción laboral y profesional, y a una remuneración equitativa, prohibiendo expresamente cualquier forma de discriminación, acoso o acto de violencia, sea directa o indirecta, que afecte a las mujeres en el trabajo.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 2.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.2 Equidad </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            La equidad consiste en aplicar medidas que permitan reducir desigualdades y garantizar oportunidades reales para todas las personas.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Si un grupo enfrenta barreras históricas para acceder a cargos directivos, la empresa puede implementar programas de desarrollo y capacitación para equilibrar oportunidades.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Diferencia clave: Igualdad vs. Equidad</strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Igualdad</strong> es dar a todas las personas exactamente las mismas reglas, derechos y oportunidades (por ejemplo, que cualquier trabajador pueda postular a un ascenso).
                            </li>
                            <li>
                                <strong>Equidad</strong> es reconocer que no todas las personas parten desde el mismo punto debido a barreras históricas o responsabilidades familiares, por lo que se aplican medidas de ajuste (como horarios flexibles, salas de lactancia o programas de mentoría para liderazgo femenino) para que todos tengan posibilidades reales de alcanzar los mismos resultados.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 2.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.3 Beneficios para la Empresa </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_2_2_1} />
                    <div className="pl-4 space-y-2">
                        <p>La igualdad de género aporta:</p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Mejor clima laboral.</li>
                            <li>✅ Mayor productividad.</li>
                            <li>✅ Equipos más diversos.</li>
                            <li>✅ Más innovación.</li>
                            <li>✅ Mejor reputación organizacional.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Compromiso legal en el Ecuador (Acuerdo Ministerial Nro. MDT-2025-006)</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            Cumplir las políticas de igualdad y las 40 horas anuales de capacitación permite a las organizaciones obtener la <strong>Certificación de Cumplimiento de Obligaciones para alcanzar la Igualdad Salarial</strong> del Ministerio del Trabajo.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Igualdad de Género </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <VideoBase src="https://www.youtube.com/embed/DzlkOqfyNk0?si=xSa6U51aufTY6cJD" title="Igualdad de Género" />
                    </div>
                </div>
            </section>

            {/* ---------- Actividad Interactiva ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Actividad Interactiva </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <SeleccionMultiple
                            pregunta="Seleccione los beneficios de la igualdad de género."
                            opciones={[
                                'Mayor productividad',
                                'Mejor clima laboral',
                                'Más innovación',
                                'Menor respeto',
                                'Mayor discriminación',
                            ]}
                            correctas={['Mayor productividad', 'Mejor clima laboral', 'Más innovación']}
                            explicacion="La igualdad de género mejora el clima laboral, aumenta la productividad y fomenta la innovación. En cambio, el menor respeto y la mayor discriminación son consecuencias de la desigualdad, no beneficios."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

function Unidad3() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Objetivo de aprendizaje </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">
                        <p>
                            Comprender qué es la brecha salarial, sus causas y consecuencias.
                        </p>
                        <p>
                            Asi mismo, usted identificará cómo el marco legal ecuatoriano protege el principio de igual remuneración por trabajo de igual valor y qué herramientas objetivas permiten prevenir y erradicar estas desigualdades dentro de las organizaciones.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 3.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.1 ¿Qué es la Brecha Salarial? </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_2_3_1} />
                    <div className="pl-4 space-y-4">
                        <p>
                            Es la diferencia de remuneración que existe entre mujeres y hombres cuando no está justificada por factores objetivos.
                        </p>
                        <p>
                            Es importante distinguir entre dos situaciones: cuando dos personas ganan diferente porque una tiene mayor experiencia, más años de antigüedad, un título especializado requerido para el cargo o cumple jornadas suplementarias, existe una <strong>diferencia salarial justificada</strong>. En cambio, cuando dos personas realizan el mismo trabajo —o trabajos distintos que aportan un valor equivalente a la empresa— y una percibe menos dinero simplemente por ser mujer, estamos frente a una <strong>brecha salarial injustificada o discriminatoria</strong>.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Respaldo legal en el País</strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>En nuestro país, el principio de igualdad salarial cuenta con una sólida protección jurídica:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Constitución de la República del Ecuador (Art. 326, numeral 4):</strong> Establece de forma expresa que "a trabajo de igual valor corresponderá igual remuneración".
                            </li>
                            <li>
                                <strong>Convenio 100 de la OIT:</strong> Ratificado por el Ecuador, obliga a garantizar la igualdad de remuneración entre la mano de obra masculina y femenina por un trabajo de igual valor.
                            </li>
                            <li>
                                <strong>Ley Orgánica para la Igualdad Salarial entre Mujeres y Hombres:</strong> Promueve que tanto el sector público como el privado apliquen criterios transparentes y libres de sesgos en la fijación de sueldos, bonos, comisiones y beneficios económicos.
                            </li>
                            <li>
                                <strong>Código del Trabajo (Art. 79):</strong> Consagra el principio de "a trabajo igual, igual salario" sin distinción de sexo, edad, etnia u otras condiciones.
                            </li>
                            <li>
                                <strong>Acuerdo Ministerial Nro. MDT-2025-006:</strong> Detalla las obligaciones de capacitación y los canales formales para reportar discriminación laboral en el país.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 3.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.2 Principales Causas </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Estereotipos de género.</strong> La falsa creencia de que ciertos trabajos "valen más" porque tradicionalmente los realizan hombres, o que el salario de la mujer es solo un "ingreso complementario" para el hogar.
                            </li>
                            <li>
                                <strong>Sesgos en contratación y promoción.</strong> Prejuicios inconscientes durante las entrevistas o evaluaciones, como suponer que una mujer tendrá menor disponibilidad de tiempo por asumir responsabilidades familiares.
                            </li>
                            <li>
                                <strong>Menor acceso a posiciones directivas.</strong> La dificultad que enfrentan muchas mujeres para ascender a cargos de gerencia o alta dirección —fenómeno conocido como "techo de cristal"—, donde se concentran los salarios más altos.
                            </li>
                            <li>
                                <strong>Discriminación salarial.</strong> Asignar directamente un sueldo base inferior o menores bonificaciones a una trabajadora frente a un compañero que desempeña las mismas funciones.
                            </li>
                            <li>
                                <strong>Falta de transparencia en las escalas salariales.</strong> Cuando las empresas no cuentan con tabuladores salariales claros y objetivos, las remuneraciones suelen definirse mediante negociaciones individuales donde los sesgos personales terminan perjudicando a quienes tienen menor poder de negociación.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 3.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.3 Consecuencias </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>Para las personas: </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Menores ingresos.</strong> Reduce la capacidad inmediata de cubrir necesidades básicas, acceder a vivienda, educación o mejorar la calidad de vida.
                            </li>
                            <li>
                                <strong>Menor acceso al ahorro.</strong> Dificulta la posibilidad de generar reservas económicas para emergencias, inversión o patrimonio propio.
                            </li>
                            <li>
                                <strong>Menores pensiones futuras.</strong> En el Ecuador, dado que los aportes al IESS y el cálculo de la jubilación dependen directamente del salario percibido durante la vida laboral, ganar menos hoy significa recibir una pensión de jubilación más baja en la vejez.
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Para las empresas: </strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Conflictos laborales.</strong> Cuando los trabajadores descubren desigualdades injustas en los pagos, se deteriora el clima laboral y aumentan las quejas internas.
                            </li>
                            <li>
                                <strong>Menor compromiso.</strong> Una persona que siente que su esfuerzo no es valorado económicamente con justicia pierde motivación y productividad.
                            </li>
                            <li>
                                <strong>Pérdida de reputación.</strong> Hoy en día, las organizaciones que incumplen la igualdad salarial enfrentan sanciones legales ante el Ministerio del Trabajo y pierden credibilidad frente a clientes, aliados y talento calificado.
                            </li>
                        </ul>
                        <p>
                            Además, la brecha salarial afecta la economía general del país: cuando las mujeres perciben ingresos justos y equitativos, se fortalece la autonomía económica de los hogares, se reduce la pobreza familiar y se dinamiza el consumo y el desarrollo social.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 3.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.4 ¿Cómo prevenir la brecha salarial? </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            Las diferencias de remuneración deben sustentarse en criterios objetivos relacionados con el puesto y no en características personales de las personas trabajadoras.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Algunos criterios objetivos son:</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Responsabilidades del puesto.</strong> Nivel de toma de decisiones, manejo de presupuestos o personal a cargo.</li>
                            <li>✅ <strong>Competencias requeridas.</strong> Conocimientos técnicos especializados, dominio de herramientas o idiomas necesarios para el cargo.</li>
                            <li>✅ <strong>Formación y experiencia.</strong> Títulos académicos exigidos y años de trayectoria comprobada en funciones similares.</li>
                            <li>✅ <strong>Nivel de complejidad del trabajo.</strong> Grado de dificultad analítica, operativa o resolución de problemas que exige la tarea.</li>
                            <li>✅ <strong>Condiciones laborales.</strong> Esfuerzo físico, exposición a riesgos controlados o disponibilidad de horarios especiales.</li>
                        </ul>
                        <p>
                            Cuando dos puestos tienen igual valor para la organización, la remuneración debe ser equivalente.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Buenas prácticas organizacionales para cerrar la brecha</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            Para garantizar una verdadera equidad, las organizaciones deben implementar bandas o escalas salariales claras para cada cargo, realizar auditorías internas periódicas para detectar y corregir diferencias sin sustento técnico, y asegurar que los bonos, incentivos y oportunidades de ascenso se otorguen bajo indicadores de desempeño medibles y transparentes.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo práctico</strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Ana y Carlos trabajan en áreas distintas de una empresa. Ambos puestos requieren una formación similar, tienen responsabilidades equivalentes y demandan el mismo nivel de esfuerzo. Sin embargo, Carlos recibe una remuneración superior sin una justificación objetiva.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            La situación podría reflejar una brecha salarial. Las diferencias salariales deben estar sustentadas en factores objetivos relacionados con el trabajo realizado y no en características personales de quienes ocupan los cargos.
                        </p>
                        <p>
                            Para corregir esta situación, el área de Talento Humano debe realizar una valoración objetiva de ambos puestos, comparando las responsabilidades, competencias y esfuerzo que exige cada uno. Si se confirma que ambos cargos aportan un valor equivalente a la empresa, la organización está obligada a nivelar el salario de Ana al de Carlos, cumpliendo así con la ley ecuatoriana y los estándares internacionales de justicia laboral.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Idea clave</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            La brecha salarial puede prevenirse cuando las decisiones sobre remuneración se basan en criterios objetivos como las responsabilidades, competencias, experiencia y condiciones del puesto, garantizando igualdad para trabajos de igual valor.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Entendiendo la brecha salarial </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">

                        <VideoBase src="https://www.youtube.com/embed/QU2V31NJNxs?si=W5HdW8bqD6Ag3TBQ" title="Brecha Salarial" />
                    </div>
                </div>
            </section>
        </>
    )
}

function Unidad4() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Objetivo de aprendizaje </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_2_4_1} />
                    <div className="pl-4">
                        <p>
                            Comprender el principio de igual remuneración por trabajo de igual valor y reconocer su importancia para garantizar la igualdad de oportunidades y la no discriminación en el trabajo.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 4.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.1 Concepto </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">
                        <p>
                            La igualdad de remuneración por trabajo de igual valor significa que las personas que desempeñan puestos con responsabilidades, habilidades, conocimientos, esfuerzo y condiciones laborales equivalentes deben recibir una remuneración similar, sin importar su sexo, edad, discapacidad, origen étnico u otra condición personal.
                        </p>
                        <p>
                            Este principio busca eliminar las diferencias salariales injustificadas y promover la equidad en el lugar de trabajo.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Base legal en el Ecuador y diferencia con "igual trabajo"</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            Es fundamental entender que este principio no exige únicamente pagar lo mismo a quienes tienen exactamente el mismo título de cargo (por ejemplo, dos cajeros), sino también a quienes ocupan puestos diferentes que aportan un valor equivalente a la empresa. En el Ecuador, este mandato está respaldado por el Artículo 326 (numeral 4) de la Constitución, el Convenio 100 de la OIT, el Artículo 79 del Código del Trabajo y la Ley Orgánica para la Igualdad Salarial entre Mujeres y Hombres (junto con su reglamento en el Acuerdo Ministerial Nro. MDT-2025-006), garantizando que toda retribución económica —sueldos, bonos o comisiones— sea libre de discriminación.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 4.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.2 Aplicación Empresarial </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-2">
                        <p>Para determinar si dos puestos tienen igual valor, las empresas deben realizar una evaluación objetiva considerando:</p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Formación requerida.</li>
                            <li>✅ Experiencia necesaria.</li>
                            <li>✅ Responsabilidades asignadas.</li>
                            <li>✅ Esfuerzo físico o mental requerido.</li>
                            <li>✅ Condiciones en las que se desarrolla el trabajo.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Qué significa una evaluación objetiva?</strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Una evaluación objetiva analiza los puestos utilizando criterios claros y verificables, evitando preferencias personales, prejuicios o discriminación.
                        </p>
                        <p>No debe basarse en:</p>
                        <ul className="pl-4 space-y-1">
                            <li>❌ Género.</li>
                            <li>❌ Edad.</li>
                            <li>❌ Apariencia física.</li>
                            <li>❌ Relaciones personales.</li>
                            <li>❌ Opiniones subjetivas.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Cómo se realiza una valoración objetiva de puestos?</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            Para evitar decisiones arbitrarias, las áreas de Talento Humano utilizan sistemas de valoración por puntos o factores objetivos. Se asigna un puntaje técnico a cada cargo según el nivel de estudios requerido, los años de experiencia, el manejo de presupuestos o personal a cargo, el esfuerzo físico o mental y los riesgos del entorno. Si dos puestos distintos obtienen un puntaje total equivalente, deben ubicarse en la misma banda salarial, independientemente de si son ocupados por hombres o por mujeres.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 4.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.3 Beneficios de la Igualdad Salarial </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-2">
                        <p>La aplicación de este principio permite:</p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Promover la equidad salarial.</li>
                            <li>✅ Reducir la discriminación.</li>
                            <li>✅ Mejorar el clima laboral.</li>
                            <li>✅ Incrementar la motivación de las personas trabajadoras.</li>
                            <li>✅ Fortalecer la transparencia y confianza dentro de la organización.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 4.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.4 Ejemplos Prácticos </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>Ejemplo 1 </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Una Analista de Compras y una Analista de Logística tienen niveles similares de responsabilidad, formación requerida y toma de decisiones.
                        </p>
                        <p>
                            La empresa debe evaluar si existe igualdad salarial entre ambos cargos.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo 2 </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Dos personas realizan las mismas funciones y poseen responsabilidades equivalentes. Una es hombre y otra mujer.
                        </p>
                        <p>
                            La diferencia de género no puede utilizarse como justificación para pagar salarios diferentes.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Recuerda </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Trabajo de igual valor = remuneración equivalente.</li>
                            <li>✅ La evaluación de puestos debe ser objetiva.</li>
                            <li>✅ La formación y experiencia son factores importantes para valorar un puesto.</li>
                            <li>✅ El género no debe influir en la remuneración.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: ¿Qué es Trabajo de Igual Valor? </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <VideoBase src="https://www.youtube.com/embed/E0cEH6INHYA?si=aQOqnT4J9yko-2g_" title='¿Qué es Trabajo de Igual Valor?' />
                    </div>
                </div>
            </section>

            {/* ---------- Caso Práctico ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Caso Práctico </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <PreguntaPractica
                            contexto="María y Carlos ocupan cargos equivalentes y tienen responsabilidades similares. María recibe $1.200 y Carlos $1.500."
                            pregunta="¿Se debería revisar la situación salarial?"
                            opciones={['Sí', 'No']}
                            correcta="Sí"
                            explicacion="Cuando dos colaboradores ocupan cargos equivalentes con responsabilidades similares y existe una diferencia de $300 dólares sin un sustento objetivo (como mayor antigüedad comprobada, certificaciones especializadas exigidas por el puesto o cumplimiento de metas variables transparentes), la empresa debe auditar y nivelar la remuneración de María. Además, bajo el Acuerdo Ministerial MDT-2025-006, si persiste una discriminación salarial injustificada, la persona trabajadora tiene derecho a presentar un reclamo interno ante Talento Humano (en el sector público) o una denuncia ante el Inspector del Trabajo (en el sector privado)."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

function Unidad5() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Objetivo de aprendizaje </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            Identificar sesgos que pueden influir en decisiones laborales.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 5.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.1 ¿Qué son los sesgos inconscientes? </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">
                        <p>
                            Son percepciones, ideas o creencias automáticas que pueden influir en nuestras decisiones sin que seamos plenamente conscientes de ello.
                        </p>
                        <p>
                            Los sesgos pueden llevar a realizar juicios o tomar decisiones basadas en estereotipos en lugar de considerar las capacidades, méritos o competencias de las personas.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Por qué ocurren los sesgos inconscientes?</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            Nuestro cerebro recibe millones de estímulos cada segundo y utiliza "atajos mentales" basados en nuestra crianza, experiencias pasadas y entorno cultural para tomar decisiones rápidas. Aunque este mecanismo es natural en el ser humano, en el ámbito laboral resulta peligroso: hace que prefiramos inconscientemente a personas que se parecen a nosotros (<strong>sesgo de afinidad</strong>) o que juzguemos el potencial de un compañero por su apariencia o género en lugar de revisar sus resultados reales.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 5.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.2 Tipos de Sesgos </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Sesgo de género.</li>
                            <li>Sesgo de edad.</li>
                            <li>Sesgo por apariencia.</li>
                            <li>Sesgo cultural.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Cómo se manifiestan estos sesgos en la rutina laboral?</strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Sesgo de género:</strong> Asumir que una madre trabajadora no querrá viajar o asumir un proyecto exigente por cuidar a sus hijos, sin siquiera preguntarle su disponibilidad.
                            </li>
                            <li>
                                <strong>Sesgo de edad:</strong> Suponer que una persona mayor de 50 años no podrá adaptarse a nuevas herramientas digitales, o que un joven recién graduado carece de compromiso.
                            </li>
                            <li>
                                <strong>Sesgo por apariencia:</strong> Asociar la vestimenta, el acento regional o el aspecto físico con la capacidad intelectual o profesional de alguien.
                            </li>
                            <li>
                                <strong>Sesgo de confirmación:</strong> Buscar únicamente los errores de un colaborador del que ya tenemos una mala impresión inicial, ignorando sus aciertos.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 5.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.3 ¿Cómo reducir los sesgos en el trabajo? </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-2">
                        <p>Las organizaciones pueden reducir el impacto de los sesgos mediante:</p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Capacitación y sensibilización.</li>
                            <li>✅ Evaluaciones basadas en criterios objetivos.</li>
                            <li>✅ Procesos de selección transparentes.</li>
                            <li>✅ Decisiones fundamentadas en méritos y competencias.</li>
                            <li>✅ Igualdad de oportunidades para todas las personas.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 5.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.4 Efectos en las Decisiones Laborales </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-2">
                        <p>Pueden afectar:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Contrataciones.</li>
                            <li>Ascensos.</li>
                            <li>Evaluaciones.</li>
                            <li>Capacitaciones.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Impacto directo en el salario y crecimiento</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            Cuando los sesgos inconscientes no se controlan, afectan directamente la asignación de proyectos estratégicos (dando las tareas más visibles solo a un grupo) y las evaluaciones de desempeño anuales. Como resultado, quienes sufren sesgos reciben calificaciones más bajas, menos bonos y menores aumentos salariales, alimentando silenciosamente la brecha salarial dentro de la empresa.
                        </p>
                    </div>

                    <ImageBase src={img_2_5_1} />
                </div>
            </section>

            {/* ---------- 5.5 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.5 ¿Por qué es importante identificar los sesgos? </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Favorece decisiones más justas.</li>
                            <li>✅ Promueve la igualdad de oportunidades.</li>
                            <li>✅ Reduce la discriminación.</li>
                            <li>✅ Contribuye a ambientes laborales respetuosos e inclusivos.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Una empresa realiza un proceso de selección para cubrir una vacante de supervisión. Durante la revisión de candidatos, algunas personas consideran que un trabajador joven no tiene la experiencia suficiente únicamente por su edad, sin analizar sus competencias ni resultados.
                        </p>
                        <p>
                            <strong>Análisis:</strong> La decisión podría verse influenciada por un sesgo de edad. Las decisiones laborales deben basarse en criterios objetivos, méritos y competencias, evitando estereotipos o prejuicios.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Cómo identificar nuestros sesgos </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">
                        <VideoBase src="https://www.youtube.com/embed/GZDGloqnL0w?si=3U6FagwlocFSV8zd" title="Como Identificar Nuestros Sesgos" />
                        <SeleccionMultiple
                            pregunta="Identifique cuáles son sesgos."
                            opciones={[
                                'Los hombres son mejores líderes',
                                'Debe evaluarse el desempeño objetivamente',
                                'Las mujeres no pueden dirigir equipos',
                                'Las competencias deben guiar las decisiones',
                            ]}
                            correctas={['Los hombres son mejores líderes', 'Las mujeres no pueden dirigir equipos']}
                            explicacion="Estas afirmaciones son sesgos porque juzgan a las personas por su género y no por sus capacidades. En cambio, evaluar el desempeño objetivamente y guiarse por las competencias son buenas prácticas que ayudan a evitar los sesgos."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

function Unidad6() {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Objetivo de aprendizaje </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">
                        <p>
                            Identificar acciones que promueven la igualdad salarial en las organizaciones.
                        </p>
                        <p>
                            Asimismo, usted conocerá las herramientas prácticas que las empresas en el Ecuador aplican para auditar sus escalas remunerativas, garantizar ascensos justos y cumplir con las obligaciones de sensibilización y certificación establecidas por el Ministerio del Trabajo.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 6.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.1 Transparencia Salarial </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            Implica que existan criterios claros para la determinación de remuneraciones.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Beneficios</strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Permite identificar posibles diferencias injustificadas.</li>
                            <li>✅ Favorece la igualdad salarial.</li>
                            <li>✅ Promueve la confianza dentro de la organización.</li>
                            <li>✅ Contribuye a detectar inequidades salariales.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Cómo se aplica la transparencia salarial en la empresa?</strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            La transparencia no significa publicar el rol de pagos privado de cada compañero en una cartelera, sino garantizar que las reglas del juego sean claras y conocidas por todos. Esto implica contar con:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Bandas o escalas salariales definidas:</strong> Rangos mínimos y máximos de sueldo establecidos técnicamente para cada nivel de cargo.
                            </li>
                            <li>
                                <strong>Políticas claras de bonos e incentivos:</strong> Indicadores medibles (como cumplimiento de metas de ventas, calidad o productividad) para que cualquier colaborador sepa exactamente qué debe lograr para acceder a una bonificación o aumento, sin depender de favoritismos.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 6.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.2 Evaluación Objetiva </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-2">
                        <p>Las decisiones deben basarse en:</p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Competencias.</li>
                            <li>✅ Desempeño.</li>
                            <li>✅ Responsabilidades.</li>
                            <li>✅ Resultados.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Herramientas para evitar evaluaciones subjetivas</strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Para que las evaluaciones de desempeño sean verdaderamente justas y no afecten el salario de las personas trabajadoras, las organizaciones aplican buenas prácticas como:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Utilizar indicadores cuantificables y verificables previamente acordados entre el supervisor y el colaborador al inicio del período.</li>
                            <li>Aplicar evaluaciones 360° o comités de calibración, donde varias personas revisan los resultados para evitar que el prejuicio personal de un solo jefe perjudique a un trabajador.</li>
                            <li>Garantizar que los períodos de licencia por maternidad, paternidad o calamidad doméstica nunca penalicen la calificación anual de desempeño de una persona.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 6.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.3 Promoción Basada en Méritos </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-2">
                        <p>Los ascensos deben considerar:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Conocimientos.</li>
                            <li>Experiencia.</li>
                            <li>Resultados.</li>
                            <li>Competencias demostradas.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Buenas prácticas en procesos de ascenso interno</strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Convocatorias internas abiertas:</strong> Publicar todas las vacantes de ascenso para que cualquier trabajador que cumpla el perfil pueda postular en igualdad de condiciones, evitando designaciones "a dedo".
                            </li>
                            <li>
                                <strong>Planes de carrera y mentoría:</strong> Brindar oportunidades de formación en liderazgo tanto a mujeres como a hombres, asegurando que el acceso a cargos directivos sea equitativo y transparente.
                            </li>
                        </ul>
                    </div>

                    <ImageBase src={img_2_6_1} />
                </div>
            </section>

            {/* ---------- 6.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.4 Beneficios de la Igualdad Salarial </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>La igualdad salarial genera beneficios tanto para las personas trabajadoras como para las organizaciones.</p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Beneficios principales</strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Fortalece el clima laboral.</li>
                            <li>✅ Incrementa el compromiso de los trabajadores.</li>
                            <li>✅ Reduce conflictos laborales.</li>
                            <li>✅ Promueve la igualdad de oportunidades.</li>
                            <li>✅ Mejora la reputación organizacional.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Auditorías salariales y canales de reporte en el Ecuador</strong>
                    </h2>
                    <div className="pl-4">
                        <p>
                            Como parte de las buenas prácticas exigidas por la Ley Orgánica para la Igualdad Salarial entre Mujeres y Hombres y el Acuerdo Ministerial Nro. MDT-2025-006, las organizaciones deben realizar revisiones periódicas de sus remuneraciones y sensibilizar a todo su personal (incluyendo a los directivos). Asimismo, deben mantener canales internos confidenciales para que cualquier persona trabajadora que detecte una posible brecha salarial injustificada pueda solicitar una revisión técnica sin temor a represalias.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            La empresa realiza una revisión de salarios y detecta que dos personas que desempeñan funciones equivalentes reciben remuneraciones diferentes. Después de analizar las responsabilidades, competencias y resultados de ambos puestos, la organización ajusta la remuneración utilizando criterios objetivos.
                        </p>
                        <p>
                            <strong>Análisis:</strong> La transparencia salarial y la evaluación objetiva permiten identificar diferencias injustificadas y promover la igualdad salarial dentro de la organización.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- Cierre ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Cierre y compromiso del Módulo 2 </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            La igualdad salarial y de género no se logra únicamente con leyes; se construye todos los días mediante procesos transparentes, evaluaciones basadas en méritos y el compromiso de cada integrante de la organización por erradicar prejuicios. Al finalizar esta unidad, usted cuenta con las herramientas necesarias para reconocer y promover un entorno laboral justo, equitativo y libre de discriminación en el Ecuador.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>🎥 Video: Desafío de la Igualdad </strong>
                    </h2>
                    <div className="pl-4">
                        <VideoBase src="https://www.youtube.com/embed/I-rHhbnfNMc?si=C1yRlloJNuKjo1Oy" title="Igualdad en las empresas. Barreras y sesgos de género en el ámbito laboral" />
                    </div>
                </div>
            </section>
        </>
    )
}

const modulo2: Section = {
    id: "modulo2",
    title: "Modulo 2: Igualdad De Género E Igualdad Salarial",
    waitSeconds: 600,
    Overview,
    subsections: [
        {
            id: 'unidad1',
            title: 'Unidad 1: Conceptos Básicos De Género',
            waitSeconds: 900,
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
                        type: 'single',
                        prompt: 'El sexo está relacionado con:',
                        explanation: ' El sexo se refiere a las características biológicas y físicas con las que nace una persona, como aspectos anatómicos y fisiológicos que permiten su clasificación biológica. ',
                        options: ['Características biológicas', 'Roles sociales', 'Costumbres', 'Tradiciones'],
                        correct: 'Características biológicas'
                    },
                    {
                        type: 'single',
                        prompt: 'El género se relaciona con:',
                        explanation: ' El género se refiere a los roles, comportamientos y expectativas que la sociedad asigna a las personas. Estas ideas pueden variar entre culturas y cambiar con el tiempo. ',
                        options: ['Aspectos biológicos', 'Roles y expectativas sociales', 'ADN', 'Genética'],
                        correct: 'Roles y expectativas sociales'
                    },
                    {
                        type: 'single',
                        prompt: 'Un estereotipo de género es:',
                        explanation: 'Los estereotipos de género son creencias o ideas generalizadas sobre cómo deben comportarse mujeres y hombres. Estas ideas pueden limitar las oportunidades y favorecer situaciones de desigualdad.',
                        options: ['Una idea preconcebida', 'Una ley', 'Un reglamento', 'Un contrato'],
                        correct: 'Una idea preconcebida'
                    },
                    {
                        type: 'true-false',
                        prompt: 'Los roles de género pueden cambiar con el tiempo.',
                        explanation: ' Los roles de género no son permanentes. Evolucionan según los cambios sociales, culturales y económicos, permitiendo una participación más equitativa de todas las personas en diferentes ámbitos.',
                        correct: true
                    },
                    {
                        type: 'true-false',
                        prompt: 'Hombres y mujeres pueden desempeñar cualquier profesión.',
                        explanation: ' Las capacidades profesionales no dependen del género. Tanto mujeres como hombres pueden desarrollarse y destacar en cualquier ocupación cuando cuentan con las mismas oportunidades de acceso, formación y crecimiento.',
                        correct: true
                    }
                ]
            }
        },
        {
            id: 'unidad2',
            title: 'Unidad 2: Igualdad De Género',
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
                        type: 'single',
                        prompt: 'La igualdad de género implica:',
                        explanation: ' La igualdad de género significa que mujeres y hombres deben tener las mismas oportunidades, derechos y posibilidades de participación en el ámbito laboral, educativo y social, sin discriminación. ',
                        options: ['Igualdad de oportunidades', 'Privilegios para un grupo', 'Restricciones laborales', 'Diferencias salariales'],
                        correct: 'Igualdad de oportunidades'
                    },
                    {
                        type: 'single',
                        prompt: 'La equidad busca:',
                        explanation: ' La equidad reconoce que algunas personas o grupos pueden enfrentar barreras diferentes y promueve acciones que permitan alcanzar una igualdad real de oportunidades y trato. ',
                        options: ['Corregir desigualdades', 'Crear privilegios', 'Generar exclusión', 'Disminuir oportunidades'],
                        correct: 'Corregir desigualdades'
                    },
                    {
                        type: 'single',
                        prompt: 'La igualdad beneficia:',
                        explanation: ' La igualdad genera entornos laborales más inclusivos, fortalece el trabajo en equipo, mejora el clima organizacional y permite aprovechar mejor el talento de todas las personas. ',
                        options: ['Solo a mujeres', 'Solo a hombres', 'A toda la organización', 'A ninguna persona'],
                        correct: 'A toda la organización'
                    },
                    {
                        type: 'single',
                        prompt: 'El acceso a capacitación debe ser:',
                        explanation: ' Todas las personas trabajadoras deben tener acceso a oportunidades de capacitación y desarrollo profesional, sin distinción de género u otras características personales.',
                        options: ['Igualitario', 'Solo para hombres', 'Solo para mujeres', 'Limitado'],
                        correct: 'Igualitario'
                    },
                    {
                        type: 'true-false',
                        prompt: 'La diversidad favorece la innovación.',
                        explanation: ' La diversidad aporta diferentes experiencias, conocimientos y perspectivas, lo que facilita la generación de nuevas ideas, soluciones creativas y mejores resultados para la organización.',
                        correct: true
                    }
                ]
            }
        },
        {
            id: 'unidad3',
            title: 'Unidad 3: Brecha Salarial',
            waitSeconds: 900,
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
                        prompt: "La brecha salarial es:",
                        options: [
                            "Diferencia injustificada de remuneración",
                            "Una bonificación",
                            "Un beneficio",
                            "Ninguna",
                        ],
                        correct: "Diferencia injustificada de remuneración",
                        explanation:
                            "La brecha salarial ocurre cuando existen diferencias en la remuneración entre personas que realizan trabajos de igual valor sin una justificación objetiva relacionada con sus funciones, responsabilidades o competencias.",
                    },
                    {
                        type: "single",
                        prompt: "Las diferencias salariales deben sustentarse en:",
                        options: [
                            "Factores objetivos",
                            "Preferencias personales",
                            "Género",
                            "Edad",
                        ],
                        correct: "Factores objetivos",
                        explanation:
                            "Las diferencias en la remuneración solo son válidas cuando se basan en criterios objetivos, como la experiencia, las responsabilidades del cargo, la formación o el desempeño, y no en características personales como el género o la edad.",
                    },
                    {
                        type: "single",
                        prompt: "La discriminación salarial está relacionada con:",
                        options: [
                            "Desigualdad",
                            "Capacitación",
                            "Vacaciones",
                            "Seguridad industrial",
                        ],
                        correct: "Desigualdad",
                        explanation:
                            "La discriminación salarial ocurre cuando una persona recibe un salario diferente por motivos ajenos a su trabajo o desempeño, generando situaciones de desigualdad y afectando el principio de igualdad de oportunidades.",
                    },
                    {
                        type: "single",
                        prompt: "Los salarios deben basarse en:",
                        options: [
                            "Responsabilidades y competencias",
                            "Género",
                            "Edad",
                            "Estado civil",
                        ],
                        correct: "Responsabilidades y competencias",
                        explanation:
                            "La remuneración debe establecerse considerando aspectos del puesto de trabajo, como las funciones desempeñadas, el nivel de responsabilidad, las competencias requeridas y la experiencia necesaria para realizar las tareas.",
                    },
                    {
                        type: "single",
                        prompt: "El trabajo de igual valor debe recibir:",
                        options: [
                            "Igual remuneración",
                            "Remuneración distinta",
                            "Menos beneficios",
                            "Ninguna",
                        ],
                        correct: "Igual remuneración",
                        explanation:
                            "El principio de igualdad salarial establece que las personas que realizan trabajos de igual valor deben recibir una remuneración equitativa, sin importar su género u otras características personales.",
                    },
                ]
            }
        },
        {
            id: 'unidad4',
            title: 'Unidad 4: Igual Remuneración Por Trabajo De Igual Valor',
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
                        type: 'single',
                        prompt: 'Trabajo de igual valor significa:',
                        explanation: ' El trabajo de igual valor se refiere a puestos que, aunque puedan tener tareas diferentes, requieren niveles similares de responsabilidad, competencias, esfuerzo y condiciones de trabajo, por lo que deben recibir una remuneración equitativa. ',
                        options: ['Responsabilidades equivalentes', 'Mismo uniforme', 'Mismo género', 'Ninguna'],
                        correct: 'Responsabilidades equivalentes'
                    },
                    {
                        type: 'true-false',
                        prompt: 'El género debe influir en la remuneración.',
                        explanation: 'La remuneración debe determinarse por factores relacionados con el puesto y el desempeño laboral, nunca por el género de la persona trabajadora. La igualdad salarial es un principio fundamental para promover la equidad en el trabajo. ',
                        correct: false
                    },
                    {
                        type: 'single',
                        prompt: 'La evaluación de puestos debe ser:',
                        explanation: ' La evaluación de puestos debe basarse en criterios claros y medibles, como las funciones, responsabilidades, conocimientos y competencias requeridas, evitando decisiones subjetivas o discriminatorias.',
                        options: ['Objetiva', 'Subjetiva', 'Discrecional', 'Arbitraria'],
                        correct: 'Objetiva'
                    },
                    {
                        type: 'single',
                        prompt: 'El trabajo de igual valor promueve:',
                        explanation: ' Reconocer y remunerar adecuadamente los trabajos de igual valor contribuye a reducir desigualdades, fortalecer la justicia laboral y garantizar oportunidades equitativas para todas las personas.',
                        options: ['Equidad salarial', 'Discriminación', 'Exclusión', 'Desigualdad'],
                        correct: 'Equidad salarial'
                    },
                    {
                        type: 'true-false',
                        prompt: 'La formación y experiencia son factores de valoración.',
                        explanation: ' La formación académica, la experiencia laboral y las competencias adquiridas son elementos que pueden considerarse al valorar un puesto de trabajo y establecer una remuneración justa, siempre mediante criterios objetivos.',
                        correct: true
                    }
                ]
            }
        },
        {
            id: 'unidad5',
            title: 'Unidad 5: Sesgos ',
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
                        type: 'single',
                        prompt: 'Un sesgo inconsciente es:',
                        explanation: 'Los sesgos inconscientes son ideas o percepciones automáticas que influyen en nuestras decisiones sin que nos demos cuenta. Estos pueden afectar la manera en que evaluamos a otras personas en el entorno laboral.',
                        options: ['Una percepción automática', 'Una ley', 'Una política', 'Un reglamento'],
                        correct: 'Una percepción automática'
                    },
                    {
                        type: 'true-false',
                        prompt: 'Los sesgos pueden afectar promociones.', explanation: ' Los sesgos inconscientes pueden influir en decisiones relacionadas con promociones, asignación de responsabilidades o reconocimientos, generando desigualdades si no se identifican y gestionan adecuadamente.',
                        correct: true
                    },
                    {
                        type: 'true-false',
                        prompt: 'Los sesgos ayudan a tomar decisiones objetivas.',
                        explanation: 'Los sesgos pueden distorsionar la objetividad porque influyen en nuestras percepciones y juicios. Por ello, es importante utilizar criterios claros y basados en evidencias para tomar decisiones laborales justas.',
                        correct: false
                    },
                    {
                        type: 'true-false',
                        prompt: 'La capacitación ayuda a identificar sesgos.',
                        explanation: ' La capacitación permite reconocer y comprender los sesgos inconscientes, favoreciendo decisiones más equitativas y promoviendo ambientes laborales inclusivos y respetuosos.',
                        correct: true
                    },
                    {
                        type: 'single',
                        prompt: 'Las decisiones laborales deben basarse en:',
                        explanation: ' Las contrataciones, promociones y evaluaciones del desempeño deben fundamentarse en las capacidades, conocimientos, habilidades y resultados de las personas, evitando que influyan estereotipos o prejuicios.',
                        options: ['Méritos y competencias', 'Estereotipos', 'Preferencias', 'Apariencia'],
                        correct: 'Méritos y competencias'
                    }
                ]
            }
        },
        {
            id: 'unidad6',
            title: 'Unidad 6: Buenas Prácticas De Igualdad Salarial',
            waitSeconds: 1800,
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
                        type: 'single',
                        prompt: 'La transparencia salarial permite:',
                        explanation: ' La transparencia salarial facilita la identificación de posibles diferencias injustificadas en las remuneraciones y contribuye a promover prácticas laborales más justas y equitativas. ',
                        options: ['Detectar inequidades', 'Incrementar discriminación', 'Reducir oportunidades', 'Ninguna'],
                        correct: 'Detectar inequidades'
                    },
                    {
                        type: 'single',
                        prompt: 'Los ascensos deben basarse en:',
                        explanation: ' Los ascensos deben otorgarse considerando el desempeño, las competencias, la experiencia y los resultados obtenidos por cada persona, garantizando igualdad de oportunidades para todos.',
                        options: ['Méritos', 'Género', 'Edad', 'Preferencias'],
                        correct: 'Méritos'
                    },
                    {
                        type: 'true-false',
                        prompt: 'Las evaluaciones deben ser objetivas.',
                        explanation: 'Las evaluaciones objetivas utilizan criterios claros, medibles y relacionados con el desempeño laboral, evitando que influyan prejuicios, preferencias personales o estereotipos.',
                        correct: true
                    },
                    {
                        type: 'true-false',
                        prompt: 'La igualdad salarial favorece el clima laboral.',
                        explanation: 'Cuando las personas perciben que existe equidad en las remuneraciones, aumenta la confianza en la organización, se fortalece la motivación y se mejora el ambiente de trabajo.',
                        correct: true
                    },
                    {
                        type: 'true-false',
                        prompt: 'Las competencias deben considerarse en las decisiones laborales.',
                        explanation: 'Las decisiones relacionadas con contratación, promoción, capacitación o reconocimiento deben fundamentarse en las competencias, conocimientos, habilidades y desempeño de las personas trabajadoras.',
                        correct: true
                    }
                ]
            }
        },
        {
            id: 'unidad6-act',
            evaluation: {
                title: 'Caso Práctico Integrador',
                intro: <>
                    <h1 className="text-xl">
                        <strong>Igualdad de Género e Igualdad Salarial
                        </strong></h1>
                    <div className="ml-2 leading-[30px]">
                        <p>
                            La empresa Comercial Andina S.A. cuenta con dos trabajadores que desempeñan funciones administrativas similares. <br />

                            María recibe un salario mensual de $650 y Carlos recibe $800. Ambos poseen responsabilidades, experiencia, formación y jornadas equivalentes. <br />

                            El responsable de Recursos Humanos indica que Carlos recibe un salario superior porque considera que los hombres suelen ser el principal sustento económico de sus hogares. <br />
                        </p>
                    </div>
                </>
                ,
                questionsToAsk: 3,
                passingScore: 3,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: "single",
                        prompt: "¿Qué principio podría estar siendo vulnerado?",
                        options: [
                            "Igual remuneración por trabajo de igual valor",
                            "Seguridad industrial",
                            "Capacitación continua",
                            "Trabajo en equipo",
                        ],
                        correct: "Igual remuneración por trabajo de igual valor",
                        explanation:
                            "Las diferencias salariales deben sustentarse en criterios objetivos relacionados con el puesto y no en características personales como el género.",
                    },
                    {
                        type: "single",
                        prompt: "¿Es correcto utilizar el género como criterio para determinar salarios?",
                        options: [
                            "Sí",
                            "Solo cuando lo decide la empresa",
                            "No",
                            "Solo para puestos administrativos",
                        ],
                        correct: "No",
                        explanation:
                            "Las diferencias salariales deben sustentarse en criterios objetivos relacionados con el puesto y no en características personales como el género.",
                    },
                    {
                        type: "single",
                        prompt: "¿Qué debería hacer la empresa?",
                        options: [
                            "Mantener la diferencia salarial",
                            "Revisar objetivamente los puestos y la remuneración",
                            "Eliminar beneficios",
                            "Reducir ambos salarios",
                        ],
                        correct: "Revisar objetivamente los puestos y la remuneración",
                        explanation:
                            "Las diferencias salariales deben sustentarse en criterios objetivos relacionados con el puesto y no en características personales como el género.",
                    },
                ]
            }
        },
    ],
    evaluation: {
        title: "Examen Final Del Módulo 2",
        questionsToAsk: 10,
        passingScore: 7,
        shuffleOptions: true,
        showCorrectAnswers: false,
        recordEvaluation: false,
        questions: [
            {
                type: "single",
                prompt: "El género se refiere a:",
                options: [
                    "Aspectos biológicos",
                    "Roles y expectativas sociales",
                    "ADN",
                    "Genética",
                ],
                correct: "Roles y expectativas sociales",
                explanation:
                    "El género se refiere a los roles, comportamientos y expectativas que la sociedad asigna a mujeres y hombres. Estas ideas pueden variar según la cultura y el contexto social, y no están determinadas por características biológicas.",
            },
            {
                type: "single",
                prompt: "La igualdad de género implica:",
                options: ["Igualdad de oportunidades", "Privilegios", "Exclusión", "Discriminación"],
                correct: "Igualdad de oportunidades",
                explanation:
                    "La igualdad de género significa que todas las personas deben tener las mismas oportunidades, derechos y posibilidades de desarrollo, sin discriminación por ser hombre o mujer. Este principio favorece ambientes laborales más justos e inclusivos.",
            },
            {
                type: "single",
                prompt: "La brecha salarial corresponde a:",
                options: [
                    "Diferencia injustificada de remuneración",
                    "Vacaciones",
                    "Licencias",
                    "Beneficios sociales",
                ],
                correct: "Diferencia injustificada de remuneración",
                explanation:
                    "La brecha salarial ocurre cuando existen diferencias en la remuneración que no pueden justificarse por factores objetivos relacionados con el trabajo realizado, como las responsabilidades, competencias o experiencia de la persona trabajadora.",
            },
            {
                type: "single",
                prompt: "El trabajo de igual valor promueve:",
                options: ["Equidad salarial", "Discriminación", "Preferencias", "Desigualdad"],
                correct: "Equidad salarial",
                explanation:
                    "El principio de trabajo de igual valor busca garantizar que las personas que desempeñan funciones con niveles equivalentes de responsabilidad, esfuerzo, conocimientos y competencias reciban una remuneración justa y equitativa.",
            },
            {
                type: "single",
                prompt: "¿Cuál de las siguientes situaciones constituye una práctica discriminatoria?",
                options: [
                    "Evaluar según competencias.",
                    "Capacitar a todo el personal.",
                    "Pagar menos a una mujer por el mismo trabajo de igual valor.",
                    "Realizar evaluaciones objetivas.",
                ],
                correct: "Pagar menos a una mujer por el mismo trabajo de igual valor.",
                explanation:
                    "Pagar salarios diferentes a personas que realizan trabajos de igual valor, basándose únicamente en el género, constituye una práctica discriminatoria. Las remuneraciones deben definirse utilizando criterios objetivos relacionados con el puesto y el desempeño, garantizando la igualdad salarial y la no discriminación.",
            },
            {
                type: "single",
                prompt: "Los roles de género son:",
                options: [
                    "Características biológicas",
                    "Funciones y comportamientos asignados socialmente",
                    "Leyes laborales",
                    "Derechos laborales",
                ],
                correct: "Funciones y comportamientos asignados socialmente",
                explanation:
                    "Los roles de género son comportamientos, actividades y responsabilidades que la sociedad suele atribuir a hombres y mujeres. Estos roles pueden cambiar con el tiempo y no determinan las capacidades de las personas.",
            },
            {
                type: "single",
                prompt: "Un estereotipo de género es:",
                options: [
                    "Una evaluación objetiva",
                    "Una idea preconcebida sobre mujeres u hombres",
                    "Una norma legal",
                    "Un beneficio laboral",
                ],
                correct: "Una idea preconcebida sobre mujeres u hombres",
                explanation:
                    "Los estereotipos de género son creencias generalizadas que pueden limitar oportunidades y favorecer situaciones de desigualdad o discriminación.",
            },
            {
                type: "single",
                prompt: "La equidad busca:",
                options: [
                    "Mantener desigualdades",
                    "Corregir desigualdades y generar oportunidades reales",
                    "Favorecer a un solo grupo",
                    "Reducir oportunidades",
                ],
                correct: "Corregir desigualdades y generar oportunidades reales",
                explanation:
                    "La equidad reconoce que algunas personas enfrentan barreras diferentes y promueve acciones que permitan alcanzar una igualdad real de oportunidades.",
            },
            {
                type: "single",
                prompt: "¿Cuál es una causa de la brecha salarial?",
                options: [
                    "Vacaciones anuales",
                    "Estereotipos de género",
                    "Uniformes de trabajo",
                    "Horarios de descanso",
                ],
                correct: "Estereotipos de género",
                explanation:
                    "Los estereotipos y prejuicios pueden influir en decisiones laborales y salariales, generando diferencias injustificadas entre mujeres y hombres.",
            },
            {
                type: "single",
                prompt: "Las diferencias salariales deben justificarse mediante:",
                options: [
                    "Criterios objetivos relacionados con el puesto",
                    "Preferencias personales",
                    "Género",
                    "Estado civil",
                ],
                correct: "Criterios objetivos relacionados con el puesto",
                explanation:
                    "Las remuneraciones deben basarse en factores como responsabilidades, experiencia, competencias y complejidad del trabajo, nunca en características personales.",
            },
            {
                type: "single",
                prompt: "La evaluación de puestos debe ser:",
                options: ["Arbitraria", "Subjetiva", "Objetiva", "Discrecional"],
                correct: "Objetiva",
                explanation:
                    "La valoración de los puestos debe realizarse utilizando criterios claros, verificables y relacionados con las funciones y responsabilidades de cada cargo.",
            },
            {
                type: "single",
                prompt: "Los sesgos inconscientes pueden influir en:",
                options: [
                    "Contrataciones y ascensos",
                    "La edad de las personas",
                    "La legislación laboral",
                    "Los derechos constitucionales",
                ],
                correct: "Contrataciones y ascensos",
                explanation:
                    "Los sesgos pueden afectar decisiones laborales importantes como contrataciones, promociones, evaluaciones y oportunidades de capacitación.",
            },
            {
                type: "single",
                prompt: "¿Qué ayuda a reducir los sesgos en el trabajo?",
                options: [
                    "Estereotipos",
                    "Capacitación y criterios objetivos",
                    "Preferencias personales",
                    "Discriminación",
                ],
                correct: "Capacitación y criterios objetivos",
                explanation:
                    "La capacitación y el uso de criterios objetivos contribuyen a tomar decisiones más justas y a reducir la influencia de prejuicios y estereotipos.",
            },
            {
                type: "single",
                prompt: "La transparencia salarial permite:",
                options: [
                    "Aumentar desigualdades",
                    "Detectar posibles inequidades salariales",
                    "Reducir la productividad",
                    "Limitar oportunidades",
                ],
                correct: "Detectar posibles inequidades salariales",
                explanation:
                    "La transparencia salarial favorece la identificación de diferencias injustificadas y fortalece la confianza y equidad dentro de la organización.",
            },
            {
                type: "single",
                prompt: "Los ascensos deben otorgarse considerando:",
                options: [
                    "El género de la persona",
                    "La edad de la persona",
                    "Los méritos, competencias y resultados",
                    "Las preferencias personales",
                ],
                correct: "Los méritos, competencias y resultados",
                explanation:
                    "Las promociones deben basarse en el desempeño, conocimientos, experiencia y competencias demostradas, garantizando igualdad de oportunidades para todas las personas.",
            },
        ]

    }

}

export default modulo2