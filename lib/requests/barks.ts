import { Bark } from "@prisma/client";
import { prisma } from "../db";

export type BarkWithUserId = Bark & { authorId: string };

export async function getBarks({
  cursor,
  limit,
}: {
  cursor?: string;
  limit?: number;
}) {
  try {
    const barks = await prisma.bark.findMany({
      take: limit,
      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,
      orderBy: { createdAt: "desc" },
      include: { author: true },
    });

    return { barks, nextId: barks[barks.length - 1]?.id };
  } catch (error) {
    return { error };
  }
}

export async function createBark(barkWithUserId: BarkWithUserId) {
  try {
    await prisma.bark.create({
      data: barkWithUserId,
    });

    return { message: "Bark Created Successfully" };
  } catch (error) {
    return { error };
  }
}
