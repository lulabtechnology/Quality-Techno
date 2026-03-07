import { cn } from "@/lib/utils";

type PremiumPlaceholderProps = {
  label?: string;
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
      aria-label={label || "visual industrial abstracto"}
      className={cn(
        "relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1522]",
        "before:absolute before:inset-0 before:bg-hero-grid before:bg-[size:44px_44px] before:opacity-[0.12]",
        ratioClassMap[ratio],
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(215,181,109,0.26),transparent_0,transparent_24%),radial-gradient(circle_at_82%_18%,rgba(74,129,196,0.22),transparent_0,transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_0,transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01)_38%,rgba(255,255,255,0.02)_100%)]" />
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full border border-white/10 bg-white/[0.03] blur-[2px]" />
      <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-gold/25 bg-gold/10 shadow-[0_0_80px_rgba(215,181,109,0.14)]" />
      <div className="absolute bottom-10 left-8 right-8 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 backdrop-blur-md">
          <div className="h-2 w-24 rounded-full bg-gold/60" />
          <div className="mt-4 h-px w-full bg-white/10" />
          <div className="mt-4 space-y-3">
            <div className="h-3 w-[82%] rounded-full bg-white/15" />
            <div className="h-3 w-[70%] rounded-full bg-white/10" />
            <div className="h-3 w-[56%] rounded-full bg-white/10" />
          </div>
        </div>
        <div className="hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md md:block">
          <div className="flex items-center justify-between">
            <div className="h-10 w-10 rounded-full border border-white/15 bg-white/[0.06]" />
            <div className="h-3 w-16 rounded-full bg-white/15" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="h-14 rounded-2xl border border-white/10 bg-black/15" />
            <div className="h-14 rounded-2xl border border-white/10 bg-black/15" />
            <div className="col-span-2 h-20 rounded-2xl border border-gold/15 bg-gold/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
