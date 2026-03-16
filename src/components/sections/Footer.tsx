import Link from 'next/link';

export function Footer() {
  return (
    <footer className="p-6 md:px-12 lg:px-20 py-12 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
        <div className="text-2xl font-bold tracking-tighter">W.</div>
        <div className="text-xs uppercase tracking-widest">
          <Link href="#" className="hover:underline">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
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
