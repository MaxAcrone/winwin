import Image from 'next/image';
import Link from 'next/link';
import type { Case } from '@/lib/types';

interface CaseCardProps extends Case {
  className?: string;
}

export function CaseCard({ title, category, metrics, imageUrl, slug, locked, className }: CaseCardProps) {
  const content = (
    <>
      <div className="border border-border bg-white aspect-[4/3] flex flex-col mb-8 relative">
        <div className="h-6 border-b border-border flex items-center px-3 gap-2 w-full bg-white">
          <div className="w-1.5 h-1.5 rounded-full border border-black/30"></div>
          <div className="w-1.5 h-1.5 rounded-full border border-black/30"></div>
          <div className="w-1.5 h-1.5 rounded-full border border-black/30"></div>
        </div>
        <div className="flex-1 w-full bg-border/10 relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`object-contain grayscale contrast-125 mix-blend-multiply transition-transform duration-700 ${locked ? 'opacity-40' : 'opacity-80 group-hover:scale-105'}`}
          />
        </div>
        {locked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/40 mb-2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span className="text-xs font-medium uppercase tracking-widest text-black/40">Скоро</span>
          </div>
        )}
      </div>
      <h3 className={`text-xl font-bold uppercase tracking-tight mb-2 ${locked ? 'text-black/40' : ''}`}>{title}</h3>
      <div className={`flex flex-col gap-1 text-xs ${locked ? 'text-black/25' : 'text-subtle'}`}>
        <span>{category}</span>
        <span className={locked ? 'text-black/35' : 'text-black'}>{metrics}</span>
      </div>
    </>
  );

  if (locked) {
    return (
      <div className={`block p-6 md:p-12 border-b md:border-b-0 md:border-r border-border cursor-default select-none last:border-r-0 ${className || ''}`}>
        {content}
      </div>
    );
  }

  return (
    <Link 
      href={`/cases/${slug}`}
      className={`block p-6 md:p-12 border-b md:border-b-0 md:border-r border-border group hover:bg-black/5 transition-colors cursor-pointer last:border-r-0 ${className || ''}`}
    >
      {content}
    </Link>
  );
}
