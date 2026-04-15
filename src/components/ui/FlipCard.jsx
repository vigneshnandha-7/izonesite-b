import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { floatVariant } from "@/lib/animations";



export function FlipCard({
  title,
  summary,
  fullContent,
  icon,
  features = [],
  use3D = false,
  shape3D = "cube",
  delay = 0,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="perspective-1000 w-full"
    >
      <motion.div
        className="relative w-full min-h-[320px] cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass-card p-6 glow-border hover-glow backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >

          <div className="flex items-start gap-4 mb-4">
            {icon && (
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {summary}
              </p>
            </div>
          </div>
          {features.length > 0 && (
            <ul className="space-y-2 mt-4">
              {features.slice(0, 3).map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          )}
          <div className="absolute bottom-4 right-4 text-primary text-xs font-medium">
            Click to flip →
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass-card p-6 glow-border flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide custom-scrollbar">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {fullContent}
            </p>
            {features.length > 0 && (
              <div className="mb-8">
                <h4 className="font-semibold text-foreground text-sm mb-2">
                  All Features:
                </h4>
                <ul className="space-y-1">
                  {features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="absolute bottom-4 right-4 text-primary text-[10px] font-medium bg-background/50 backdrop-blur-sm px-2 py-1 rounded-md">
            ← Click to flip back
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FlipCard;
