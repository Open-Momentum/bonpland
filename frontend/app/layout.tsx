import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { ThemeToggler } from '@/components/organisms/theme-toggler';
import { Header } from '@/components/organisms/header';
import { Footer } from '@/components/organisms/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bonplandpropiedades.com'),
  title: {
    default: 'Bonpland Propiedades | Alquiler y Venta de Inmuebles',
    template: '%s | Bonpland Propiedades',
  },
  description:
    'Encuentra casas, apartamentos, oficinas y locales para alquilar o comprar. Más de 30 años de experiencia ofreciendo soluciones inmobiliarias de calidad.',
  keywords: [
    'inmobiliaria',
    'alquiler de propiedades',
    'venta de inmuebles',
    'apartamentos en venta',
    'casas en alquiler',
    'Bonpland Propiedades',
    'bienes raíces',
    'inmuebles de lujo',
    'tasación de propiedades',
    'gestión inmobiliaria',
  ],
  authors: [{ name: 'Bonpland Propiedades' }],
  creator: 'Bonpland Propiedades',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_LA',
    url: 'https://www.bonplandpropiedades.com',
    siteName: 'Bonpland Propiedades',
    title: 'Bonpland Propiedades | Alquiler y Venta de Inmuebles',
    description:
      'Encuentra casas, apartamentos, oficinas y locales para alquilar o comprar. Tu próximo hogar está a un clic de distancia.',
    images: [
      {
        url: '/images/hero-section-background.webp',
        width: 1200,
        height: 630,
        alt: 'Bonpland Propiedades - Expertos Inmobiliarios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonpland Propiedades | Alquiler y Venta de Inmuebles',
    description:
      'Encuentra casas, apartamentos, oficinas y locales para alquilar o comprar. Más de 30 años de experiencia ofreciendo soluciones inmobiliarias de calidad.',
    images: ['/images/hero-section-background.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <ThemeToggler />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
