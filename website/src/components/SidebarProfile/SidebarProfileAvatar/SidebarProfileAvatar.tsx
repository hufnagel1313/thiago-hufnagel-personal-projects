import React from "react";

const SidebarProfileAvatar: React.FC = () => {
  return (
    <div className="mx-4 mt-12 text-center user-info lg:mx-6">
      <a
        href="index.html"
        className="w-36 mb-2.5 h-3w-36 block mx-auto border-6 border-platinum dark:border-[#2f2f2f] overflow-hidden rounded-full"
      >
        <img
          src="assets/img/me.png"
          className="hidden dark:block w-full h-full rounded-full"
          alt="Thiago Hufnagel"
        />{" "}
        {/*Image for Dark Version */}
        <img
          src="assets/img/me.png"
          className="dark:hidden w-full h-full rounded-full"
          alt="Thiago Hufnagel"
        />{" "}
        {/*Image for Light Version */}
      </a>
      <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">
        Thiago Hufnagel
      </h6>
      <div className="leading-none cd-headline clip is-full-width">
        <h6 className="text-sm cd-words-wrapper designation text-theme after:!bg-theme">
          <b className="font-normal is-visible">Software Engineer</b>
          <b className="font-normal">Full Stack</b>
          <b className="font-normal">Devops</b>
        </h6>
      </div>
    </div>
  );
};

export default SidebarProfileAvatar;
