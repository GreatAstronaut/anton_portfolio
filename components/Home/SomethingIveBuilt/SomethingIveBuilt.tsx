import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4 max-w-8xl"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            04.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project 1*/}
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
                href="https://www.davidsonhomes.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>

              <Img
                src={"/davidson.jpg"}
                alt={"Project Screen shot"}
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
                  src={"/davidson.jpg"}
                  alt={"Davidson"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Davidson Homes
                </span>
                <a
                  href="https://www.davidsonhomes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    HomeBuilding Company Website
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  Davidson Homes is a headless website for the fastest growing
                  home builder in USA.
                  <br />
                  I rebuilt this website using React, Next.js and Tailwind CSS.
                  <br />
                  As a{" "}
                  <span className="text-AAsecondary">
                    creative web developer
                  </span>
                  , I enhanced the{" "}
                  <span className="text-AAsecondary">user experience</span> with
                  features that allow customers to search for homes by location
                  and filter designs.
                  <br />I focused on implementing{" "}
                  <span className="text-AAsecondary">
                    SEO best practices
                  </span>{" "}
                  to improve the site&apos;s visibility and ensured it was responsive
                  across all devices.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-AAsecondary text-sm font-Text2 md:justify-end">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  React
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Next.js
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Tailwind CSS
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Node.js
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Webpack
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  SEO
                </div>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://11mirrors-hotel.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 md:mt-[196px] "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href="https://make-awesome-avatar-dev.netlify.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>

              <Img
                src={"/kernelwealth.jpg"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-50 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/kernelwealth.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Kernelwealth</span>
                <a
                  href="https://make-awesome-avatar-dev.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Kernelwealth Business Website
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">Kernelwealth</span> is a
                  business website for the financial services and investment
                  management company. It serves individuals and investors in New
                  Zealand seeking specialist financial services and investment
                  management expertise.
                  <br /> Our client wanted a modern, visually appealing website
                  to increase{" "}
                  <span className="text-AAsecondary">user satisfaction</span>.
                  We recommended the adoption of{" "}
                  <span className="text-AAsecondary">Next.js</span> to enhance
                  the website&apos;s performance and speed. Additionally, for
                  the user interface styling, we suggested the implementation of
                  <span className="text-AAsecondary"> Tailwind CSS.</span>
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-AAsecondary text-sm font-Text2 md:justify-start">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  React
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Next.js
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Node
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Tailwind CSS
                </div>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <a
                  href="https://make-awesome-avatar-dev.netlify.app/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3*/}
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
                href="https://www.doctorbuddyapp.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>

              <Img
                src={"/mirror.png"}
                alt={"Project Screen shot"}
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
                  src={"/mirror.png"}
                  alt={"DoctorBuddy"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">11 Mirrors </span>
                <a
                  href="https://11mirrors-hotel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    11 Mirrors Hotel Booking Website
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  This is a hotel booking website which present the hotel
                  through the eleven reflections of an accomplished personality.
                  <br /> The client wanted me to create an attractive website
                  that effectively showcases their hotel. <br />
                  As a{" "}
                  <span className="text-AAsecondary">frontend developer</span>,
                  I developed the hotel website to be{" "}
                  <span className="text-AAsecondary">user-friendly</span>,
                  <span className="text-AAsecondary"> responsive</span> and{" "}
                  <span className="text-AAsecondary">conversion-optimized</span>{" "}
                  using <span className="text-AAsecondary">Vue.js</span> and{" "}
                  <span className="text-AAsecondary">Nuxt.js.</span>
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-AAsecondary text-sm font-Text2 md:justify-end">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Vue
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Nuxt.js
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Responsive Design
                </div>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://11mirrors-hotel.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 md:mt-[196px] "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://www.dindong.com.br/"}
                target="_blank"
                rel="noreferrer"
              >
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img
                src={
                  "https://http2.mlstatic.com/D_NQ_NP_775192-MLA71151788367_082023-OO.webp"
                }
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={
                    "https://http2.mlstatic.com/D_NQ_NP_775192-MLA71151788367_082023-OO.webp"
                  }
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Dingdong</span>
                <a
                  href="https://www.dindong.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Dingdong Marketplace
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <span className="text-AAsecondary">DinDong</span> is a retail
                  marketplace based in Brazil that aims to bring innovations to
                  e-commerce in the country.
                  <br />
                  Acting as{" "}
                  <span className="text-AAsecondary">
                    Senior Full Stack Developer
                  </span>
                  , I planned and integrated the entire structure and
                  funcionalities with the help of a team of 3 developers.
                  <br />
                  The stack consists of a{" "}
                  <span className="text-AAsecondary">NodeJS API</span>, a{" "}
                  <span className="text-AAsecondary">MongoDB database</span>, an
                  admin dashboard in React and the Marketplace in{" "}
                  <span className="text-AAsecondary">React/Redux. </span>
                  Some of the relevant{" "}
                  <span className="text-AAsecondary">
                    third party api integrations
                  </span>{" "}
                  are: <span className="text-AAsecondary">TinyERP </span>
                  as the erp system,{" "}
                  <span className="text-AAsecondary">Getnet</span> as the
                  payment gateway,{" "}
                  <span className="text-AAsecondary">Klaviyo</span> as the
                  e-mail management system, among others.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-AAsecondary text-sm font-Text2 md:justify-start">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  NodeJS API
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  MongoDB
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Third Party API Integration
                </div>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.dindong.com.br/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 5 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 md:!mt-[146px]"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://loadconnect.io/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/LoadConnect.png"}
                alt={"Project Screen shot"}
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
                  src={"/LoadConnect.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">
                In initiation...
              </span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">LoadConnect</span>
                <a
                  href="https://loadconnect.io/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    LoadConnect Extension Dashboard
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  <span className="text-AAsecondary">LoadConnect.io</span> is
                  the ultimate Google Chrome extension for Carriers and
                  Dispatchers! I joined their development team to improve
                  website
                  <span className="text-AAsecondary">
                    {" "}
                    speed, beautiful and intuitive{" "}
                  </span>
                  user experience.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-AAsecondary text-sm font-Text2 md:justify-end">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  TypeScript
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  React
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Next.js
                </div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2">
                  Tailwind CSS
                </div>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <a
                  href="https://loadconnect.io/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
