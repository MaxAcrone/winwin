export interface Case {
  id: string;
  title: string;
  category: string;
  metrics: string;
  imageUrl: string;
  slug: string;
}

export interface CaseMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CasePeriodData {
  period: string;
  calls: number;
  qualityCalls: number;
  quals: number;
  kevs: number;
  sales: number;
  revenue: string;
}

export interface CaseDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  gallery?: string[];
  heroMetric: {
    value: string;
    label: string;
  };
  niche: string;
  pointA: string;
  pointB: string;
  description: string[];
  funnel?: string[];
  metrics?: CaseMetric[];
  periodData?: CasePeriodData[];
  results?: string[];
  cta: string;
}

export interface Partner {
  id: string;
  name: string;
}

export interface ContactFormData {
  name: string;
  phone?: string;
  company: string;
  position: string;
  problem: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface SocialLink {
  id: string;
  platform: 'telegram' | 'vk' | 'youtube';
  url: string;
  label: string;
}

export interface SubmitResult {
  success: boolean;
  error?: string;
}
