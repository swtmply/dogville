import { prisma } from "../db";

export async function getBarks({
  cursor,
  limit = 100,
}: {
  cursor?: string;
  limit?: number;
}) {
  try {
    const barks = await prisma.bark.findMany({
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
    });

    return { barks, nextId: barks[barks.length - 1].id };
  } catch (error) {
    return { error };
  }
}
