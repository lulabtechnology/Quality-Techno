import { cn } from "@/lib/utils";

type IndustrialVisualProps = {
  className?: string;
  compact?: boolean;
};

export function IndustrialVisual({ className, compact = false }: IndustrialVisualProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-[#09111d] shadow-glow",
        compact ? "aspect-[16/11]" : "aspect-[16/13] md:aspect-[16/10]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(215,181,109,0.22),transparent_0,transparent_24%),radial-gradient(circle_at_83%_16%,rgba(81,129,190,0.32),transparent_0,transparent_28%),linear-gradient(135deg,#0b1220_0%,#0e1726_48%,#152238_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px] opacity-20" />
      <div className="absolute -left-10 top-8 h-44 w-44 rounded-full border border-gold/20 bg-gold/10 blur-sm" />
      <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/10 bg-white/5 shadow-[0_0_120px_rgba(77,129,191,0.20)]" />
      <div className="absolute inset-x-0 top-10 mx-auto h-px w-[72%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="absolute left-[7%] top-[16%] h-[34%] w-[50%] rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-md">
        <div className="absolute left-6 top-6 h-2 w-24 rounded-full bg-gold/75" />
        <div className="absolute left-6 top-12 h-px w-[60%] bg-white/10" />
        <div className="absolute left-6 top-[34%] h-[44%] w-[28%] rounded-[22px] border border-white/10 bg-black/20" />
        <div className="absolute right-6 top-[28%] h-3 w-[40%] rounded-full bg-white/15" />
        <div className="absolute right-6 top-[40%] h-3 w-[34%] rounded-full bg-white/10" />
        <div className="absolute right-6 top-[52%] h-3 w-[28%] rounded-full bg-white/10" />
      </div>

      <div className="absolute right-[6%] top-[22%] h-[46%] w-[28%] rounded-[30px] border border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto mt-6 h-16 w-16 rounded-full border border-gold/30 bg-gold/10 shadow-[0_0_50px_rgba(215,181,109,0.18)]" />
        <div className="mx-auto mt-5 h-px w-[70%] bg-white/10" />
        <div className="mx-auto mt-5 grid w-[70%] grid-cols-2 gap-3">
          <div className="h-14 rounded-2xl border border-white/10 bg-white/[0.04]" />
          <div className="h-14 rounded-2xl border border-white/10 bg-white/[0.04]" />
          <div className="col-span-2 h-16 rounded-2xl border border-gold/20 bg-gold/10" />
        </div>
      </div>

      <div className="absolute bottom-7 left-[7%] right-[7%] grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[26px] border border-white/10 bg-black/25 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-gold/85">Continuidad operativa</p>
              <p className="mt-2 text-sm font-medium text-white">Soluciones para bombeo, sellado, protección y manejo de fluidos.</p>
            </div>
            <div className="hidden h-12 w-12 rounded-full border border-white/10 bg-white/[0.05] md:block" />
          </div>
        </div>
        <div className="rounded-[26px] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">Cobertura consultiva</p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <p className="text-3xl font-semibold text-white">B2B</p>
            <p className="text-xs leading-5 text-white/60">Mantenimiento · Operaciones · Compras · Ingeniería</p>
          </div>
        </div>
      </div>
    </div>
  );
}
