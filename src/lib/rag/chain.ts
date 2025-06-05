import { ChatOpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";
import { getVectorStore } from "./vectorStore";
import { PromptTemplate } from "@langchain/core/prompts";

const SYSTEM_PROMPT = `You are Jin Lee's AI assistant. Always answer in English.\n\nFor questions about Jin Lee's personal profile, prioritize information from 'Myprofile.md'.\nFor questions about specific projects, prioritize information from 'README.md'.\nIf the answer is not in the documents, say you don't know. Be natural, accurate, and helpful.`;

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
