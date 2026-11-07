import type { APIRoute } from 'astro';
import { db, AMAQuestions, sql } from 'astro:db';
import { nanoid } from 'nanoid';

export const prerender = false;

async function ensureTable() {
  try {
    await db.run(sql`CREATE TABLE IF NOT EXISTS AMAQuestions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      question TEXT NOT NULL,
      answer TEXT,
      answered INTEGER DEFAULT 0,
      createdAt TEXT NOT NULL
    )`);
  } catch (err) {
    console.warn('ensureTable warning:', err);
  }
}

// POST /api/ama — submit a new question
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, question } = body || {};

    if (!name?.trim() || !question?.trim()) {
      return new Response(JSON.stringify({ error: 'Name and question are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (question.trim().length > 1000) {
      return new Response(JSON.stringify({ error: 'Question must be under 1000 characters.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await ensureTable();

    await db.insert(AMAQuestions).values({
      id: nanoid(),
      name: name.trim().slice(0, 80),
      question: question.trim(),
      answer: null,
      answered: false,
      createdAt: new Date(),
    });

    try {
      const resendApiKey = import.meta.env.RESEND_API_KEY;
      if (resendApiKey) {
        const { Resend } = await import('resend');
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: 'AMA <hello@manthanank.dev>',
          to: 'manthan.ank46@gmail.com',
          subject: `New AMA Question from ${name.trim()}`,
          text: `Name: ${name.trim()}\nQuestion: ${question.trim()}`,
        });
      }
    } catch (emailErr) {
      console.warn('Failed to send notification email', emailErr);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('AMA POST error:', err);
    return new Response(JSON.stringify({ error: err?.message || 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// GET /api/ama — return all answered questions
export const GET: APIRoute = async () => {
  try {
    await ensureTable();

    const questions = await db
      .select()
      .from(AMAQuestions)
      .orderBy(AMAQuestions.createdAt);

    return new Response(JSON.stringify(questions), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || 'Internal server error.', questions: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
