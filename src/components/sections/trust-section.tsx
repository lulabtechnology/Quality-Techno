import { SectionHeading } from "@/components/ui/section-heading";
import { MotionItem, MotionLine, MotionStagger, HoverLift } from "@/components/ui/motion";

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

            <MotionStagger className="grid gap-4 md:grid-cols-2" delay={0.12}>
              {trustPoints.map((point) => (
                <MotionItem key={point}>
                  <HoverLift>
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 hover-panel">
                      <p className="text-sm leading-7 text-white/[0.72]">{point}</p>
                    </div>
                  </HoverLift>
                </MotionItem>
              ))}
            </MotionStagger>
          </div>

          <MotionLine className="gold-line mt-10 h-px w-full" />

          <MotionStagger className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4" delay={0.16}>
            {labels.map((label) => (
              <MotionItem key={label} y={22}>
                <div className="rounded-[20px] border border-white/10 bg-black/20 px-4 py-5 text-center text-sm font-medium text-white/[0.82] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.06] hover:text-white">
                  {label}
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
