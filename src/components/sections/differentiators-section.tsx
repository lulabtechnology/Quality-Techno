import { SectionHeading } from "@/components/ui/section-heading";

const differentiators = [
  "Lenguaje técnico-comercial equilibrado para compradores y especialistas.",
  "Arquitectura visual premium que fortalece autoridad sin caer en ruido visual.",
  "Placeholders intencionales listos para sustituirse por activos finales sin romper el diseño.",
  "Jerarquía editorial orientada a claridad, credibilidad y conversión industrial.",
  "Base técnica moderna con Next.js 14, TypeScript y Tailwind lista para GitHub Web y Vercel.",
  "SEO base, Open Graph y schema integrados para una presencia más sólida desde el despliegue.",
];

export function DifferentiatorsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="panel overflow-hidden p-8 md:p-10 lg:p-12">
          <SectionHeading
            eyebrow="Diferenciadores"
            title="Una landing concebida para parecer trabajo final de agencia premium enterprise."
            description="Cada decisión apunta a una mezcla poco común en webs industriales pequeñas: contundencia visual, lectura ejecutiva limpia y soporte técnico creíble."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item, index) => (
              <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold/80">Diferencial {index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-white/68">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
