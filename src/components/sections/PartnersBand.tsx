import Image from 'next/image';

const partnerLogos = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  src: `/Media/logo_partner/${i + 1}.png`,
  alt: `Партнёр ${i + 1}`,
}));

export function PartnersBand() {
  // Дублируем логотипы для бесшовной анимации
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div className="py-8 bg-white border-t border-border overflow-hidden">
      <div className="flex animate-marquee">
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={`${logo.id}-${index}`} 
            className="flex-shrink-0 mx-8 md:mx-12 relative h-8 md:h-10 w-24 md:w-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
