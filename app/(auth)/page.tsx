"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center gap-4 pl-12">
      <h1 className="text-lg font-bold">Login</h1>
      <button
        onClick={() =>
          signIn("discord", {
            callbackUrl: "/home",
            redirect: true,
          })
        }
        className="flex gap-4 px-4 py-2 rounded bg-indigo-700 text-white hover:ring-1 ring-indigo-700 ring-offset-2"
      >
        <Image width={24} height={24} src="discord.svg" alt="discord icon" />
        <span>Login with Discord</span>
      </button>
    </div>
  );
};

export default LoginPage;
