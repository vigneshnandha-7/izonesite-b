import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Build fast, scalable web apps that grow your business ",
    badge: "Custom Web Applications",
    summary:
      "We create bespoke web applications that perfectly align with your business requirements using cutting-edge technologies to deliver scalable, maintainable solutions.",
    icon: <Code className="w-8 h-8 text-blue-500" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    gradient: "from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20",
    features: [
      "Lightning-fast React & Next.js apps",
      "Scalable & maintainable architecture",
      "Seamless API integrations",
    ],
    link: "/development/web-development",
  },
  {
    title: "Engage users everywhere with flawless mobile-first designs 📱",
    badge: "Responsive Design",
    summary:
      "Every website we build is fully responsive, ensuring a seamless experience from smartphones to large desktop monitors using a mobile-first strategy.",
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    gradient: "from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20",
    features: [
      "Mobile-First Approach",
      "Cross-Browser perfection",
      "Fluid Layouts & Touch Optimization",
    ],
    link: "/development/graphics-designer",
  },
  {
    title: "Launch powerful online stores that skyrocket your sales 🛒",
    badge: "E-Commerce Solutions",
    summary:
      "Build your online store with powerful e-commerce features including product management, secure checkout, payment gateway integration, and real-time analytics.",
    icon: <Globe className="w-8 h-8 text-green-500" />,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    gradient: "from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20",
    features: [
      "Custom Shopify & WooCommerce storefronts",
      "Secure Payment Integration",
      "Advanced Inventory Systems",
    ],
    link: "/development/web-development",
  },
  {
    title: "Power your apps with rock-solid, scalable server infrastructure ⚙️",
    badge: "Backend Development",
    summary:
      "Our backend expertise includes building RESTful APIs, GraphQL services, microservices architecture, and database design for reliable performance.",
    icon: <Database className="w-8 h-8 text-orange-500" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    gradient: "from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20",
    features: [
      "High-performance Node.js & Python",
      "Secure REST & GraphQL APIs",
      "Robust Database Architecture (SQL/NoSQL)",
    ],
    link: "/development/software-development",
  },
  {
    title: "Protect your data with military-grade security & compliance 🛡️",
    badge: "Security & Compliance",
    summary:
      "We implement industry-standard security measures including SSL/TLS encryption, input validation, authentication systems, and regular audits.",
    icon: <Shield className="w-8 h-8 text-red-500" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    gradient: "from-red-500/10 to-rose-500/10 dark:from-red-900/20 dark:to-rose-900/20",
    features: [
      "End-to-end SSL/TLS Encryption",
      "Secure OAuth & JWT Authentication",
      "Continuous Security Audits & Compliance",
    ],
    link: "/development/software-development",
  },
  {
    title: "Dominate app stores with stunning native & cross-platform apps 📱",
    badge: "App Development",
    summary:
      "We build high-performance mobile applications using cutting-edge frameworks to deliver native-like experiences across all devices from a single codebase.",
    icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    gradient: "from-cyan-500/10 to-blue-500/10 dark:from-cyan-900/20 dark:to-blue-900/20",
    features: [
      "React Native & Flutter expertise",
      "Seamless iOS & Android performance",
      "Offline Support & Push Notifications",
    ],
    link: "/development/app-development",
  },
  {
    title: "Unlock the future with intelligent predictive AI & ML models 🧠",
    badge: "AI & ML Development",
    summary:
      "Harness the power of your data with advanced AI solutions. We build intelligent models for automation, actionable predictions, and personalized recommendations.",
    icon: <BrainCircuit className="w-8 h-8 text-violet-500" />,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    gradient: "from-violet-500/10 to-fuchsia-500/10 dark:from-violet-900/20 dark:to-fuchsia-900/20",
    features: [
      "Predictive Analytics & Forecasting",
      "Advanced Natural Language Processing",
      "Custom Model Training & Computer Vision",
    ],
    link: "/development/ai-ml-development",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Development = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden bg-background text-foreground transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Build Your Digital
              <span className="gradient-text block">Presence</span>
            </h1>
            <p className="text-lg text-foreground/70 dark:text-slate-400">
              From stunning websites to powerful web applications, we deliver
              cutting-edge solutions that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

    {/* Main Storytelling Flow - Services List */}
      <div className="flex flex-col w-full relative z-10">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section 
              key={index}
              className={`py-24 md:py-32 relative overflow-hidden bg-gradient-to-b ${service.gradient}`}
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
                          src={service.image} 
                          alt={service.badge}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        
                        {/* Floating Icon Badge */}
                        <div className="absolute bottom-6 left-6 w-16 h-16 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-xl animate-float">
                          {service.icon}
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
                      {service.badge}
                    </span>
                    
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-[1.15]">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                      {service.summary}
                    </p>
                    
                    <div className="space-y-4 mb-10">
                      {service.features.map((feature, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                          className="flex items-center gap-3 text-slate-800 dark:text-slate-200"
                        >
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                          <span className="font-medium text-[1.1rem]">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {service.link && (
                      <Link to={service.link} className="w-fit">
                        <Button size="lg" className="rounded-xl font-bold px-8 shadow-xl hover:-translate-y-1 transition-transform group">
                          Explore Service
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

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card glow-border p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                Ready to Build Your Website?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
                Let's discuss your project and create something extraordinary
                together.
              </p>
              <Link to="/contact">
                <Button size="lg" className="glow-border hover-glow">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Development;
