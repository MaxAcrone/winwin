'use client';

import { useState } from 'react';
import { Button, Input } from '@/components/ui';
import Image from 'next/image';

export function StrategicMeeting() {
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
      <section className="border-b border-border">
        <div className="p-6 md:px-12 lg:px-20 py-16 border-b border-border text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">СТРАТЕГИЧЕСКАЯ ВСТРЕЧА</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-12 lg:p-20 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between">
            <div>
              <p className="text-base leading-relaxed mb-8">
                Персональная диагностика бизнеса для собственников и руководителей.
              </p>
              <ul className="space-y-3 text-sm text-subtle">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                  <span>анализ текущей ситуации</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                  <span>выявление точек роста</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                  <span>оценка маркетинга и системы привлечения</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                  <span>рекомендации</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                  <span>понимание следующих шагов</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-between">
            <div className="mb-8">
              <p className="text-sm text-subtle leading-relaxed mb-6">
                После встречи вы получите список точек роста и план следующих шагов на 1 месяц.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 border border-border rounded-lg flex items-center justify-center overflow-hidden p-2">
                  <Image
                    src="/Media/Zoom-Logo-PNG.png"
                    alt="Zoom"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs text-subtle uppercase tracking-widest">онлайн</div>
                  <div className="text-xs text-subtle">бесплатно</div>
                </div>
              </div>
            </div>
            
            <Button variant="primary" fullWidth className="py-5" onClick={() => setIsModalOpen(true)}>
              ПОДАТЬ ЗАЯВКУ
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg p-8 md:p-12">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-black/50 hover:text-black"
            >
              <span className="iconify" data-icon="solar:close-circle-linear" data-width="24" data-height="24" />
            </button>
            
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">ЗАЯВКА НА ВСТРЕЧУ</h3>
            <p className="text-sm text-subtle mb-8">Заполните форму и мы свяжемся с вами</p>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <span className="iconify text-green-500 mb-4" data-icon="solar:check-circle-linear" data-width="48" data-height="48" />
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
