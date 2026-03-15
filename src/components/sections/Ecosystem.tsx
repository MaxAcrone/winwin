export function Ecosystem() {
  const partners = [
    'Маркетинг', 'Аналитика', 'Дизайн', 'Реклама', 'Автоматизация',
    'Финансовый учёт', 'HR', 'IT Разработка', 'Инвестиции', 'Юристы'
  ];

  const stages = [
    { title: 'Стратегия', description: 'Разработка плана роста бизнеса на 6 месяцев' },
    { title: 'Внедрение', description: 'Подключение специалистов и внедрение решений' },
    { title: 'Сопровождение', description: 'Контроль и управление ростом бизнеса' },
    { title: 'Экосистема и комьюнити', description: 'Доступ к специалистам, инструментам и среде предпринимателей' },
  ];

  return (
    <section className="border-b border-border">
      <div className="p-6 md:px-12 lg:px-20 py-12 border-b border-border">
        <h2 className="text-3xl font-medium uppercase tracking-tighter">ЭКОСИСТЕМА РЕШЕНИЙ</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        <div className="p-6 md:p-12 lg:p-20 border-b md:border-b-0 md:border-r border-border">
          <div className="flex flex-col gap-6">
            {stages.map((stage, index) => (
              <div key={stage.title} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {index < stages.length - 1 && (
                    <div className="w-0.5 h-8 bg-black/20 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-sm uppercase tracking-wide mb-1">{stage.title}</h4>
                  <p className="text-sm text-subtle">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 md:p-12 lg:p-20 bg-black text-white flex flex-col justify-center">
          <p className="text-sm text-white/50 mb-8">В рамках стратегии и сопровождения мы подключаем профильных партнёров:</p>
          <ul className="text-sm space-y-3">
            {partners.map((partner) => (
              <li key={partner} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
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
