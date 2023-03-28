import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import BarkWizardForm from "./BarkWizardForm";

const BarkWizard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="px-4 py-2 border-b border-b-slate-200 flex gap-2 w-full">
      <Image
        src={session?.user?.image || ""}
        alt={`${session?.user?.name}'s picture`}
        width={48}
        height={48}
        className="rounded-full max-h-12"
      />
      <BarkWizardForm session={session} />
    </div>
  );
};

export default BarkWizard;
