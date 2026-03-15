import Image from 'next/image';
import { Button } from '@/components/ui';

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-73px)] border-b border-border">
      <div className="p-6 md:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
            СИСТЕМА<br />РОСТА<br />БИЗНЕСА
          </h1>
          <p className="font-mono text-sm md:text-base text-subtle leading-relaxed max-w-md">
            Выстраиваем стратегию роста прибыли и внедряем управляемую систему привлечения клиентов и продаж.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-16">
          <Button variant="secondary">
            СТРАТЕГИЧЕСКАЯ ВСТРЕЧА
          </Button>
          <Button variant="outline">
            ЧЕК-ЛИСТ РОСТА ПРИБЫЛИ
          </Button>
        </div>
      </div>
      
      <div className="relative w-full h-[50vh] lg:h-auto bg-black">
        <Image
          src="/Media/В первый блок.png"
          alt="win-win consulting"
          fill
          className="object-cover object-center"
          priority
        />
        
        <div className="absolute top-6 right-6 text-white text-xs space-y-2 text-right max-w-xs">
          <p className="opacity-70">ДЛЯ КОГО ЭТО:</p>
          <p>→ Собственники бизнеса</p>
          <p>→ Руководители отделов продаж</p>
          <p>→ Маркетологи</p>
        </div>
        
        <div className="absolute bottom-6 left-6 text-white text-xs space-y-1">
          <p className="opacity-70">РЕЗУЛЬТАТ:</p>
          <p>+ Рост выручки и прибыли</p>
          <p>+ Управляемый поток клиентов</p>
          <p>+ Системные процессы</p>
        </div>
      </div>
    </section>
  );
}
