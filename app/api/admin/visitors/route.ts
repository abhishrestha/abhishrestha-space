import { NextResponse } from "next/server";
import { redis } from "@/app/lib/redis";

interface VisitorData {
  city: string;
  country: string;
  region: string;
  firstVisit: string;
  lastVisit: string;
  visits: number;
}

export async function GET() {
  try {
    const allVisitors = await redis.hgetall("visitors");
    const count = (await redis.get("visitor_count")) || 0;

    if (!allVisitors) {
      return NextResponse.json({ count: 0, visitors: [] });
    }

    const visitors = Object.entries(allVisitors).map(([id, raw]) => {
      const data: VisitorData =
        typeof raw === "string" ? JSON.parse(raw) : (raw as VisitorData);
      return {
        id: id.slice(0, 8) + "...",
        city: data.city,
        country: data.country,
        region: data.region,
        firstVisit: data.firstVisit,
        lastVisit: data.lastVisit,
        visits: data.visits,
      };
    });

    // Sort by most recent visit
    visitors.sort(
      (a, b) =>
        new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime()
    );

    return NextResponse.json({ count: Number(count), visitors });
  } catch (error) {
    console.error("Admin visitors error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
