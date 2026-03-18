import Link from 'next/link';

export function Footer() {
  return (
    <footer className="p-6 md:px-12 lg:px-20 py-12 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
        <div>
          <div className="text-2xl font-bold tracking-tighter mb-4">W.</div>
          <div className="text-xs space-y-2 text-subtle">
            <p>
              <a href="mailto:daysdanil05@gmail.com" className="hover:underline">daysdanil05@gmail.com</a>
            </p>
            <p>
              <a href="tel:+79823233591" className="hover:underline">+7 (982) 323-35-91</a>
            </p>
            <p>Екатеринбург, Шейнкмана 55, БЦ Аврора</p>
          </div>
        </div>
        <div className="text-xs uppercase tracking-widest">
          <Link href="/policy" className="hover:underline">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
        </div>
      </div>
      <div className="text-center text-xs text-subtle space-y-1">
        <p>© 2026 win-win consulting</p>
        <p>ИП СТАРИКОВ ДАНИЛ РОМАНОВИЧ</p>
        <p>ИНН: 745702226958</p>
      </div>
    </footer>
  );
}
