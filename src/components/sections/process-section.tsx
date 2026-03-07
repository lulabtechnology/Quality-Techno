import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { step: "01", title: "Contexto operativo", text: "Levantamiento inicial del reto, criticidad, entorno y expectativas de desempeño." },
  { step: "02", title: "Lectura técnica", text: "Análisis de especificación, condiciones de servicio y variables de aplicación." },
  { step: "03", title: "Recomendación", text: "Presentación de solución o ruta técnica con un lenguaje claro y defendible." },
  { step: "04", title: "Acompañamiento", text: "Seguimiento, soporte, capacitación o conversación técnica adicional según complejidad." },
];

export function ProcessSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso presentado con claridad para transmitir método, no improvisación."
          description="El flujo comercial y técnico debe sentirse ordenado, transparente y propio de una empresa preparada para relaciones B2B de alto nivel."
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
