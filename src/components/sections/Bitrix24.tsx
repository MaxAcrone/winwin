const features = [
  'первичная настройка системы и полей',
  'управление воронкой продаж',
  'интеграция рекламных каналов',
  'контроль работы команды',
  'сквозная аналитика',
];

export function Bitrix24() {
  return (
    <section className="border-b border-border py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="text-4xl font-bold tracking-tighter mb-2">БИТРИКС24</div>
        <h2 className="text-xl md:text-2xl uppercase tracking-tight mb-8">ВНЕДРЕНИЕ CRM-СИСТЕМЫ BITRIX24</h2>
        
        <p className="text-sm leading-relaxed mb-8 max-w-xl text-subtle">
          CRM — ключевой элемент системы роста бизнеса, позволяющий управлять клиентами, продажами и процессами.
        </p>
        
        <ul className="text-sm space-y-4 max-w-md w-full text-left mx-auto">
          {features.map((feature) => (
            <li key={feature} className="flex items-center justify-between border-b border-border pb-4">
              <span>{feature}</span>
              <span className="iconify" data-icon="solar:check-read-linear" data-width="18" data-height="18" />
            </li>
          ))}
        </ul>
        
        <p className="text-xs text-subtle mt-8">CRM интегрируется со всеми системами роста бизнеса</p>
      </div>
    </section>
  );
}
