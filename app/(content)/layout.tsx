import Navigation from "./Navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen min-h-screen justify-center bg-slate-100">
      <main className="min-w-[60%] min-h-screen flex justify-between">
        {/* @ts-expect-error Async Server Component */}
        <Navigation />
        <div className="max-w-2xl grow min-h-screen">{children}</div>
        {/* TODO Add aside */}
        <div className="py-4">
          <div className="flex w-52 rounded-full bg-slate-200 gap-2 p-4">
            <MagnifyingGlassIcon className="w-6 h-6" />
            <span>Search Dogville</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContentLayout;
