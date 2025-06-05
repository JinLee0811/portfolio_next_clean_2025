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
      responseText = `Jin Lee is a passionate full-stack and AI developer. He started coding in late 2021, is currently pursuing a Master's in IT at UTS (Sydney), is AWS DevOps Engineer certified, and has won a national AI competition.`;
    }

    chatHistory.push({ role: "assistant", content: responseText });
    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "A server error occurred." }, { status: 500 });
  }
}
