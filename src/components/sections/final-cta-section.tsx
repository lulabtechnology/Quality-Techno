import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion";

export function FinalCtaSection() {
  return (
    <section className="pb-24 md:pb-28">
      <div className="shell">
        <div className="panel overflow-hidden p-8 md:p-10 lg:p-14">
          <MotionReveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="eyebrow">CTA final</span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Cuando la operación es crítica, la decisión técnica no puede dejarse al azar.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/[0.72] md:text-lg">
                  Hable con Quality Techno Services S.A. para evaluar una necesidad industrial con una conversación más clara, más seria y mejor orientada al resultado.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <Button href="#contacto">
                  Solicitar contacto <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="https://wa.me/50768987181?text=Hola%20Quality%20Techno%20Services%2C%20deseo%20evaluar%20una%20necesidad%20industrial." variant="secondary">
                  Ir a WhatsApp
                </Button>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
