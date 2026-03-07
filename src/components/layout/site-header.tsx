import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Empresa", href: "#empresa" },
  { label: "Industrias", href: "#industrias" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Fabricantes", href: "#fabricantes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <div className="shell flex min-h-[78px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold text-gold shadow-[0_0_0_1px_rgba(215,181,109,0.14)]">QTS</div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white">Quality Techno Services</p>
            <p className="text-xs text-white/55">Industrial Technical Solutions</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/72 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="https://wa.me/50768987181?text=Hola%20Quality%20Techno%20Services%2C%20quisiera%20informaci%C3%B3n%20sobre%20sus%20soluciones%20industriales.">
            Contactar por WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
