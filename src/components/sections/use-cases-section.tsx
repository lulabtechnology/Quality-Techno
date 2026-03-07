import { SectionHeading } from "@/components/ui/section-heading";

const useCases = [
  {
    title: "Recuperación de confiabilidad",
    text: "Cuando una operación requiere elevar desempeño, reducir fugas, minimizar fallas repetitivas o revisar alternativas técnicas con mayor criterio.",
  },
  {
    title: "Ambientes agresivos",
    text: "Escenarios con corrosión, erosión, ataque químico o exposición severa donde la protección de activos es crítica.",
  },
  {
    title: "Modernización o mejora",
    text: "Casos donde un cliente necesita evolucionar desde una solución genérica hacia una más robusta y mejor sustentada.",
  },
  {
    title: "Capacitación de equipos",
    text: "Necesidad de alinear mantenimiento, operación o compras alrededor de una mejor comprensión técnica del sistema.",
  },
];

export function UseCasesSection() {
  return (
    <section className="section-space">
      <div className="shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <SectionHeading
          eyebrow="Aplicaciones / use cases"
          title="Ejemplos de conversaciones para las que esta landing está preparada."
          description="Las tarjetas ayudan a visualizar el tipo de reto que puede llegar por el formulario o WhatsApp, facilitando que el visitante se vea reflejado y actúe."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {useCases.map((item) => (
            <div key={item.title} className="panel p-6 md:p-7">
              <p className="text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/[0.66]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
