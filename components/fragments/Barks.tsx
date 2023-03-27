"use client";

import { Bark, User } from "@prisma/client";
import Image from "next/image";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// TODO add inifinite query
import { useInfiniteQuery } from "@tanstack/react-query";

type barksWithUser = (Bark & {
  author: User;
})[];

const Barks = ({ barks }: { barks: barksWithUser }) => {
  return (
    <>
      {[...barks, ...barks].map((bark) => (
        <div key={bark.id} className="flex gap-2 p-4 border-b border-slate-200">
          <Image
            src={bark.author.image || ""}
            alt={`${bark.author.name}'s picture`}
            width={48}
            height={48}
            className="rounded-full max-h-12"
          />
          <div>
            <div className="text-slate-500 flex gap-1 text-sm">
              <span>{`${bark.author.name}#${bark.author.tag}`}</span>
              <span>·</span>
              <span>{dayjs(bark.createdAt).fromNow()}</span>
            </div>
            <span>{bark.content}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Barks;
