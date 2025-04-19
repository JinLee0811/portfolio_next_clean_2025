"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory
  );

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

        <div className='flex flex-wrap gap-4 mb-8'>
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "all" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
            }`}>
            All
          </button>
          <button
            onClick={() => setSelectedCategory("Team Projects")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "Team Projects"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}>
            Team Projects
          </button>
          <button
            onClick={() => setSelectedCategory("Personal")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "Personal"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}>
            Personal
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
