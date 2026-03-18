'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-border shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-center sm:text-left">
          Мы используем cookies для улучшения работы сайта и аналитики. 
          Продолжая использовать сайт, вы соглашаетесь с{' '}
          <Link href="/policy" className="underline hover:opacity-70">
            политикой конфиденциальности
          </Link>.
        </p>
        <Button variant="primary" onClick={acceptCookies} className="shrink-0 px-6">
          Принять
        </Button>
      </div>
    </div>
  );
}
