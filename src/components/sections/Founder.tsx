import Image from 'next/image';

export function Founder() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border bg-black text-white">
      <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/20">
        <span className="text-xs text-white/50 uppercase tracking-widest mb-6 block">СТРАТЕГИЧЕСКИЙ ПАРТНЁР</span>
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
          Стратегический партнёр собственника бизнеса.
        </h2>
        <p className="text-sm text-white/70 leading-relaxed mb-8">
          Помогаю компаниям выстраивать систему роста и увеличивать выручку. В отличие от агентств роста, Команда — это инструменты, которыми я управляю.
        </p>
        <div className="mt-auto">
          <div className="text-xl font-bold uppercase tracking-tight">СТАРИКОВ ДАНИЛ</div>
          <div className="text-xs text-white/50 uppercase tracking-widest mt-1">C-LEVEL / ОСНОВАТЕЛЬ</div>
        </div>
      </div>
      
      <div className="relative w-full h-[60vh] md:h-auto overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
          alt="Стариков Данил"
          fill
          className="object-cover grayscale contrast-125 object-center"
        />
        <div className="absolute bottom-6 right-6 text-right">
          <div className="text-xs uppercase tracking-widest bg-white text-black px-3 py-1 inline-block">*фото* Стариков Данил</div>
        </div>
      </div>
    </section>
  );
}
