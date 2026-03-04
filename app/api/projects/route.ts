import { NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/database';
import { Project } from '@/lib/entities/Project';

export async function GET() {
  try {
    await AppDataSource.initialize();
    const projects = await AppDataSource.manager.find(Project);
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}