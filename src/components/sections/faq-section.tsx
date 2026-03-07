import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "¿Quality Techno Services vende productos o acompaña técnicamente la solución?",
    a: "La propuesta posiciona a QTS como interlocutor técnico-comercial capaz de orientar, recomendar y acompañar la solución adecuada según criticidad, aplicación y objetivo operativo.",
  },
  {
    q: "¿La página está pensada solo para perfiles técnicos?",
    a: "No. El contenido está diseñado para resultar sólido ante ingeniería y mantenimiento, pero también claro para compras, gerencia y tomadores de decisión no especialistas.",
  },
  {
    q: "¿Se pueden sustituir estos visuales por fotografías reales?",
    a: "Sí. La composición ya deja un sistema visual estable para reemplazar piezas abstractas por imágenes reales de planta, equipos, visitas o aplicaciones específicas.",
  },
  {
    q: "¿El proyecto ya está preparado para GitHub Web y Vercel?",
    a: "Sí. La estructura del proyecto, la documentación y la configuración base están listas para publicar y seguir refinando sin rehacer la arquitectura.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-anchor section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes resueltas con claridad y tono institucional."
          description="La sección ayuda a reducir fricción y a reforzar la sensación de orden, criterio y facilidad de implementación."
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="panel p-6 md:p-7">
              <p className="text-lg font-medium text-white">{faq.q}</p>
              <p className="mt-3 text-sm leading-7 text-white/[0.66]">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
