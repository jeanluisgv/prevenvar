import type { Section } from './types'


function Overview() {
    return (
        <>
            <h1>
                DERECHOS LABORALES, IGUALDAD LABORAL, IGUALDAD DE GENERO, NO           DISCRIMINACION Y TRABAJO DE IGUAL VALOR

            </h1>
            <h3><strong>Duracion Total:</strong> 40 Horas</h3>
        </>
    )
}




function Bienvenida() {
    return (
        <>
            <p className="leading-7">
                Bienvenido(a) al curso <strong> "Derechos Laborales, Igualdad Laboral, Igualdad de Género, No Discriminación y Trabajo de Igual Valor".
                </strong> <br />


            </p>
            <iframe src="https://www.youtube.com/embed/W7B2akoBS4U?si=REK6EBV6Ts2KC5IJ" className="w-full aspect-video rounded-lg"></iframe>

            <a
                href="https://drive.google.com/file/d/1x1yFlHvgZKZjT1c_88fEIT4lqkN2U8qQ/preview"
                target="_blank"
                rel="noopener noreferrer"
                className='underline text-blue-500'
            >
                Acuerdo del ministerio
            </a>
        </>
    )
}

const intro: Section = {
    id: 'introduccion',
    title: 'Introducción',
    waitSeconds: 90,
    Overview,
    subsections: [
        { id: 'bienvenida', title: 'Bienvenida', Content: Bienvenida },
    ],

    // The test at the end of this section. Delete this whole block for no test.
    evaluation: {
        title: 'Evaluación Diagnóstica General',
        passingScore: 0,        // or a number, e.g. 2
        shuffleOptions: false,    // mix up the order of the options each attempt
        intro: (<>Antes de iniciar el programa de capacitación, le invitamos a responder la siguiente evaluación diagnóstica. < br />
            Esta evaluación no tiene calificación y no influye en la aprobación del curso. < br />

            Su finalidad es identificar los conocimientos previos que posee sobre derechos laborales, igualdad de género, igualdad salarial, prevención de la violencia, no discriminación e inclusión laboral. < br />

            Los resultados permitirán reconocer los temas que serán fortalecidos durante el desarrollo del curso y comparar posteriormente los conocimientos adquiridos al finalizar la capacitación. < br />

            Seleccione la respuesta que considere correcta en cada pregunta. < br /></>),
        showCorrectAnswers: false,// after failing, show the right answers
        recordEvaluation: true,  // save every attempt's answers and score in the evaluations table
        questions: [
            {
                type: 'single',
                prompt: '¿Cuál es la institución encargada de supervisar el cumplimiento de la normativa laboral en Ecuador?',
                options: ['Registro Civil', 'Ministerio del Trabajo', 'Municipio', 'ANT'],
                correct: 'Ministerio del Trabajo'
            },
            {
                type: 'single',
                prompt: 'Los derechos laborales son:',
                options: ['Beneficios opcionales', 'Derechos irrenunciables de las personas trabajadoras', 'Acuerdos voluntarios', 'Privilegios empresariales'],
                correct: 'Derechos irrenunciables de las personas trabajadoras'
            },
            {
                type: 'single',
                prompt: 'La igualdad de género implica:',
                options: ['Otorgar privilegios a un grupo', 'Garantizar igualdad de oportunidades para todas las personas', 'Contratar únicamente mujeres', 'Contratar únicamente hombres'],
                correct: 'Garantizar igualdad de oportunidades para todas las personas'
            },
            {
                type: 'single',
                prompt: 'La brecha salarial corresponde a:',
                options: ['Diferencias justificadas por experiencia', 'Diferencias injustificadas de remuneración', 'Pago de beneficios', 'Sueldo básico'],
                correct: 'Diferencias injustificadas de remuneración'
            },
            {
                type: 'single',
                prompt: '¿Qué significa trabajo de igual valor?',
                options: ['Mismo uniforme', 'Puestos con responsabilidades, esfuerzo y competencias equivalentes', 'Igual horario', 'Igual antigüedad'],
                correct: 'Puestos con responsabilidades, esfuerzo y competencias equivalentes'
            },
            {
                type: 'single',
                prompt: '¿Cuál de las siguientes situaciones podría constituir discriminación laboral?',
                options: ['Evaluar competencias', 'Negar una oportunidad por la edad de la persona', 'Capacitar trabajadores', 'Realizar entrevistas'],
                correct: 'Negar una oportunidad por la edad de la persona'
            },
            {
                type: 'single',
                prompt: '¿Qué es el acoso laboral?',
                options: ['Una observación ocasional', 'Conductas repetidas que afectan la dignidad de una persona', 'Una capacitación', 'Una evaluación'],
                correct: 'Conductas repetidas que afectan la dignidad de una persona'
            },
            {
                type: 'single',
                prompt: '¿Cuál es una acción adecuada ante una situación de violencia o acoso?',
                options: ['Ignorar el problema', 'Utilizar los canales de denuncia establecidos', 'Publicarlo en redes sociales', 'Guardar silencio'],
                correct: 'Utilizar los canales de denuncia establecidos'
            },
            {
                type: 'single',
                prompt: 'La inclusión laboral busca:',
                options: ['Favorecer únicamente a ciertos grupos', 'Garantizar igualdad de oportunidades para todas las personas', 'Limitar contrataciones', 'Reducir la diversidad'],
                correct: 'Garantizar igualdad de oportunidades para todas las personas'
            },
            {
                type: 'single',
                prompt: 'Las decisiones de contratación, capacitación y ascenso deberían basarse principalmente en:',
                options: ['Edad', 'Género', 'Méritos, competencias y desempeño', 'Preferencias personales'],
                correct: 'Méritos, competencias y desempeño'
            }
        ],
    },
}

export default intro
