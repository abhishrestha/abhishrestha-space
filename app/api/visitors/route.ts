import { NextResponse } from "next/server";
import { redis } from "@/app/lib/redis";

export async function GET() {
  try {
    const count = (await redis.get("visitor_count")) || 0;
    return NextResponse.json({ count: Number(count) });
  } catch (error) {
    console.error("Visitors count error:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
