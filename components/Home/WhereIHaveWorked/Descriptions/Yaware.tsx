import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Yaware() {
  const tasks = [
    {
      text: "Worked on MERN Stack i.e. Node.js, Express, MongoDB, Socket.io, AWS S3, Firebase, React.js, Redux",
      keywords: [
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "AWS S3",
        "Firebase",
        "React.js",
        "Redux",
      ],
    },
    {
      text: "Integrated RESTful APIs to enhance website functionality and performance",
      keywords: ["RESTful API"],
    },
    {
      text: "Implemented best practices for state management using Redux",
      keywords: ["best practices", "Redux"],
    },
    {
      text: "Built several complex components like Menu Builder, Tree-View with additional functionalities, Drag and Drop functions, etc",
      keywords: ["Menu Builder", "Tree-View", "Drag and Drop"],
    },
    {
      text: "Participated in over 50 Agile ceremonies(sprint planning, daily standups, retrospectives), ensuring efficient team collaboration",
      keywords: ["over 50 Agile ceremonies", "team collaboration"],
    },
    {
      text: "Cooperated with back-end engineers to create clean interfaces and simple, intuitive interactions and experiences following best practices",
      keywords: [""],
    },
    {
      text: "Achieved security and authentication to web services using Oauth2",
      keywords: ["Oauth2"],
    },
    {
      text: "Conducted code reviews and optimized code for improved performance and maintainability",
      keywords: ["code reviews", "performance", "maintainability"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 flex-1 h-96 sm:max-w-xl px-2 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer{" "}
            <span className="text-AAsecondary">(10 years 6 months)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            October 2010 - April 2021
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://yaware.com/", "_blank")}
          >
            yaware.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
