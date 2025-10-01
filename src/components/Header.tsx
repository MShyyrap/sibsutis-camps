'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import PopupForm from './PopupForm'
import MobileNav from './MobileNav'

const navLinks = [
  { href: '#home', label: 'Главная' },
  { href: '#about', label: 'О нас' },
  { href: '#faq', label: 'Вопросы' },
]

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="w-full text-white px-6 md:px-12 lg:px-[var(--spacing-65)]">
        <div className="flex justify-between items-start py-1">
          <div className="mt-[var(--spacing-25)] w-[110px] lg:w-[140px] xl:w-[180px]">
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

          <div className="hidden md:flex items-start gap-8 lg:gap-[80px] xl:gap-[var(--spacing-140)]">
            <nav className="mt-[var(--spacing-30)]">
              <ul className="flex items-center md:gap-8 lg:gap-[80px] xl:gap-[var(--spacing-140)]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base hover:opacity-80 transition-opacity whitespace-nowrap lg:text-xl"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-[22px] lg:mt-[15px]">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="border-2 border-white bg-transparent text-[var(--color-brand-white)] text-base p-[7px] lg:p-[15px]
                transition-colors duration-300 hover:bg-white hover:text-[var(--color-brand-orange)] lg:text-xl"
              >
                Забронировать
              </button>
            </div>
          </div>

          <button
            type="button"
            className="md:hidden z-50 mt-[25px]"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <Image src="/icons/menu.svg" alt="Закрыть" width={24} height={24} />
          </button>
        </div>
      </header>

      <PopupForm isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
      {isMenuOpen && (
        <MobileNav
          onClose={() => setIsMenuOpen(false)}
          onOpenPopup={() => setIsPopupOpen(true)}
        />
      )}
    </>
  )
}
