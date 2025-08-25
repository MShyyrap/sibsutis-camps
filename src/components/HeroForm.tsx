'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

export default function BookingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

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
            className={`bg-transparent border-3 border-white p-3 w-full text-white placeholder:text-white text-2xl ${unbounded.className}`}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Телефон"
            className={`bg-transparent border-3 border-white p-3 w-full text-white placeholder:text-white text-2xl ${unbounded.className}`}
          />
          <button
            type="submit"
            className={`bg-[var(--color-brand-blue)] hover:opacity-80 p-[15px] transition-colors whitespace-nowrap text-2xl ${unbounded.className}`}
          >
            Отправить
          </button>

        </div>
      </form>
    </div>
  );
}
