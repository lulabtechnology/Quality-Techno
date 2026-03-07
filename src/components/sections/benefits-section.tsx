import { ArrowUpRight, Gauge, Handshake, Shield, TimerReset } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const benefits = [
  { icon: Gauge, title: "Decisiones mejor fundamentadas", text: "Menos improvisación y más criterio técnico al evaluar opciones, riesgos y desempeño esperado." },
  { icon: TimerReset, title: "Mayor velocidad comercial", text: "Una narrativa más clara acorta la distancia entre interés inicial y conversación seria con el cliente." },
  { icon: Shield, title: "Percepción de menor riesgo", text: "La estética enterprise y el mensaje institucional ayudan a reducir fricción al evaluar proveedores técnicos." },
  { icon: Handshake, title: "Relaciones más estratégicas", text: "La marca se posiciona como socio técnico de valor, no como opción intercambiable de bajo contexto." },
];

export function BenefitsSection() {
  return (
    <section className="section-space">
      <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <SectionHeading
          eyebrow="Beneficios"
          title="Lo visual y lo comercial trabajan juntos para filtrar mejor, convencer mejor y elevar el nivel de la conversación."
          description="Esta estructura no busca verse bonita solamente: busca fortalecer la conversión de un visitante técnico o comprador en una oportunidad más seria y mejor alineada."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <div key={item.title} className="panel p-6">
              <div className="flex items-center justify-between gap-4">
                <item.icon className="h-6 w-6 text-gold" />
                <ArrowUpRight className="h-4 w-4 text-white/30" />
              </div>
              <p className="mt-5 text-lg font-medium text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/66">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
