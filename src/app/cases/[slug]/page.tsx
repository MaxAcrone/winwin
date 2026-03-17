import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { caseDetails } from '@/lib/cases-data';
import { CaseCTA } from '@/components/sections/CaseCTA';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const caseData = caseDetails[params.slug];
  
  if (!caseData) {
    return {
      title: 'Кейс не найден | win-win consulting',
    };
  }

  return {
    title: `${caseData.title} — Кейс | win-win consulting Челябинск`,
    description: `${caseData.subtitle}. ${caseData.niche}. Результат: ${caseData.heroMetric.value} ${caseData.heroMetric.label}. Маркетинговое агентство win-win consulting.`,
    keywords: [
      caseData.title,
      caseData.category,
      caseData.niche,
      'кейс маркетинг',
      'результаты маркетинга',
      'win-win consulting',
      'Челябинск',
    ],
    openGraph: {
      title: `${caseData.title} — Кейс win-win consulting`,
      description: caseData.subtitle,
      url: `https://winconsult.ru/cases/${params.slug}`,
      siteName: 'win-win consulting',
      locale: 'ru_RU',
      type: 'article',
      images: [
        {
          url: caseData.imageUrl,
          width: 1200,
          height: 630,
          alt: caseData.title,
        },
      ],
    },
    alternates: {
      canonical: `/cases/${params.slug}`,
    },
  };
}

export default function CasePage({ params }: Props) {
  const caseData = caseDetails[params.slug];
  
  if (!caseData) {
    notFound();
  }

  return (
    <main className="pt-[73px]">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b border-border">
        <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
          <Link href="/#cases" className="text-xs uppercase tracking-widest text-subtle mb-8 hover:text-black transition-colors">
            ← Все кейсы
          </Link>
          
          <p className="text-xs uppercase tracking-widest text-subtle mb-4">{caseData.category}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-4">
            {caseData.title}
          </h1>
          <p className="text-lg text-subtle mb-8">{caseData.subtitle}</p>
          
          <div className="flex items-baseline gap-2">
            <span className="text-5xl md:text-6xl font-bold tracking-tighter">{caseData.heroMetric.value}</span>
            <span className="text-sm text-subtle uppercase tracking-widest">{caseData.heroMetric.label}</span>
          </div>
        </div>
        
        <div className="relative w-full h-[50vh] lg:h-auto bg-black">
          <Image
            src={caseData.imageUrl}
            alt={caseData.title}
            fill
            className="object-contain grayscale contrast-125"
            priority
          />
        </div>
      </section>

      {/* Points A → B */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        <div className="p-6 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-border">
          <p className="text-xs uppercase tracking-widest text-subtle mb-4">Точка А</p>
          <p className="text-lg">{caseData.pointA}</p>
        </div>
        <div className="p-6 md:p-12 lg:p-16 bg-black text-white">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Точка Б</p>
          <p className="text-lg">{caseData.pointB}</p>
        </div>
      </section>

      {/* Niche */}
      <section className="p-6 md:p-12 lg:p-20 border-b border-border text-center">
        <p className="text-xs uppercase tracking-widest text-subtle mb-2">Ниша</p>
        <p className="text-xl md:text-2xl font-medium">{caseData.niche}</p>
      </section>

      {/* Description */}
      <section className="p-6 md:p-12 lg:p-20 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-6">
          {caseData.description.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-subtle">{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Funnel */}
      {caseData.funnel && (
        <section className="border-b border-border">
          <div className="p-6 md:px-12 lg:px-20 py-8 border-b border-border">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">Воронка продаж</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5">
            {caseData.funnel.map((step, i) => (
              <div key={i} className="p-6 md:p-8 border-b md:border-b-0 border-r border-border last:border-r-0 text-center">
                <div className="text-3xl font-bold text-subtle/30 mb-2">0{i + 1}</div>
                <p className="text-xs uppercase tracking-widest">{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Key Metrics */}
      {caseData.metrics && (
        <section className="border-b border-border bg-black text-white">
          <div className="p-6 md:px-12 lg:px-20 py-8 border-b border-white/10">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">Ключевые метрики</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {caseData.metrics.map((metric, i) => (
              <div key={i} className={`p-6 md:p-8 border-b md:border-b-0 border-r border-white/10 last:border-r-0 text-center ${metric.highlight ? 'bg-white text-black' : ''}`}>
                <div className={`text-2xl md:text-3xl font-bold tracking-tighter mb-1 ${metric.highlight ? '' : ''}`}>{metric.value}</div>
                <p className={`text-xs uppercase tracking-widest ${metric.highlight ? 'text-subtle' : 'text-white/50'}`}>{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Period Data Table */}
      {caseData.periodData && (
        <section className="border-b border-border">
          <div className="p-6 md:px-12 lg:px-20 py-8 border-b border-border">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">Динамика роста</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-black/5">
                  <th className="p-4 text-left text-xs uppercase tracking-widest font-medium">Период</th>
                  <th className="p-4 text-right text-xs uppercase tracking-widest font-medium">Звонки</th>
                  <th className="p-4 text-right text-xs uppercase tracking-widest font-medium">Качественные</th>
                  <th className="p-4 text-right text-xs uppercase tracking-widest font-medium">КВАЛ</th>
                  <th className="p-4 text-right text-xs uppercase tracking-widest font-medium">КЭВ</th>
                  <th className="p-4 text-right text-xs uppercase tracking-widest font-medium">Продажи</th>
                  <th className="p-4 text-right text-xs uppercase tracking-widest font-medium bg-black text-white">Выручка</th>
                </tr>
              </thead>
              <tbody>
                {caseData.periodData.map((row, i) => (
                  <tr key={i} className="border-b border-border hover:bg-black/5 transition-colors">
                    <td className="p-4 font-medium">{row.period}</td>
                    <td className="p-4 text-right text-subtle">{row.calls.toLocaleString()}</td>
                    <td className="p-4 text-right text-subtle">{row.qualityCalls.toLocaleString()}</td>
                    <td className="p-4 text-right text-subtle">{row.quals.toLocaleString()}</td>
                    <td className="p-4 text-right text-subtle">{row.kevs.toLocaleString()}</td>
                    <td className="p-4 text-right font-medium">{row.sales}</td>
                    <td className="p-4 text-right font-bold bg-black text-white">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Gallery */}
      {caseData.gallery && caseData.gallery.length > 1 && (
        <section className="border-b border-border">
          <div className="p-6 md:px-12 lg:px-20 py-8 border-b border-border">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">Галерея</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {caseData.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] border-b md:border-b-0 border-r border-border last:border-r-0">
                <Image
                  src={img}
                  alt={`${caseData.title} - ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Results */}
      {caseData.results && (
        <section className="border-b border-border">
          <div className="p-6 md:px-12 lg:px-20 py-8 border-b border-border">
            <h2 className="text-2xl font-bold uppercase tracking-tighter">Результаты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {caseData.results.map((result, i) => (
              <div key={i} className="p-6 md:p-8 border-b md:border-b-0 border-r border-border last:border-r-0 flex items-start gap-4">
                <span className="text-2xl font-bold text-subtle/30">0{i + 1}</span>
                <p className="text-sm leading-relaxed pt-1">{result}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <CaseCTA cta={caseData.cta} />
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(caseDetails).map((slug) => ({ slug }));
}
