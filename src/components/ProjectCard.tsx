"use client";

import Image from "next/image";
import { Project } from "../types/project";
import Link from "next/link";
import { ArrowUpRightIcon, CodeBracketIcon, LinkIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export default function ProjectCard({ project, isFeatured = false }: ProjectCardProps) {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, "-");

  if (isFeatured) {
    return (
      <Link
        href={`/projects/${projectSlug}`}
        className='group relative block rounded-xl bg-slate-50 dark:bg-navy-light hover:bg-white dark:hover:bg-navy-lighter transition-all duration-300 overflow-hidden hover:shadow-lg hover:-translate-y-1'>
        <div className='flex gap-6 p-6'>
          {/* Project Image */}
          <div className='relative w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200 dark:bg-navy-dark group-hover:shadow-xl transition-all duration-300'>
            {project.imageUrls && project.imageUrls.length > 0 ? (
              <>
                <Image
                  src={project.imageUrls[0]}
                  alt={project.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300' />
              </>
            ) : (
              <div className='absolute inset-0 flex items-center justify-center text-slate-400'>
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

          {/* Project Info */}
          <div className='flex-1 min-w-0'>
            <div className='flex items-center gap-2 mb-2'>
              <h3 className='text-xl font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors'>
                {project.title}
              </h3>
              <ArrowUpRightIcon className='w-5 h-5 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1' />
            </div>

            <p className='text-base text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors'>
              {project.thumbnailSummary}
            </p>

            <div className='flex flex-wrap gap-2'>
              {project.technologies.slice(0, 6).map((tech, index) => (
                <span
                  key={index}
                  className='px-2 py-1 text-xs font-medium rounded 
                           text-slate-700 dark:text-slate-300 
                           bg-slate-200/50 dark:bg-slate-700/30
                           group-hover:bg-green-100 dark:group-hover:bg-green-900/20
                           group-hover:text-green-700 dark:group-hover:text-green-300
                           transition-all duration-300
                           whitespace-nowrap'>
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span
                  className='px-2 py-1 text-xs font-medium rounded 
                             text-slate-700 dark:text-slate-300 
                             bg-slate-200/50 dark:bg-slate-700/30
                             group-hover:bg-green-100 dark:group-hover:bg-green-900/20
                             group-hover:text-green-700 dark:group-hover:text-green-300
                             transition-all duration-300'>
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${projectSlug}`}
      className='group block rounded-lg bg-white dark:bg-navy-light border border-slate-200 dark:border-navy hover:border-slate-300 dark:hover:border-navy-lighter transition-colors overflow-hidden'>
      <div className='relative aspect-[16/9] bg-slate-100 dark:bg-navy-dark overflow-hidden'>
        {project.imageUrls && project.imageUrls.length > 0 ? (
          <>
            <Image
              src={project.imageUrls[0]}
              alt={project.title}
              fill
              className='object-cover group-hover:scale-105 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300'>
              <div className='opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center text-white'>
                <span>View Details</span>
                <ArrowUpRightIcon className='w-4 h-4 ml-1' />
              </div>
            </div>
          </>
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

      <div className='p-4'>
        <div className='flex items-center justify-between mb-2'>
          <h3
            className='text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors 
                       line-clamp-1 group-hover:line-clamp-none'>
            {project.title}
          </h3>
          <span className='text-xs text-slate-500 dark:text-slate-400 ml-2 flex-shrink-0'>
            {project.date}
          </span>
        </div>

        <p
          className='text-sm text-slate-600 dark:text-slate-300 mb-3 
                   line-clamp-2 group-hover:line-clamp-none 
                   min-h-[2.5rem] group-hover:min-h-fit'>
          {project.thumbnailSummary}
        </p>

        <div className='flex flex-wrap gap-1.5 mb-3'>
          {project.technologies.slice(0, 6).map((tech, index) => (
            <span
              key={index}
              className='px-1.5 py-0.5 text-[10px] font-mono rounded-md 
                       text-teal-700 dark:text-teal-300 
                       bg-teal-100 dark:bg-teal-900/30 
                       border border-teal-200/80 dark:border-teal-800/80
                       whitespace-nowrap'>
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span
              className='px-1.5 py-0.5 text-[10px] font-mono rounded-md 
                         text-teal-700 dark:text-teal-300 
                         bg-teal-100 dark:bg-teal-900/30 
                         border border-teal-200/80 dark:border-teal-800/80'>
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        <div className='flex items-center gap-2'>
          {project.githubUrl && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(project.githubUrl, "_blank", "noopener,noreferrer");
              }}
              className='p-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'>
              <CodeBracketIcon className='w-4 h-4' />
            </button>
          )}
          {project.liveUrl && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(project.liveUrl, "_blank", "noopener,noreferrer");
              }}
              className='p-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'>
              <LinkIcon className='w-4 h-4' />
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
