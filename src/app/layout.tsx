import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://qualitytechnoservices.com"),
  title: {
    default: "Quality Techno Services S.A. | Soluciones técnicas industriales en Panamá",
    template: "%s | Quality Techno Services S.A.",
  },
  description:
    "Soporte técnico especializado, soluciones industriales y acompañamiento para continuidad operativa en industrias críticas. Ecosistema de fabricantes y tecnologías para bombeo, sellado, protección y manejo de fluidos.",
  keywords: [
    "Quality Techno Services",
    "soluciones industriales Panamá",
    "soporte técnico industrial",
    "Flowserve Panamá",
    "AGI Industries",
    "NOV Fluid Motion Solutions",
    "Unique Polymer Systems",
    "mecanical seals Panamá",
    "pumping solutions Panamá",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Quality Techno Services S.A. | Soluciones técnicas industriales",
    description:
      "Aliado técnico para continuidad operativa, soporte especializado y soluciones para industrias críticas.",
    url: "https://qualitytechnoservices.com",
    siteName: "Quality Techno Services S.A.",
    locale: "es_PA",
    type: "website",
    images: [
      {
        url: "/og/og-qts.svg",
        width: 1200,
        height: 630,
        alt: "Quality Techno Services S.A. — Soluciones técnicas industriales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Techno Services S.A. | Soluciones técnicas industriales",
    description:
      "Soporte técnico industrial, continuidad operativa y respaldo internacional para industrias críticas.",
    images: ["/og/og-qts.svg"],
  },
  category: "industrial services",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
