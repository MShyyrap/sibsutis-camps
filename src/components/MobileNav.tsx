'use client';

import Image from 'next/image';

const navLinks = [
  { href: '#home', label: 'Главная' },
  { href: '#about', label: 'О нас' },
  { href: '#faq', label: 'Вопросы' },
]

interface MobileNavProps {
  onClose: () => void;
  onOpenPopup: () => void;
}

export default function MobileNav({ onClose, onOpenPopup }: MobileNavProps) {
  return (
    <div className="fixed inset-0 bg-[var(--color-brand-orange)] z-50 flex flex-col items-center justify-center p-4 text-white">

      <button
        type="button"
        className="absolute top-8 right-8 transition-transform hover:scale-110"
        onClick={onClose}
        aria-label="Закрыть меню"
      >
        <Image
          src="/icons/close-icon.svg"
          alt="Закрыть"
          width={19}
          height={19}
        />
      </button>

      <nav>
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={onClose}
                className="text-xl hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-[32px]">
        <button
          onClick={() => {
            onOpenPopup();
            onClose();
          }}
          className='border-2 border-white bg-transparent text-[var(--color-brand-white)] text-xl p-[15px]
          transition-colors duration-300 hover:bg-white hover:text-[var(--color-brand-orange)]'>
          Забронировать
        </button>
      </div>
    </div>
  );
}
