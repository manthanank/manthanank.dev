export const prerender = false;
import { db, Guestbook as GuestbookTable } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message, 'bot-field': botField } = body;

    // Honeypot check
    if (botField) {
      return new Response(JSON.stringify({ error: 'Bot detected' }), { status: 400 });
    }

    if (!name || !message) {
      return new Response(JSON.stringify({ error: 'Name and message are required.' }), { status: 400 });
    }

    const id = crypto.randomUUID();
    const createdAt = new Date();

    // Insert into Astro DB
    await db.insert(GuestbookTable).values({
      id,
      name,
      email: email || null,
      message,
      createdAt,
    });

    // Send email notification via Resend
    try {
      const resendApiKey = import.meta.env.RESEND_API_KEY;
      if (resendApiKey) {
        const { Resend } = await import('resend');
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: 'Guestbook <hello@manthanank.dev>',
          to: 'manthan.ank46@gmail.com', // Admin email
          subject: `New Guestbook Entry from ${name}`,
          text: `Name: ${name}\nEmail: ${email || 'N/A'}\nMessage: ${message}`,
        });
      }
    } catch (emailErr) {
      console.warn('Failed to send notification email', emailErr);
    }

    return new Response(JSON.stringify({
      success: true,
      entry: {
        id,
        name,
        email,
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
