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
    jornada: "Matutina: 07:30 - 13:40",
    ingreso: "07:00 (las puertas se abren a las 06:45)",
    salida: "13:34",
    recreo: "10:18 - 11:00",
    duracion_clase: "40 minutos por período",
    periodos_por_dia: "8 períodos de clase",
    nota: "Los estudiantes deben llegar puntualmente. Después de las 07:30 se registra atraso.",
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
    { nombre: "Proyectos Escolares", horas: 2 },
  ],

  uniforme: {
    diario:
      "Camisa blanca con escudo institucional, pantalón/falda azul marino, zapatos negros, medias azules.",
    educacion_fisica:
      "Camiseta institucional deportiva, pantaloneta/calentador azul, zapatos deportivos blancos.",
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
    quimestres:
      "El año se divide en 2 quimestres, cada uno con 3 parciales y un examen quimestral.",
  },

  plataformas: {
    principal: {
      nombre: "Moodle - Oddo",
      uso: "Consulta de calificaciones, asistencia, comunicados y tareas.",
      acceso:
        "Cada estudiante recibe usuario y contraseña al inicio del año lectivo.",
    },
    correo: {
      dominio: "[ejemplo: @oxford.edu.ec]",
      uso: "Comunicación oficial con docentes y entrega de trabajos.",
    },
    otras: [
      "Microsoft Teams / Google Classroom: Clases virtuales y tareas en línea.",
      "Biblioteca virtual: Acceso a libros digitales y recursos de estudio.",
    ],
  },

  faq: [
    {
      pregunta: "¿Qué debo traer el primer día de clases?",
      respuesta:
        "Uniforme completo, agenda escolar, estuche con materiales básicos (lápiz, esfero azul y rojo, borrador, sacapuntas, regla), cuadernos según la lista de útiles y tu carné estudiantil si ya lo tienes.",
    },
    {
      pregunta: "¿Dónde veo mis calificaciones?",
      respuesta:
        "En la plataforma institucional. Tu usuario y contraseña te los entregan al inicio del año. Si tienes problemas de acceso, acude a secretaría.",
    },
    {
      pregunta: "¿Qué hago si pierdo un examen o falto a clases?",
      respuesta:
        "Tu representante debe presentar justificación por escrito en secretaría dentro de las 48 horas. Si es justificada, el docente reprogramará la evaluación.",
    },
    {
      pregunta: "¿A quién acudo si tengo problemas personales?",
      respuesta:
        "Al Departamento de Consejería Estudiantil (DECE). Están capacitados para ayudarte con problemas personales, emocionales o de convivencia. También puedes hablar con tu tutor de curso.",
    },
    {
      pregunta: "¿Puedo usar el celular?",
      respuesta:
        "Debe estar apagado o en silencio durante clases. Solo se permite con autorización del docente para actividades académicas. En el recreo puedes usarlo con moderación.",
    },
    {
      pregunta: "¿Qué pasa si llego tarde?",
      respuesta:
        "Después de las 07:30 se registra atraso. Tres atrasos injustificados equivalen a una falta leve. Debes pasar por inspección para obtener permiso de ingreso.",
    },
    {
      pregunta: "¿Qué es el DECE?",
      respuesta:
        "El Departamento de Consejería Estudiantil. Es un equipo de psicólogos y trabajadores sociales que te ayudan con temas emocionales, convivencia, orientación vocacional y cualquier dificultad. Su servicio es confidencial y gratuito.",
    },
    {
      pregunta: "¿Qué actividades extracurriculares hay?",
      respuesta:
        "Clubes de deportes, arte, música, robótica y otros. La información se comparte al inicio de cada quimestre. Pregunta a tu tutor sobre las opciones disponibles.",
    },
    {
      pregunta: "¿Cómo me comunico con mis profesores?",
      respuesta:
        "Por correo institucional, la plataforma educativa o durante las horas de atención a padres. No se recomienda contactarlos por redes sociales personales.",
    },
  ],
};

// ══════════════════════════════════════════
// BUSCADOR DE RESPUESTAS
// ══════════════════════════════════════════

export function findAnswer(question) {
  const q = question
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const keywordMap = [
    {
      keywords: ["horario", "hora", "entrada", "salida", "jornada", "recreo"],
      response: () => {
        const h = schoolInfo.horarios;
        return (
          `⏰ **Horarios de Octavo Año:**\n\n` +
          `• Jornada: ${h.jornada}\n` +
          `• Ingreso: ${h.ingreso}\n` +
          `• Salida: ${h.salida}\n` +
          `• Recreo: ${h.recreo}\n` +
          `• Duración de clase: ${h.duracion_clase}\n` +
          `• Períodos por día: ${h.periodos_por_dia}\n\n` +
          `⚠️ ${h.nota}`
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
        return (
          `👔 **Uniforme:**\n\n` +
          `**Diario:** ${u.diario}\n\n` +
          `**Educación Física:** ${u.educacion_fisica}\n\n` +
          `📌 ${u.nota}`
        );
      },
    },
    {
      keywords: [
        "norma",
        "regla",
        "reglamento",
        "convivencia",
        "disciplina",
        "comportamiento",
      ],
      response: () => {
        let text = `📋 **Normas de Convivencia:**\n\n`;
        schoolInfo.normas.forEach((n, i) => {
          text += `${i + 1}. ${n}\n`;
        });
        return text;
      },
    },
    {
      keywords: [
        "calificacion",
        "nota",
        "evaluacion",
        "examen",
        "aprobar",
        "como evaluan",
        "como califican",
      ],
      response: () => {
        const e = schoolInfo.evaluacion;
        let text = `📊 **Sistema de Evaluación:**\n\n`;
        text += `• Escala: ${e.escala}\n`;
        text += `• Aprobación: ${e.aprobacion}\n`;
        text += `• ${e.quimestres}\n\n`;
        text += `**Componentes:**\n`;
        e.componentes.forEach((c) => {
          text += `• ${c}\n`;
        });
        return text;
      },
    },
    {
      keywords: [
        "plataforma",
        "virtual",
        "online",
        "portal",
        "usuario",
        "contrasena",
        "clave",
        "sistema",
      ],
      response: () => {
        const p = schoolInfo.plataformas;
        let text = `💻 **Plataformas Digitales:**\n\n`;
        text += `**${p.principal.nombre}:**\n`;
        text += `• ${p.principal.uso}\n`;
        text += `• ${p.principal.acceso}\n\n`;
        text += `**Correo institucional:** ${p.correo.dominio}\n`;
        text += `• ${p.correo.uso}\n\n`;
        text += `**Otras herramientas:**\n`;
        p.otras.forEach((h) => {
          text += `• ${h}\n`;
        });
        return text;
      },
    },
    {
      keywords: ["direccion", "donde queda", "ubicacion", "telefono", "contacto", "correo"],
      response: () => {
        const g = schoolInfo.general;
        return (
          `🏫 **Información de contacto:**\n\n` +
          `📍 Dirección: ${g.direccion}\n` +
          `📞 Teléfono: ${g.telefono}\n` +
          `📧 Email: ${g.email}\n` +
          `🕐 Atención: ${g.horario_atencion}\n` +
          `🌐 Web: ${g.pagina_web}`
        );
      },
    },
    {
      keywords: [
        "hola",
        "buenos dias",
        "buenas tardes",
        "hey",
        "saludos",
        "que tal",
        "como estas",
        "buenas",
      ],
      response: () =>
        `¡Hola! 👋 Soy **OxBot**, el asistente virtual de la **Unidad Educativa Oxford**.\n\nEstoy aquí para ayudarte con todo sobre tu ingreso a octavo año. Puedes preguntarme sobre:\n\n• 📅 Horarios\n• 📚 Materias\n• 👔 Uniforme\n• 📋 Normas\n• 📊 Evaluaciones\n• 💻 Plataformas\n• ❓ Y más...\n\n¿En qué te puedo ayudar?`,
    },
    {
      keywords: ["gracias", "muchas gracias", "te agradezco"],
      response: () =>
        `¡De nada! 😊 Si tienes más preguntas, aquí estoy. ¡Éxito en tu año escolar! 🎓`,
    },
    {
      keywords: ["adios", "chao", "bye", "hasta luego", "nos vemos"],
      response: () =>
        `¡Hasta luego! 👋 Recuerda que puedes volver cuando quieras. ¡Éxito en la **Unidad Educativa Oxford**! 🎓✨`,
    },
  ];

  // Buscar por palabras clave
  for (const entry of keywordMap) {
    for (const keyword of entry.keywords) {
      if (q.includes(keyword)) {
        return { found: true, answer: entry.response() };
      }
    }
  }

  // Buscar en preguntas frecuentes
  for (const faq of schoolInfo.faq) {
    const faqNorm = faq.pregunta
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const words = q.split(" ").filter((w) => w.length > 3);
    const matches = words.filter((w) => faqNorm.includes(w));
    if (matches.length >= 2) {
      return { found: true, answer: faq.respuesta };
    }
  }

  // También buscar coincidencias en las respuestas del FAQ
  for (const faq of schoolInfo.faq) {
    const respNorm = faq.respuesta
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const words = q.split(" ").filter((w) => w.length > 3);
    const matches = words.filter((w) => respNorm.includes(w));
    if (matches.length >= 2) {
      return { found: true, answer: faq.respuesta };
    }
  }

  // No encontró nada
  return {
    found: false,
    answer:
      "🤔 No encontré información sobre eso. Intenta preguntar sobre:\n\n• 📅 Horarios\n• 📚 Materias\n• 👔 Uniforme\n• 📋 Normas y reglamento\n• 📊 Calificaciones\n• 💻 Plataformas virtuales\n• 🎒 Primer día de clases\n• 🆘 DECE\n\nO consulta directamente en la secretaría de la institución.",
  };
}