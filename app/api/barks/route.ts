import { NextRequest, NextResponse } from "next/server";
import { getBarks } from "@/lib/requests/barks";

export async function GET(request: NextRequest) {
  const response = await getBarks({
    limit: 5,
  });

  return NextResponse.json({ response });
}
