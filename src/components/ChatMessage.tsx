import Image from 'next/image';

import { Message } from '@/data/chatMessages';

import { Golos_Text } from 'next/font/google';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

export default function ChatMessage({ message, isLastInGroup = false }: { message: Message; isLastInGroup?: boolean; }) {
  const isIncoming = message.type === 'incoming';

  const tailClass = isLastInGroup
    ? isIncoming
      ? 'rounded-bl-none'
      : 'rounded-br-none'
    : '';

  return (
    <div className={`flex ${isIncoming ? 'justify-start' : 'justify-end'}`}>

      <div className={`max-w-4xl p-3 lg:p-4 rounded-xl relative shadow-[0_0_10px_rgba(0,0,0,0.25)] text-sm md:text-base lg:text-xl xl:text-2xl
          ${isIncoming ? 'bg-black text-white' : 'bg-white text-black'}
          ${golos.className} ${tailClass}`}>

        <p>{message.text}</p>

        {message.reactions && (
          <div className="mt-[10px] inline-flex items-center gap-[1px] lg:gap-2 bg-[var(--color-brand-orange)] px-[3px] lg:px-[11px] py-[1px] lg:py-[6px] rounded-full">

            {message.reactions.map((reactionName) => (
              <div key={reactionName}
                className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${reactionName === 'heart' && 'transition-transform duration-200 ease-in-out hover:scale-125'}`}
              >
                <Image
                  src={`/icons/${reactionName}-icon.svg`}
                  alt={`Реакция ${reactionName}`}
                  width={28}
                  height={26}
                  className='w-[20px] h-[18px] lg:w-[28px] lg:h-[26px]'
                />
              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
}
