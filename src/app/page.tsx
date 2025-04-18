"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";
import MouseFollower from "@/components/MouseFollower";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";
import { Project } from "../types/project";
import clsx from "clsx";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // 초기 로드 시 다크모드 설정
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

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

  const handleFilterChange = (category: string, tech: string) => {
    let filtered = [...projects];

    if (category !== "All") {
      filtered = filtered.filter((project) => {
        if (category === "Featured") return project.featured;
        return project.category === category;
      });
    }

    if (tech !== "All") {
      filtered = filtered.filter((project) =>
        project.technologies.some((t) => t.toLowerCase() === tech.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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

      <div className='w-full lg:w-1/2 min-h-screen'>
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
          <section id='projects' className='min-h-screen py-24'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='px-8'>
              <h2 className='font-mono text-green-600 dark:text-green-400 text-sm mb-4'>
                03. Some Things I&apos;ve Built
              </h2>

              <ProjectFilters onFilterChange={handleFilterChange} />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} onOpenModal={openModal} />
                ))}
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

      <ProjectModal isOpen={isModalOpen} closeModal={closeModal} project={selectedProject} />
    </div>
  );
}
