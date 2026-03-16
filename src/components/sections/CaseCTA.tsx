'use client';

import { useState } from 'react';
import { Button, Input } from '@/components/ui';

interface CaseCTAProps {
  cta: string;
}

export function CaseCTA({ cta }: CaseCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', company: '', message: '' });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="p-6 md:p-12 lg:p-20 bg-black text-white text-center">
        <p className="text-2xl md:text-3xl font-bold tracking-tight mb-8">{cta}</p>
        <Button 
          variant="primary" 
          className="bg-white text-black hover:bg-black hover:text-white border-white"
          onClick={() => setIsModalOpen(true)}
        >
          ОБСУДИТЬ ПРОЕКТ
        </Button>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg p-8 md:p-12 text-black">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-black/50 hover:text-black text-2xl"
            >
              ✕
            </button>
            
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">ОБСУДИТЬ ПРОЕКТ</h3>
            <p className="text-sm text-subtle mb-8">Заполните форму и мы свяжемся с вами</p>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <p className="text-lg font-medium">Заявка отправлена!</p>
                <p className="text-sm text-subtle">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  name="company"
                  placeholder="Компания"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
                <Input
                  name="message"
                  placeholder="Сообщение"
                  multiline
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm">Ошибка отправки. Попробуйте позже.</p>
                )}
                
                <Button type="submit" variant="primary" fullWidth className="py-4" disabled={isSubmitting}>
                  {isSubmitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
