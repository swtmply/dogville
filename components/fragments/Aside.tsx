"use client";
import { Search } from "lucide-react";

export function Aside() {
  return (
    <div className="py-4">
      <div className="flex w-52 rounded-full bg-slate-200 gap-2 p-4">
        <Search size={24} />
        <span>Search Dogville</span>
      </div>
    </div>
  );
}
