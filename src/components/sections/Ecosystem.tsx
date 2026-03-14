export function Ecosystem() {
  const partners = [
    'Маркетинг', 'Аналитика', 'Дизайн', 'Реклама', 'Автоматизация',
    'Финансовый учёт', 'HR', 'IT Разработка', 'Инвестиции', 'Юристы'
  ];

  return (
    <section className="border-b border-border">
      <div className="p-6 md:px-12 lg:px-20 py-12 border-b border-border">
        <h2 className="text-3xl font-medium uppercase tracking-tighter">ЭКОСИСТЕМА РЕШЕНИЙ</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        <div className="p-6 md:p-12 lg:p-20 border-b md:border-b-0 md:border-r border-border">
          <p className="text-sm text-subtle mb-8">Стратегия разработки плана роста бизнеса в 6 шагов</p>
          <div className="space-y-6">
            <div>
              <span className="text-xs text-subtle uppercase tracking-widest block mb-2">01</span>
              <p className="text-sm">Внедрение новых специалистов и внедрение</p>
            </div>
            <div>
              <span className="text-xs text-subtle uppercase tracking-widest block mb-2">02</span>
              <p className="text-sm">Сопровождение создание и управление ростом бизнеса</p>
            </div>
            <div>
              <span className="text-xs text-subtle uppercase tracking-widest block mb-2">03</span>
              <p className="text-sm">Консалтинг доступ к специалистам, инструментам и среде предпринимателей</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 md:p-12 lg:p-20 bg-black text-white flex flex-col justify-center">
          <p className="text-sm text-white/50 mb-8">В рамках стратегии и сопровождения мы подключаем профильных партнёров:</p>
          <ul className="text-sm space-y-3">
            {partners.map((partner) => (
              <li key={partner} className="flex items-center gap-3">
                <span className="iconify text-white/30" data-icon="solar:arrow-right-linear" data-width="16" data-height="16" />
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-6 md:px-12 lg:px-20 py-8 text-center text-sm text-subtle">
        Подключение решений под задачи и стратегию. Вы управляете стратегией — мы управляем внедрением.
      </div>
    </section>
  );
}
