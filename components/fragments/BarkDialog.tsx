import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Button from "../ui/button";
import BarkWizardForm from "./BarkWizardForm";

const BarkDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-center w-full py-4 bg-indigo-600 hover:bg-indigo-700 duration-150 text-white font-semibold rounded-full">
        Bark
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What do you bark for?</DialogTitle>
        </DialogHeader>
        <BarkWizardForm textareaClassName="min-h-[6rem] text-slate-600" />
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-full font-semibold">
          Bark
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default BarkDialog;
