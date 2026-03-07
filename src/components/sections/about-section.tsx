import { ShieldCheck, SlidersHorizontal, Users2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { IndustrialVisual } from "@/components/visuals/industrial-visual";

const bullets = [
  {
    icon: SlidersHorizontal,
    title: "Lectura de aplicación",
    text: "Cada conversación debe partir de condiciones reales de servicio, criticidad, desempeño esperado y riesgo operativo.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo de portafolio",
    text: "La fortaleza de QTS está en conectar la necesidad del cliente con soluciones respaldadas por fabricantes reconocidos.",
  },
  {
    icon: Users2,
    title: "Interlocución útil",
    text: "El mensaje está preparado para hablar con perfiles técnicos y con quienes deben aprobar la decisión dentro de la organización.",
  },
];

export function AboutSection() {
  return (
    <section id="empresa" className="section-anchor section-space">
      <div className="shell grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr]">
        <div>
          <SectionHeading
            eyebrow="Sobre la empresa"
            title="Una firma orientada a decisiones industriales con más criterio y menos improvisación."
            description="Quality Techno Services S.A. articula soporte técnico, acompañamiento consultivo y respaldo internacional para atender aplicaciones donde la confiabilidad operativa pesa tanto como el precio."
          />

          <div className="mt-8 space-y-4">
            {bullets.map((bullet) => (
              <div key={bullet.title} className="panel p-5">
                <bullet.icon className="h-5 w-5 text-gold" />
                <p className="mt-4 text-lg font-medium text-white">{bullet.title}</p>
                <p className="mt-3 text-sm leading-7 text-white/[0.72]">{bullet.text}</p>
              </div>
            ))}
          </div>
        </div>

        <IndustrialVisual compact />
      </div>
    </section>
  );
}
