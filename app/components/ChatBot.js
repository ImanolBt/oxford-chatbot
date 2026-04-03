// app/components/ChatBot.js
"use client";

import { useState, useRef, useEffect } from "react";

const studentSuggestions = [
  { icon: "📅", text: "Horarios de clase" },
  { icon: "📚", text: "¿Qué materias tengo?" },
  { icon: "👔", text: "¿Cómo es el uniforme?" },
  { icon: "📋", text: "Normas de convivencia" },
  { icon: "📊", text: "Sistema de evaluación" },
  { icon: "💻", text: "Plataformas virtuales" },
  { icon: "🎒", text: "¿Qué traer el primer día?" },
  { icon: "🆘", text: "¿Qué es el DECE?" },
];

const docenteSuggestions = [
  { icon: "📘", text: "Metodología ERCA" },
  { icon: "📊", text: "Sistema de evaluación" },
  { icon: "📋", text: "Planificaciones" },
  { icon: "💻", text: "Plataformas Odoo y Moodle" },
  { icon: "📞", text: "Contactos importantes" },
  { icon: "💡", text: "Tips para docentes nuevos" },
  { icon: "🆘", text: "DECE y protocolos" },
  { icon: "⏰", text: "Horarios" },
];

export default function ChatBot({ initialMode = "estudiante" }) {
  const [mode, setMode] = useState(initialMode);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const getWelcome = (m) => {
    if (m === "docente") {
      return "¡Bienvenido/a! 👋 Soy **OxBot** en modo **docente**.\n\nEstoy aquí para ayudarle con información sobre la Unidad Educativa Oxford. Consulte sobre metodología ERCA, evaluaciones, planificaciones, plataformas y más.\n\n¿En qué puedo ayudarle?";
    }
    return "¡Hola! 👋 Soy **OxBot**, tu asistente virtual de la **Unidad Educativa Oxford**.\n\nEstoy aquí para ayudarte con todo lo que necesites saber sobre tu ingreso a octavo año. ¡Pregúntame lo que quieras! 🎓";
  };

  // Inicializar mensajes
  useEffect(() => {
    setMessages([{ role: "assistant", content: getWelcome(mode) }]);
  }, [mode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  // Abrir chat desde fuera con modo específico
  useEffect(() => {
    const handler = (e) => {
      setMode(e.detail.mode || "estudiante");
      setIsOpen(true);
    };
    window.addEventListener("openChat", handler);
    return () => window.removeEventListener("openChat", handler);
  }, []);

  const switchMode = (newMode) => {
    setMode(newMode);
    setMessages([{ role: "assistant", content: getWelcome(newMode) }]);
  };

  const sendMessage = async (text) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    const userMessage = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText, mode }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "😅 Ups, algo salió mal. Intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (text) => {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>");
  };

  const suggestions = mode === "docente" ? docenteSuggestions : studentSuggestions;

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="chat-toggle-btn" aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}>
        {isOpen ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      <div className={`chat-window ${isOpen ? "chat-open" : "chat-closed"}`}>
        {/* Header */}
        <div className={`chat-header ${mode === "docente" ? "chat-header-docente" : ""}`}>
          <div className="chat-header-info">
            <div className="chat-avatar">{mode === "docente" ? "🎓" : "🤖"}</div>
            <div>
              <h3 className="chat-title">OxBot</h3>
              <p className="chat-subtitle">
                {mode === "docente" ? "Modo Docente • U.E. Oxford" : "Asistente Virtual • U.E. Oxford"}
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="chat-close-btn" aria-label="Cerrar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mode Switcher */}
        <div className="mode-switcher">
          <button className={`mode-btn ${mode === "estudiante" ? "mode-active" : ""}`} onClick={() => switchMode("estudiante")}>
            🎒 Estudiante
          </button>
          <button className={`mode-btn ${mode === "docente" ? "mode-active-docente" : ""}`} onClick={() => switchMode("docente")}>
            🎓 Docente
          </button>
        </div>

        {/* Mensajes */}
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message-row ${msg.role}`}>
              {msg.role === "assistant" && <div className="bot-icon-small">{mode === "docente" ? "🎓" : "🤖"}</div>}
              <div className={`message-bubble ${msg.role}`} dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />
            </div>
          ))}

          {isLoading && (
            <div className="message-row assistant">
              <div className="bot-icon-small">{mode === "docente" ? "🎓" : "🤖"}</div>
              <div className="message-bubble assistant typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}

          {messages.length <= 1 && !isLoading && (
            <div className="suggestions-container">
              <p className="suggestions-title">{mode === "docente" ? "Consultas frecuentes:" : "Preguntas frecuentes:"}</p>
              <div className="suggestions-grid">
                {suggestions.map((s, i) => (
                  <button key={i} onClick={() => sendMessage(s.text)} className="suggestion-btn">
                    <span>{s.icon}</span>
                    <span>{s.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={mode === "docente" ? "Escriba su consulta aquí..." : "Escribe tu pregunta aquí..."}
              className="chat-input"
              disabled={isLoading}
              maxLength={500}
            />
            <button onClick={() => sendMessage()} disabled={isLoading || !input.trim()} className="send-btn" aria-label="Enviar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          <p className="chat-disclaimer">OxBot responde con información predefinida. Verifique datos importantes con la coordinación.</p>
        </div>
      </div>
    </>
  );
}