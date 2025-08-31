'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import PopupForm from './PopupForm';

const navLinks = [
  { href: '/home', label: 'Главная' },
  { href: '/calendar', label: 'Календарь' },
  { href: '/teachers', label: 'Преподаватели' },
];

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <header className="w-full text-white px-[var(--spacing-65)]">

        <div className="flex justify-between items-start py-1">

          <div className="mt-[var(--spacing-25)]">
            <Link href="/">
              <Image
                src="/logos/logo.svg"
                alt="Логотип МедиаКит"
                width={180}
                height={40}
                priority
              />
            </Link>
          </div>

          <div className="flex items-start gap-[var(--spacing-140)]">
            <nav className="mt-[var(--spacing-30)]">
              <ul className="flex items-center gap-[var(--spacing-140)]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xl hover:opacity-80 transition-opacity whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-[15px]">
              <button
                onClick={() => setIsPopupOpen(true)}
                className='border-2 border-white bg-transparent text-[var(--color-brand-white)] text-xl p-[15px]
                transition-colors duration-300 hover:bg-white hover:text-[var(--color-brand-orange)]'>
                Забронировать
              </button>
            </div>
          </div>

        </div>
      </header>

      <PopupForm isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
    </>
  );
}
