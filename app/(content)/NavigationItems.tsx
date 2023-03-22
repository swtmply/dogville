"use client";
import { navigationItems } from "@/lib/navigation-items";
import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => {
  return (
    <div className="flex flex-col gap-2">
      {navigationItems.map((item) => (
        <NavigationItem {...item} key={item.href} />
      ))}
      {/* Bark Button */}
      <button className="text-center w-full py-4 bg-indigo-600 hover:bg-indigo-700 duration-150 text-white font-semibold rounded-full">
        Bark
      </button>
    </div>
  );
};

export default NavigationItems;
