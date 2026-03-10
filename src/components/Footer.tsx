import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy text-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <span className="text-sm font-bold">QTS</span>
              </div>
              <div>
                <p className="text-lg font-semibold">Quality Techno Services</p>
                <p className="text-sm text-white/70">Representación técnica industrial y soporte especializado.</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
              Soluciones industriales para operaciones donde la continuidad, confiabilidad y soporte técnico autorizado son esenciales.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Contacto</p>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>WhatsApp: +507 6898-7181</p>
              <p>Email: info@qualitytechnoservices.com</p>
              <p>Panamá • Cobertura regional</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Enlaces</p>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <Link href="/soluciones" className="block hover:text-white">Soluciones</Link>
              <Link href="/industrias" className="block hover:text-white">Industrias</Link>
              <Link href="/fabricantes" className="block hover:text-white">Fabricantes</Link>
              <Link href="/centro-de-recursos" className="block hover:text-white">Centro de recursos</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
