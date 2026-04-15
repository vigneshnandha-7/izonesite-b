import { motion } from "framer-motion";

const ExpertCard = ({ name, role, avatar, image }) => {
  // Use professional placeholder headshots if no image is provided
  const headshots = {
    "Sarah Chen": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    "Michael Rodriguez": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "Emily Johnson": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    "David Kim": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    "Lisa Wang": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    "James Miller": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  };

  const imageUrl = image || headshots[name] || `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="flex flex-col items-center group"
    >
      {/* Circular Profile Image with Outer Ring */}
      <div className="relative mb-8 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
        {/* Animated Glow / Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00c6ff]/40 to-[#7b61ff]/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#00c6ff]/20 to-[#7b61ff]/20 border border-white/5" />
        
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#00c6ff]/50 transition-colors duration-500 shadow-2xl">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
          />
        </div>

        {/* Floating Social Placeholder (as seen in ref) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
           <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">in</span>
           </div>
           <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">𝕏</span>
           </div>
        </div>
      </div>

      {/* Name and Role */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#00c6ff] transition-colors">
          {name}
        </h3>
        <p className="text-sm font-bold text-[#00c6ff] uppercase tracking-[0.2em]">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default ExpertCard;
