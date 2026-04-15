import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Phone,
  MessageCircle,
  Megaphone,
  Vote,
  ArrowRight,
} from "lucide-react";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import FlipCard from "../components/ui/FlipCard";

const services = [
  {
    title: "Bulk SMS",
    summary: "Reach thousands of customers instantly with our reliable bulk SMS platform.",
    fullContent: "Our Bulk SMS service allows you to send promotional and transactional messages at lightning speed. Guarantee high delivery rates and track your campaigns in real-time.",
    icon: <MessageSquare className="w-7 h-7 text-primary" />,
    features: ["High Delivery Rate", "API Integration", "Real-time Tracking", "Scheduled Campaigns"],
    shape3D: "cube",
    link: "/services/bulk-sms",
  },
  {
    title: "Voice SMS",
    summary: "Connect with your audience personally through automated voice calls.",
    fullContent: "Broadcast pre-recorded voice messages to thousands of recipients simultaneously. Perfect for announcements, reminders, and political campaigns in local languages.",
    icon: <Phone className="w-7 h-7 text-primary" />,
    features: ["Automated Dialing", "Regional Languages", "Call Analytics", "Personalized Messages"],
    shape3D: "sphere",
    link: "/services/voice-sms",
  },
  {
    title: "WhatsApp Panel",
    summary: "Manage all your WhatsApp communications from a single centralized dashboard.",
    fullContent: "Streamline your customer support and marketing with our WhatsApp Panel. Manage multiple chats, set automated replies, and handle campaigns effortlessly.",
    icon: <MessageCircle className="w-7 h-7 text-primary" />,
    features: ["Multi-Agent Support", "Chatbots", "Rich Media Support", "Analytics Dashboard"],
    shape3D: "torus",
    link: "/services/whatsapp-panel",
  },
  {
    title: "WhatsApp Marketing",
    summary: "Drive engagement and sales through targeted WhatsApp marketing campaigns.",
    fullContent: "Leverage the world's most popular messaging app for your marketing. Send catalogs, offers, and interactive messages directly to your customers' phones.",
    icon: <Megaphone className="w-7 h-7 text-primary" />,
    features: ["Bulk Messaging", "Interactive Buttons", "Catalog Integration", "Performance Metrics"],
    shape3D: "octahedron",
    link: "/services/whatsapp-marketing",
  },
  {
    title: "Digital Election Campaign",
    summary: "Comprehensive digital strategies tailored for modern political campaigns.",
    fullContent: "Elevate your political campaign with our comprehensive digital solutions. We combine social media, SMS, voice calls, and data analytics to maximize voter outreach.",
    icon: <Vote className="w-7 h-7 text-primary" />,
    features: ["Voter Targeting", "Social Media Management", "Opinion Polls", "Campaign Tracking"],
    shape3D: "cube",
    link: "/services/digital-election-campaign",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Our Core Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Communication
              <span className="gradient-text block">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Powerful marketing and communication tools designed to connect you with your audience effectively and instantly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zig-Zag Timeline Layout Section */}
      <section className="section-padding bg-slate-50/50 dark:bg-slate-900/10">
        <div className="container-custom max-w-4xl">


          {/* Timeline Wrapper */}
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:auto">
            {services.map((service, index) => {
              const pallete = [
                { dot: "bg-orange-500", tagBg: "bg-orange-100 dark:bg-orange-900/30", tagText: "text-orange-600 dark:text-orange-400" },
                { dot: "bg-blue-500", tagBg: "bg-blue-100 dark:bg-blue-900/30", tagText: "text-blue-600 dark:text-blue-400" },
                { dot: "bg-green-500", tagBg: "bg-green-100 dark:bg-green-900/30", tagText: "text-green-600 dark:text-green-400" },
                { dot: "bg-purple-500", tagBg: "bg-purple-100 dark:bg-purple-900/30", tagText: "text-purple-600 dark:text-purple-400" },
                { dot: "bg-rose-500", tagBg: "bg-rose-100 dark:bg-rose-900/30", tagText: "text-rose-600 dark:text-rose-400" },
              ][index % 5];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 relative pl-8 md:pl-12"
                >
                  {/* Glowing Dot on the line */}
                  <div
                    className={`absolute -left-[11px] top-6 w-5 h-5 rounded-full border-[3px] border-white dark:border-slate-950 shadow-sm ${pallete.dot}`}
                  ></div>

                  {/* Card Content */}
                  <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 text-sm font-medium mb-6">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full border border-transparent dark:border-white/5 ${pallete.tagBg} ${pallete.tagText}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link to={service.link}>
                      <Button variant="ghost" className="font-semibold text-primary hover:text-primary/80 group p-0 hover:bg-transparent">
                        Explore Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Expand Your Reach?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss your communication needs and create a strategy that drives results.
              </p>
              <Link to="/contact">
                <Button size="lg" className="glow-border hover-glow">
                  Contact Us Today
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

export default Services;
