import Link from 'next/link';
import { navLinks } from './site-data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-soft">
            <span className="text-sm font-bold">QTS</span>
          </div>
          <div>
            <p className="text-lg font-semibold text-navy">Quality</p>
            <p className="-mt-1 text-sm text-slate-500">Techno Services</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacto" className="hidden rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink md:inline-flex">
          Solicitar Asesoría Técnica
        </Link>
      </div>
    </header>
  );
}
