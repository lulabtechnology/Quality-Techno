import { CardGrid } from '@/components/CardGrid';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';

export default function SolucionesPage() {
  return (
    <main>
      <Hero
        eyebrow="Página de soluciones"
        title="Soluciones industriales para operaciones confiables"
        description="Página inspirada en las referencias visuales: hero amplio, tarjetas de solución, jerarquía clara y espacio listo para fotografía real o renders técnicos posteriores."
        desktopLabel="Hero desktop de Soluciones"
        mobileLabel="Hero mobile de Soluciones"
      />
      <section className="section-pad bg-mist">
        <div className="container-shell">
          <SectionHeader
            title="Sistemas y servicios listos para reorganizar el sitio completo"
            copy="Esta página ya plantea una estructura más cercana a lo que el cliente espera: visual, modular y con enfoque comercial más serio."
          />
          <CardGrid
            items={[
              { title: 'Bombas centrífugas e industriales', text: 'Selección, suministro y soporte para aplicaciones críticas.', button: 'Explorar soluciones' },
              { title: 'Reparación compuesta y recubrimientos', text: 'Tecnologías para proteger y extender la vida útil de activos.', button: 'Ver tecnologías' },
              { title: 'Servicios industriales', text: 'Acompañamiento técnico y soporte especializado en campo.', button: 'Ver servicios' }
            ]}
          />
        </div>
      </section>
    </main>
  );
}
