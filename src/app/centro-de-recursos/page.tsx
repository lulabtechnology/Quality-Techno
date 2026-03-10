import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';

export default function RecursosPage() {
  const items = Array.from({ length: 6 }).map((_, index) => ({
    title: `Recurso técnico ${index + 1}`,
    text: 'Espacio para video, ficha, catálogo, documento técnico o guía aplicada por fabricante o solución.'
  }));

  return (
    <main>
      <Hero
        eyebrow="Centro de recursos"
        title="Centro de recursos técnicos"
        description="Estructura preparada para videos, guías, catálogos, folletos y documentación técnica con filtros y tarjetas visuales."
        desktopLabel="Hero desktop de Centro de Recursos"
        mobileLabel="Hero mobile de Centro de Recursos"
      />
      <section className="section-pad bg-mist">
        <div className="container-shell">
          <SectionHeader title="Recursos, videos y documentación" copy="La referencia visual sugiere una página más rica en contenido técnico. Aquí queda la base modular para construirla bien." />
          <div className="mt-10 flex flex-wrap gap-3">
            {['Todo', 'Videos', 'Catálogos', 'Folletos', 'Guías técnicas', 'Fabricantes'].map((tag) => (
              <div key={tag} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-slate-700">{tag}</div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <article key={item.title} className="card-panel overflow-hidden">
                <div className="image-placeholder h-52" />
                <div className="p-7">
                  <h3 className="text-3xl font-display text-navy">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
                  <button className="mt-6 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">Ver recurso</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
