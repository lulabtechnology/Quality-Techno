import { Mail, MessageCircleMore } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="contacto" className="section-anchor section-space">
      <div className="shell">
        <div className="panel overflow-hidden p-8 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Contacto"
                title="Abramos una conversación técnica seria."
                description="Comparta el contexto de su aplicación, necesidad operativa o requerimiento comercial y le daremos continuidad por la vía más conveniente."
              />

              <div className="mt-8 space-y-4">
                <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-3 text-white">
                    <Mail className="h-5 w-5 text-gold" />
                    <span className="text-sm font-medium">info@qualitytechnoservices.com</span>
                  </div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-3 text-white">
                    <MessageCircleMore className="h-5 w-5 text-gold" />
                    <span className="text-sm font-medium">+507 6898-7181</span>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
