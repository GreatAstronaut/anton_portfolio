
import React from "react";
import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

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

const animationProps = (delay: number, finishedLoading: boolean) => ({
  initial: { y: -40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    duration: finishedLoading ? 0 : 1.2,
    delay: finishedLoading ? 0 : delay,
  },
});

const MenuItem: React.FC<MenuItemProps> = ({
  to,
  label,
  number,
  offset = -100,
  delay,
  finishedLoading,
}) => (
  <motion.div
    {...animationProps(delay, finishedLoading)}
    className="text-AAsecondary hover:cursor-pointer"
  >
    <ReactScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={200}
    >
      &gt; {number}.{" "}
      <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
        {label}
      </span>
    </ReactScrollLink>
  </motion.div>
);

const menuItems = [
  {
    to: "aboutSection",
    label: "About",
    number: "01",
    offset: -100,
    delay: 9.4,
  },
  {
    to: "WhereIhaveWorkedSection",
    label: "Experience",
    number: "02",
    offset: -300,
    delay: 9.7,
  },
  {
    to: "WhereIhaveWorkedSection",
    label: "Education",
    number: "03",
    offset: -300,
    delay: 9.7,
  },
  {
    to: "SomethingIveBuiltSection",
    label: "Work",
    number: "04",
    offset: -100,
    delay: 9.8,
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
      <motion.span
        {...animationProps(10, finishedLoading)}
        className="text-AAsecondary hover:cursor-pointer"
      >
        <ReactScrollLink
          to="GetInTouchSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 05.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            Contact
          </span>
        </ReactScrollLink>
      </motion.span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
        <motion.button
          {...animationProps(10.2, finishedLoading)}
          className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
};

export default DesktopMenu;
