"use client";
import React from "react";
import NavigationItem from "./NavigationItem";
import BarkDialog from "../fragments/BarkDialog";
import { Bell, Bookmark, Home, MessageCircle, User } from "lucide-react";

export interface NavigationItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const navigationItems: NavigationItemProps[] = [
  {
    href: "/home",
    label: "home",
    icon: <Home size={24} />,
  },
  {
    href: "/notifications",
    label: "notifications",
    icon: <Bell size={24} />,
  },
  {
    href: "/messages",
    label: "messages",
    icon: <MessageCircle size={24} />,
  },
  {
    href: "/bookmarks",
    label: "bookmarks",
    icon: <Bookmark size={24} />,
  },
  {
    href: "/profile",
    label: "profile",
    icon: <User size={24} />,
  },
];

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
