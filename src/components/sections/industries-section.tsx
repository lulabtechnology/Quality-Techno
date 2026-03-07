import { Factory, Fuel, Settings, Waves, Wheat } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const industries = [
  { icon: Factory, title: "Manufactura", text: "Procesos que demandan confiabilidad, disponibilidad y criterio técnico en activos de movimiento de fluidos y sellado." },
  { icon: Fuel, title: "Energía y utilidades", text: "Entornos donde la continuidad operativa y la reducción de fallas tienen impacto directo en seguridad y costo." },
  { icon: Waves, title: "Agua y manejo de fluidos", text: "Soluciones para operación, transferencia, protección y desempeño sostenido en infraestructura crítica." },
  { icon: Settings, title: "Procesos industriales", text: "Aplicaciones que requieren asesoría técnica más precisa que una simple cotización por producto." },
  { icon: Wheat, title: "Agroindustria y sectores afines", text: "Escenarios con desgaste, corrosión, variabilidad de fluidos y necesidad de mantenimiento eficiente." },
];

export function IndustriesSection() {
  return (
    <section id="industrias" className="section-anchor section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Industrias que atendemos"
          title="Diseñada para conectar con industrias donde el desempeño técnico no es opcional."
          description="La landing habla con sectores donde una mala recomendación no solo cuesta dinero: también impacta seguridad, reputación, disponibilidad y vida útil de activos críticos."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {industries.map((item) => (
            <div key={item.title} className="panel h-full p-6">
              <item.icon className="h-6 w-6 text-gold" />
              <p className="mt-5 text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
