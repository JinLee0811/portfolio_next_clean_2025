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
      <div className='relative aspect-video bg-slate-100 dark:bg-navy-dark overflow-hidden'>
        {project.imageUrls && project.imageUrls.length > 0 ? (
          <Image
            src={project.imageUrls[0]}
            alt={project.title}
            layout='fill'
            objectFit='cover'
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
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

      <div className='p-6'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors'>
            {project.title}
          </h3>
          <span className='text-sm text-slate-500 dark:text-slate-400'>{project.date}</span>
        </div>

        <p className='text-slate-600 dark:text-slate-300 mb-6 line-clamp-2'>
          {project.description}
        </p>

        <div className='flex flex-wrap gap-2 mb-6'>
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className='px-2 py-1 text-xs font-mono rounded-md 
                       text-teal-700 dark:text-teal-300 
                       bg-teal-100 dark:bg-teal-900/30 
                       border border-teal-200/80 dark:border-teal-800/80'>
              {tech}
            </span>
          ))}
        </div>

        <div className='flex items-center gap-3'>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'
              onClick={(e) => e.stopPropagation()}>
              <CodeBracketIcon className='w-5 h-5' />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'
              onClick={(e) => e.stopPropagation()}>
              <LinkIcon className='w-5 h-5' />
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}
