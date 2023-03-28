"use client";

import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import BarkWizardForm from "./BarkWizardForm";
import { useSession } from "next-auth/react";

const BarkDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data: session } = useSession();

  return (
    <Dialog onOpenChange={(o) => setOpen(o)} open={open}>
      <DialogTrigger className="text-center w-full py-4 bg-indigo-600 hover:bg-indigo-700 duration-150 text-white font-semibold rounded-full">
        Bark
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What do you bark for?</DialogTitle>
        </DialogHeader>
        <BarkWizardForm
          textareaClassName="min-h-[6rem] text-slate-600"
          session={session}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BarkDialog;
