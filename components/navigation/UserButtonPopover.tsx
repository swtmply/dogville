"use client";

import Button from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, Settings } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface UserButtonProps {
  session: Session | null;
}

function UserButtonPopover(props: UserButtonProps) {
  return (
    <Popover>
      <PopoverTrigger className="text-slate-500 mt-auto flex gap-2 items-center hover:bg-slate-200 p-2 rounded-full duration-150">
        <Image
          src={props.session?.user?.image || ""}
          alt="user image"
          width={48}
          height={48}
          className="rounded-full"
        />
        {props.session?.user?.name}#{props.session?.user?.tag}
      </PopoverTrigger>
      <PopoverContent className="bg-slate-100 flex flex-col gap-2">
        <Button
          icon={<Settings />}
          className="flex gap-4 hover:bg-slate-200 p-4 rounded-full duration-150"
        >
          Settings
        </Button>
        <Button
          icon={<LogOut />}
          className="flex gap-4 hover:bg-slate-200 p-4 rounded-full duration-150"
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
        >
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export default UserButtonPopover;
