import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const defaultImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
];

const defaultGradients = [
  "from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20",
  "from-pink-500/10 to-rose-500/10 dark:from-pink-900/20 dark:to-rose-900/20",
  "from-green-500/10 to-emerald-500/10 dark:from-green-900/20 dark:to-emerald-900/20",
  "from-orange-500/10 to-amber-500/10 dark:from-orange-900/20 dark:to-amber-900/20",
];

export default function VisualSplitServiceList({ services }) {
  return (
    <div className="flex flex-col w-full relative z-10">
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const Icon = service.icon;
        const image = service.image || defaultImages[index % defaultImages.length];
        const gradient = service.gradient || defaultGradients[index % defaultGradients.length];

        return (
          <section
            key={index}
            className={`py-24 md:py-32 relative overflow-hidden bg-gradient-to-b ${gradient}`}
          >
            {/* Optional glowing blob for effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 dark:bg-white/5 blur-3xl rounded-full opacity-50 pointer-events-none" />

            <div className="container-custom relative z-10">
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                {/* Image/Visual Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group perspective-1000">
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-[40px] -z-10" />
                    <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/10 bg-white/5 backdrop-blur-sm">
                      <img
                        src={image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      {/* Floating Icon Badge */}
                      <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                        {React.isValidElement(Icon) ? (
                          React.cloneElement(Icon, { className: "w-8 h-8 text-white group-hover:text-primary transition-colors" })
                        ) : typeof Icon === "function" || (typeof Icon === "object" && Icon !== null) ? (
                          <Icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                        ) : (
                          Icon
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-background border border-border shadow-sm text-primary text-sm font-bold tracking-wide w-fit mb-6">
                    {service.badge || service.title}
                  </span>

                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-[1.15]">
                    {service.title}
                  </h2>

                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    {service.summary || service.description || service.fullContent}
                  </p>

                  <div className="space-y-4 mb-10">
                    {service.features &&
                      service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-center gap-3 text-slate-800 dark:text-slate-200"
                        >
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                          <span className="font-medium text-[1.1rem]">{feature}</span>
                        </motion.div>
                      ))}
                  </div>

                  {service.link && (
                    <Link to={service.link} className="w-fit">
                      <Button
                        size="lg"
                        className="rounded-xl font-bold px-8 shadow-xl hover:-translate-y-1 transition-transform group"
                      >
                        Explore Details
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
