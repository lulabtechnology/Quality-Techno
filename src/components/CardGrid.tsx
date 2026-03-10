type Item = {
  title: string;
  text: string;
  button: string;
};

export function CardGrid({ items }: { items: Item[] }) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="card-panel overflow-hidden">
          <div className="image-placeholder h-52">
            <div className="relative z-10 flex h-full items-end p-5 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">Espacio para imagen</p>
                <p className="mt-2 text-sm text-white/75">Sugerencia: fotografía real o render técnico.</p>
              </div>
            </div>
          </div>
          <div className="p-7">
            <h3 className="text-3xl font-display text-navy">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
            <button className="mt-6 rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink">
              {item.button}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
