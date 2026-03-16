import Image from 'next/image';

export function Founder() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border bg-black text-white">
      <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/20">
        <span className="text-xs text-white/50 uppercase tracking-widest mb-6 block">СТРАТЕГИЧЕСКИЙ ПАРТНЁР</span>
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
          С-LEVEL
        </h2>
        <p className="text-sm text-white/70 leading-relaxed mb-8">
          Помогаю компаниям выстраивать систему роста и увеличивать выручку. Я отвечаю за систему роста. Команды - это инструменты, которыми я управляю.
        </p>
        <div className="mt-auto">
          <div className="text-xl font-bold uppercase tracking-tight">СТАРИКОВ ДАНИЛ</div>
          <div className="text-xs text-white/50 uppercase tracking-widest mt-1">Основатель win-win</div>
        </div>
      </div>
      
      <div className="relative w-full h-[60vh] md:h-auto overflow-hidden">
        <Image
          src="/Media/main.jpg"
          alt="Стариков Данил"
          fill
          className="object-contain grayscale contrast-125"
        />
      </div>
    </section>
  );
}
