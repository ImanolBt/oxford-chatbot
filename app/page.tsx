// app/page.js
import ChatBot from "./components/ChatBot";

export default function Home() {
  return (
    <main className="main-container">
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
          <div className="hero-features">
            <div className="feature-card"><span>📅</span><span>Horarios</span></div>
            <div className="feature-card"><span>📚</span><span>Materias</span></div>
            <div className="feature-card"><span>📋</span><span>Normativas</span></div>
            <div className="feature-card"><span>💻</span><span>Plataformas</span></div>
          </div>
          <p className="hero-cta">
            👉 Haz clic en el botón de chat en la esquina inferior derecha para comenzar.
          </p>
        </div>
        <div className="hero-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>

      <section className="info-section">
        <h2 className="info-title">¿Cómo funciona OxBot?</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Abre el chat</h3>
            <p>Haz clic en el ícono azul en la esquina inferior derecha.</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Haz tu pregunta</h3>
            <p>Escribe tu duda o selecciona una pregunta sugerida.</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Recibe tu respuesta</h3>
            <p>OxBot te responderá al instante con la información que necesitas.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Unidad Educativa Oxford — Chatbot Educativo OxBot</p>
        <p className="footer-sub">Proyecto de investigación • Octavo Año EGB</p>
      </footer>

      <ChatBot />
    </main>
  );
}