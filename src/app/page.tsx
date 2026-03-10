import { CardGrid } from '@/components/CardGrid';
import { Hero } from '@/components/Hero';
import { LogoBand } from '@/components/LogoBand';
import { SectionHeader } from '@/components/SectionHeader';

const cards = [
  {
    title: 'Sistemas de Bombeo Industrial',
    text: 'Bombas, sistemas de transferencia y manejo de fluidos para procesos continuos, utilidades y aplicaciones críticas.',
    button: 'Explorar soluciones'
  },
  {
    title: 'Reparación y Protección de Activos',
    text: 'Tecnologías avanzadas de reparación compuesta, recubrimientos industriales y extensión de vida útil de equipos.',
    button: 'Ver tecnologías'
  },
  {
    title: 'Servicios Industriales Especializados',
    text: 'Soporte técnico, diagnóstico, consultoría y acompañamiento en campo para operaciones donde parar no es opción.',
    button: 'Ver servicios'
  }
];

export default function HomePage() {
  return (
    <main>
      <Hero
        eyebrow="Representación técnica industrial"
        title="Soluciones industriales críticas con respaldo técnico autorizado"
        description="Suministro de equipos industriales, tecnologías avanzadas de reparación y protección de activos, y servicios especializados para industrias donde la continuidad operativa no es opcional."
        desktopLabel="Placeholder hero desktop para homepage"
        mobileLabel="Placeholder hero mobile para homepage"
      />

      <section className="section-pad bg-mist bg-section-glow">
        <div className="container-shell">
          <SectionHeader
            title="Soluciones industriales integrales"
            copy="Una nueva arquitectura visual inspirada en tus referencias: hero dominante, tarjetas editoriales, fabricantes visibles, bloques claros de soluciones y espacio real para imágenes futuras."
          />
          <CardGrid items={cards} />
          <LogoBand />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Confianza + cobertura"
            title="Tecnología, experiencia y soluciones para la industria"
            copy="Quality Techno Services integra tecnología de fabricantes internacionales con soporte técnico especializado y un enfoque comercial más visual, moderno y orientado a operaciones industriales serias."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Tecnologías internacionales',
              'Soporte técnico especializado',
              'Cobertura regional',
              'Soluciones para industrias críticas'
            ].map((item) => (
              <div key={item} className="card-panel p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-mist text-navy text-sm font-semibold">Ícono</div>
                <h3 className="mt-6 text-3xl font-display text-navy">{item}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">Bloque listo para iconografía definitiva o ilustración simple en línea con el nuevo rediseño total.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
