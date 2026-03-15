import Image from 'next/image';
import Link from 'next/link';
import type { Case } from '@/lib/types';

interface CaseCardProps extends Case {
  className?: string;
}

export function CaseCard({ title, category, metrics, imageUrl, slug, className }: CaseCardProps) {
  return (
    <Link 
      href={`/cases/${slug}`}
      className={`block p-6 md:p-12 border-b md:border-b-0 md:border-r border-border group hover:bg-black/5 transition-colors cursor-pointer last:border-r-0 ${className || ''}`}
    >
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
            className="object-contain grayscale contrast-125 opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{title}</h3>
      <div className="flex flex-col gap-1 text-xs text-subtle">
        <span>{category}</span>
        <span className="text-black">{metrics}</span>
      </div>
    </Link>
  );
}
