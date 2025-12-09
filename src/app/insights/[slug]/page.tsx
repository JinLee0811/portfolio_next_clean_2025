import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/data/insights";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className='min-h-screen py-20'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center gap-4 mb-8'>
          <Link
            href='/insights'
            className='inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors'>
            <ArrowLeftIcon className='w-5 h-5 mr-2' />
            <span>Back to Insights</span>
          </Link>
        </div>

        <div className='flex items-center gap-2 text-sm font-mono text-green-600 dark:text-green-400 mb-2'>
          <span>{insight.emoji}</span>
          <span>{insight.tag}</span>
        </div>
        <h1 className='text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6'>{insight.title}</h1>
        <div className='space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl'>
          {insight.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

