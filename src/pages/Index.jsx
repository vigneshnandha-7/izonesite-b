import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Cpu,
  Database,
  Layers,
  Zap,
  Shield,
  Users,
  Award,
  X,
  ChevronDown,
  FileText,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ScrollWorksSection from "@/components/ui/ScrollWorksSection";
import HeroAnimatedBackground from "../components/HeroAnimatedBackground";
import { useAdmin } from "@/context/AdminContext";
import Counter from "../components/ui/Counter";
import AnimatedServiceCard from "@/components/ui/AnimatedServiceCard";
import TestimonialCarousel from "../components/ui/TestimonialCarousel";
import { containerVariants, itemVariants, fadeInUp, fadeLeft, fadeRight, floatVariant } from "@/lib/animations";

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored web solutions built with cutting-edge technologies to meet your unique business needs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    icon: Layers,
    title: "Responsive Design",
    description: "Beautiful, mobile-first designs that look stunning and perform flawlessly on all devices.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast applications optimized for speed, SEO, and exceptional user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security practices to protect your data and ensure compliance.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
];

const stats = [
  { value: "150", label: "Projects Delivered" },
  { value: "50", label: "Happy Clients" },
  { value: "10", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern shopping experience with real-time inventory and seamless checkout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    client: "ShopMax Inc.",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Comprehensive analytics dashboard for enterprise data management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["TypeScript", "GraphQL", "AWS", "D3.js"],
    client: "DataFlow Systems",
  },
  {
    title: "Mobile Banking App",
    category: "Full Stack",
    description: "Cross-platform mobile banking solution with biometric authentication.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Plaid", "Node.js"],
    client: "FinSecure Bank",
  },
];

const ServiceSplitSection = ({ service, index }) => {
  const isEven = index % 2 !== 0; // if false, text left / image right
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const textContainerVariants = {
    hidden: { opacity: 0, x: isEven ? 50 : -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center group/section">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isEven ? -50 : 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'} h-full flex items-center justify-center`}
      >
        <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] md:aspect-[16/10] shadow-2xl group cursor-pointer w-full h-full">
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay pointer-events-none"></div>
          <motion.img 
            style={{ y: yParallax }}
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover scale-[1.10] transition-transform duration-700 group-hover:scale-[1.13] group-hover:rotate-1"
          />
        </div>
      </motion.div>

      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}
      >
        <motion.div variants={textItemVariants} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-zinc-800/50 shadow-xl border border-[#00c6ff]/10 dark:border-white/5 flex items-center justify-center mb-8 transform -rotate-3 group-hover/section:rotate-0 transition-transform duration-500">
          <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
        </motion.div>
        
        <motion.h3 
          variants={textItemVariants}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight hover:tracking-wide transition-all duration-300"
        >
          {service.title}
        </motion.h3>
        
        <motion.p 
          variants={textItemVariants}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
        >
          {service.description}
        </motion.p>
        
        <motion.div 
          variants={textItemVariants}
          className="flex items-center gap-4 text-primary font-bold hover:gap-6 transition-all cursor-pointer inline-flex w-fit group"
        >
          <span className="transition-colors">Learn More</span>
          <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const crossImageFromRight = {
  hidden: { opacity: 0, x: 120, filter: "blur(10px)" },
  visible: {
    opacity: [0, 1, 1],
    x: [120, -40, 0],
    filter: ["blur(10px)", "blur(0px)", "blur(0px)"],
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], times: [0, 0.6, 1] }
  }
};

const crossTextFromLeft = {
  hidden: { opacity: 0, x: -120, filter: "blur(10px)" },
  visible: {
    opacity: [0, 1, 1],
    x: [-120, 40, 0],
    filter: ["blur(10px)", "blur(0px)", "blur(0px)"],
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], times: [0, 0.6, 1] }
  }
};

const Index = () => {
  const { popups, testimonials } = useAdmin();
  const activePopup = popups?.find((p) => p.isActive) ?? null;
  const [dismissed, setDismissed] = useState(false);

  // Fallback testimonials if context is empty
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : [
    {
      id: 1,
      name: "Alex Thompson",
      role: "CEO, TechFlow",
      quote: "Izone Technologies transformed our digital presence with a speed and precision we hadn't seen before.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Founder, Bloomly",
      quote: "The team's attention to detail and proactive communication made the entire development process seamless.",
      rating: 5
    },
    {
      id: 3,
      name: "Marcus Miller",
      role: "Product Manager, Apex",
      quote: "Their technical expertise is matched only by their commitment to delivering a premium user experience.",
      rating: 5
    }
  ];

  return (
    <Layout>
      <div>
        {/* Hero Popup */}
        <AnimatePresence>
          {activePopup && !dismissed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setDismissed(true)}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative z-10 w-[90%] md:w-full max-w-lg bg-background/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-primary/10 mx-auto"
              >
                <button
                  onClick={() => setDismissed(true)}
                  className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors p-2"
                >
                  <X size={20} />
                </button>
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-8">
                  <Zap size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 tracking-tight">{activePopup.title}</h3>
                <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-sm mx-auto mb-10">{activePopup.description}</p>
                <Button
                  onClick={() => setDismissed(true)}
                  className="button-glow w-full md:w-auto px-10 py-6 rounded-xl text-base font-semibold"
                >
                  Confirm & Continue
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== PREMIUM HERO SECTION ===== */}
        <section className="hero-premium-bg relative w-full min-h-[100vh] overflow-hidden flex flex-col">

          {/* ══════════════════════════════════════════
              BACKGROUND LAYER STACK
          ══════════════════════════════════════════ */}
          <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">

            {/* 1. Mesh radial gradient overlay */}
            <div className="hero-mesh-overlay" />

            {/* 2. Glass Blob – top-left */}
            <div className="glass-blob blob glass-blob-tl" />

            {/* 3. Glass Blob – bottom-right */}
            <div className="glass-blob blob glass-blob-br" />

            {/* 4. Soft accent blob – center-right (colour tint) */}
            <div className="hero-blob hero-blob-1" />

            {/* 5. Soft accent blob – bottom-left (colour tint) */}
            <div className="hero-blob hero-blob-2" />

          </div>

          {/* ══════════════════════════════════════════
              WIREFRAME SVG SHAPES (foreground layer)
          ══════════════════════════════════════════ */}
          <svg className="hero-geo-shapes" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">

            {/* Pentagon – center-right focal shape */}
            <polygon
              points="1060,80 1170,145 1135,270 985,270 950,145"
              fill="none" stroke="#c89b6d" strokeWidth="1.2" opacity="0.22"
            />
            {/* Inner pentagon – smaller concentric */}
            <polygon
              points="1060,115 1140,163 1112,248 1008,248 980,163"
              fill="none" stroke="#c89b6d" strokeWidth="0.7" opacity="0.14"
            />

            {/* Diamond – upper-right */}
            <polygon
              points="1190,30 1230,90 1190,150 1150,90"
              fill="none" stroke="#c89b6d" strokeWidth="1" opacity="0.16"
            />

            {/* Large corner triangle – top-right bleed */}
            <polygon
              points="950,0 1280,0 1280,360"
              fill="none" stroke="#c89b6d" strokeWidth="0.8" opacity="0.10"
            />

            {/* Small triangle – bottom-left */}
            <polygon
              points="40,560 150,400 260,560"
              fill="none" stroke="#c89b6d" strokeWidth="1" opacity="0.13"
            />

            {/* Connecting dot-to-dot lines (mesh feel) */}
            <line x1="950" y1="145" x2="1150" y2="90" stroke="#c89b6d" strokeWidth="0.6" opacity="0.12" strokeDasharray="4 6" />
            <line x1="1135" y1="270" x2="1230" y2="150" stroke="#c89b6d" strokeWidth="0.6" opacity="0.10" strokeDasharray="4 6" />
            <line x1="0"    y1="580" x2="180" y2="420" stroke="#c89b6d" strokeWidth="0.8" opacity="0.09" />

            {/* Sparkle dots */}
            <circle cx="1245" cy="55"  r="3.5" fill="#c89b6d" opacity="0.30" />
            <circle cx="1260" cy="38"  r="2"   fill="#c89b6d" opacity="0.22" />
            <circle cx="940"  cy="290" r="2.5" fill="#1f7a8c" opacity="0.20" />
            <circle cx="80"   cy="540" r="3"   fill="#1f7a8c" opacity="0.18" />
            <circle cx="55"   cy="390" r="1.8" fill="#c89b6d" opacity="0.18" />
          </svg>

          {/* ── Main Content: nav sits in Layout, so just hero body ── */}
          <div className="flex-1 flex items-center pt-16 pb-4 lg:pt-20 lg:pb-8">
            <div className="container-custom relative z-10 px-4 md:px-8 lg:px-12 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

                {/* ── LEFT: Text Content ── */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-left"
                >
                  {/* Eyebrow tag */}
                  <motion.div variants={fadeInUp} className="mb-4 text-sm">
                    <span className="hero-eyebrow-tag">✦ IT Services &amp; Solutions</span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h1 variants={fadeInUp} className="hero-premium-heading">
                    <span className="hero-heading-line1">We Build</span>
                    <span className="hero-heading-line2">Digital</span>
                    <span className="hero-heading-line2">Excellence</span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p variants={fadeInUp} className="hero-premium-description">
                    Izone Technologies crafts exceptional web experiences that transform
                    businesses. From concept to deployment, we bring your vision to life
                    with precision and creativity.
                  </motion.p>

                  {/* CTA Row */}
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center mt-6">
                    <Link to="/contact">
                      <button className="hero-cta-btn">
                        Get Started <ArrowUpRight className="inline ml-2 w-5 h-5" />
                      </button>
                    </Link>
                    <Link to="/about" className="hero-secondary-link">
                      Learn More <ArrowRight className="inline ml-1 w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* ── RIGHT: Image + Glass Badge ── */}
                <motion.div
                  variants={fadeRight}
                  initial="hidden"
                  animate="visible"
                  className="relative flex flex-col justify-center items-center lg:items-end w-full"
                >
                  {/* Micro stats */}
                  <motion.div variants={fadeInUp} className="flex gap-5 sm:gap-8 md:gap-10 mb-6 w-full max-w-[520px] justify-start pl-2 sm:pl-0 flex-wrap">
                    {[{val: "150+", label: "Projects"}, {val: "50+", label: "Clients"}, {val: "10yrs", label: "Experience"}].map((s, i) => (
                      <div key={i} className="hero-stat-item">
                        <span className="hero-stat-val text-[1.5rem] md:text-[1.75rem] leading-none mb-1">{s.val}</span>
                        <span className="hero-stat-label text-[11px] md:text-xs">{s.label}</span>
                      </div>
                    ))}
                  </motion.div>

                  <div className="hero-image-outer group">
                    {/* Soft glow behind image */}
                    <div className="hero-image-glow" />

                    {/* Main Hero Image */}
                    <img
                      src="/hero_it_premium.png"
                      alt="Innovative IT Solutions — Izone Technologies"
                      className="hero-premium-image"
                    />

                    {/* ── Glassmorphism rotating contact badge ── */}
                    <div className="hero-glass-badge hidden lg:flex">
                      <div className="contact-rotate-text">
                        <svg viewBox="0 0 100 100">
                          <path
                            id="heroBadgePath"
                            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            fill="none"
                          />
                          <text className="badge-arc-text">
                            <textPath href="#heroBadgePath">CONTACT US • SPEAK WITH US • </textPath>
                          </text>
                        </svg>
                      </div>
                      <Link to="/contact" className="hero-badge-center">
                        <ArrowDownLeft className="w-7 h-7" />
                      </Link>
                    </div>

                    {/* Floating tag chip */}
                    <div className="hero-float-chip animate-float-chip">
                      <Zap className="w-4 h-4 text-amber-600" />
                      <span>Trusted by 50+ Brands</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background w-full flex justify-center relative overflow-hidden">
          <div className="bg-glow-blob -top-[10%] -left-[10%] opacity-[0.05]" />
          <div className="container-custom relative z-10 w-full">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-24 max-w-3xl mx-auto px-4"
            >
              <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">Our Services</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mt-8 leading-[1.1] text-foreground">
                Solutions built for the modern  era.
              </h2>
            </motion.div>

            <div className="flex flex-col gap-24 md:gap-32 px-4">
              {services.map((service, index) => (
                <ServiceSplitSection key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Unified Why Choose Us & Stats Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
              
              {/* Left Column: Image with overlap card */}
              <motion.div
                variants={crossImageFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex justify-center lg:justify-end z-20"
              >
                <div className="w-full max-w-lg aspect-square relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover rounded-[60px]"
                  />
                  {/* Subtle Accent Mark instead of Card */}
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
                </div>
              </motion.div>

              {/* Right Column: Content and Accordion */}
              <motion.div
                variants={crossTextFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="lg:pl-8 relative z-10"
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary font-semibold text-sm underline underline-offset-4 decoration-1">Why Choose Us</span>
                </div>
                


                <h2 className="font-display text-3xl md:text-5xl lg:text-[46px] font-bold mt-4 mb-6 text-foreground leading-[1.15] tracking-tight max-w-lg">
                  Your Success is Our Priority
                </h2>
                
                <p className="text-foreground/80 dark:text-muted-foreground mb-8 text-xs leading-loose max-w-md font-medium">
                  With over a decade of experience, we've mastered the art of creating digital solutions that drive results. Our team of expert developers, designers, and strategists work together to deliver excellence.
                </p>

                <div className="space-y-4 w-full max-w-md mt-10">
                  {[
                    "Dedicated team of experts",
                    "Award-winning solutions",
                    "Agile development process"
                  ].map((text, i) => (
                    <div key={i} className="minimal-border-left group cursor-pointer border-[#00c6ff]/10 hover:border-primary transition-colors">
                      <span className="font-bold text-foreground text-base tracking-tight">{text}</span>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="inline-block mt-8">
                  <Button size="lg" className="btn-hero-primary px-8 py-6 rounded-xl hover:scale-105 transition-transform">
                    Learn More About Us
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Bottom Row: Stats Circular Layout */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6 mt-32 mb-10 w-full max-w-6xl mx-auto"
            >
              {stats.map((stat, i) => (
                <motion.div variants={itemVariants} key={i} className="flex items-center gap-4">
                  {/* Circle Border Progress } */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#252C1E] dark:border-[#96A68D] relative flex items-center justify-center flex-shrink-0">
                    <div className="absolute inset-[-4px] rounded-full border-4 border-transparent border-t-[#D4E2BA] dark:border-t-[#3E4A35] border-r-[#D4E2BA] dark:border-r-[#3E4A35] -rotate-[30deg]" />
                    <span className="text-primary text-xl md:text-2xl font-bold">
                       {stat.value === "24/7" ? stat.value : <><Counter value={stat.value} />+</>}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-foreground text-sm uppercase leading-tight">{stat.label}</span>
                    <span className="text-[10px] text-foreground/60 leading-tight">Successful milestone<br/>track record</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-background w-full flex justify-center border-y border-borderSubtle">
          <div className="container-custom">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-24 max-w-2xl mx-auto px-4"
            >
              <h2 className="text-3xl md:text-5xl font-black mb-8 gradient-text">Testimonials</h2>
              <p className="text-zinc-600 text-xl leading-relaxed">
                What our clients say about working with us.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <TestimonialCarousel testimonials={displayTestimonials} />
            </motion.div>
          </div>
        </section>

        {/* Featured Projects - Scroll Animated */}
        <ScrollWorksSection
          works={projects}
          title="Our Portfolio"
          subtitle="Featured Projects"
        />

        {/* CTA Section */}
        <section className="section-padding bg-background w-full flex justify-center py-32 relative overflow-hidden border-t border-borderSubtle">
          <div className="bg-glow-blob -bottom-[20%] -right-[10%] opacity-[0.1]" />
          <div className="container-custom relative z-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tight gradient-text">
                  Ready to Start Your Project?
                </h2>
                <p className="text-foreground/70 text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed">
                  Let's craft something extraordinary. Get in touch with our team of experts and let's bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto px-12 py-8 text-xl rounded-2xl bg-primary text-white hover:scale-105 transition-transform">
                      Get In Touch
                      <ArrowUpRight className="ml-3 w-7 h-7" />
                    </Button>
                  </Link>
                  <Link to="/development" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto px-12 py-8 text-xl rounded-2xl border-primary/20 bg-transparent text-foreground hover:bg-primary/5 transition-all"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
