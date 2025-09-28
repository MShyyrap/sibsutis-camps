import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, phone, formType, agreed } = await request.json();

    if (!name || !phone) {
      return NextResponse.json({
        success: false,
        message: 'Все поля обязательны'
      }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO applications (name, phone, form_type, agreed)
      VALUES (${name}, ${phone}, ${formType}, ${agreed || true})
      RETURNING id;
    `;

    return NextResponse.json({
      success: true,
      message: 'Заявка принята!',
      id: result.rows[0].id
    });

  } catch (error) {
    console.error('Ошибка:', error);
    return NextResponse.json({
      success: false,
      message: 'Ошибка сервера'
    }, { status: 500 });
  }
}
