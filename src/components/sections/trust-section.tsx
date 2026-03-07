import { SectionHeading } from "@/components/ui/section-heading";

const trustPoints = [
  "Lectura técnica orientada a confiabilidad, continuidad y protección de activos.",
  "Acompañamiento para reposiciones, mejoras, proyectos y revisiones de aplicación.",
  "Presentación profesional para conversaciones con mantenimiento, compras, gerencia e ingeniería.",
  "Respuesta consultiva que ayuda a reducir improvisación y acelerar decisiones mejor sustentadas.",
];

const labels = ["AGI Industries", "Flowserve", "NOV / Fluid Motion Solutions", "Unique Polymer Systems"];

export function TrustSection() {
  return (
    <section className="section-space pt-10 md:pt-14">
      <div className="shell">
        <div className="panel overflow-hidden p-8 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              eyebrow="Credibilidad"
              title="Una presencia pensada para transmitir criterio, respaldo y capacidad de respuesta."
              description="QTS debe sentirse como un aliado técnico serio desde el primer scroll: claro en lo comercial, sólido en lo técnico y confiable en la forma de presentar la solución."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm leading-7 text-white/[0.72]">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gold-line mt-10 h-px w-full" />

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {labels.map((label) => (
              <div key={label} className="rounded-[20px] border border-white/10 bg-black/20 px-4 py-5 text-center text-sm font-medium text-white/[0.82] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
