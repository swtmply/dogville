import Navigation from "./Navigation";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen min-h-screen justify-center bg-slate-100">
      <main className="min-w-[70%] min-h-screen flex">
        {/* @ts-expect-error Async Server Component */}
        <Navigation />
        {children}
      </main>
    </div>
  );
};

export default ContentLayout;
