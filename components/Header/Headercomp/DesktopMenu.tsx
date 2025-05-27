
import React from "react";

type DesktopMenuProps = {
  finishedLoading: boolean;
};

type MenuItemProps = {
  to: string;
  label: string;
  number: string;
  offset?: number;
  delay: number;
  finishedLoading: boolean;
};

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, to: string, offset = -100) => {
  e.preventDefault();
  const element = document.getElementById(to);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const MenuItem: React.FC<MenuItemProps> = ({
  to,
  label,
  number,
  offset = -100,
  delay,
  finishedLoading,
}) => (
  <div
    className="text-AAsecondary hover:cursor-pointer"
    style={{
      opacity: finishedLoading ? 1 : 0,
      transform: finishedLoading ? "none" : "translateY(-40px)",
      transition: finishedLoading
        ? "none"
        : `opacity 1.2s ${delay}s, transform 1.2s ${delay}s`,
    }}
  >
    <a
      href={`#${to}`}
      onClick={(e) => handleSmoothScroll(e, to, offset)}
      className="text-AAsecondary hover:cursor-pointer"
    >
      &gt; {number}.{" "}
      <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
        {label}
      </span>
    </a>
  </div>
);

const menuItems = [
  {
    to: "aboutSection",
    label: "About",
    number: "01",
    offset: -100,
    delay: 0.4,
  },
  {
    to: "WhereIhaveWorkedSection",
    label: "Experience",
    number: "02",
    offset: -300,
    delay: 0.7,
  },
  {
    to: "EducationSection",
    label: "Education",
    number: "03",
    offset: -300,
    delay: 0.7,
  },
  {
    to: "SomethingIveBuiltSection",
    label: "Work",
    number: "04",
    offset: -100,
    delay: 0.8,
  },
];

const DesktopMenu: React.FC<DesktopMenuProps> = ({ finishedLoading }) => {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-6">
      {menuItems.map((item) => (
        <MenuItem
          key={item.number}
          {...item}
          finishedLoading={finishedLoading}
        />
      ))}
      <span
        className="text-AAsecondary hover:cursor-pointer"
        style={{
          opacity: finishedLoading ? 1 : 0,
          transform: finishedLoading ? "none" : "translateY(-40px)",
          transition: finishedLoading
            ? "none"
            : `opacity 1.2s 1s, transform 1.2s 1s`,
        }}
      >
        <a
          href="#GetInTouchSection"
          onClick={(e) => handleSmoothScroll(e, "GetInTouchSection", -100)}
          className="text-AAsecondary hover:cursor-pointer"
        >
          &gt; 05.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            Contact
          </span>
        </a>
      </span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
        <button
          className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
        >
          Resume
        </button>
      </a>
    </div>
  );
};

export default DesktopMenu;
