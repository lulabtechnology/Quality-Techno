import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { manufacturers } from '@/components/site-data';

export default function FabricantesPage() {
  return (
    <main>
      <Hero
        eyebrow="Fabricantes"
        title="Fabricantes y aliados estratégicos"
        description="Una página pensada para resaltar representación técnica, logos, fichas, catálogos y CTA directos por marca con un lenguaje mucho más corporativo."
        desktopLabel="Hero desktop de Fabricantes"
        mobileLabel="Hero mobile de Fabricantes"
      />
      <section className="section-pad bg-mist">
        <div className="container-shell">
          <SectionHeader title="Representaciones internacionales" copy="Cada fabricante puede crecer con su propia página interna, recursos, fichas técnicas, catálogo y aplicaciones por sector." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {manufacturers.map((item) => (
              <article key={item} className="card-panel overflow-hidden">
                <div className="flex h-32 items-center justify-center border-b border-line bg-white px-6 text-center text-2xl font-semibold text-navy">{item}</div>
                <div className="p-7">
                  <h3 className="text-3xl font-display text-navy">Marca representada</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">Bloque listo para integrar descripción, sector, recursos técnicos y CTA a asesoría.</p>
                  <button className="mt-6 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white">Ver fabricante</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
