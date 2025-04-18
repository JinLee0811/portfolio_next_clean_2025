"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LinkIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import { Project } from "../types/project";

// react-slick CSS 임포트
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  project: Project | null;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-arrow !flex items-center justify-center !w-10 !h-10 !bg-slate-800/50 dark:!bg-navy-light/50 hover:!bg-slate-800/80 dark:hover:!bg-navy-light/80 rounded-full !right-4 z-10 transition-colors`}
      style={{ ...style }}
      onClick={onClick}
      aria-label='Next image'>
      <ChevronRightIcon className='w-5 h-5 text-white' />
    </button>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} slick-arrow !flex items-center justify-center !w-10 !h-10 !bg-slate-800/50 dark:!bg-navy-light/50 hover:!bg-slate-800/80 dark:hover:!bg-navy-light/80 rounded-full !left-4 z-10 transition-colors`}
      style={{ ...style }}
      onClick={onClick}
      aria-label='Previous image'>
      <ChevronLeftIcon className='w-5 h-5 text-white' />
    </button>
  );
};

export default function ProjectModal({ isOpen, closeModal, project }: ProjectModalProps) {
  if (!project) return null;

  const settings = {
    dots: true,
    infinite: project.imageUrls.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: project.imageUrls.length > 1,
    appendDots: (dots: React.ReactNode) => (
      <div className='absolute bottom-4 left-0 right-0'>
        <ul className='m-0 flex justify-center space-x-2'> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className='w-2.5 h-2.5 rounded-full bg-white/40 dark:bg-slate-600/50 transition-all duration-300 slick-dots-inactive'></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  const renderSection = (title: string, content: React.ReactNode, secondary = false) => (
    <div className='mb-8'>
      <h3
        className={`text-xl font-semibold mb-4 font-sans ${secondary ? "text-slate-700 dark:text-slate-300" : "text-slate-800 dark:text-slate-200"}`}>
        {title}
      </h3>
      {content}
    </div>
  );

  const renderList = (items: string[], style: "disc" | "none" = "disc") => (
    <ul
      className={`${style === "disc" ? "list-disc list-outside pl-5" : ""} space-y-2 text-slate-700 dark:text-slate-300 text-sm md:text-base`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const renderKeyValueList = (items: { [key: string]: string }[] | undefined) => {
    if (!items) return null;

    return (
      <ul className='space-y-4 text-sm md:text-base'>
        {items.map((item, index) => {
          const key = Object.keys(item)[0];
          const value = item[key];
          const secondKey = Object.keys(item)[1];
          const secondValue = item[secondKey];

          return (
            <li key={index}>
              {key && (
                <p className='font-semibold text-slate-800 dark:text-slate-200 mb-1'>
                  {item.title || key.charAt(0).toUpperCase() + key.slice(1)}:
                </p>
              )}
              {value && <p className='text-slate-700 dark:text-slate-300 mb-2 ml-2'>{value}</p>}
              {secondKey && (
                <p className='font-semibold text-slate-800 dark:text-slate-200 mb-1'>
                  {secondKey.charAt(0).toUpperCase() + secondKey.slice(1)}:
                </p>
              )}
              {secondValue && (
                <p className='text-slate-700 dark:text-slate-300 ml-2'>{secondValue}</p>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderTechList = (techItems: string[] | undefined) => {
    if (!techItems || techItems.length === 0) return null;
    return (
      <div className='flex flex-wrap gap-2'>
        {techItems.map((tech, index) => (
          <span
            key={index}
            className='px-2.5 py-0.5 text-xs font-mono rounded-md 
                     text-teal-700 dark:text-teal-300 
                     bg-teal-100 dark:bg-teal-900/30 
                     border border-teal-200/80 dark:border-teal-800/80'>
            {tech}
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4'
            onClick={closeModal}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className='bg-white dark:bg-navy rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden'
              onClick={(e) => e.stopPropagation()}>
              <div className='flex items-center justify-between p-5 md:p-6 border-b border-slate-200 dark:border-navy-light flex-shrink-0'>
                <h2 className='text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 font-sans'>
                  {project.title}
                </h2>
                <button
                  onClick={closeModal}
                  className='p-1 rounded-full text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-navy-light transition-colors'
                  aria-label='Close modal'>
                  <XMarkIcon className='w-6 h-6' />
                </button>
              </div>

              <div className='flex-1 overflow-y-auto p-5 md:p-8 project-modal-body'>
                <div className='mb-10 relative project-slider-container'>
                  {project.imageUrls && project.imageUrls.length > 0 ? (
                    <Slider {...settings}>
                      {project.imageUrls.map((imgUrl, index) => (
                        <div
                          key={index}
                          className='relative aspect-video bg-slate-100 dark:bg-navy-light rounded-md overflow-hidden max-h-[60vh]'>
                          <Image
                            src={imgUrl}
                            alt={`${project.title} screenshot ${index + 1}`}
                            layout='fill'
                            objectFit='contain'
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className='aspect-video bg-slate-100 dark:bg-navy-light rounded-md flex items-center justify-center text-slate-500'>
                      Image not available
                    </div>
                  )}
                </div>

                {renderSection(
                  "Project Overview",
                  <>
                    {project.projectGoal && (
                      <p className='text-slate-700 dark:text-slate-300 mb-3 text-sm md:text-base'>
                        {project.projectGoal}
                      </p>
                    )}
                    {project.coreValue && (
                      <p className='text-slate-700 dark:text-slate-300 text-sm md:text-base'>{`Core Value: ${project.coreValue}`}</p>
                    )}
                    {!project.projectGoal && !project.coreValue && project.description && (
                      <p className='text-slate-700 dark:text-slate-300 text-sm md:text-base'>
                        {project.description}
                      </p>
                    )}
                  </>
                )}

                {renderSection(
                  "Timeline & Your Role",
                  <>
                    {project.date && (
                      <p className='font-semibold text-slate-800 dark:text-slate-200 mb-1 text-sm md:text-base'>{`Timeline: ${project.date}`}</p>
                    )}
                    {project.yourRole && project.yourRole.length > 0 && (
                      <div className='mt-3'>
                        <p className='font-semibold text-slate-800 dark:text-slate-200 mb-1 text-sm md:text-base'>
                          My Role:
                        </p>
                        {renderList(project.yourRole)}
                      </div>
                    )}
                  </>
                )}

                {renderSection(
                  "Tech Stack",
                  <div className='space-y-4'>
                    {project.technologies && project.technologies.length > 0 && (
                      <div>
                        <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm md:text-base'>
                          Core Technologies:
                        </h4>
                        {renderTechList(project.technologies)}
                      </div>
                    )}
                    {project.techInfra && project.techInfra.length > 0 && (
                      <div>
                        <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm md:text-base'>
                          Infrastructure & DevOps:
                        </h4>
                        {renderTechList(project.techInfra)}
                      </div>
                    )}
                    {project.techDbApi && project.techDbApi.length > 0 && (
                      <div>
                        <h4 className='font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm md:text-base'>
                          Databases & APIs:
                        </h4>
                        {renderTechList(project.techDbApi)}
                      </div>
                    )}
                  </div>
                )}

                {renderSection(
                  "Key Features & Implementation",
                  renderKeyValueList(project.keyFeatures)
                )}

                {(project.architectureDesc || project.architectureChoice) &&
                  renderSection(
                    "Architecture & Design",
                    <>
                      {project.architectureDesc && (
                        <p className='text-slate-700 dark:text-slate-300 mb-3 text-sm md:text-base'>
                          {project.architectureDesc}
                        </p>
                      )}
                      {project.architectureChoice && (
                        <p className='text-slate-700 dark:text-slate-300 text-sm md:text-base'>{`Design Choice: ${project.architectureChoice}`}</p>
                      )}
                    </>
                  )}

                {renderSection("Challenges & Solutions", renderKeyValueList(project.challenges))}

                {project.achievements &&
                  project.achievements.length > 0 &&
                  renderSection("Achievements & Metrics", renderList(project.achievements))}

                {project.collaboration &&
                  project.collaboration.length > 0 &&
                  renderSection("Collaboration & Workflow", renderList(project.collaboration))}

                {project.testing &&
                  project.testing.length > 0 &&
                  renderSection("Testing & QA", renderList(project.testing))}

                {project.deployment &&
                  project.deployment.length > 0 &&
                  renderSection("Deployment & Monitoring", renderList(project.deployment))}

                {project.lessonsLearned &&
                  project.lessonsLearned.length > 0 &&
                  renderSection("Lessons Learned", renderList(project.lessonsLearned))}
              </div>

              <div className='flex items-center justify-end gap-4 p-5 md:p-6 border-t border-slate-200 dark:border-navy-light bg-slate-50 dark:bg-navy-light/30 flex-shrink-0'>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-navy-light border border-slate-300 dark:border-navy-light hover:bg-slate-50 dark:hover:bg-navy-light/80 transition-colors shadow-sm'>
                    <CodeBracketIcon className='w-4 h-4' /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md text-white bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 transition-colors shadow-sm'>
                    <LinkIcon className='w-4 h-4' /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .slick-dots li button:before {
          content: "";
        }
        .slick-dots li {
          margin: 0 4px;
        }
        .slick-dots li div {
          transition:
            background-color 0.3s ease,
            transform 0.3s ease;
        }
        .slick-dots li.slick-active div {
          background-color: white;
          transform: scale(1.2);
        }
        .dark .slick-dots li.slick-active div {
          background-color: hsl(var(--primary-foreground));
        }
        .slick-arrow {
          transition: background-color 0.2s ease-in-out;
          opacity: 0.8;
        }
        .slick-arrow:hover {
          opacity: 1;
        }
        .slick-prev::before,
        .slick-next::before {
          content: "" !important;
        }
        .project-modal-body::-webkit-scrollbar {
          width: 6px;
        }
        .project-modal-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .project-modal-body::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .dark .project-modal-body::-webkit-scrollbar-thumb {
          background: #475569;
        }
        .project-modal-body::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .dark .project-modal-body::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </>
  );
}
