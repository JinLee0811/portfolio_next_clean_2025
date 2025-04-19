"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import MouseFollower from "@/components/MouseFollower";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";
import { Project } from "../types/project";
import clsx from "clsx";
import Link from "next/link";
import ChatNotification from "@/components/ChatNotification";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject] = useState<Project | null>(null);
  const [showChatNotification, setShowChatNotification] = useState(false);
  const [hasShownNotification, setHasShownNotification] = useState(false);
  const projectsRef = useRef<HTMLElement>(null);
  const [showLanding, setShowLanding] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // 초기 로드 시 다크모드 설정
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      const sectionElements = sections.map((id) => document.getElementById(id));

      const currentSection = sectionElements.reduce((acc, section) => {
        if (!section) return acc;
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) return section.id;
        return acc;
      }, sections[0]);

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasShownNotification) {
          setTimeout(() => {
            setShowChatNotification(true);
            setHasShownNotification(true);
          }, 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, [hasShownNotification]);

  // Save scroll position before leaving the page
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    // Save position on scroll
    window.addEventListener("scroll", handleScroll);

    // Save position before unload
    window.addEventListener("beforeunload", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleScroll);
    };
  }, []);

  // 최신 프로젝트 4개만 선택
  const recentProjects = projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  if (showLanding) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed inset-0 bg-navy-dark dark:bg-navy-darker flex items-center justify-center z-50 overflow-hidden'>
        {/* 마우스 커서 효과 */}
        {isClient && (
          <motion.div
            className='absolute w-64 h-64 rounded-full pointer-events-none z-0'
            animate={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 128,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              mass: 0.5,
            }}>
            <div className='absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl' />
          </motion.div>
        )}

        {/* 배경 애니메이션 */}
        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20'
        />

        {/* 메인 콘텐츠 */}
        <div className='relative z-10 text-center'>
          {/* 로고 애니메이션 */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1.5,
            }}
            className='mb-8'>
            <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              Jin.Dev
            </h1>
          </motion.div>

          {/* 설명 텍스트 애니메이션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='mb-12'>
            <p className='text-xl text-slate-300 mb-2'>Full Stack Developer</p>
            <p className='text-lg text-slate-400'>& AI Enthusiast</p>
          </motion.div>

          {/* 버튼 애니메이션 */}
          <motion.button
            onClick={() => setShowLanding(false)}
            className='px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}>
            Enter Portfolio
          </motion.button>

          {/* 배경 파티클 효과 */}
          {isClient && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className='absolute inset-0 -z-10'>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-1 h-1 bg-white rounded-full'
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col lg:flex-row",
        isDarkMode ? "bg-navy-dark" : "bg-white"
      )}>
      <MouseFollower />
      <div className='w-full lg:w-1/2 min-h-screen'>
        <Sidebar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          activeSection={activeSection}
        />
      </div>

      <div className='w-full xl:w-3/4 lg:w-3/4 min-h-screen lg:pt-36 xl:pt-24 2xl:pt-28'>
        <main className='w-full h-full'>
          {/* Hero Section */}
          <section id='about' className='min-h-screen flex flex-col justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='space-y-6 px-8'>
              <h2 className='font-mono text-green-600 dark:text-green-400 text-sm'>01. About Me</h2>
              <div className='space-y-6'>
                <p className='text-slate-700 dark:text-slate-300 text-base leading-relaxed group hover:bg-slate-100 dark:hover:bg-navy-light/10 p-3 rounded-lg transition-colors'>
                  I&apos;m a{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    full-stack engineer
                  </span>{" "}
                  based in Sydney with a passion for building{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    intuitive, AI-powered digital products
                  </span>
                  . I specialize in{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    React, TypeScript, and scalable frontend architecture
                  </span>
                  , with hands-on experience integrating{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    APIs, cloud infrastructure, and machine learning models
                  </span>{" "}
                  into real-world applications.
                </p>

                {profile.introduction.detailedBio.map((paragraph, index) => (
                  <p
                    key={index}
                    className='text-slate-700 dark:text-slate-300 text-base leading-relaxed group hover:bg-slate-100 dark:hover:bg-navy-light/10 p-3 rounded-lg transition-colors'>
                    {index === 0 && (
                      <>
                        Currently, I lead the{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          frontend development
                        </span>{" "}
                        of a{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          part-time job marketplace
                        </span>{" "}
                        tailored for{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          international students
                        </span>{" "}
                        in Australia, and an{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          AI-based restaurant review summarizer
                        </span>{" "}
                        built for{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          global travelers
                        </span>
                        . These projects reflect my ability to{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          design, build, and ship complete products
                        </span>{" "}
                        from{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          idea to deployment
                        </span>{" "}
                        —{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          independently or in small teams
                        </span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        Previously, I worked as a developer in Korea while pursuing my{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          Master&apos;s in IT at UTS
                        </span>
                        , where I earned{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          distinction-level results
                        </span>{" "}
                        across{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          AI and software engineering
                        </span>{" "}
                        coursework. I enjoy{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          experimenting with new ideas
                        </span>{" "}
                        in my spare time — whether it&apos;s{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          prototyping microservices
                        </span>
                        ,{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          deploying ML APIs
                        </span>
                        , or{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          designing product interfaces
                        </span>{" "}
                        with{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          Tailwind and Figma
                        </span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        I&apos;m driven by{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          curiosity, practicality
                        </span>
                        , and the{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          excitement
                        </span>{" "}
                        of turning ideas into{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          polished, user-focused experiences
                        </span>{" "}
                        — especially when those ideas can{" "}
                        <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                          scale
                        </span>
                      </>
                    )}
                  </p>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section id='experience' className='min-h-screen py-24'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='px-8'>
              <h2 className='font-mono text-green-600 dark:text-green-400 text-sm mb-4'>
                02. Work Experience
              </h2>
              <div className='space-y-12'>
                {experiences.map((experience, index) => (
                  <div key={index} className='group'>
                    <div className='flex items-center mb-2'>
                      <h3 className='text-lg text-slate-900 dark:text-slate-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors'>
                        {experience.title}
                      </h3>
                      <span className='mx-2 text-slate-700 dark:text-slate-300'>@</span>
                      <a
                        href={experience.companyUrl}
                        className='text-green-600 dark:text-green-400 hover:underline'>
                        {experience.company}
                      </a>
                    </div>
                    <p className='font-mono text-xs text-slate-500 dark:text-slate-400 mb-4'>
                      {experience.date}
                    </p>
                    <ul className='space-y-2'>
                      {experience.description.map((item, idx) => (
                        <li key={idx} className='flex items-start'>
                          <span className='text-green-600 dark:text-green-400 mr-2'>▹</span>
                          <span className='text-slate-700 dark:text-slate-300 text-base'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section ref={projectsRef} id='projects' className='min-h-screen py-24'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='px-8'>
              <h2 className='font-mono text-green-600 dark:text-green-400 text-sm mb-8'>
                03. Featured Projects
              </h2>

              <div className='space-y-6'>
                {recentProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} isFeatured={true} />
                ))}
              </div>

              <div className='text-center mt-12'>
                <Link
                  href='/projects'
                  className='inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors'>
                  <span className='text-lg'>View All Projects</span>
                  <svg
                    className='w-5 h-5 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 7l5 5m0 0l-5 5m5-5H6'
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id='contact' className='min-h-screen py-24 flex items-center justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='text-center px-8'>
              <h2 className='font-mono text-green-600 dark:text-green-400 text-sm mb-4'>
                04. What&apos;s Next?
              </h2>
              <h3 className='text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4'>
                Get In Touch
              </h3>
              <p className='text-slate-700 dark:text-slate-300 max-w-md mx-auto mb-8 text-base'>
                {profile.introduction.currentWork}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className='inline-block py-3 px-6 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 font-mono hover:bg-green-600/10 dark:hover:bg-green-400/10 transition-colors'>
                Say Hello
              </a>
            </motion.div>
          </section>
        </main>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        project={selectedProject}
      />

      <ChatNotification
        isVisible={showChatNotification}
        onClose={() => setShowChatNotification(false)}
      />
    </div>
  );
}
