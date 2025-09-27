'use client';

import { IMaskInput } from 'react-imask';

import CustomCheckbox from './CustomCheckbox';

import { useState } from 'react';
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({ subsets: ['cyrillic', 'latin'] });

import { Golos_Text } from 'next/font/google';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

export default function FinalBookingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);

  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 flex items-center gap-16">
        
        <div className="w-[40%]">
          <h2 className={`text-5xl leading-tight font-bold text-[var(--color-brand-orange)] ${unbounded.className}`}>
            Забронировать <span className='text-[var(--color-brand-white)]'>путевку</span>
          </h2>
          <p className={`mt-3 text-base leading-[1.3] max-w-[400px] text-[#828282] ${golos.className}`}>
            Мы свяжемся с вами, чтобы ответить на вопросы и помочь определиться с датой смен.
          </p>
        </div>

        <div className="w-[60%]">
          <form className="bg-[var(--color-brand-gray)] p-8 relative">
            <div className="absolute inset-0 bg-[url('/textures/dust-pattern@0,5x.png')] bg-repeat opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex gap-4 mb-4">
                <input 
                  type="text"
                  placeholder="Имя и фамилия"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-1/2 bg-[var(--color-brand-white)] text-[var(--color-brand-gray)] text-base p-3 placeholder:text-[var(--color-brand-gray)] focus:placeholder:opacity-50 ${golos.className}`}
                />
                <IMaskInput
                    mask="+7 (000) 000-00-00"
                    value={phone}
                    onAccept={(value) => setPhone(value as string)}
                    lazy={!isPhoneFocused && !phone}
                    type="tel"
                    placeholder="Номер телефона"
                    onFocus={() => setIsPhoneFocused(true)}
                    onBlur={() => setIsPhoneFocused(false)}
                    className={`w-1/2 bg-[var(--color-brand-white)] text-[var(--color-brand-gray)] text-base p-3 placeholder:text-[var(--color-brand-gray)] ${golos.className}`}
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-[var(--color-brand-orange)] text-white text-base p-3 transition hover:bg-[#D65012] ${golos.className}`}
              >
                Отправить
              </button>
              <div className="mt-4 flex items-center">
                <CustomCheckbox
                    label="Я даю согласие на обработку персональных данных и политику конфиденциальности"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                />
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}