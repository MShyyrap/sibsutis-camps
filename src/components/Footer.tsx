import { Golos_Text } from 'next/font/google';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-[var(--spacing-65)] py-7">
      <div className="flex justify-between items-center">

        <div>
          <p className={`text-xl text-white ${golos.className}`}>
            МедиаКит
          </p>
        </div>
        
        <div>
          <p className={`text-xl text-white ${golos.className}`}>
            © МедиаКит, {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </footer>
  );
}