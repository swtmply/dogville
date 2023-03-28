import Navigation from "../../components/navigation/Navigation";
import { Aside } from "../../components/fragments/Aside";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen justify-center bg-slate-100">
      <main className="min-w-[1280px] min-h-screen flex justify-between relative gap-2">
        {/* @ts-expect-error Async Server Component */}
        <Navigation />
        <div className="max-w-2xl grow min-h-screen">{children}</div>
        <Aside />
      </main>
    </div>
  );
};

export default ContentLayout;
