import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Button from "../ui/button";
import { Textarea } from "../ui/textarea";

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
        <Textarea
          placeholder="What we feeling today?"
          className="px-4 h-32"
          maxLength={256}
        />
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-full font-semibold">
          Bark
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default BarkDialog;
