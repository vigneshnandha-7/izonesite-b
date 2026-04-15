import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpotlightServiceCard = ({ title, summary, features, icon, link }) => {
  return (
    <div className="relative h-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary/50 overflow-hidden group/card flex flex-col">
      {/* Background Radial Gradient Glow effect on Hover */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.15)_0%,transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"></div>
      
      {/* Big Icon / Visual Header */}
      <div className="mb-8 relative inline-flex">
        {/* Soft glow behind the icon */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover/card:blur-2xl transition-all duration-500 group-hover/card:bg-primary/40"></div>
        
        {/* Icon Container */}
        <div className="relative z-10 w-20 h-20 rounded-[1.25rem] bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-all duration-500 shadow-sm">
           {React.isValidElement(icon) 
             ? React.cloneElement(icon, { className: "w-10 h-10 transition-colors duration-500" }) 
             : icon}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover/card:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-8 text-[1.05rem] leading-relaxed flex-grow">
        {summary}
      </p>

      {/* Styled Features List */}
      <ul className="space-y-3 mb-8">
        {features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover/card:bg-primary transition-colors duration-300">
              <Check className="w-3 h-3 text-primary group-hover/card:text-white dark:group-hover/card:text-primary-foreground" />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Action Link */}
      <div className="mt-auto pt-4 flex items-center text-primary font-bold text-sm tracking-wide group-hover/card:tracking-wider transition-all duration-300">
        EXPLORE DETAILS
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/card:translate-x-2 transition-transform duration-300" />
      </div>
    </div>
  );
};

export default SpotlightServiceCard;
