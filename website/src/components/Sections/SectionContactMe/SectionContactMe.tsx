import React from "react";

const SectionContactMe: React.FC = () => {
  const phoneNumber = "5531988846208";
  return (
    <div
      data-scroll-index="8"
      id="contact"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 bg-white dark:bg-nightBlack rounded-2xl contact-section lg:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-envelope-open text-theme"></i>
          CONTACT
        </div>
        <div className="mb-10 mt-7 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Contact <span className="font-semibold text-theme">Me.</span>
          </h2>
          <p className="mt-3.5 md:mt-5 subtitle max-w-sectionTitle">
            I design products that are more than pretty. I make them shippable
            and usable, ttempor non mollit dolor et do aute
          </p>
        </div>
        {/*./section-title--> */}

        <div className="grid gap-12 mt-8 mb-10 md:my-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <ul className="space-y-6 md:space-y-10 2xl:space-y-12 contact-info">
              <li className="flex flex-wrap items-center gap-5">
                <div className="flex justify-center w-12 icon">
                  <svg
                    width="41"
                    height="42"
                    viewBox="0 0 41 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.6257 9.60099V6.29746H27.5763L20.6254 0.64209L13.6843 6.29746H9.62601V9.57337L0.300781 17.1443V40.133C0.300781 40.7549 0.806087 41.261 1.42707 41.261H39.7609C40.3819 41.261 40.8872 40.7549 40.8872 40.133V17.1447L31.6257 9.60099ZM40.2455 40.2187L26.9416 28.7431L40.2536 17.9864V40.1326C40.2536 40.1622 40.2504 40.1907 40.2455 40.2187ZM40.0832 17.308L31.6257 24.1422V10.4195L40.0832 17.308ZM20.6258 1.46056L26.5706 6.29746H14.6888L20.6258 1.46056ZM30.9913 6.93233V24.6548L26.4529 28.3214L20.6262 23.2957L14.7643 28.3186L10.26 24.6791V6.93233H30.9913ZM0.936777 40.1663C0.935965 40.1553 0.935153 40.1444 0.935153 40.133V17.96L14.274 28.7386L0.936777 40.1663ZM9.62601 24.1665L1.12185 17.295L9.62601 10.3906V24.1665ZM1.37877 40.6237L20.625 24.1328L39.7463 40.6257H1.42707C1.41083 40.6261 1.3946 40.6253 1.37877 40.6237ZM26.1534 13.8802H15.0979V13.2453H26.1534V13.8802ZM26.1534 20.2789H15.0979V19.6436H26.1534V20.2789Z"
                      fill="#00BC91"
                    />
                    <path
                      d="M30.9531 7.00537L31.0128 24.7123L31.6389 24.2046L31.6389 7.00537L30.9531 7.00537Z"
                      fill="white"
                    />
                    <rect
                      x="15.1133"
                      y="13.2266"
                      width="11.0781"
                      height="0.685791"
                      fill="white"
                    />
                    <rect
                      x="9.625"
                      y="6.3042"
                      width="22.0156"
                      height="0.700928"
                      fill="white"
                    />
                    <path
                      d="M10.3125 7.00488L10.2528 24.7118L9.62671 24.2041L9.62671 7.00488L10.3125 7.00488Z"
                      fill="white"
                    />
                    <path
                      d="M15.0547 19.6567H26.1328V20.27H15.0547V19.6567Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h6 className="text-lg text-black dark:text-white">E-mail</h6>
                  <p className="text-sm">
                    <a
                      href="mailto:hufnagel1313@gmail.com"
                      className="text-theme hover:underline"
                    >
                      hufnagel1313@gmail.com
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex flex-wrap items-center gap-5">
                <div className="flex justify-center w-12 icon">
                  <svg
                    width="41"
                    height="42"
                    viewBox="0 0 41 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.7321 41.2896C28.9475 41.3359 29.1625 41.3587 29.3795 41.3587C31.885 41.3583 34.5278 38.3392 37.6673 34.4367C38.2236 33.7461 38.1415 32.7236 37.4767 32.0582L31.1742 25.7508C30.4817 25.0581 29.4031 25.0065 28.7163 25.6328C25.6475 28.4315 24.916 28.2488 23.6753 27.6103C19.528 25.4754 16.0691 22.0138 13.9367 17.864C13.2987 16.6231 13.1162 15.8902 15.9126 12.819C16.5381 12.1317 16.4865 11.0514 15.7948 10.3592L9.4919 4.05133C8.82743 3.38593 7.80574 3.30459 7.11608 3.86017C2.87895 7.27501 -0.315768 10.1013 0.26823 12.8032C2.72899 24.1841 17.3602 38.8269 28.7321 41.2896ZM29.2771 26.2486C29.6286 25.9289 30.2155 25.9692 30.5857 26.3397L36.8882 32.6471C37.2454 33.0051 37.3031 33.5614 37.019 33.9141C36.4137 34.6666 35.8221 35.3909 35.2449 36.0686L27.1619 27.9789C27.7588 27.5708 28.4449 27.0077 29.2771 26.2486ZM7.6379 4.5093C7.78827 4.38809 7.97562 4.32912 8.16907 4.32912C8.42876 4.32912 8.69861 4.43527 8.90343 4.64026L15.2063 10.9481C15.5765 11.3186 15.6176 11.9063 15.2973 12.2578C14.5389 13.0908 13.9762 13.7775 13.5686 14.3748L5.4852 6.28504C6.16231 5.7073 6.88601 5.11521 7.6379 4.5093ZM4.85451 6.83173L13.1231 15.1069C12.4931 16.3176 12.6377 17.1583 13.1962 18.2447C15.4075 22.5482 18.994 26.1371 23.2949 28.3513C24.38 28.9106 25.2204 29.0554 26.4304 28.4247L34.6986 36.6998C32.5226 39.1709 30.5677 40.8352 28.9085 40.4753C17.791 38.0675 3.48774 23.7529 1.08184 12.6267C0.722586 10.9658 2.38527 9.00967 4.85451 6.83173Z"
                      fill="#00BC91"
                    />
                    <path
                      d="M23.3107 1.37642C32.5978 1.37642 40.1532 8.93738 40.1532 18.231C40.1532 18.4612 40.3393 18.6475 40.5693 18.6475C40.7993 18.6475 40.9855 18.4612 40.9855 18.231C40.9855 8.4782 33.0566 0.543457 23.3107 0.543457C23.0807 0.543457 22.8945 0.729736 22.8945 0.95994C22.8945 1.19014 23.0807 1.37642 23.3107 1.37642Z"
                      fill="white"
                    />
                    <path
                      d="M23.3107 8.02633C28.9336 8.02633 33.5081 12.604 33.5081 18.231C33.5081 18.4612 33.6942 18.6475 33.9242 18.6475C34.1543 18.6475 34.3404 18.4612 34.3404 18.231C34.3404 12.1448 29.3925 7.19336 23.3107 7.19336C23.0807 7.19336 22.8945 7.37964 22.8945 7.60984C22.8945 7.84005 23.0807 8.02633 23.3107 8.02633Z"
                      fill="white"
                    />
                    <path
                      d="M22.8945 14.2597C22.8945 14.4899 23.0807 14.6762 23.3107 14.6762C25.2691 14.6762 26.8626 16.271 26.8626 18.2314C26.8626 18.4616 27.0488 18.6479 27.2788 18.6479C27.5088 18.6479 27.6949 18.4616 27.6949 18.2314C27.6949 15.8118 25.7284 13.8433 23.3107 13.8433C23.0807 13.8433 22.8945 14.0295 22.8945 14.2597Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <h6 className="text-lg text-black dark:text-white">Phone</h6>
                  <p className="text-sm">
                    <a
                      href={`tel:+${phoneNumber}`}
                      className="text-theme hover:underline"
                    >
                      +{phoneNumber}
                    </a>
                  </p>
                </div>
                <div className="text-3xl inline-flex gap-3">
                  <button
                    className="inline-flex text-2xl py-2 px-3 items-center border-theme bg-theme text-white rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                    aria-label="Send Message"
                    onClick={() => window.open(`tel:+${phoneNumber}`, "_blank")}
                  >
                    <i className="fas fa-phone-volume"></i>
                  </button>
                  <button
                    className="inline-flex text-2xl py-2 px-3 items-center border-theme bg-theme text-white rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                    aria-label="Send Message"
                    onClick={() =>
                      window.open(`https://wa.me/${phoneNumber}`, "_blank")
                    }
                  >
                    <i className="fab fa-whatsapp"></i>
                  </button>
                  <button
                    className="inline-flex text-2xl py-2 px-3 items-center border-theme bg-theme text-white rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                    aria-label="Send Message"
                    onClick={() => window.open(`sms:+${phoneNumber}`, "_blank")}
                  >
                    <i className="fal fa-sms"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          {/* Contact info end */}

          <div className="md:col-span-7">
            <form action="contact-form.php" method="get" className="space-y-4">
              <div className="form-group">
                <input
                  type="text"
                  name="client__name"
                  placeholder="Name"
                  className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:placeholder:text-white/40"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="client_email"
                  placeholder="E-Mail"
                  className="w-full p-5 text-sm outline-none h-13 focus:border-theme dark:placeholder:text-white/40"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="contact__message"
                  placeholder="Message"
                  className="w-full px-5 py-4 text-sm outline-none focus:border-theme dark:placeholder:text-white/40"
                ></textarea>
              </div>
              <div className=" form-group">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Contact form end */}
        </div>
      </div>
    </div>
  );
};

export default SectionContactMe;
