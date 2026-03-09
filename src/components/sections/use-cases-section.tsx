import { SectionHeading } from "@/components/ui/section-heading";
import { MotionStagger, MotionItem, HoverLift } from "@/components/ui/motion";

const useCases = [
  {
    title: "Fallas repetitivas",
    text: "Cuando una operación necesita revisar causas de desempeño deficiente, fugas, desgaste o paradas recurrentes.",
  },
  {
    title: "Ambientes agresivos",
    text: "Aplicaciones con corrosión, erosión, abrasión o exposición química donde el activo requiere mayor protección.",
  },
  {
    title: "Actualización de solución",
    text: "Casos donde la alternativa actual quedó corta y se requiere una recomendación más robusta y mejor sustentada.",
  },
  {
    title: "Alineación de equipos",
    text: "Necesidad de alinear mantenimiento, operaciones, ingeniería o compras alrededor de una mejor decisión técnica.",
  },
];

export function UseCasesSection() {
  return (
    <section className="section-space">
      <div className="shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <SectionHeading
          eyebrow="Aplicaciones / use cases"
          title="Retos típicos donde una conversación técnica bien dirigida cambia el resultado."
          description="Estas situaciones ayudan a que el visitante se vea reflejado y entienda rápidamente cuándo tiene sentido abrir contacto con QTS."
        />

        <MotionStagger className="grid gap-5 md:grid-cols-2" delay={0.08}>
          {useCases.map((item) => (
            <MotionItem key={item.title}>
              <HoverLift>
                <div className="panel hover-panel p-6 md:p-7">
                  <p className="text-lg font-medium text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/[0.66]">{item.text}</p>
                </div>
              </HoverLift>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
