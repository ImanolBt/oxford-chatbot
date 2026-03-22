// lib/knowledge.js

export const schoolInfo = {
  nombre: "Unidad Educativa Oxford",

  general: {
    direccion: "[Dirección de la institución]",
    telefono: "[Número de teléfono]",
    email: "[Correo institucional]",
    horario_atencion: "Lunes a viernes de 07:00 a 14:00",
    pagina_web: "[URL del sitio web]",
  },

  horarios: {
    jornada: "Matutina: 07:20 - 13:40",
    ingreso: "07:20 (Actividades Iniciales)",
    salida: "13:40",
    recreo: "10:18 - 11:00",
    estructura: "Actividades Iniciales (7:20-7:30), Animación a la lectura (7:30-8:12), 7 períodos de clase",
    nota: "Los estudiantes deben llegar puntualmente. Después de las 07:20 se registra atraso.",
  },

  horarios_paralelos: {
    "A": {
      lunes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Inglés", docente: "Toapanta Víctor" },
        { hora: "9:36-10:18", materia: "Orientación Vocacional (RN)", docente: "Cevallos Daniel" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-12:20", materia: "Lengua y Literatura", docente: "Arias Norma" },
        { hora: "12:20-13:40", materia: "Matemática", docente: "Gallo Juan" },
      ],
      martes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "9:36-10:18", materia: "Ciencias Naturales", docente: "Cruz Verónica" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-12:20", materia: "Lengua y Literatura", docente: "Arias Norma" },
        { hora: "12:20-13:00", materia: "Educación Física", docente: "Santos Nelson" },
        { hora: "13:00-13:40", materia: "Estudios Sociales", docente: "Pelaez Jorge" },
      ],
      miercoles: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Ciencias Naturales", docente: "Cruz Verónica" },
        { hora: "9:36-10:18", materia: "Ed. Cul. y Artística", docente: "Yugcha Marco" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-12:20", materia: "Inglés", docente: "Toapanta Víctor" },
        { hora: "12:20-13:00", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "13:00-13:40", materia: "Estudios Sociales", docente: "Pelaez Jorge" },
      ],
      jueves: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Estudios Sociales", docente: "Pelaez Jorge" },
        { hora: "9:36-10:18", materia: "Lengua y Literatura", docente: "Arias Norma" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-12:20", materia: "Tecnología", docente: "Bolaños Sharlyd" },
        { hora: "12:20-13:00", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "13:00-13:40", materia: "Educación Física", docente: "Santos Nelson" },
      ],
      viernes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Inglés", docente: "Toapanta Víctor" },
        { hora: "9:36-10:18", materia: "Orientación Vocacional (RN)", docente: "Cevallos Daniel" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-12:20", materia: "Lengua y Literatura / Estudios Sociales", docente: "Arias Norma / Pelaez Jorge" },
        { hora: "12:20-13:00", materia: "Ciencias Naturales", docente: "Cruz Verónica" },
        { hora: "13:00-13:40", materia: "Tecnología", docente: "Bolaños Sharlyd" },
      ],
    },
    "B": {
      lunes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Inglés", docente: "Torres Isabel" },
        { hora: "9:36-10:18", materia: "Ciencias Naturales", docente: "Villacís Keyla" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Ciencias Naturales", docente: "Villacís Keyla" },
        { hora: "11:40-12:20", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "12:20-13:00", materia: "Ed. Cul. y Artística", docente: "Yugcha Marco" },
        { hora: "13:00-13:40", materia: "Educación Física", docente: "Santos Nelson" },
      ],
      martes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Estudios Sociales / Lengua y Literatura", docente: "Pelaez Jorge / Arias Norma" },
        { hora: "9:36-10:18", materia: "Acompañamiento Integral", docente: "Gallo María" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Ciencias Naturales", docente: "Villacís Keyla" },
        { hora: "11:40-12:20", materia: "Orientación Vocacional (RN)", docente: "Cevallos Daniel" },
        { hora: "12:20-13:00", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "13:00-13:40", materia: "Matemática", docente: "Gallo Juan" },
      ],
      miercoles: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Tecnología", docente: "Bolaños Sharlyd" },
        { hora: "9:36-10:18", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Inglés", docente: "Torres Isabel" },
        { hora: "11:40-12:20", materia: "Inglés", docente: "Torres Isabel" },
        { hora: "12:20-13:00", materia: "Ed. Cul. y Artística", docente: "Yugcha Marco" },
        { hora: "13:00-13:40", materia: "Lengua y Literatura", docente: "Arias Norma" },
      ],
      jueves: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Lengua y Literatura", docente: "Arias Norma" },
        { hora: "9:36-10:18", materia: "Estudios Sociales", docente: "Pelaez Jorge" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Estudios Sociales", docente: "Pelaez Jorge" },
        { hora: "11:40-12:20", materia: "Educación Física", docente: "Santos Nelson" },
        { hora: "12:20-13:00", materia: "Tecnología", docente: "Bolaños Sharlyd" },
        { hora: "13:00-13:40", materia: "Ciencias Naturales", docente: "Villacís Keyla" },
      ],
      viernes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Inglés / Lengua y Literatura", docente: "Torres Isabel / Arias Norma" },
        { hora: "9:36-10:18", materia: "Orientación Vocacional (RN)", docente: "Cevallos Daniel" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-12:20", materia: "Estudios Sociales / Matemática", docente: "Pelaez Jorge / Gallo Juan" },
        { hora: "12:20-13:00", materia: "Ciencias Naturales", docente: "Cruz Verónica" },
        { hora: "13:00-13:40", materia: "Orientación Vocacional (RN)", docente: "Cevallos Daniel" },
      ],
    },
    "C": {
      lunes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Inglés" },
        { hora: "9:36-10:18", materia: "Lengua y Literatura" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Orientación Vocacional (RN)" },
      ],
      martes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Estudios Sociales / Ciencias Naturales" },
        { hora: "9:36-10:18", materia: "Matemática" },
      ],
      miercoles: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Ed. Cul. y Artística / Matemática" },
        { hora: "9:36-10:18", materia: "Inglés" },
      ],
      jueves: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Matemática / Tecnología" },
        { hora: "9:36-10:18", materia: "Lengua y Literatura / Animación a la lectura" },
      ],
      viernes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "Viernes", materia: "NO HAY TAREAS" },
      ],
    },
    "D": {
      lunes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Inglés", docente: "Evelyn Pico" },
        { hora: "9:36-10:18", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "11:40-12:20", materia: "Ed. Cul. y Artística", docente: "Yugcha Marco" },
        { hora: "12:20-13:00", materia: "Estudios Sociales", docente: "Pelaez Jorge" },
        { hora: "13:00-13:40", materia: "Educación Física", docente: "Santos Nelson" },
      ],
      martes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Tecnología", docente: "Bolaños Sharlyd" },
        { hora: "9:36-10:18", materia: "Lengua y Literatura", docente: "Arias Norma" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Ciencias Naturales", docente: "Cruz Verónica" },
        { hora: "11:40-12:20", materia: "Orientación Vocacional (RN)", docente: "Cevallos Daniel" },
        { hora: "12:20-13:00", materia: "Estudios Sociales", docente: "Pelaez Jorge" },
        { hora: "13:00-13:40", materia: "Educación Física", docente: "Santos Nelson" },
      ],
      miercoles: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Lengua y Literatura", docente: "Arias Norma" },
        { hora: "9:36-10:18", materia: "Ciencias Naturales", docente: "Cruz Verónica" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Inglés", docente: "Evelyn Pico" },
        { hora: "11:40-12:20", materia: "Inglés", docente: "Evelyn Pico" },
        { hora: "12:20-13:00", materia: "Estudios Sociales", docente: "Pelaez Jorge" },
        { hora: "13:00-13:40", materia: "Matemática", docente: "Gallo Juan" },
      ],
      jueves: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Educación Física / Ciencias Naturales", docente: "Santos Nelson / Cruz Verónica" },
        { hora: "9:36-10:18", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "11:40-12:20", materia: "Lengua y Literatura", docente: "Arias Norma" },
        { hora: "12:20-13:00", materia: "Acompañamiento Integral", docente: "Gallo María" },
        { hora: "13:00-13:40", materia: "Orientación Vocacional (RN)", docente: "Cevallos Daniel" },
      ],
      viernes: [
        { hora: "7:20-7:30", materia: "Actividades Iniciales" },
        { hora: "7:30-8:12", materia: "Animación a la lectura" },
        { hora: "8:12-9:36", materia: "Inglés / Tecnología", docente: "Evelyn Pico / Bolaños Sharlyd" },
        { hora: "9:36-10:18", materia: "Estudios Sociales", docente: "Pelaez Jorge" },
        { hora: "10:18-11:00", materia: "RECESO" },
        { hora: "11:00-11:40", materia: "Matemática", docente: "Gallo Juan" },
        { hora: "11:40-12:20", materia: "Lengua y Literatura", docente: "Arias Norma" },
        { hora: "12:20-13:00", materia: "Lengua y Literatura", docente: "Arias Norma" },
        { hora: "13:00-13:40", materia: "Ed. Cul. y Artística", docente: "Yugcha Marco" },
      ],
    },
  },

  materias: [
    { nombre: "Lengua y Literatura", horas: 6 },
    { nombre: "Matemáticas", horas: 6 },
    { nombre: "Ciencias Naturales", horas: 5 },
    { nombre: "Estudios Sociales", horas: 5 },
    { nombre: "Inglés", horas: 5 },
    { nombre: "Educación Física", horas: 5 },
    { nombre: "Educación Cultural y Artística", horas: 3 },
    { nombre: "Tecnología / Informática", horas: 3 },
    { nombre: "Orientación Vocacional (RN)", horas: 2 },
    { nombre: "Acompañamiento Integral", horas: 1 },
    { nombre: "Proyectos Escolares", horas: 2 },
  ],

  uniforme: {
    diario: "Camisa blanca con escudo institucional, pantalón/falda azul marino, zapatos negros, medias azules.",
    educacion_fisica: "Camiseta institucional deportiva, pantaloneta/calentador azul, zapatos deportivos blancos.",
    nota: "El uniforme debe estar limpio, en buen estado y completo todos los días.",
  },

  normas: [
    "Respetar a compañeros, docentes y personal administrativo.",
    "No usar celulares durante clases sin autorización del docente.",
    "Mantener limpia el aula y los espacios comunes.",
    "Entregar tareas y trabajos en las fechas establecidas.",
    "Asistir puntualmente a clases y actividades institucionales.",
    "No se permite ningún tipo de bullying o acoso escolar.",
    "Cuidar los bienes de la institución.",
    "Portar la agenda escolar diariamente.",
  ],

  evaluacion: {
    escala: "Sobre 10 puntos",
    aprobacion: "Nota mínima: 7/10",
    componentes: [
      "Tareas y trabajos en clase: 30%",
      "Actividades individuales y grupales: 30%",
      "Evaluaciones escritas: 30%",
      "Participación y comportamiento: 10%",
    ],
    quimestres: "El año se divide en 2 quimestres, cada uno con 3 parciales y un examen quimestral.",
  },

 plataformas: {
    principal: {
      nombre: "Odoo",
      url: "https://odoo.sfo.edu.ec/",
      uso: "Consulta de calificaciones, asistencia y reportes académicos.",
      acceso: "Cada estudiante recibe usuario y contraseña al inicio del año lectivo. Si tienes problemas de acceso, acude a secretaría.",
    },
    moodle: {
      nombre: "Moodle",
      url: "https://moodle.sfo.edu.ec/my/",
      uso: "Plataforma educativa para tareas, recursos de clase, actividades en línea y material de estudio.",
      acceso: "Se asigna usuario y contraseña al momento de la matrícula.",
    },
    correo: {
      dominio: "[ejemplo: @oxford.edu.ec]",
      uso: "Comunicación oficial con docentes y entrega de trabajos.",
    },
    otras: [
      "Microsoft Teams / Google Classroom: Clases virtuales y comunicación con docentes.",
    ],
  },

  faq: [
    {
      pregunta: "¿Qué debo traer el primer día de clases?",
      respuesta: "Uniforme completo, agenda escolar, estuche con materiales básicos (lápiz, esfero azul y rojo, borrador, sacapuntas, regla), cuadernos según la lista de útiles y tu carné estudiantil si ya lo tienes.",
    },
    {
      pregunta: "¿Dónde veo mis calificaciones?",
      respuesta: "En la plataforma institucional. Tu usuario y contraseña te los entregan al inicio del año. Si tienes problemas de acceso, acude a secretaría.",
    },
    {
      pregunta: "¿Dónde veo mis calificaciones?",
      respuesta: "Las calificaciones se consultan en **Odoo**: https://odoo.sfo.edu.ec/\n\nTu usuario y contraseña te los entregan al inicio del año lectivo. Si tienes problemas de acceso, acude a secretaría.",
    },
    {
      pregunta: "¿Qué es el DECE?",
      respuesta: "El DECE es el **Departamento de Consejería Estudiantil**. Aquí puedes acudir si tienes problemas personales, emocionales, de convivencia o si necesitas orientación.\n\nLa psicóloga encargada es la **Lic. María José Gallo**, quien está disponible para atenderte de forma confidencial y gratuita.\n\nPuedes acercarte directamente a su oficina o pedir una cita a través de tu tutor de curso.",
    },
    {
      pregunta: "¿Qué hago si pierdo un examen o falto a clases?",
      respuesta: "Tu representante debe presentar justificación por escrito en secretaría dentro de las 48 horas. Si es justificada, el docente reprogramará la evaluación.",
    },
    {
      pregunta: "¿A quién acudo si tengo problemas personales?",
      respuesta: "Al Departamento de Consejería Estudiantil (DECE). Están capacitados para ayudarte con problemas personales, emocionales o de convivencia. También puedes hablar con tu tutor de curso.",
    },
    {
      pregunta: "¿Puedo usar el celular?",
      respuesta: "Debe estar apagado o en silencio durante clases. Solo se permite con autorización del docente para actividades académicas. En el recreo puedes usarlo con moderación.",
    },
    {
      pregunta: "¿Qué pasa si llego tarde?",
      respuesta: "Después de las 07:20 se registra atraso. Tres atrasos injustificados equivalen a una falta leve. Debes pasar por inspección para obtener permiso de ingreso.",
    },
    {
      pregunta: "¿Qué es el DECE?",
      respuesta: "El Departamento de Consejería Estudiantil. Es un equipo de psicólogos y trabajadores sociales que te ayudan con temas emocionales, convivencia, orientación vocacional y cualquier dificultad. Su servicio es confidencial y gratuito.",
    },
    {
      pregunta: "¿Qué actividades extracurriculares hay?",
      respuesta: "Clubes de deportes, arte, música, robótica y otros. La información se comparte al inicio de cada quimestre. Pregunta a tu tutor sobre las opciones disponibles.",
    },
    {
      pregunta: "¿Cómo me comunico con mis profesores?",
      respuesta: "Por correo institucional, la plataforma educativa o durante las horas de atención a padres. No se recomienda contactarlos por redes sociales personales.",
    },
    {
      pregunta: "¿Cuántos paralelos de octavo hay?",
      respuesta: "Hay 4 paralelos: Octavo A, Octavo B, Octavo C y Octavo D. Cada uno tiene su propio horario de clases. Pregúntame el horario de tu paralelo.",
    },
  ],
};

// ══════════════════════════════════════════
// BUSCADOR DE RESPUESTAS
// ══════════════════════════════════════════

function formatSchedule(paralelo, dia) {
  const dias = {
    lunes: "Lunes", martes: "Martes", miercoles: "Miércoles",
    jueves: "Jueves", viernes: "Viernes",
  };

  const schedule = schoolInfo.horarios_paralelos[paralelo]?.[dia];
  if (!schedule) return null;

  let text = `📅 **Horario de Octavo "${paralelo}" — ${dias[dia]}:**\n\n`;
  schedule.forEach((item) => {
    if (item.materia === "RECESO") {
      text += `☕ **${item.hora}** — RECESO\n`;
    } else {
      text += `• **${item.hora}** — ${item.materia}`;
      if (item.docente) text += ` (${item.docente})`;
      text += `\n`;
    }
  });
  return text;
}

function formatFullSchedule(paralelo) {
  const dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
  const diasNombres = { lunes: "LUNES", martes: "MARTES", miercoles: "MIÉRCOLES", jueves: "JUEVES", viernes: "VIERNES" };

  if (!schoolInfo.horarios_paralelos[paralelo]) return null;

  let text = `📅 **Horario completo de Octavo "${paralelo}":**\n\n`;

  dias.forEach((dia) => {
    const schedule = schoolInfo.horarios_paralelos[paralelo][dia];
    if (!schedule) return;
    text += `**📌 ${diasNombres[dia]}:**\n`;
    schedule.forEach((item) => {
      if (item.materia === "RECESO") {
        text += `  ☕ ${item.hora} — RECESO\n`;
      } else {
        text += `  • ${item.hora} — ${item.materia}`;
        if (item.docente) text += ` (${item.docente})`;
        text += `\n`;
      }
    });
    text += `\n`;
  });

  return text;
}

export function findAnswer(question) {
  const q = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // ═══ Detectar consultas de horario por paralelo ═══
  const paraleloMatch = q.match(/octavo\s*["""]?\s*([abcd])["""]?/i) ||
    q.match(/paralelo\s*["""]?\s*([abcd])["""]?/i) ||
    q.match(/\b([abcd])\b.*horario/i) ||
    q.match(/horario.*\b([abcd])\b/i);

  if (paraleloMatch) {
    const paralelo = paraleloMatch[1].toUpperCase();
    const dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
    let diaFound = null;

    for (const dia of dias) {
      if (q.includes(dia)) {
        diaFound = dia;
        break;
      }
    }

    if (diaFound) {
      const result = formatSchedule(paralelo, diaFound);
      if (result) return { found: true, answer: result };
    } else {
      const result = formatFullSchedule(paralelo);
      if (result) return { found: true, answer: result };
    }
  }

  // ═══ Si solo pregunta horario sin paralelo ═══
  const keywordMap = [
    {
      keywords: ["horario", "hora", "entrada", "salida", "jornada", "recreo"],
      response: () => {
        const h = schoolInfo.horarios;
        return (
          `⏰ **Horarios Generales:**\n\n` +
          `• Jornada: ${h.jornada}\n` +
          `• Ingreso: ${h.ingreso}\n` +
          `• Salida: ${h.salida}\n` +
          `• Recreo: ${h.recreo}\n` +
          `• Estructura: ${h.estructura}\n\n` +
          `⚠️ ${h.nota}\n\n` +
          `📋 Hay 4 paralelos: **A, B, C y D**. Para ver el horario detallado de tu paralelo, pregúntame por ejemplo:\n` +
          `• "Horario de Octavo A"\n` +
          `• "Horario del paralelo B"\n` +
          `• "¿Qué tengo el lunes en Octavo D?"`
        );
      },
    },
    {
      keywords: ["dece", "psicologo", "psicologa", "consejeria", "problema personal", "ayuda emocional", "bullying", "acoso", "maria jose", "gallo maria"],
      response: () =>
        `🆘 **Departamento de Consejería Estudiantil (DECE):**\n\n` +
        `El DECE es el espacio donde puedes recibir apoyo si tienes problemas personales, emocionales, de convivencia escolar o si necesitas orientación.\n\n` +
        `**👩‍⚕️ Psicóloga:** Lic. María José Gallo\n\n` +
        `**¿Cómo acceder?**\n` +
        `• Acércate directamente a la oficina del DECE\n` +
        `• Pide una cita a través de tu tutor de curso\n` +
        `• El servicio es **confidencial y gratuito**\n\n` +
        `No dudes en acudir si necesitas hablar con alguien. ¡Estamos para ayudarte! 💙`,
    },
    {
      keywords: ["plataforma", "virtual", "online", "portal", "usuario", "contrasena", "clave", "sistema", "moodle", "odoo"],
      response: () => {
        const p = schoolInfo.plataformas;
        return (
          `💻 **Plataformas Digitales:**\n\n` +
          `**📊 ${p.principal.nombre} (Calificaciones):**\n` +
          `• ${p.principal.uso}\n` +
          `• ${p.principal.acceso}\n` +
          `• 🔗 ${p.principal.url}\n\n` +
          `**📚 ${p.moodle.nombre} (Tareas y recursos):**\n` +
          `• ${p.moodle.uso}\n` +
          `• ${p.moodle.acceso}\n` +
          `• 🔗 ${p.moodle.url}\n\n` +
          `**📧 Correo institucional:** ${p.correo.dominio}\n` +
          `• ${p.correo.uso}`
        );
      },
    },
    {
      keywords: ["materia", "asignatura", "que materias", "cuantas materias"],
      response: () => {
        let text = `📚 **Materias de Octavo Año EGB:**\n\n`;
        schoolInfo.materias.forEach((m, i) => {
          text += `${i + 1}. **${m.nombre}** — ${m.horas} horas semanales\n`;
        });
        text += `\nEn total son ${schoolInfo.materias.length} materias.`;
        return text;
      },
    },
    {
      keywords: ["uniforme", "ropa", "vestimenta", "que ponerme"],
      response: () => {
        const u = schoolInfo.uniforme;
        return `👔 **Uniforme:**\n\n**Diario:** ${u.diario}\n\n**Educación Física:** ${u.educacion_fisica}\n\n📌 ${u.nota}`;
      },
    },
    {
      keywords: ["norma", "regla", "reglamento", "convivencia", "disciplina", "comportamiento"],
      response: () => {
        let text = `📋 **Normas de Convivencia:**\n\n`;
        schoolInfo.normas.forEach((n, i) => { text += `${i + 1}. ${n}\n`; });
        return text;
      },
    },
    {
      keywords: ["calificacion", "nota", "evaluacion", "examen", "aprobar", "como evaluan", "como califican"],
      response: () => {
        const e = schoolInfo.evaluacion;
        let text = `📊 **Sistema de Evaluación:**\n\n`;
        text += `• Escala: ${e.escala}\n• Aprobación: ${e.aprobacion}\n• ${e.quimestres}\n\n**Componentes:**\n`;
        e.componentes.forEach((c) => { text += `• ${c}\n`; });
        return text;
      },
    },
    {
      keywords: ["plataforma", "virtual", "online", "portal", "usuario", "contrasena", "clave", "sistema"],
      response: () => {
        const p = schoolInfo.plataformas;
        let text = `💻 **Plataformas Digitales:**\n\n`;
        text += `**${p.principal.nombre}:**\n• ${p.principal.uso}\n• ${p.principal.acceso}\n\n`;
        text += `**Correo institucional:** ${p.correo.dominio}\n• ${p.correo.uso}\n\n**Otras herramientas:**\n`;
        p.otras.forEach((h) => { text += `• ${h}\n`; });
        return text;
      },
    },
    {
      keywords: ["direccion", "donde queda", "ubicacion", "telefono", "contacto", "correo"],
      response: () => {
        const g = schoolInfo.general;
        return `🏫 **Información de contacto:**\n\n📍 Dirección: ${g.direccion}\n📞 Teléfono: ${g.telefono}\n📧 Email: ${g.email}\n🕐 Atención: ${g.horario_atencion}\n🌐 Web: ${g.pagina_web}`;
      },
    },
    {
      keywords: ["paralelo", "cuantos paralelos", "cuantos octavos"],
      response: () => `📋 Hay **4 paralelos** de octavo año: **A, B, C y D**.\n\nCada uno tiene su propio horario. Pregúntame por ejemplo:\n• "Horario de Octavo A"\n• "¿Qué tengo el martes en Octavo D?"`,
    },
    {
      keywords: ["hola", "buenos dias", "buenas tardes", "hey", "saludos", "que tal", "como estas", "buenas"],
      response: () => `¡Hola! 👋 Soy **OxBot**, el asistente virtual de la **Unidad Educativa Oxford**.\n\nEstoy aquí para ayudarte con todo sobre tu ingreso a octavo año. Puedes preguntarme sobre:\n\n• 📅 Horarios (por paralelo: A, B, C o D)\n• 📚 Materias\n• 👔 Uniforme\n• 📋 Normas\n• 📊 Evaluaciones\n• 💻 Plataformas\n• ❓ Y más...\n\n¿En qué te puedo ayudar?`,
    },
    {
      keywords: ["gracias", "muchas gracias", "te agradezco"],
      response: () => `¡De nada! 😊 Si tienes más preguntas, aquí estoy. ¡Éxito en tu año escolar! 🎓`,
    },
    {
      keywords: ["adios", "chao", "bye", "hasta luego", "nos vemos"],
      response: () => `¡Hasta luego! 👋 Recuerda que puedes volver cuando quieras. ¡Éxito en la **Unidad Educativa Oxford**! 🎓✨`,
    },
  ];

  for (const entry of keywordMap) {
    for (const keyword of entry.keywords) {
      if (q.includes(keyword)) {
        return { found: true, answer: entry.response() };
      }
    }
  }

  // Buscar en FAQ
  for (const faq of schoolInfo.faq) {
    const faqNorm = faq.pregunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const words = q.split(" ").filter((w) => w.length > 3);
    const matches = words.filter((w) => faqNorm.includes(w));
    if (matches.length >= 2) return { found: true, answer: faq.respuesta };
  }

  for (const faq of schoolInfo.faq) {
    const respNorm = faq.respuesta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const words = q.split(" ").filter((w) => w.length > 3);
    const matches = words.filter((w) => respNorm.includes(w));
    if (matches.length >= 2) return { found: true, answer: faq.respuesta };
  }

  return {
    found: false,
    answer: "🤔 No encontré información sobre eso. Intenta preguntar sobre:\n\n• 📅 Horarios (ej: \"Horario de Octavo A\")\n• 📚 Materias\n• 👔 Uniforme\n• 📋 Normas y reglamento\n• 📊 Calificaciones\n• 💻 Plataformas virtuales\n• 🎒 Primer día de clases\n• 🆘 DECE\n\nO consulta directamente en la secretaría de la institución.",
  };
}