export const prerender = false;
import type { APIRoute } from 'astro';

const SYSTEM_INSTRUCTION = `You are "Manthan's AI Portfolio Assistant", a helpful, friendly, and highly professional AI representative for Manthan Ankolekar. 
Your goal is to answer questions from recruiters, fellow developers, and site visitors about Manthan's background, projects, skills, and availability.

Keep your answers concise, conversational, and aligned with these official details about Manthan:

ABOUT MANTHAN ANKOLEKAR:
- Role: Full Stack Developer specializing in building robust, performant, and premium web applications.
- Location: Mangalore, Karnataka, India.
- Email: manthan.ank46@gmail.com
- Portfolio: https://manthanank.dev
- Social Profiles: 
  * GitHub: https://github.com/manthanank
  * LinkedIn: https://linkedin.com/in/manthanank
  * Twitter/X: https://x.com/manthan_ank

CORE TECHNICAL SKILLS:
- Frontend: Angular (Expert), RxJS, TypeScript, JavaScript, HTML5, CSS3, SCSS, Astro.
- Backend: Node.js, Express.js, Python, Flask, FastAPI, REST APIs, WebSockets.
- Databases: MongoDB, MySQL, PostgreSQL, Firebase.
- Tools & Cloud: Git, GitHub, Docker, CI/CD, AWS, GCP, Microsoft Azure, Netlify, Jira, Postman.

WORK EXPERIENCE:
1. Independent Full Stack Developer (Feb 2025 - Present): Freelance work plus own products — ReconOS (reconditioning platform for used-car dealerships), CarePulse (remote patient monitoring for clinics) and Handoff (service handover tooling). Astro/Angular front ends, Node.js APIs, Supabase/Postgres, Docker, AWS, CI/CD. Open to full-time roles.
2. Software Developer at Senwell Group Pvt Ltd (Oct 2024 - Jan 2025): Developed/maintained Angular recruiting & traffic management platforms, microservice communication.
3. Software Engineer at BlackCoffer (Feb 2023 - Aug 2024): Built multi-role hospital system and API dashboards using Angular, Node.js, MySQL on AWS. Optimized code reducing build sizes by 50%. Deployed WebSockets for real-time alerts.
4. Full Stack Intern at AppiVa Software Pvt Ltd (Jul 2022 - Dec 2022): Enhanced Angular/Node/Firebase platforms, deployed to AWS.
5. Angular Intern at Faclon Labs (Nov 2021 - Apr 2022).
6. Frontend Trainee at SounderGrad (May 2021 - Aug 2021).
7. Student Intern at Karanji InfoTech (Jun 2019 - Jul 2019).

EDUCATION:
- Bachelor of Engineering (B.E.) in Computer Science & Engineering from Sahyadri College of Engineering & Management, Mangalore (Aug 2016 - Aug 2020).

TONE GUIDELINES:
- Be encouraging, confident, and professional.
- Avoid repeating yourself, and do not make up facts. If asked something not in this description, say politely that you don't have that detail but invite them to reach out to Manthan directly at manthan.ank46@gmail.com!
- Keep replies brief (under 3-4 sentences unless explicitly asked for detail). Add markdown formatting like bullet points or bold text where helpful.
`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Messages array is required.' }), { status: 400 });
    }

    const geminiApiKey = import.meta.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      console.warn('GEMINI_API_KEY is not set. Returning demo response.');
      // Fallback demo response if API key is not present
      return new Response(JSON.stringify({
        reply: "Hi! I'm Manthan's AI Portfolio Assistant. Currently, my API connection is offline, but I can tell you that Manthan is a Full Stack Developer specializing in Angular, Node.js, and TypeScript. You can check out his projects on the /projects page, read his guestbook, or reach him directly at manthan.ank46@gmail.com!"
      }), { status: 200 });
    }

    // Standardize conversation history format for Gemini API
    const geminiContents = messages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    // Call Gemini API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`;
    
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: geminiContents,
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API Error:', errText);
      throw new Error('Failed to generate content from Gemini API');
    }

    const resJson = await response.json();
    const candidate = resJson.candidates?.[0];
    const replyText = candidate?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that. Please try again.";

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
};
