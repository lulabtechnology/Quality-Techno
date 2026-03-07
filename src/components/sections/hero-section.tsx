import { ArrowUpRight, BadgeCheck, Factory, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PremiumPlaceholder } from "@/components/ui/premium-placeholder";

const stats = [
  "Soporte técnico especializado",
  "Respaldo de fabricantes internacionales",
  "Continuidad operativa para procesos críticos",
];

const highlights = [
  { icon: Factory, title: "Presencia industrial seria", text: "Diseño institucional para conversar con mantenimiento, compras, ingeniería y gerencia." },
  { icon: Wrench, title: "Aplicación y acompañamiento", text: "Recomendación técnica, soporte en sitio y criterio práctico para decisiones de alto impacto." },
  { icon: ShieldCheck, title: "Respaldo con marcas líderes", text: "Soluciones vinculadas a fabricantes reconocidos en manejo de fluidos, sellado y protección." },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-8 pt-14 md:pb-14 md:pt-20">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_20%_10%,rgba(215,181,109,0.12),transparent_0,transparent_26%),radial-gradient(circle_at_80%_12%,rgba(58,98,146,0.22),transparent_0,transparent_30%)]" />
      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <span className="eyebrow">Industrial Technical Partner</span>
          <h1 className="mt-6 max-w-4xl text-[2.9rem] font-semibold leading-[0.92] text-white sm:text-[3.5rem] md:text-[5.2rem]">
            Soluciones industriales con criterio técnico, respaldo internacional y una presencia a la altura de operaciones críticas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] md:text-xl">
            Quality Techno Services S.A. acompaña decisiones técnicas con una propuesta clara: soporte especializado, lectura correcta de la aplicación y continuidad operativa para industrias donde fallar no es opción.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#contacto">
              Solicitar evaluación técnica <ArrowUpRight className="ml-2 h-4 w-4" />
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
          <PremiumPlaceholder ratio="hero" className="animate-float border-gold/15 shadow-glow" />

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
