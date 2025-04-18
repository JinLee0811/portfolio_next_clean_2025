"use client";

import { useState } from "react";

interface ProjectFiltersProps {
  onFilterChange: (category: string, tech: string) => void;
}

export default function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category, activeTech);
  };

  const handleTechClick = (tech: string) => {
    setActiveTech(tech);
    onFilterChange(activeCategory, tech);
  };

  return (
    <div className='mb-8 space-y-4'>
      {/* Main Categories */}
      <div className='flex flex-wrap gap-3'>
        {["All", "Featured", "Team Projects", "Personal"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-1.5 text-sm font-mono rounded-full transition-colors ${
              activeCategory === category
                ? "bg-green-600/10 dark:bg-green-400/10 text-green-600 dark:text-green-400 border border-green-600/20 dark:border-green-400/20"
                : "bg-slate-100 dark:bg-navy-light text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-600/10 dark:hover:bg-green-400/10"
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* Tech Stack Filter */}
      <div className='flex flex-wrap gap-2'>
        <span className='text-xs font-mono text-slate-500 dark:text-slate-400 self-center mr-2'>
          Tech:
        </span>
        {["All", "React", "Next.js", "TypeScript", "Node.js", "Python"].map((tech) => (
          <button
            key={tech}
            onClick={() => handleTechClick(tech)}
            className={`px-3 py-1 text-xs font-mono rounded-full transition-colors ${
              activeTech === tech
                ? "bg-green-600/10 dark:bg-green-400/10 text-green-600 dark:text-green-400 border border-green-600/20 dark:border-green-400/20"
                : "bg-slate-100 dark:bg-navy-light text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-600/10 dark:hover:bg-green-400/10"
            }`}>
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
}
