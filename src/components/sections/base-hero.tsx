import { ArrowUpRight, BadgeCheck, Factory, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PremiumPlaceholder } from "@/components/ui/premium-placeholder";

const pillars = [
  "Representación técnica industrial seria",
  "Soporte especializado para continuidad operativa",
  "Base visual premium para fabricantes y clientes críticos",
];

export function BaseHero() {
  return (
    <section className="relative overflow-hidden pt-14 md:pt-20">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow">Industrial Technical Partner</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            Base premium para una presencia industrial institucional y visualmente superior.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] md:text-xl">
            Esta Fase 2 deja lista la arquitectura visual y técnica sobre la que se montará la landing final de Quality Techno Services S.A.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#contacto">Preparado para Fase 3 <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
            <Button href="#soluciones" variant="secondary">Revisar secciones base</Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {pillars.map((item, index) => (
              <div key={index} className="panel p-4">
                <BadgeCheck className="h-5 w-5 text-gold" />
                <p className="mt-3 text-sm leading-6 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <PremiumPlaceholder label="Hero industrial premium — desktop" ratio="hero" className="animate-float" />
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="panel p-5">
              <Factory className="h-5 w-5 text-gold" />
              <p className="mt-3 text-sm font-medium text-white">Arquitectura enterprise</p>
              <p className="mt-2 text-sm text-white/60">Jerarquía lista para fabricantes, compras y operaciones.</p>
            </div>
            <div className="panel p-5">
              <Wrench className="h-5 w-5 text-gold" />
              <p className="mt-3 text-sm font-medium text-white">Sistema reutilizable</p>
              <p className="mt-2 text-sm text-white/60">Componentes base preparados para expansión limpia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
