
import React, { useRef, useState, useEffect, useContext, useCallback } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";
import AppContext from "../AppContextFolder/AppContext";

interface HeaderProps {
  finishedLoading: boolean;
  sectionsRef: any;
}

const Header: React.FC<HeaderProps> = ({ finishedLoading, sectionsRef }) => {
  const navBarRef = useRef<HTMLDivElement>(null);
  const [showElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState(false);
  const context = useContext(AppContext);
  const scrollYRef = useRef<number>(0);

  // Scroll handler to show/hide navbar on scroll direction
  const handleScroll = useCallback(() => {
    if (!navBarRef.current) return;

    if (scrollYRef.current === 0) {
      scrollYRef.current = window.scrollY;
      return;
    }

    if (window.scrollY > 50) {
      if (window.scrollY > scrollYRef.current) {
        navBarRef.current.classList.remove("translate-y-0");
        navBarRef.current.classList.add("-translate-y-full");
      } else {
        navBarRef.current.classList.add("translate-y-0");
        navBarRef.current.classList.remove("-translate-y-full");
      }
      scrollYRef.current = window.scrollY;
    }
  }, []);

  // Attach/detach scroll event listener
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Show navbar after loading animation
  useEffect(() => {
    const timer = setTimeout(() => setShowElement(true), 10400);
    return () => clearTimeout(timer);
  }, []);

  // Control body scroll based on menu state and loading
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (context.sharedState.finishedLoading) {
      document.body.style.overflowY = rotate ? "hidden" : "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [rotate, context.sharedState.finishedLoading]);

  return (
    <>
      {/* Mobile Menu */}
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={showElement}
      />

      {/* Navbar */}
      <motion.div
        ref={navBarRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { delay: finishedLoading ? 0 : 9.4, duration: 0 },
        }}
        className={`w-full fixed ${
          showElement ? "bg-opacity-70 shadow-xl" : "bg-opacity-0"
        } bg-AAprimary flex justify-between px-6 sm:px-12 py-2 sm:py-4 transition duration-4000 translate-y-0 z-20`}
      >
        <Logo finishedLoading={finishedLoading} />

        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={showElement}
          finishedLoading={finishedLoading}
        />

        <DesktopMenu finishedLoading={finishedLoading} />
      </motion.div>
    </>
  );
};

export default Header;
