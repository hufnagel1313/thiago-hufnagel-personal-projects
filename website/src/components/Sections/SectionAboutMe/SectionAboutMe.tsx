import MySkills from "./MySkills/MySkills";

import React from "react";

const SectionAboutMe: React.FC = () => {
  return (
    <div
      data-scroll-index="1"
      id="about"
      className="py-3.5  max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl about-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-user text-theme"></i>
          ABOUT ME
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            About <span className="font-semibold text-theme">Me</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            Hi, my name is{" "}
            <span className="text-black dark:text-white">Brown Reddick</span>{" "}
            and I began using WordPress when first began. spent most of my
            waking hours for the last ten years designing, programming and
            operating{" "}
            <span className="text-black dark:text-white"> WordPress</span> sites
            go beyond with exclusive designer.
          </p>
        </div>
        <div className="mt-6 section-content">
          <MySkills />
        </div>
        <div className="mt-6 section-content">
          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            <li className="">
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>20</span>+
              </div>
              <div className="text-sm">Years Of Experience</div>
            </li>
            <li className="">
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>12</span>+
              </div>
              <div className="text-sm">Handled Projects</div>
            </li>
            <li className="">
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>5</span>+
              </div>
              <div className="text-sm">Open Source Libraries</div>
            </li>
            <li className="">
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>18</span>
              </div>
              <div className="text-sm">Awards Won</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionAboutMe;
