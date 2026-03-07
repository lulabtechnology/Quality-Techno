import { cn } from "@/lib/utils";

type PremiumPlaceholderProps = {
  label: string;
  ratio?: "landscape" | "portrait" | "square" | "hero";
  className?: string;
};

const ratioClassMap = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  hero: "aspect-[12/9] md:aspect-[16/10]",
};

export function PremiumPlaceholder({ label, ratio = "landscape", className }: PremiumPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/10 bg-slateBlue/30",
        "bg-hero-radial before:absolute before:inset-0 before:bg-hero-grid before:bg-[size:36px_36px] before:opacity-30",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-24 after:bg-gradient-to-t after:from-ink after:to-transparent after:opacity-80",
        ratioClassMap[ratio],
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/70">
        Premium Placeholder
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80">Asset Slot</p>
          <p className="mt-2 text-lg font-medium text-white md:text-2xl">{label}</p>
        </div>
        <div className="hidden h-14 w-14 rounded-full border border-white/15 bg-white/5 md:block" />
      </div>
    </div>
  );
}
