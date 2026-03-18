'use client';

import Link from 'next/link';
import { scrollToSection } from '@/lib/utils';

export function Header() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-6 py-4 border-b border-border">
      <div className="w-1/3">
        <Link href="/" className="text-2xl font-bold tracking-tighter leading-none">
          W.
        </Link>
      </div>
      <div className="w-1/3 flex justify-center">
        <nav className="border border-border rounded-full px-8 py-2.5 flex items-center gap-8 text-xs uppercase tracking-widest bg-white">
          <a 
            href="#cases" 
            onClick={(e) => handleNavClick(e, 'cases')}
            className="hover:opacity-50 transition-opacity"
          >
            КЕЙСЫ
          </a>
          <a 
            href="#community" 
            onClick={(e) => handleNavClick(e, 'community')}
            className="hover:opacity-50 transition-opacity"
          >
            КОМЬЮНИТИ
          </a>
        </nav>
      </div>
      <div className="w-1/3 flex justify-end gap-4">
        <a 
          href="https://t.me/winconsultru"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-50 transition-opacity flex items-center justify-center"
        >
          <img src="/Media/tg.png" alt="Telegram" className="w-6 h-6 object-contain" />
        </a>
        <a 
          href="https://t.me/winconsult_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-50 transition-opacity flex items-center justify-center"
        >
          <span className="iconify" data-icon="solar:plain-linear" data-width="24" data-height="24" />
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hover:opacity-50 transition-opacity flex items-center justify-center"
        >
          <span className="iconify" data-icon="solar:letter-linear" data-width="24" data-height="24" />
        </a>
      </div>
    </header>
  );
}
