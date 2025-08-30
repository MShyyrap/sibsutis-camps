'use client';

import Image from 'next/image';

import { useState } from 'react';
import { IMaskInput } from 'react-imask';

import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

export default function BookingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  return (
    <div className="relative">

      <div className="absolute -bottom-1 -left-1 w-full h-[100px] bg-white"></div>

      <form className="bg-black text-white w-full py-5 px-8 flex items-center gap-7 relative z-10">
        <div className="flex-shrink-0">
          <p className={`text-2xl ${unbounded.className}`}>Забронируй<br />путёвку</p>
        </div>

        <Image
          src="/icons/arrow.svg"
          alt="Стрелка"
          width={78}
          height={18}
          priority
        />

        <div className="flex-grow flex items-center gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
            className={`bg-transparent border-3 border-white p-3 w-full text-white placeholder:text-white text-2xl ${unbounded.className} focus:placeholder:opacity-50`}
          />
          <IMaskInput
              mask="+7 (000) 000-00-00"
              value={phone}
              onAccept={(value) => setPhone(value as string)}
              lazy={!isPhoneFocused && !phone}
              type="tel"
              placeholder="Телефон"
              onFocus={() => setIsPhoneFocused(true)}
              onBlur={() => setIsPhoneFocused(false)}
              className={`bg-transparent border-3 border-white p-3 w-full text-white placeholder:text-white text-2xl ${unbounded.className}`}
          />
          <button
            type="submit"
            className={`bg-[var(--color-brand-blue)] hover:bg-[#224177] transition p-[15px] whitespace-nowrap text-2xl ${unbounded.className}`}
          >
            Отправить
          </button>

        </div>
      </form>
    </div>
  );
}
