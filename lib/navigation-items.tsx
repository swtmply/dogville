import {
  BellIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export interface NavigationItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const navigationItems: NavigationItemProps[] = [
  {
    href: "/home",
    label: "home",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    href: "/notifications",
    label: "notifications",
    icon: <BellIcon className="w-6 h-6" />,
  },
  {
    href: "/messages",
    label: "messages",
    icon: <ChatBubbleBottomCenterIcon className="w-6 h-6" />,
  },
  {
    href: "/bookmarks",
    label: "bookmarks",
    icon: <BookmarkIcon className="w-6 h-6" />,
  },
  {
    href: "/profile",
    label: "profile",
    icon: <UserIcon className="w-6 h-6" />,
  },
];
