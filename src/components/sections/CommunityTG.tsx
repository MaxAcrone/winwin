import { Button } from '@/components/ui';

const benefits = [
  'Еженедельные разборы',
  'Практические инструменты',
  'Живой нетворкинг',
  'Полезные материалы',
  'Специальные условия для продвижения бизнеса',
  'Приглашенные спикеры',
  'Готовые материалы для роста',
  'Регулярные бонусы',
];

export function CommunityTG() {
  return (
    <section id="community" className="border-b border-border">
      <div className="p-6 md:px-12 lg:px-20 py-16 border-b border-border text-center bg-black text-white">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter flex items-center justify-center gap-4">
          WIN-CLUB 
          <span className="iconify mt-1 opacity-50" data-icon="solar:paperclip-linear" data-width="40" data-height="40" />
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:p-12 lg:p-20 border-b md:border-b-0 md:border-r border-border bg-white flex flex-col justify-center">
          <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">ЗАКРЫТОЕ СООБЩЕСТВО ПРЕДПРИНИМАТЕЛЕЙ</h3>
          
          <ul className="space-y-3 text-sm mb-8">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="iconify shrink-0 mt-0.5" data-icon="solar:check-circle-linear" data-width="18" data-height="18" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-sm text-subtle">Для тех, кто хочет расти системно.</p>
        </div>
        
        <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-between items-end text-right bg-border/5">
          <span className="iconify text-black/10 mb-auto" data-icon="solar:star-fall-minimalistic-linear" data-width="48" data-height="48" />
          
          <div className="w-full mt-12 border-t border-border pt-8">
            <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">1,000 ₽</div>
            <div className="text-xs text-subtle uppercase tracking-widest mb-8">/ МЕСЯЦ</div>
            
            <a 
              href="https://t.me/winconsult_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="primary" fullWidth className="py-5">
                СТАТЬ ЧАСТЬЮ
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
