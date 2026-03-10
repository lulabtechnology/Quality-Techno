import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Quality Techno Services | Reconstrucción Total',
  description:
    'Representación técnica industrial, fabricantes internacionales y soporte especializado para operaciones críticas.',
  metadataBase: new URL('https://quality-techno.vercel.app')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
