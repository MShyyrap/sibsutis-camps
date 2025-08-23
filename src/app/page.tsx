import Image from 'next/image';
import Link from 'next/link';

import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

import { Golos_Text } from 'next/font/google';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

export default function HomePage() {
  return (
    // Добавляем flex-col, чтобы растяжение flex-grow работало по вертикали
    <main className="flex flex-col flex-grow">
      
      {/* Секция "Hero" */}
      {/* flex-grow: Заставляет секцию занять всё доступное место в <main>. */}
      <section className="container mx-auto px-6 flex items-stretch gap-16 pt-15 flex-grow">
        
        {/* Левая колонка */}
        <div className="w-5/12 flex flex-col justify-center">
          <h1 className="text-[90px] font-bold text-white flex items-center">
            MEDIA КИТ<span className={`text-[40px] ${unbounded.className}`}>-</span>
          </h1>
          <p className={`text-2xl text-white ${unbounded.className}`}>
            облако знаний
            <br />
            для твоего роста
          </p>
        </div>

        {/* Правая колонка */}
        <div className="w-7/12 flex">
          <Image
            src="/illustrations/cat-hero.svg"
            alt="Кот МедиаКит с ноутбуком"
            width={960}
            height={850}
            className="w-auto h-full object-contain"
            priority
          />
        </div>
      </section>

      {/* Новый блок с текстом. Он не будет растягиваться. */}
      <div className="bg-black text-right py-2 px-4 h-[58px]">
        <p className={`text-white opacity-40 text-base ${golos.className}`}>
          Нажимая кнопку, я соглашаюсь на обработку персональных данных.
        </p>
      </div>

    </main>
  );
}