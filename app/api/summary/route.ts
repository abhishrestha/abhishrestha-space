import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PROFILE_CONTEXT = `
Name: Abhishrestha Tiwari
Portfolio: abhishrestha

EXPERIENCE:
1. Technical Content Writer Intern at Scaler (May 2025 – Present, Remote)
   - Documented over 1000+ interview experiences across various software engineering domains to support 5,000+ learners.
   - Enhanced Scaler's learning platform by refining modules on system design, data structures, and core tech concepts.
   - Curated and added 2,500+ coding and problem-solving questions to the companion platform.

2. Software Engineer at Lumio (Aug 2025 – Sep 2025, San Francisco, CA, Remote)
   - Optimized React Native app performance by refactoring heavy UI renders to FlatList, memoizing callbacks, and debouncing API calls.
   - Improved app stability by fixing repeated useEffect executions, interval leaks, and state synchronization issues.
   - Enhanced accessibility and UX across chat, meals, steps, and health tracking modules.

3. React Native Developer at TechInstance (Mar 2025 – Apr 2025, Remote)
   - Implemented 7 production screens and 15 reusable components, boosting code-reuse by 40%.
   - Integrated Google Maps + H3 geospatial indexing; improved pickup-ETA accuracy from ±900m to ±85m and cut Maps-API spend by 22%.

PROJECTS:
1. Spectra — FastAPI, Python, LangChain, LangGraph, PostgreSQL, Supabase, Next.js, React, TypeScript
   - Full-stack generative AI backend with LangGraph for multi-turn conversation orchestration.
   - RAG workflows with Tavily web search, real-time SSE streaming, Google OAuth 2.0.

2. Trackify — React Native, Expo, Firebase, JavaScript
   - Tiffin subscription management app for campus students.
   - Cron-based scheduling, Firestore caching (90% latency reduction).

3. AI-Powered Speech Analysis — React, Firebase Auth, Web Speech API, Gemini API, Google Cloud
   - Browser-based speech analysis with real-time pronunciation/tone/delivery insights.
   - Enhanced feedback precision by 50%.

TECHNICAL SKILLS:
Languages: JavaScript, TypeScript, Python, C++, Java, SQL, HTML, CSS
Frontend: React, React Native, Next.js, Redux, Tailwind CSS, Material-UI
Backend: Node.js, Express.js, FastAPI, RESTful APIs
AI/ML: LangChain, LangGraph, OpenAI API, Gemini API, RAG
Databases: PostgreSQL, Firebase, Firestore, Supabase, MongoDB
DevOps & Tools: Git, GitHub, Docker, Postman, VS Code
Cloud & Services: Google Cloud Platform, Firebase Auth, OAuth 2.0, Supabase

COMPETITIVE PROGRAMMING:
- LeetCode: Solved 400+ algorithmic problems across arrays, strings, trees, graphs, dynamic programming, and system design. Contest rating: 1601 (Top 15%).
- Codeforces: Achieved Pupil rank with maximum rating of 1309. Participated in 50+ contests solving algorithmic challenges. Solved more than 500+ problems on Codeforces.
- CodeChef: Ranked 187th globally out of 35,000+ participants in Starters 154 competition. Strong problem-solving skills in data structures and algorithms.
`;

export async function POST() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a concise professional profile summarizer. Summarize this developer's profile as exactly 6 bullet points. Each bullet should be one punchy sentence — specific, impressive, and genuine. Use a dash (-) at the start of each bullet. Do NOT write any intro or outro text, just the 6 bullets. Write in third person.",
        },
        {
          role: "user",
          content: `Summarize this developer profile:\n\n${PROFILE_CONTEXT}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 250,
    });

    const summary = completion.choices[0]?.message?.content ?? "Could not generate summary.";

    return NextResponse.json({ summary });
  } catch (error: unknown) {
    console.error("OpenAI API error:", error);
    const message = error instanceof Error ? error.message : "Failed to generate summary";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
