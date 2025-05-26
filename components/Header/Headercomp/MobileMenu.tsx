
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface MobileMenuProps {
  rotate: boolean;
  setRotate: (value: boolean) => void;
  ShowElement: boolean;
  setShowElement: (value: boolean) => void;
}

const menuItems = [
  {
    label: "About",
    section: "aboutSection",
    number: "01.",
    offset: -50,
  },
  {
    label: "Experience",
    section: "WhereIhaveWorkedSection",
    number: "02.",
    offset: -250,
  },
  {
    label: "Education",
    section: "WhereIhaveWorkedSection",
    number: "03.",
    offset: -250,
  },
  {
    label: "Work",
    section: "SomethingIveBuiltSection",
    number: "04.",
    offset: 100,
  },
  {
    label: "Contact",
    section: "GetInTouchSection",
    number: "05.",
    offset: 100,
  },
];

const MobileMenu: React.FC<MobileMenuProps> = ({
  rotate,
  setRotate,
  ShowElement,
  setShowElement,
}) => {
  const closeMenu = () => {
    setRotate(!rotate);
    setShowElement(!ShowElement);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={rotate ? { x: "0" } : { x: "100%" }}
      transition={{ x: { duration: 0.4 } }}
      className="w-full fixed h-screen flex md:hidden duration-300 z-20"
    >
      <div
        onClick={closeMenu}
        className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
      />
      <div className="w-3/4 h-full bg-MobileNavBarColor flex flex-col justify-center items-center space-y-8 font-sans">
        {menuItems.map((item, idx) => (
          <Link
            key={item.label}
            to={item.section}
            spy={true}
            smooth={true}
            offset={item.offset}
            duration={200}
            onClick={closeMenu}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-xs font-mono hover:cursor-pointer">
              {item.number}
            </span>
            <span className="text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300">
              {item.label}
            </span>
          </Link>
        ))}
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <button className="rounded border font-Text2 border-AAsecondary hover:bg-ResumeButtonHover py-2 sm:py-4 px-5 sm:px-10 text-xs text-AAsecondary">
            Resume
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
