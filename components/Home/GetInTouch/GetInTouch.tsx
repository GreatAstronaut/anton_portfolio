import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <section
      id="GetInTouchSection"
      data-aos="fade-up"
      // className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
      className="flex flex-col items-center xl:space-y-12 space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4 max-w-8xl aos-init aos-animate"
    >
      {/* // ? Title === > What's Next?  */}
      <section className="flex items-center px-4 sm:px-0">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            05.
          </span>
        </div>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          What&apos;s Next?
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m Always open for any new opportunities, my inbox is
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="pt-4">
        <a
          href="mailto:sydoranton99@outlook.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <button className="font-mono text-sm text-AAsecondary border-AAsecondary px-8 py-4 border-[1.5px] rounded ">
            Say Hello
          </button>
        </a>
      </div>
    </section>
  );
}
