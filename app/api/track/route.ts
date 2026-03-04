import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/app/lib/redis";

export async function POST(req: NextRequest) {
  try {
    // Get visitor IP
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";

    // Get geo data from Vercel's headers (available on deployed functions)
    const city = req.headers.get("x-vercel-ip-city") || "Unknown";
    const country = req.headers.get("x-vercel-ip-country") || "Unknown";
    const region = req.headers.get("x-vercel-ip-country-region") || "";

    // Hash the IP for privacy
    const ipHash = Buffer.from(ip).toString("base64");

    // Check if this visitor already exists
    const exists = await redis.hexists("visitors", ipHash);

    if (!exists) {
      // Store visitor data
      const visitorData = JSON.stringify({
        city: decodeURIComponent(city),
        country,
        region,
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
        visits: 1,
      });

      await redis.hset("visitors", { [ipHash]: visitorData });
      await redis.incr("visitor_count");
    } else {
      // Update last visit and visit count
      const existing = await redis.hget("visitors", ipHash) as string;
      const data = JSON.parse(typeof existing === "string" ? existing : JSON.stringify(existing));
      data.lastVisit = new Date().toISOString();
      data.visits = (data.visits || 0) + 1;
      await redis.hset("visitors", { [ipHash]: JSON.stringify(data) });
    }

    const count = (await redis.get("visitor_count")) || 0;

    return NextResponse.json({ count: Number(count) });
  } catch (error) {
    console.error("Track error:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
