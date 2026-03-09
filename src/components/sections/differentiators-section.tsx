import { SectionHeading } from "@/components/ui/section-heading";
import { MotionStagger, MotionItem, HoverLift } from "@/components/ui/motion";

const differentiators = [
  "Interlocución técnica y comercial en un lenguaje útil para especialistas y tomadores de decisión.",
  "Respaldo de marcas con trayectoria internacional en fluidos, sellado y protección de activos.",
  "Capacidad para conversar desde criticidad, desempeño, riesgo y continuidad operativa.",
  "Presentación sobria e institucional que eleva confianza sin caer en ruido visual.",
  "Ruta de contacto directa por formulario, correo y WhatsApp para acelerar la conversación.",
  "Estructura digital lista para crecer con nuevos activos, casos y campañas sin perder coherencia.",
];

export function DifferentiatorsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="panel overflow-hidden p-8 md:p-10 lg:p-12">
          <SectionHeading
            eyebrow="Diferenciadores"
            title="Una propuesta digital construida para proyectar autoridad, claridad y preparación."
            description="La diferencia está en cómo se combinan narrativa, estructura y dirección visual para que la marca se perciba más robusta y mejor preparada frente a clientes industriales serios."
          />

          <MotionStagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3" delay={0.08} stagger={0.06}>
            {differentiators.map((item, index) => (
              <MotionItem key={item}>
                <HoverLift>
                  <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.05]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold/80">Diferencial {index + 1}</p>
                    <p className="mt-3 text-sm leading-7 text-white/[0.68]">{item}</p>
                  </div>
                </HoverLift>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
