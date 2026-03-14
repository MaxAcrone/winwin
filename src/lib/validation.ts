import type { ContactFormData, ValidationResult } from './types';

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Имя должно содержать минимум 2 символа';
  }

  if (!data.company || data.company.trim().length < 2) {
    errors.company = 'Название компании обязательно';
  }

  if (!data.problem || data.problem.trim().length < 10) {
    errors.problem = 'Опишите проблему подробнее (минимум 10 символов)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
