"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='group cursor-pointer'
      onClick={() => onOpenModal(project)}>
      {/* Project Card */}
      <div className='relative bg-white dark:bg-navy-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
        {/* Image Container */}
        <div className='relative aspect-[16/9] w-full bg-slate-100 dark:bg-navy-dark overflow-hidden'>
          {project.imageUrls && project.imageUrls.length > 0 ? (
            <Image
              src={project.imageUrls[0]}
              alt={`${project.title} screenshot 1`}
              layout='fill'
              objectFit='cover'
              className='transition-transform duration-300 group-hover:scale-105'
            />
          ) : (
            <div className='absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600'>
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </div>
          )}
          {/* Overlay on hover */}
          <div className='absolute inset-0 bg-slate-900/70 dark:bg-navy-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <span className='text-white text-xs font-mono'>View Project</span>
          </div>
        </div>

        {/* Project Info */}
        <div className='p-4'>
          {/* Title and Featured Badge */}
          <div className='flex items-start justify-between mb-2'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors'>
              {project.title}
            </h3>
            {project.featured && (
              <span className='font-mono text-green-600 dark:text-green-400 text-[10px]'>
                Featured
              </span>
            )}
          </div>

          {/* Description */}
          <p className='text-slate-700 dark:text-slate-300 text-sm mb-3 line-clamp-2'>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className='flex flex-wrap gap-1.5 mb-3'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='px-1.5 py-0.5 text-[10px] font-mono rounded-full
                  text-green-600 dark:text-green-400
                  bg-green-100 dark:bg-green-900/20
                  border border-green-200 dark:border-green-800'>
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className='flex items-center space-x-3'>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors'
                onClick={(e) => e.stopPropagation()}>
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors'
                onClick={(e) => e.stopPropagation()}>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
