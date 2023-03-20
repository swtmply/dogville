"use client";

import React from "react";
import { signIn, useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button
        className="text-white px-4 py-2 bg-red-600 rounded-md"
        onClick={() => signIn("discord")}
      >
        Sign in
      </button>
    </div>
  );
};

export default HomePage;
