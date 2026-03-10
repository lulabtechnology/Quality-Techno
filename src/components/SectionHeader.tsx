type Props = {
  eyebrow?: string;
  title: string;
  copy: string;
  centered?: boolean;
};

export function SectionHeader({ eyebrow, title, copy, centered = true }: Props) {
  return (
    <div className={centered ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.28em] text-steel">{eyebrow}</p> : null}
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy mx-auto">{copy}</p>
    </div>
  );
}
