import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/about', label: 'О нас' },
  { href: '/calendar', label: 'Календарь' },
  { href: '/teachers', label: 'Преподаватели' },
  { href: '/faq', label: 'Вопрос-ответ' },
];

export default function Header() {
  return (
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

          <div className="mt-[var(--spacing-30)]">
            <Link href="/login" className="block hover:opacity-80 transition-opacity">
              <Image
                src="/icons/account.svg"
                alt="Иконка профиля"
                width={30}
                height={33}
              />
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}