import { SectionHeading } from "@/components/ui/section-heading";

const manufacturers = [
  {
    name: "AGI Industries",
    text: "Sistemas, componentes y soluciones de manejo de fluidos con enfoque industrial y capacidad de integración.",
  },
  {
    name: "Flowserve",
    text: "Portafolio sólido en sellado mecánico, control de flujo y confiabilidad para procesos exigentes.",
  },
  {
    name: "NOV / Fluid Motion Solutions",
    text: "Tecnologías de bombeo y movimiento de fluidos diseñadas para aplicaciones complejas y entornos duros.",
  },
  {
    name: "Unique Polymer Systems",
    text: "Materiales compuestos y recubrimientos para reparación, protección y extensión de vida útil del activo.",
  },
];

export function ManufacturersSection() {
  return (
    <section id="fabricantes" className="section-anchor section-space">
      <div className="shell">
        <div className="panel overflow-hidden p-8 md:p-10 lg:p-12">
          <SectionHeading
            eyebrow="Fabricantes y alianzas"
            title="Marcas con trayectoria global para conversaciones técnicas de mayor nivel."
            description="La fortaleza comercial de QTS crece cuando el cliente percibe respaldo, seriedad y profundidad técnica detrás de cada recomendación."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {manufacturers.map((item) => (
              <div key={item.name} className="rounded-[24px] border border-white/10 bg-black/20 p-6 md:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold/85">Marca estratégica</p>
                <p className="mt-4 text-2xl font-medium text-white">{item.name}</p>
                <p className="mt-4 text-sm leading-7 text-white/[0.66]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
