"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Visitor {
  id: string;
  city: string;
  country: string;
  region: string;
  firstVisit: string;
  lastVisit: string;
  visits: number;
}

export default function AdminPage() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/visitors")
      .then((res) => res.json())
      .then((data) => {
        setVisitors(data.visitors || []);
        setCount(data.count || 0);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-900 dark:text-[#ededed] bg-transparent relative z-10">
        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Loading visitor data...</span>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-gray-900 dark:text-[#ededed] bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-500 dark:text-green-400">Visitor Analytics</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {count} unique visitor{count !== 1 ? "s" : ""} tracked
            </p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 border border-gray-400 dark:border-gray-700 rounded-lg text-sm font-semibold
              hover:border-green-500 dark:hover:border-green-400 transition-colors"
          >
            ← Portfolio
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-5">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Total Unique</p>
            <p className="text-3xl font-bold text-green-500 dark:text-green-400">{count}</p>
          </div>
          <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-5">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Countries</p>
            <p className="text-3xl font-bold text-green-500 dark:text-green-400">
              {new Set(visitors.map((v) => v.country)).size}
            </p>
          </div>
          <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-5">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Cities</p>
            <p className="text-3xl font-bold text-green-500 dark:text-green-400">
              {new Set(visitors.map((v) => v.city)).size}
            </p>
          </div>
        </div>

        {/* Visitor Table */}
        <div className="border border-gray-300 dark:border-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-[#111]">
                  <th className="text-left px-4 py-3 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">#</th>
                  <th className="text-left px-4 py-3 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Location</th>
                  <th className="text-left px-4 py-3 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Country</th>
                  <th className="text-left px-4 py-3 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">First Visit</th>
                  <th className="text-left px-4 py-3 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Last Visit</th>
                  <th className="text-right px-4 py-3 text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Visits</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((visitor, i) => (
                  <tr
                    key={visitor.id}
                    className="border-b border-gray-200 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-[#111] transition-colors"
                  >
                    <td className="px-4 py-3 text-gray-400 dark:text-gray-600">{i + 1}</td>
                    <td className="px-4 py-3">
                      <span className="text-gray-800 dark:text-gray-200">
                        {visitor.city}
                        {visitor.region ? `, ${visitor.region}` : ""}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{visitor.country}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{formatDate(visitor.firstVisit)}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-400 text-xs">{formatDate(visitor.lastVisit)}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                        {visitor.visits}
                      </span>
                    </td>
                  </tr>
                ))}
                {visitors.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-400 dark:text-gray-600">
                      No visitors tracked yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
