import { Button } from '@/components/ui';

export function StrategicMeeting() {
  return (
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
                <span className="iconify shrink-0 mt-0.5 text-black" data-icon="solar:check-circle-linear" data-width="18" data-height="18" />
                <span>анализ текущей ситуации</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="iconify shrink-0 mt-0.5 text-black" data-icon="solar:check-circle-linear" data-width="18" data-height="18" />
                <span>выявление точек роста</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="iconify shrink-0 mt-0.5 text-black" data-icon="solar:check-circle-linear" data-width="18" data-height="18" />
                <span>оценка маркетинга и системы привлечения</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="iconify shrink-0 mt-0.5 text-black" data-icon="solar:check-circle-linear" data-width="18" data-height="18" />
                <span>рекомендации</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="iconify shrink-0 mt-0.5 text-black" data-icon="solar:check-circle-linear" data-width="18" data-height="18" />
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
              <div className="w-16 h-16 border border-border rounded-lg flex items-center justify-center">
                <span className="iconify" data-icon="solar:smartphone-linear" data-width="28" data-height="28" />
              </div>
              <div>
                <div className="text-xs text-subtle uppercase tracking-widest">онлайн</div>
                <div className="text-xs text-subtle">бесплатно</div>
              </div>
            </div>
          </div>
          
          <Button variant="primary" fullWidth className="py-5">
            ПОДАТЬ ЗАЯВКУ
          </Button>
        </div>
      </div>
    </section>
  );
}
