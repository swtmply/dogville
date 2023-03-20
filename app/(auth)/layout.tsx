import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
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
