'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface LeetCodeData {
  solvedString: string;
  maxRating: number;
  topPercentage: number;
  lastSubmission: string;
  lastSubmissionTime: string;
}

interface CodeforcesData {
  maxRatingWithRank: string;
  totalSolved: number;
  friendsCount: number;
  bestContest: string;
  bestRank: number;
  lastSubmission: {
    title: string;
    timestamp: string;
  };
}

export function Achievements() {
  const [leetcodeData, setLeetcodeData] = useState<LeetCodeData | null>(null);
  const [codeforcesData, setCodeforcesData] = useState<CodeforcesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Add timeout to fetch requests
        // Use Next.js API routes to avoid CORS issues
        const [leetcodeResponse, codeforcesResponse] = await Promise.allSettled([
          fetch('/api/leetcode'),
          fetch('/api/codeforces'),
        ]);

        // Handle LeetCode response
        if (leetcodeResponse.status === 'fulfilled' && leetcodeResponse.value.ok) {
          try {
            const leetcode = await leetcodeResponse.value.json();
            if (leetcode.error) {
              console.warn('LeetCode API error:', leetcode.error);
            } else {
              setLeetcodeData(leetcode);
            }
          } catch (parseError) {
            console.error('Error parsing LeetCode data:', parseError);
          }
        } else {
          const reason = leetcodeResponse.status === 'rejected' 
            ? leetcodeResponse.reason 
            : leetcodeResponse.value.statusText || 'Response not OK';
          console.warn('Failed to fetch LeetCode data:', reason);
        }

        // Handle Codeforces response
        if (codeforcesResponse.status === 'fulfilled' && codeforcesResponse.value.ok) {
          try {
            const codeforces = await codeforcesResponse.value.json();
            if (codeforces.error) {
              console.warn('Codeforces API error:', codeforces.error);
            } else {
              setCodeforcesData(codeforces);
            }
          } catch (parseError) {
            console.error('Error parsing Codeforces data:', parseError);
          }
        } else {
          const reason = codeforcesResponse.status === 'rejected' 
            ? codeforcesResponse.reason 
            : codeforcesResponse.value.statusText || 'Response not OK';
          console.warn('Failed to fetch Codeforces data:', reason);
        }
      } catch (err) {
        console.error('Error fetching achievements:', err);
        setError('Failed to load achievements data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (timestamp: string) => {
    try {
      const date = new Date(parseInt(timestamp) * 1000);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    } catch {
      return 'Recently';
    }
  };

  const formatCodeforcesDate = (timestamp: string) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    } catch {
      return 'Recently';
    }
  };

  if (loading) {
    return (
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-green-500 dark:text-green-400">programming achievements</h2>
        <div className="space-y-4">
          <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-4">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
          <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-4">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-6 text-green-500 dark:text-green-400">programming achievements</h2>
      <div className="space-y-4">
        {/* LeetCode */}
        <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-4 hover:border-green-500/50 dark:hover:border-green-400/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">LeetCode</h3>
              {leetcodeData ? (
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="font-medium">Solved:</span> {leetcodeData.solvedString}
                  </p>
                  <p>
                    <span className="font-medium">Contest Rating:</span> {Math.round(leetcodeData.maxRating)} (Top {leetcodeData.topPercentage.toFixed(1)}%)
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Last solved:</span> {leetcodeData.lastSubmission} ({formatDate(leetcodeData.lastSubmissionTime)})
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-700 dark:text-gray-300">Solved 400+ problems; contest rating 1601</p>
              )}
            </div>
            <Link 
              href="https://leetcode.com/u/abhishrestha" 
              target="_blank"
              className="text-green-500 dark:text-green-400 hover:underline text-sm ml-4"
            >
              Profile →
            </Link>
          </div>
        </div>

        {/* Codeforces */}
        <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-4 hover:border-green-500/50 dark:hover:border-green-400/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Codeforces</h3>
              {codeforcesData ? (
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="font-medium">Max Rating:</span> {codeforcesData.maxRatingWithRank}
                  </p>
                  <p>
                    <span className="font-medium">Problems Solved:</span> {codeforcesData.totalSolved}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Last solved:</span> {codeforcesData.lastSubmission.title} ({formatCodeforcesDate(codeforcesData.lastSubmission.timestamp)})
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-700 dark:text-gray-300">Achieved Pupil rank; max rating 1309</p>
              )}
            </div>
            <Link 
              href="https://codeforces.com/profile/abhishrestha" 
              target="_blank"
              className="text-green-500 dark:text-green-400 hover:underline text-sm ml-4"
            >
              Profile →
            </Link>
          </div>
        </div>

        {/* CodeChef - keeping static for now */}
        <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-4 hover:border-green-500/50 dark:hover:border-green-400/50 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">CodeChef</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Ranked 187th globally in Starters 154 (35k+ participants)</p>
            </div>
            <Link 
              href="https://codechef.com/users/abhishrestha" 
              target="_blank"
              className="text-green-500 dark:text-green-400 hover:underline text-sm"
            >
              Profile →
            </Link>
          </div>
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400 mt-2">{error}</p>
      )}
    </section>
  );
}

