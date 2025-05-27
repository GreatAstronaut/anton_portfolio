
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Constants for breakpoints and offsets
const SMALL_SCREEN_WIDTH = 768;
const OFFSETS = {
  large: { x: 48 + 20, y: 44 },
  small: { x: 28, y: 40 },
};

function useStartupLogoPosition() {
  const [dimensions, setDimensions] = useState({
    widthBy2: 0,
    heightBy2: 0,
    greaterThanSmall: false,
  });

  useEffect(() => {
    function updateDimensions() {
      const isLarge = window.innerWidth > SMALL_SCREEN_WIDTH;
      const offset = isLarge ? OFFSETS.large : OFFSETS.small;
      setDimensions({
        widthBy2: window.innerWidth / 2 - offset.x,
        heightBy2: window.innerHeight / 2 - offset.y,
        greaterThanSmall: isLarge,
      });
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
}

const barConfigs = [
  // Horizontal bars
  { rotate: 90, x: 38, y: 0, delay: 0.8, key: "right" },
  { rotate: 90, x: -39, y: 0, delay: 0.8, key: "left" },
  // Diagonal bars (top)
  { rotate: 35, x: 18, y: -34, delay: 1.5, opacityDelay: 2, key: "top-right" },
  { rotate: -35, x: -18, y: -34, delay: 1.5, opacityDelay: 2, key: "top-left" },
  // Diagonal bars (bottom)
  { rotate: -35, x: 18, y: 34, delay: 1.5, opacityDelay: 2, key: "bottom-right" },
  { rotate: 35, x: -18, y: 34, delay: 1.5, opacityDelay: 2, key: "bottom-left" },
];

const Startup: React.FC = () => {
  const { widthBy2, heightBy2, greaterThanSmall } = useStartupLogoPosition();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ opacity: { delay: 4.9, duration: 0 } }}
      className="absolute h-full w-full flex justify-center items-center bg-StartupBackground"
    >
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, scale: "100%" }}
        animate={{
          opacity: [1, 0, 1],
          x: -widthBy2,
          y: -heightBy2,
          scale: greaterThanSmall ? "57%" : "50%",
        }}
        transition={{
          opacity: { delay: 3, duration: 1.5 },
          x: { duration: 0.5, delay: 4.5 },
          y: { duration: 0.5, delay: 4.5 },
          scale: { duration: 0.5, delay: 4.5 },
        }}
        className="relative h-24 w-24 flex justify-center items-center"
      >
        {/* Render horizontal and diagonal bars */}
        {barConfigs.map((cfg, idx) => (
          <motion.div
            key={cfg.key}
            initial={
              idx < 2
                ? { scale: 0, x: 0 }
                : { opacity: 0, scale: 0, x: 0, y: 0 }
            }
            animate={
              idx < 2
                ? { scale: 1, rotate: cfg.rotate, x: cfg.x }
                : {
                    opacity: 1,
                    scale: 1.05,
                    rotate: cfg.rotate,
                    x: cfg.x,
                    y: cfg.y,
                  }
            }
            transition={
              idx < 2
                ? {
                    scale: { duration: 1.5 },
                    rotate: { delay: 0.5, duration: 0.5 },
                    x: { delay: cfg.delay, duration: 1 },
                  }
                : {
                    opacity: { delay: cfg.opacityDelay, duration: 0 },
                    scale: { duration: 2.5 },
                    rotate: { delay: 0.5, duration: 0.5 },
                    y: { delay: 1.2, duration: 2 },
                    x: { delay: cfg.delay, duration: 0.5 },
                  }
            }
            className="absolute h-2 w-12 bg-AAsecondary rounded"
          />
        ))}
        {/* Center S */}
        <motion.span
          initial={{ scale: 0, y: -4, x: -1 }}
          animate={{ scale: 1 }}
          transition={{ scale: { delay: 1.5, duration: 1.5 } }}
          className="text-AAsecondary font-Text2 text-4xl"
        >
          A
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Startup;
