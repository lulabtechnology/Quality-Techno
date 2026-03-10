import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { sectors } from '@/components/site-data';

export default function IndustriasPage() {
  return (
    <main>
      <Hero
        eyebrow="Cobertura sectorial"
        title="Industrias que atendemos"
        description="Una página sectorial con más peso visual y mejor organización para mostrar experiencia en sectores industriales críticos donde la confiabilidad es esencial."
        desktopLabel="Hero desktop de Industrias"
        mobileLabel="Hero mobile de Industrias"
      />
      <section className="section-pad bg-mist">
        <div className="container-shell">
          <SectionHeader title="Sectores industriales críticos" copy="Diseño en grilla listo para crecer con subsecciones, casos, imágenes y páginas internas por industria." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {sectors.map((item) => (
              <article key={item} className="card-panel p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-mist text-sm font-semibold text-navy">Ícono</div>
                <h3 className="mt-6 text-3xl font-display text-navy">{item}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">Espacio para breve explicación de aplicaciones, desafíos y soluciones relacionadas.</p>
                <button className="mt-6 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white">Ver soluciones</button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
