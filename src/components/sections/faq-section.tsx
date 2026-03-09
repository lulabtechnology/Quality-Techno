"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionStagger, MotionItem } from "@/components/ui/motion";

const faqs = [
  {
    q: "¿QTS solo suministra productos o también acompaña técnicamente la solución?",
    a: "La propuesta de valor combina soporte técnico-comercial, lectura de aplicación y recomendación alineada a criticidad, desempeño y continuidad operativa.",
  },
  {
    q: "¿La conversación está orientada únicamente a perfiles técnicos?",
    a: "No. El contenido está preparado para resultar sólido frente a ingeniería y mantenimiento, pero también claro para compras, gerencia y tomadores de decisión no especialistas.",
  },
  {
    q: "¿Pueden atender revisiones, mejoras o necesidades en sitio?",
    a: "Sí. QTS puede participar desde el levantamiento del contexto hasta la recomendación, el acompañamiento y la coordinación técnica necesaria según el caso.",
  },
  {
    q: "¿Cómo se inicia una consulta?",
    a: "Puede hacerse por formulario, correo o WhatsApp, compartiendo el reto, la aplicación o la necesidad operativa para orientar la conversación desde el inicio.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-anchor section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes resueltas con claridad."
          description="Una sección breve para reducir fricción y facilitar que el visitante avance hacia la conversación técnica."
        />

        <MotionStagger className="mt-10 space-y-4" delay={0.08}>
          {faqs.map((faq, index) => {
            const active = open === index;
            return (
              <MotionItem key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : index)}
                  className="panel w-full p-6 text-left transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.05] md:p-7"
                >
                  <div className="flex items-start justify-between gap-6">
                    <p className="text-lg font-medium text-white">{faq.q}</p>
                    <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${active ? "rotate-180" : "rotate-0"}`} />
                  </div>
                  <AnimatePresence initial={false}>
                    {active ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm leading-7 text-white/[0.66]">{faq.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </button>
              </MotionItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
