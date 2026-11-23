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
    interface Hito {
        year: string;
        description: string;
    }

    const hitos: Hito[] = [
        { year: "Año", description: "Hito Histórico" },
        { year: "1916", description: "Se aprueba la jornada laboral de 8 horas diarias." },
        { year: "1922", description: "Huelga general y masacre obrera del 15 de noviembre en Guayaquil." },
        { year: "1925", description: "Creación del Ministerio de Trabajo tras la Revolución Juliana." },
        { year: "1938", description: "Promulgación del primer Código del Trabajo." },
        { year: "2008", description: "Eliminación de la tercerización (Mandato 8) y nueva Constitución" },
    ];
    return (
        <>
            {/* ---------- 1.1 ---------- */}
            <section className="mb-12">

                <VideoBase src="https://www.youtube.com/embed/l3BRNl92inw?si=gw1G_1eHMqxb3IPn" title="Derechos Laborales de Mujeres y Hombre" />
                <br />
                <p className="pl-2"> Para poder comprender un poco lo que es Derecho Laboral en el Ecuador conozcamos un poco su historia. </p>

                {/* ------- Historia del Derecho Titulo ------*/}
                <div className=" pl-2 border-gray-200 space-y-4 leading-7">

                    <h1 className="text-2xl"><strong>Historia del Derecho Laboral en el Ecuador </strong></h1>
                    <div className="pl-4">
                        <p>El derecho laboral ecuatoriano no surgió de la noche a la mañana; es el resultado de siglos de lucha, organización obrera y cambios sociales para garantizar condiciones dignas de trabajo. Conocer esta historia permite a cada trabajador entender el valor de sus derechos actuales y por qué deben defenderse. </p>

                    </div>

                    {/* -------- Historia del Derecho a. -------*/}
                    <h2 className="text-xl"> <strong>a. La época colonial y los inicios de la República (Siglos XVI - XIX) </strong></h2>
                    <div className="pl-4 space-y-4">
                        <p>Durante la colonia y las primeras décadas de vida republicana (a partir de 1830), no existían leyes que protegieran al trabajador. Predominaban sistemas de explotación como: </p>
                        <ul className="list-disc pl-8 ">
                            <li>La mita y los obrajes: Trabajo forzado e inhumano impuesto a los indígenas en minas y talleres textiles.</li>
                            <li>El concertaje: Un sistema de deudas heredables que ataba a los campesinos indígenas (huasipungueros) a las haciendas de por vida, sin recibir un salario real. </li>
                        </ul>
                    </div>

                    {/* ----- Historia del Derecho b. -----*/}
                    <h2 className="text-xl"> <strong>b. La Revolución Liberal y las primeras leyes (1895 - 1920)  </strong></h2>
                    <div className="pl-4 space-y-4">
                        <p>Con el triunfo de la Revolución Liberal liderada por Eloy Alfaro en 1895, comenzaron las primeras reformas sociales: </p>
                        <ul className="list-disc pl-8">
                            <li>Abolición del concertaje (1918): Se eliminó legalmente la prisión por deudas, liberando a miles de campesinos de la servidumbre formal. </li>
                            <li>Ley de Jornada Laboral (1916): Se estableció por primera vez la jornada de 8 horas diarias, 6 días a la semana, además del pago de horas extras. Esta ley fue una conquista directa tras las primeras huelgas de trabajadores ferroviarios, tipógrafos y artesanos en Guayaquil y Quito.  </li>
                        </ul>
                    </div>

                    {/* ----- Historia del Derecho c. -----*/}
                    <h2 className="text-xl"> <strong>c. La masacre del 15 de noviembre de 1922 y la Revolución Juliana (1922 - 1930) </strong></h2>
                    <div className="pl-4 space-y-4">
                        <p>El crecimiento de las fábricas y el puerto de Guayaquil fortaleció a los sindicatos. En noviembre de 1922, miles de trabajadores protagonizaron una huelga general exigiendo mejores salarios y el control del costo de la vida. La protesta terminó en una brutal represión militar el 15 de noviembre, conocida como el "bautismo de sangre" de la clase obrera ecuatoriana. </p>
                        <p>Este hecho impulsó la Revolución Juliana de 1925, liderada por jóvenes militares progresistas que crearon instituciones clave: </p>
                        <ul className="list-disc pl-8">
                            <li>El Ministerio de Previsión Social y Trabajo (1925).  </li>
                            <li>La Caja de Pensiones (1928), semilla del actual Instituto Ecuatoriano de Seguridad Social (IESS). </li>
                            <li>Leyes sobre contratos individuales, prevención de accidentes de trabajo y protección a la mujer embarazada. </li>
                        </ul>
                    </div>
                    {/* ----- Historia del Derecho d. -----*/}
                    <h2 className="text-xl"> <strong>d. El Código del Trabajo de 1938: El gran hito  </strong></h2>
                    <div className="pl-4 space-y-4">
                        <p>En 1938, durante el gobierno del general Alberto Enríquez Gallo, se promulgó el primer Código del Trabajo del Ecuador. </p>
                        <p>Esta obra jurídica —redactada con el aporte de intelectuales y dirigentes obreros— reunió y amplió todas las conquistas anteriores en un solo cuerpo legal. Estableció pilares que siguen vigentes: </p>
                        <ul className="list-disc pl-8">
                            <li>El derecho a la sindicalización y a la huelga.</li>
                            <li>La contratación colectiva. </li>
                            <li>El salario mínimo vital.</li>
                            <li>Las indemnizaciones por despido intempestivo y accidentes laborales. </li>
                            <li>El derecho a vacaciones pagadas y descanso semanal obligatorio.</li>
                        </ul>
                    </div>

                    {/* ----- Historia del Derecho e. -----*/}
                    <h2 className="text-xl"> <strong>e. Consolidación sindical y reformas sociales (1940 - 1980) </strong></h2>
                    <div className="pl-4 space-y-4">
                        <p>En las décadas siguientes, el movimiento obrero se organizó a nivel nacional con la creación de centrales sindicales como la CTE (1944), CEDOC y CEOSL, que luego formaron el Frente Unitario de Trabajadores (FUT) en los años 70. Gracias a la presión social se lograron nuevos beneficios económicos para aliviar el costo de la vida: </p>

                        <ul className="list-disc pl-8">
                            <li>Décimo tercer sueldo (bono navideño, creado en 1962). </li>
                            <li>Décimo cuarto sueldo (bono escolar, creado en 1968).  </li>
                            <li>Participación en el 15% de las utilidades de las empresas. </li>
                        </ul>
                    </div>

                    {/* ----- Historia del Derecho f. -----*/}
                    <h2 className="text-xl"> <strong>f. Flexibilización laboral y retorno a la protección (1990 - Actualidad)</strong></h2>
                    <div className="pl-4 space-y-4">
                        <ul className="list-disc pl-8">
                            <li>Años 90 y 2000: Bajo políticas económicas de apertura de mercados, se introdujeron reformas que flexibilizaron el trabajo, permitiendo la tercerización laboral y el trabajo por horas, lo que debilitó la estabilidad y los sindicatos.</li>
                            <li>Constitución de 2008 y Mandato 8: La Constitución de Montecristi declaró los derechos laborales como irrenunciables e intangibles y consagró el principio in dubio pro operario (en caso de duda, la ley se aplica a favor del trabajador). Además, el Mandato Constituyente N.º 8 eliminó la tercerización y la intermediación laboral, obligando a la contratación directa. </li>
                            <li>Retos actuales: Hoy en día, el derecho laboral ecuatoriano enfrenta el desafío de adaptarse a las nuevas formas de empleo —como el teletrabajo y las plataformas digitales— asegurando que la tecnología no signifique un retroceso en las garantías conquistadas durante más de un siglo. </li>
                        </ul>
                    </div>

                    <h2 className="text-xl"> <strong>Resumen de fechas clave para recordar</strong></h2>
                    <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
                        {hitos.map((hito) => (
                            <li key={hito.year} className="flex gap-4 px-4 py-3 hover:bg-gray-50">
                                <span className="w-16 shrink-0 font-medium text-gray-900">{hito.year}</span>
                                <span className="text-gray-700">{hito.description}</span>
                            </li>
                        ))}
                    </ul>
                    <br />


                </div>

                {/*----------1.1-----------*/}
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
                    <p>
                        Asi mismo, el participante contará con herramientas conceptuales y prácticas para identificar cómo estos principios universales se traducen en normas cotidianas dentro de la organización, reconociendo tanto sus derechos como su corresponsabilidad en la construcción de un ambiente de trabajo inclusivo, seguro y libre de cualquier forma de violencia o discriminación.
                    </p>
                </div>
            </section>

            {/* ---------- 2.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.1 ¿Qué son los Derechos Humanos? </strong>
                </h1>

                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_2_1} />
                    <h2 className="text-xl"><strong>Concepto y fundamentos</strong></h2>

                    <p className="pl-4 ">
                        Los derechos humanos son los derechos y libertades que tienen todas las personas por el solo hecho de ser seres humanos, sin importar su edad, sexo, nacionalidad, etnia, religión, condición económica o cualquier otra característica.
                    </p>
                    <p className="pl-4">
                        Estos derechos buscan garantizar que todas las personas vivan con dignidad, libertad, igualdad y seguridad.
                    </p>
                    <p className="pl-4">
                        Enfatizamos en otro concepto más extendido de lo que son los derechos humanos, que son el conjunto de prerrogativas, facultades, libertades y garantías inherentes a todos los seres humanos, sin distinción alguna de nacionalidad, lugar de residencia, sexo, origen nacional o étnico, color, religión, lengua, condición económica, orientación sexual o cualquier otra condición. Todas las personas tenemos los mismos derechos humanos, sin discriminación alguna.</p>
                    <p className="pl-4">
                        El fundamento filosófico y jurídico de estos derechos radica en la dignidad humana. La dignidad significa que cada persona tiene un valor intrínseco e incalculable por el simple hecho de existir. No es un premio que se gana por el rendimiento laboral, ni un privilegio otorgado por un gobierno o un empleador; es una condición natural que exige que todo ser humano sea tratado siempre como un fin en sí mismo y nunca como un simple medio, herramienta o mercancía para alcanzar objetivos económicos o productivos.
                    </p>

                    <h2 className="text-xl"><strong>Breve contexto histórico </strong></h2>
                    <p className="pl-4">
                        Aunque la idea de la dignidad humana ha estado presente en diversas culturas desde la antigüedad, los derechos humanos tal como los conocemos hoy cobraron fuerza tras las atrocidades cometidas durante la Segunda Guerra Mundial. En 1948, la Asamblea General de las Naciones Unidas proclamó la <strong>Declaración Universal de los Derechos Humanos (DUDH)</strong>, un documento histórico que estableció por primera vez los derechos fundamentales que deben protegerse en todo el mundo. Desde entonces, estos principios se han incorporado en las constituciones nacionales y en las leyes laborales de la gran mayoría de los países
                    </p>

                    <h2 className="text-xl"><strong>Características esenciales de los derechos humanos </strong></h2>
                    <p className="pl-2">Para comprender su alcance real, es indispensable analizar sus cuatro principios rectores: </p>
                    <ul className="pl-4 space-y-1">
                        <li>✅ <strong>Universales</strong> (aplican a todas las personas). </li>
                        <li className="pl-6">Pertenecen a todas las personas en cualquier rincón del planeta, en todo momento y bajo cualquier circunstancia. No dependen de las leyes de un país específico; si un Estado o una empresa no los reconoce, sigue existiendo la obligación moral y jurídica internacional de respetarlos. </li>
                        <li>✅ <strong>Inalienables</strong> (no pueden ser eliminados).</li>
                        <li className="pl-6">Nadie puede despojar a una persona de sus derechos humanos, ni siquiera el Estado o un empleador mediante un contrato. Solo pueden limitarse en situaciones muy específicas y bajo estrictas garantías legales (por ejemplo, la restricción de la libertad de tránsito cuando una persona es condenada por un delito tras un juicio justo).</li>
                        <li>✅ <strong>Irrenunciables</strong> (no pueden ser renunciados).</li>
                        <li className="pl-6">
                            Ninguna persona puede renunciar voluntariamente a sus derechos humanos, ni siquiera por necesidad económica. En el ámbito laboral, esto es crucial: si un trabajador firma un contrato aceptando trabajar sin descanso o por debajo del salario mínimo, esa cláusula es nula de pleno derecho, porque los derechos fundamentales están por encima de cualquier acuerdo privado.
                        </li>
                        <li>✅ <strong>Indivisibles</strong> (todos son importantes).</li>
                        <li className="pl-6">
                            Todos los derechos humanos tienen exactamente la misma jerarquía y están conectados entre sí. El avance de uno facilita el avance de los demás, y la privación de uno afecta negativamente a los otros. Por ejemplo, el derecho a un salario justo (derecho económico) está directamente ligado al derecho a la salud, a la vivienda adecuada y a la educación de los hijos (derechos sociales).
                        </li>
                    </ul>

                    <h3 className="text-lg pt-2">
                        <strong>Ejemplo práctico: </strong> La historia de Ana
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Ana es analista de logística en una empresa de distribución. Hace seis meses notificó a su supervisor que estaba embarazada. Lejos de recibir un trato hostil o ver reducidas sus oportunidades, la empresa realizó los ajustes razonables en su puesto para evitar que cargara objetos pesados y le otorgó los permisos médicos necesarios para sus controles prenatales sin descontarle un solo centavo de su salario. Además, durante las reuniones de equipo, su opinión sobre cómo optimizar las rutas de entrega es escuchada y valorada con el mismo peso que la de sus compañeros varones. Ana recibe su remuneración puntualmente y cuenta con canales confidenciales para reportar cualquier inconformidad sin temor a represalias.


                        </p>
                        <p>
                            <strong>Análisis del caso:</strong> En este escenario, la organización no solo está cumpliendo con la ley laboral, sino que está materializando los derechos humanos en la práctica diaria. Se respeta su derecho a la salud, a la no discriminación por razón de género o maternidad, a la libertad de expresión y a condiciones equitativas de trabajo
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Reflexión para el participante</strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>
                            Los derechos humanos no terminan cuando una persona ingresa a trabajar. Al contrario, deben ser protegidos durante toda la relación laboral.
                        </p>
                        <p>
                            Existe el mito de que cuando un trabajador cruza la puerta de una fábrica, una oficina o un comercio, deja sus derechos ciudadanos en la entrada y se somete exclusivamente a las reglas del negocio. Nada más lejos de la realidad. Los derechos humanos no se suspenden durante la jornada laboral. Por el contrario, el lugar de trabajo es uno de los espacios donde las personas pasan la mayor parte de su vida adulta, por lo que debe ser un entorno seguro, respetuoso y promotor de la dignidad humana.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 2.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.2 Derechos Fundamentales en el Trabajo </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>¿Qué son los derechos fundamentales en el trabajo?</strong>
                    </h2>
                    <p className='pl-4'>
                        Son los derechos básicos que deben respetarse dentro de cualquier organización para garantizar condiciones laborales dignas y justas.
                    </p>
                    <p className='pl-4'>
                        La Organización Internacional del Trabajo (OIT) reconoce que todas las personas trabajadoras tienen derecho a desarrollar sus actividades en un ambiente de respeto y protección.
                    </p>
                    <p className='pl-4'>
                        La OIT, como organismo especializado de las Naciones Unidas que reúne a gobiernos, empleadores y trabajadores, estableció en su <em>Declaración relativa a los Principios y Derechos Fundamentales en el Trabajo </em> que toda relación laboral debe basarse en reglas claras de justicia social. Estos derechos fundamentales funcionan como un "piso mínimo" obligatorio que protege al trabajador frente a cualquier abuso de poder, asegurando que el empleo sea un medio para el desarrollo personal y nunca una forma de explotación.

                    </p>

                    <h2 className="text-xl pt-4">
                        <strong>Principales derechos fundamentales en el trabajo </strong>
                    </h2>

                    <h3 className="text-lg pl-2 pt-2">
                        <strong>Derecho a la igualdad </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Todas las personas deben recibir igualdad de oportunidades y trato, sin discriminación.
                            <br />
                            En el ámbito laboral, la igualdad significa que las decisiones sobre contratación, capacitación, asignación de tareas, salarios y ascensos deben basarse únicamente en las capacidades, el mérito y el desempeño de cada persona. Esto implica eliminar barreras invisibles que suelen afectar a ciertos grupos, asegurando que tanto hombres como mujeres, jóvenes o adultos mayores tengan las mismas posibilidades reales de crecer profesionalmente dentro de la organización.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a la no discriminación </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Ninguna persona puede ser excluida o perjudicada por razones de:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Sexo:</strong> Incluye garantizar que hombres y mujeres reciban el mismo salario por realizar un trabajo de igual valor </li>

                            <li><strong>Género:</strong> Respeto a la identidad y expresión de género de cada colaborador, evitando burlas, exclusiones o trato desigual</li>
                            <li><strong>Edad:</strong> Prohibición de rechazar talento experimentado por considerarlo "mayor" o de subestimar las capacidades de los trabajadores jóvenes </li>
                            <li><strong>Etnia:</strong> Inclusión y respeto hacia personas indígenas, afrodescendientes o de cualquier origen cultural o lingüístico</li>
                            <li><strong>Discapacidad:</strong> Compromiso de realizar ajustes razonables en el espacio o herramientas de trabajo para que las personas con discapacidad puedan desempeñarse plenamente</li>
                            <li><strong>Nacionalidad:</strong> Los trabajadores migrantes tienen exactamente los mismos derechos laborales y de seguridad social que los trabajadores locales</li>
                            <li><strong>Religión:</strong> Respeto a las creencias y prácticas espirituales de cada persona, sin imponer ni penalizar convicciones personales</li>
                            <li><strong>Estado civil:</strong> Prohibición de negar empleos o ascensos por estar casado, soltero, divorciado o tener responsabilidades familiares y de cuidado.</li>
                        </ul>

                        <p>
                            Es importante recordar que la discriminación puede ser <strong>directa</strong> (cuando una norma excluye abiertamente a alguien por alguna de estas características) o <strong>indirecta</strong> (cuando una regla parece neutral pero en la práctica perjudica a un grupo específico, como exigir horarios innecesariamente extensos que impiden cumplir con responsabilidades familiares). Prevenir ambas formas es tarea de todos.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a condiciones seguras y saludables </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Toda persona tiene derecho a trabajar en ambientes que protejan su salud y seguridad.</p>
                        <p>
                            Toda persona tiene derecho a regresar sana y salva a su hogar al terminar su jornada. La organización debe prevenir accidentes físicos proporcionando equipos de protección adecuados, capacitación constante e instalaciones seguras. Además, la salud también incluye el bienestar mental y emocional: un ambiente saludable debe estar completamente libre de acoso laboral (<em>mobbing</em>), acoso sexual, gritos, humillaciones o cargas de trabajo extremas que generen estrés crónico.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a una remuneración justa y equitativa </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>El trabajo realizado debe ser remunerado conforme a la ley.</p>
                        <p>
                            El salario debe ser suficiente para que el trabajador y su familia puedan cubrir sus necesidades básicas de alimentación, vivienda, salud y educación con dignidad. Asimismo, este derecho exige que se pague lo mismo a quienes realizan funciones de igual responsabilidad y esfuerzo, sin importar quién las desempeñe.
                        </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho al descanso y limitación de la jornada  </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Las personas necesitan tiempo para recuperarse física y mentalmente, así como para convivir con sus familias. Por ello, existen límites claros a las horas de trabajo diarias y semanales, pausas obligatorias durante el turno, días de descanso semanal y vacaciones pagadas. También incluye el respeto al tiempo libre fuera del horario laboral, evitando exigir respuestas inmediatas a mensajes o correos cuando la jornada ha concluido. </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a la libertad sindical y negociación colectiva  </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Las personas trabajadoras tienen el derecho libre de asociarse, formar sindicatos o comités de representación para dialogar con la empresa y buscar mejoras en sus condiciones laborales, sin necesidad de pedir permiso previo y sin temor a sufrir represalias o despidos por ejercer este derecho.  </p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho a la seguridad social </strong>
                    </h3>
                    <div className="pl-4 space-y-2">
                        <p>Toda persona trabajadora tiene derecho a ser afiliada al IESS. En el Ecuador, la afiliación al <strong>Instituto Ecuatoriano de Seguridad Social (IESS) </strong> es un derecho irrenunciable de toda persona que presta servicios lícitos y personales bajo relación de dependencia, y debe realizarse desde el primer día de trabajo. Este derecho no es un favor ni un beneficio opcional que otorga el empleador, sino una obligación constitucional y legal que protege al trabajador y a su familia ante las distintas contingencias de la vida. </p>
                    </div>

                    <h4 className="text-l pt-2 pl-4">
                        <strong>¿Qué garantiza exactamente este derecho en la práctica? </strong>
                    </h4>
                    <div className="pl-6 space-y-2">
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Atención médica integral:</strong> Acceso a consultas, hospitalización, cirugías, medicamentos y rehabilitación en caso de enfermedad común o maternidad, tanto para el trabajador como para sus hijos menores de 18 años. </li>

                            <li><strong>Protección frente a riesgos del trabajo: </strong> Cobertura especializada, subsidios e indemnizaciones en caso de sufrir un accidente laboral o desarrollar una enfermedad profesional derivada de sus funciones.</li>
                            <li><strong>Respaldo económico en etapas vulnerables: </strong> Derecho a recibir subsidios monetarios por enfermedad o maternidad, seguro de desempleo en caso de pérdida involuntaria del puesto de trabajo, y acceso a fondos de reserva y cesantía.</li>
                            <li><strong>Futuro y retiro digno:</strong> Acumulación de aportaciones para acceder a una pensión de jubilación por vejez o invalidez, garantizando estabilidad económica en la etapa adulta mayor. </li>

                        </ul>
                        <p><strong>Importante:</strong>Ningún trabajador puede aceptar recibir "un poco más de sueldo en efectivo" a cambio de no ser afiliado al IESS. Como vimos en el tema anterior, los derechos son <strong>irrenunciables;</strong> la falta de afiliación vulnera directamente la seguridad y dignidad de la persona trabajadora.</p>
                    </div>

                    <h3 className="text-lg pt-2">
                        <strong>Derecho al respeto y la dignidad </strong>
                    </h3>

                    <div className="pl-4 space-y-2">
                        <p>Nadie debe sufrir acoso, violencia o maltrato dentro del trabajo.
                            El respeto y la dignidad constituyen la base de cualquier ambiente laboral sano. Toda persona trabajadora tiene derecho a que se respete su integridad física, psicológica, moral y sexual mientras desempeña sus funciones. La jerarquía dentro de una organización sirve para coordinar tareas y responsabilidades, pero jamás otorga autoridad para humillar, gritar, intimidar o desvalorizar a otro ser humano.
                        </p>

                    </div>
                    <h4 className="text-l pt-2 pl-4">
                        <strong>¿Qué conductas vulneran este derecho y están prohibidas en el entorno laboral? </strong>
                    </h4>
                    <div className="pl-6 space-y-2">
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Acoso laboral (mobbing):</strong> Todo comportamiento reiterado y demostrable —como burlas constantes, aislamiento, asignación de tareas humillantes o descalificación pública— dirigido a intimidar, opacar o desgastar emocionalmente a un trabajador hasta llevarlo a renunciar. </li>

                            <li><strong>Violencia y acoso sexual:  </strong>Cualquier insinuación, comentario, contacto físico o exigencia de carácter sexual no deseado que atente contra la libertad e integridad de la persona, ya sea que provenga de un superior, un compañero de trabajo o incluso un cliente. </li>
                            <li><strong>Maltrato verbal y psicológico:  </strong> El uso de insultos, amenazas, gritos, apodos ofensivos o tonos despectivos para corregir errores o exigir resultados.</li>
                            <li><strong>Trato discriminatorio o degradante:</strong> Cualquier acción que ridiculice a una persona por su apariencia, origen, creencias, condición socioeconómica o nivel educativo.</li>

                        </ul>

                    </div>

                    <h2 className="text-xl pt-4"><strong>Ejemplo práctico aplicado:</strong></h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Si un colaborador comete un error en un informe, el supervisor tiene el derecho y el deber de señalarlo y pedir su corrección. Sin embargo, debe hacerlo en privado, con un lenguaje respetuoso y enfocado en la mejora del trabajo. Si el supervisor opta por gritarle frente al equipo y llamarlo "inútil", está vulnerando directamente su derecho fundamental al respeto y la dignidad, lo cual constituye una falta grave que la empresa debe prevenir y sancionar mediante sus protocolos internos.

                        </p>
                        <p>

                            Tener afiliación al IESS protege el presente y el futuro material del trabajador, mientras que garantizar un trato digno y libre de violencia protege su bienestar emocional y mental. Cuando ambos derechos se cumplen, las personas no solo trabajan por necesidad, sino que se desarrollan en un espacio seguro y humano.
                        </p>


                    </div>
                    <h2 className="text-xl pt-4">
                        <strong>Caso práctico </strong>
                    </h2>
                    <div className="pl-4">
                        <PreguntaPractica
                            contexto={<>La empresa "Ejemplo S.A." publica una vacante indicando: <br /><em>"Se busca hombre menor de 30 años para puesto administrativo."
                            </em>Además, el anuncio no detalla cuáles son las funciones específicas del cargo, los conocimientos técnicos requeridos ni las competencias profesionales necesarias para desempeñar el trabajo. Al revisar las postulaciones, el departamento de Recursos Humanos descarta automáticamente las hojas de vida de mujeres con amplia experiencia administrativa y de hombres mayores de 35 años que cumplen con todo el perfil profesional, sin siquiera llamarlos a una entrevista. </>}
                            pregunta="¿Se está respetando el derecho a la igualdad y no discriminación?"
                            opciones={['Sí', 'No']}
                            correcta="No"
                            explicacion="La oferta limita la participación de personas por razones de género y edad, lo que constituye una práctica discriminatoria."
                        />
                    </div>
                    <h4 className="text-l pt-2 pl-4">
                        <strong>¿Por qué esta práctica vulnera los derechos fundamentales en el trabajo? </strong>
                    </h4>
                    <div className="pl-6 space-y-2">
                        <ul className="list-decimal pl-6 space-y-1">
                            <li><strong>Discriminación directa por sexo y género:</strong>  Un puesto administrativo (gestión de documentos, atención al cliente, manejo de agendas o sistemas contables) puede ser desempeñado con total eficiencia tanto por un hombre como por una mujer. Excluir a las mujeres desde la convocatoria perpetúa estereotipos de género y les niega el derecho constitucional a la igualdad de oportunidades en el acceso al empleo. </li>

                            <li><strong>Discriminación directa por edad:</strong> Establecer un límite arbitrario de "menor de 30 años" excluye sin justificación técnica a personas adultas o mayores de 40 años que cuentan con valiosa experiencia, madurez profesional y plena capacidad para realizar las tareas del puesto.</li>
                            <li><strong>Evaluación basada en prejuicios y no en méritos:</strong>La selección de personal debe centrarse exclusivamente en las competencias, habilidades, formación y experiencia de cada postulante. Cuando una empresa filtra candidatos por características personales ajenas al desempeño laboral, vulnera la dignidad humana y desaprovecha talento valioso. </li>


                        </ul>

                    </div>
                    <h4 className="text-l pt-2 pl-4">
                        <strong>¿Cómo debería redactarse correctamente esta oferta laboral?</strong>
                    </h4>
                    <div className="pl-8 space-y-2">
                        <p>
                            Para cumplir con los principios de igualdad y no discriminación, la empresa "Ejemplo S.A." debería publicar la vacante enfocándose únicamente en los requisitos reales del cargo:
                        </p>
                        <p>
                            "Se busca Asistente Administrativo/a. Requisitos: formación en administración o áreas afines, manejo de herramientas ofimáticas, capacidad de organización y orientación al servicio. Se valorará experiencia previa en cargos similares."
                        </p>

                    </div >

                    <h4 className="text-l pt-2 pl-6"><strong>Reflexión del caso:</strong></h4>
                    <div className="pl-8 space-y-2">
                        <p >
                            La igualdad y la no discriminación no comienzan cuando el trabajador firma su contrato, sino desde el <strong>primer contacto</strong> con la empresa en el proceso de reclutamiento y selección. Garantizar convocatorias abiertas e inclusivas permite que todas las personas compitan en igualdad de condiciones por un trabajo digno.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 2.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>2.3 Principio de Dignidad Humana </strong>
                </h1>
                <h2 className="text-xl pl-2">
                    <strong>¿Qué es la dignidad humana?</strong>
                </h2>
                <div className="pl-6 border-l-4 border-gray-200 space-y-4 leading-7">


                    <p>
                        La dignidad humana es el valor inherente que posee toda persona por el simple hecho de ser humana.
                    </p>
                    <p>
                        Este valor no depende de la posición jerárquica, el nivel salarial, la antigüedad en la empresa, el grado académico ni la productividad individual. En el mundo del trabajo, reconocer la dignidad humana significa entender que los colaboradores no son simples "recursos" o números en una planilla, sino seres humanos con emociones, metas, familias y derechos que deben ser valorados integralmente.
                    </p>
                    <p>Significa que todas las personas merecen:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Respeto: </strong>Ser escuchadas con atención, recibir un trato amable y nunca ser objeto de burlas, gritos o descalificaciones </li>

                        <li><strong>Trato justo:</strong> Que las normas, sanciones y beneficios se apliquen con imparcialidad y sin favoritismos arbitrarios </li>
                        <li><strong> Reconocimiento:</strong> Que se valore el esfuerzo, las ideas y el aporte que cada persona realiza para el logro de los objetivos comunes </li>
                        <li><strong>Protección de sus derechos:</strong> Contar con mecanismos reales y seguros para denunciar cualquier abuso sin temor a represalias </li>
                        <li><strong>Igualdad de oportunidades:</strong> Tener las mismas posibilidades de aprender, crecer y desarrollarse profesionalmente </li>
                    </ul>
                    <p>
                        La dignidad es uno de los principios más importantes de los derechos humanos y del derecho laboral.
                    </p>
                    <p>
                        De hecho, la dignidad funciona como el criterio guía para resolver cualquier conflicto en la empresa: siempre que exista duda sobre si una decisión administrativa o una conducta cotidiana es correcta, basta con preguntarse si esa acción respeta o vulnera la dignidad de las personas involucradas.
                    </p>
                </div>
                <h2 className="text-xl pt-2 pl-2 pb-2">
                    <strong>Base legal en Ecuador </strong>
                </h2>
                <div className="pl-6 space-y-2">
                    <h3 className="text-lg"><strong>Constitución de la República del Ecuador, Artículo 33</strong></h3>
                    <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                        "El Estado garantizará a las personas trabajadoras el pleno respeto a su dignidad, una vida decorosa, remuneraciones y retribuciones justas y el desempeño de un trabajo saludable y libremente escogido o aceptado. "
                    </blockquote>

                    <h3 className='text-lg'><strong>¿Qué implica este mandato constitucional en la práctica? </strong></h3>
                    <ul className="list-disc pl-8">
                        <li>
                            <strong>El trabajo como derecho y deber social: </strong>
                            La Constitución ecuatoriana establece que el trabajo no es una simple mercancía sujeta a las leyes de la oferta y la demanda, sino un derecho fundamental que debe permitir al trabajador y a su familia vivir con decoro.
                        </li>
                        <li>
                            <strong>Complemento con el Código del Trabajo y normativas de prevención: </strong>
                            En concordancia con el Art. 33 y el Art. 326 de la Constitución, las leyes laborales en Ecuador obligan a todos los empleadores a mantener un ambiente de trabajo libre de violencia y acoso, implementar protocolos internos de prevención de riesgos psicosociales y sancionar cualquier conducta que atente contra la honra o dignidad del trabajador.
                        </li>
                    </ul>
                </div>
                <h2 className="text-xl pt-2 pl-2">
                    <strong>¿Cómo se respeta la dignidad humana en el trabajo? </strong>
                </h2>
                <div className="pl-8 space-y-2">
                    <p>Se respeta cuando:</p>
                    <ul className="pl-4 space-y-2">
                        <li>✅ Se trata a las personas con respeto.</li>
                        <li className="pl-8">En lo cotidiano: Se utiliza un lenguaje cordial, se corrigen los errores en privado de manera constructiva y se valora la opinión de cada miembro del equipo sin importar su cargo. </li>
                        <li>✅ No existe discriminación.</li>
                        <li className='pl-8'>En lo cotidiano: Todas las personas participan en igualdad de condiciones en proyectos, reuniones y procesos de ascenso, sin excluir a nadie por su género, edad, origen o creencias. </li>
                        <li>✅ No existe acoso laboral.</li>
                        <li className='pl-8'>En lo cotidiano: Se erradican de inmediato los chismes malintencionados, las burlas, el aislamiento social, la sobrecarga intencional de trabajo o cualquier forma de intimidación. </li>
                        <li>✅ Se protege la salud y seguridad.</li>
                        <li className='pl-8'>En lo cotidiano: Se entregan equipos de protección adecuados, se respetan los horarios de descanso y se cuida tanto la integridad física como la salud mental de los colaboradores. </li>
                        <li>✅ Se reconoce el trabajo realizado.</li>
                        <li className='pl-8'>En lo cotidiano: Se agradece el esfuerzo diario, se retroalimenta positivamente el buen desempeño y se atribuye el mérito a quien realmente realizó la tarea. </li>
                        <li>✅ Se respetan los derechos laborales.</li>
                        <li className='pl-8'>En lo cotidiano: Se cumple puntualmente con el pago de remuneraciones, beneficios de ley, afiliación al IESS, vacaciones y permisos médicos o familiares. </li>
                    </ul>
                </div>

                <h3 className="text-lg pt-2">
                    <strong>Ejemplo práctico </strong>
                </h3>
                <div className="pl-4 space-y-2">
                    <p>María y Carlos desempeñan funciones similares dentro de la empresa. Sin embargo, algunos compañeros se burlan constantemente de María y la excluyen de ciertas actividades del equipo. A pesar de haber informado la situación, las conductas continúan. </p>
                    <p>
                        Por ejemplo, cuando se organizan reuniones informales de coordinación o capacitaciones internas, a Carlos siempre se le avisa con anticipación, mientras que a María no se le envía la invitación o se hacen comentarios sarcásticos sobre su forma de trabajar cuando intenta opinar. Aunque ella ya comunicó su malestar a su supervisor inmediato, este minimizó el problema diciendo que "son solo bromas de oficina" y no tomó ninguna medida correctiva.
                    </p>
                    <p><strong>Pregunta de reflexión</strong></p>
                    <p><em>¿Qué derecho laboral o principio de convivencia está siendo vulnerado en esta situación? </em></p>
                    <p>
                        <strong>Análisis:</strong> La situación constituye una falta de respeto a la dignidad humana y puede generar un ambiente laboral hostil. Toda persona trabajadora debe recibir un trato respetuoso, libre de discriminación, humillaciones o cualquier conducta que afecte su bienestar y desarrollo profesional.

                    </p>
                    <h4 className='text-lg mb-2'><strong>Desglose de las vulneraciones identificadas en el caso: </strong></h4>
                    <ul className='list-decimal space-y-2 pl-8'>
                        <li><strong>Vulneración al Principio de Dignidad Humana y Buen Trato </strong> Las burlas constantes y el sarcasmo afectan directamente la autoestima, el bienestar emocional y la integridad psicológica de María. Ninguna conducta que humille a un compañero puede justificarse como una simple "broma". </li>
                        <li><strong>Vulneración al Derecho a la Igualdad y No Discriminación: </strong> Aunque María y Carlos ocupan puestos similares, ella recibe un trato desigual al ser excluida sistemáticamente de actividades y espacios de información clave para su desempeño. </li>
                        <li><strong>Configuración de Acoso Laboral (Mobbing) y Omisión de la Empresa: </strong>Al ser conductas repetitivas en el tiempo que buscan aislar y desgastar a la colaboradora, se configura un escenario de acoso laboral. Además, la inacción del supervisor agrava el problema, ya que la organización tiene la obligación legal y ética de investigar, detener el maltrato y garantizar un entorno seguro apenas recibe una alerta.</li>
                    </ul>

                    <h4 className='text-lg mb-2'> <strong>¿Cuál debería ser la actuación correcta?</strong></h4>
                    <p className='pl-8'>La empresa debe activar de inmediato su protocolo de prevención de riesgos psicosociales y acoso laboral, escuchar confidencialmente a María, aplicar las medidas disciplinarias correspondientes a quienes promueven las burlas y asegurar su plena reintegración a todas las dinámicas del equipo. </p>
                </div>


                <h3 className="text-xl pt-2 pb-2">
                    <strong>🎥 Video: Derechos Y Dignidad Laboral </strong>
                </h3>
                <div className="pl-4">
                    <VideoBase src="https://www.youtube.com/embed/p9kG062U1mw?si=V9ugpS4mMDuUgqcp" title="Discriminación por la edad" />
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
                            Al finalizar esta unidad, el participante reconocerá las principales normas que protegen los derechos laborales en el Ecuador, identificando el papel de la Constitución, el Código del Trabajo y los Convenios de la Organización Internacional del Trabajo (OIT).
                        </p>
                        <p>
                            Comprender este marco normativo permite tanto a empleadores como a trabajadores actuar con certeza jurídica, prevenir conflictos laborales y garantizar que las políticas internas de la empresa estén plenamente alineadas con las exigencias legales nacionales e internacionales.
                        </p>
                    </div>
                    <ImageBase src={img_1_3_1} />
                    <div className="pl-4 space-y-4">
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

                    <h2 className="text-xl pt-2">
                        <strong>¿Cómo funciona la jerarquía de estas normas?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            En el sistema jurídico ecuatoriano existe un orden jerárquico claro (conocido como supremacía constitucional). En la cima se encuentra la Constitución, junto con los Tratados y Convenios Internacionales de Derechos Humanos ratificados por el Ecuador (como los Convenios de la OIT), los cuales prevalecen sobre cualquier ley ordinaria o reglamento interno.
                        </p>
                        <p>
                            Debajo de ellos se ubica el Código del Trabajo, que desarrolla en detalle cómo deben aplicarse esos principios en el día a día de las empresas. Por lo tanto, ningún contrato individual ni reglamento interno de trabajo puede contradecir lo que establecen estas tres fuentes legales.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 3.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.1 Constitución de la República del Ecuador </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_3_2} />

                    <h2 className="text-xl">
                        <strong>¿Qué es la Constitución?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            La Constitución es la norma jurídica más importante del país. Todas las leyes, reglamentos y normas deben respetar lo que establece la Constitución.
                        </p>
                        <p>
                            La Constitución reconoce al trabajo como un derecho fundamental de todas las personas.
                        </p>
                        <p>
                            Promulgada en 2008, la Constitución del Ecuador se caracteriza por ser altamente garantista de los derechos humanos. En el ámbito laboral, supera la antigua visión del trabajo como una simple relación comercial y lo eleva a la categoría de un derecho esencial para el "Buen Vivir" (<em>Sumak Kawsay</em>), obligando al Estado y a los empleadores privados a proteger de manera prioritaria a la persona trabajadora.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Base Legal </strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <h3 className="text-lg"><strong>Artículo 33</strong></h3>
                        <div className="pl-4">
                            <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                                "El trabajo es un derecho y un deber social, y un derecho económico, fuente de realización personal y base de la economía."
                            </blockquote>
                        </div>

                        <h3 className="text-lg"><strong>Artículo 326 numeral 2</strong></h3>
                        <div className="pl-4 space-y-2">
                            <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                                "Los derechos laborales son irrenunciables e intangibles."
                            </blockquote>
                            <p>
                                <strong>¿Qué significa "intangibles" en el Art. 326?</strong> Significa que los derechos laborales reconocidos en la ley no pueden ser tocados, reducidos ni desmejorados por ninguna autoridad, contrato o acuerdo posterior. Una vez que un derecho ha sido conquistado y reconocido legalmente, constituye un piso mínimo intocable.
                            </p>
                            <p>
                                <strong>Otros principios constitucionales clave:</strong> El mismo Artículo 326 establece además que, en caso de duda sobre el alcance de las disposiciones legales o contractuales en materia laboral, estas se aplicarán en el sentido más favorable a las personas trabajadoras (principio <em>in dubio pro operario</em>).
                            </p>
                        </div>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Qué protege la Constitución? </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Derecho al trabajo.</strong> Garantizando el acceso libre y sin coacciones.</li>
                            <li>✅ <strong>Igualdad de oportunidades.</strong> Eliminando barreras en el acceso y ascenso laboral.</li>
                            <li>✅ <strong>No discriminación.</strong> Prohibiendo cualquier exclusión por razones personales o sociales.</li>
                            <li>✅ <strong>Remuneración justa.</strong> Asegurando un salario digno que cubra las necesidades básicas del hogar.</li>
                            <li>✅ <strong>Seguridad social.</strong> Estableciendo la afiliación universal y obligatoria al IESS.</li>
                            <li>✅ <strong>Protección de la maternidad.</strong> Prohibiendo el despido por embarazo o lactancia y garantizando licencias pagadas.</li>
                            <li>✅ <strong>Seguridad y salud en el trabajo.</strong> Exigiendo ambientes adecuados que prevengan accidentes y enfermedades.</li>
                            <li>✅ <strong>Dignidad humana.</strong> Prohibiendo toda forma de acoso, violencia o trato humillante.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo Práctico </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>Una empresa decide pagar menos salario a una trabajadora únicamente por ser mujer.</p>
                        <p><strong>Análisis:</strong> Esta práctica vulnera:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>El derecho a la igualdad.</li>
                            <li>El derecho a la no discriminación.</li>
                            <li>El derecho a una remuneración justa.</li>
                        </ul>
                        <p>
                            Además, esta conducta contradice directamente el principio constitucional de "a trabajo de igual valor corresponderá igual remuneración" (Art. 326, numeral 4). Incluso si la trabajadora hubiera firmado un contrato aceptando ese sueldo menor por necesidad económica, dicha cláusula carece de validez jurídica porque sus derechos son irrenunciables e intangibles. La empresa está obligada a nivelar su salario de inmediato y reconocer las diferencias salariales dejadas de percibir.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 3.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>3.2 Código del Trabajo </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_3_3} />

                    <h2 className="text-xl">
                        <strong>¿Qué es el Código del Trabajo?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            Es la principal ley que regula las relaciones laborales entre trabajadores y empleadores en Ecuador.
                        </p>
                        <p>
                            Establece las obligaciones, derechos y responsabilidades que deben cumplirse durante toda la relación laboral.
                        </p>
                        <p>
                            El Código del Trabajo del Ecuador rige para todas las relaciones laborales del sector privado (y para los obreros del sector público). Su finalidad es equilibrar la relación entre quien aporta su fuerza de trabajo y quien dirige la actividad productiva, estableciendo reglas claras desde el momento en que se pacta el empleo hasta el instante en que concluye la relación laboral, evitando así decisiones arbitrarias.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Artículos importantes </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <h3 className="text-lg"><strong>Artículo 4</strong></h3>
                        <div className="pl-4 space-y-2">
                            <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                                "Los derechos del trabajador son irrenunciables."
                            </blockquote>
                            <p className="text-red-800">Esto significa que ninguna persona trabajadora puede renunciar voluntariamente a los derechos reconocidos por la ley.</p>
                            <p>
                                <strong>Por ejemplo:</strong> Si un empleador le pide a un trabajador firmar una carta donde declara que "renuncia a sus vacaciones anuales" o "acepta trabajar sin afiliación al IESS", ese documento es nulo de pleno derecho. Aunque exista una firma, la ley protege al trabajador y el empleador sigue obligado a cumplir con esos beneficios y a asumir las sanciones correspondientes por intentar evadir la norma.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Temas que regula el Código del Trabajo </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Contratación:</strong> Normas para la celebración de contratos. Define los tipos de contratos vigentes —indefinido, eventual, ocasional, por obra o servicio—, la obligación de registrarlos en el Ministerio del Trabajo y las reglas del período de prueba.
                            </li>
                            <li>
                                <strong>Jornadas laborales:</strong> Control de horarios y horas extraordinarias. Establece la jornada ordinaria máxima de 8 horas diarias y 40 semanales, los descansos obligatorios de dos días consecutivos y los recargos económicos del 25%, 50% y 100% por horas suplementarias, extraordinarias o jornadas nocturnas.
                            </li>
                            <li>
                                <strong>Salarios:</strong> Pago de remuneraciones y beneficios. Regula el Salario Básico Unificado, los salarios sectoriales, el pago puntual mensual o quincenal, y los beneficios sociales obligatorios como el décimo tercer sueldo, décimo cuarto sueldo y participación en utilidades.
                            </li>
                            <li>
                                <strong>Vacaciones:</strong> Descanso obligatorio anual. Garantiza 15 días ininterrumpidos de descanso pagado por cada año completo de servicio, más días adicionales por antigüedad a partir del quinto año en la misma empresa.
                            </li>
                            <li>
                                <strong>Licencias y Permisos:</strong> Maternidad, paternidad y permisos especiales. Regula las 12 semanas de licencia remunerada por maternidad, el período de lactancia, los 10 a 15 días de licencia por paternidad, permisos por calamidad doméstica, citas médicas o matrimonio.
                            </li>
                            <li>
                                <strong>Seguridad y Salud:</strong> Medidas para prevenir riesgos laborales y proteger la integridad de las personas trabajadoras. Obliga a las empresas a contar con reglamentos de higiene y seguridad, comités paritarios, entrega gratuita de equipos de protección personal y protocolos de prevención de riesgos psicosociales.
                            </li>
                            <li>
                                <strong>Terminación de la relación laboral:</strong> Procedimientos y derechos aplicables cuando finaliza el vínculo laboral. Establece las causas legales para terminar un contrato —como acuerdo entre partes, desahucio o visto bueno—, el cálculo de la liquidación de haberes y las indemnizaciones por despido intempestivo.
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo Práctico </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>Pedro trabaja de lunes a viernes de 08h00 a 17h00. Debido a una alta carga de trabajo, su supervisor le solicita quedarse dos horas adicionales durante varias semanas. Al revisar su rol de pagos, Pedro observa que las horas extras no fueron registradas ni remuneradas.</p>
                        <p>
                            <strong>Análisis:</strong> La situación representa un incumplimiento de las normas laborales relacionadas con la jornada de trabajo y la remuneración. Las horas extraordinarias deben ser registradas y compensadas conforme a lo establecido en el Código del Trabajo.
                        </p>
                        <p>
                            En este caso específico, al tratarse de horas trabajadas a continuación de la jornada ordinaria diaria (de lunes a viernes después de las 17h00), la ley las denomina <strong>horas suplementarias</strong>, las cuales deben pagarse con un recargo del 50% sobre el valor de la hora normal (hasta las 24h00). Ningún supervisor puede solicitar tiempo adicional bajo la premisa informal de "ponerse la camiseta" sin el debido registro y pago económico en el rol mensual.
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
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_3_4} />

                    <h2 className="text-xl">
                        <strong>¿Qué es la OIT?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            La Organización Internacional del Trabajo (OIT) es una agencia especializada de las Naciones Unidas que promueve condiciones laborales justas y dignas en todo el mundo.
                        </p>
                        <p>
                            Ecuador ha ratificado varios convenios internacionales que forman parte de la protección laboral.
                        </p>
                        <p>
                            La OIT posee una estructura tripartita única, lo que significa que sus normas se crean mediante el consenso entre representantes de los gobiernos, de los empleadores y de los trabajadores de 187 países. Cuando un país como el Ecuador ratifica un Convenio de la OIT, este adquiere carácter vinculante (obligatorio) y se integra directamente a la legislación nacional, sirviendo como guía para jueces, inspectores de trabajo y empresas.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Convenio 100: Igualdad de Remuneración </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>Promueve la igualdad salarial entre hombres y mujeres por un trabajo de igual valor.</p>
                        <p>
                            <strong>Ejemplo práctico:</strong> Ana y Carlos ocupan puestos diferentes dentro de la empresa, pero ambos requieren la misma formación, nivel de responsabilidad, experiencia y esfuerzo. Durante una revisión interna se detecta que Carlos recibe una remuneración superior sin una justificación objetiva.
                        </p>
                        <p>
                            <strong>Análisis:</strong> La empresa debe evaluar los puestos con criterios objetivos para garantizar que trabajos de igual valor reciban una remuneración equivalente. En consecuencia, las funciones equivalentes deben recibir la misma remuneración.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Convenio 111: Discriminación en el Empleo y la Ocupación </strong>
                    </h2>
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
                            <strong>Ejemplo práctico:</strong> Luis participa en un proceso de selección y cumple todos los requisitos del cargo. Sin embargo, es descartado únicamente por su edad y no por sus competencias o experiencia laboral.
                        </p>
                        <p>
                            <strong>Análisis:</strong> La decisión constituye una práctica discriminatoria, ya que el acceso al empleo debe basarse en criterios objetivos relacionados con las capacidades y requisitos del puesto.
                        </p>
                        <p>
                            <strong>Alcance integral:</strong> El Convenio 111 no solo protege el momento de la contratación, sino todas las etapas de la vida laboral: el acceso a cursos de capacitación, la asignación de herramientas, las oportunidades de ascenso, la estabilidad laboral y las condiciones de desvinculación.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Convenio 190: Violencia y Acoso </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>Busca prevenir y eliminar:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Acoso laboral.</li>
                            <li>Violencia verbal.</li>
                            <li>Violencia psicológica.</li>
                            <li>Violencia sexual.</li>
                        </ul>
                        <p>
                            <strong>Nota importante:</strong> Ecuador ratificó este histórico convenio internacional en 2021, comprometiéndose a erradicar toda forma de violencia y acoso en el mundo del trabajo, incluyendo aquellos actos que ocurren durante desplazamientos laborales, viajes de trabajo o mediante comunicaciones digitales como correos electrónicos y mensajes.
                        </p>
                        <p>
                            <strong>Ejemplo práctico:</strong> Durante varias semanas, una trabajadora recibe comentarios ofensivos y burlas constantes por parte de un supervisor delante de sus compañeros de trabajo.
                        </p>
                        <p>
                            <strong>Análisis:</strong> Esta situación puede constituir violencia o acoso en el trabajo, afectando la dignidad, el bienestar y el derecho a desenvolverse en un ambiente laboral seguro y respetuoso.
                        </p>
                        <p>
                            Bajo los estándares del Convenio 190, la empresa no puede permanecer pasiva ante esta situación. Tiene la obligación legal de contar con políticas internas claras contra la violencia y el acoso, habilitar canales confidenciales de denuncia que protejan a la víctima contra represalias, investigar los hechos con imparcialidad y aplicar sanciones disciplinarias al agresor.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Por qué son importantes los Convenios OIT? </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Promueven la igualdad.</strong> Estableciendo reglas equitativas para todos los trabajadores sin distinción.</li>
                            <li>✅ <strong>Protegen la dignidad humana.</strong> Poniendo a la persona por encima de cualquier interés meramente económico.</li>
                            <li>✅ <strong>Previenen la discriminación.</strong> Asegurando procesos justos desde la selección hasta el retiro.</li>
                            <li>✅ <strong>Fortalecen los derechos laborales.</strong> Respaldando las leyes nacionales con estándares internacionales.</li>
                            <li>✅ <strong>Mejoran las condiciones de trabajo.</strong> Fomentando entornos seguros, saludables y productivos para todos.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Conclusión ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Conclusión de la Unidad 3 </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            Conocer la Constitución del Ecuador, el Código del Trabajo y los Convenios de la OIT nos demuestra que los derechos laborales cuentan con un sólido respaldo legal tanto nacional como internacional. Cumplir estas normas no solo evita sanciones legales para la empresa, sino que garantiza una cultura organizacional basada en la justicia, el respeto mutuo y la seguridad jurídica para cada colaborador.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>🎥 Video: Conociendo nuestros derechos laborales </strong>
                    </h2>
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
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">
                        <p>
                            Al finalizar esta unidad, el participante identificará los elementos que conforman el trabajo digno, reconociendo sus derechos relacionados con remuneración, jornada laboral, vacaciones y seguridad social.
                        </p>
                        <p>
                            A lo largo de esta unidad, el participante comprenderá cómo estos cuatro pilares se aplican en la práctica diaria dentro del Ecuador, permitiéndole verificar el cumplimiento de sus derechos económicos, de descanso y de protección social, así como fomentar una cultura de cumplimiento y bienestar en su entorno laboral.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 4.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.1 Trabajo Digno </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>¿Qué es el trabajo digno?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            El trabajo digno es aquel que permite a las personas desarrollar sus actividades en condiciones justas, seguras, saludables y respetuosas.
                        </p>
                        <p>
                            La Constitución del Ecuador reconoce que toda persona tiene derecho a un trabajo que respete su dignidad y garantice una vida adecuada.
                        </p>
                        <p>
                            A nivel internacional, la Organización Internacional del Trabajo (OIT) también lo denomina <strong>Trabajo Decente</strong>. Este concepto parte de una idea fundamental: no basta con tener cualquier empleo para subsistir; el trabajo debe ser una fuente de realización personal, estabilidad familiar y respeto a los derechos fundamentales. Un empleo donde existe maltrato, falta de afiliación al seguro social o sueldos por debajo de lo legal no cumple con el estándar constitucional de trabajo digno.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Base Legal </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <h3 className="text-lg"><strong>Constitución del Ecuador, Artículo 33</strong></h3>
                        <div className="pl-4">
                            <blockquote className="pl-4 border-l-2 border-gray-300 italic">
                                "El trabajo es un derecho y un deber social... El Estado garantizará a las personas trabajadoras el pleno respeto a su dignidad."
                            </blockquote>
                        </div>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Características del trabajo digno </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Remuneración justa.</strong> Que permita cubrir las necesidades básicas del trabajador y su familia con dignidad.</li>
                            <li>✅ <strong>Ambiente laboral seguro.</strong> Instalaciones adecuadas y prevención de accidentes físicos y riesgos psicosociales.</li>
                            <li>✅ <strong>Igualdad de oportunidades.</strong> Acceso y crecimiento basados en el mérito y la capacidad, sin favoritismos.</li>
                            <li>✅ <strong>Respeto a la dignidad humana.</strong> Trato cordial y libre de cualquier forma de acoso, gritos o humillación.</li>
                            <li>✅ <strong>Acceso a la seguridad social.</strong> Protección integral presente y futura a través del IESS.</li>
                            <li>✅ <strong>Protección contra la discriminación.</strong> Inclusión real sin importar género, edad, etnia, discapacidad o condición social.</li>
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
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>¿Qué es una remuneración justa?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            Es el pago que recibe una persona por el trabajo realizado conforme a la ley y de manera oportuna.
                        </p>
                        <p>
                            La remuneración debe reconocer el esfuerzo, responsabilidad y trabajo desempeñado.
                        </p>
                        <p>
                            En el Ecuador, la Constitución (Art. 328) establece que la remuneración será justa, con un salario digno que cubra al menos las necesidades básicas de la persona trabajadora, así como las de su familia, y será inembargable (salvo para el pago de pensiones alimenticias). Además, ningún trabajador que cumpla jornada completa puede percibir menos del Salario Básico Unificado (SBU) vigente o del salario mínimo sectorial correspondiente a su actividad.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Qué incluye? </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-2">
                            <li>✅ <strong>Sueldo.</strong> Es la estipulación fija que percibe el trabajador mensual o quincenalmente por su jornada ordinaria.</li>
                            <li>✅ <strong>Horas extras.</strong> Recargos económicos por el tiempo trabajado fuera del horario habitual: 50% de recargo en horas suplementarias y 100% en horas extraordinarias durante fines de semana o feriados.</li>
                            <li>✅ <strong>Décimo tercer sueldo.</strong> Conocido como bono navideño; equivale a la doceava parte de todo lo ganado durante el año y se paga de forma mensualizada o acumulada hasta el 24 de diciembre.</li>
                            <li>✅ <strong>Décimo cuarto sueldo.</strong> Conocido como bono escolar; equivale a un Salario Básico Unificado vigente y se paga mensualizado o acumulado según la región: hasta el 15 de marzo en Costa y Galápagos, y hasta el 15 de agosto en Sierra y Amazonía.</li>
                            <li>✅ <strong>Fondos de reserva (cuando corresponda).</strong> Beneficio equivalente al 8.33% de la remuneración aportada, al que tiene derecho todo trabajador después de cumplir su primer año de trabajo para el mismo empleador.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo</strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Carla trabaja en una empresa de servicios y durante una semana realiza varias horas extraordinarias para cumplir una entrega urgente. Al finalizar el mes, la empresa registra y paga correctamente las horas adicionales trabajadas.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            La remuneración justa implica reconocer y pagar oportunamente todos los conceptos que corresponden al trabajo realizado.
                        </p>
                        <p>
                            Adicionalmente, la empresa debe entregar a Carla su rol de pagos detallado, donde se especifique claramente cuánto corresponde a su sueldo base, cuánto al recargo por horas adicionales y cuáles son los descuentos legales (como el aporte personal al IESS). La transparencia y puntualidad en el pago fortalecen la confianza entre el trabajador y la organización.
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
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>¿Qué es la jornada laboral?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            Es el tiempo durante el cual una persona presta sus servicios al empleador.
                        </p>
                        <p>
                            La legislación ecuatoriana establece límites para proteger la salud y bienestar de los trabajadores.
                        </p>
                        <p>
                            Según el Código del Trabajo del Ecuador, la jornada ordinaria máxima es de 8 horas diarias y 40 horas semanales, seguidas de dos días consecutivos de descanso obligatorio (generalmente sábado y domingo). Si por la naturaleza del trabajo se labora en horario nocturno (entre las 19h00 y las 06h00 del día siguiente), el trabajador tiene derecho a la misma remuneración más un recargo del 25%. Asimismo, las leyes ecuatorianas reconocen el derecho a la desconexión, garantizando que el trabajador no sea obligado a responder mensajes o correos fuera de su horario laboral.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Importancia </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Evita exceso de trabajo.</strong> Pone un freno legal a las jornadas abusivas o agotadoras.</li>
                            <li>✅ <strong>Protege la salud física y mental.</strong> Previene el agotamiento extremo (síndrome de <em>"burnout"</em>).</li>
                            <li>✅ <strong>Permite equilibrio entre trabajo y vida personal.</strong> Garantiza tiempo para el estudio, la recreación y el cuidado familiar.</li>
                            <li>✅ <strong>Reduce riesgos laborales.</strong> Un trabajador descansado mantiene mayor concentración y sufre menos accidentes.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Pedro debe permanecer dos horas adicionales después de su jornada habitual para finalizar una actividad urgente. La empresa registra ese tiempo y aplica el pago correspondiente.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            El tiempo trabajado fuera de la jornada ordinaria debe ser reconocido conforme a la normativa laboral vigente.
                        </p>
                        <p>
                            Es importante recordar que, conforme al Código del Trabajo, las horas suplementarias (después de la jornada diaria) no pueden exceder de 4 horas en un mismo día, ni de 12 horas en la semana, y siempre deben contar con la autorización previa del empleador o supervisor para su debido registro.
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
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_4_4} />

                    <h2 className="text-xl">
                        <strong>¿Por qué son importantes?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            Las vacaciones permiten que los trabajadores descansen, recuperen energías y mejoren su bienestar físico y emocional.
                        </p>
                        <p>
                            El descanso es un derecho laboral reconocido por la legislación ecuatoriana.
                        </p>
                        <p>
                            En el Ecuador, todo trabajador que ha cumplido un año completo de servicio para el mismo empleador tiene derecho a gozar anualmente de un período ininterrumpido de 15 días de descanso, incluidos los días no laborables. Además, los trabajadores que han prestado servicios por más de cinco años en la misma empresa tienen derecho a gozar adicionalmente de un día de vacaciones por cada uno de los años excedentes (hasta un máximo de 15 días adicionales). Este derecho es irrenunciable: las vacaciones están diseñadas para ser descansadas, no para ser "compradas" o compensadas en dinero mientras el contrato sigue vigente.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Beneficios de las vacaciones </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Disminuyen el estrés.</strong> Permiten desconectarse de la presión y responsabilidades cotidianas.</li>
                            <li>✅ <strong>Mejoran la salud mental.</strong> Renuevan el estado de ánimo y previenen cuadros de ansiedad o fatiga crónica.</li>
                            <li>✅ <strong>Favorecen la productividad.</strong> Al regresar descansado, el colaborador trabaja con mayor enfoque, creatividad y eficiencia.</li>
                            <li>✅ <strong>Permiten compartir tiempo con la familia.</strong> Fortalecen los vínculos afectivos y el entorno social del trabajador.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Ana ha trabajado durante un año completo en la empresa y solicita sus vacaciones para descansar y compartir tiempo con su familia.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            Las vacaciones son un derecho laboral que permite la recuperación física y mental de las personas trabajadoras.
                        </p>
                        <p>
                            Durante esos 15 días de descanso, Ana seguirá recibiendo su remuneración normal íntegra, sin ningún tipo de descuento, y la empresa debe coordinar internamente sus tareas para que ella pueda disfrutar de su tiempo libre sin interrupciones laborales.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 4.5 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>4.5 Seguridad Social </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>¿Qué es la seguridad social?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            La seguridad social protege a los trabajadores frente a situaciones que pueden afectar su bienestar económico y de salud.
                        </p>
                        <p>
                            En Ecuador, esta protección es administrada por el Instituto Ecuatoriano de Seguridad Social (IESS).
                        </p>
                        <p>
                            La Constitución del Ecuador declara que la seguridad social es un derecho irrenunciable de todas las personas, regido por los principios de solidaridad, obligatoriedad y universalidad. Todo empleador está obligado a inscribir al trabajador en el IESS desde el primer día de labores (incluso durante el período de prueba) y a pagar puntualmente los aportes mensuales correspondientes.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Beneficios principales </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Atención médica.</strong> Consultas generales y de especialidad, hospitalización, cirugías, odontología y entrega de medicamentos.</li>
                            <li>✅ <strong>Subsidios por enfermedad.</strong> Pago de un porcentaje del sueldo cuando el trabajador tiene reposo médico certificado por enfermedad común o maternidad.</li>
                            <li>✅ <strong>Riesgos del trabajo.</strong> Atención integral, rehabilitación e indemnizaciones si ocurre un accidente laboral o enfermedad profesional.</li>
                            <li>✅ <strong>Jubilación.</strong> Pensión mensual vitalicia al cumplir los requisitos de edad y años de aportación por vejez o invalidez.</li>
                            <li>✅ <strong>Prestaciones económicas.</strong> Acceso a préstamos quirografarios e hipotecarios, seguro de desempleo y auxilio de funerales.</li>
                            <li>✅ <strong>Protección para la familia.</strong> Cobertura de salud gratuita para los hijos menores de 18 años del afiliado y extensión de salud para el cónyuge.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Jorge sufre una enfermedad que le impide trabajar temporalmente. Gracias a su afiliación al IESS, puede acceder a atención médica y prestaciones establecidas por la ley.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            La seguridad social brinda protección ante situaciones que pueden afectar la salud o los ingresos de los trabajadores.
                        </p>
                        <p>
                            Si Jorge no hubiera estado afiliado al IESS, habría tenido que asumir de su propio bolsillo los costos médicos y habría quedado sin sustento económico durante su incapacidad. Por ello, verificar periódicamente en el portal web del IESS que las aportaciones estén al día es una buena práctica para todo trabajador.
                        </p>
                    </div>
                    <ImageBase src={img_1_4_5} />
                </div>
            </section>

            {/* ---------- Conclusión ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Conclusión de la Unidad 4 </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            El trabajo digno se construye día a día mediante el respeto a cuatro pilares fundamentales: una remuneración justa y puntual, jornadas laborales equilibradas, vacaciones efectivas para el descanso y la afiliación obligatoria a la seguridad social. Garantizar estos derechos asegura el bienestar integral del trabajador y contribuye al desarrollo sostenible de toda organización en el Ecuador.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>🎥 Video: ¿Qué significa trabajo digno? </strong>
                    </h2>
                    <div className="pl-4 space-y-2">

                        <VideoBase src="https://www.youtube.com/embed/1OEqB05EK9E?si=D3zY2aiQbjllbYdV" title='Trabajo Digno y Decente' />
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
                    <div className="pl-4 space-y-4">
                        <p>
                            Reconocer la importancia de la igualdad de oportunidades en el acceso, permanencia y desarrollo dentro del trabajo.
                        </p>
                        <p>
                            Asi mismo, comprenderá cómo se aplican las normas ecuatorianas e internacionales de igualdad en cada etapa de la vida laboral —desde la convocatoria y la entrevista hasta la capacitación y los ascensos—, identificando buenas prácticas para eliminar prejuicios y construir espacios de trabajo inclusivos.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 5.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.1 Acceso al Empleo </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_5_1} />

                    <h2 className="text-xl">
                        <strong>¿Qué significa igualdad en el acceso al empleo?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            Todas las personas deben tener las mismas oportunidades para participar en procesos de selección y contratación.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Las decisiones deben basarse en: </strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Competencias.</strong> Capacidad demostrada para resolver problemas y ejecutar las funciones del puesto.</li>
                            <li>✅ <strong>Formación.</strong> Estudios académicos, certificaciones técnicas o capacitación pertinente para el cargo.</li>
                            <li>✅ <strong>Experiencia.</strong> Trayectoria laboral previa o conocimientos prácticos adquiridos.</li>
                            <li>✅ <strong>Habilidades.</strong> Destrezas técnicas y habilidades blandas como trabajo en equipo, comunicación o liderazgo.</li>
                        </ul>
                        <p>
                            En el Ecuador, la Constitución (Art. 66 numeral 4 y Art. 326 numeral 5) garantiza el derecho a la igualdad formal, igualdad material y no discriminación, disponiendo que toda persona tendrá derecho a desarrollar sus labores en un ambiente adecuado y propicio que garantice su igualdad de oportunidades. Por ello, desde el anuncio de una vacante, las empresas deben redactar perfiles neutros e inclusivos, enfocándose únicamente en los requisitos reales del cargo y evitando filtros arbitrarios que cierren la puerta a talento calificado.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Laura y Miguel participan en un proceso de selección. Ambos cumplen los requisitos del cargo y son evaluados considerando únicamente su formación, experiencia y habilidades para desempeñar las funciones del puesto.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            El acceso al empleo debe basarse en criterios objetivos relacionados con las competencias de cada persona y no en características personales que no estén relacionadas con el trabajo.
                        </p>
                        <p>
                            Para que esta evaluación sea verdaderamente justa, es recomendable que la empresa utilice herramientas estandarizadas —como pruebas técnicas prácticas, entrevistas estructuradas con las mismas preguntas para ambos candidatos y rúbricas de calificación claras— que eviten que las opiniones subjetivas del entrevistador influyan en la decisión final.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 5.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.2 Selección sin Discriminación </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <ImageBase src={img_1_5_2} />

                    <h2 className="text-xl">
                        <strong>¿Qué significa?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            Las empresas no deben excluir personas por su sexo, edad, embarazo, discapacidad, religión o nacionalidad.
                        </p>
                        <p>
                            La selección debe realizarse considerando únicamente criterios objetivos relacionados con el puesto.
                        </p>
                        <p>
                            En la práctica laboral ecuatoriana, la selección sin discriminación implica también el respeto a la intimidad y dignidad del postulante durante las entrevistas. Está prohibido realizar preguntas invasivas sobre la vida privada, planes de maternidad o paternidad, estado civil, afiliación política, orientación sexual o estado de salud (como exigir pruebas de embarazo o exámenes médicos discriminatorios que no guarden relación directa con la capacidad física para el puesto). Además, en el caso de personas con discapacidad, la ley ecuatoriana promueve la inclusión laboral obligatoria (4% en empresas con 25 o más trabajadores), garantizando procesos accesibles y ajustes razonables.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Ana postula a una vacante y cumple con todos los requisitos. Durante la entrevista se le informa que no podrá ser considerada para el cargo porque está embarazada.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            Excluir a una persona de un proceso de selección por embarazo constituye una práctica discriminatoria y vulnera el principio de igualdad de oportunidades.
                        </p>
                        <p>
                            Esta conducta viola directamente el Artículo 43 de la Constitución del Ecuador, el cual prohíbe expresamente cualquier forma de discriminación contra las mujeres embarazadas y en período de lactancia en el ámbito laboral. El embarazo es una condición protegida por el Estado y jamás puede ser utilizado como un motivo para negar el acceso al trabajo o limitar el desarrollo profesional de una mujer.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 5.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>5.3 Igualdad de Trato </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>¿Qué significa igualdad de trato?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            Todas las personas trabajadoras deben recibir el mismo respeto, oportunidades y acceso a beneficios laborales.
                        </p>
                        <p>
                            La igualdad de oportunidades no termina el día en que se firma el contrato; debe mantenerse viva durante toda la permanencia del trabajador en la empresa. Esto significa garantizar equidad interna: asegurar que no existan "grupos privilegiados" ni barreras invisibles (como el denominado <em>techo de cristal</em> que dificulta que las mujeres o personas de grupos minoritarios lleguen a puestos directivos) y que las políticas de reconocimiento, horarios, permisos y promociones se apliquen con transparencia para toda la plantilla.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplos </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Igual acceso a capacitación.</strong> Todos los colaboradores tienen la oportunidad de actualizar sus conocimientos y adquirir nuevas herramientas.</li>
                            <li>✅ <strong>Igual acceso a ascensos.</strong> Las promociones internas se deciden mediante concursos abiertos y evaluaciones de desempeño objetivas.</li>
                            <li>✅ <strong>Igualdad salarial para trabajos de igual valor.</strong> Aplicación efectiva del principio constitucional y del Convenio 100 de la OIT sin brechas salariales por género.</li>
                            <li>✅ <strong>Igual trato y respeto.</strong> Erradicación de favoritismos, apodos, burlas o tratos diferenciados según el cargo o condición personal.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Ejemplo práctico </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            La empresa ofrece programas de capacitación y oportunidades de ascenso a todas las personas trabajadoras bajo los mismos criterios de evaluación y desempeño.
                        </p>
                        <p>
                            <strong>Análisis: </strong>
                            La igualdad de trato garantiza que todas las personas tengan acceso a las mismas oportunidades de desarrollo profesional dentro de la organización.
                        </p>
                        <p>
                            Cuando una empresa transparenta los requisitos necesarios para ascender y ofrece capacitación continua en igualdad de condiciones, aumenta la motivación del personal, reduce la rotación laboral y fortalece el sentido de pertenencia de todos sus integrantes.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Por qué es importante la igualdad de oportunidades? </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Favorece ambientes laborales inclusivos.</strong> Donde cada persona se siente valorada y segura de aportar sus ideas.</li>
                            <li>✅ <strong>Permite aprovechar el talento de todas las personas.</strong> La diversidad de experiencias y perspectivas enriquece la solución de problemas.</li>
                            <li>✅ <strong>Reduce la discriminación.</strong> Previene conflictos internos y evita sanciones legales ante el Ministerio del Trabajo.</li>
                            <li>✅ <strong>Fortalece el respeto y la convivencia laboral.</strong> Construye relaciones basadas en la empatía y la colaboración.</li>
                            <li>✅ <strong>Contribuye al crecimiento de la organización.</strong> Equipos diversos y tratados con justicia son más innovadores y productivos.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Video ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>🎥 Video: Todos tenemos las mismas oportunidades </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4 space-y-4">

                        <VideoBase src="https://www.youtube.com/embed/kuJA6MbED_4?si=bhkEop4PwjXtyd0B" title="Módulo 1: Derechos Laborales de Mujeres y Hombres" />
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
                            Reconocer los derechos relacionados con la maternidad y paternidad y promover la corresponsabilidad familiar.
                        </p>
                        <p>
                            A través del estudio de esta unidad, usted conocerá los plazos exactos, garantías de estabilidad y beneficios que la Constitución y el Código del Trabajo del Ecuador otorgan a madres y padres trabajadores, comprendiendo que el cuidado de los hijos es una responsabilidad compartida que fortalece tanto a las familias como a las organizaciones.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- 6.1 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.1 Licencias </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>¿Qué son?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            Son períodos autorizados por ley para que madres y padres puedan atender necesidades familiares relacionadas con el nacimiento o cuidado de sus hijos.
                        </p>
                        <p>
                            Durante estas licencias, el contrato de trabajo se mantiene plenamente vigente, el trabajador o trabajadora conserva su puesto y sigue percibiendo su remuneración conforme a la ley. En el Ecuador, el Código del Trabajo establece los siguientes tipos y duraciones de licencias remuneradas:
                        </p>

                        <h3 className="text-lg"><strong>Licencia por maternidad</strong></h3>
                        <div className="pl-4">
                            <p>
                                Toda mujer trabajadora tiene derecho a una licencia con remuneración completa de doce (12) semanas (84 días) por el nacimiento de su hija o hijo. En caso de nacimientos múltiples (gemelos, mellizos, etc.), este plazo se extiende por diez (10) días adicionales. Esta licencia puede iniciarse hasta dos semanas antes de la fecha probable del parto, previa presentación del certificado médico correspondiente.
                            </p>
                        </div>

                        <h3 className="text-lg"><strong>Licencia por paternidad</strong></h3>
                        <div className="pl-4">
                            <p>
                                El padre trabajador tiene derecho a licencia con remuneración por quince (15) días contados desde el nacimiento de su hija o hijo cuando el parto es normal. En los casos de nacimientos múltiples o por cesárea, la licencia se prolonga por cinco (5) días más (es decir, 20 días en total). Si la hija o hijo nace prematuro o en condiciones de cuidado especial, la licencia se prolongará por ocho (8) días más; y si nace con una enfermedad degenerativa, terminal o irreversible, o con un grado de discapacidad severa, el padre tendrá derecho a veinticinco (25) días de licencia remunerada.
                            </p>
                        </div>

                        <h3 className="text-lg"><strong>Licencia por adopción</strong></h3>
                        <div className="pl-4">
                            <p>
                                Los padres adoptivos tienen derecho a licencia con remuneración por quince (15) días, los mismos que correrán a partir de la fecha en que la hija o el hijo le fuere legalmente entregado.
                            </p>
                        </div>

                        <h3 className="text-lg"><strong>Licencia para el cuidado de hijos hospitalizados o con patologías degenerativas</strong></h3>
                        <div className="pl-4">
                            <p>
                                La madre y el padre trabajadores tienen derecho a veinticinco (25) días de licencia con remuneración para atender los casos de hija o hijo hospitalizado o con patologías degenerativas, licencia que podrá ser tomada de forma conjunta o alternada entre ambos progenitores.
                            </p>
                        </div>

                        <h3 className="text-lg"><strong>Licencia sin remuneración para el cuidado de los hijos</strong></h3>
                        <div className="pl-4 space-y-2">
                            <p>
                                Concluida la licencia de maternidad o paternidad, la madre o el padre trabajador podrá solicitar dentro de los tres días posteriores una licencia opcional y voluntaria sin remuneración por hasta quince (15) meses adicionales para atender al cuidado de los hijos, conservando su derecho a regresar a su puesto de trabajo al finalizar este período.
                            </p>
                            <p className="text-sm italic">
                                (Art. 152 del Código del Trabajo del Ecuador – Reforma de la Ley Orgánica del Derecho al Cuidado Humano)
                            </p>
                        </div>
                    </div>

                    <ImageBase src={img_1_6_1} />
                </div>
            </section>

            {/* ---------- 6.2 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.2 Lactancia </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>Protección de la Lactancia</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            La legislación ecuatoriana protege a las madres durante el período de lactancia, permitiendo condiciones adecuadas para el cuidado de sus hijos.
                        </p>
                        <p>
                            De acuerdo con la reforma vigente del Código del Trabajo del Ecuador, durante los quince (15) meses posteriores al parto, la jornada de la madre lactante durará seis (6) horas diarias, de conformidad con la necesidad de la beneficiaria. Es decir, la trabajadora reduce su jornada en dos (2) horas diarias sin que por ello se le pueda descontar un solo centavo de su sueldo o beneficios sociales.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Cómo se aplica este derecho en la práctica?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            La madre trabajadora, en acuerdo con su empleador, puede elegir cómo distribuir esas dos horas diarias: por ejemplo, ingresar dos horas más tarde, salir dos horas más temprano o tomar intervalos durante la jornada para alimentar a su bebé o extraer leche materna.
                        </p>
                        <p>
                            En las empresas o centros de trabajo que cuenten con cincuenta (50) o más trabajadores, el empleador tiene la obligación de establecer un lactario institucional (un espacio limpio, privado, cómodo y equipado con refrigeración) o un servicio de cuidado infantil adecuado para los hijos de sus trabajadores.
                        </p>
                        <p>
                            Este derecho es irrenunciable: ninguna empresa puede obligar a la madre a trabajar las 8 horas completas durante esos 15 meses ni compensarle esas dos horas con dinero en lugar de otorgarle el tiempo efectivo para el cuidado de su bebé.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Beneficios </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Favorece la salud del bebé.</strong> La lactancia materna proporciona los nutrientes ideales y fortalece el sistema inmunológico del recién nacido.</li>
                            <li>✅ <strong>Protege la salud materna.</strong> Ayuda a la recuperación física posparto y reduce el riesgo de diversas enfermedades en la madre.</li>
                            <li>✅ <strong>Fortalece el vínculo familiar.</strong> Permite mantener el apego afectivo y la cercanía emocional entre la madre y su hijo.</li>
                            <li>✅ <strong>Mejora el clima y compromiso laboral.</strong> Una madre que cuenta con facilidades reales para su lactancia trabaja con mayor tranquilidad, enfoque y lealtad hacia su organización.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- 6.3 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.3 Protección a la Maternidad </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>¿Qué protege la ley?</strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Embarazo.</strong> Garantía de atención médica, permisos prenatales y adaptación de tareas si el puesto implica esfuerzos físicos riesgosos.</li>
                            <li>✅ <strong>Licencias.</strong> Respeto íntegro a las 12 semanas de maternidad y a los permisos médicos necesarios sin descuentos salariales.</li>
                            <li>✅ <strong>Estabilidad laboral.</strong> Prohibición absoluta de despedir a una mujer por causa de su embarazo o durante el período de lactancia.</li>
                            <li>✅ <strong>Igualdad de oportunidades.</strong> Derecho a participar en capacitaciones, evaluaciones y ascensos en las mismas condiciones que el resto del personal.</li>
                            <li>✅ <strong>No discriminación.</strong> Prohibición de exigir pruebas de embarazo para contratar o renovar un contrato de trabajo.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>6.3.1 Protección especial contra el despido ineficaz</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            En el Ecuador, la Constitución (Art. 43) y el Código del Trabajo otorgan una estabilidad laboral reforzada a la mujer embarazada y en período de lactancia. Si un empleador decide despedir a una trabajadora mientras se encuentra embarazada o asociada a su condición de gestación o maternidad, ese despido se considera <strong>ineficaz</strong>.
                        </p>
                        <p>
                            <strong>¿Qué significa que sea ineficaz?</strong> Que el despido no tiene validez legal: la trabajadora tiene derecho a acudir ante un juez de trabajo para exigir su reintegro inmediato a su puesto en las mismas condiciones, más el pago de todas las remuneraciones dejadas de percibir con un recargo del 10%; o, si ella decide no regresar a esa empresa, tiene derecho a recibir una indemnización especial equivalente a un año de remuneración, adicional a las indemnizaciones normales por despido intempestivo.
                        </p>

                        <h3 className="text-lg"><strong>Ejemplo práctico</strong></h3>
                        <div className="pl-4">
                            <p>
                                Camila informa a su jefe inmediato que tiene dos meses de embarazo. Tres semanas después, la empresa le notifica que su puesto será eliminado sin una causa legal justificada. Al tratarse de un despido durante el embarazo, la ley ecuatoriana lo declara ineficaz, protegiendo la estabilidad económica y laboral de Camila y su bebé.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- 6.4 ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>6.4 Responsabilidades Compartidas </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <h2 className="text-xl">
                        <strong>¿Qué significa corresponsabilidad?</strong>
                    </h2>
                    <div className="pl-4 space-y-4">
                        <p>
                            El cuidado de los hijos y las responsabilidades familiares corresponden tanto a madres como a padres.
                        </p>
                        <p>
                            Históricamente, las tareas del hogar y el cuidado de los hijos recayeron casi de manera exclusiva sobre las mujeres, lo que limitó sus oportunidades de crecimiento profesional y sobrecargó su jornada diaria. La corresponsabilidad familiar rompe con ese esquema tradicional y promueve una distribución justa y equitativa del tiempo, las tareas domésticas y la crianza entre hombres y mujeres. En el ámbito laboral, impulsar la corresponsabilidad significa reconocer que los trabajadores hombres también son padres y cuidadores, y que tienen el derecho y el deber de participar activamente en la vida familiar.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>¿Cómo pueden las empresas y trabajadores fomentar la corresponsabilidad?</strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respetando y alentando que los padres utilicen íntegramente sus días de licencia por paternidad y permisos médicos para acompañar a sus hijos.</li>
                            <li>Evitando comentarios burlescos o prejuicios hacia los hombres que solicitan permisos para asistir a reuniones escolares o citas pediátricas de sus hijos.</li>
                            <li>Promoviendo horarios flexibles y una cultura organizacional que valore el equilibrio entre la vida laboral y personal tanto para mujeres como para hombres.</li>
                        </ul>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>Beneficios </strong>
                    </h2>
                    <div className="pl-4">
                        <ul className="pl-4 space-y-1">
                            <li>✅ <strong>Mejor equilibrio familiar.</strong> Permite distribuir de manera justa las cargas del hogar y evitar el agotamiento físico y mental de uno solo de los progenitores.</li>
                            <li>✅ <strong>Mayor bienestar.</strong> Reduce el estrés financiero y emocional dentro del hogar, generando ambientes familiares más armoniosos.</li>
                            <li>✅ <strong>Igualdad de oportunidades.</strong> Al compartir el cuidado de los hijos, las mujeres tienen mayores posibilidades reales de crecer profesionalmente y acceder a cargos de liderazgo.</li>
                            <li>✅ <strong>Desarrollo saludable de los hijos.</strong> La presencia activa y afectiva tanto de la madre como del padre fortalece la seguridad emocional y el desarrollo integral de los niños.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------- Conclusión ---------- */}
            <section className="mb-12">
                <h1 className="text-2xl mb-4">
                    <strong>Conclusión de la Unidad 6 </strong>
                </h1>
                <div className="pl-4 border-l-4 border-gray-200 space-y-4 leading-7">
                    <div className="pl-4">
                        <p>
                            La protección de la maternidad, la paternidad y la lactancia no representa una carga para las empresas, sino una inversión en el bienestar humano y el futuro de la sociedad. Garantizar la estabilidad laboral de las madres, respetar las licencias de los padres y fomentar la corresponsabilidad familiar permite construir organizaciones más humanas, justas y comprometidas con los derechos fundamentales en el Ecuador.
                        </p>
                    </div>

                    <h2 className="text-xl pt-2">
                        <strong>🎥 Video: Derechos de Maternidad y Paternidad </strong>
                    </h2>
                    <div className="pl-4 space-y-2">
                        <p>
                            Permiso de paternidad y maternidad en Ecuador 2026: cuántos días son
                        </p>
                        <VideoBase src="https://www.youtube.com/embed/ZxxQzDo_lQM?si=p0Dt9ZoMj623SGyI" title="Permiso de paternidad y maternidad en Ecuador 2026: cuántos días son" />
                    </div>
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