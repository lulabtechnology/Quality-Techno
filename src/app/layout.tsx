import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quality Techno Services S.A. | Soluciones técnicas industriales en Panamá",
  description:
    "Soporte consultivo, respaldo de fabricantes internacionales y soluciones técnicas industriales orientadas a continuidad operativa, bombeo, sellado y protección de activos.",
  keywords: [
    "Quality Techno Services",
    "soluciones industriales Panamá",
    "soporte técnico industrial",
    "Flowserve Panamá",
    "AGI Industries Panamá",
    "NOV Fluid Motion Solutions",
    "Unique Polymer Systems",
    "bombeo industrial",
    "sellado industrial",
    "protección de activos",
  ],
  openGraph: {
    title: "Quality Techno Services S.A. | Soluciones técnicas industriales en Panamá",
    description:
      "Respaldo internacional, criterio técnico y acompañamiento consultivo para operaciones industriales que no pueden detenerse.",
    url: "https://quality-techno.vercel.app/",
    siteName: "Quality Techno Services S.A.",
    locale: "es_PA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
