export const prerender = false;
import { db, PageLikes, eq, sql } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params, request }) => {
  const slug = params.slug;
  if (!slug) return new Response('Missing slug', { status: 400 });

  const body = await request.json();
  const action = body.action; // 'like' or 'unlike'

  try {
    const likes = await db.select().from(PageLikes).where(eq(PageLikes.slug, slug));
    let currentCount = 0;

    if (likes.length === 0 && action === 'like') {
      await db.insert(PageLikes).values({ slug, count: 1 });
      currentCount = 1;
    } else if (likes.length > 0) {
      const increment = action === 'like' ? 1 : -1;
      // Prevent negative likes
      if (likes[0].count === 0 && increment === -1) {
        currentCount = 0;
      } else {
        await db.update(PageLikes)
          .set({ count: sql`count + ${increment}` })
          .where(eq(PageLikes.slug, slug));
        currentCount = likes[0].count + increment;
      }
    }

    return new Response(JSON.stringify({ likes: currentCount }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error(e);
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) return new Response('Missing slug', { status: 400 });

  try {
    const likes = await db.select().from(PageLikes).where(eq(PageLikes.slug, slug));
    const currentCount = likes.length > 0 ? likes[0].count : 0;

    return new Response(JSON.stringify({ likes: currentCount }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error(e);
    return new Response('Internal Server Error', { status: 500 });
  }
};
