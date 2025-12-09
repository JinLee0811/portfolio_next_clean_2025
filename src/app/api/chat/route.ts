import { NextResponse } from "next/server";
import { askRAG } from "@/lib/rag/chain";

const chatHistory: { role: "user" | "assistant"; content: string }[] = [];

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY is not set in environment variables.");
      return NextResponse.json({ error: "OpenAI API key is not configured." }, { status: 500 });
    }

    const { message } = await req.json();
    chatHistory.push({ role: "user", content: message });

    let ragResponse = null;
    try {
      ragResponse = await askRAG({ question: message });
    } catch (err) {
      console.error("RAG Error:", err);
      ragResponse = null;
    }

    let responseText = ragResponse;
    if (!responseText || responseText.trim() === "") {
      // fallback: English answer
      responseText = `Jin Lee is preparing for junior Data Engineer roles, bringing a full-stack background. He focuses on API-driven ETL, orchestration, and analytics-ready modeling, and completed a Master's in IT at UTS (Sydney). Previously a developer in Korea, he enjoys building dependable data pipelines with cloud experience and still leverages his frontend/backend skills when needed.`;
    }

    chatHistory.push({ role: "assistant", content: responseText });
    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "A server error occurred." }, { status: 500 });
  }
}
