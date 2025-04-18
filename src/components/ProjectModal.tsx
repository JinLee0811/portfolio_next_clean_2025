import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface TechStack {
  name: string;
  icon?: string;
}

interface ProjectDetails {
  title: string;
  description: string;
  images: string[];
  techStack: TechStack[];
  buildProcess: string[];
  challenges: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  project: ProjectDetails;
}

export default function ProjectModal({ isOpen, closeModal, project }: ProjectModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        {/* 배경 오버레이 - 클릭시 모달 닫힘 */}
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black/70' aria-hidden='true' onClick={closeModal} />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all'>
                {/* 모달 헤더 */}
                <div className='relative bg-white px-8 py-6 border-b border-gray-100'>
                  <div className='flex items-center justify-between'>
                    <Dialog.Title as='h3' className='text-2xl font-bold text-gray-900'>
                      {project.title}
                    </Dialog.Title>
                    <button
                      onClick={closeModal}
                      className='rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors'>
                      <XMarkIcon className='h-6 w-6' />
                    </button>
                  </div>
                </div>

                <div className='px-8 py-6'>
                  {/* 이미지 섹션 */}
                  {project.images && project.images.length > 0 && (
                    <div className='mb-8 space-y-4'>
                      {project.images.map((image, index) => (
                        <div key={index} className='relative h-[400px] rounded-xl overflow-hidden'>
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            className='object-cover'
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 프로젝트 설명 */}
                  <div className='mb-8'>
                    <h4 className='text-xl font-semibold text-gray-900 mb-4'>프로젝트 소개</h4>
                    <p className='text-gray-600 leading-relaxed whitespace-pre-line'>
                      {project.description}
                    </p>
                  </div>

                  {/* 기술 스택 */}
                  <div className='mb-8'>
                    <h4 className='text-xl font-semibold text-gray-900 mb-4'>기술 스택</h4>
                    <div className='flex flex-wrap gap-2'>
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className='px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium'>
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 개발 과정 */}
                  {project.buildProcess.length > 0 && (
                    <div className='mb-8'>
                      <h4 className='text-xl font-semibold text-gray-900 mb-4'>개발 과정</h4>
                      <ul className='space-y-3'>
                        {project.buildProcess.map((step, index) => (
                          <li key={index} className='flex items-start'>
                            <span className='flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1'>
                              {index + 1}
                            </span>
                            <p className='text-gray-600'>{step}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 도전 과제 및 해결 방법 */}
                  {project.challenges.length > 0 && (
                    <div className='mb-8'>
                      <h4 className='text-xl font-semibold text-gray-900 mb-4'>
                        도전 과제 및 해결 방법
                      </h4>
                      <div className='space-y-4'>
                        {project.challenges.map((challenge, index) => (
                          <div
                            key={index}
                            className='p-4 bg-gray-50 rounded-lg border border-gray-100'>
                            <p className='text-gray-600'>{challenge}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 링크 */}
                  <div className='flex gap-4 pt-4 border-t border-gray-100'>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'>
                        <span className='mr-2'>Live Demo</span>
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                          />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors'>
                        <span className='mr-2'>GitHub</span>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
