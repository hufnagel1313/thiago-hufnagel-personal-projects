import React from "react";

const SidebarProfileInfo: React.FC = () => {
  return (
    <div className="pt-6 mx-4 border-t lg:mx-6 user-meta-info md:mx-7 my-7 border-platinum dark:border-metalBlack">
      <ul className="space-y-3">
        <li className="flex text-sm">
          <span className="flex-1 font-medium text-black dark:text-white">
            Residence:
          </span>
          <span>Brazil</span>
        </li>
        <li className="flex text-sm">
          <span className="flex-1 font-medium text-black dark:text-white">
            City:
          </span>
          <span>Belo Horizonte</span>
        </li>
        <li className="flex text-sm">
          <span className="flex-1 font-medium text-black dark:text-white">
            Age:
          </span>
          <span>41</span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarProfileInfo;
