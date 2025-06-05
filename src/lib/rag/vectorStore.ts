import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { loadAllDocuments } from "./loader";

let vectorStore: MemoryVectorStore | null = null;

export async function getVectorStore() {
  if (vectorStore) return vectorStore;
  const docs = await loadAllDocuments();
  const embeddings = new OpenAIEmbeddings();
  vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);
  return vectorStore;
}

export async function searchSimilarDocuments(query: string, k = 4) {
  const store = await getVectorStore();
  return store.similaritySearch(query, k);
}
