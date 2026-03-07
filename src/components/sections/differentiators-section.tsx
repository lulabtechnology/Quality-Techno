import { SectionHeading } from "@/components/ui/section-heading";

const differentiators = [
  "Interlocución técnica y comercial en un mismo lenguaje, útil para compras y especialistas.",
  "Presentación visual institucional capaz de elevar percepción de confianza desde el primer scroll.",
  "Sistema visual flexible para sustituir activos abstractos por fotografía real sin romper la composición.",
  "Jerarquía editorial clara para comunicar valor, respaldo y criterio aplicado sin saturar la pantalla.",
  "Base moderna en Next.js, TypeScript y Tailwind lista para evolucionar con nuevas secciones y campañas.",
  "Fundamentos de SEO técnico, Open Graph y schema ya integrados para una mejor salida a producción.",
];

export function DifferentiatorsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="panel overflow-hidden p-8 md:p-10 lg:p-12">
          <SectionHeading
            eyebrow="Diferenciadores"
            title="Una propuesta digital construida para proyectar autoridad, claridad y preparación."
            description="La diferencia está en cómo se combinan narrativa, sistema visual y estructura comercial para que la marca se perciba más robusta, más confiable y más alineada con clientes industriales serios."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item, index) => (
              <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold/80">Diferencial {index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-white/[0.68]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
