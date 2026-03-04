"use client";

import { useState } from "react";

export function SummaryButton() {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSummarize = async () => {
    if (summary) {
      setOpen(true);
      return;
    }

    setLoading(true);
    setOpen(true);

    try {
      const res = await fetch("/api/summary", { method: "POST" });
      const data = await res.json();

      if (data.error) {
        setSummary("Oops — couldn't generate a summary right now. Try again later.");
      } else {
        setSummary(data.summary);
      }
    } catch {
      setSummary("Oops — something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleSummarize}
        disabled={loading}
        className="group relative px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 
          bg-gradient-to-r from-green-500 to-emerald-600 text-white 
          hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-green-500/25
          dark:from-green-400 dark:to-emerald-500 dark:text-black
          dark:hover:from-green-500 dark:hover:to-emerald-600
          disabled:opacity-70 disabled:cursor-wait
          inline-flex items-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Summarizing...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            AI Summary
          </>
        )}
      </button>

      {/* Summary Modal */}
      {open && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-xl border border-gray-300 dark:border-gray-700 
              bg-white dark:bg-[#111] p-6 shadow-2xl animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                <h3 className="text-lg font-bold text-green-500 dark:text-green-400">AI-Generated Summary</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition-colors text-xl leading-none"
              >
                ×
              </button>
            </div>

            {loading ? (
              <div className="flex items-center gap-3 py-8 justify-center text-gray-500 dark:text-gray-400">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Generating summary with AI...</span>
              </div>
            ) : (
              <ul className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm space-y-3">
                {summary
                  ?.split("\n")
                  .map((line) => line.replace(/^[-•*]\s*/, "").trim())
                  .filter((line) => line.length > 0)
                  .slice(0, 6)
                  .map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-500 dark:text-green-400 mt-0.5 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}
