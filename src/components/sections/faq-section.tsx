import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "¿QTS solo suministra productos o también acompaña técnicamente la solución?",
    a: "La propuesta de valor combina soporte técnico-comercial, lectura de aplicación y recomendación alineada a criticidad, desempeño y continuidad operativa.",
  },
  {
    q: "¿La conversación está orientada únicamente a perfiles técnicos?",
    a: "No. El contenido está preparado para resultar sólido frente a ingeniería y mantenimiento, pero también claro para compras, gerencia y tomadores de decisión no especialistas.",
  },
  {
    q: "¿Pueden atender revisiones, mejoras o necesidades en sitio?",
    a: "Sí. QTS puede participar desde el levantamiento del contexto hasta la recomendación, el acompañamiento y la coordinación técnica necesaria según el caso.",
  },
  {
    q: "¿Cómo se inicia una consulta?",
    a: "Puede hacerse por formulario, correo o WhatsApp, compartiendo el reto, la aplicación o la necesidad operativa para orientar la conversación desde el inicio.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-anchor section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes resueltas con claridad."
          description="Una sección breve para reducir fricción y facilitar que el visitante avance hacia la conversación técnica."
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
