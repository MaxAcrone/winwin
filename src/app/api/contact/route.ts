import { NextResponse } from 'next/server';
import { validateContactForm } from '@/lib/validation';
import type { ContactFormData } from '@/lib/types';

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

    // Here you would typically send email or save to database
    console.log('Contact form submission:', data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
