export const prerender = false;
import { db, Guestbook, eq } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id, passcode } = body;

    const adminPassword = import.meta.env.ADMIN_PASSWORD || 'admin123'; // Default fallback

    if (passcode !== adminPassword) {
      return new Response(JSON.stringify({ error: 'Unauthorized. Invalid passcode.' }), { status: 401 });
    }

    if (!id) {
      return new Response(JSON.stringify({ error: 'Entry ID is required.' }), { status: 400 });
    }

    // Delete record from db
    await db.delete(Guestbook).where(eq(Guestbook.id, id));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
