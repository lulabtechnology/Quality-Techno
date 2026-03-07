import { SectionHeading } from "@/components/ui/section-heading";

const trustPoints = [
  "Soporte técnico in situ, capacitación y seminarios orientados a aplicación industrial.",
  "Narrativa construida para compras, mantenimiento, operaciones y gerencia técnica.",
  "Integración visual de ecosistema de fabricantes y tecnologías de proceso.",
  "Lenguaje premium institucional para fortalecer percepción de respaldo internacional.",
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
              title="Una presencia diseñada para transmitir soporte serio, criterio técnico y capacidad de respuesta industrial."
              description="La capa de confianza mezcla lenguaje institucional, jerarquía visual alta y una lectura clara de especialización técnica para que el primer impacto ya filtre leads de mejor calidad."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm leading-7 text-white/72">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gold-line mt-10 h-px w-full" />

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {labels.map((label) => (
              <div key={label} className="rounded-[20px] border border-white/10 bg-black/15 px-4 py-5 text-center text-sm font-medium text-white/78">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
