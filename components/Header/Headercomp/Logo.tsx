
import React from "react";
import { motion } from "framer-motion";

type LogoProps = {
  finishedLoading: boolean;
};

const barConfigs = [
  { animate: { rotate: -30, y: 5 }, key: "bar1" },
  { animate: { rotate: 90, x: -10, y: 18 }, key: "bar2" },
  { animate: { rotate: 30, y: 31 }, key: "bar3" },
  { animate: { rotate: -30, y: 27, x: 19 }, key: "bar4" },
  { animate: { rotate: 30, x: 19, y: -10 }, key: "bar5" },
  { animate: { rotate: 90, x: 28, y: 2 }, key: "bar6" },
];

export default function Logo({ finishedLoading }: LogoProps) {
  const transitionDelay = finishedLoading ? 0 : 8;

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        y: { delay: transitionDelay, duration: 0 },
        opacity: { delay: transitionDelay, duration: 0 },
      }}
      className="relative h-12 w-10"
    >
      <motion.span
        initial={{ x: 1 }}
        className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
      >
        A
      </motion.span>
      {barConfigs.map(({ animate, key }) => (
        <motion.div
          key={key}
          animate={animate}
          className="h-1 w-6 rounded bg-AAsecondary"
        />
      ))}
    </motion.div>
  );
}
