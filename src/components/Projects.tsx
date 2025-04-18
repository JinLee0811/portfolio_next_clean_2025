import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  techStack: { name: string; icon?: string }[];
  buildProcess: string[];
  challenges: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "포트폴리오 웹사이트",
    description: `Next.js와 TypeScript를 활용한 개인 포트폴리오 웹사이트입니다.

모던하고 미니멀한 디자인을 추구하였으며, Framer Motion을 활용한 부드러운 애니메이션으로 사용자 경험을 향상시켰습니다.

다크 모드를 지원하며, 반응형 디자인으로 모든 디바이스에서 최적화된 경험을 제공합니다.`,
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    techStack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    buildProcess: [
      "Next.js와 TypeScript를 사용하여 정적 웹사이트 구축",
      "Tailwind CSS로 반응형 디자인 구현",
      "Framer Motion을 활용한 부드러운 애니메이션 효과 추가",
      "다크 모드 지원 및 사용자 설정 저장",
      "컴포넌트 기반 아키텍처 설계",
    ],
    challenges: [
      "효율적인 컴포넌트 구조 설계와 재사용성 확보",
      "성능 최적화 및 웹 접근성 개선",
      "다크 모드 구현 시 일관된 디자인 시스템 유지",
      "애니메이션 성능 최적화",
    ],
    thumbnail: "https://placehold.co/600x400",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
  {
    id: "2",
    title: "AI 기반 일정 관리 앱",
    description: `OpenAI API를 활용하여 사용자의 일정을 자동으로 분석하고 최적화하는 웹 애플리케이션입니다.

자연어 처리를 통해 사용자의 일정을 이해하고, 우선순위를 자동으로 설정하며, 시간 관리 제안을 제공합니다.

React Query를 활용한 효율적인 데이터 관리와 실시간 업데이트를 구현했습니다.`,
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
    techStack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "OpenAI API" },
      { name: "React Query" },
      { name: "Chakra UI" },
    ],
    buildProcess: [
      "OpenAI API 통합 및 프롬프트 엔지니어링",
      "React Query를 활용한 서버 상태 관리",
      "일정 분석 알고리즘 개발",
      "실시간 데이터 동기화 구현",
    ],
    challenges: [
      "OpenAI API 응답 최적화 및 비용 효율성 확보",
      "복잡한 상태 관리 해결을 위한 아키텍처 설계",
      "사용자 피드백을 반영한 UX 개선",
      "대규모 데이터 처리 성능 최적화",
    ],
    thumbnail: "https://placehold.co/600x400",
    liveUrl: "https://ai-scheduler.demo.com",
    githubUrl: "https://github.com/yourusername/ai-scheduler",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleProjectClick(project: Project) {
    console.log("Project clicked:", project.title);
    setSelectedProject(project);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  }

  return (
    <section id='projects' className='min-h-screen py-20'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='container mx-auto px-4 max-w-6xl'>
        <h2 className='text-3xl font-bold text-slate-lightest mb-8'>프로젝트</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className='group relative bg-navy-light rounded-lg overflow-hidden cursor-pointer'>
              <div
                className='relative h-64 w-full'
                onClick={() => handleProjectClick(project)}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleProjectClick(project)}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-navy-dark/0 dark:bg-slate-lightest/0 group-hover:bg-navy-dark/10 dark:group-hover:bg-slate-lightest/10 transition-colors duration-300' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-slate-lightest mb-2'>{project.title}</h3>
                <p className='text-slate line-clamp-2'>{project.description}</p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.techStack.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 bg-navy-dark rounded-full text-xs text-slate-lightest'>
                      {tech.name}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className='px-2 py-1 bg-navy-dark rounded-full text-xs text-slate-lightest'>
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedProject && (
        <ProjectModal isOpen={isModalOpen} closeModal={closeModal} project={selectedProject} />
      )}
    </section>
  );
}
