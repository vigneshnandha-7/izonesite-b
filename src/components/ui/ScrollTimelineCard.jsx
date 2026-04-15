import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollTimelineCard({ item, index }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isEven = index % 2 === 0;

  // The rotation goes from -25deg to 25deg as you scroll down past
  const rotateTo = isEven ? 25 : -25;
  const rotation = useTransform(scrollYProgress, [0, 1], [-rotateTo, rotateTo]);
  
  // The parallax effect moves the image opposite to scroll to make it look stationary-ish inside the frame
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto mb-[25vh] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center"
    >
      <div className={`w-full relative perspective-1000 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <motion.div 
          style={{ rotateZ: rotation }}
          className="relative w-[90%] md:w-[85%] mx-auto aspect-[4/3] overflow-hidden rounded-md shadow-2xl"
        >
          <motion.img 
            src={item.image} 
            alt={item.title}
            style={{ y: yParallax, scale: 1.4 }}
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-500"
          />
        </motion.div>
      </div>

      <div className={`w-full relative z-20 ${isEven ? 'md:order-2 md:pl-16' : 'md:order-1 md:pr-16 md:text-right'}`}>
        <div className={`max-w-md bg-background/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl mx-auto md:mx-0 ${isEven ? 'ml-0' : 'md:ml-auto'}`}>
          <div className={`flex items-baseline gap-4 mb-6 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
            <span className="text-secondary font-display font-medium text-3xl md:text-4xl border-b-2 border-secondary/30 pb-1">
              {item.year}
            </span>
            <h2 className="font-dancing text-primary font-bold text-4xl md:text-6xl leading-none">
              {item.title}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed font-serif italic">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
