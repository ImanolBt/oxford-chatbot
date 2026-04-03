// app/api/chat/route.js
import { findAnswer, findDocenteAnswer } from "../../../lib/knowledge";

export async function POST(request) {
  try {
    const { message, mode } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "El mensaje es requerido" },
        { status: 400 }
      );
    }

    // Usar buscador según el modo
    const result = mode === "docente" ? findDocenteAnswer(message) : findAnswer(message);

    return Response.json({
      response: result.answer,
      found: result.found,
    });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({
      response: "😅 Algo salió mal. Intenta de nuevo o reformula tu pregunta.",
      found: false,
    });
  }
}