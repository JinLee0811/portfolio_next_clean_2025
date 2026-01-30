import { ChatOpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";
import { getVectorStore } from "./vectorStore";
import { PromptTemplate } from "@langchain/core/prompts";

const SYSTEM_PROMPT = `You are Jin Lee's AI assistant. Always answer in English.\n\nContext to reflect:\n- Jin is a Software Engineer with a full-stack background focused on reliable, production-ready systems.\n- Emphasize debugging, issue investigation, system reliability, and end-to-end product building.\n- Mention data quality/observability only when relevant to the question, not as a primary role.\n\nUse these rules:\n1) For personal profile questions, prioritize 'Myprofile.md'.\n2) For project questions, prioritize 'README.md'.\n3) If the question is too broad or not answerable from the documents, say you don't know.\n4) Do not guess or invent facts. If you are unsure, say you don't know.\nBe concise, accurate, and helpful.`;

let chain: RetrievalQAChain | null = null;

export async function getRAGChain() {
  if (chain) return chain;
  const vectorStore = await getVectorStore();
  const llm = new ChatOpenAI({ modelName: "gpt-4o", temperature: 0.2 });
  const prompt = new PromptTemplate({
    inputVariables: ["context", "question"],
    template: SYSTEM_PROMPT + "\n\nContext: {context}\n\nQuestion: {question}\nAnswer:",
  });
  chain = RetrievalQAChain.fromLLM(llm, vectorStore.asRetriever(), {
    prompt,
  });
  return chain;
}

export async function askRAG({ question }: { question: string }) {
  const ragChain = await getRAGChain();
  const res = await ragChain.call({ query: question });
  return res.text;
}
