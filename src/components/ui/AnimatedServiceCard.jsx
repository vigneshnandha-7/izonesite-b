import React from 'react';
import './AnimatedServiceCard.css';

import { motion } from 'framer-motion';

const AnimatedServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="service-card-premium group relative p-5 md:p-6 rounded-[28px] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow duration-500 overflow-hidden h-full"
    >
      {/* Decorative Index Number */}
      <div className="absolute -top-3 -right-2 font-display text-6xl font-black text-black/[0.03] dark:text-white/[0.02] select-none pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Floating Icon Container */}
        <div className="w-10 h-10 rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center mb-4 rotate-3 group-hover:rotate-0 transition-transform duration-500 group-hover:bg-primary group-hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)]">
          <Icon className="w-5 h-5 text-primary transition-all duration-500 group-hover:text-white group-hover:scale-110" />
        </div>

        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>

        {/* Subtle Bottom Accent Line */}
        <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">
          </span>
        </div>
      </div>

      {/* Background Decorative Blob (Corner) */}
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default AnimatedServiceCard;
