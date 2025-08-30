import Image from 'next/image';

import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
});

import { Golos_Text } from 'next/font/google';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

import HeroForm from '@/components/HeroForm';
import ChatMessage from '@/components/ChatMessage';
import FinalBookingForm from '@/components/FinalBookingForm';

import { messages } from '@/data/chatMessages';
import { features } from '@/data/featuresData';

export default function HomePage() {
  return (
    <main className="flex flex-col flex-grow">

      {/* Секция "Hero" */}
      <section className="container mx-auto px-6 flex gap-16 pt-10 flex-grow relative">

        <div className="w-5/12 flex flex-col justify-center">
          <h1 className="text-[90px] font-bold text-white flex items-center">
            MEDIA КИТ<span className={`text-[40px] ${unbounded.className}`}>-</span>
          </h1>
          <p className={`text-2xl text-white ${unbounded.className}`}>
            облако знаний<br/>для твоего роста
          </p>
        </div>

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

        <div className="absolute bottom-[20px] left-0 w-full px-6">
          <div className="container mx-auto">
            <HeroForm />
          </div>
        </div>

      </section>

      <div className="bg-black text-right py-2 px-4 h-[58px]">
        <p className={`text-white opacity-40 text-base ${golos.className}`}>
          Нажимая кнопку, я соглашаюсь на обработку персональных данных.
        </p>
      </div>

      {/* Секция "О нас" */}
      <section className="pt-20 bg-gradient-to-b from-[var(--color-brand-orange)] from-50% to-[var(--color-brand-white)] relative h-[870px]">

        <div className="absolute left-0 bottom-0 w-6/12 z-10">
          <Image
            src="/illustrations/cat-about.svg"
            alt="Кот МедиаКит"
            width={605}
            height={574}
            className="w-5/7 h-auto"
          />
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-13/19 h-[100%]">
          <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-[67%]"></div>

          <div className="relative z-10 h-full">
            <div className="flex flex-col gap-6 pt-[200px] pl-[160px] pr-[80px] pb-[40px]">
              {messages.map((msg, index) => {
                const isLastInGroup = 
                  index === messages.length - 1 || 
                  messages[index + 1]?.type !== msg.type;

                return (
                  <ChatMessage 
                    key={msg.id} 
                    message={msg} 
                    isLastInGroup={isLastInGroup}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute top-1/5 left-7/19 -translate-x-1/2 z-0">
          <Image
            src="/illustrations/lines.svg"
            alt=""
            width={82}
            height={60}
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <h2 className={`text-5xl text-white font-bold mb-12 ${unbounded.className}`}>
            ( <span className="text-black">О нас</span> )
          </h2>
        </div>
      </section>

      <div className="bg-black text-right py-2 px-4 h-[58px]"></div>

      {/* Секция "Почему мы?" */}
      <section className="py-20 bg-[var(--color-brand-white)]">
        <div className="container mx-auto px-6">
          
          <h2 className={`relative text-5xl font-bold text-center mb-20 ${unbounded.className}`}>
            <Image
              src="/illustrations/bracket-left.svg"
              alt=""
              width={74}
              height={62}
              className="absolute right-[890px] -translate-y-1/2 mr-4"
              aria-hidden="true"
            />
            Почему мы?
            <Image
              src="/illustrations/bracket-right.svg"
              alt=""
              width={74}
              height={62}
              className="absolute left-[890px] -translate-y-1/2 ml-4"
              aria-hidden="true"
            />
          </h2>

          <div className="flex gap-8 items-stretch">
            {features.map((feature, index) => {
              const widthClass = index === 1 ? 'w-[36%]' : 'w-[32%]';

              return (
                <div key={feature.number} className={`bg-white p-8 rounded-2xl shadow-[0_0_15px_4px_rgba(0,0,0,0.25)] text-center flex flex-col ${widthClass}`}>

                  <p className={`text-6xl font-medium text-[var(--color-brand-blue)] ${unbounded.className}`}>{feature.number}</p>
                  <h3 className={`text-2xl font-bold mt-10 min-h-[3.5rem] ${unbounded.className}`}>{feature.title}</h3>
                  <p className="mt-10">{feature.description}</p>

                </div>
              );
            })}
          </div>
          
        </div>
      </section>

      <FinalBookingForm />

      <div className="text-right py-2 px-4 h-[58px]"></div>
      
    </main>
  );
}
