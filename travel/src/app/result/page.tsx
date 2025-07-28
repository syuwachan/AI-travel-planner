// Result display component
'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAnswerStore } from '@/store/useAnswerStore';
import { tagToDestinations } from '@/lib/tagToDestinations';

export default function ResultPage() {
  const { tags, reset } = useAnswerStore();
  const router = useRouter();

  // Redirect if accessed directly
  useEffect(() => {
    if (tags.length === 0) router.push('/');
  }, [tags]);

  // Count tags and get the most frequent one
  const dominantTag = useMemo(() => {
    const counts: Record<string, number> = {};
    tags.forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
  }, [tags]);

  const destinations = dominantTag ? tagToDestinations[dominantTag] : [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Your Recommended Destinations</h1>

      {dominantTag ? (
        <>
          <p className="mb-6 text-base sm:text-lg">Perfect destinations for {dominantTag} type travelers:</p>
          <ul className="space-y-3 mb-8">
            {destinations.map((place) => (
              <li key={place} className="text-xl sm:text-2xl font-semibold">
                🌟 {place}
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              reset();
              router.push('/question');
            }}
            className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
          >
            Take the Quiz Again
          </button>
        </>
      ) : (
        <p>No quiz data found. Please start over.</p>
      )}
    </div>
  );
}