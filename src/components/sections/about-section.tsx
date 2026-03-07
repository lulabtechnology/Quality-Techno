import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumPlaceholder } from "@/components/ui/premium-placeholder";

const bullets = [
  "Empresa enfocada en soporte técnico especializado y recomendaciones basadas en especificación y sistema.",
  "Mensaje pensado para consolidar a QTS como aliado técnico y no solo como proveedor transaccional.",
  "Discurso visual y comercial orientado a continuidad operativa, confiabilidad y valor de largo plazo.",
];

export function AboutSection() {
  return (
    <section id="empresa" className="section-anchor section-space">
      <div className="shell grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr]">
        <div>
          <SectionHeading
            eyebrow="Sobre la empresa"
            title="Una marca industrial que debe sentirse técnica, sólida e inmediatamente confiable."
            description="La narrativa se alinea con una empresa que acompaña decisiones críticas, traduce requerimientos de operación en recomendaciones aplicables y sostiene conversaciones de alto nivel con mantenimiento, compras, ingeniería y gerencia."
          />

          <div className="mt-8 space-y-4">
            {bullets.map((bullet) => (
              <div key={bullet} className="panel p-5">
                <p className="text-sm leading-7 text-white/[0.72]">{bullet}</p>
              </div>
            ))}
          </div>
        </div>

        <PremiumPlaceholder label="Bloque visual institucional — equipo técnico, planta, visita en sitio o detalle de ingeniería" ratio="landscape" />
      </div>
    </section>
  );
}
