"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useState } from "react";
import ImageViewerModal from "@/components/ImageViewerModal";
import {
  CodeBracketIcon,
  ArrowLeftIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  BuildingLibraryIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BeakerIcon,
  ServerStackIcon,
  SparklesIcon,
  PhotoIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.title.toLowerCase().replace(/\s+/g, "-") === slug);
}

export default function ProjectPage({ params }: PageProps) {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const resolvedParams = use(params);
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsImageViewerOpen(true);
  };

  return (
    <div className='relative w-full'>
      <Link
        href='/#projects'
        className='fixed top-8 right-8 p-2 rounded-full bg-white dark:bg-navy-light shadow-md hover:shadow-lg transition-shadow z-10'>
        <ArrowLeftIcon className='w-5 h-5 text-slate-600 dark:text-slate-300' />
      </Link>

      <article className='max-w-5xl mx-auto pt-8 pb-16 px-8'>
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
                  <RocketLaunchIcon className='w-4 h-4' /> Live Demo
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* 기술 스택 */}
        <section className='mb-12 bg-slate-50 dark:bg-navy-light/30 p-6 rounded-xl border border-slate-200 dark:border-navy-light'>
          <div className='flex items-center gap-2 mb-6'>
            <WrenchScrewdriverIcon className='w-6 h-6 text-green-600 dark:text-green-400' />
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
              Technologies Used
            </h2>
          </div>
          <div className='space-y-6'>
            <div className='bg-white dark:bg-navy-light/50 p-4 rounded-lg'>
              <h3 className='font-medium text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                <CodeBracketIcon className='w-5 h-5 text-teal-600 dark:text-teal-400' />
                Core Stack
              </h3>
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

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {project.techInfra && (
                <div className='bg-white dark:bg-navy-light/50 p-4 rounded-lg'>
                  <h3 className='font-medium text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                    <ServerStackIcon className='w-5 h-5 text-blue-600 dark:text-blue-400' />
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
                <div className='bg-white dark:bg-navy-light/50 p-4 rounded-lg'>
                  <h3 className='font-medium text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                    <BuildingLibraryIcon className='w-5 h-5 text-purple-600 dark:text-purple-400' />
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
          </div>
        </section>

        {/* 이미지 갤러리 */}
        <section className='mb-12'>
          <div className='flex items-center gap-2 mb-6'>
            <PhotoIcon className='w-6 h-6 text-blue-600 dark:text-blue-400' />
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
              Project Screenshots
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {project.imageUrls.map((url, index) => (
              <div
                key={index}
                className='relative aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-navy-light shadow-lg hover:shadow-xl transition-shadow cursor-pointer'
                onClick={() => handleImageClick(index)}>
                <Image
                  src={url}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className='object-cover'
                  unoptimized={url.endsWith(".gif")}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 프로젝트 개요 */}
        <section className='mb-12 bg-slate-50 dark:bg-navy-light/30 p-6 rounded-xl border border-slate-200 dark:border-navy-light'>
          <div className='flex items-center gap-2 mb-6'>
            <LightBulbIcon className='w-6 h-6 text-yellow-500' />
            <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
              Project Overview
            </h2>
          </div>
          <div className='space-y-6'>
            <div className='bg-white dark:bg-navy-light/50 p-4 rounded-lg'>
              <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                <DocumentTextIcon className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                Summary
              </h3>
              <p className='text-slate-700 dark:text-slate-300'>{project.description}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {project.projectGoal && (
                <div className='bg-white dark:bg-navy-light/50 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                    <RocketLaunchIcon className='w-5 h-5 text-green-600 dark:text-green-400' />
                    Project Goal
                  </h3>
                  <p className='text-slate-700 dark:text-slate-300'>{project.projectGoal}</p>
                </div>
              )}
              {project.coreValue && (
                <div className='bg-white dark:bg-navy-light/50 p-4 rounded-lg'>
                  <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                    <SparklesIcon className='w-5 h-5 text-yellow-500' />
                    Core Value
                  </h3>
                  <p className='text-slate-700 dark:text-slate-300'>{project.coreValue}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 주요 기능 */}
        {project.keyFeatures && (
          <section className='mb-12 bg-slate-50 dark:bg-navy-light/30 p-6 rounded-xl border border-slate-200 dark:border-navy-light'>
            <div className='flex items-center gap-2 mb-6'>
              <PuzzlePieceIcon className='w-6 h-6 text-blue-500' />
              <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
                Key Features
              </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {project.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className='bg-white dark:bg-navy-light/50 p-6 rounded-lg border border-slate-200 dark:border-navy-light'>
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
          <section className='mb-12 bg-slate-50 dark:bg-navy-light/30 p-6 rounded-xl border border-slate-200 dark:border-navy-light'>
            <div className='flex items-center gap-2 mb-6'>
              <BuildingLibraryIcon className='w-6 h-6 text-indigo-500' />
              <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
                Architecture & Design
              </h2>
            </div>
            <div className='space-y-6'>
              {project.architectureDesc && (
                <div className='bg-white dark:bg-navy-light/50 p-6 rounded-lg'>
                  <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                    <ClipboardDocumentCheckIcon className='w-5 h-5 text-indigo-500' />
                    Overview
                  </h3>
                  <p className='text-slate-700 dark:text-slate-300'>{project.architectureDesc}</p>
                </div>
              )}
              {project.architectureChoice && (
                <div className='bg-white dark:bg-navy-light/50 p-6 rounded-lg'>
                  <h3 className='text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                    <LightBulbIcon className='w-5 h-5 text-yellow-500' />
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
          <section className='mb-12 bg-slate-50 dark:bg-navy-light/30 p-6 rounded-xl border border-slate-200 dark:border-navy-light'>
            <div className='flex items-center gap-2 mb-6'>
              <AcademicCapIcon className='w-6 h-6 text-orange-500' />
              <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
                Challenges & Solutions
              </h2>
            </div>
            <div className='space-y-6'>
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className='bg-white dark:bg-navy-light/50 p-6 rounded-lg border border-slate-200 dark:border-navy-light'>
                  <h3 className='text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                    <PuzzlePieceIcon className='w-5 h-5 text-orange-500' />
                    Challenge
                  </h3>
                  <p className='text-slate-700 dark:text-slate-300 mb-4'>{challenge.problem}</p>
                  <h3 className='text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2'>
                    <SparklesIcon className='w-5 h-5 text-green-500' />
                    Solution
                  </h3>
                  <p className='text-slate-700 dark:text-slate-300'>{challenge.solution}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 협업 & 워크플로우 */}
        {project.collaboration && (
          <section className='mb-12 bg-slate-50 dark:bg-navy-light/30 p-6 rounded-xl border border-slate-200 dark:border-navy-light'>
            <div className='flex items-center gap-2 mb-6'>
              <UserGroupIcon className='w-6 h-6 text-blue-500' />
              <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
                Collaboration & Workflow
              </h2>
            </div>
            <div className='bg-white dark:bg-navy-light/50 p-6 rounded-lg'>
              <ul className='space-y-3'>
                {project.collaboration.map((item, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <UserGroupIcon className='w-5 h-5 text-blue-500 mt-1 flex-shrink-0' />
                    <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 테스팅 & QA */}
        {project.testing && (
          <section className='mb-12 bg-slate-50 dark:bg-navy-light/30 p-6 rounded-xl border border-slate-200 dark:border-navy-light'>
            <div className='flex items-center gap-2 mb-6'>
              <BeakerIcon className='w-6 h-6 text-purple-500' />
              <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
                Testing & QA
              </h2>
            </div>
            <div className='bg-white dark:bg-navy-light/50 p-6 rounded-lg'>
              <ul className='space-y-3'>
                {project.testing.map((item, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <BeakerIcon className='w-5 h-5 text-purple-500 mt-1 flex-shrink-0' />
                    <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 배포 & 모니터링 */}
        {project.deployment && (
          <section className='mb-12 bg-slate-50 dark:bg-navy-light/30 p-6 rounded-xl border border-slate-200 dark:border-navy-light'>
            <div className='flex items-center gap-2 mb-6'>
              <ServerStackIcon className='w-6 h-6 text-green-500' />
              <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
                Deployment & Monitoring
              </h2>
            </div>
            <div className='bg-white dark:bg-navy-light/50 p-6 rounded-lg'>
              <ul className='space-y-3'>
                {project.deployment.map((item, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <ServerStackIcon className='w-5 h-5 text-green-500 mt-1 flex-shrink-0' />
                    <span className='text-slate-700 dark:text-slate-300'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 학습한 점 */}
        {project.lessonsLearned && (
          <section className='bg-slate-50 dark:bg-navy-light/30 p-6 rounded-xl border border-slate-200 dark:border-navy-light'>
            <div className='flex items-center gap-2 mb-6'>
              <AcademicCapIcon className='w-6 h-6 text-blue-500' />
              <h2 className='text-2xl font-bold text-slate-900 dark:text-slate-100'>
                Lessons Learned
              </h2>
            </div>
            <div className='bg-white dark:bg-navy-light/50 p-6 rounded-lg'>
              <ul className='space-y-3'>
                {project.lessonsLearned.map((lesson, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <LightBulbIcon className='w-5 h-5 text-yellow-500 mt-1 flex-shrink-0' />
                    <span className='text-slate-700 dark:text-slate-300'>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </article>

      <ImageViewerModal
        images={project.imageUrls}
        initialIndex={selectedImageIndex}
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
      />
    </div>
  );
}
