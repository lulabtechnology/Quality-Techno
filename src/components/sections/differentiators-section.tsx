import { SectionHeading } from "@/components/ui/section-heading";

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
