
import React, { useCallback } from "react";
import { motion } from "framer-motion";

interface MobileMenuProps {
  rotate: boolean;
  setRotate: (value: boolean) => void;
  ShowElement: boolean;
  setShowElement: (value: boolean) => void;
}

interface MenuItem {
  label: string;
  section: string;
  number: string;
  offset: number;
}

const menuItems: MenuItem[] = [
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
    section: "EducationSection",
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

const MobileMenu: React.FC<MobileMenuProps> = React.memo(
  ({ rotate, setRotate, ShowElement, setShowElement }) => {
    const closeMenu = useCallback(() => {
      setRotate(!rotate);
      setShowElement(!ShowElement);
    }, [setRotate, setShowElement, rotate, ShowElement]);

    const handleAnchorClick = (
      e: React.MouseEvent<HTMLAnchorElement>,
      offset: number,
      section: string
    ) => {
      e.preventDefault();
      const el = document.getElementById(section);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      closeMenu();
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
          className="w-1/4 h-full backdrop-blur-sm bg-gray-900/30 hover:cursor-pointer" // Use a darker overlay for better contrast
        />
        <div className="w-3/4 h-full bg-gray-900 flex flex-col justify-center items-center space-y-8 font-sans">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.section}`}
              onClick={e => handleAnchorClick(e, item.offset, item.section)}
              className="flex flex-col text-center space-y-2"
            >
              <span className="text-blue-400 text-xs font-mono hover:cursor-pointer">
                {/* Use a blue with good contrast on dark background */}
                {item.number}
              </span>
              <span className="text-white font-Text2 text-sm sm:text-base hover:text-blue-400 hover:cursor-pointer duration-300">
                {/* White text on dark background, blue on hover */}
                {item.label}
              </span>
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button className="rounded border font-Text2 border-blue-400 hover:bg-blue-700 py-2 sm:py-4 px-5 sm:px-10 text-xs text-blue-400">
              Resume
            </button>
          </a>
        </div>
      </motion.div>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export default MobileMenu;
