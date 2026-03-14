import type { Partner } from '@/lib/types';

const partners: Partner[] = [
  { id: '1', name: 'PLURRA' },
  { id: '2', name: 'BIZZUP' },
  { id: '3', name: 'ТОЧКА.БАНК' },
  { id: '4', name: 'БИТРИКС24' },
  { id: '5', name: 'UIS' },
  { id: '6', name: 'ЭЛЕКТРОФОРМА' },
  { id: '7', name: 'ACRONE' },
  { id: '8', name: 'WAZZUP' },
  { id: '9', name: 'AIDENTIKA' },
];

export function PartnersBand() {
  return (
    <div className="py-8 px-6 md:px-12 w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 bg-white border-t border-border">
      {partners.map((partner) => (
        <div key={partner.id} className="text-lg md:text-xl font-bold tracking-tighter opacity-60">
          {partner.name}
        </div>
      ))}
    </div>
  );
}
