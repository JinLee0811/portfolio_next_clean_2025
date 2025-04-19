"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../types/project";
import Link from "next/link";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/projects/${projectSlug}`}
      className='group block rounded-lg bg-white dark:bg-navy-light border border-slate-200 dark:border-navy hover:border-slate-300 dark:hover:border-navy-lighter transition-colors overflow-hidden'>
      <div className='relative aspect-[16/9] bg-slate-100 dark:bg-navy-dark overflow-hidden'>
        {project.imageUrls && project.imageUrls.length > 0 ? (
          <Image
            src={project.imageUrls[0]}
            alt={project.title}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-300'
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
      </div>

      <div className='p-4 sm:p-6'>
        <div className='flex items-center justify-between mb-3'>
          <h3 className='text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-1'>
            {project.title}
          </h3>
          <span className='text-xs sm:text-sm text-slate-500 dark:text-slate-400 ml-2 flex-shrink-0'>
            {project.date}
          </span>
        </div>

        <p className='text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 h-[40px] sm:h-[48px]'>
          {project.description}
        </p>

        <div className='flex flex-wrap gap-1.5 mb-4 max-h-[60px] overflow-hidden'>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='px-2 py-0.5 text-xs font-mono rounded-md 
                       text-teal-700 dark:text-teal-300 
                       bg-teal-100 dark:bg-teal-900/30 
                       border border-teal-200/80 dark:border-teal-800/80
                       whitespace-nowrap'>
              {tech}
            </span>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          {project.githubUrl && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(project.githubUrl, "_blank", "noopener,noreferrer");
              }}
              className='p-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'>
              <CodeBracketIcon className='w-5 h-5' />
            </button>
          )}
          {project.liveUrl && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(project.liveUrl, "_blank", "noopener,noreferrer");
              }}
              className='p-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'>
              <LinkIcon className='w-5 h-5' />
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
