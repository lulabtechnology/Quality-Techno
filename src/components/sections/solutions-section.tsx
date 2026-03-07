import { BookOpenCheck, Cog, GraduationCap, MapPinned, ShieldEllipsis, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const solutions = [
  { icon: Wrench, title: "Soporte técnico especializado", text: "Intervención orientada a entender la aplicación, el entorno operativo y el desempeño esperado." },
  { icon: MapPinned, title: "Acompañamiento en sitio", text: "Presencia técnica para revisar condiciones reales, levantar contexto y acelerar decisiones bien fundamentadas." },
  { icon: GraduationCap, title: "Capacitaciones y seminarios", text: "Transferencia de conocimiento para equipos de mantenimiento, operaciones, compras o ingeniería." },
  { icon: Cog, title: "Recomendación de soluciones", text: "Selección más precisa según sistema, especificación, criticidad y objetivos de confiabilidad." },
  { icon: ShieldEllipsis, title: "Protección y continuidad operativa", text: "Enfoque preventivo y correctivo para proteger activos y minimizar exposición a fallas." },
  { icon: BookOpenCheck, title: "Apoyo técnico-comercial", text: "Narrativa clara y profesional para que la propuesta técnica también respalde la aprobación interna del cliente." },
];

export function SolutionsSection() {
  return (
    <section id="soluciones" className="section-anchor section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Servicios y soluciones"
          title="Un portafolio presentado para transmitir criterio aplicado, no solo inventario."
          description="Cada bloque está redactado para sostener conversaciones con actores técnicos y también con quienes necesitan justificar la decisión desde costo, riesgo, disponibilidad o desempeño."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => (
            <article key={item.title} className="panel p-6 md:p-7">
              <item.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/66">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
