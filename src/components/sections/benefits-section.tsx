import { ArrowUpRight, Gauge, Handshake, Shield, TimerReset } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  { icon: Gauge, title: "Decisiones mejor sustentadas", text: "Menos prueba y error al evaluar opciones de sellado, bombeo, protección o mejora operativa." },
  { icon: TimerReset, title: "Menor tiempo de respuesta", text: "Una conversación bien encuadrada acelera diagnóstico, propuesta y avance comercial." },
  { icon: Shield, title: "Menor percepción de riesgo", text: "El cliente entiende con más claridad que está frente a un proveedor con preparación y respaldo." },
  { icon: Handshake, title: "Relaciones de mayor valor", text: "QTS se posiciona como aliado técnico, no como proveedor fácilmente reemplazable." },
];

export function BenefitsSection() {
  return (
    <section className="section-space">
      <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <SectionHeading
          eyebrow="Beneficios"
          title="Una presencia mejor diseñada también mejora la calidad del lead y de la conversación."
          description="Cuando el mensaje y la forma están alineados, la marca transmite más autoridad, orden y capacidad para manejar aplicaciones de alto impacto."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <div key={item.title} className="panel p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between gap-4">
                <item.icon className="h-6 w-6 text-gold" />
                <ArrowUpRight className="h-4 w-4 text-white/30" />
              </div>
              <p className="mt-5 text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/[0.66]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
