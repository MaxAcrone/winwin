import Link from 'next/link';

export function Footer() {
  return (
    <footer className="p-6 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-2xl font-bold tracking-tighter">W.</div>
      <div className="text-xs text-subtle">© 2024 win-win consulting. Все права защищены.</div>
      <div className="text-xs uppercase tracking-widest">
        <Link href="#" className="hover:underline">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
      </div>
    </footer>
  );
}
