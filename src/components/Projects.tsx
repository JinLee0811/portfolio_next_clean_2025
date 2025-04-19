"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import Image from "next/image";
import { Project } from "@/types/project";
import { projects } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory
  );

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
    <section id='projects' className='min-h-screen py-24'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8'>Projects</h2>

        <div className='flex flex-wrap gap-4 mb-8'>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "all" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
            }`}>
            All
          </button>
          <button
            onClick={() => setSelectedCategory("Team Projects")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "Team Projects"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}>
            Team Projects
          </button>
          <button
            onClick={() => setSelectedCategory("Personal")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "Personal"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}>
            Personal
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              className='group relative bg-navy-light rounded-lg overflow-hidden cursor-pointer'>
              <div
                className='relative h-64 w-full'
                onClick={() => handleProjectClick(project)}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleProjectClick(project)}>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  className='w-full h-full object-cover'
                  width={256}
                  height={192}
                />
                <div className='absolute inset-0 bg-navy-dark/0 dark:bg-slate-lightest/0 group-hover:bg-navy-dark/10 dark:group-hover:bg-slate-lightest/10 transition-colors duration-300' />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-slate-lightest mb-2'>{project.title}</h3>
                <p className='text-slate line-clamp-2'>{project.thumbnailSummary}</p>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className='px-2 py-1 bg-navy-dark rounded-full text-xs text-slate-lightest'>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className='px-2 py-1 bg-navy-dark rounded-full text-xs text-slate-lightest'>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal isOpen={isModalOpen} closeModal={closeModal} project={selectedProject} />
      )}
    </section>
  );
}
