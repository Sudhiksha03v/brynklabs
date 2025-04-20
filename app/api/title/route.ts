import { NextResponse } from 'next/server';
import { getSetting, setSetting } from '@/lib/db';

const TITLE_KEY = 'homepageTitle';

// Handler for GET requests to fetch the title
export async function GET() {
  try {
    const title = await getSetting(TITLE_KEY);
    if (title === null) {
      // This shouldn't happen if seeding worked, but handle it just in case
      return NextResponse.json({ error: 'Title not found' }, { status: 404 });
    }
    return NextResponse.json({ title });
  } catch (error) {
    console.error('Failed to fetch title:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Handler for PUT requests to update the title
export async function PUT(request: Request) {
  try {
    const { title } = await request.json();

    if (typeof title !== 'string' || title.trim() === '') {
      return NextResponse.json({ error: 'Invalid title provided' }, { status: 400 });
    }

    await setSetting(TITLE_KEY, title);
    return NextResponse.json({ message: 'Title updated successfully', title });

  } catch (error) {
    console.error('Failed to update title:', error);
    // Handle JSON parsing errors specifically
    if (error instanceof SyntaxError) {
        return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 
