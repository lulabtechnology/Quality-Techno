import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { AboutSection } from "@/components/sections/about-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { ManufacturersSection } from "@/components/sections/manufacturers-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ProcessSection } from "@/components/sections/process-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export const metadata: Metadata = {
  title: "Quality Techno Services S.A. | Soluciones técnicas industriales en Panamá",
  description: "Soporte técnico especializado, soluciones industriales, respaldo internacional y acompañamiento aplicado para continuidad operativa en Panamá.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quality Techno Services S.A.",
  url: "https://qualitytechnoservices.com",
  email: "info@qualitytechnoservices.com",
  telephone: "+50768987181",
  areaServed: "Panamá",
  description:
    "Empresa orientada a soporte técnico especializado y soluciones industriales para continuidad operativa en industrias críticas.",
  sameAs: [
    "https://qualitytechnoservices.com",
    "https://agiindustries.com",
    "https://www.flowserve.com",
    "https://www.nov.com/about/our-business-units/fluid-motion-solutions",
    "https://www.uniquepolymersystems.com"
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Soporte técnico industrial y soluciones de continuidad operativa",
  provider: {
    "@type": "Organization",
    name: "Quality Techno Services S.A.",
  },
  areaServed: {
    "@type": "Country",
    name: "Panamá",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: "+50768987181",
    serviceUrl: "https://qualitytechnoservices.com",
  },
  description:
    "Diagnóstico técnico, acompañamiento de aplicación, soporte en sitio, capacitación y articulación de soluciones industriales de alto desempeño.",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <IndustriesSection />
      <SolutionsSection />
      <ManufacturersSection />
      <BenefitsSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <UseCasesSection />
      <FaqSection />
      <ContactSection />
      <FinalCtaSection />
    </>
  );
}
