// src/components/AnimatedHeading.jsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  as: Tag = "h1",
  className = "",
  start = "top 60%", // Maintained for prop compatibility, though translating to margins
  stagger = 0.06,
  yPercent = 100,
}) => {
  const characters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: yPercent ? `${yPercent}%` : "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const MotionTag = motion(Tag);

  return (
    <MotionTag
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
    >
      {characters.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ whiteSpace: "pre", display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default AnimatedText;
