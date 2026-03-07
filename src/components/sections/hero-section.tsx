import { ArrowUpRight, BadgeCheck, Factory, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PremiumPlaceholder } from "@/components/ui/premium-placeholder";

const stats = [
  "Soporte técnico especializado",
  "Soluciones para continuidad operativa",
  "Narrativa premium para clientes industriales serios",
];

const highlights = [
  { icon: Factory, title: "Enfoque industrial", text: "Diseñado para entornos donde la confiabilidad técnica pesa más que la estética vacía." },
  { icon: Wrench, title: "Acompañamiento experto", text: "Diagnóstico, recomendación, soporte en sitio y criterio de aplicación." },
  { icon: ShieldCheck, title: "Respaldo internacional", text: "Ecosistema de fabricantes y tecnologías para activos críticos." },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-8 pt-14 md:pb-14 md:pt-20">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <span className="eyebrow">Industrial Technical Partner</span>
          <h1 className="mt-6 max-w-4xl text-[2.9rem] font-semibold leading-[0.92] text-white sm:text-[3.5rem] md:text-[5.2rem]">
            Soluciones técnicas industriales con presencia premium, criterio serio y visión de continuidad operativa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Quality Techno Services S.A. se presenta como aliado estratégico para clientes que necesitan soporte especializado, confiabilidad de proceso y una interlocución técnica a la altura de industrias críticas.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#contacto">
              Solicitar conversación técnica <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="https://wa.me/50768987181?text=Hola%2C%20quisiera%20evaluar%20una%20soluci%C3%B3n%20industrial%20con%20Quality%20Techno%20Services." variant="secondary">
              Escribir por WhatsApp
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item} className="panel p-4">
                <BadgeCheck className="h-5 w-5 text-gold" />
                <p className="mt-3 text-sm leading-6 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-[8%] top-[-8%] h-40 rounded-full bg-gold/15 blur-3xl" />
          <PremiumPlaceholder label="Hero editorial industrial premium — fotografía o composición 3D futura" ratio="hero" className="animate-float border-gold/15 shadow-glow" />

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="panel-dark p-5">
                <item.icon className="h-5 w-5 text-gold" />
                <p className="mt-3 text-sm font-medium text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
