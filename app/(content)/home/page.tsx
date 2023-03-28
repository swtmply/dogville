import BarkWizard from "@/components/fragments/BarkWizard";
import Barks from "@/components/fragments/Barks";

const HomePage = async () => {
  return (
    <div className="border-x border-slate-200 min-h-full flex flex-col">
      <div className="p-4 border-b border-slate-200">
        <h4 className="font-semibold">Home</h4>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <BarkWizard />
      <Barks />
    </div>
  );
};

export default HomePage;
