import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Unbounded } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Media Кит',
  description: 'Облако знаний для твоего роста',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} bg-[var(--color-brand-orange)] relative min-h-screen flex flex-col max-w-full overflow-x-hidden`}>

        <div className="absolute inset-0 bg-[url('/textures/dust-pattern@0,5x.png')] bg-repeat opacity-20 pointer-events-none z-[-1]"></div>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />

      </body>
    </html>
  );
}
