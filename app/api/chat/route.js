// app/api/chat/route.js
import { findAnswer } from "../../../lib/knowledge";

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "El mensaje es requerido" },
        { status: 400 }
      );
    }

    const result = findAnswer(message);

    return Response.json({
      response: result.answer,
      found: result.found,
    });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({
      response:
        "😅 Algo salió mal. Intenta de nuevo o reformula tu pregunta.",
      found: false,
    });
  }
}