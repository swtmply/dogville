"use client";

import { navigationItems } from "@/lib/navigation-items";
import React from "react";
import NavigationItem from "./NavigationItem";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import Button from "../ui/button";

const NavigationItems = () => {
  return (
    <div className="flex flex-col gap-2">
      {navigationItems.map((item) => (
        <NavigationItem {...item} key={item.href} />
      ))}
      {/* Bark Button */}
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
    </div>
  );
};

export default NavigationItems;
