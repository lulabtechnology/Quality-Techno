import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Empresa", href: "#empresa" },
  { label: "Industrias", href: "#industrias" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Marcas", href: "#fabricantes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09111de0] backdrop-blur-2xl">
      <div className="shell flex min-h-[84px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-4 transition-transform duration-300 hover:translate-y-[-1px]">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gradient-to-br from-white/10 to-white/[0.04] text-sm font-bold tracking-[0.18em] text-gold shadow-[0_0_0_1px_rgba(215,181,109,0.14)] transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_35px_rgba(215,181,109,0.18)]">QTS</div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-white">Quality Techno Services</p>
            <p className="text-xs text-white/[0.56]">Soluciones técnicas industriales</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/[0.72] transition duration-300 hover:text-white hover:translate-y-[-1px]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="https://wa.me/50768987181?text=Hola%20Quality%20Techno%20Services%2C%20quiero%20hablar%20sobre%20una%20aplicaci%C3%B3n%20industrial.">
            Hablar por WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
