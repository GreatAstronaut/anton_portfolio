
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Utility: Debounce function
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Animated Icon (unchanged for brevity)
const AnimatedIcon: React.FC<{
  centerX: number;
  centerY: number;
  animate: boolean;
}> = React.memo(({ centerX, centerY, animate }) => (
  <motion.div
    animate={animate ? { y: centerY, x: centerX, scale: 2 } : false}
    transition={{ delay: 2, duration: 1 }}
    className="relative w-9 h-10"
  >
    {/* ...icon content unchanged... */}
    <div className="absolute h-1 w-1/2 bg-gray-600"></div>
    <div className="absolute h-full w-1 bg-gray-600"></div>
    <div className="absolute bottom-0 h-1 w-full bg-gray-600"></div>
    <div className="absolute right-0 bottom-0 h-6 w-1 bg-gray-600"></div>
    {/* Eyes */}
    <motion.div
      animate={
        animate
          ? {
              scaleY: [
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
              ],
            }
          : false
      }
      transition={{ scaleY: { delay: 1.5, duration: 1 } }}
      className="absolute left-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
    />
    <motion.div
      initial={{ opacity: 0, scaleY: "100%" }}
      animate={
        animate
          ? {
              opacity: 1,
              scaleY: [
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
              ],
            }
          : false
      }
      transition={{
        opacity: { delay: 1, duration: 0 },
        scaleY: { delay: 1.5, duration: 1 },
      }}
      className="absolute right-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
    />
    <motion.div
      animate={{ rotate: -90, x: 9, y: -7 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="absolute right-4 top-0 h-[18px] w-1 bg-gray-600"
    />
    <motion.div
      animate={{ rotate: 90, x: 6, y: -7 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="absolute right-0 top-[14px] h-1 w-4 bg-gray-600"
    />
    <motion.div
      initial={{ opacity: "100%" }}
      animate={{ opacity: "0%" }}
      transition={{ opacity: { delay: 0.5, duration: 0 } }}
      className=""
    >
      <div className="absolute right-3 top-0 h-1 w-1 bg-gray-600"></div>
      <div className="absolute right-0 top-[10px] h-1 w-1 bg-gray-600"></div>
      <div className="absolute right-1 top-[7px] h-[4px] w-[4px] bg-gray-600"></div>
      <div className="absolute right-2 top-[4px] h-[4px] w-[4px] bg-gray-600"></div>
    </motion.div>
    {/* Smile */}
    <div className="absolute left-3 bottom-[10px] w-3 h-[3px] bg-gray-600"></div>
    <motion.div
      animate={{ y: [0, -5, 0, -5, 0, -5] }}
      transition={{ y: { delay: 3, duration: 0.5 } }}
      className="absolute left-[9px] bottom-[7px] w-[3px] h-[3px] bg-gray-600"
    />
    <motion.div
      animate={{ y: [0, -5, 0, -5, 0, -5, 0, -5] }}
      transition={{ y: { delay: 3, duration: 0.5 } }}
      className="absolute right-[9px] bottom-[7px] w-[3px] h-[3px] bg-gray-600"
    />
  </motion.div>
));

// Set displayName for ESLint and React DevTools
AnimatedIcon.displayName = "AnimatedIcon";

export default function ThisCantBeReached() {
  const [showText, setShowText] = useState(false);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [animate, setAnimate] = useState(false);

  // Respect reduced motion preference
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    function calculateCenter() {
      let y =
        window.innerHeight > 640
          ? window.innerHeight / 2 - 160 - 20
          : window.innerHeight / 2 - 64 - 20;
      let x;
      if (window.innerWidth > 1280) {
        x = window.innerWidth / 2 - 384 - 18;
      } else if (window.innerWidth > 1024) {
        x = window.innerWidth / 2 - 192 - 18;
      } else if (window.innerWidth > 768) {
        x = window.innerWidth / 2 - 144 - 18;
      } else if (window.innerWidth > 640) {
        x = window.innerWidth / 2 - 96 - 18;
      } else {
        x = window.innerWidth / 2 - 16 - 18;
      }
      setCenter({ x, y });
    }
    const handleResize = debounce(calculateCenter, 100);
    calculateCenter();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setAnimate(true);
      setShowText(true);
      return;
    }
    requestAnimationFrame(() => {
      setAnimate(true);
      setTimeout(() => setShowText(true), 500);
    });
  }, [reducedMotion]);

  return (
    <main
      className="absolute h-screen w-full bg-white 
        py-16 sm:py-40 
        px-4 sm:px-24 md:px-36 lg:px-48 xl:px-96 
        flex flex-col space-y-5 sm:space-y-10"
      style={{ opacity: animate ? 1 : 0, transition: "opacity 0.2s" }}
      aria-label="Error: This site can't be reached"
    >
      <section className="relative w-full flex flex-col space-y-4">
        <AnimatedIcon centerX={center.x} centerY={center.y} animate={animate && !reducedMotion} />
        <AnimatePresence mode="wait">
          {animate && (
            <motion.span
              initial={{
                y: center.y + 50 - 20,
                x: center.x - 13,
                opacity: 0,
              }}
              animate={{ y: center.y + 50, opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.3 }}
              exit={{ opacity: 0 }}
              className="absolute font-bold text-gray-600 text-2xl"
              aria-live="polite"
            >
              Hello!
            </motion.span>
          )}
        </AnimatePresence>
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ opacity: { delay: 2, duration: 0.5 } }}
          className="w-full flex flex-col space-y-8"
        >
          <h1 className="text-gray-600 font-Header text-2xl">
            This site{" "}
            {showText ? (
              <span className="font-bold">actually can</span>
            ) : (
              <span>can&apos;t</span>
            )}{" "}
            be reached
          </h1>
          <p className="text-gray-500 text-md">
            <span className="font-bold">www.anton-sydor.netlify.app</span>
            unexpectedly{" "}
            {showText ? (
              <span className="font-bold">opened</span>
            ) : (
              <span>closed</span>
            )}{" "}
            the connection.
          </p>
          <div className="flex flex-col space-y-3">
            <span className="font-Header text-gray-400 text-lg">Try:</span>
            <ul className="flex flex-col space-y-2 pl-10 list-disc list-inside">
              <li className="text-Header text-gray-400 font-Header sm:text-base text-sm">
                Checking the connection
              </li>
              <li className="text-Header text-blue-500 font-Header sm:text-base text-sm">
                Checking the proxy and the firewall
              </li>
              <li className="text-Header text-blue-500 font-Header sm:text-base text-sm">
                Running Windows Network Diagnostics
              </li>
            </ul>
          </div>
          <span className="text-gray-400 text-sm">
            {showText ? (
              <span className="font-bold">SUCC_CONNECTION_OPENED</span>
            ) : (
              <span>ERR_CONNECTION_CLOSED</span>
            )}
          </span>
        </motion.div>
      </section>
      {/* Button Section */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ opacity: { delay: 2, duration: 0.5 } }}
      >
        <button
          className="px-4 py-2 bg-blue-500 rounded text-white sm:text-base text-sm"
          aria-label={showText ? "Start" : "Reload"}
        >
          {showText ? "Start" : "Reload"}
        </button>
      </motion.div>
    </main>
  );
}
