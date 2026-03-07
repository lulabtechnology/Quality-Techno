import { BookOpenCheck, Cog, GraduationCap, MapPinned, ShieldEllipsis, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const solutions = [
  { icon: Wrench, title: "Soporte técnico especializado", text: "Revisión del reto, condiciones de operación y variables que influyen en desempeño, desgaste y confiabilidad." },
  { icon: MapPinned, title: "Acompañamiento en sitio", text: "Levantamiento de contexto y validación de condiciones reales para acelerar decisiones correctas." },
  { icon: GraduationCap, title: "Capacitación y seminarios", text: "Transferencia de conocimiento para mantenimiento, operaciones, proyectos y compras técnicas." },
  { icon: Cog, title: "Recomendación de soluciones", text: "Selección más precisa según criticidad, sistema, ambiente de trabajo y objetivo de continuidad operativa." },
  { icon: ShieldEllipsis, title: "Protección de activos", text: "Alternativas para mitigar corrosión, erosión, ataque químico y otros mecanismos de deterioro." },
  { icon: BookOpenCheck, title: "Soporte técnico-comercial", text: "Propuestas con mejor sustento para facilitar aprobación interna y reducir fricción en la compra." },
];

export function SolutionsSection() {
  return (
    <section id="soluciones" className="section-anchor section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Servicios y soluciones"
          title="Más que suministro: criterio aplicado para proteger desempeño y continuidad."
          description="El portafolio está presentado para dejar claro que QTS acompaña decisiones técnicas y comerciales con una lectura más profunda de la aplicación."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => (
            <article key={item.title} className="panel p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1">
              <item.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/[0.66]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
