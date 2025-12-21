'use client';

import { useEffect, useState } from 'react';

export function Timer() {
  const [totalMinutes, setTotalMinutes] = useState(0);

  useEffect(() => {
    // Start date: March 23, 2004 at 12:25
    const startDate = new Date('2004-03-23T12:25:00');

    const calculateElapsed = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      // Calculate total minutes
      const minutes = Math.floor(diff / (1000 * 60));
      
      setTotalMinutes(minutes);
    };

    // Calculate immediately on mount
    calculateElapsed();

    // Update every second for real-time display
    const interval = setInterval(() => {
      calculateElapsed();
    }, 1000);

    // Cleanup interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-center py-2 border-t border-gray-300 dark:border-gray-800">
      
      <div className="flex items-center justify-center">
        <span className="text-lg md:text-1xl font-light font-mono text-green-500 dark:text-green-400">
          {totalMinutes.toLocaleString()} aim
        </span>
      </div>
    </div>
  );
}

