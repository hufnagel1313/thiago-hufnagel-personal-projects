import React from "react";
import SidebarProfileAvatar from "./SidebarProfileAvatar/SidebarProfileAvatar";
import SidebarProfileInfo from "./SidebarProfileInfo/SidebarProfileInfo";
import SidebarProfileDownloadCV from "./SidebarProfileDownloadCV/SidebarProfileDownloadCV";

const SidebarProfile: React.FC = () => {
  return (
    <>
      <div className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 md:max-w-sidebar xl:max-2xl:max-w-xs z-999">
        <div className="p-3 mb-3 overflow-hidden minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl">
          <SidebarProfileAvatar />
          <SidebarProfileInfo />
          <SidebarProfileDownloadCV />
        </div>
      </div>
    </>
  );
};

export default SidebarProfile;
