import { BaseHero } from "@/components/sections/base-hero";
import { PremiumPlaceholder } from "@/components/ui/premium-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";

const blocks = [
  {
    id: "empresa",
    eyebrow: "Company Story",
    title: "Bloques base para una narrativa industrial de alto nivel.",
    description: "La landing final aprovechará esta estructura para desplegar credibilidad, soluciones, alianzas y autoridad técnica sin sensación de sitio genérico.",
    label: "Placeholder editorial — visión institucional",
  },
  {
    id: "soluciones",
    eyebrow: "Solutions Framework",
    title: "Sistema de secciones listo para integrar copy y visuales definitivos.",
    description: "Aquí se organizan los módulos que en la Fase 3 pasarán a hero completo, trust, industrias, fabricantes, beneficios, FAQ y formulario premium.",
    label: "Placeholder premium — soluciones y aplicaciones",
  },
  {
    id: "industrias",
    eyebrow: "Industries",
    title: "Base responsive consistente para desktop y mobile.",
    description: "El proyecto ya incluye layout general, componentes UI, navegación, footer y placeholders elegantes para que la producción final se concentre en conversión y refinamiento visual.",
    label: "Placeholder premium — industrias críticas",
  },
  {
    id: "alianzas",
    eyebrow: "Manufacturers & Partnerships",
    title: "Preparado para integrar ecosistema internacional de fabricantes.",
    description: "La estructura soporta logos, casos de uso, credenciales, pruebas de respaldo y bloques de autoridad institucional con estética enterprise.",
    label: "Placeholder premium — partners y fabricantes",
  },
];

export default function Home() {
  return (
    <>
      <BaseHero />
      <section className="section-space">
        <div className="shell space-y-20">
          {blocks.map((block, index) => (
            <div key={block.id} id={block.id} className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <SectionHeading
                  eyebrow={block.eyebrow}
                  title={block.title}
                  description={block.description}
                />
              </div>
              <PremiumPlaceholder
                label={block.label}
                className={index % 2 === 1 ? "lg:order-1" : undefined}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="pb-24">
        <div className="shell">
          <div className="panel overflow-hidden p-8 md:p-10">
            <SectionHeading
              eyebrow="Phase Ready"
              title="La base del proyecto quedó preparada para construir la landing final de producción."
              description="La siguiente fase integrará copy completo, animaciones sutiles, formularios, CTA de WhatsApp, SEO on-page y placeholders finales con criterio premium industrial."
            />
          </div>
        </div>
      </section>
    </>
  );
}
