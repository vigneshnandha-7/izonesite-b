import { motion } from "framer-motion";
import { Building2, Users, Globe, Award, Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import { useAdmin } from "@/context/AdminContext";
const stats = [
  {
    icon: <Building2 className="w-8 h-8" />,
    value: "500+",
    label: "Clients Served",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "50M+",
    label: "Users Reached",
  },
  { icon: <Globe className="w-8 h-8" />, value: "25+", label: "Countries" },
  {
    icon: <Award className="w-8 h-8" />,
    value: "99%",
    label: "Satisfaction Rate",
  },
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
  visible: { opacity: 1, y: 0 },
};

import Counter from "../components/ui/Counter";

const Clients = () => {
  const { clients, testimonials } = useAdmin();

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
              Our Clients
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trusted by
              <span className="block mt-2 overflow-visible">
                <span className="inline-block leading-[1.25] pb-[0.15em] gradient-text -mt-7">
                  Industry Leaders
                </span>
              </span>
            </h1>
            <p className="text-lg text-muted-foreground -mt-5">
              We're proud to partner with leading organizations across various
              industries to deliver exceptional digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center hover-glow"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <Counter value={stat.value} />
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our Valued <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, we've helped businesses across
              industries achieve their digital goals.
            </p>
          </motion.div>

          <div className="w-full relative overflow-hidden py-4 -mx-4 px-4 py-8">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              {[...(clients || []), ...(clients || [])].map((client, index) => (
                <div
                  key={index}
                  className="glass-card p-6 group hover-glow cursor-pointer w-[300px] shrink-0 h-full flex flex-col"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 overflow-hidden group-hover:bg-primary/20 transition-colors shrink-0">
                    {client.icon ? (
                      <img src={client.icon} alt={client.companyName} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-display text-xl font-bold text-primary">
                        {client.companyName ? client.companyName.substring(0, 2).toUpperCase() : <Building2 />}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {client.companyName || client.name}
                  </h3>
                  <p className="text-primary text-sm mb-2">{client.industry}</p>
                  <p className="text-muted-foreground text-sm flex-1">
                    {client.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex overflow-x-auto gap-6 pb-6 snap-x"
          >
            {testimonials?.map((testimonial, index) => (
              <motion.div
                key={testimonial.id || index}
                variants={itemVariants}
                className="glass-card glow-border p-8 relative w-[300px] md:w-[400px] shrink-0 snap-center"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">
                  "{testimonial.description || testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name || testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border-2 border-primary/20">
                      {(testimonial.name || testimonial.author)?.[0]?.toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name || testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.designation || testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>
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
                Join Our Growing List of Clients
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss how we can help your business achieve its digital
                goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
