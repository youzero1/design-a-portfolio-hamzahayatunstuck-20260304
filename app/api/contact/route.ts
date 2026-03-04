import { NextRequest, NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/database';
import { ContactMessage } from '@/lib/entities/ContactMessage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    await AppDataSource.initialize();
    const contactMessage = new ContactMessage();
    contactMessage.name = name;
    contactMessage.email = email;
    contactMessage.message = message;
    await AppDataSource.manager.save(contactMessage);
    return NextResponse.json({ message: 'Message saved successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}