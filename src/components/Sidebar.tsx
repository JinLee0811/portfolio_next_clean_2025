"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { profile } from "../data/profile";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaBlogger } from "react-icons/fa";

interface SidebarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

export default function Sidebar({ isDarkMode, toggleDarkMode, activeSection }: SidebarProps) {
  const navItems = [
    { name: "About", href: "/#about", section: "about" },
    { name: "Experience", href: "/#experience", section: "experience" },
    { name: "Projects", href: "/#projects", section: "projects" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className='h-screen w-full sticky top-0 bg-white dark:bg-navy-dark flex items-center'>
      <div className='flex flex-col gap-10 lg:gap-16 px-8'>
        {/* Name and Description */}
        <div className='space-y-4 group relative'>
          {/* 호버시 나타날 프로필 이미지와 인사말 */}
          <div className='absolute -right-12 -top-28 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'>
            <div className='relative'>
              {/* 인사말 말풍선 */}
              <div className='absolute -top-10 right-34 bg-white dark:bg-navy-light px-4 py-2 rounded-full shadow-lg transform -rotate-12 border-2 border-green-400 dark:border-green-500'>
                <span className='text-xl'>👋 Hi!</span>
              </div>
              {/* 프로필 이미지 */}
              <div className='relative w-44 h-40 rounded-full overflow-hidden border-2 border-green-400 dark:border-green-500'>
                <Image
                  src='/images/profile/image.png'
                  alt='Profile'
                  fill
                  priority
                  quality={100}
                  loading='eager'
                  className='object-cover object-[0%_20%] scale-125'
                />
              </div>
            </div>
          </div>
          <h1 className='text-4xl lg:text-6xl text-slate-900 dark:text-slate-100 font-semibold tracking-tight'>
            {profile.name}
          </h1>
          <h2 className='text-xl lg:text-2xl text-slate-700 dark:text-slate-300 font-light'>
            {profile.role}
          </h2>
          <p className='text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
            {profile.shortDescription}
          </p>
        </div>

        {/* Navigation */}
        <nav>
          <ul className='flex flex-col space-y-6'>
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className='relative group'>
                <div className='flex items-center'>
                  <div
                    className={clsx(
                      "h-[1px] mr-4 transition-all duration-300",
                      activeSection === item.section
                        ? "w-24 bg-green-600 dark:bg-green-400"
                        : "w-8 bg-slate-300 dark:bg-slate-600"
                    )}
                  />
                  <Link
                    href={item.href}
                    className={clsx(
                      "tracking-wide uppercase transition-all duration-300",
                      activeSection === item.section
                        ? "text-lg text-slate-900 dark:text-slate-100"
                        : "text-sm text-slate-500 dark:text-slate-400",
                      "group-hover:text-slate-900 dark:group-hover:text-slate-100"
                    )}>
                    {item.name}
                  </Link>
                </div>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className='flex items-center space-x-6'>
          <a
            href='https://github.com/JinLee0811'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors relative group'
            aria-label='GitHub'>
            <FaGithub className='w-6 h-6' />
            <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
              GitHub Profile
            </span>
          </a>
          <a
            href='https://www.linkedin.com/in/jin-lee-72b653272/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors relative group'
            aria-label='LinkedIn'>
            <FaLinkedin className='w-6 h-6' />
            <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
              LinkedIn Profile
            </span>
          </a>
          <a
            href='https://jimmycoding.tistory.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors relative group'
            aria-label='Blog'>
            <FaBlogger className='w-6 h-6' />
            <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
              Tech Blog
            </span>
          </a>
          <a
            href='https://docs.google.com/document/d/1o5h5Y0Gbh_ZUaYvk1lu2MbbibV1-cwK8lp-oold-h4Q/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors relative group'
            aria-label='CV'>
            <DocumentIcon className='w-6 h-6' />
            <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
              View Resume
            </span>
          </a>
          <button
            onClick={toggleDarkMode}
            className='text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors relative group'
            aria-label='Toggle dark mode'>
            {isDarkMode ? <SunIcon className='w-6 h-6' /> : <MoonIcon className='w-6 h-6' />}
            <span className='absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
