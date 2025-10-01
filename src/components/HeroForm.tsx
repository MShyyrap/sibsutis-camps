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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, phone, formType: 'hero', agreed: true
        }),
      });

      const data = await response.json();
      setMessage(data.message);
      if (data.success) {
        setName('');
        setPhone('');
      }
    } catch (error) {
      setMessage('Ошибка отправки');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">

      <div className="absolute -bottom-1 -left-1 w-full h-full bg-white"></div>

      <form onSubmit={handleSubmit} className="bg-black text-white w-full py-3 2xl:py-5 px-4 2xl:px-8 flex flex-col gap-4 lg:gap-6 md:flex-row md:items-center relative z-10">
        <div className="flex-shrink-0">
          <div className="flex items-center gap-6 md:flex-row md:items-center md:gap-7">
            <p className={`text-xl md:text-base xl:text-xl 2xl:text-2xl ${unbounded.className}`}>Забронируй<br />путёвку</p>

            <Image
              src="/icons/curved-arrow.svg"
              alt="Стрелка вниз"
              width={80}
              height={60}
              className="block md:hidden"
            />
          </div>
        </div>

        <Image
          src="/icons/arrow.svg"
          alt="Стрелка"
          width={78}
          height={18}
          priority
          className='hidden md:block'
        />

        <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:gap-4 flex-grow">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
            className={`bg-transparent border-3 border-white p-1 2xl:p-3 w-full text-white placeholder:text-white text-xl md:text-base xl:text-xl 2xl:text-2xl ${unbounded.className} focus:placeholder:opacity-50`}
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
              className={`bg-transparent border-3 border-white p-1 2xl:p-3 w-full text-white placeholder:text-white text-xl md:text-base xl:text-xl 2xl:text-2xl ${unbounded.className}`}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[var(--color-brand-blue)] hover:bg-[#224177] transition p-[7px] 2xl:p-[15px] whitespace-nowrap text-xl md:text-base xl:text-xl 2xl:text-2xl ${unbounded.className} disabled:opacity-50`}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>

        </div>
      </form>
      {message && (
        <div className="text-center p-2 text-white">
          {message}
        </div>
      )}
    </div>
  );
}
