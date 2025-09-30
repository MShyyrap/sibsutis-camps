'use client';

import { useState } from 'react';
import Image from 'next/image'

import { FaqItemData } from '@/data/faqData';

import { Golos_Text } from 'next/font/google';

const golos = Golos_Text({ subsets: ['cyrillic', 'latin'] });

export default function FaqItem({ item }: { item: FaqItemData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 md:mb-8 last:mb-0 border-2 border-[var(--color-brand-gray)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left px-4 md:px-8 py-2 md:py-4"
      >
        <span className={`text-sm md:text-xl font-bold ${golos.className}`}>{item.question}</span>
        <Image
          src="/icons/more-icon.svg"
          alt={isOpen ? "Скрыть ответ" : "Показать ответ"}
          width={24}
          height={24}
          className={`w-4 h-4 md:w-6 md:h-6 transition-transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        />
      </button>

      {isOpen && (
        <div className={`text-[var(--color-brand-gray)] ${golos.className}`}>
          <p className='text-xs md:text-sm px-4 md:px-8 pb-2 md:pb-4'>{item.answer}</p>
        </div>
      )}
    </div>
  );
}
