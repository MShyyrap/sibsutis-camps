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
import FaqItem from '@/components//FaqItem';

import { messages } from '@/data/chatMessages';
import { features } from '@/data/featuresData';
import { faqItems } from '@/data/faqData';

export default function HomePage() {
  return (
    <main className="flex flex-col flex-grow">

      {/* Секция "Hero" */}
      <section id="home" className="container mx-auto px-6 flex flex-col pt-10 flex-grow relative">

        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="w-full items-center md:w-5/12 flex flex-col justify-center md:items-start">
            <h1 className="text-[52px] leading-15 font-bold text-white flex items-center lg:text-7xl xl:text-[90px] md:leading-none">
              MEDIA КИТ<span className={`text-[40px] ${unbounded.className}`}>-</span>
            </h1>
            <p className={`text-base text-center md:text-left text-white ${unbounded.className} lg:text-xl`}>
              облако знаний<br/>для твоего роста
            </p>
          </div>

          <div className="w-full md:w-7/12 flex mt-8 md:mt-0">
            <Image
              src="/illustrations/cat-hero.svg"
              alt="Кот МедиаКит с ноутбуком"
              width={960}
              height={850}
              className="w-auto h-full object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative mb-[10px] lg:absolute lg:bottom-[9px] xl:bottom-[14px] 2xl:bottom-[20px] lg:left-0 lg:mb-[0px] w-full lg:px-6">
          <div className="mx-auto">
            <HeroForm />
          </div>
        </div>

      </section>

      <div className="bg-black text-right py-2 px-4 h-[48px] md:h-[58px]">
        <p className={`text-white opacity-40 text-[10px] md:text-xs lg:text-base ${golos.className}`}>
          Нажимая кнопку, я соглашаюсь на обработку персональных данных.
        </p>
      </div>

      {/* Секция "О нас" */}
      <section id="about" className="pt-20 bg-gradient-to-b from-[var(--color-brand-orange)] from-50% to-[var(--color-brand-white)] relative flex flex-col md:block h-auto md:h-[870px]">
        <div className="md:hidden absolute inset-0 bg-[url('/textures/noise.png')] opacity-[67%]"></div>

        <div className="container mx-auto px-6 relative z-20 order-1 md:order-none">
          <h2 className={`text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-4 md:mb-8 xl:mb-12 ${unbounded.className}`}>
            ( <span className="text-black">О нас</span> )
          </h2>
        </div>

        <div className="relative md:absolute top-[-100px] md:right-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-13/19 md:h-full order-2 md:order-none">
          <div className="hidden md:block absolute inset-0 bg-[url('/textures/noise.png')] opacity-[67%]"></div>

          <div className="relative z-10 h-full">
            <div className="container mx-auto px-5 lg:px-1 h-full">
              <div className="flex flex-col gap-6 pt-[120px] md:pt-[150px] 2xl:pt-[200px] px-6 lg:pl-[160px] lg:pr-[80px] pb-[10px] lg:pb-[40px]">
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
        </div>

        <div className="relative md:absolute md:left-0 md:bottom-0 w-full md:w-6/12 z-10 order-3 md:order-none -mt-20 md:mt-0">
          <Image
            src="/illustrations/cat-about.svg"
            alt="Кот МедиаКит"
            width={605}
            height={574}
            className="w-5/7 h-auto min-w-[150px] max-w-[450px] md:min-w-[360px] md:max-w-[770px]"
          />
        </div>

        <div className="hidden lg:block absolute top-1/5 left-7/19 -translate-x-1/2 z-0">
          <Image
            src="/illustrations/lines.svg"
            alt=""
            width={82}
            height={60}
            aria-hidden="true"
          />
        </div>

      </section>

      <div className="bg-black text-right py-2 px-4 h-[58px]"></div>

      {/* Секция "Почему мы?" */}
      <section className="py-20 bg-[var(--color-brand-white)]">
        <div className="container mx-auto px-6">

          <h2 className={`relative text-3xl lg:text-5xl font-bold text-center mb-10 lg:mb-20 ${unbounded.className}`}>
            <Image
              src="/illustrations/bracket-left.svg"
              alt=""
              width={74}
              height={62}
              className="hidden lg:block absolute right-[890px] -translate-y-1/2 mr-4"
              aria-hidden="true"
            />
            Почему мы?
            <Image
              src="/illustrations/bracket-right.svg"
              alt=""
              width={74}
              height={62}
              className="hidden lg:block absolute left-[890px] -translate-y-1/2 ml-4"
              aria-hidden="true"
            />
          </h2>

          <div className="flex flex-col mx-auto max-w-[300px] md:max-w-[450px] lg:max-w-full lg:flex-row gap-8 lg:items-stretch">
            {features.map((feature) => {
              return (
                <div key={feature.number} className={`bg-white p-4 lg:p-8 rounded-2xl shadow-[0_0_15px_4px_rgba(0,0,0,0.25)] text-center flex flex-col`}>

                  <p className={`text-2xl md:text-4xl lg:text-6xl font-medium text-[var(--color-brand-blue)] ${unbounded.className}`}>{feature.number}</p>
                  <h3 className={`text-base md:text-lg lg:text-2xl font-bold mt-2 md:mt-5 lg:mt-10 lg:min-h-[3.5rem] ${unbounded.className}`}>{feature.title}</h3>
                  <p className="text-xs md:text-base mt-2 md:mt-5 lg:mt-10">{feature.description}</p>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Секция "Форма" */}
      <FinalBookingForm />

      {/* Секция "Вопросы" */}
      <section id="faq" className="bg-[var(--color-brand-white)] py-10 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className={`text-xl md:text-3xl lg:text-5xl text-center md:text-left text-[var(--color-brand-gray)] font-bold mb-6 md:mb-12 ${unbounded.className}`}>
          Часто задаваемые <span className="text-[var(--color-brand-orange)]">вопросы</span>
        </h2>

        <div>
          {faqItems.map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>

    </main>
  );
}
