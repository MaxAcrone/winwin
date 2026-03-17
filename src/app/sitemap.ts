import { MetadataRoute } from 'next';
import { caseDetails } from '@/lib/cases-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://winconsult.ru';
  
  const casePages = Object.keys(caseDetails).map((slug) => ({
    url: `${baseUrl}/cases/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...casePages,
  ];
}
