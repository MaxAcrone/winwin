import type { Case, CaseDetail } from './types';

export const cases: Case[] = [
  {
    id: '1',
    title: 'GROOF STREET',
    category: 'маркетинг',
    metrics: '+320% ROMI / +240% выручка / +190% LTV',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
    slug: 'groof-street',
  },
  {
    id: '2',
    title: 'МЕД-ОРТО',
    category: 'медицина / crm / маркетинг',
    metrics: '+95% загрузка врачей / -40% CAC / +180% LTV',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    slug: 'med-orto',
  },
  {
    id: '3',
    title: 'ENJOY',
    category: 'отдел продаж',
    metrics: '500,000$ в B2B / цикл сделки -50%',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop',
    slug: 'enjoy',
  },
];

export const caseDetails: Record<string, CaseDetail> = {
  'enjoy': {
    id: '3',
    slug: 'enjoy',
    title: 'ENJOY',
    subtitle: 'Создание отдела продаж с нуля',
    category: 'B2B / Отдел продаж / CRM',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop',
    heroMetric: {
      value: '500,000$',
      label: 'выручка в B2B',
    },
    niche: 'B2B агентство медицинского маркетинга',
    pointA: '350,000₽/мес выручки от новых сделок, которые делает собственник',
    pointB: '1,300,000₽/мес и отдел продаж, который работает без собственника',
    description: [
      'Задачей было создать отдел продаж, который дешево генерирует постоянный поток заявок и сделок. Входящие заявки приходили через партнеров или на личный бренд собственника.',
      'Отдел был воссоздан в простой двухуровневой воронке: колл-центр → эксперты команды. Для оцифровки использовали Google-таблицы и CRM Битрикс24.',
    ],
    funnel: [
      'База потенциальных клиентов',
      'Исходящий звонок с оффером бесплатного аудита',
      'Встреча с экспертом',
      'Договор',
      'Оплата',
    ],
    metrics: [
      { label: 'Звонков', value: '6,000+', highlight: false },
      { label: 'Качественных', value: '1,837', highlight: false },
      { label: 'КВАЛ', value: '500', highlight: false },
      { label: 'КЭВ', value: '222', highlight: false },
      { label: 'Продаж', value: '19', highlight: true },
      { label: 'Выручка', value: '1.3M₽', highlight: true },
    ],
    periodData: [
      { period: 'Август 2023', calls: 3720, qualityCalls: 312, quals: 180, kevs: 41, sales: 1, revenue: '125,000₽' },
      { period: 'Ноябрь 2023', calls: 5250, qualityCalls: 1093, quals: 420, kevs: 504, sales: 14, revenue: '813,000₽' },
      { period: 'Февраль 2024', calls: 6000, qualityCalls: 1837, quals: 500, kevs: 222, sales: 14, revenue: '1,315,880₽' },
    ],
    results: [
      'Отдел из 4 менеджеров по звонкам, 3 экспертов и 1 ассистента',
      '115 закрытых сделок за всё время работы',
      'Средний LTV сделки: 440,000₽ за 8 месяцев',
      '90% услуг — ежемесячная подписка со средним чеком 55,000₽',
    ],
    cta: 'Стройте систему вместе с вин-вин',
  },
};
