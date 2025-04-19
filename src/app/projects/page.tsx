"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("All");

  const filteredProjects = projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((project) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "Featured") return project.featured;
      return project.category === activeCategory;
    });

  const handleFilterChange = (category: string, tech: string) => {
    setActiveCategory(category);
    setActiveTech(tech);
  };

  return (
    <div className='min-h-screen py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center gap-4 mb-8'>
          <Link
            href='/#projects'
            className='inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors'>
            <ArrowLeftIcon className='w-5 h-5 mr-2' />
            <span>Back to Home</span>
          </Link>
        </div>

        <h1 className='text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8'>All Projects</h1>

        <ProjectFilters onFilterChange={handleFilterChange} />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
