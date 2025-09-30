'use client';

import React from 'react';

import { Golos_Text } from 'next/font/google';

const golos = Golos_Text({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
});

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function CustomCheckbox({ label, checked, onChange, disabled }: CustomCheckboxProps) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only peer"
      />

      <div
        className="w-5 h-5 bg-transparent border-2 border-white flex-shrink-0
          peer-checked:bg-[var(--color-brand-orange)]
          peer-checked:border-[var(--color-brand-orange)] transition ease-in-out"
      >

        <svg
          className={`w-full h-full text-white ${checked ? 'block' : 'hidden'}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <span className={`ml-2 text-[10px] sm:text-xs text-[var(--color-brand-white)] ${golos.className}`}>
        {label}
      </span>
    </label>
  );
}
