import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import UserButtonPopover from "./UserButtonPopover";
import NavigationItems from "./NavigationItems";

const BrandLogo = () => {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 708 679"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M665.862 625.148L708 679H272.58C306.29 624.68 297.55 590.808 288.966 580.662C277.731 561.931 209.373 572.857 176.599 580.662C99.8137 595.647 49.4059 536.956 33.8001 505.738L17.4122 475.3C-6.93393 460.315 -0.535265 437.838 5.70734 428.472C129.311 368.533 171.136 323.891 176.599 309.062C187.835 221.026 273.359 195.895 314.716 194.334L303.011 11.7069C317.993 13.58 349.831 60.8759 363.877 84.2897V0C414.442 31.8428 433.326 149.068 436.447 203.7C464.539 205.573 510.333 229.455 513.699 243.503L665.862 625.148Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Navigation = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col py-4 sticky top-0">
      {/* Brand Logo */}
      <div className="relative w-14 h-14 rounded-full p-2 hover:bg-slate-200 flex justify-center items-center">
        <BrandLogo />
      </div>
      <NavigationItems />
      <UserButtonPopover session={session} />
    </div>
  );
};

export default Navigation;
