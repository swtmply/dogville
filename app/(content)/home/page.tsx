import { prisma } from "../../../lib/db";
import BarkWizard from "@/components/fragments/BarkWizard";
import Barks from "@/components/fragments/Barks";

const HomePage = async () => {
  const barks = await prisma.bark.findMany({
    take: 10,
    include: { author: true },
  });

  return (
    <div className="border-x border-slate-200 min-h-full">
      <div className="p-4 border-b border-slate-200">
        <h4 className="font-semibold">Home</h4>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <BarkWizard />
      <Barks barks={barks} />
    </div>
  );
};

export default HomePage;
