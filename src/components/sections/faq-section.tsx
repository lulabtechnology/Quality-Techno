import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  {
    q: "¿Quality Techno Services vende productos o acompaña técnicamente la solución?",
    a: "La narrativa de la landing posiciona a QTS como interlocutor técnico-comercial capaz de orientar, recomendar y acompañar una solución, no solamente de cotizar un ítem de forma aislada.",
  },
  {
    q: "¿La página está pensada solo para clientes técnicos?",
    a: "No. Está redactada para que la entiendan y valoren tanto perfiles técnicos como compras, gerencia y tomadores de decisión no especialistas.",
  },
  {
    q: "¿Se pueden reemplazar fácilmente los placeholders por imágenes reales?",
    a: "Sí. El sistema deja rutas y slots definidos para sustituir hero, alianzas, industrias y otros bloques visuales sin romper la composición premium.",
  },
  {
    q: "¿La base ya está lista para GitHub Web y Vercel?",
    a: "Sí. El proyecto final se entrega estructurado para copiar, subir al repositorio y desplegar con una guía breve y directa.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-anchor section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes resueltas con lenguaje claro y percepción premium."
          description="La sección FAQ reduce fricción y funciona como apoyo para leads que todavía están validando seriedad, alcance y facilidad de implementación."
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="panel p-6 md:p-7">
              <p className="text-lg font-medium text-white">{faq.q}</p>
              <p className="mt-3 text-sm leading-7 text-white/66">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
