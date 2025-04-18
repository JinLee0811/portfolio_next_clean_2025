export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  date: string;
}

export const projects: Project[] = [
  {
    title: "프로젝트 1",
    description: "프로젝트 1에 대한 설명을 여기에 작성하세요.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/project1.png",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
    date: "JAN — MAR 2024",
  },
  {
    title: "프로젝트 2",
    description: "프로젝트 2에 대한 설명을 여기에 작성하세요.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/images/project2.png",
    githubUrl: "https://github.com/yourusername/project2",
    date: "OCT — DEC 2023",
  },
  {
    title: "프로젝트 3",
    description: "프로젝트 3에 대한 설명을 여기에 작성하세요.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    imageUrl: "/images/project3.png",
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3.com",
    date: "JULY — SEP 2023",
  },
];
