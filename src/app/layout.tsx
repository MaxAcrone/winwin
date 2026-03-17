import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'win-win consulting | Маркетинговое агентство Челябинск — Стратегия роста бизнеса',
  description: 'Маркетинговое агентство в Челябинске. Выстраиваем стратегию роста прибыли, создаём отделы продаж, внедряем CRM и системы привлечения клиентов. B2B маркетинг, лидогенерация, бизнес-консалтинг.',
  keywords: [
    'маркетинговое агентство Челябинск',
    'бизнес консалтинг Челябинск',
    'отдел продаж под ключ',
    'B2B маркетинг',
    'лидогенерация',
    'CRM внедрение',
    'стратегия роста бизнеса',
    'увеличение продаж',
    'маркетинг для бизнеса',
    'консалтинг Челябинск',
  ],
  authors: [{ name: 'win-win consulting' }],
  creator: 'win-win consulting',
  publisher: 'win-win consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://winconsult.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'win-win consulting | Маркетинговое агентство Челябинск',
    description: 'Выстраиваем стратегию роста прибыли и внедряем управляемую систему привлечения клиентов и продаж. Работаем по всей России.',
    url: 'https://winconsult.ru',
    siteName: 'win-win consulting',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/Media/hero.png',
        width: 1200,
        height: 630,
        alt: 'win-win consulting — маркетинговое агентство',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'win-win consulting | Маркетинговое агентство Челябинск',
    description: 'Стратегия роста бизнеса, отделы продаж, B2B маркетинг',
    images: ['/Media/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    yandex: '107703417',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://winconsult.ru/#organization',
    name: 'win-win consulting',
    alternateName: 'Вин-Вин Консалтинг',
    description: 'Маркетинговое агентство в Челябинске. Стратегия роста бизнеса, создание отделов продаж, B2B маркетинг, внедрение CRM.',
    url: 'https://winconsult.ru',
    logo: 'https://winconsult.ru/Media/hero.png',
    image: 'https://winconsult.ru/Media/hero.png',
    telephone: '+7-000-000-0000',
    email: 'info@winconsult.ru',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Челябинск',
      addressRegion: 'Челябинская область',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.1644,
      longitude: 61.4368,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Челябинск',
      },
      {
        '@type': 'Country',
        name: 'Россия',
      },
    ],
    priceRange: '₽₽₽',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://t.me/winconsultru',
      'https://vk.com/winconsultru',
      'https://www.youtube.com/@winconsultru',
    ],
    founder: {
      '@type': 'Person',
      name: 'Данил Стариков',
      jobTitle: 'Основатель',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '15',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Стратегия роста бизнеса',
            description: 'Разработка стратегии увеличения прибыли и масштабирования',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Создание отдела продаж',
            description: 'Построение отдела продаж под ключ с нуля',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'B2B маркетинг',
            description: 'Комплексный маркетинг для B2B компаний',
          },
        },
      ],
    },
  };

  return (
    <html lang="ru">
      <head>
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="beforeInteractive" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107703417', 'ym');
            ym(107703417, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/107703417" style={{position:'absolute', left:'-9999px'}} alt="" /></div>
        </noscript>
      </head>
      <body className="w-full font-mono text-sm antialiased">
        {children}
      </body>
    </html>
  );
}
