import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { step: "01", title: "Entender la operación", text: "Se levanta el contexto, la criticidad y el comportamiento real de la aplicación." },
  { step: "02", title: "Evaluar la condición", text: "Se revisan variables de servicio, desgaste, ambiente y objetivo técnico del cliente." },
  { step: "03", title: "Recomendar con sustento", text: "Se plantea una ruta técnica y comercial clara, defendible y alineada a la necesidad." },
  { step: "04", title: "Acompañar la implementación", text: "Se da continuidad con soporte, seguimiento, capacitación o conversación técnica adicional." },
];

export function ProcessSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un método claro para convertir necesidad operativa en solución aplicable."
          description="La relación comercial debe sentirse ordenada, seria y técnicamente bien conducida desde el primer contacto."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="panel relative p-6 pt-16">
              <div className="absolute left-6 top-6 text-3xl font-semibold text-gold/[0.85]">{item.step}</div>
              <p className="text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/[0.66]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
