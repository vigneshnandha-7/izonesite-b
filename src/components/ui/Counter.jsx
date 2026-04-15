import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useInView, animate } from "framer-motion";

const Counter = ({ value, duration = 1.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Stable parsing of the value
  const { numericValue, prefix, suffix, hasMatch } = useMemo(() => {
    const match = value.match(/(\d+)(.*)/);
    const preMatch = value.match(/^[^\d]*/);
    
    return {
      numericValue: match ? parseInt(match[1]) : 0,
      suffix: match ? match[2] : "",
      prefix: preMatch ? preMatch[0] : "",
      hasMatch: !!match
    };
  }, [value]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && hasMatch) {
      const controls = animate(0, numericValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return controls.stop;
    }
  }, [isInView, numericValue, duration, hasMatch]);

  if (!hasMatch) return <span>{value}</span>;

  return (
    <span ref={ref} className="inline-block">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
