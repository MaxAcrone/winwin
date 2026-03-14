import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'win-win | Система роста бизнеса',
  description: 'Выстраиваем стратегию роста прибыли и внедряем управляемую систему привлечения клиентов и продаж.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="beforeInteractive" />
      </head>
      <body className="w-full font-mono text-sm antialiased">
        {children}
      </body>
    </html>
  );
}
