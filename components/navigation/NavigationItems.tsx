"use client";

import { navigationItems } from "@/lib/navigation-items";
import React from "react";
import NavigationItem from "./NavigationItem";
import BarkDialog from "../fragments/BarkDialog";

const NavigationItems = () => {
  return (
    <div className="flex flex-col gap-2">
      {navigationItems.map((item) => (
        <NavigationItem {...item} key={item.href} />
      ))}
      <BarkDialog />
    </div>
  );
};

export default NavigationItems;
