import { NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/validation';
import type { ContactFormData } from '@/lib/types';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8704104147:AAFO0GahCxnVRm7GJmS-qd1yEBma4p2gioE';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '463172426';

async function sendToTelegram(data: ContactFormData) {
  const message = `
🔔 *Новая заявка с сайта*

👤 *Имя:* ${data.name || 'Не указано'}
📱 *Телефон:* ${data.phone || 'Не указан'}
🏢 *Компания:* ${data.company || 'Не указана'}
💬 *Сообщение:* ${data.message || 'Не указано'}

📅 *Дата:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
  `.trim();

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();
    
    const validation = validateContactForm(data);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // Отправляем в Telegram
    const telegramSent = await sendToTelegram(data);
    
    if (!telegramSent) {
      console.error('Failed to send to Telegram');
    }

    console.log('Contact form submission:', data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
