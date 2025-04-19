export interface Project {
  title: string;
  description: string; // Could be part of Project Overview
  // imageUrl: string;  // 이전 필드 주석 처리 또는 삭제
  imageUrls: string[]; // Demo & Screenshots
  thumbnail: string; // 프로젝트 썸네일 이미지
  technologies: string[]; // Base Tech Stack
  githubUrl?: string; // Links
  liveUrl?: string; // Links
  date: string; // Consider making this { start: string, end: string } if needed for Timeline
  featured: boolean;
  category: "Team Projects" | "Personal" | "Open Source";

  // --- Added Fields ---

  // Project Overview
  projectGoal?: string; // The goal and context
  coreValue?: string; // Summary of core value (can merge with description)

  // Timeline & Your Role
  yourRole?: string[]; // Responsibilities

  // Detailed Tech Stack
  techInfra?: string[]; // Infrastructure & DevOps
  techDbApi?: string[]; // Databases & APIs

  // Key Features & Implementation Details
  keyFeatures?: { title: string; detail: string }[]; // Feature details

  // Architecture & Design
  architectureDesc?: string; // Architecture description (textual)
  architectureChoice?: string; // Rationale for choices (e.g., state management)

  // Challenges & Solutions
  challenges?: { problem: string; solution: string }[]; // Problems and solutions

  // Achievements & Metrics
  achievements?: string[]; // Metrics, results

  // Collaboration & Workflow
  collaboration?: string[]; // Process, tools

  // Testing & QA
  testing?: string[]; // Testing strategy, tools

  // Deployment & Monitoring
  deployment?: string[]; // Deployment process, monitoring

  // Lessons Learned
  lessonsLearned?: string[]; // Key takeaways

  thumbnailSummary: string;
}
