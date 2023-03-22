"use client";
import { SearchIcon } from "lucide-react";

export function Aside() {
  return (
    <div className="py-4">
      <div className="flex w-52 rounded-full bg-slate-200 gap-2 p-4">
        <SearchIcon className="w-6 h-6" />
        <span>Search Dogville</span>
      </div>
    </div>
  );
}
