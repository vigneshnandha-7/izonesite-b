import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const cardColors = [
  "#cfd8c3",
  "#b7c7a3",
  "#a3b18a",
  "#8f9f77",
  "#7b8d61"
];

export function ScrollWorksSection({
  works,
  title = "Our Work",
  subtitle = "Case Studies",
}) {
  return (
    <section className="relative w-full">
      {/* Container for the Header */}
      <div className="container-custom pt-32 pb-10 px-4 md:px-8 relative z-10">
        <div className="text-center">
          <span className="text-primary font-medium">{title}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
            {subtitle}
          </h2>
        </div>
      </div>

      {/* Stacking Cards */}
      <div className="-mb-12">
        {works.map((work, i) => (
          <ScrollWorkCard 
            key={i} 
            work={work} 
            index={i} 
            color={cardColors[i % cardColors.length]} 
            isLast={i === works.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function ScrollWorkCard({ work, index, color, isLast }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Scale effect (stacking feel)
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.9]
  );

  // Slight upward movement
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      className={`${isLast ? 'h-[80vh] mb-0 pb-0' : 'h-screen'} sticky top-24 flex items-center justify-center`}
    >
      <motion.div
        style={{ scale, y, backgroundColor: color }}
        className="w-[90%] max-w-6xl h-[80vh] rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 text-foreground overflow-hidden"
      >
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-[#1A1A1A]">
          <h1 className="text-4xl md:text-6xl font-black opacity-30">
            {String(index + 1).padStart(2, '0')}
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold">
            {work.title}
          </h2>

          <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
            {work.description}
          </p>

          <div className="hidden md:flex flex-wrap gap-2 pt-2">
            {work.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full border border-black/20 text-xs font-semibold hover:bg-black/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <Link to="/development">
              <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition font-medium">
                See All Works
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 h-48 md:h-[90%] mt-6 md:mt-0 flex items-center justify-center">
          <img
            src={work.image}
            alt={work.title}
            className="w-[90%] md:w-[80%] h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default ScrollWorksSection;
