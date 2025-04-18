export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: "react",
    category: "frontend",
  },
  {
    name: "Next.js",
    icon: "nextjs",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: "nodejs",
    category: "backend",
  },
  {
    name: "Express",
    icon: "express",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    category: "backend",
  },

  // Tools
  {
    name: "Git",
    icon: "git",
    category: "tools",
  },
  {
    name: "VS Code",
    icon: "vscode",
    category: "tools",
  },
  {
    name: "Docker",
    icon: "docker",
    category: "tools",
  },

  // Other
  {
    name: "Figma",
    icon: "figma",
    category: "other",
  },
  {
    name: "AWS",
    icon: "aws",
    category: "other",
  },
];
