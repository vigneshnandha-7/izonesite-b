// src/components/HeroAnimatedBackground.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroAnimatedBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-0 bg-no-repeat"
      animate={{
        y: [7, -10, 7],
        rotate: [2, 0, 2],
      }}
      transition={{
        duration: 14,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.85,
        transformOrigin: "center",
      }}
    />
  );
};

export default HeroAnimatedBackground;
