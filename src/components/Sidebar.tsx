"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { profile } from "../data/profile";

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
          {profile.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'>
              {link.platform === "GitHub" ? (
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              )}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className='text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors'>
            {isDarkMode ? <SunIcon className='w-6 h-6' /> : <MoonIcon className='w-6 h-6' />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
