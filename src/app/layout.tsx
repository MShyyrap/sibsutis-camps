import './globals.css'
import type { Metadata } from 'next'

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
          <nav style={{ display: 'flex', gap: 12 }}>
            <a href="/">Главная</a>
            <a href="/(public)/about">О проекте</a>
            <a href="/(public)/tracks">Направления</a>
            <a href="/(public)/teachers">Преподаватели</a>
            <a href="/(public)/faq">FAQ</a>
            <a href="/(public)/contact">Контакты</a>
            <a href="/(dashboard)/admin" style={{ marginLeft: 'auto' }}>
              Админка
            </a>
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
