import { NextResponse } from 'next/server';

import { getLocalBotResponse, RESUME_CONTEXT } from '@/data';

const SYSTEM_PROMPT = `You are Biruk Lemma's official AI Portfolio Assistant.
Your goal is to answer questions from recruiters, clients, and visitors warmly, concisely, and professionally.

Here is Biruk's official background information:
- Name: ${RESUME_CONTEXT.name}
- Title: ${RESUME_CONTEXT.title}
- Location: ${RESUME_CONTEXT.location}
- Email: ${RESUME_CONTEXT.email}
- Phone: ${RESUME_CONTEXT.phone}
- Resume PDF: ${RESUME_CONTEXT.resumeUrl}
- GitHub: ${RESUME_CONTEXT.socials.github}
- LinkedIn: ${RESUME_CONTEXT.socials.linkedin}
- Upwork: ${RESUME_CONTEXT.socials.upwork}

Bio & Summary:
${RESUME_CONTEXT.bio}

Tech Stack:
${RESUME_CONTEXT.techStack.join(', ')}

Projects:
${RESUME_CONTEXT.projects.map(p => `- ${p.name}: ${p.summary}`).join('\n')}

Guidelines:
1. Always maintain a helpful, friendly, and professional software engineering tone.
2. Keep answers concise (2-4 bullet points or short paragraphs).
3. If asked how to contact or hire Biruk, provide email (${RESUME_CONTEXT.email}) and phone (${RESUME_CONTEXT.phone}) and LinkedIn link.
4. If asked about resume, mention the download link (${RESUME_CONTEXT.resumeUrl}).
5. Never invent false qualifications or projects outside of what is provided above.`;

export async function POST(req) {
  try {
    const body = await req.json();
    const { messages, prompt } = body;

    const userPrompt =
      prompt ||
      (Array.isArray(messages) && messages.length > 0
        ? messages[messages.length - 1].content
        : '');

    if (!userPrompt || typeof userPrompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt message is required.' },
        { status: 400 },
      );
    }

    // 1. Try Google Gemini API if key is present
    const geminiKey = process.env.GEMINI_API_KEY;
    if (geminiKey) {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [
                    { text: SYSTEM_PROMPT },
                    { text: `User question: ${userPrompt}` },
                  ],
                },
              ],
              generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7,
              },
            }),
          },
        );

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            return NextResponse.json({ text, source: 'gemini' });
          }
        }
      } catch (err) {
        console.warn(
          'Gemini API call failed, falling back to local engine:',
          err,
        );
      }
    }

    // 2. Try OpenAI API if key is present
    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey) {
      try {
        const openaiRes = await fetch(
          'https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${openaiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: userPrompt },
              ],
              max_tokens: 500,
              temperature: 0.7,
            }),
          },
        );

        if (openaiRes.ok) {
          const data = await openaiRes.json();
          const text = data?.choices?.[0]?.message?.content;
          if (text) {
            return NextResponse.json({ text, source: 'openai' });
          }
        }
      } catch (err) {
        console.warn(
          'OpenAI API call failed, falling back to local engine:',
          err,
        );
      }
    }

    // 3. Fallback to Local AI Response Engine
    const fallbackText = getLocalBotResponse(userPrompt);
    return NextResponse.json({ text: fallbackText, source: 'local' });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 },
    );
  }
}
