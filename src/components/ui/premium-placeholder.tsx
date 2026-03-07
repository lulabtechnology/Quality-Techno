import { cn } from "@/lib/utils";

type PremiumPlaceholderProps = {
  label: string;
  ratio?: "landscape" | "portrait" | "square" | "hero" | "wide";
  className?: string;
};

const ratioClassMap = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  hero: "aspect-[12/10] md:aspect-[16/10]",
  wide: "aspect-[16/7]",
};

export function PremiumPlaceholder({ label, ratio = "landscape", className }: PremiumPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/10 bg-slateBlue/[0.35]",
        "before:absolute before:inset-0 before:bg-hero-grid before:bg-[size:42px_42px] before:opacity-25",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top_left,rgba(215,181,109,0.22),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(84,126,181,0.26),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]",
        ratioClassMap[ratio],
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/70">
        Premium Placeholder
      </div>
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80">Asset Slot</p>
          <p className="mt-2 max-w-xl text-lg font-medium text-white md:text-2xl">{label}</p>
        </div>
        <div className="hidden h-14 w-14 rounded-full border border-white/15 bg-white/5 md:block" />
      </div>
    </div>
  );
}
