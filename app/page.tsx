import Link from "next/link";
import { ThemeToggle } from "./components/ThemeToggle";
import { Achievements } from "./components/Achievements";
import { Timer } from "./components/Timer";
import { SummaryButton } from "./components/SummaryButton";
import { VisitorCounter } from "./components/VisitorCounter";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 dark:text-[#ededed] relative z-10 bg-transparent">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto px-6 pt-4 md:pt-6 relative z-10">
        <div className="flex justify-end mb-8 md:mb-12">
          <VisitorCounter />
        </div>
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-2xl font-bold text-black dark:text-black avatar-glow">
              a
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-3">abhishrestha</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <Link href="https://linkedin.com/in/abhishrestha-tiwari" target="_blank" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">
                  LinkedIn
                </Link>
                <Link href="https://github.com/abhishrestha" target="_blank" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">
                  GitHub
                </Link>
                <a href="mailto:abhishrestha.primary@gmail.com" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              i'm abhishrestha :)
            </p>
            <SummaryButton />
          </div>
        </section>

        {/* What I Do Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-2 text-green-500 dark:text-green-400">what i do</h2>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium mb-8 leading-snug">
            
          </p>

          {/* Experience */}
          <div className="space-y-6">
            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm mt-1">
                  S
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Technical Content Writer Intern</h3>
                    <span className="text-gray-400">•</span>
                    <Link href="https://www.linkedin.com/school/scalerofficial/posts/?feedView=all" target="_blank" className="text-green-500 dark:text-green-400 hover:underline">
                      Scaler
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">May 2025 – Present • Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Documented over 1000+ interview experiences across various software engineering domains to support 5,000+ learners. 
                    Enhanced Scaler's learning platform by refining modules on system design, data structures, and core tech concepts. 
                    Curated and added 2,500+ coding and problem-solving questions to the companion platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm mt-1">
                  L
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <span className="text-gray-400">•</span>
                    <Link href="https://www.linkedin.com/company/pmcprecisionco/posts/?feedView=all" target="_blank" className="text-green-500 dark:text-green-400 hover:underline">
                      Lumio
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Aug 2025 – Sep 2025 • San Francisco, CA • Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Optimized React Native app performance by refactoring heavy UI renders to `FlatList`, memoizing callbacks, 
                  and debouncing API calls to reduce re-renders and network overhead. Improved app stability by fixing repeated `useEffect` executions, interval leaks, and state synchronization issues. Enhanced accessibility with proper labels and improved UX through form validation and UI alignment fixes. Delivered scalable,
                  maintainable frontend improvements across chat, meals, steps, and health tracking modules.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-green-500 dark:border-green-400 pl-6 py-2 border-shimmer">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold text-sm mt-1">
                  T
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h3 className="text-xl font-semibold">React Native Developer</h3>
                    <span className="text-gray-400">•</span>
                    <Link href="https://www.linkedin.com/company/tech-instance/posts/?feedView=all" target="_blank" className="text-green-500 dark:text-green-400 hover:underline">
                      TechInstance
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mar 2025 – Apr 2025 • Remote</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Implemented 7 production screens and 15 reusable components, boosting code-reuse by 40% and shaving 1 sprint off release cycles. 
                    Integrated Google Maps + H3 geospatial indexing; improved pickup-ETA accuracy from ±900 m to ±85 m and cut Maps-API spend by 22%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-green-500 dark:text-green-400">projects</h2>
          <div className="space-y-6">
            <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-6 border-glow transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">Spectra</h3>
                <Link 
                  href="https://github.com/abhishrestha/spectra" 
                  target="_blank"
                  className="text-green-500 dark:text-green-400 hover:underline text-sm"
                >
                  GitHub →
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">FastAPI, Python, LangChain, LangGraph, PostgreSQL, Supabase, Next.js, React, TypeScript</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                Engineered full-stack generative AI backend using FastAPI and Python, integrating LangGraph framework
                for multi-turn conversation orchestration with persistent chat history and Supabase authentication.
              </p>
              <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                <li>Implemented advanced RAG workflows using Tavily web search API for real-time information retrieval, grounding AI responses with cited sources and enabling long-term memory replay across sessions</li>
                <li>Developed RESTful streaming chat APIs with user registration, session management, message persistence, and real-time SSE for streaming AI responses with source attributions</li>
                <li>Built responsive React/TypeScript frontend with Next.js, implementing session restoration, real-time backend sync, structured AI output rendering, and Google OAuth 2.0 authentication</li>
              </ul>
            </div>

            <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-6 border-glow transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">Trackify</h3>
                <Link 
                  href="https://github.com/abhishrestha/trackify" 
                  target="_blank"
                  className="text-green-500 dark:text-green-400 hover:underline text-sm"
                >
                  GitHub →
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">React Native, Expo, Firebase, JavaScript</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                Engineered a full-stack mobile application to streamline tiffin subscription management for campus students, 
                automating daily order tracking and payment workflows
              </p>
              <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                <li>Implemented a Cron-based scheduling system to improve user notifications</li>
                <li>Optimized Firestore queries and implemented local caching, reducing average order-fetch latency from 1.8s to 180ms (90% improvement)</li>
              </ul>
            </div>

            <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-6 border-glow transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">AI-Powered Speech Analysis</h3>
                <Link 
                  href="https://github.com/abhishrestha/ai-speech-analysis" 
                  target="_blank"
                  className="text-green-500 dark:text-green-400 hover:underline text-sm"
                >
                  GitHub →
                </Link>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">React, Firebase Auth, Web Speech API, Gemini API, Google Cloud</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                Developed an intelligent, browser-based speech analysis tool offering real-time insights on pronunciation, 
                tone, and delivery for speakers and presenters
              </p>
              <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                <li>Leveraged Google Cloud Speech-to-Text and Gemini API to quantify clarity, engagement, and delivery metrics</li>
                <li>Enhanced feedback precision by 50%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-green-500 dark:text-green-400">technical skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL", "HTML", "CSS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "React Native", "Next.js", "Redux", "Tailwind CSS", "Material-UI", "Responsive Design"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "FastAPI", "RESTful APIs"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">AI / ML</h3>
              <div className="flex flex-wrap gap-2">
                {["LangChain", "LangGraph", "OpenAI API", "Gemini API", "RAG"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Firebase", "Firestore", "Supabase", "MongoDB", "SQL Database Design"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Docker", "Postman", "VS Code"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">Cloud & Services</h3>
              <div className="flex flex-wrap gap-2">
                {["Google Cloud Platform", "Firebase Auth", "OAuth 2.0", "Supabase"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-300 border border-transparent skill-tag cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <Achievements />


        {/* Contact Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6 text-green-500 dark:text-green-400">get in touch</h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:abhishrestha.primary@gmail.com" 
              className="px-6 py-3 bg-green-500 dark:bg-green-400 text-white dark:text-black rounded-lg font-semibold hover:bg-green-600 dark:hover:bg-green-500 transition-colors inline-flex items-center gap-2 border-glow"
            >
              Email me
              <span>→</span>
            </a>
            <Link 
              href="https://linkedin.com/in/abhishrestha-tiwari" 
              target="_blank"
              className="px-6 py-3 border border-gray-400 dark:border-gray-700 rounded-lg font-semibold inline-flex items-center gap-2 border-glow"
            >
              LinkedIn
              <span>↗</span>
            </Link>
            <Link 
              href="https://github.com/abhishrestha" 
              target="_blank"
              className="px-6 py-3 border border-gray-400 dark:border-gray-700 rounded-lg font-semibold inline-flex items-center gap-2 border-glow"
            >
              GitHub
              <span>↗</span>
            </Link>
          </div>
        </section>

        {/* Timer */}
        <Timer />
        {/* Footer */}
        <footer className="pt-6 text-center text-sm text-gray-600 dark:text-gray-500 space-y-2">
          <p>© abhishrestha </p>
        </footer>
      </div>
    </main>
  );
}
