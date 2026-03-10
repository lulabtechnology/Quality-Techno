import { Hero } from '@/components/Hero';

export default function ContactoPage() {
  return (
    <main>
      <Hero
        eyebrow="Contacto"
        title="Solicite asesoría técnica especializada"
        description="Página de contacto más sobria y comercial, lista para integrar formulario, WhatsApp, brochure y zonas de cobertura."
        desktopLabel="Hero desktop de Contacto"
        mobileLabel="Hero mobile de Contacto"
      />
      <section className="section-pad bg-mist">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="card-panel p-8 md:p-10">
            <h2 className="font-display text-4xl text-navy">Formulario de contacto</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">Bloque listo para conectar con tu formulario final. La intención aquí es que ya quede estructurado de forma premium y usable en desktop y mobile.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {['Nombre', 'Empresa', 'Correo', 'Teléfono', 'Industria', 'Fabricante de interés'].map((field) => (
                <div key={field} className="rounded-2xl border border-line bg-white p-4 text-sm text-slate-400">{field}</div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-line bg-white p-4 text-sm text-slate-400">Mensaje / requerimiento técnico</div>
            <button className="mt-6 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white">Enviar solicitud</button>
          </div>
          <div className="space-y-6">
            <div className="card-panel p-8">
              <h3 className="text-3xl font-display text-navy">Canales directos</h3>
              <div className="mt-5 space-y-3 text-base text-slate-700">
                <p>WhatsApp: +507 6898-7181</p>
                <p>Email: info@qualitytechnoservices.com</p>
                <p>Panamá • Cobertura regional</p>
              </div>
            </div>
            <div className="image-placeholder h-72" />
          </div>
        </div>
      </section>
    </main>
  );
}
