import type { SocialLink } from '@/lib/types';

const socialLinks: SocialLink[] = [
  { id: '1', platform: 'telegram', url: 'https://t.me/winconsultru', label: 'TELEGRAM' },
  { id: '2', platform: 'vk', url: 'https://vk.com/starikovdani', label: 'VK' },
  { id: '3', platform: 'youtube', url: 'https://www.youtube.com/@winconsultru', label: 'YOUTUBE' },
];

const iconMap = {
  telegram: 'mdi:telegram',
  vk: 'mdi:vk',
  youtube: 'mdi:youtube',
};

export function SocialLinks() {
  return (
    <section className="border-b border-border py-12 px-6 md:px-12 lg:px-20">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm uppercase tracking-widest">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="flex items-center gap-2 hover:opacity-50 transition-opacity"
          >
            <span className="iconify" data-icon={iconMap[link.platform]} data-width="20" data-height="20" />
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
