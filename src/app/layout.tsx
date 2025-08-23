import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

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
      {/* ДОБАВЛЕНЫ 3 КЛАССА:
        min-h-screen: Тело страницы будет высотой МИНИМУМ в один экран.
        flex flex-col: Превращает body в flex-контейнер, чтобы дочерние 
                      элементы (header, main) можно было растягивать.
      */}
      <body className={`${inter.className} bg-[var(--color-brand-orange)] relative min-h-screen flex flex-col`}>
        {/* ГЛОБАЛЬНЫЙ СЛОЙ С ТЕКСТУРОЙ */}
        <div className="absolute inset-0 bg-[url('/textures/dust-pattern@0,5x.png')] bg-repeat opacity-20 pointer-events-none z-[-1]"></div>
        
        <Header />
        
        {/* ДОБАВЛЕН 1 КЛАСС:
          flex-grow: Заставляет <main> растянуться и занять всё 
                     оставшееся свободное пространство.
        */}
        <main className="flex-grow">{children}</main>
        
        {/* <Footer /> */}
      </body>
    </html>
  );
}