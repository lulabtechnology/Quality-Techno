import { SectionHeading } from "@/components/ui/section-heading";

const manufacturers = [
  {
    name: "AGI Industries",
    text: "Distribución de productos de manejo de fluidos, sistemas integrados y capacidades de empaque de sistemas con perfil fuertemente industrial.",
  },
  {
    name: "Flowserve",
    text: "Portafolio robusto en sellos mecánicos y soluciones de control de flujo orientadas a confiabilidad y desempeño en procesos exigentes.",
  },
  {
    name: "NOV / Fluid Motion Solutions",
    text: "Tecnologías para bombeo y manejo de fluidos en aplicaciones complejas donde la robustez operativa es clave.",
  },
  {
    name: "Unique Polymer Systems",
    text: "Materiales compuestos de reparación y recubrimientos protectivos para erosión, corrosión y protección química.",
  },
];

export function ManufacturersSection() {
  return (
    <section id="fabricantes" className="section-anchor section-space">
      <div className="shell">
        <div className="panel overflow-hidden p-8 md:p-10 lg:p-12">
          <SectionHeading
            eyebrow="Fabricantes y alianzas"
            title="Ecosistema de marcas y tecnologías que elevan la percepción de respaldo internacional."
            description="La presentación de fabricantes se estructuró para que el visitante entienda que QTS no opera desde improvisación, sino desde una plataforma técnica con interlocución seria y soluciones alineadas a industrias exigentes."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {manufacturers.map((item) => (
              <div key={item.name} className="rounded-[24px] border border-white/10 bg-black/20 p-6 md:p-7">
                <p className="text-lg font-medium text-white">{item.name}</p>
                <p className="mt-3 text-sm leading-7 text-white/66">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
