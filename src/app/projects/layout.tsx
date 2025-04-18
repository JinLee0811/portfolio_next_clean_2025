"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='flex min-h-screen'>
      <div className='fixed left-0 top-0 h-full w-[300px] bg-slate-50 dark:bg-navy-darker'>
        <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} activeSection='projects' />
      </div>
      <main className='flex-1 ml-[530px]'>{children}</main>
    </div>
  );
}
