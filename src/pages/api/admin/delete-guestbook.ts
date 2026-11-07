export const prerender = false;
import { db, Guestbook, eq } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const adminPassword = import.meta.env.ADMIN_PASSWORD || 'admin123';
    const hasCookieAuth = cookies.get('admin_session')?.value === adminPassword;
    const body = await request.json().catch(() => ({}));
    const { id, passcode } = body;

    if (!hasCookieAuth && passcode !== adminPassword) {
      return new Response(JSON.stringify({ error: 'Unauthorized. Invalid session or passcode.' }), { status: 401 });
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
