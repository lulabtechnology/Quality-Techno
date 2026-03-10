import Link from 'next/link';

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  desktopLabel: string;
  mobileLabel: string;
};

export function Hero({ eyebrow, title, description, desktopLabel, mobileLabel }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="container-shell relative z-10 py-10 md:py-14 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">{eyebrow}</p>
            <h1 className="mt-5 font-display text-5xl leading-tight md:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contacto" className="btn-primary">Solicitar Asesoría Técnica</Link>
              <a href="https://wa.me/50768987181" className="btn-secondary">Hablar por WhatsApp</a>
            </div>
          </div>
          <div className="space-y-5">
            <div className="hero-image-frame hidden h-[420px] md:block">
              <div className="image-placeholder h-full w-full p-7">
                <div className="relative z-10 flex h-full flex-col justify-between rounded-[22px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/60">Hero Desktop</p>
                    <h3 className="mt-3 text-2xl font-semibold">{desktopLabel}</h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-white/75">
                      Reemplazar por imagen horizontal de alta calidad para desktop. Composición recomendada: planta industrial, tuberías, personal técnico o sistemas de bombeo.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                    <div className="rounded-2xl border border-white/10 bg-black/15 p-4">1920 × 1080 px</div>
                    <div className="rounded-2xl border border-white/10 bg-black/15 p-4">Ruta sugerida: /public/placeholders/hero-desktop.jpg</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-image-frame h-[260px] md:hidden">
              <div className="image-placeholder h-full w-full p-5">
                <div className="relative z-10 flex h-full flex-col justify-between rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/60">Hero Mobile</p>
                    <h3 className="mt-2 text-xl font-semibold">{mobileLabel}</h3>
                  </div>
                  <p className="text-sm leading-6 text-white/75">Ruta sugerida: /public/placeholders/hero-mobile.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
