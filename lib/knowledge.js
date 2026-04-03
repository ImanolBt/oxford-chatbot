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
// ══════════════════════════════════════════
  // INFORMACIÓN PARA DOCENTES
  // ══════════════════════════════════════════
export const docenteInfo = {
  metodologia: {
    nombre: "Metodología ERCA",
    descripcion: "La Unidad Educativa Oxford trabaja con la metodología ERCA (Experiencia, Reflexión, Conceptualización y Aplicación), alineada al currículo del Ministerio de Educación del Ecuador.",
    fases: [
      { fase: "Experiencia", descripcion: "Actividad inicial que conecta al estudiante con el tema a través de situaciones reales, preguntas generadoras o dinámicas participativas." },
      { fase: "Reflexión", descripcion: "Espacio para que los estudiantes analicen la experiencia, compartan ideas, identifiquen problemas y formulen preguntas." },
      { fase: "Conceptualización", descripcion: "El docente presenta los conceptos, teorías o contenidos formales del tema, apoyándose en recursos didácticos." },
      { fase: "Aplicación", descripcion: "Los estudiantes aplican lo aprendido mediante ejercicios, proyectos, talleres o actividades prácticas que evidencien su comprensión." },
    ],
  },

  evaluacion_docente: {
    sistema: "El sistema de evaluación se rige por la normativa del Ministerio de Educación del Ecuador.",
    escala: "La calificación es sobre 10 puntos. La nota mínima para aprobar es 7/10.",
    componentes: [
      { componente: "Tareas y trabajos en clase", porcentaje: "30%", descripcion: "Actividades individuales o grupales realizadas durante la clase." },
      { componente: "Actividades individuales y grupales", porcentaje: "30%", descripcion: "Proyectos, exposiciones, investigaciones y trabajos colaborativos." },
      { componente: "Evaluaciones escritas", porcentaje: "30%", descripcion: "Pruebas parciales y examen quimestral." },
      { componente: "Participación y comportamiento", porcentaje: "10%", descripcion: "Actitud, puntualidad, respeto y participación activa en clase." },
    ],
    estructura: "El año lectivo se divide en 2 quimestres. Cada quimestre tiene 3 parciales y un examen quimestral.",
    registro: "Las calificaciones se registran en la plataforma Odoo (https://odoo.sfo.edu.ec/). Cada docente recibe credenciales de acceso al inicio del año lectivo.",
  },

  planificacion: {
    formato: "Las planificaciones deben seguir el formato institucional basado en la metodología ERCA.",
    elementos: [
      "Datos informativos (asignatura, curso, paralelo, fecha, docente)",
      "Objetivo de aprendizaje alineado al currículo nacional",
      "Destreza con criterio de desempeño",
      "Indicador de evaluación (formato I.T.4.x del Ministerio de Educación)",
      "Desarrollo de la clase con las 4 fases ERCA",
      "Recursos y materiales didácticos",
      "Actividades de evaluación",
      "Adaptaciones curriculares (si aplica)",
    ],
    entrega: "Las planificaciones se entregan semanalmente a la coordinación académica, preferiblemente los días viernes para la semana siguiente.",
  },

  plataformas_docente: {
    odoo: {
      nombre: "Odoo",
      url: "https://odoo.sfo.edu.ec/",
      uso: "Registro de calificaciones, asistencia, reportes académicos y comunicación con representantes.",
    },
    moodle: {
      nombre: "Moodle",
      url: "https://moodle.sfo.edu.ec/my/",
      uso: "Subir material de clase, crear tareas, actividades en línea, foros y evaluaciones virtuales.",
    },
  },

  normativas_docente: [
    "Cumplir puntualmente con el horario de clases asignado.",
    "Registrar la asistencia de los estudiantes diariamente en Odoo.",
    "Entregar planificaciones semanales en el formato institucional.",
    "Registrar calificaciones dentro de los plazos establecidos por la coordinación.",
    "Comunicar cualquier novedad académica o disciplinaria al tutor de curso o al DECE.",
    "Mantener un trato respetuoso y profesional con estudiantes, padres de familia y colegas.",
    "Asistir a las reuniones de área, juntas de curso y capacitaciones institucionales.",
    "Utilizar las plataformas Odoo y Moodle como herramientas oficiales de trabajo.",
    "Reportar al DECE cualquier situación de vulneración de derechos o riesgo del estudiante.",
    "No compartir información personal de estudiantes en redes sociales o medios no oficiales.",
  ],

  contactos_importantes: [
    { cargo: "DECE", nombre: "Psic. María José Gallo", detalle: "Apoyo emocional, convivencia, casos especiales" },
    { cargo: "Coordinación Académica", nombre: "[Nombre del coordinador]", detalle: "Planificaciones, horarios, evaluaciones" },
    { cargo: "Inspección General", nombre: "[Nombre del inspector]", detalle: "Disciplina, atrasos, uniformes" },
    { cargo: "Secretaría", nombre: "[Nombre]", detalle: "Trámites, documentos, accesos a plataformas" },
  ],

  tips_nuevo_docente: [
    "Preséntate a tus estudiantes el primer día y establece las reglas de convivencia del aula.",
    "Revisa el currículo nacional y las destrezas con criterio de desempeño de tu asignatura.",
    "Familiarízate con Odoo y Moodle antes de la primera semana de clases.",
    "Coordina con los docentes de tu área para unificar criterios de evaluación.",
    "Solicita el formato de planificación institucional a la coordinación académica.",
    "Conoce a los tutores de curso para coordinar el seguimiento de estudiantes.",
    "Si tienes dudas, acércate a la coordinación o a un colega con experiencia.",
  ],

  faq_docente: [
    {
      pregunta: "¿Dónde registro las calificaciones?",
      respuesta: "Las calificaciones se registran en **Odoo**: https://odoo.sfo.edu.ec/\n\nTu usuario y contraseña los recibes al inicio del año lectivo. Si tienes problemas de acceso, acude a secretaría.",
    },
    {
      pregunta: "¿Cómo subo material a los estudiantes?",
      respuesta: "El material de clase, tareas y actividades se suben a **Moodle**: https://moodle.sfo.edu.ec/my/\n\nPuedes crear cursos, subir archivos, asignar tareas y evaluar desde la plataforma.",
    },
    {
      pregunta: "¿Cuándo debo entregar las planificaciones?",
      respuesta: "Las planificaciones semanales se entregan los **viernes** para la semana siguiente, en el formato institucional basado en la metodología ERCA. Se envían a la coordinación académica.",
    },
    {
      pregunta: "¿Qué hago si un estudiante tiene problemas emocionales o de conducta?",
      respuesta: "Debes reportar al **DECE** con la **Psic. María José Gallo**. Ella se encargará del seguimiento. En casos urgentes, acompaña al estudiante directamente a la oficina del DECE (planta baja, cerca de la entrada).",
    },
    {
      pregunta: "¿Cuáles son los componentes de la evaluación?",
      respuesta: "La evaluación se compone de:\n• Tareas y trabajos en clase: 30%\n• Actividades individuales y grupales: 30%\n• Evaluaciones escritas: 30%\n• Participación y comportamiento: 10%\n\nLa nota es sobre 10 puntos, mínimo 7/10 para aprobar.",
    },
    {
      pregunta: "¿Qué metodología usa el colegio?",
      respuesta: "Se utiliza la **metodología ERCA** (Experiencia, Reflexión, Conceptualización y Aplicación), alineada al currículo del Ministerio de Educación del Ecuador. Las planificaciones deben seguir este formato.",
    },
  ],
};
// ══════════════════════════════════════════
// BUSCADOR DE RESPUESTAS PARA DOCENTES
// ══════════════════════════════════════════
export function findDocenteAnswer(question) {
  const q = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const keywordMap = [
    {
      keywords: ["erca", "metodologia", "metodo", "como ensenar", "como dar clase"],
      response: () => {
        let text = `📘 **Metodología ERCA:**\n\n${docenteInfo.metodologia.descripcion}\n\n**Fases:**\n`;
        docenteInfo.metodologia.fases.forEach((f, i) => {
          text += `${i + 1}. **${f.fase}:** ${f.descripcion}\n`;
        });
        return text;
      },
    },
    {
      keywords: ["evaluacion", "calificacion", "nota", "como evaluar", "como calificar", "componente"],
      response: () => {
        const e = docenteInfo.evaluacion_docente;
        let text = `📊 **Sistema de Evaluación:**\n\n${e.sistema}\n\n• Escala: ${e.escala}\n• ${e.estructura}\n\n**Componentes:**\n`;
        e.componentes.forEach((c) => {
          text += `• **${c.componente} (${c.porcentaje}):** ${c.descripcion}\n`;
        });
        text += `\n📝 **Registro:** ${e.registro}`;
        return text;
      },
    },
    {
      keywords: ["planificacion", "planificar", "formato", "plan de clase"],
      response: () => {
        const p = docenteInfo.planificacion;
        let text = `📋 **Planificación de Clases:**\n\n${p.formato}\n\n**Elementos requeridos:**\n`;
        p.elementos.forEach((e, i) => {
          text += `${i + 1}. ${e}\n`;
        });
        text += `\n⏰ **Entrega:** ${p.entrega}`;
        return text;
      },
    },
    {
      keywords: ["plataforma", "odoo", "moodle", "sistema", "virtual", "donde registro", "donde subo"],
      response: () => {
        const p = docenteInfo.plataformas_docente;
        return (
          `💻 **Plataformas para Docentes:**\n\n` +
          `**📊 ${p.odoo.nombre}:**\n• ${p.odoo.uso}\n• 🔗 ${p.odoo.url}\n\n` +
          `**📚 ${p.moodle.nombre}:**\n• ${p.moodle.uso}\n• 🔗 ${p.moodle.url}`
        );
      },
    },
    {
      keywords: ["norma", "regla", "debo hacer", "obligacion", "responsabilidad", "reglamento"],
      response: () => {
        let text = `📋 **Normativas para Docentes:**\n\n`;
        docenteInfo.normativas_docente.forEach((n, i) => {
          text += `${i + 1}. ${n}\n`;
        });
        return text;
      },
    },
    {
      keywords: ["contacto", "quien", "coordinador", "inspector", "secretaria", "a quien acudo"],
      response: () => {
        let text = `📞 **Contactos Importantes:**\n\n`;
        docenteInfo.contactos_importantes.forEach((c) => {
          text += `• **${c.cargo}:** ${c.nombre} — ${c.detalle}\n`;
        });
        return text;
      },
    },
    {
      keywords: ["tip", "consejo", "recomendacion", "nuevo", "primera vez", "recien entro", "que hago"],
      response: () => {
        let text = `💡 **Tips para Docentes Nuevos:**\n\n`;
        docenteInfo.tips_nuevo_docente.forEach((t, i) => {
          text += `${i + 1}. ${t}\n`;
        });
        return text;
      },
    },
    {
      keywords: ["dece", "psicologa", "problema estudiante", "conducta", "emocional"],
      response: () =>
        `🆘 **DECE — Departamento de Consejería Estudiantil:**\n\n` +
        `**Psicóloga:** Lic. María José Gallo\n` +
        `**Ubicación:** Planta baja, cerca de la entrada\n\n` +
        `Reporte al DECE cualquier situación de:\n` +
        `• Problemas emocionales o de conducta del estudiante\n` +
        `• Sospecha de vulneración de derechos\n` +
        `• Conflictos entre estudiantes (bullying, acoso)\n` +
        `• Bajo rendimiento asociado a problemas personales\n\n` +
        `En casos urgentes, acompañe al estudiante directamente a la oficina del DECE.`,
    },
    {
      keywords: ["horario", "hora", "jornada", "entrada", "salida"],
      response: () => {
        return (
          `⏰ **Horarios Institucionales:**\n\n` +
          `• Jornada: 07:20 - 13:40\n` +
          `• Actividades Iniciales: 07:20 - 07:30\n` +
          `• Animación a la lectura: 07:30 - 08:12\n` +
          `• Períodos de clase: 08:12 - 13:40\n` +
          `• Recreo: 10:18 - 11:00\n\n` +
          `📌 Recuerde registrar la asistencia diariamente en Odoo y llegar puntualmente a su hora de clase.`
        );
      },
    },
    {
      keywords: ["hola", "buenos dias", "buenas tardes", "hey", "saludos"],
      response: () =>
        `¡Bienvenido/a! 👋 Soy **OxBot** en modo docente.\n\nEstoy aquí para ayudarle con información sobre la **Unidad Educativa Oxford**. Puede consultarme sobre:\n\n• 📘 Metodología ERCA\n• 📊 Sistema de evaluación\n• 📋 Planificaciones\n• 💻 Plataformas (Odoo y Moodle)\n• 📞 Contactos importantes\n• 💡 Tips para docentes nuevos\n• 🆘 DECE y protocolos\n\n¿En qué puedo ayudarle?`,
    },
    {
      keywords: ["gracias", "muchas gracias"],
      response: () => `¡Con gusto! 😊 Si necesita más información, no dude en consultarme. ¡Éxito en este año lectivo! 🎓`,
    },
  ];

  for (const entry of keywordMap) {
    for (const keyword of entry.keywords) {
      if (q.includes(keyword)) {
        return { found: true, answer: entry.response() };
      }
    }
  }

  // Buscar en FAQ docente
  for (const faq of docenteInfo.faq_docente) {
    const faqNorm = faq.pregunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const words = q.split(" ").filter((w) => w.length > 3);
    const matches = words.filter((w) => faqNorm.includes(w));
    if (matches.length >= 2) return { found: true, answer: faq.respuesta };
  }

  return {
    found: false,
    answer: "🤔 No encontré información sobre eso. Puede consultarme sobre:\n\n• 📘 Metodología ERCA\n• 📊 Sistema de evaluación y calificaciones\n• 📋 Planificaciones\n• 💻 Plataformas (Odoo y Moodle)\n• 📞 Contactos importantes\n• 💡 Tips para docentes nuevos\n• 🆘 DECE y protocolos\n\nO consulte directamente con la coordinación académica.",
  };
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