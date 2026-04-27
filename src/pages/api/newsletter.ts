export const prerender = false;
import { db, Subscribers } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const email = body.email;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
    }

    // Generate unique ID
    const id = crypto.randomUUID();

    await db.insert(Subscribers).values({ id, email }).onConflictDoNothing();

    try {
      const resendApiKey = import.meta.env.RESEND_API_KEY;
      if (resendApiKey) {
        const { Resend } = await import('resend');
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: 'Manthan Ankolekar <hello@manthanank.dev>',
          to: email,
          subject: 'Welcome to my Newsletter!',
          html: '<p>Hi there,</p><p>Thanks for subscribing to my newsletter! I will occasionally share my latest projects, articles, and technical deep-dives with you.</p><p>Best,<br>Manthan</p>'
        });
      }
    } catch (e) {
      console.warn('Failed to send welcome email', e);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
