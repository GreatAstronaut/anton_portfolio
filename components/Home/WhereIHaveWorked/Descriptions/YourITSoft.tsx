import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function YourITSoft() {
  const tasks = [
    {
      text: "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and JavaScript frameworks(React, Angular, Vue)",
      keywords: [
        "React",
        "Node.js",
        "Next.js",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      text: "Collaborated with a cross-functional team to migrate the client's existing website to the React framework(Next.js)",
      keywords: ["React", "Next.js"],
    },
    {
      text: "Leveraged React, Node.js and Tailwind CSS, developing 5 websites",
      keywords: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      text: "Built pixel-perfect and fully responsive pages from Figma design utilizing several frameworks like Tailwind CSS, Bootstrap, Angular Material, etc. as well as CSS preprocessors including SASS, LESS, and Stylus",
      keywords: [
        "pixel-perfect",
        "fully responsive",
        "Tailwind CSS",
        "Bootstrap",
        "Angular Material",
        "SASS",
        "LESS",
        "Stylus",
      ],
    },
    {
      text: "Deployed web applications on AWS, utilizing services such as Amazon S3 for static hosting, Amazon CloudFront for content delivery, and AWS Lambda for serverless functions",
      keywords: ["AWS", "Amazon S3", "Amazon CloudFront", "AWS Lambda"],
    },
    {
      text: "Proficiently integrated the Vue.js ecosystem—including Vuex, Vuetify, Pinia, Nuxt-i18n, and Directives—amplifying platform functionality and ensuring an unmatched user experience",
      keywords: ["Vue.js", "Vuex", "Vuetify", "Pinia", "Nuxt-i18n"],
    },
    {
      text: "Built high quality websites, web applications, and cross platforms for a diverse array of clients using technologies such as JavaScript, TypeScript, React, Next, and more",
      keywords: ["JavaScript", "TypeScript", "React", "Next"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 flex-1 h-96 sm:max-w-xl px-2 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer{" "}
            <span className="text-AAsecondary">(2 years 8 months)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            August 2021 - April 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://youritsoft.com/", "_blank")}
          >
            youritsoft.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
