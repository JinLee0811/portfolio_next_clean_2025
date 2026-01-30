import { NextResponse } from "next/server";
import { askRAG } from "@/lib/rag/chain";

const chatHistory: { role: "user" | "assistant"; content: string }[] = [];

export async function POST(req: Request) {
  try {
    const fallbackResponse =
      "Jin Lee is a software engineer with a full-stack background and a data-first mindset. He builds reliable backend services, product features, and analytics-ready pipelines, and completed a Master's in IT at UTS (Sydney). Previously a developer in Korea, he enjoys shipping dependable products while keeping data quality and observability in mind.";

    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY is not set in environment variables.");
      return NextResponse.json({ response: fallbackResponse });
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
      responseText = fallbackResponse;
    }

    chatHistory.push({ role: "assistant", content: responseText });
    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "A server error occurred." }, { status: 500 });
  }
}
