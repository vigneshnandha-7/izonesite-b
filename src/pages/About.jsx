import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Calendar,
  Award,
  Lightbulb,
  Code,
  Globe,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ExpertCard from "../components/ui/ExpertCard";
import CEOCard from "../components/ui/CEOCard";
import ScrollTimelineCard from "../components/ui/ScrollTimelineCard";
import Counter from "../components/ui/Counter";
import { useAdmin } from "@/context/AdminContext";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour our hearts into every project, treating your success as our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly pushing boundaries to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients to ensure perfect alignment with their vision.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to delivering nothing less than exceptional quality.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CTO",
    avatar: "SC",
    bio: "Full-stack expert passionate about scalable architecture.",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Designer",
    avatar: "MR",
    bio: "Award-winning designer focused on user experience.",
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    avatar: "EJ",
    bio: "Agile enthusiast ensuring seamless project delivery.",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    avatar: "DK",
    bio: "React specialist with a love for clean code.",
  },
  {
    name: "Lisa Wang",
    role: "UX Researcher",
    avatar: "LW",
    bio: "Data-driven designer advocating for user needs.",
  },
  {
    name: "James Miller",
    role: "DevOps Engineer",
    avatar: "JM",
    bio: "Cloud infrastructure specialist ensuring 99.9% uptime.",
  },
];

const ceoData = {
  name: "Mr.B.Kesavan M.E",
  role: "CEO",
  description:
    "Visionary leader with 15+ years of experience in the tech industry. Kesavan founded Izone Technologies with a mission to democratize world-class web development and help businesses of all sizes achieve digital excellence.",
};

const milestones = [
  {
    year: "2014",
    title: "Founded",
    description:
      "Izone Technologies was born with a vision to transform digital experiences.",
    image: "/timeline/founded.png",
  },
  {
    year: "2016",
    title: "First Major Client",
    description: "Partnered with Fortune 500 company for enterprise solution.",
    image: "/timeline/client.png",
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Grew to 25+ team members across multiple countries.",
    image: "/timeline/team.png",
  },
  {
    year: "2020",
    title: "Global Reach",
    description: "Expanded services to clients in 15+ countries worldwide.",
    image: "/timeline/global.png",
  },
  {
    year: "2022",
    title: "Industry Award",
    description: "Recognized as Top Web Development Agency of the Year.",
    image: "/timeline/award.png",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched R&D division for emerging technologies.",
    image: "/timeline/innovation.png",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Next.js",
  "Vue.js",
];

const stats = [
  { value: "15", label: "Years", icon: Calendar },
  { value: "200", label: "Projects", icon: Code },
  { value: "200", label: "Team", icon: Users },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const { sitePhotos } = useAdmin();

  const defaultPhotos = [
    { src: "/life-at-izone/office-interior.png", alt: "Our modern office space" },
    { src: "/life-at-izone/team-meeting.png", alt: "Team brainstorming session" },
    { src: "/life-at-izone/team-collaboration.png", alt: "Collaborative work sessions" },
    { src: "/life-at-izone/team-hands.png", alt: "Team unity and spirit" },
    { src: "/life-at-izone/tech-presentation.png", alt: "Knowledge sharing presentations" },
    { src: "/life-at-izone/focused-work.png", alt: "Focused and productive work" },
  ];

  const displayPhotos = sitePhotos?.length > 0 
    ? sitePhotos.map(p => ({ src: p.url, alt: p.name || "Life at Izone" }))
    : defaultPhotos;

  return (
    <Layout>
      <div className="bg-background text-foreground font-sans overflow-hidden">
        {/* NEW Premium Hero Section */}
        <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-background dark:bg-[#070b14] flex items-center min-h-[100vh] transition-colors duration-300">
          {/* Subtle floating glow elements */}
          <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-[#00c6ff] rounded-full blur-[100px] opacity-20 dark:opacity-40 animate-float" />
          <div className="absolute bottom-[20%] right-[10%] w-40 h-40 bg-[#7b61ff] rounded-full blur-[120px] opacity-20 dark:opacity-40 animate-float" style={{ animationDelay: "2s" }} />
          
          <div className="container-custom relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(15,76,92,0.1)]">
                  <span className="w-2 h-2 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
                  About Izone Technologies
                </div>
                
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
                  Innovating the <br />
                  <span className="text-gradient-cyan-purple pb-2 inline-block">Digital Landscape</span>
                </h1>
                
                <p className="text-lg md:text-xl text-foreground/80 dark:text-slate-300 leading-relaxed mb-8">
                  Established in 2016 at Trichy, an IT Hub consisting of diverse
                  IT Services including Web Design, Software & Mobile App Development,
                  Digital Marketing, and Student Career Development.
                </p>
                
                <div className="flex gap-4">
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative h-[400px] lg:h-[500px] flex justify-center items-center"
              >
                {/* Decorative floating shapes/cards replacing static images */}
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-8 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
                  
                  <motion.div 
                    className="absolute top-10 left-0 card-glass p-4 md:p-6 w-36 md:w-48 animate-float shadow-2xl"
                    style={{ animationDelay: "0s" }}
                  >
                    <Code className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold text-white mb-2">Modern Stack</h3>
                    <p className="text-xs text-slate-400">React, Node, Cloud</p>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-10 right-0 card-glass p-4 md:p-6 w-36 md:w-48 animate-float shadow-2xl z-10"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <Globe className="w-8 h-8 text-[#7b61ff] mb-4" />
                    <h3 className="font-bold text-white mb-2">Global Reach</h3>
                    <p className="text-xs text-slate-400">Clients worldwide</p>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 card-glass p-8 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(15,76,92,0.1)] animate-float"
                    style={{ animationDelay: "3s" }}
                  >
                    <Zap className="w-12 h-12 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Numbers Section (REFINED) */}
        <section className="py-24 bg-background dark:bg-[#070b14] border-y border-black/5 dark:border-white/5 relative z-20">
          <div className="container-custom px-4">
             <div className="flex flex-wrap justify-center md:justify-around gap-12 md:gap-8 items-center">
               {stats.map((stat, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="flex items-center gap-4 group cursor-default"
                 >
                   <div className="flex items-baseline gap-2">
                     <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                       <Counter value={stat.value} />+
                     </h3>
                     <p className="text-foreground/60 dark:text-slate-400 text-xl font-medium">{stat.label}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* Mission & Vision (Updated to Light Theme) */}
        <section className="py-32 relative overflow-hidden bg-background border-y border-slate-100">
          <div className="container-custom">
            
            {/* Mission Row */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Our Mission <br/>
                  <span className="text-primary">In Focus</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  We strive to develop smart applications and websites for our
                  clients to maximize their IT efficiency and business profitability.
                  Our goal is to be a global leader and expert in providing smart
                  training with smart skills.
                </p>
              </motion.div>
              
              <div className="relative h-[450px] group/card">
                <div className="absolute inset-0 bg-slate-50 rounded-[32px] overflow-hidden border border-slate-200 transition-all duration-500 shadow-xl group-hover/card:-translate-y-4 group-hover/card:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                  <div className="relative h-full p-10 flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-12 shadow-inner">
                       <Target className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">Target Excellence</h3>
                    <p className="text-foreground/60 text-lg leading-relaxed max-w-xs">Delivering perfection in every pixel and line of code.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Row */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-[450px] group/card">
                <div className="absolute inset-0 bg-indigo-50 rounded-[32px] overflow-hidden border border-indigo-100 transition-all duration-500 shadow-xl group-hover/card:-translate-y-4 group-hover/card:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
                  <div className="relative h-full p-10 flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-indigo-100/50 flex items-center justify-center mb-12 shadow-inner">
                       <Eye className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Future Forward</h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-xs">Anticipating tomorrow's tech landscape today.</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-8 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Our Vision <br/>
                  <span className="text-secondary">For Tomorrow</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  To provide smart training with smart skills and develop
                  smart applications enthusiastically with innovative methods,
                  achieving full-fledged customer satisfaction and going
                  beyond customer expectations.
                </p>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Values (Glass Cards) */}
        <section className="py-32 bg-[#070b14] relative border-y border-white/5 overflow-hidden">
          <div className="absolute left-[20%] top-0 w-96 h-96 bg-[#7b61ff]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Core <span className="text-gradient-cyan-purple">Values</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                The principles that guide our decisions, shape our culture, and drive our success.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card-glass p-8 text-center card-glass-glow flex flex-col items-center group cursor-default h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#00c6ff]/20 group-hover:border-[#00c6ff]/50 transition-all duration-300">
                    <value.icon className="w-8 h-8 text-[#00c6ff] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-24 bg-background border-b border-slate-100 relative z-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CEOCard 
                name={ceoData.name} 
                role={ceoData.role} 
                description={ceoData.description} 
              />
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-32 border-b border-white/5 bg-[#0f172a]">
          <div className="container-custom">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                Meet the Minds
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-[#7b61ff] tracking-tight">
                Behind Izone
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
            >
              {team.slice(0, 4).map((member, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ExpertCard
                    name={member.name}
                    role={member.role}
                    avatar={member.avatar}
                    bio={member.bio}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Life at Izone - Premium Split Layout (Updated to Light Theme) */}
        <section className="py-32 bg-background border-b border-slate-100 relative overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-md"
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Life at <span className="text-primary">Izone</span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  We believe in a culture of collaboration and constant learning. 
                  From knowledge sharing sessions to team celebrations, life at Izone 
                  is about growth and fun.
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#00c6ff] to-[#7b61ff] rounded-full" />
              </motion.div>

              {/* Right Column: Masonry/Creative Image Grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {/* Image 1: Smaller, top left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden aspect-[4/3] self-end"
                >
                  <img
                    src={displayPhotos[0]?.src || "/life-at-izone/team-meeting.png"}
                    alt="Team Collaboration"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>

                {/* Image 2: Larger, right side */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden aspect-[3/4] row-span-2"
                >
                  <img
                    src={displayPhotos[1]?.src || "/life-at-izone/focused-work.png"}
                    alt="Focused Work"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>

                {/* Image 3: Bottom left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={displayPhotos[2]?.src || "/life-at-izone/team-collaboration.png"}
                    alt="Life at Izone"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#070b14]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24 md:mb-32"
            >
              <span className="text-[#00c6ff] font-semibold tracking-wider uppercase text-sm mb-4 block">Our Journey</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-white">
                Company Timeline
              </h2>
            </motion.div>

            <div className="relative">
              {milestones.map((milestone, index) => (
                <ScrollTimelineCard key={index} item={milestone} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-32 bg-[#0f172a]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-[#7b61ff] font-semibold tracking-wider uppercase text-sm mb-4 block">Our Stack</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-white">
                Technologies We Master
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="px-8 py-4 rounded-full card-glass border border-white/10 hover:border-[#00c6ff]/50 transition-all cursor-default shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,198,255,0.2)]"
                >
                  <span className="text-foreground dark:text-white font-medium text-lg">{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
