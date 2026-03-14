'use client';

export function ProblemChecklist() {
  return (
    <section className="border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Problem */}
        <div className="p-6 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-border bg-black text-white">
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Проблема</p>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              Большинство бизнесов не имеют системы роста. Теряют деньги на подрядчиках, теряют ЛИДы, не понимают как масштабироваться.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-8 h-px bg-white/30"></span>
              <span className="text-white/60">Стратегия → Внедрение → Сопровождение</span>
            </div>
          </div>
        </div>
        
        {/* Right - Checklist CTA */}
        <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-widest text-subtle mb-2">Бесплатно</p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">12 точек роста бизнеса</h3>
            <p className="text-sm text-subtle mb-6">Чек-лист поможет определить слабые места и точки роста вашего бизнеса.</p>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors"
            >
              <span className="iconify" data-icon="mdi:telegram" data-width="18" data-height="18" />
              Получить в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
