import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home");

  return (
    <div className="min-h-screen w-screen flex">
      {/* TODO Add pubmat */}
      <div className="w-7/12 bg-slate-100 relative">
        <Image
          src="/dogville-splash.png"
          fill={true}
          alt="Dogville Splash Art"
          className="object-cover"
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
