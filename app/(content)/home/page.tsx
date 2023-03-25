import Image from "next/image";
import { prisma } from "../../../lib/db";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import BarkWizard from "@/components/fragments/BarkWizard";
dayjs.extend(relativeTime);

const HomePage = async () => {
  const barks = await prisma.bark.findMany({
    take: 100,
    include: { author: true },
  });

  return (
    <div className="border-x border-slate-200 min-h-full">
      <div className="p-4 border-b border-slate-200">
        <h4 className="font-semibold">Home</h4>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <BarkWizard />
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
    </div>
  );
};

export default HomePage;
