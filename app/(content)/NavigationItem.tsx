import React from "react";
import Link from "next/link";
import { NavigationItemProps } from "@/lib/navigation-items";

export function NavigationItem(props: NavigationItemProps) {
  return (
    <Link
      href={props.href}
      className="flex gap-4 items-center text-xl px-4 py-4 hover:bg-slate-200 rounded-full"
    >
      {/* Navigation Icon */}

      <div className="w-6 h-6">{props.icon}</div>
      {/* Navigation Label */}
      <span className="capitalize">{props.label}</span>
    </Link>
  );
}
