import Image from 'next/image';

const partnerLogos = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  src: `/Media/logo_partner/${i + 1}.png`,
  alt: `Партнёр ${i + 1}`,
}));

export function PartnersBand() {
  return (
    <div className="py-8 px-6 md:px-12 w-full bg-white border-t border-border">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {partnerLogos.map((logo) => (
          <div key={logo.id} className="relative h-8 md:h-10 w-24 md:w-32 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
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
