import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { TextLoader } from "langchain/document_loaders/fs/text";
import path from "path";
import fs from "fs";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const DOCS_DIR = path.join(process.cwd(), "docs");

export async function loadAllDocuments() {
  const files = fs.readdirSync(DOCS_DIR);
  const docs = [];
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 100,
  });

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const filePath = path.join(DOCS_DIR, file);
    let loader;
    if (ext === ".pdf") {
      loader = new PDFLoader(filePath);
    } else if (ext === ".txt" || ext === ".md") {
      loader = new TextLoader(filePath);
    } else {
      continue; // 지원하지 않는 확장자
    }
    // 각 파일을 LangChain 문서 객체로 변환
    const loaded = await loader.load();
    // chunk로 분할
    const splitDocs = await splitter.splitDocuments(loaded);
    docs.push(...splitDocs);
  }
  if (docs.length === 0) {
    throw new Error("No document found in docs folder");
  }
  return docs;
}
