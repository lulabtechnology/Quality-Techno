import { ArrowUpRight, ArrowRight, BadgeCheck, Factory, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IndustrialVisual } from "@/components/visuals/industrial-visual";
import { HeroCascade, HeroVisual, MotionStagger, MotionItem, HoverLift } from "@/components/ui/motion";

const credibility = [
  "Soporte consultivo y acompañamiento aplicado",
  "Marcas globales para entornos exigentes",
  "Cobertura para mantenimiento, compras e ingeniería",
];

const highlights = [
  {
    icon: Wrench,
    title: "Criterio técnico",
    text: "Selección de soluciones con lectura de aplicación, criticidad y condiciones reales de servicio.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo internacional",
    text: "Portafolio vinculado a fabricantes reconocidos en sellado, manejo de fluidos y protección de activos.",
  },
  {
    icon: Factory,
    title: "Enfoque B2B serio",
    text: "Comunicación preparada para conversar con planta, proyectos, compras y gerencia sin perder solidez.",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-10 pt-14 md:pb-16 md:pt-20">
      <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_18%_8%,rgba(215,181,109,0.16),transparent_0,transparent_28%),radial-gradient(circle_at_82%_14%,rgba(82,130,191,0.24),transparent_0,transparent_30%)] animate-glow-pulse" />
      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <HeroCascade
          items={[
            <span key="eyebrow" className="eyebrow">Industrial Technical Partner</span>,
            <h1 key="title" className="mt-6 max-w-4xl text-[3rem] font-semibold leading-[0.9] text-white sm:text-[3.8rem] md:text-[5.5rem]">
              Soluciones técnicas para operaciones que no pueden detenerse.
            </h1>,
            <p key="text" className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.74] md:text-xl">
              Quality Techno Services S.A. acompaña decisiones industriales con soporte consultivo, respaldo de fabricantes internacionales y foco real en continuidad operativa.
            </p>,
            <div key="buttons" className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contacto">
                Solicitar evaluación técnica <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="#fabricantes" variant="secondary">
                Ver marcas y capacidades <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>,
          ]}
        />

        <HeroVisual>
          <div className="relative">
            <div className="absolute inset-x-[12%] top-[-8%] h-44 rounded-full bg-gold/15 blur-3xl animate-glow-pulse" />
            <IndustrialVisual className="animate-float-premium" />

            <MotionStagger className="mt-5 grid gap-4 sm:grid-cols-3" delay={0.3} stagger={0.12}>
              {highlights.map((item) => (
                <MotionItem key={item.title}>
                  <HoverLift>
                    <div className="panel-dark hover-panel shine-border p-5">
                      <item.icon className="h-5 w-5 text-gold" />
                      <p className="mt-3 text-sm font-medium text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
                    </div>
                  </HoverLift>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>
        </HeroVisual>
      </div>

      <div className="shell relative mt-10">
        <MotionStagger className="grid gap-4 sm:grid-cols-3" delay={0.45} stagger={0.1}>
          {credibility.map((item) => (
            <MotionItem key={item}>
              <HoverLift>
                <div className="panel-dark hover-panel p-4">
                  <BadgeCheck className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-sm leading-6 text-white/75">{item}</p>
                </div>
              </HoverLift>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
