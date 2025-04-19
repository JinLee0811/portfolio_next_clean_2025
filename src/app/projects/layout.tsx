"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MouseFollower from "@/components/MouseFollower";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const activeSection = "projects";

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-white dark:bg-navy-dark'>
      <MouseFollower />
      <div className='w-full lg:w-1/2 min-h-screen'>
        <Sidebar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          activeSection={activeSection}
        />
      </div>
      <div className='w-full xl:w-auto lg:w-4/5 min-h-screen lg:pt-36 xl:pt-24 2xl:pt-28'>
        {children}
      </div>
    </div>
  );
}
