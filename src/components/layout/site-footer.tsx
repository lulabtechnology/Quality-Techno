import Link from "next/link";

const links = [
  { label: "Empresa", href: "#empresa" },
  { label: "Industrias", href: "#industrias" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Fabricantes", href: "#fabricantes" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10 md:py-14">
      <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-lg font-semibold text-white">Quality Techno Services S.A.</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
            Soporte técnico industrial, respaldo de fabricantes internacionales y una presencia digital diseñada para transmitir seriedad, confianza y continuidad operativa.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold/80">Navegación</p>
            <div className="mt-4 space-y-2 text-sm text-white/[0.65]">
              {links.map((link) => (
                <p key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">{link.label}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold/80">Contacto</p>
            <div className="mt-4 space-y-2 text-sm text-white/[0.65]">
              <p><Link href="mailto:info@qualitytechnoservices.com" className="transition hover:text-white">info@qualitytechnoservices.com</Link></p>
              <p><Link href="https://wa.me/50768987181" className="transition hover:text-white">WhatsApp +507 6898-7181</Link></p>
              <p>Panamá</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
