import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://links.hv6.dev/api/codeforces/abhishrestha', {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Codeforces data');
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching Codeforces data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Codeforces data' },
      { status: 500 }
    );
  }
}

