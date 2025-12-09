"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Sidebar from "@/components/Sidebar";
import { insights } from "@/data/insights";
import { useRouter } from "next/navigation";

export default function InsightsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col lg:flex-row",
        isDarkMode ? "bg-navy-dark" : "bg-white"
      )}>
      <div className='w-full lg:w-1/2 min-h-screen'>
        <Sidebar
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
          activeSection='contact'
        />
      </div>

      <div className='w-full xl:w-3/4 lg:w-3/4 min-h-screen lg:pt-20 xl:pt-16 2xl:pt-20'>
        <div className='container mx-auto px-6 py-12'>
          <div className='flex items-center gap-4 mb-8'>
            <button
              type='button'
              onClick={() => router.push("/#insights")}
              className='inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors'>
              <ArrowLeftIcon className='w-5 h-5 mr-2' />
              <span>Back</span>
            </button>
          </div>

          <h1 className='text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2'>
            Data Insights
          </h1>
          <p className='text-slate-700 dark:text-slate-300 mb-10'>
            Hardcoded examples for now — I&apos;ll replace these with richer markdown, images, and
            charts later.
          </p>

          <div className='space-y-6'>
            {insights.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className='block p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-navy-light/30 shadow-sm hover:shadow-md transition-shadow'>
                <div className='flex items-center gap-2 text-sm font-mono text-green-600 dark:text-green-400 mb-2'>
                  <span>{item.emoji}</span>
                  <span>{item.tag}</span>
                </div>
                <h2 className='text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-3'>
                  {item.title}
                </h2>
                <p className='text-slate-700 dark:text-slate-300 leading-relaxed'>{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
