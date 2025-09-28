'use client';

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { IMaskInput } from 'react-imask';
import CustomCheckbox from './CustomCheckbox';

import { Unbounded } from 'next/font/google';
import { Golos_Text } from 'next/font/google';

const unbounded = Unbounded({ subsets: ['cyrillic', 'latin'] });
const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
}

export default function PopupForm({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void; }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !agreed) {
      setMessage('Заполните все поля и дайте согласие');
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, phone, formType: 'popup', agreed
        }),
      });

      const data = await response.json();
      setMessage(data.message);
      if (data.success) {
        setName('');
        setPhone('');
        setAgreed(false);
      }
    } catch (error) {
      setMessage('Ошибка отправки');
    } finally {
      setIsSubmitting(false);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Форма обратной связи"
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      className="w-full max-w-md overflow-hidden bg-[var(--color-brand-gray)] p-8 text-left align-middle shadow-[0_0_15px_4px_rgba(0,0,0,0.25)] outline-none relative"
      closeTimeoutMS={300}
    >
      <button
        type="button"
        className="absolute top-8 right-8 transition-colors"
        onClick={closeModal}
      >
        <span className="sr-only">Закрыть</span>
        <Image
          src="/icons/close-icon.svg"
          alt="Закрыть"
          width={21}
          height={21}
        />
      </button>

      <h3 className={`text-2xl font-bold leading-6 text-[var(--color-brand-orange)] ${unbounded.className}`}>
        Связаться с нами
      </h3>
      <div className="mt-4">
        <p className={`text-sm text-gray-400 ${golos.className}`}>
          Оставьте ваши данные, и мы скоро вам перезвоним.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Имя и фамилия"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full bg-[var(--color-brand-white)] text-[var(--color-brand-gray)] text-base p-3 placeholder:text-[var(--color-brand-gray)] ${golos.className}`}
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
          className={`w-full bg-[var(--color-brand-white)] text-[var(--color-brand-gray)] text-base p-3 placeholder:text-[var(--color-brand-gray)] ${golos.className}`}
        />
        <CustomCheckbox
          label="Я даю согласие на обработку персональных данных"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
      </form>

      <div className="mt-6">
        <button
          type="button"
          disabled={isSubmitting}
          className={`w-full bg-[var(--color-brand-orange)] text-white p-3 transition hover:bg-[#D65012] ${golos.className} disabled:opacity-50`}
          onClick={closeModal}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </button>
        {message && (
          <div className="text-center p-2 text-white mt-2">
            {message}
          </div>
        )}
      </div>
    </Modal>
  );
}
