// app/components/ChatBot.js
"use client";

import { useState, useRef, useEffect } from "react";

const quickSuggestions = [
  { icon: "📅", text: "Horarios de clase" },
  { icon: "📚", text: "¿Qué materias tengo?" },
  { icon: "👔", text: "¿Cómo es el uniforme?" },
  { icon: "📋", text: "Normas de convivencia" },
  { icon: "📊", text: "Sistema de evaluación" },
  { icon: "💻", text: "Plataformas virtuales" },
  { icon: "🎒", text: "¿Qué traer el primer día?" },
  { icon: "🆘", text: "¿Qué es el DECE?" },
];

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "¡Hola! 👋 Soy **OxBot**, tu asistente virtual de la **Unidad Educativa Oxford**.\n\nEstoy aquí para ayudarte con todo lo que necesites saber sobre tu ingreso a octavo año. ¡Pregúntame lo que quieras! 🎓",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

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
        body: JSON.stringify({ message: messageText }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "😅 Ups, algo salió mal. Intenta de nuevo.",
        },
      ]);
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
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br/>");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-toggle-btn"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
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
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">🤖</div>
            <div>
              <h3 className="chat-title">OxBot</h3>
              <p className="chat-subtitle">Asistente Virtual • U.E. Oxford</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="chat-close-btn" aria-label="Cerrar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message-row ${msg.role}`}>
              {msg.role === "assistant" && <div className="bot-icon-small">🤖</div>}
              <div
                className={`message-bubble ${msg.role}`}
                dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
              />
            </div>
          ))}

          {isLoading && (
            <div className="message-row assistant">
              <div className="bot-icon-small">🤖</div>
              <div className="message-bubble assistant typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}

          {messages.length <= 1 && !isLoading && (
            <div className="suggestions-container">
              <p className="suggestions-title">Preguntas frecuentes:</p>
              <div className="suggestions-grid">
                {quickSuggestions.map((s, i) => (
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

        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu pregunta aquí..."
              className="chat-input"
              disabled={isLoading}
              maxLength={500}
            />
            <button
              onClick={() => sendMessage()}
              disabled={isLoading || !input.trim()}
              className="send-btn"
              aria-label="Enviar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          <p className="chat-disclaimer">
            OxBot responde con información predefinida. Verifica datos importantes en secretaría.
          </p>
        </div>
      </div>
    </>
  );
}