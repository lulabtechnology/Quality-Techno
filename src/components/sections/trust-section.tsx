import { SectionHeading } from "@/components/ui/section-heading";

const trustPoints = [
  "Interlocución técnica enfocada en continuidad operativa, protección de activos y confiabilidad de proceso.",
  "Acompañamiento comercial y técnico para proyectos, reposiciones, mejoras y soporte especializado.",
  "Presentación clara de fabricantes internacionales y capacidades que fortalecen la percepción de respaldo.",
  "Experiencia digital diseñada para transmitir seriedad institucional desde el primer impacto.",
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
              title="Una presencia pensada para transmitir capacidad técnica, respaldo y velocidad de respuesta."
              description="La primera lectura debe dejar claro que QTS no compite como un proveedor genérico, sino como un aliado técnico preparado para acompañar decisiones relevantes en entornos exigentes."
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
              <div key={label} className="rounded-[20px] border border-white/10 bg-black/15 px-4 py-5 text-center text-sm font-medium text-white/[0.78]">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
