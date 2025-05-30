import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import ExternalLink from "../../Icons/ExternalLink";

export default function Education() {
  return (
    <section
      id="EducationSection"
      data-aos="fade-up"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4 max-w-8xl"
    >
      {/* // ? Title  */}
      <section
        className="flex items-center px-4 sm:px-0 w-full sm:w-[500px] 
              md:w-[700px] lg:w-[900px]"
      >
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
        </div>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Education
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://uesukraine.com/ternopil-national-economic-university/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>

              <Img
                src={
                  "https://media.licdn.com/dms/image/v2/C4E1BAQE2fDD4xIECNQ/company-background_10000/company-background_10000/0/1590151367565/ternopil_academy_of_national_economy_cover?e=2147483647&v=beta&t=Eoqe2OiW7PDebJWRRJA8unBbFuTwGVUFsejkdgbWjLA"
                }
                alt={"Ternopil National Economic University"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={
                    "https://media.licdn.com/dms/image/v2/C4E1BAQE2fDD4xIECNQ/company-background_10000/company-background_10000/0/1590151367565/ternopil_academy_of_national_economy_cover?e=2147483647&v=beta&t=Eoqe2OiW7PDebJWRRJA8unBbFuTwGVUFsejkdgbWjLA"
                  }
                  alt={"Ternopil National Economic University"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <a
                  href="https://uesukraine.com/ternopil-national-economic-university/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Ternopil National Economic University
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  <span className="text-AAsecondary">
                    Bachelor&apos;s Degree
                  </span>{" "}
                  in
                  <span className="text-AAsecondary"> Computer Science </span>
                  <br />
                  with a focus on{" "}
                  <span className="text-AAsecondary">
                    {" "}
                    Software Engineering
                  </span>
                  <br />
                  Graduated with honors.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">
                  September 2006 - September 2010
                </span>
              </ul>
              <div className="z-10 flex flex-row space-x-5">
                <ExternalLink
                  href="https://uesukraine.com/ternopil-national-economic-university/"
                  aria-label="Got to Ternopil National Economic University"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
