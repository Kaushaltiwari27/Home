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
  description: 'Discover Alora Residences, an exclusive collection of contemporary Mediterranean homes on Spain\'s Costa Blanca.',
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
