"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/track", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {
        fetch("/api/visitors")
          .then((res) => res.json())
          .then((data) => setCount(data.count))
          .catch(() => setCount(0));
      });
  }, []);

  return (
    <Link
      href="/admin"
      className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm 
        hover:text-green-500 dark:hover:text-green-400 transition-colors mx-auto cursor-pointer"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128H5.228A2 2 0 013 17.208V17.13a4.125 4.125 0 017.533-2.493m4.467 4.49a6.965 6.965 0 01-4.467-4.49M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
      <span>
        {count === null ? (
          <span className="inline-block w-8 h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        ) : (
          <>{count.toLocaleString()} unique visitor{count !== 1 ? "s" : ""}</>
        )}
      </span>
    </Link>
  );
}
