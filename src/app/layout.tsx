import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { Navbar } from '@/components/global/Navbar';
import { Footer } from '@/components/global/Footer';
import { CustomCursor } from '@/components/global/CustomCursor';
import { IntroLoader } from '@/components/global/IntroLoader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alora Residences — Contemporary Mediterranean Living',
  description: 'Discover Alora Residences, an exclusive collection of contemporary Mediterranean homes on Spain\'s Costa Blanca. A community designed for living, not a complex.',
  keywords: ['luxury real estate', 'Costa Blanca', 'Spain properties', 'Mediterranean homes', 'Alora Residences', 'luxury villas', 'architecture', 'property development'],
  authors: [{ name: 'Alora Developments' }],
  creator: 'Alora Developments',
  publisher: 'Alora Developments',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alora-residences.com',
    title: 'Alora Residences — Contemporary Mediterranean Living',
    description: 'An exclusive collection of contemporary Mediterranean homes on Spain\'s Costa Blanca.',
    siteName: 'Alora Residences',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Alora Residences Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alora Residences — Contemporary Mediterranean Living',
    description: 'An exclusive collection of contemporary Mediterranean homes on Spain\'s Costa Blanca.',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&h=630&auto=format&fit=crop'],
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
  alternates: {
    canonical: 'https://alora-residences.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased font-sans bg-background text-foreground overflow-x-hidden">
        <IntroLoader />
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
