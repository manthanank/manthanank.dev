export const prerender = false;
import { db, Comments } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { postSlug, name, message } = body;

    if (!postSlug || !name || !message) {
      return new Response(JSON.stringify({ error: 'Post slug, name, and message are required.' }), { status: 400 });
    }

    const id = crypto.randomUUID();
    const createdAt = new Date();

    // Insert into Astro DB
    await db.insert(Comments).values({
      id,
      postSlug,
      name,
      message,
      createdAt,
    });

    return new Response(JSON.stringify({
      success: true,
      comment: {
        id,
        postSlug,
        name,
        message,
        createdAt: createdAt.toISOString()
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
