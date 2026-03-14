'use client';

import { useState } from 'react';
import { Button, Input } from '@/components/ui';
import { validateContactForm } from '@/lib/validation';
import type { ContactFormData } from '@/lib/types';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    position: '',
    problem: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', company: '', position: '', problem: '' });
      }
    } catch {
      setErrors({ form: 'Произошла ошибка. Попробуйте позже.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="border-b border-border py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">Спасибо!</h2>
          <p className="text-sm text-subtle">Мы свяжемся с вами в ближайшее время.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="border-b border-border py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm text-subtle mb-8">
          Оставьте заявку и мы свяжемся с вами для обсуждения вашего проекта
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <Input
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            name="company"
            placeholder="Компания"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />
          <Input
            name="position"
            placeholder="Должность"
            value={formData.position}
            onChange={handleChange}
          />
          <Input
            name="problem"
            placeholder="Опишите вашу задачу или проблему"
            value={formData.problem}
            onChange={handleChange}
            error={errors.problem}
            multiline
            rows={4}
          />
          
          {errors.form && <p className="text-xs text-red-500 text-center">{errors.form}</p>}
          
          <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
          </Button>
        </form>
      </div>
    </section>
  );
}
