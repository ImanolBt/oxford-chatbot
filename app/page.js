// app/page.js
"use client";

import ChatBot from "./components/ChatBot";

export default function Home() {
  const scrollToSteps = () => {
    document.getElementById("como-funciona").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToChat = () => {
    document.getElementById("chat-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="main-container">
      {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">🎓 Bienvenido a</div>
          <h1 className="hero-title">
            Unidad Educativa<br />
            <span className="hero-highlight">Oxford</span>
          </h1>
          <p className="hero-description">
            ¿Eres estudiante de nuevo ingreso de octavo año? Nuestro asistente
            virtual <strong>OxBot</strong> está aquí para ayudarte con toda la
            información que necesitas para comenzar tu año escolar con éxito.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToChat} className="btn-primary">
              💬 Hablar con OxBot
            </button>
            <button onClick={scrollToSteps} className="btn-secondary">
              📖 ¿Cómo funciona?
            </button>
          </div>
          <div className="hero-features">
            <div className="feature-card"><span>📅</span><span>Horarios</span></div>
            <div className="feature-card"><span>📚</span><span>Materias</span></div>
            <div className="feature-card"><span>📋</span><span>Normativas</span></div>
            <div className="feature-card"><span>💻</span><span>Plataformas</span></div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="info-section">
        <h2 className="info-title">¿Cómo funciona OxBot?</h2>
        <p className="info-subtitle">Obtener ayuda es muy fácil. Solo sigue estos tres pasos:</p>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Abre el chat</h3>
            <p>Haz clic en el botón <strong>"Hablar con OxBot"</strong> o en el ícono azul flotante en la esquina inferior derecha.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Haz tu pregunta</h3>
            <p>Escribe tu duda o selecciona una de las preguntas sugeridas que aparecen en el chat.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Recibe tu respuesta</h3>
            <p>OxBot te responderá al instante con la información que necesitas sobre la institución.</p>
          </div>
        </div>
        <button onClick={scrollToChat} className="btn-primary btn-center">
          💬 Probar OxBot ahora
        </button>
      </section>

      {/* TEMAS */}
      <section className="topics-section">
        <h2 className="info-title">¿Sobre qué puedes preguntar?</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <div className="topic-icon">📅</div>
            <h3>Horarios</h3>
            <p>Jornada escolar, hora de ingreso, salida, recreo y duración de clases.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">📚</div>
            <h3>Materias</h3>
            <p>Todas las asignaturas de octavo año con sus horas semanales.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">👔</div>
            <h3>Uniforme</h3>
            <p>Uniforme diario y de educación física con todos los detalles.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">📋</div>
            <h3>Normas</h3>
            <p>Reglas de convivencia, uso del celular, puntualidad y disciplina.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">📊</div>
            <h3>Evaluaciones</h3>
            <p>Sistema de calificación, componentes de la nota y nota mínima.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">💻</div>
            <h3>Plataformas</h3>
            <p>Acceso a Moodle, Odoo, correo institucional y herramientas digitales.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🆘</div>
            <h3>DECE</h3>
            <p>Apoyo emocional con la Psic. María José Gallo. Confidencial y gratuito.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🎒</div>
            <h3>Primer día</h3>
            <p>Qué llevar, cómo prepararte y qué esperar en tu primer día.</p>
          </div>
        </div>
      </section>

      {/* INSTALACIONES */}
      <section className="facilities-section">
        <h2 className="info-title">Conoce Nuestras Instalaciones</h2>
        <p className="info-subtitle">Mapa de la Unidad Educativa Oxford para que te ubiques desde el primer día</p>

        {/* CROQUIS */}
        <div className="croquis-container">
          <div className="croquis">

            {/* Calle */}
            <div className="croquis-calle">
              <div className="calle-linea"></div>
              <span>CALLE</span>
              <div className="calle-linea"></div>
            </div>

            {/* Entrada */}
            <div className="croquis-entrada">
              <div className="entrada-puerta">
                <div className="puerta-icon">🚪</div>
              </div>
              <span className="entrada-texto">ENTRADA PRINCIPAL</span>
              <div className="entrada-flecha">▼</div>
            </div>

            {/* Zona de ingreso */}
            <div className="croquis-ingreso">
              <div className="ingreso-item dece-box">
                <span className="room-icon-lg">🆘</span>
                <span className="room-name-lg">DECE</span>
                <span className="room-detail-lg">Psic. María José Gallo</span>
                <span className="room-piso">Planta Baja</span>
              </div>
              <div className="ingreso-centro">
                <div className="patio-mini">
                  <span>🌳</span>
                  <span className="patio-text">Patio de ingreso</span>
                  <span>🌳</span>
                </div>
              </div>
              <div className="ingreso-item bar-box">
                <span className="room-icon-lg">🍽️</span>
                <span className="room-name-lg">BAR</span>
                <span className="room-detail-lg">Cafetería escolar</span>
                <span className="room-piso">Planta Baja</span>
              </div>
            </div>

            {/* Edificio Principal */}
            <div className="edificio">
              <div className="edificio-header">
                <span>🏫</span>
                <span>EDIFICIO PRINCIPAL</span>
              </div>

              {/* Segundo Piso */}
              <div className="piso">
                <div className="piso-label">
                  <span className="piso-num">2</span>
                  <span>SEGUNDO PISO</span>
                </div>
                <div className="piso-rooms">
                  <div className="aula-room aula-a">
                    <span className="aula-letra">A</span>
                    <span className="aula-nombre">8vo "A"</span>
                  </div>
                  <div className="piso-pasillo-v">
                    <div className="escalera-icon">🪜</div>
                    <span className="escalera-text">Escaleras</span>
                  </div>
                  <div className="aula-room lab-room">
                    <span className="lab-icon">💻</span>
                    <span className="aula-nombre">Lab. Computación</span>
                  </div>
                </div>
              </div>

              {/* Separador */}
              <div className="piso-separador">
                <div className="separador-linea"></div>
                <div className="separador-linea"></div>
              </div>

              {/* Primer Piso */}
              <div className="piso">
                <div className="piso-label">
                  <span className="piso-num">1</span>
                  <span>PRIMER PISO</span>
                </div>
                <div className="piso-rooms">
                  <div className="aula-room aula-b">
                    <span className="aula-letra">B</span>
                    <span className="aula-nombre">8vo "B"</span>
                  </div>
                  <div className="aula-room aula-c">
                    <span className="aula-letra">C</span>
                    <span className="aula-nombre">8vo "C"</span>
                  </div>
                  <div className="aula-room aula-d">
                    <span className="aula-letra">D</span>
                    <span className="aula-nombre">8vo "D"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pasillo a canchas */}
            <div className="pasillo-canchas">
              <div className="pasillo-dots">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
              <span className="pasillo-texto">Camino a las canchas</span>
              <div className="pasillo-dots">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>

            {/* Canchas */}
            <div className="canchas-area">
              <div className="cancha-futbol">
                <div className="cancha-lineas">
                  <div className="cancha-circulo"></div>
                  <div className="cancha-porteria-top"></div>
                  <div className="cancha-porteria-bottom"></div>
                </div>
                <div className="cancha-info">
                  <span className="cancha-icon">⚽</span>
                  <span className="cancha-nombre">Cancha de Fútbol</span>
                </div>
              </div>
              <div className="cancha-basquet">
                <div className="basquet-lineas">
                  <div className="basquet-circulo"></div>
                </div>
                <div className="cancha-info">
                  <span className="cancha-icon">🏀</span>
                  <span className="cancha-nombre">Cancha de Básquet</span>
                </div>
              </div>
            </div>

          </div>

          {/* Leyenda */}
          <div className="croquis-legend-v2">
            <div className="legend-v2-item"><div className="legend-v2-color" style={{background: '#ef4444'}}></div><span>DECE</span></div>
            <div className="legend-v2-item"><div className="legend-v2-color" style={{background: '#3b82f6'}}></div><span>Aulas 8vo</span></div>
            <div className="legend-v2-item"><div className="legend-v2-color" style={{background: '#06b6d4'}}></div><span>Laboratorio</span></div>
            <div className="legend-v2-item"><div className="legend-v2-color" style={{background: '#65a30d'}}></div><span>Bar / Cafetería</span></div>
            <div className="legend-v2-item"><div className="legend-v2-color" style={{background: '#22c55e'}}></div><span>Canchas</span></div>
          </div>
        </div>

        {/* ESPACIOS IMPORTANTES */}
        <h3 className="gallery-title">Espacios Importantes para Ti</h3>
        <div className="gallery-grid">
          <div className="gallery-card">
            <div className="gallery-icon">🏫</div>
            <h4>Entrada Principal</h4>
            <p>Ingreso desde las 07:00. Llega antes de las 07:20 para evitar atrasos.</p>
          </div>
          <div className="gallery-card">
            <div className="gallery-icon">✏️</div>
            <h4>Aulas de Octavo</h4>
            <p>8vo B, C y D en el primer piso. 8vo A en el segundo piso. Cada paralelo tiene su aula fija.</p>
          </div>
          <div className="gallery-card">
            <div className="gallery-icon">💻</div>
            <h4>Lab. de Computación</h4>
            <p>Segundo piso. Clases de Tecnología e Informática con el Ing. Bolaños.</p>
          </div>
          <div className="gallery-card">
            <div className="gallery-icon">🍽️</div>
            <h4>Bar / Cafetería</h4>
            <p>Planta baja. Disponible en el recreo de 10:18 a 11:00. Trae colación o compra aquí.</p>
          </div>
          <div className="gallery-card">
            <div className="gallery-icon">⚽</div>
            <h4>Canchas Deportivas</h4>
            <p>Al fondo del colegio. Fútbol y básquet. Educación Física con el Lic. Santos Nelson.</p>
          </div>
          <div className="gallery-card">
            <div className="gallery-icon">🆘</div>
            <h4>Oficina del DECE</h4>
            <p>Planta baja, cerca de la entrada. Psicóloga María José Gallo. Confidencial y gratuito.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DEL CHAT */}
      <section id="chat-section" className="chat-section">
        <h2 className="info-title white">Chatea con OxBot</h2>
        <p className="chat-section-sub">Haz clic en el botón azul de la esquina inferior derecha para comenzar 👇</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Unidad Educativa Oxford — Chatbot Educativo OxBot</p>
        <p className="footer-sub">Proyecto de investigación • Octavo Año EGB</p>
      </footer>

      <ChatBot />
    </main>
  );
}