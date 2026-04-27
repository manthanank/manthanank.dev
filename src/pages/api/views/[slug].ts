export const prerender = false;
import { db, PageViews, eq, sql } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) return new Response('Missing slug', { status: 400 });

  try {
    // Check if view exists
    const views = await db.select().from(PageViews).where(eq(PageViews.slug, slug));
    
    let currentCount = 0;
    if (views.length === 0) {
      await db.insert(PageViews).values({ slug, count: 1 });
      currentCount = 1;
    } else {
      await db.update(PageViews)
        .set({ count: sql`count + 1` })
        .where(eq(PageViews.slug, slug));
      currentCount = views[0].count + 1;
    }

    return new Response(JSON.stringify({ views: currentCount }), {
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
    const views = await db.select().from(PageViews).where(eq(PageViews.slug, slug));
    const currentCount = views.length > 0 ? views[0].count : 0;

    return new Response(JSON.stringify({ views: currentCount }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error(e);
    return new Response('Internal Server Error', { status: 500 });
  }
};
