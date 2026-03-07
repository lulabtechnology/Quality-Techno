import { Factory, Fuel, Settings, Waves, Wheat } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const industries = [
  { icon: Factory, title: "Manufactura", text: "Procesos que exigen disponibilidad, consistencia y decisiones técnicas bien soportadas." },
  { icon: Fuel, title: "Energía y utilidades", text: "Aplicaciones donde una falla impacta seguridad, producción, consumo y costo operativo." },
  { icon: Waves, title: "Agua y manejo de fluidos", text: "Infraestructura y sistemas que dependen de desempeño estable, sellado correcto y protección del activo." },
  { icon: Settings, title: "Procesos industriales", text: "Entornos donde la recomendación debe responder a condiciones reales y no solo a una hoja de precio." },
  { icon: Wheat, title: "Agroindustria", text: "Operaciones con desgaste, corrosión, variabilidad del fluido y necesidad de mantenimiento eficiente." },
];

export function IndustriesSection() {
  return (
    <section id="industrias" className="section-anchor section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Industrias que atendemos"
          title="Preparados para entornos donde el desempeño técnico no es opcional."
          description="La propuesta habla con sectores donde una selección deficiente puede comprometer seguridad, disponibilidad, vida útil de activos y costo total de operación."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {industries.map((item) => (
            <div key={item.title} className="panel h-full p-6 transition-transform duration-300 hover:-translate-y-1">
              <item.icon className="h-6 w-6 text-gold" />
              <p className="mt-5 text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/[0.67]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
