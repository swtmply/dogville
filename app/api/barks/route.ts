import { NextRequest, NextResponse } from "next/server";
import { BarkWithUserId, createBark, getBarks } from "@/lib/requests/barks";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const cursor = searchParams.get("cursor") ?? undefined;
  const limit = searchParams.get("limit") ?? 10;

  const response = await getBarks({
    limit: Number(limit),
    cursor,
  });

  return NextResponse.json({ ...response });
}

export async function POST(request: NextRequest) {
  const barkRequest = (await request.json()) as BarkWithUserId;

  await createBark(barkRequest);

  return new Response("Bark created successfully");
}
