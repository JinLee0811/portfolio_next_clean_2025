"use client";

import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { CodeBracketIcon, LinkIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface PageProps {
  params: {
    slug: string;
  };
}

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.title.toLowerCase().replace(/\s+/g, "-") === slug);
}

export default function ProjectPage({ params }: PageProps) {
  const router = useRouter();
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className='relative min-h-screen w-full pt-8 pb-16 px-8'>
      <button
        onClick={() => router.back()}
        className='fixed top-8 right-8 p-2 rounded-full bg-white dark:bg-navy-light shadow-md hover:shadow-lg transition-shadow z-10'>
        <ArrowLeftIcon className='w-5 h-5 text-slate-600 dark:text-slate-300' />
      </button>

      <article className='max-w-5xl mx-auto'>
        {/* 헤더 섹션 */}
        <header className='mb-12'>
          <h1 className='text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4'>
            {project.title}
          </h1>
          <div className='flex items-center gap-4 mb-6'>
            <time className='text-slate-600 dark:text-slate-400'>{project.date}</time>
            <div className='flex gap-2'>
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-light hover:bg-slate-200 dark:hover:bg-navy-light/80 transition-colors'>
                  <CodeBracketIcon className='w-4 h-4' /> GitHub
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md text-white bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 transition-colors'>
                  <LinkIcon className='w-4 h-4' /> Live Demo
                </Link>
              )}
            </div>
          </div>
          <div className='prose dark:prose-invert max-w-none'>
            <p className='text-lg text-slate-700 dark:text-slate-300'>{project.description}</p>
          </div>
        </header>

        {/* 이미지 갤러리 */}
        <section className='mb-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {project.imageUrls.map((url, index) => (
              <div
                key={index}
                className='relative aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-navy-light'>
                <Image
                  src={url}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </section>

        {/* 기술 스택 */}
        <section className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
            Technologies Used
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div>
              <h3 className='font-medium text-slate-800 dark:text-slate-200 mb-3'>Core Stack</h3>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='px-2.5 py-1 text-sm font-mono rounded-md 
                             text-teal-700 dark:text-teal-300 
                             bg-teal-100 dark:bg-teal-900/30 
                             border border-teal-200/80 dark:border-teal-800/80'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.techInfra && (
              <div>
                <h3 className='font-medium text-slate-800 dark:text-slate-200 mb-3'>
                  Infrastructure
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.techInfra.map((tech, index) => (
                    <span
                      key={index}
                      className='px-2.5 py-1 text-sm font-mono rounded-md 
                               text-blue-700 dark:text-blue-300 
                               bg-blue-100 dark:bg-blue-900/30 
                               border border-blue-200/80 dark:border-blue-800/80'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techDbApi && (
              <div>
                <h3 className='font-medium text-slate-800 dark:text-slate-200 mb-3'>
                  Database & APIs
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.techDbApi.map((tech, index) => (
                    <span
                      key={index}
                      className='px-2.5 py-1 text-sm font-mono rounded-md 
                               text-purple-700 dark:text-purple-300 
                               bg-purple-100 dark:bg-purple-900/30 
                               border border-purple-200/80 dark:border-purple-800/80'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 프로젝트 개요 */}
        <section className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
            Project Overview
          </h2>
          <div className='prose dark:prose-invert max-w-none'>
            {project.projectGoal && (
              <div className='mb-6'>
                <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3'>
                  Project Goal
                </h3>
                <p className='text-slate-700 dark:text-slate-300'>{project.projectGoal}</p>
              </div>
            )}
            {project.coreValue && (
              <div className='mb-6'>
                <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3'>
                  Core Value
                </h3>
                <p className='text-slate-700 dark:text-slate-300'>{project.coreValue}</p>
              </div>
            )}
          </div>
        </section>

        {/* 주요 기능 */}
        {project.keyFeatures && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
              Key Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {project.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className='p-6 rounded-lg bg-slate-50 dark:bg-navy-light/30 border border-slate-200 dark:border-navy-light'>
                  <h3 className='text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-slate-600 dark:text-slate-400'>{feature.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 아키텍처 & 설계 */}
        {(project.architectureDesc || project.architectureChoice) && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
              Architecture & Design
            </h2>
            <div className='prose dark:prose-invert max-w-none'>
              {project.architectureDesc && (
                <div className='mb-6'>
                  <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3'>
                    Overview
                  </h3>
                  <p className='text-slate-700 dark:text-slate-300'>{project.architectureDesc}</p>
                </div>
              )}
              {project.architectureChoice && (
                <div>
                  <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3'>
                    Design Decisions
                  </h3>
                  <p className='text-slate-700 dark:text-slate-300'>{project.architectureChoice}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 도전 과제 & 해결 방안 */}
        {project.challenges && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
              Challenges & Solutions
            </h2>
            <div className='space-y-6'>
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className='p-6 rounded-lg bg-slate-50 dark:bg-navy-light/30 border border-slate-200 dark:border-navy-light'>
                  <h3 className='text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3'>
                    Challenge
                  </h3>
                  <p className='text-slate-700 dark:text-slate-300 mb-4'>{challenge.problem}</p>
                  <h3 className='text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3'>
                    Solution
                  </h3>
                  <p className='text-slate-700 dark:text-slate-300'>{challenge.solution}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 성과 */}
        {project.achievements && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
              Achievements
            </h2>
            <ul className='list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300'>
              {project.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 협업 & 워크플로우 */}
        {project.collaboration && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
              Collaboration & Workflow
            </h2>
            <ul className='list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300'>
              {project.collaboration.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 테스팅 & QA */}
        {project.testing && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
              Testing & QA
            </h2>
            <ul className='list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300'>
              {project.testing.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 배포 & 모니터링 */}
        {project.deployment && (
          <section className='mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
              Deployment & Monitoring
            </h2>
            <ul className='list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300'>
              {project.deployment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 학습한 점 */}
        {project.lessonsLearned && (
          <section>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6'>
              Lessons Learned
            </h2>
            <ul className='list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300'>
              {project.lessonsLearned.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </motion.div>
  );
}
