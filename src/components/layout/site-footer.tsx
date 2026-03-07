import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Quality Techno Services S.A.</p>
          <p className="mt-2 max-w-xl text-sm text-white/60">
            Base industrial premium preparada para integrar la landing completa, el sistema visual y los activos futuros del proyecto.
          </p>
        </div>
        <div className="space-y-1 text-sm text-white/60">
          <p>
            <Link href="mailto:info@qualitytechnoservices.com" className="transition hover:text-white">info@qualitytechnoservices.com</Link>
          </p>
          <p>
            <Link href="https://wa.me/50768987181" className="transition hover:text-white">WhatsApp +507 6898-7181</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
