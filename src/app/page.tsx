"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import MouseFollower from "@/components/MouseFollower";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "../data/projects";
import { experiences } from "../data/experience";
import { Project } from "../types/project";
import clsx from "clsx";
import Link from "next/link";
import ChatNotification from "@/components/ChatNotification";
import { insights } from "../data/insights";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject] = useState<Project | null>(null);
  const [showChatNotification, setShowChatNotification] = useState(false);
  const [hasShownNotification, setHasShownNotification] = useState(false);
  const projectsRef = useRef<HTMLElement | null>(null);
  const [showLanding, setShowLanding] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const hasSeenLanding = sessionStorage.getItem("hasSeenLanding");
    const hasShownChatNotif = sessionStorage.getItem("hasShownChatNotification");

    if (hasSeenLanding) {
      setShowLanding(false);
    }
    if (hasShownChatNotif) {
      setHasShownNotification(true);
    }
  }, []);

  useEffect(() => {
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
      const sections = ["about", "experience", "projects", "insights"];
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
    if (showLanding) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;

        if (isIntersecting && !hasShownNotification) {
          setShowChatNotification(true);
          setHasShownNotification(true);
          sessionStorage.setItem("hasShownChatNotification", "true");
        }
      },
      { threshold: 0.1, rootMargin: "0px" },
    );

    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, [hasShownNotification, showLanding]);

  useEffect(() => {
    let savedPosition = 0;

    const handleScroll = () => {
      savedPosition = window.scrollY;
      sessionStorage.setItem("scrollPosition", savedPosition.toString());
    };

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", scrollToHash);

    if (window.location.hash) {
      setTimeout(scrollToHash, 120);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const [projectFilter, setProjectFilter] = useState<"data" | "dev">("data");

  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const dataProjectTitles = new Set(["AI Crop Doctor", "Data Analysis Web Service"]);

  const dataProjects = sortedProjects
    .filter((project) => dataProjectTitles.has(project.title))
    .slice(0, 2);

  const devProjects = sortedProjects
    .filter((project) => !dataProjectTitles.has(project.title))
    .slice(0, 2);

  const displayedProjects = projectFilter === "data" ? dataProjects : devProjects;

  const handleEnterPortfolio = () => {
    setShowLanding(false);
    sessionStorage.setItem("hasSeenLanding", "true");
  };

  if (showLanding) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed inset-0 bg-navy-dark dark:bg-navy-darker flex items-center justify-center z-50 overflow-hidden'>
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

        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20'
        />

        <div className='relative z-10 text-center'>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='mb-12'>
            <p className='text-xl text-slate-300 mb-2'>Software Engineer</p>
            <p className='text-lg text-slate-400'>Data-first, insight-driven builder</p>
          </motion.div>

          <motion.button
            onClick={handleEnterPortfolio}
            className='px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}>
            Enter Portfolio
          </motion.button>

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
        isDarkMode ? "bg-navy-dark" : "bg-white",
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
                    full-stack software engineer
                  </span>{" "}
                  based in Sydney with about{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    3.5 years
                  </span>{" "}
                  of experience delivering production-grade web applications across frontend,
                  backend, and cloud. I focus on{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    React, TypeScript, and Node.js
                  </span>
                  , and I&apos;m an{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    AWS Certified DevOps Engineer – Professional
                  </span>
                  .
                </p>
                <p className='text-slate-700 dark:text-slate-300 text-base leading-relaxed group hover:bg-slate-100 dark:hover:bg-navy-light/10 p-3 rounded-lg transition-colors'>
                  I enjoy designing{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    scalable APIs
                  </span>
                  , integrating{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    secure payment systems
                  </span>
                  , and shipping reliable services on AWS—with attention to{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    performance, observability, and real user impact
                  </span>
                  .
                </p>

                <p className='text-slate-700 dark:text-slate-300 text-base leading-relaxed group hover:bg-slate-100 dark:hover:bg-navy-light/10 p-3 rounded-lg transition-colors'>
                  Recently I&apos;ve built products such as{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    Before You Go
                  </span>{" "}
                  (AI restaurant review analytics) and this site&apos;s{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    RAG-based portfolio chatbot
                  </span>
                  . In industry I&apos;ve shipped reservation and payment APIs at TPZ Studio and led a
                  React migration plus platform delivery at Youniv in Seoul.
                </p>

                <p className='text-slate-700 dark:text-slate-300 text-base leading-relaxed group hover:bg-slate-100 dark:hover:bg-navy-light/10 p-3 rounded-lg transition-colors'>
                  I completed my{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    Master of IT (Software Development) at UTS
                  </span>{" "}
                  with a WAM of 90.50 (HD) and{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    Dean&apos;s List (2024–2025)
                  </span>
                  . I have{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    full Australian work rights
                  </span>{" "}
                  (Partner Visa; no sponsorship required). I also use AI-assisted development tools
                  thoughtfully to move faster while keeping quality high.
                </p>

                <p className='text-slate-700 dark:text-slate-300 text-base leading-relaxed group hover:bg-slate-100 dark:hover:bg-navy-light/10 p-3 rounded-lg transition-colors'>
                  I&apos;m driven by{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    clarity, reliability
                  </span>
                  , and the satisfaction of turning ideas into{" "}
                  <span className='text-slate-900 group-hover:text-green-600 dark:text-slate-300 dark:group-hover:text-green-400 transition-colors'>
                    systems that scale
                  </span>{" "}
                  for users and the teams behind them.
                </p>
              </div>
            </motion.div>
          </section>

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
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          className='text-green-600 dark:text-green-400 hover:underline'>
                          {experience.company}
                        </a>
                      ) : (
                        <span className='text-green-600 dark:text-green-400'>{experience.company}</span>
                      )}
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

          <section id='projects' className='min-h-screen py-24' ref={projectsRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='px-8'>
              <h2 className='font-mono text-green-600 dark:text-green-400 text-sm mb-8'>
                03. Featured Projects
              </h2>

              <div className='flex flex-wrap gap-3 mb-6'>
                {[
                  { key: "dev", label: "Full-Stack / Product" },
                  { key: "data", label: "Data Engineering" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setProjectFilter(tab.key as "data" | "dev")}
                    className={clsx(
                      "px-4 py-2 rounded-lg border transition-colors text-sm font-medium",
                      projectFilter === tab.key
                        ? "border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 bg-green-50 dark:bg-green-400/10"
                        : "border-slate-200 text-slate-600 hover:border-green-600 hover:text-green-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-green-400 dark:hover:text-green-400",
                    )}>
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className='space-y-6'>
                {displayedProjects.map((project) => (
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

          <section id='insights' className='min-h-screen py-24'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='px-8'>
              <h2 className='font-mono text-green-600 dark:text-green-400 text-sm mb-4'>
                04. Data Insights
              </h2>
              <h3 className='text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
                (Small findings from data)
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {insights.slice(0, 4).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}`}
                    className='p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-navy-light/30 shadow-sm hover:shadow-md transition-shadow block'>
                    <div className='flex items-center gap-2 text-sm font-mono text-green-600 dark:text-green-400 mb-2'>
                      <span>{item.emoji}</span>
                      <span>{item.tag}</span>
                    </div>
                    <h4 className='text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2'>
                      {item.title}
                    </h4>
                    <p className='text-slate-700 dark:text-slate-300 text-base leading-relaxed'>
                      {item.excerpt}
                    </p>
                  </Link>
                ))}
              </div>

              <div className='mt-10 flex flex-wrap gap-4 items-center'>
                <Link
                  href='/insights'
                  className='inline-flex items-center justify-center px-5 py-3 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 font-mono hover:bg-green-600/10 dark:hover:bg-green-400/10 transition-colors'>
                  View Insights
                </Link>
              </div>
            </motion.div>
          </section>
        </main>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}

      <ChatNotification
        isVisible={showChatNotification}
        onClose={() => setShowChatNotification(false)}
      />
    </div>
  );
}
