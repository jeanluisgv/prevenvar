import type { Section } from './types'
import PreguntaPractica from '../components/PreguntaPractica'
import SeleccionMultiple from '../components/SeleccionMultiple'
import img_1_1_1 from '../assets/img_1_1_1.jpg'
import img_1_2_1 from '../assets/img_1_2_1.jpg'
import img_1_3_1 from '../assets/img_1_3_1.jpg'
import img_1_3_2 from '../assets/img_1_3_2.jpg'
import img_1_3_3 from '../assets/img_1_3_3.jpg'
import img_1_3_4 from '../assets/img_1_3_4.jpg'
import img_1_4_1 from '../assets/img_1_4_1.jpg'
import img_1_4_2 from '../assets/img_1_4_2.jpg'
import img_1_4_3 from '../assets/img_1_4_3.jpg'
import img_1_4_4 from '../assets/img_1_4_4.jpg'
import img_1_4_5 from '../assets/img_1_4_5.jpg'
import img_1_5_1 from '../assets/img_1_5_1.jpg'
import img_1_5_2 from '../assets/img_1_5_2.jpg'
import img_1_6_1 from '../assets/img_1_6_1.jpg'

import ImageBase from '../components/ImageBase'
import VideoBase from '../components/VideoBase'
import { FaWineGlassEmpty } from 'react-icons/fa6'
function Overview() {
    return (
        <>
            <h3><strong>Duracion Total:</strong> 10 Horas</h3>
            <VideoBase src="https://www.youtube.com/embed/Pj2uzG2cUP4?si=8iTmAC_gNy_6K898" title="Intro to modulo 1" />
        </>

    )

}



function Unidad1() {
    return (
        <>
            {/* ---------- 1.1 ---------- */}
            <section className="mb-12">

                <VideoBase src="https://www.youtube.com/embed/l3BRNl92inw?si=gw1G_1eHMqxb3IPn" title="Derechos Laborales de Mujeres y Hombre" />
                <br />
                <h1 className="text-2xl mb-4">
                    <strong>1.1 INTRODUCCIÓN A LOS DERECHOS LABORALES </strong>
                </h1>
                <br />
                <ImageBase src={img_1_1_1} />

                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7 ">
                    <p className='mt-4'>
                        Todas las personas que trabajan tienen derechos que buscan proteger su bienestar, dignidad y seguridad. Estos derechos permiten que la relación entre empleadores y trabajadores se desarrolle de manera justa, respetuosa y en cumplimiento de la ley.
                    </p>
                    <p>
                        Conocer nuestros derechos laborales es fundamental para identificar situaciones adecuadas e inadecuadas dentro del lugar de trabajo y contribuir a la construcción de ambientes laborales seguros e inclusivos.
                    </p>
                    <br />
                </div>


            </section>

            {/* ---------- 1.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.2 ¿Qué es el trabajo? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">

                    <p>
                        El trabajo es una actividad que realizan las personas para producir bienes o prestar servicios a cambio de una remuneración. Además de ser una fuente de ingresos, permite el desarrollo personal, profesional y familiar.
                    </p>
                    <p>
                        La Constitución de la República del Ecuador reconoce al trabajo como un derecho y un deber social. Esto significa que toda persona tiene derecho a acceder a un empleo digno, libremente escogido o aceptado, en condiciones justas y seguras.
                    </p>
                    <p>
                        Un trabajo digno es aquel que respeta los derechos de las personas, garantiza un salario justo, ofrece seguridad social y promueve un ambiente de respeto e igualdad.
                    </p>
                </div>
            </section>

            {/* ---------- 1.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.3 ¿Qué son los derechos laborales? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Los derechos laborales son el conjunto de normas, principios y garantías que protegen a las personas trabajadoras durante la relación laboral.
                    </p>
                    <p>
                        Su objetivo es asegurar condiciones de trabajo dignas, seguras y justas, promoviendo el respeto a la dignidad humana, la igualdad de oportunidades, la seguridad social y una remuneración adecuada.
                    </p>
                    <p>
                        Los derechos laborales protegen a todas las personas trabajadoras, sin importar su género, edad, nacionalidad, religión, condición económica o cualquier otra condición personal.
                    </p>
                </div>
            </section>

            {/* ---------- 1.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.4 Principios fundamentales del derecho laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Los principios del derecho laboral son normas generales que sirven para proteger a las personas trabajadoras y garantizar relaciones laborales justas, equilibradas y respetuosas.
                    </p>
                    <p>
                        Estos principios orientan la aplicación de la Constitución, el Código del Trabajo y demás normas laborales.
                    </p>

                    <h2 className="text-xl pt-4">
                        <strong>Principales Principios Laborales en Ecuador </strong>
                    </h2>

                    <h3 className="text-lg pt-2">
                        <strong>1. Irrenunciabilidad de Derechos </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Los derechos laborales no pueden ser renunciados por la persona trabajadora.</p>
                        <p>
                            <strong>Ejemplo:</strong> Un trabajador no puede firmar un documento aceptando no recibir vacaciones o décimos. Aunque firme, dicho documento no tiene validez legal.
                        </p>
                        <p><strong>Base Legal</strong></p>
                        <blockquote className="pl-4 border-l-2 border-gray-300 space-y-1">
                            <p>
                                Constitución del Ecuador, Art. 326 numeral 2: <em>"Los derechos laborales son irrenunciables e intangibles."</em>
                            </p>
                            <p>
                                Código del Trabajo, Art. 4: <em>"Los derechos del trabajador son irrenunciables."</em>
                            </p>
                        </blockquote>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>2. Igualdad y No Discriminación </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Todas las personas tienen derecho a recibir el mismo trato y las mismas oportunidades, sin discriminación por sexo, edad, etnia, discapacidad, estado civil, embarazo, religión u otras condiciones.
                        </p>
                        <p>
                            <strong>Ejemplo:</strong> Una empresa no puede rechazar una candidatura únicamente porque la persona sea mujer o esté embarazada.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>3. Protección al Trabajador </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            La legislación laboral busca proteger a la parte más vulnerable de la relación laboral: la persona trabajadora.
                        </p>
                        <p>
                            <strong>Ejemplo:</strong> Cuando exista duda en la interpretación de una norma laboral, debe buscarse la opción más favorable para el trabajador.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>4. Trabajo Digno </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Toda persona tiene derecho a desarrollar sus actividades en condiciones seguras, saludables y respetuosas.
                        </p>
                        <p>
                            <strong>Ejemplo:</strong> La empresa debe proporcionar equipos de protección personal cuando el trabajo lo requiera.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>5. Buena Fe </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Empleadores y trabajadores deben actuar con honestidad, respeto y responsabilidad.
                        </p>
                        <p>
                            <strong>Ejemplo:</strong> El trabajador debe cumplir con sus funciones y el empleador debe cumplir con sus obligaciones legales.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 1.5 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.5 Organismos que protegen los derechos laborales </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Quiénes protegen los derechos laborales?</strong>
                    </p>
                    <p>
                        En Ecuador existen instituciones públicas encargadas de vigilar el cumplimiento de las leyes laborales y proteger a las personas trabajadoras.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>1. Ministerio del Trabajo </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Es la institución encargada de regular, controlar y supervisar el cumplimiento de la normativa laboral en el Ecuador.
                        </p>
                        <p><strong>Funciones</strong></p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Realizar inspecciones laborales.</li>
                            <li>✅ Recibir denuncias laborales.</li>
                            <li>✅ Supervisar el cumplimiento de la igualdad salarial.</li>
                            <li>✅ Verificar el cumplimiento de obligaciones patronales.</li>
                            <li>✅ Promover ambientes laborales libres de discriminación.</li>
                        </ul>
                        <p>
                            <strong>Ejemplo:</strong> Si una empresa no paga los beneficios laborales o discrimina a una persona trabajadora, esta puede presentar una denuncia ante el Ministerio del Trabajo.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>2. Instituto Ecuatoriano de Seguridad Social (IESS) </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Es la institución encargada de administrar la seguridad social de las personas trabajadoras.
                        </p>
                        <p><strong>Funciones</strong></p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Afiliación de trabajadores.</li>
                            <li>✅ Atención médica.</li>
                            <li>✅ Prestaciones económicas.</li>
                            <li>✅ Riesgos del trabajo.</li>
                            <li>✅ Jubilación.</li>
                        </ul>
                        <p>
                            <strong>Ejemplo:</strong> Si un trabajador descubre que no está afiliado al IESS, puede solicitar información o presentar el reclamo correspondiente.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>3. Defensoría del Pueblo </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Protege los derechos humanos y puede intervenir cuando exista vulneración de derechos fundamentales.
                        </p>
                        <p><strong>Funciones</strong></p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Defensa de derechos.</li>
                            <li>✅ Recepción de denuncias.</li>
                            <li>✅ Mediación y seguimiento de casos.</li>
                        </ul>
                        <p>
                            <strong>Ejemplo:</strong> Puede intervenir en casos relacionados con discriminación o vulneración de derechos fundamentales.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>4. Unidad Judicial de Trabajo </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Es la instancia encargada de resolver conflictos laborales cuando no pueden solucionarse por vías administrativas.
                        </p>
                        <p><strong>Funciones</strong></p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Resolver demandas laborales.</li>
                            <li>✅ Reconocer indemnizaciones.</li>
                            <li>✅ Determinar responsabilidades legales.</li>
                        </ul>
                        <p>
                            <strong>Ejemplo:</strong> Un trabajador despedido injustificadamente puede acudir a la Unidad Judicial de Trabajo.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>5. Comités de Seguridad y Salud en el Trabajo </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Son organismos internos presentes en muchas empresas para promover condiciones seguras de trabajo.
                        </p>
                        <p><strong>Funciones</strong></p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Identificar riesgos laborales.</li>
                            <li>✅ Proponer medidas preventivas.</li>
                            <li>✅ Promover la participación de trabajadores y empleadores.</li>
                        </ul>
                        <p>
                            <strong>Ejemplo:</strong> Pueden gestionar acciones para reducir accidentes o enfermedades laborales.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 1.6 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>1.6 Caso Práctico </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <PreguntaPractica
                        contexto="María descubre que la empresa donde trabaja no la ha afiliado al IESS durante ocho meses."
                        pregunta="¿A qué organismo puede acudir inicialmente?"
                        opciones={['Registro Civil', 'Ministerio del Trabajo', 'ANT', 'Municipio']}
                        correcta="Ministerio del Trabajo"
                        explicacion="El Ministerio del Trabajo es la entidad competente para supervisar el cumplimiento de las obligaciones laborales y recibir denuncias relacionadas con incumplimientos patronales."
                    />
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
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Al finalizar esta unidad, el participante comprenderá qué son los derechos humanos, cómo se relacionan con el trabajo y por qué la dignidad humana debe ser respetada en toda relación laboral.
                    </p>
                </div>
            </section>

            {/* ---------- 2.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.1 ¿Qué son los Derechos Humanos? </strong>
                </h1>

                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_2_1} />
                    <p>
                        Los derechos humanos son los derechos y libertades que tienen todas las personas por el solo hecho de ser seres humanos, sin importar su edad, sexo, nacionalidad, etnia, religión, condición económica o cualquier otra característica.
                    </p>
                    <p>
                        Estos derechos buscan garantizar que todas las personas vivan con dignidad, libertad, igualdad y seguridad.
                    </p>

                    <p><strong>Los derechos humanos son:</strong></p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ <strong>Universales</strong> (aplican a todas las personas).</li>
                        <li>✅ <strong>Inalienables</strong> (no pueden ser eliminados).</li>
                        <li>✅ <strong>Irrenunciables</strong> (no pueden ser renunciados).</li>
                        <li>✅ <strong>Indivisibles</strong> (todos son importantes).</li>
                    </ul>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Ana trabaja en una empresa donde es tratada con respeto, recibe un salario justo y puede expresar sus opiniones sin temor.
                        </p>
                        <p>
                            En este caso, se están respetando sus derechos humanos y laborales.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Reflexión </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Los derechos humanos no terminan cuando una persona ingresa a trabajar. Al contrario, deben ser protegidos durante toda la relación laboral.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 2.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.2 Derechos Fundamentales en el Trabajo </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué son los derechos fundamentales en el trabajo?</strong>
                    </p>
                    <p>
                        Son los derechos básicos que deben respetarse dentro de cualquier organización para garantizar condiciones laborales dignas y justas.
                    </p>
                    <p>
                        La Organización Internacional del Trabajo (OIT) reconoce que todas las personas trabajadoras tienen derecho a desarrollar sus actividades en un ambiente de respeto y protección.
                    </p>

                    <h2 className="text-xl pt-4">
                        <strong>Principales derechos fundamentales en el trabajo </strong>
                    </h2>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a la igualdad </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Todas las personas deben recibir igualdad de oportunidades y trato, sin discriminación.</p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a la no discriminación </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Ninguna persona puede ser excluida o perjudicada por razones de:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Sexo.</li>
                            <li>Género.</li>
                            <li>Edad.</li>
                            <li>Etnia.</li>
                            <li>Discapacidad.</li>
                            <li>Nacionalidad.</li>
                            <li>Religión.</li>
                            <li>Estado civil.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a condiciones seguras y saludables </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Toda persona tiene derecho a trabajar en ambientes que protejan su salud y seguridad.</p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a una remuneración justa </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>El trabajo realizado debe ser remunerado conforme a la ley.</p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a la seguridad social </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Toda persona trabajadora tiene derecho a ser afiliada al IESS.</p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho al respeto y la dignidad </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Nadie debe sufrir acoso, violencia o maltrato dentro del trabajo.</p>
                    </div>

                    <h2 className="text-xl pt-4">
                        <strong>Caso práctico </strong>
                    </h2>
                    <div className="pl-4">
                        <PreguntaPractica
                            contexto={<>La empresa "Ejemplo S.A." publica una vacante indicando: <br /><em>"Se busca hombre menor de 30 años para puesto administrativo."</em></>}
                            pregunta="¿Se está respetando el derecho a la igualdad y no discriminación?"
                            opciones={['Sí', 'No']}
                            correcta="No"
                            explicacion="La oferta limita la participación de personas por razones de género y edad, lo que constituye una práctica discriminatoria."
                        />
                    </div>
                </div>
            </section>

            {/* ---------- 2.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.3 Principio de Dignidad Humana </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué es la dignidad humana?</strong>
                    </p>
                    <p>
                        La dignidad humana es el valor inherente que posee toda persona por el simple hecho de ser humana.
                    </p>
                    <p>Significa que todas las personas merecen:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Respeto.</li>
                        <li>Trato justo.</li>
                        <li>Reconocimiento.</li>
                        <li>Protección de sus derechos.</li>
                        <li>Igualdad de oportunidades.</li>
                    </ul>
                    <p>
                        La dignidad es uno de los principios más importantes de los derechos humanos y del derecho laboral.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Base legal en Ecuador </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p><strong>Constitución de la República del Ecuador, Artículo 33</strong></p>
                        <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                            "El Estado garantizará a las personas trabajadoras el pleno respeto a su dignidad, una vida decorosa, remuneraciones y retribuciones justas..."
                        </blockquote>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>¿Cómo se respeta la dignidad humana en el trabajo? </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Se respeta cuando:</p>
                        <ul className="pl-4 space-y-1">
                            <li>✅ Se trata a las personas con respeto.</li>
                            <li>✅ No existe discriminación.</li>
                            <li>✅ No existe acoso laboral.</li>
                            <li>✅ Se protege la salud y seguridad.</li>
                            <li>✅ Se reconoce el trabajo realizado.</li>
                            <li>✅ Se respetan los derechos laborales.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>María y Carlos desempeñan funciones similares dentro de la empresa. Sin embargo, algunos compañeros se burlan constantemente de María y la excluyen de ciertas actividades del equipo. A pesar de haber informado la situación, las conductas continúan. </p>
                        <p>
                            <strong>Análisis:</strong> La situación constituye una falta de respeto a la dignidad humana y puede generar un ambiente laboral hostil. Toda persona trabajadora debe recibir un trato respetuoso, libre de discriminación, humillaciones o cualquier conducta que afecte su bienestar y desarrollo profesional.

                            Esta segunda versión suele verse más profesional en una guía corporativa porque muestra una situación concreta y permite identificar claramente la vulneración del derecho
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>🎥 Video: Discriminación por la edad </strong>
                    </h3>
                    <div className="pl-4">
                        <VideoBase src="https://www.youtube.com/embed/H2oOuE1_8OE?si=8Hv3tkekhR26Ipjk" title="Discriminación por la edad" />
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
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Al finalizar esta unidad, el participante reconocerá las principales normas que protegen los derechos laborales en el Ecuador, identificando el papel de la Constitución, el Código del Trabajo y los Convenios de la Organización Internacional del Trabajo (OIT).
                    </p>
                </div>

                <ImageBase src={img_1_3_1} />
            </section>

            <section className="mb-12">
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Los derechos laborales no existen únicamente porque una empresa los reconoce. Estos derechos están protegidos por leyes nacionales e internacionales que garantizan condiciones de trabajo dignas, seguras y justas para todas las personas.
                    </p>
                    <p>En Ecuador, el marco legal laboral se sustenta principalmente en:</p>
                    <ul className="pl-4 space-y-1">
                        <li>🏛️ Constitución de la República del Ecuador.</li>
                        <li>📖 Código del Trabajo.</li>
                        <li>🌎 Convenios de la Organización Internacional del Trabajo (OIT).</li>
                    </ul>
                </div>
            </section>

            {/* ---------- 3.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.1 Constitución de la República del Ecuador </strong>
                </h1>
                <ImageBase src={img_1_3_2} />
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué es la Constitución?</strong>
                    </p>
                    <p>
                        La Constitución es la norma jurídica más importante del país. Todas las leyes, reglamentos y normas deben respetar lo que establece la Constitución.
                    </p>
                    <p>
                        La Constitución reconoce al trabajo como un derecho fundamental de todas las personas.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Base Legal </strong>
                    </h3>
                    <div className="pl-4 space-y-3">
                        <div>
                            <p><strong>Artículo 33</strong></p>
                            <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                                "El trabajo es un derecho y un deber social, y un derecho económico, fuente de realización personal y base de la economía."
                            </blockquote>
                        </div>
                        <div>
                            <p><strong>Artículo 326 numeral 2</strong></p>
                            <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                                "Los derechos laborales son irrenunciables e intangibles."
                            </blockquote>


                        </div>

                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>¿Qué protege la Constitución? </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Derecho al trabajo.</li>
                            <li>✅ Igualdad de oportunidades.</li>
                            <li>✅ No discriminación.</li>
                            <li>✅ Remuneración justa.</li>
                            <li>✅ Seguridad social.</li>
                            <li>✅ Protección de la maternidad.</li>
                            <li>✅ Seguridad y salud en el trabajo.</li>
                            <li>✅ Dignidad humana.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo Práctico </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Una empresa decide pagar menos salario a una trabajadora únicamente por ser mujer.</p>
                        <p><strong>Análisis:</strong> Esta práctica vulnera:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>El derecho a la igualdad.</li>
                            <li>El derecho a la no discriminación.</li>
                            <li>El derecho a una remuneración justa.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 3.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.2 Código del Trabajo </strong>
                </h1>
                <ImageBase src={img_1_3_3} />
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué es el Código del Trabajo?</strong>
                    </p>
                    <p>
                        Es la principal ley que regula las relaciones laborales entre trabajadores y empleadores en Ecuador.
                    </p>
                    <p>
                        Establece las obligaciones, derechos y responsabilidades que deben cumplirse durante toda la relación laboral.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Artículos importantes </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p><strong>Artículo 4</strong></p>
                        <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                            "Los derechos del trabajador son irrenunciables."
                        </blockquote>
                        <p className="text-red-800">Esto significa que ninguna persona trabajadora puede renunciar voluntariamente a los derechos reconocidos por la ley. </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Temas que regula el Código del Trabajo </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Contratación:</strong> Normas para la celebración de contratos.</li>
                            <li><strong>Jornadas laborales:</strong> Control de horarios y horas extraordinarias.</li>
                            <li><strong>Salarios:</strong> Pago de remuneraciones y beneficios.</li>
                            <li><strong>Vacaciones:</strong> Descanso obligatorio anual.</li>
                            <li><strong>Licencias y Permisos:</strong> Maternidad, paternidad y permisos especiales.</li>
                            <li><strong>Seguridad y Salud:</strong> Medidas para prevenir riesgos laborales y proteger la integridad de las personas trabajadoras. </li>
                            <li><strong>Terminación de la relacion laboral:</strong> Procedimientos y derechos aplicables cuando finaliza el vínculo laboral. </li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo Práctico </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Pedro trabaja de lunes a viernes de 08h00 a 17h00. Debido a una alta carga de trabajo, su supervisor le solicita quedarse dos horas adicionales durante varias semanas. Al revisar su rol de pagos, Pedro observa que las horas extras no fueron registradas ni remuneradas. </p>
                        <p>
                            <strong>Análisis:</strong> La situación representa un incumplimiento de las normas laborales relacionadas con la jornada de trabajo y la remuneración. Las horas extraordinarias deben ser registradas y compensadas conforme a lo establecido en el Código del Trabajo.
                        </p>
                        <PreguntaPractica
                            pregunta="¿Qué derecho laboral podría estar siendo afectado en este caso?"
                            opciones={[
                                'Derecho a vacaciones.',
                                'Derecho al pago de horas extraordinarias.',
                                'Derecho a licencias por maternidad.',
                                'Derecho a la afiliación sindical.',
                            ]}
                            correcta="Derecho al pago de horas extraordinarias."
                            explicacion="Cuando una persona trabaja más allá de su jornada laboral, la empresa debe reconocer y pagar esas horas extraordinarias según lo establece el Código del Trabajo."
                        />
                    </div>
                </div>
            </section>

            {/* ---------- 3.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.3 Convenios de la Organización Internacional del Trabajo (OIT) </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_3_4} />
                    <p>
                        <strong>¿Qué es la OIT?</strong>
                    </p>
                    <p>
                        La Organización Internacional del Trabajo (OIT) es una agencia especializada de las Naciones Unidas que promueve condiciones laborales justas y dignas en todo el mundo.
                    </p>
                    <p>
                        Ecuador ha ratificado varios convenios internacionales que forman parte de la protección laboral.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Convenio 100: Igualdad de Remuneración </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Promueve la igualdad salarial entre hombres y mujeres por un trabajo de igual valor.</p>
                        <p>
                            <strong>Ejemplo:</strong>Ana y Carlos ocupan puestos diferentes dentro de la empresa, pero ambos requieren la misma formación, nivel de responsabilidad, experiencia y esfuerzo. Durante una revisión interna se detecta que Carlos recibe una remuneración superior sin una justificación objetiva.
                        </p>
                        <p>
                            <strong>Análisis:</strong>La empresa debe evaluar los puestos con criterios objetivos para garantizar que trabajos de igual valor reciban una remuneración equivalente.

                            funciones equivalentes deben recibir la misma remuneración.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Convenio 111: Discriminación en el Empleo y la Ocupación </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Prohíbe la discriminación por:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Sexo.</li>
                            <li>Edad.</li>
                            <li>Etnia.</li>
                            <li>Religión.</li>
                            <li>Condición social.</li>
                            <li>Discapacidad.</li>
                        </ul>
                        <p>
                            <strong>Ejemplo:</strong>Luis participa en un proceso de selección y cumple todos los requisitos del cargo. Sin embargo, es descartado únicamente por su edad y no por sus competencias o experiencia laboral.
                        </p>
                        <p>
                            <strong>Análisis:</strong>La decisión constituye una práctica discriminatoria, ya que el acceso al empleo debe basarse en criterios objetivos relacionados con las capacidades y requisitos del puesto.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Convenio 190: Violencia y Acoso </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Busca prevenir y eliminar:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Acoso laboral.</li>
                            <li>Violencia verbal.</li>
                            <li>Violencia psicológica.</li>
                            <li>Violencia sexual.</li>
                        </ul>
                        <p>
                            <strong>Ejemplo:</strong>Durante varias semanas, una trabajadora recibe comentarios ofensivos y burlas constantes por parte de un supervisor delante de sus compañeros de trabajo.
                        </p>
                        <p>
                            <strong>Análisis:</strong>Esta situación puede constituir violencia o acoso en el trabajo, afectando la dignidad, el bienestar y el derecho a desenvolverse en un ambiente laboral seguro y respetuoso.
                        </p>
                    </div>


                    <h3 className="text-lg pt-2">
                        <strong>¿Por qué son importantes los Convenios OIT? </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Promueven la igualdad.</li>
                            <li>✅ Protegen la dignidad humana.</li>
                            <li>✅ Previenen la discriminación.</li>
                            <li>✅ Fortalecen los derechos laborales.</li>
                            <li>✅ Mejoran las condiciones de trabajo.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>🎥 Video: Conociendo nuestros derechos laborales </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Derechos laborales en Ecuador</p>
                        <VideoBase src="https://www.youtube.com/embed/VYzthN68gdM?si=3TIBuyCCS6ghRg9S" title="Derechos laborales en Ecuador" />
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
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Al finalizar esta unidad, el participante identificará los elementos que conforman el trabajo digno, reconociendo sus derechos relacionados con remuneración, jornada laboral, vacaciones y seguridad social.
                    </p>
                </div>
            </section>

            {/* ---------- 4.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.1 Trabajo Digno </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué es el trabajo digno?</strong>
                    </p>
                    <p>
                        El trabajo digno es aquel que permite a las personas desarrollar sus actividades en condiciones justas, seguras, saludables y respetuosas.
                    </p>
                    <p>
                        La Constitución del Ecuador reconoce que toda persona tiene derecho a un trabajo que respete su dignidad y garantice una vida adecuada.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Base Legal </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p><strong>Constitución del Ecuador, Artículo 33</strong></p>
                        <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                            "El trabajo es un derecho y un deber social... El Estado garantizará a las personas trabajadoras el pleno respeto a su dignidad."
                        </blockquote>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Características del trabajo digno </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Remuneración justa.</li>
                            <li>✅ Ambiente laboral seguro.</li>
                            <li>✅ Igualdad de oportunidades.</li>
                            <li>✅ Respeto a la dignidad humana.</li>
                            <li>✅ Acceso a la seguridad social.</li>
                            <li>✅ Protección contra la discriminación.</li>
                        </ul>

                    </div>
                    <ImageBase src={img_1_4_1} />

                </div>
            </section>

            {/* ---------- 4.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.2 Remuneración Justa </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué es una remuneración justa?</strong>
                    </p>
                    <p>
                        Es el pago que recibe una persona por el trabajo realizado conforme a la ley y de manera oportuna.
                    </p>
                    <p>
                        La remuneración debe reconocer el esfuerzo, responsabilidad y trabajo desempeñado.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>¿Qué incluye? </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Sueldo.</li>
                            <li>✅ Horas extras.</li>
                            <li>✅ Décimo tercer sueldo.</li>
                            <li>✅ Décimo cuarto sueldo.</li>
                            <li>✅ Fondos de reserva (cuando corresponda).</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo</strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Carla trabaja en una empresa de servicios y durante una semana realiza varias horas extraordinarias para cumplir una entrega urgente. Al finalizar el mes, la empresa registra y paga correctamente las horas adicionales trabajadas.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            La remuneración justa implica reconocer y pagar oportunamente todos los conceptos que corresponden al trabajo realizado.
                        </p>

                    </div>
                    <ImageBase src={img_1_4_2} />
                </div>
            </section>

            {/* ---------- 4.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.3 Jornada Laboral </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué es la jornada laboral?</strong>
                    </p>
                    <p>
                        Es el tiempo durante el cual una persona presta sus servicios al empleador.
                    </p>
                    <p>
                        La legislación ecuatoriana establece límites para proteger la salud y bienestar de los trabajadores.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Importancia </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Evita exceso de trabajo.</li>
                            <li>✅ Protege la salud física y mental.</li>
                            <li>✅ Permite equilibrio entre trabajo y vida personal.</li>
                            <li>✅ Reduce riesgos laborales.</li>
                        </ul>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Pedro debe permanecer dos horas adicionales después de su jornada habitual para finalizar una actividad urgente. La empresa registra ese tiempo y aplica el pago correspondiente.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            El tiempo trabajado fuera de la jornada ordinaria debe ser reconocido conforme a la normativa laboral vigente.
                        </p>
                    </div>
                    <ImageBase src={img_1_4_3} />

                </div>
            </section>

            {/* ---------- 4.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.4 Vacaciones </strong>
                </h1>
                <ImageBase src={img_1_4_4} />
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Por qué son importantes?</strong>
                    </p>
                    <p>
                        Las vacaciones permiten que los trabajadores descansen, recuperen energías y mejoren su bienestar físico y emocional.
                    </p>
                    <p>
                        El descanso es un derecho laboral reconocido por la legislación ecuatoriana.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Beneficios de las vacaciones </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Disminuyen el estrés.</li>
                            <li>✅ Mejoran la salud mental.</li>
                            <li>✅ Favorecen la productividad.</li>
                            <li>✅ Permiten compartir tiempo con la familia.</li>
                        </ul>
                    </div>
                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Ana ha trabajado durante un año completo en la empresa y solicita sus vacaciones para descansar y compartir tiempo con su familia.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            Las vacaciones son un derecho laboral que permite la recuperación física y mental de las personas trabajadoras.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 4.5 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.5 Seguridad Social </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué es la seguridad social?</strong>
                    </p>
                    <p>
                        La seguridad social protege a los trabajadores frente a situaciones que pueden afectar su bienestar económico y de salud.
                    </p>
                    <p>
                        En Ecuador, esta protección es administrada por el Instituto Ecuatoriano de Seguridad Social (IESS).
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Beneficios principales </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Atención médica.</li>
                            <li>✅ Subsidios por enfermedad.</li>
                            <li>✅ Riesgos del trabajo.</li>
                            <li>✅ Jubilación.</li>
                            <li>✅ Prestaciones económicas.</li>
                            <li>✅ Protección para la familia.</li>
                        </ul>
                    </div>
                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Jorge sufre una enfermedad que le impide trabajar temporalmente. Gracias a su afiliación al IESS, puede acceder a atención médica y prestaciones establecidas por la ley.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            La seguridad social brinda protección ante situaciones que pueden afectar la salud o los ingresos de los trabajadores.
                        </p>
                    </div>
                    <ImageBase src={img_1_4_5} />
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: ¿Qué significa trabajo digno? </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        <a
                            href="https://www.youtube.com/watch?v=yoQ9eaOCpu8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-700"
                        >
                            Trabajo Digno y Decente
                        </a>
                    </p>

                    <VideoBase src="https://www.youtube.com/embed/TMKIB3--MsU?si=g9Q33hUQz40qgtW6" title='Trabajo Digno y Decente' />
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
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Reconocer la importancia de la igualdad de oportunidades en el acceso, permanencia y desarrollo dentro del trabajo.
                    </p>
                </div>
            </section>

            {/* ---------- 5.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.1 Acceso al Empleo </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_5_1} />
                    <p>
                        <strong>¿Qué significa igualdad en el acceso al empleo?</strong>
                    </p>
                    <p>
                        Todas las personas deben tener las mismas oportunidades para participar en procesos de selección y contratación.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Las decisiones deben basarse en: </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Competencias.</li>
                            <li>✅ Formación.</li>
                            <li>✅ Experiencia.</li>
                            <li>✅ Habilidades.</li>
                        </ul>
                    </div>
                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Laura y Miguel participan en un proceso de selección. Ambos cumplen los requisitos del cargo y son evaluados considerando únicamente su formación, experiencia y habilidades para desempeñar las funciones del puesto.
                        </p>
                        <p> <strong>Análisis: </strong>
                            El acceso al empleo debe basarse en criterios objetivos relacionados con las competencias de cada persona y no en características personales que no estén relacionadas con el trabajo.
                        </p>
                    </div>

                </div>
            </section>

            {/* ---------- 5.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.2 Selección sin Discriminación </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_5_2} />
                    <p>
                        <strong>¿Qué significa?</strong>
                    </p>
                    <p>
                        Las empresas no deben excluir personas por su sexo, edad, embarazo, discapacidad, religión o nacionalidad.
                    </p>
                    <p>
                        La selección debe realizarse considerando únicamente criterios objetivos relacionados con el puesto.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Ana postula a una vacante y cumple con todos los requisitos. Durante la entrevista se le informa que no podrá ser considerada para el cargo porque está embarazada.
                        </p>
                        <p> <strong>Análisis: </strong>
                            Excluir a una persona de un proceso de selección por embarazo constituye una práctica discriminatoria y vulnera el principio de igualdad de oportunidades.
                        </p>
                    </div>

                </div>
            </section>

            {/* ---------- 5.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.3 Igualdad de Trato </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué significa igualdad de trato?</strong>
                    </p>
                    <p>
                        Todas las personas trabajadoras deben recibir el mismo respeto, oportunidades y acceso a beneficios laborales.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplos </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Igual acceso a capacitación.</li>
                            <li>✅ Igual acceso a ascensos.</li>
                            <li>✅ Igualdad salarial para trabajos de igual valor.</li>
                            <li>✅ Igual trato y respeto.</li>
                        </ul>
                    </div>
                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            La empresa ofrece programas de capacitación y oportunidades de ascenso a todas las personas trabajadoras bajo los mismos criterios de evaluación y desempeño.
                        </p>
                        <p> <strong>Análisis: </strong>
                            La igualdad de trato garantiza que todas las personas tengan acceso a las mismas oportunidades de desarrollo profesional dentro de la organización.
                        </p>
                    </div>
                    <h3 className="text-lg pt-2">
                        <strong>¿Por qué es importante la igualdad de oportunidades? </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Favorece ambientes laborales inclusivos.</li>
                            <li>✅ Permite aprovechar el talento de todas las personas. </li>
                            <li>✅ Reduce la discriminación.</li>
                            <li>✅ Fortalece el respeto y la convivencia laboral.</li>
                            <li>✅ Contribuye al crecimiento de la organización. </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Todos tenemos las mismas oportunidades </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        <a
                            href="https://www.youtube.com/watch?v=OglL6qHvZYs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-700"
                        >
                            Módulo 1: Derechos Laborales de Mujeres y Hombres
                        </a>
                    </p>

                    <VideoBase src="https://www.youtube.com/embed/a8hEhhNLe3M?si=0W4dGef1cM5gezyO" title="Módulo 1: Derechos Laborales de Mujeres y Hombres" />
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
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Reconocer los derechos relacionados con la maternidad y paternidad y promover la corresponsabilidad familiar.
                    </p>
                </div>
            </section>

            {/* ---------- 6.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.1 Licencias </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué son?</strong>
                    </p>
                    <p>
                        Son períodos autorizados por ley para que madres y padres puedan atender necesidades familiares relacionadas con el nacimiento o cuidado de sus hijos.
                    </p>

                    <ImageBase src={img_1_6_1} />
                </div>
            </section>

            {/* ---------- 6.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.2 Lactancia </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        <strong>Protección de la Lactancia</strong>
                    </p>
                    <p>
                        La legislación ecuatoriana protege a las madres durante el período de lactancia, permitiendo condiciones adecuadas para el cuidado de sus hijos.
                    </p>


                    <h3 className="text-lg pt-2">
                        <strong>Beneficios </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Favorece la salud del bebé.</li>
                            <li>✅ Protege la salud materna.</li>
                            <li>✅ Fortalece el vínculo familiar.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 6.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.3 Protección a la Maternidad </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué protege la ley?</strong>
                    </p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ Embarazo.</li>
                        <li>✅ Licencias.</li>
                        <li>✅ Estabilidad laboral.</li>
                        <li>✅ Igualdad de oportunidades.</li>
                        <li>✅ No discriminación.</li>
                    </ul>
                </div>
            </section>

            {/* ---------- 6.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.4 Responsabilidades Compartidas </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <img></img>
                    <p>
                        <strong>¿Qué significa corresponsabilidad?</strong>
                    </p>
                    <p>
                        El cuidado de los hijos y las responsabilidades familiares corresponden tanto a madres como a padres.
                    </p>

                    <h3 className="text-lg pt-2">
                        <strong>Beneficios </strong>
                    </h3>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ Mejor equilibrio familiar.</li>
                            <li>✅ Mayor bienestar.</li>
                            <li>✅ Igualdad de oportunidades.</li>
                            <li>✅ Desarrollo saludable de los hijos.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Derechos de Maternidad y Paternidad </strong>
                </h1>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">
                    <p>
                        Permiso de paternidad y maternidad en Ecuador 2026: cuántos días son
                    </p>

                    <VideoBase src="https://www.youtube.com/embed/ySScwrTRzkE?si=Z0jkgUPVGMCfe08A" title="Permiso de paternidad y maternidad en Ecuador 2026: cuántos días son" />
                </div>
            </section>
        </>
    )
}

const modulo1: Section = {
    id: "modulo1",
    title: "Modulo 1: DERECHOS LABORALES DE MUJERES Y HOMBRES",
    waitSeconds: 900,
    Overview,
    subsections: [
        { id: 'unidad1', title: 'Unidad 1: INTRODUCCIÓN A LOS DERECHOS LABORALES ', Content: Unidad1 },
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
                        prompt: '¿Qué es el trabajo?',
                        explanation: ' El trabajo es una actividad humana que contribuye a la producción de bienes o servicios y que, normalmente, se realiza a cambio de una remuneración. Además, permite el desarrollo personal, familiar y social.',
                        options: ['Una actividad realizada únicamente por obligación', 'Una actividad que permite producir bienes o prestar servicios a cambio de una remuneración', 'Un beneficio empresarial', 'Una actividad voluntaria sin compensación'],
                        correct: 'Una actividad que permite producir bienes o prestar servicios a cambio de una remuneración'
                    },
                    {
                        type: 'single',
                        prompt: '¿Qué son los derechos laborales?',
                        explanation: 'Los derechos laborales son un conjunto de normas y garantías que buscan proteger la dignidad, la seguridad y el bienestar de las personas trabajadoras, asegurando condiciones justas de empleo. ',
                        options: ['Beneficios opcionales', 'Normas que protegen a las personas trabajadoras', 'Acuerdos informales', 'Sanciones disciplinarias'],
                        correct: 'Normas que protegen a las personas trabajadoras'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál es un principio fundamental del derecho laboral?',
                        explanation: 'La irrenunciabilidad de derechos significa que las personas trabajadoras no pueden renunciar voluntariamente a los derechos mínimos que les reconoce la ley, aunque estuvieran de acuerdo en hacerlo.',
                        options: ['Competencia empresarial', 'Irrenunciabilidad de derechos', 'Productividad', 'Marketing'],
                        correct: 'Irrenunciabilidad de derechos'
                    },
                    {
                        type: 'single',
                        prompt: '¿Qué institución supervisa el cumplimiento de la normativa laboral en Ecuador?',
                        explanation: ' El Ministerio del Trabajo es la entidad encargada de vigilar el cumplimiento de las leyes laborales, promover relaciones laborales justas y atender denuncias relacionadas con el trabajo. ',
                        options: ['Registro Civil', 'Ministerio del Trabajo', 'ANT', 'Municipio'],
                        correct: 'Ministerio del Trabajo'
                    },
                    {
                        type: 'single',
                        prompt: '¿Qué institución administra la seguridad social en Ecuador?',
                        explanation: ' El Instituto Ecuatoriano de Seguridad Social (IESS) administra el sistema de seguridad social y brinda prestaciones como atención médica, pensiones, subsidios y seguros para las personas afiliadas.',
                        options: ['Ministerio de Salud', 'Defensoría del Pueblo', 'IESS', 'Fiscalía'],
                        correct: 'IESS'
                    }
                ]
            }
        },
        { id: 'unidad2', title: 'Unidad 2: Derechos Humanos y Derechos Laborales', Content: Unidad2 },
        {
            id: 'unidad2-eval',
            evaluation: {
                title: 'Evaluacion Unidad 2',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: 'single',
                        prompt: 'Los derechos humanos corresponden a:',
                        options: ['Beneficios otorgados por la empresa.', 'Derechos que poseen todas las personas por el hecho de ser humanas.', 'Reglamentos internos.', 'Beneficios económicos.'],
                        correct: 'Derechos que poseen todas las personas por el hecho de ser humanas.',
                        explanation: 'Los derechos humanos pertenecen a todas las personas y deben ser respetados en todos los ámbitos de la vida, incluido el trabajo.'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál de los siguientes es un derecho fundamental en el trabajo?',
                        options: ['Discriminación.', 'Acoso laboral.', 'Igualdad de oportunidades.', 'Exclusión.'],
                        correct: 'Igualdad de oportunidades.',
                        explanation: 'Todas las personas tienen derecho a acceder y desarrollarse en el trabajo en igualdad de condiciones.'
                    },
                    {
                        type: 'single',
                        prompt: 'La dignidad humana significa:',
                        options: ['Tener un cargo directivo.', 'Recibir privilegios especiales.', 'El valor y respeto que merece toda persona.', 'Tener más antigüedad.'],
                        correct: 'El valor y respeto que merece toda persona.',
                        explanation: 'La dignidad humana reconoce que todas las personas merecen respeto y un trato justo.'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál de las siguientes conductas vulnera la dignidad humana?',
                        options: ['Capacitar al personal.', 'Reconocer el desempeño.', 'Humillar públicamente a un trabajador.', 'Promover la igualdad.'],
                        correct: 'Humillar públicamente a un trabajador.',
                        explanation: 'La humillación afecta el respeto y la integridad de la persona trabajadora.'
                    },
                    {
                        type: 'single',
                        prompt: 'El derecho a la no discriminación implica que:',
                        options: ['Todas las personas deben recibir un trato justo e igualitario.', 'Solo algunas personas tienen oportunidades.', 'El género determina las oportunidades laborales.', 'Las empresas pueden excluir candidatos por edad.'],
                        correct: 'Todas las personas deben recibir un trato justo e igualitario.',
                        explanation: 'La igualdad y la no discriminación son principios fundamentales reconocidos por la legislación ecuatoriana.'
                    }
                ]
            }
        },
        { id: 'unidad3', title: 'Unidad 3: Marco Legal Laboral', Content: Unidad3 },
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
                        type: 'single',
                        prompt: '¿Cuál es la norma jurídica más importante del Ecuador?',
                        options: ['Reglamento Interno', 'Código Civil', 'Constitución de la República', 'Ordenanza Municipal'],
                        correct: 'Constitución de la República',
                        explanation: 'La Constitución es la norma suprema del país y protege los derechos fundamentales de todas las personas.'
                    },
                    {
                        type: 'single',
                        prompt: '¿Qué ley regula principalmente las relaciones laborales en Ecuador?',
                        options: ['Código Tributario', 'Código del Trabajo', 'Código Penal', 'Ley de Tránsito'],
                        correct: 'Código del Trabajo',
                        explanation: 'El Código del Trabajo regula derechos, obligaciones y condiciones de la relación laboral.'
                    },
                    {
                        type: 'single',
                        prompt: '¿Qué Convenio de la OIT promueve la igualdad salarial?',
                        options: ['Convenio 190', 'Convenio 111', 'Convenio 100', 'Convenio 155'],
                        correct: 'Convenio 100',
                        explanation: 'El Convenio 100 promueve la igualdad de remuneración entre hombres y mujeres por trabajo de igual valor.'
                    },
                    {
                        type: 'single',
                        prompt: '¿Qué Convenio de la OIT combate la discriminación laboral?',
                        options: ['Convenio 111', 'Convenio 100', 'Convenio 190', 'Convenio 29'],
                        correct: 'Convenio 111',
                        explanation: 'El Convenio 111 busca eliminar cualquier forma de discriminación en el empleo y la ocupación.'
                    },
                    {
                        type: 'single',
                        prompt: '¿Cuál de las siguientes instituciones internacionales promueve condiciones laborales dignas?',
                        options: ['FMI', 'Banco Mundial', 'OIT', 'OEA'],
                        correct: 'OIT',
                        explanation: 'La Organización Internacional del Trabajo promueve el trabajo decente, la igualdad y la protección de los derechos laborales en todo el mundo.'
                    }
                ]
            }
        },
        { id: 'unidad4', title: 'Unidad 4: Derecho Al Trabajo Digno', Content: Unidad4 },
        {
            id: 'unidad4-eval', evaluation: {
                title: 'Evaluación Unidad 4',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: 'single',
                        prompt: 'El trabajo digno garantiza:',
                        explanation: ' El trabajo digno asegura que las personas trabajadoras desarrollen sus actividades en condiciones seguras, con respeto a sus derechos, igualdad de oportunidades y una remuneración justa.',
                        options: ['Condiciones justas y seguras', 'Menos beneficios', 'Discriminación', 'Exclusión'],
                        correct: 'Condiciones justas y seguras'
                    },
                    {
                        type: 'single',
                        prompt: 'La remuneración justa corresponde a:',
                        explanation: ' Toda persona trabajadora tiene derecho a recibir una remuneración justa por el trabajo realizado. Este derecho está protegido por la legislación laboral y contribuye a una vida digna para la persona y su familia. ',
                        options: ['Un beneficio opcional', 'Un derecho laboral', 'Una sanción', 'Una bonificación extraordinaria'],
                        correct: 'Un derecho laboral'
                    },
                    {
                        type: 'single',
                        prompt: 'Las vacaciones permiten:',
                        explanation: 'Las vacaciones son un derecho laboral que permite a las personas trabajadoras descansar, recuperar energías y cuidar su bienestar físico y emocional, favoreciendo también un mejor desempeño laboral.',
                        options: ['Recuperación física y mental', 'Incrementar la jornada', 'Reducir beneficios', 'Ninguna'],
                        correct: 'Recuperación física y mental'
                    },
                    {
                        type: 'single',
                        prompt: 'El IESS forma parte de:',
                        explanation: ' El Instituto Ecuatoriano de Seguridad Social (IESS) forma parte del sistema de seguridad social y brinda protección a las personas afiliadas mediante servicios de salud, pensiones y otras prestaciones.',
                        options: ['Seguridad social', 'Transporte', 'Educación', 'Tribunales'],
                        correct: 'Seguridad social'
                    },
                    {
                        type: 'single',
                        prompt: 'Las horas extras deben:',
                        explanation: ' Cuando una persona trabajadora labora más allá de su jornada habitual, ese tiempo adicional debe registrarse, reconocerse y pagarse conforme a lo establecido en la normativa laboral vigente.',
                        options: ['Ser reconocidas y pagadas', 'Ser obligatorias y gratuitas', 'No registrarse', 'Ninguna'],
                        correct: 'Ser reconocidas y pagadas'
                    }
                ]
            }
        },
        { id: 'unidad5', title: 'Unidad 5: Igualidad De Oportunidades', Content: Unidad5 },
        {
            id: 'unidad5-eval', evaluation: {
                title: 'Evaluación Unidad 5',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: 'single',
                        prompt: 'El acceso al empleo debe basarse en:',
                        explanation: 'El acceso al empleo debe fundamentarse en las habilidades, conocimientos, experiencia y capacidades de cada persona, garantizando procesos de selección justos y libres de discriminación.',
                        options: ['Género', 'Competencias y experiencia', 'Edad', 'Estado civil'],
                        correct: 'Competencias y experiencia'
                    },
                    {
                        type: 'single',
                        prompt: 'La selección sin discriminación significa:',
                        explanation: ' Una selección sin discriminación implica valorar a todas las personas candidatas utilizando los mismos criterios relacionados con el puesto de trabajo, sin considerar características personales ajenas a sus competencias.',
                        options: ['Evaluar a todos con criterios objetivos', 'Contratar solo hombres', 'Contratar solo mujeres', 'Excluir personas mayores'],
                        correct: 'Evaluar a todos con criterios objetivos'
                    },
                    {
                        type: 'single',
                        prompt: 'La igualdad de trato implica:',
                        explanation: ' La igualdad de trato promueve un ambiente laboral respetuoso e inclusivo, donde todas las personas reciben las mismas oportunidades de desarrollo, participación y crecimiento profesional.',
                        options: ['Respeto y oportunidades para todos', 'Beneficios para un solo grupo', 'Preferencias personales', 'Exclusión'],
                        correct: 'Respeto y oportunidades para todos'
                    },
                    {
                        type: 'single',
                        prompt: 'Negar una oportunidad laboral por embarazo constituye:',
                        explanation: ' Rechazar o limitar una oportunidad laboral debido al embarazo es una práctica discriminatoria que vulnera los derechos de igualdad y no discriminación reconocidos por la legislación laboral. ',
                        options: ['Igualdad', 'Discriminación', 'Promoción', 'Capacitación'],
                        correct: 'Discriminación'
                    },
                    {
                        type: 'single',
                        prompt: 'La igualdad de oportunidades beneficia:',
                        explanation: ' La igualdad de oportunidades favorece a toda la organización porque mejora el clima laboral, fortalece el trabajo en equipo, aprovecha el talento diverso y contribuye a obtener mejores resultados. ',
                        options: ['Solo a la empresa', 'Solo a los trabajadores', 'A toda la organización', 'Ninguna'],
                        correct: 'A toda la organización'
                    }
                ]
            }
        },
        { id: 'unidad6', waitSeconds: 600, title: 'Unidad 6: Protección De La Maternidad Y Paternidad', Content: Unidad6 },
        {
            id: 'unidad6-eval', evaluation: {
                title: 'Evaluación Unidad 6',
                questionsToAsk: 5,
                passingScore: 4,
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: 'true-false',
                        prompt: 'La maternidad está protegida por la legislación ecuatoriana.',
                        explanation: ' La maternidad cuenta con protección legal en Ecuador. Las trabajadoras embarazadas tienen derechos específicos que buscan proteger su salud, su estabilidad laboral y el bienestar de sus hijos e hijas.',
                        correct: true
                    },
                    {
                        type: 'true-false',
                        prompt: 'La paternidad implica corresponsabilidad familiar.',
                        explanation: ' La paternidad no solo se relaciona con el cuidado económico de la familia, sino también con la participación en la crianza, el cuidado y la educación de los hijos e hijas, promoviendo la corresponsabilidad familiar.',
                        correct: true
                    },
                    {
                        type: 'single',
                        prompt: 'Excluir a una trabajadora embarazada de oportunidades laborales constituye:',
                        explanation: ' Negar oportunidades de empleo, ascenso o capacitación a una trabajadora por estar embarazada es una forma de discriminación que vulnera sus derechos y el principio de igualdad de oportunidades.',
                        options: ['Igualdad', 'Discriminación', 'Beneficio', 'Capacitación'],
                        correct: 'Discriminación'
                    },
                    {
                        type: 'true-false',
                        explanation: ' La lactancia es un derecho protegido por la normativa laboral. Su protección contribuye al bienestar de la madre y del niño o niña, favoreciendo su salud y desarrollo durante los primeros meses de vida.',
                        prompt: 'La lactancia es un derecho protegido.',
                        correct: true
                    },
                    {
                        type: 'single',
                        prompt: 'Las responsabilidades familiares corresponden:',
                        explanation: ' El cuidado y la crianza de los hijos e hijas son responsabilidades compartidas. La corresponsabilidad familiar promueve una distribución equilibrada de las tareas y favorece la igualdad entre mujeres y hombres. ',
                        options: ['Solo a la madre', 'Solo al padre', 'A ambos progenitores', 'A la empresa'],
                        correct: 'A ambos progenitores'
                    }
                ]
            }
        },
        {
            id: 'unidad6-act', evaluation: {
                title: 'Caso Práctico  - MÓDULO 1',
                intro: <>
                    <h3 className="font-semibold">Situación</h3>
                    <p>
                        María trabaja desde hace un año en una empresa. Al revisar su historial laboral descubre que no está afiliada al IESS. Además, ha trabajado varias horas extras que no han sido reconocidas ni pagadas. María desconoce cuáles son sus derechos y a qué institución puede acudir para solicitar orientación.
                    </p>
                </>,
                questionsToAsk: 3,
                passingScore: 'all',
                shuffleOptions: true,
                showCorrectAnswers: false,
                recordEvaluation: false,
                questions: [
                    {
                        type: 'single',
                        prompt: '¿Cuál de los siguientes derechos podría estar siendo vulnerado?',
                        options: ['Derecho a la seguridad social', 'Derecho al transporte', 'Derecho a la recreación', 'Derecho al voto'],
                        correct: 'Derecho a la seguridad social',
                        explanation: 'La afiliación y el acceso a la seguridad social son derechos fundamentales de las personas trabajadoras. Cuando estos derechos no se garantizan, se vulnera la protección que brinda el sistema de seguridad social.'
                    },
                    {
                        type: 'single',
                        prompt: '¿A qué institución puede acudir María para denunciar posibles incumplimientos laborales?',
                        options: ['Registro Civil', 'Ministerio del Trabajo', 'Municipio', 'ANT'],
                        correct: 'Ministerio del Trabajo',
                        explanation: 'El Ministerio del Trabajo es la institución encargada de supervisar el cumplimiento de la normativa laboral y de recibir denuncias cuando existan presuntas vulneraciones de derechos laborales.'
                    },
                    {
                        type: 'single',
                        prompt: '¿Qué debería hacer María como primera acción?',
                        options: ['Ignorar la situación', 'Informarse sobre sus derechos laborales y solicitar asesoría', 'Renunciar inmediatamente', 'Publicar el caso en redes sociales'],
                        correct: 'Informarse sobre sus derechos laborales y solicitar asesoría',
                        explanation: 'Antes de tomar una decisión, es importante conocer los derechos que protege la ley y buscar orientación en las instituciones competentes. Esto permite actuar de manera informada y utilizar los mecanismos adecuados para resolver la situación.'
                    }
                ]

            }
        }
        ,

    ], evaluation: {
        title: 'Examen Final Del Módulo 1',
        questionsToAsk: 5,
        passingScore: 4,
        shuffleOptions: true,
        showCorrectAnswers: false,
        recordEvaluation: false,
        questions: [
            {
                type: 'single',
                prompt: 'Los derechos laborales son:',
                options: ['Renunciables', 'Irrenunciables', 'Opcionales', 'Temporales'],
                correct: 'Irrenunciables',
                explanation: 'Los derechos laborales no pueden ser renunciados por las personas trabajadoras, aun cuando exista acuerdo entre las partes. Esta protección busca garantizar condiciones mínimas de trabajo y evitar abusos.'
            },
            {
                type: 'single',
                prompt: '¿Qué norma regula las relaciones laborales en Ecuador?',
                options: ['Código Civil', 'Código del Trabajo', 'Código Tributario', 'Ley de Tránsito'],
                correct: 'Código del Trabajo',
                explanation: 'El Código del Trabajo es la principal norma que regula las relaciones laborales en Ecuador. Establece derechos, obligaciones, condiciones de trabajo, jornadas, remuneraciones y mecanismos de protección laboral.'
            },
            {
                type: 'single',
                prompt: 'El trabajo digno garantiza:',
                options: ['Condiciones seguras y justas', 'Jornadas ilimitadas', 'Discriminación', 'Exclusión'],
                correct: 'Condiciones seguras y justas',
                explanation: 'Toda persona tiene derecho a desarrollar sus actividades en un entorno seguro, respetuoso y con condiciones justas. El trabajo digno promueve el bienestar, la igualdad y el respeto de la dignidad humana.'
            },
            {
                type: 'single',
                prompt: 'La igualdad de oportunidades significa:',
                options: ['Dar preferencias', 'Garantizar acceso justo para todas las personas', 'Contratar solo hombres', 'Contratar solo mujeres'],
                correct: 'Garantizar acceso justo para todas las personas',
                explanation: 'La igualdad de oportunidades garantiza que todas las personas puedan acceder al empleo, capacitación y desarrollo profesional sin discriminación por género, edad, discapacidad, etnia u otras condiciones personales.'
            },
            {
                type: 'true-false',
                prompt: 'La maternidad y paternidad son derechos protegidos por la legislación ecuatoriana.',
                correct: true,
                explanation: 'La legislación ecuatoriana reconoce y protege los derechos relacionados con la maternidad y la paternidad, promoviendo la corresponsabilidad familiar y evitando cualquier forma de discriminación asociada al embarazo o al cuidado de los hijos.'
            },
            {
                type: 'single',
                prompt: '¿Qué institución administra la seguridad social en Ecuador?',
                options: ['Ministerio del Trabajo', 'Fiscalía', 'IESS', 'Municipio'],
                correct: 'IESS',
                explanation: 'El IESS es la institución encargada de administrar la seguridad social y brindar prestaciones como atención médica, subsidios y jubilación.'
            },
            {
                type: 'single',
                prompt: 'La dignidad humana implica:',
                options: ['Tener un cargo directivo', 'Recibir beneficios especiales', 'El valor y respeto que merece toda persona', 'Tener antigüedad laboral'],
                correct: 'El valor y respeto que merece toda persona',
                explanation: 'La dignidad humana reconoce que todas las personas merecen respeto, protección de sus derechos y un trato justo.'
            },
            {
                type: 'single',
                prompt: '¿Cuál de las siguientes situaciones constituye discriminación laboral?',
                options: ['Evaluar competencias para un cargo', 'Rechazar una candidatura únicamente por la edad de la persona', 'Capacitar trabajadores', 'Realizar entrevistas'],
                correct: 'Rechazar una candidatura únicamente por la edad de la persona',
                explanation: 'La discriminación ocurre cuando una persona recibe un trato desfavorable por características personales que no guardan relación con el puesto de trabajo.'
            },
            {
                type: 'single',
                prompt: 'El Convenio 100 de la OIT promueve:',
                options: ['Seguridad vial', 'Trabajo infantil', 'Igualdad de remuneración por trabajo de igual valor', 'Jubilación anticipada'],
                correct: 'Igualdad de remuneración por trabajo de igual valor',
                explanation: 'El Convenio 100 busca garantizar igualdad salarial entre mujeres y hombres que realizan trabajos de igual valor.'
            },
            {
                type: 'single',
                prompt: '¿Qué organismo internacional promueve condiciones laborales justas y dignas?',
                options: ['FMI', 'Banco Mundial', 'OIT', 'OEA'],
                correct: 'OIT',
                explanation: 'La Organización Internacional del Trabajo promueve los derechos laborales y el trabajo decente en todo el mundo.'
            },
            {
                type: 'single',
                prompt: 'El derecho a la no discriminación significa:',
                options: ['Excluir a determinados grupos', 'Garantizar igualdad de trato y oportunidades', 'Limitar contrataciones', 'Favorecer una sola condición social'],
                correct: 'Garantizar igualdad de trato y oportunidades',
                explanation: 'Todas las personas tienen derecho a recibir un trato justo, sin discriminación por género, edad, discapacidad u otras condiciones.'
            },
            {
                type: 'single',
                prompt: '¿Cuál es una característica del trabajo digno?',
                options: ['Falta de seguridad social', 'Remuneración justa', 'Discriminación laboral', 'Jornadas ilimitadas'],
                correct: 'Remuneración justa',
                explanation: 'El trabajo digno garantiza condiciones justas, seguras y respetuosas para todas las personas trabajadoras.'
            },
            {
                type: 'single',
                prompt: 'Excluir a una mujer de una oportunidad laboral por estar embarazada constituye:',
                options: ['Promoción laboral', 'Igualdad de oportunidades', 'Discriminación', 'Capacitación'],
                correct: 'Discriminación',
                explanation: 'El embarazo no puede utilizarse como motivo para limitar el acceso al empleo o al desarrollo profesional.'
            },
            {
                type: 'single',
                prompt: 'Las responsabilidades familiares corresponden:',
                options: ['Solo a la madre', 'Solo al padre', 'A ambos progenitores', 'A la empresa'],
                correct: 'A ambos progenitores',
                explanation: 'La corresponsabilidad familiar promueve que madres y padres participen de forma equitativa en el cuidado y crianza de sus hijos.'
            },
            {
                type: 'single',
                prompt: 'Las decisiones de contratación y ascenso deben basarse en:',
                options: ['Género', 'Edad', 'Estado civil', 'Competencias, experiencia y desempeño'],
                correct: 'Competencias, experiencia y desempeño',
                explanation: 'Las oportunidades laborales deben otorgarse considerando criterios objetivos relacionados con las capacidades y resultados de cada persona.'
            }
        ]
    }



}

export default modulo1