import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import ExternalLink from "../../Icons/ExternalLink";

// Types for project data
interface ProjectData {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  imageHref: string;
  tech: string[];
  externalLink: { href: string; ariaLabel: string };
  reverse?: boolean;
  status?: string;
}

// ProjectCard component for reusability and memoization
const ProjectCard: React.FC<ProjectData> = React.memo(
  ({
    title,
    subtitle,
    description,
    image,
    imageAlt,
    imageHref,
    tech,
    externalLink,
    reverse = false,
    status,
  }) => {
    // Layout classes
    // const imageColClass = reverse ? "col-start-6" : "";
    const imageInnerColClass = reverse
      ? "col-start-6 col-span-7"
      : "col-span-7";
    const contentColClass = reverse ? "" : "xl:col-start-7 col-start-5";
    const contentAlignClass = reverse ? "" : "md:items-end";
    const headerAlignClass = reverse ? "" : "md:items-end";

    return (
      <article
        data-aos="fade-up"
        className={`relative md:grid md:grid-cols-12 w-full md:h-96 ${
          reverse ? "md:mt-[196px]" : ""
        }`}
      >
        {/* Desktop Image */}
        <div
          className={`hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center`}
        >
          <div
            className={`relative rounded w-full h-full ${imageInnerColClass}`}
          >
            <a
              href={imageHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${title}`}
            >
              <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
            </a>
            <Img src={image} alt={imageAlt} className="w-full rounded h-full" />
          </div>
        </div>

        {/* Content */}
        <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
          {/* Mobile background image */}
          <div className="absolute w-full h-full bg-opacity-70 z-0 md:hidden">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
              <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
              <Img src={image} alt={imageAlt} className="w-full h-full" />
            </div>
          </div>
          {status && (
            <div className="absolute w-full rounded ml-4 mt-2 text-end pr-8">
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">
                {status}
              </span>
            </div>
          )}
          <div
            className={`px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 ${contentColClass} col-span-8 flex flex-col items-start ${contentAlignClass} space-y-3`}
          >
            <header
              className={`flex flex-col space-y-1 z-10 ${headerAlignClass}`}
            >
              <span className="text-AAsecondary text-base">{title}</span>
              <a
                href={imageHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${subtitle}`}
              >
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  {subtitle}
                </span>
              </a>
            </header>
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
              <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                {description}
              </p>
            </div>
            <ul className="flex flex-wrap w-full text-AAsecondary text-sm font-Text2 md:justify-end">
              {tech.map((t) => (
                <li
                  key={t}
                  className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 z-10 mr-2"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="z-10 flex flex-row space-x-5">
              <ExternalLink
                href={externalLink.href}
                aria-label={externalLink.ariaLabel}
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

// Data for projects
const projects: ProjectData[] = [
  {
    title: "Davidson Homes",
    subtitle: "HomeBuilding Company Website",
    description: (
      <>
        Davidson Homes is a headless website for the fastest growing home
        builder in USA.
        <br />
        I rebuilt this website using React, Next.js and Tailwind CSS.
        <br />
        As a <span className="text-AAsecondary">creative web developer</span>, I
        enhanced the <span className="text-AAsecondary">user experience</span>{" "}
        with features that allow customers to search for homes by location and
        filter designs.
        <br />I focused on implementing{" "}
        <span className="text-AAsecondary">SEO best practices</span> to improve
        the site&apos;s visibility and ensured it was responsive across all
        devices.
      </>
    ),
    image: "/davidson.jpg",
    imageAlt: "Screenshot of Davidson Homes website",
    imageHref: "https://www.davidsonhomes.com/",
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Webpack", "SEO"],
    externalLink: {
      href: "https://www.davidsonhomes.com/",
      ariaLabel: "Go to Davidsonhomes",
    },
    reverse: false,
  },
  {
    title: "Kernelwealth",
    subtitle: "Kernelwealth Business Website",
    description: (
      <>
        <span className="text-AAsecondary">Kernelwealth</span> is a business
        website for the financial services and investment management company. It
        serves individuals and investors in New Zealand seeking specialist
        financial services and investment management expertise.
        <br /> Our client wanted a modern, visually appealing website to
        increase <span className="text-AAsecondary">user satisfaction</span>. We
        recommended the adoption of{" "}
        <span className="text-AAsecondary">Next.js</span> to enhance the
        website&apos;s performance and speed. Additionally, for the user
        interface styling, we suggested the implementation of
        <span className="text-AAsecondary"> Tailwind CSS.</span>
      </>
    ),
    image: "/kernelwealth.jpg",
    imageAlt: "Screenshot of Kernelwealth website",
    imageHref: "https://my.kernelwealth.co.nz/",
    tech: ["React", "Next.js", "Node", "Tailwind CSS"],
    externalLink: {
      href: "https://my.kernelwealth.co.nz/",
      ariaLabel: "Go to Kernel Wealth",
    },
    reverse: true,
  },
  {
    title: "11 Mirrors",
    subtitle: "11 Mirrors Hotel Booking Website",
    description: (
      <>
        This is a hotel booking website which presents the hotel through the
        eleven reflections of an accomplished personality.
        <br /> The client wanted me to create an attractive website that
        effectively showcases their hotel. <br />
        As a <span className="text-AAsecondary">frontend developer</span>, I
        developed the hotel website to be{" "}
        <span className="text-AAsecondary">user-friendly</span>,{" "}
        <span className="text-AAsecondary">responsive</span> and{" "}
        <span className="text-AAsecondary">conversion-optimized</span> using{" "}
        <span className="text-AAsecondary">Vue.js</span> and{" "}
        <span className="text-AAsecondary">Nuxt.js.</span>
      </>
    ),
    image: "/mirror.png",
    imageAlt: "Screenshot of 11 Mirrors Hotel website",
    imageHref: "https://11mirrors-hotel.com/",
    tech: ["Vue", "Nuxt.js", "Responsive Design"],
    externalLink: {
      href: "https://11mirrors-hotel.com/",
      ariaLabel: "Go to 11 Mirror Hotel",
    },
    reverse: false,
  },
  {
    title: "Dingdong",
    subtitle: "Dingdong Marketplace",
    description: (
      <>
        <span className="text-AAsecondary">DinDong</span> is a retail
        marketplace based in Brazil that aims to bring innovations to e-commerce
        in the country.
        <br />
        Acting as{" "}
        <span className="text-AAsecondary">Senior Full Stack Developer</span>, I
        planned and integrated the entire structure and functionalities with the
        help of a team of 3 developers.
        <br />
        The stack consists of a{" "}
        <span className="text-AAsecondary">NodeJS API</span>, a{" "}
        <span className="text-AAsecondary">MongoDB database</span>, an admin
        dashboard in React and the Marketplace in{" "}
        <span className="text-AAsecondary">React/Redux. </span>
        Some of the relevant{" "}
        <span className="text-AAsecondary">
          third party api integrations
        </span>{" "}
        are: <span className="text-AAsecondary">TinyERP </span>
        as the erp system, <span className="text-AAsecondary">Getnet</span> as
        the payment gateway, <span className="text-AAsecondary">Klaviyo</span>{" "}
        as the e-mail management system, among others.
      </>
    ),
    image:
      "https://http2.mlstatic.com/D_NQ_NP_775192-MLA71151788367_082023-OO.webp",
    imageAlt: "Screenshot of Dingdong Marketplace",
    imageHref: "https://www.dindong.com.br/",
    tech: ["NodeJS API", "MongoDB", "Third Party API Integration"],
    externalLink: {
      href: "https://www.dindong.com.br/",
      ariaLabel: "Go to Dingdong Marketplace",
    },
    reverse: true,
  },
  {
    title: "LoadConnect",
    subtitle: "LoadConnect Extension Dashboard",
    description: (
      <>
        <span className="text-AAsecondary">LoadConnect.io</span> is the ultimate
        Google Chrome extension for Carriers and Dispatchers! I joined their
        development team to improve website
        <span className="text-AAsecondary">
          {" "}
          speed, beautiful and intuitive{" "}
        </span>
        user experience.
      </>
    ),
    image: "/LoadConnect.png",
    imageAlt: "Screenshot of LoadConnect Extension Dashboard",
    imageHref: "https://loadconnect.io/",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    externalLink: {
      href: "https://loadconnect.io/",
      ariaLabel: "Go to Loadconnect Extension",
    },
    reverse: false,
    status: "In initiation...",
  },
];

export default function SomethingIveBuilt() {
  return (
    <section
      id="SomethingIveBuiltSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4 max-w-8xl"
      aria-labelledby="something-ive-built-title"
    >
      {/* Title */}
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
            04.
          </span>
        </div>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Some Things I&apos;ve Built
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
