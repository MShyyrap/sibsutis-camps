import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'СибГУТИ — Профильные смены',
  description:
    'Школа Цифрового Творчества: веб-дизайн, React, Node.js (основы).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <header
          style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}
        >
          <nav style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Link href="/">Главная</Link>
            <Link href="/about">О проекте</Link>
            <Link href="/tracks">Направления</Link>
            <Link href="/teachers">Преподаватели</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Контакты</Link>
            <span style={{ marginLeft: 'auto' }} />
            <Link href="/admin">Админка</Link>
          </nav>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
        <footer
          style={{
            padding: '12px 16px',
            borderTop: '1px solid #eee',
            marginTop: 32,
          }}
        >
          © {new Date().getFullYear()} СибГУТИ — Профильные смены
        </footer>
      </body>
    </html>
  )
}
