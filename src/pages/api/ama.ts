import type { APIRoute } from 'astro';
import { db, AMAQuestions } from 'astro:db';
import { nanoid } from 'nanoid';

export const prerender = false;

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

    await db.insert(AMAQuestions).values({
      id: nanoid(),
      name: name.trim().slice(0, 80),
      question: question.trim(),
      answer: null,
      answered: false,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('AMA POST error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// GET /api/ama — return all answered questions
export const GET: APIRoute = async () => {
  try {
    const questions = await db
      .select()
      .from(AMAQuestions)
      .orderBy(AMAQuestions.createdAt);

    return new Response(JSON.stringify(questions), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
