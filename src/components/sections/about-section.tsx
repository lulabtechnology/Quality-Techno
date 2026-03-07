import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumPlaceholder } from "@/components/ui/premium-placeholder";

const bullets = [
  "Empresa orientada a soporte técnico especializado, recomendación aplicada y continuidad operativa.",
  "Capacidad para acompañar conversaciones con perfiles técnicos, compras, mantenimiento y gerencia.",
  "Propuesta de valor centrada en criterio, respaldo de fabricantes y respuesta profesional para industrias críticas.",
];

export function AboutSection() {
  return (
    <section id="empresa" className="section-anchor section-space">
      <div className="shell grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr]">
        <div>
          <SectionHeading
            eyebrow="Sobre la empresa"
            title="Una firma que debe sentirse sólida, precisa y lista para acompañar decisiones de alto impacto."
            description="Quality Techno Services S.A. proyecta una combinación poco común en su categoría: proximidad comercial, lectura técnica de la aplicación y respaldo internacional para soluciones industriales donde la confiabilidad es prioritaria."
          />

          <div className="mt-8 space-y-4">
            {bullets.map((bullet) => (
              <div key={bullet} className="panel p-5">
                <p className="text-sm leading-7 text-white/[0.72]">{bullet}</p>
              </div>
            ))}
          </div>
        </div>

        <PremiumPlaceholder label="detalle institucional industrial" ratio="landscape" />
      </div>
    </section>
  );
}
