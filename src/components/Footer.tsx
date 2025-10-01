import { Golos_Text } from 'next/font/google';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 lg:px-[var(--spacing-65)] py-7">
      <div className="flex justify-between items-center">

        <div>
          <p className={`text-[14px] lg:text-xl font-bold text-[var(--color-brand-orange)] ${golos.className}`}>
            МедиаКит
          </p>
        </div>

        <div>
          <p className={`text-[14px] lg:text-xl text-white ${golos.className}`}>
            © МедиаКит, {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </footer>
  );
}
