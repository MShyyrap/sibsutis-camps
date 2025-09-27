import { NextResponse } from 'next/server'

export async function GET() {
  // Временная заглушка экспорта.
  const dummy = [
    { id: 1, name: 'Иван Иванов', track: 'React' },
    { id: 2, name: 'Мария Петрова', track: 'Web-дизайн' },
  ]
  return NextResponse.json({ items: dummy })
}
