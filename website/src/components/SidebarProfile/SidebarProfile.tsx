import React from "react";
import SidebarProfileAvatar from "./SidebarProfileAvatar/SidebarProfileAvatar";
import SidebarProfileInfo from "./SidebarProfileInfo/SidebarProfileInfo";
import SidebarProfileSkills from "./SidebarProfileSkills/SidebarProfileSkills";

const SidebarProfile: React.FC = () => {
  return (
    <>
      <div className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 md:max-w-sidebar xl:max-2xl:max-w-xs z-999">
        <div className="p-3 mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl">
          <SidebarProfileAvatar />
          <SidebarProfileInfo />
          <SidebarProfileSkills />
          <svg className="absolute w-0 h-0">
            <clipPath
              id="my-clip-path"
              clipPathUnits="objectBoundingBox"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M0.001,0.031 C0.001,0.014,0.026,0.001,0.055,0.001 H0.492 C0.506,0.001,0.52,0.004,0.53,0.009 L0.61,0.052 C0.62,0.057,0.634,0.06,0.649,0.06 H0.947 C0.977,0.06,1,0.074,1,0.091 V0.971 C1,0.987,0.977,1,0.947,1 H0.055 C0.026,1,0.001,0.987,0.001,0.971 V0.031"></path>
            </clipPath>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SidebarProfile;
