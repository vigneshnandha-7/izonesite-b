import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Code,
  Palette,
  Smartphone,
  Globe,
  MessageSquare,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

import { useAdmin } from '@/context/AdminContext';

const services = [
  { id: 'web', icon: Globe, label: 'Web Development' },
  { id: 'app', icon: Smartphone, label: 'App Development' },
  { id: 'software', icon: Code, label: 'Software Development' },
  { id: 'design', icon: Palette, label: 'Graphics Design' },
  { id: 'marketing', icon: MessageSquare, label: 'Digital Marketing' },
  { id: 'sms', icon: Zap, label: 'Bulk SMS Services' },
];

const subServiceOptions = {
  web: [
    { label: 'Static Website', description: 'Fast, secure, and cost-effective sites for simple business needs.' },
    { label: 'E-commerce Store', description: 'Fully featured online stores with secure checkout and inventory.' },
    { label: 'Custom Web Application', description: 'Scalable apps tailored to your specific business logic.' },
    { label: 'Landing Page', description: 'High-converting pages for marketing and lead generation.' },
    { label: 'Blog / Portfolio', description: 'Professional platforms for sharing content or showcasing work.' },
  ],
  app: [
    { label: 'iOS Application', description: 'Native apps built specifically for Apple devices using Swift.' },
    { label: 'Android Application', description: 'High-performance native apps for the Android ecosystem.' },
    { label: 'Cross-Platform App', description: 'Efficiently built apps for both iOS and Android (React Native/Flutter).' },
    { label: 'Progressive Web App (PWA)', description: 'Web apps that feel like native mobile apps on any device.' },
  ],
  software: [
    { label: 'ERP / CRM Solutions', description: 'Integrated systems to manage business processes and customers.' },
    { label: 'Inventory Management', description: 'Specialized software to track stock levels and sales.' },
    { label: 'Custom Billing Software', description: 'Tailored invoicing and billing for your unique model.' },
    { label: 'Enterprise Software', description: 'Robust, large-scale apps for complex organizational needs.' },
  ],
  design: [
    { label: 'Logo & Branding', description: 'Unique visual identities that capture your brand essence.' },
    { label: 'UI/UX Design', description: 'Intuitive and beautiful interfaces for optimal user experience.' },
    { label: 'Graphic Design', description: 'Custom visual content for marketing and brand materials.' },
    { label: 'Social Media Assets', description: 'Eye-catching graphics optimized for various platforms.' },
  ],
  marketing: [
    { label: 'Social Media Marketing', description: 'Strategic campaigns to grow your presence and engagement.' },
    { label: 'SEO Optimization', description: 'Improve search rankings and drive organic traffic.' },
    { label: 'Pay-Per-Click (PPC)', description: 'Targeted ads to drive immediate traffic and conversions.' },
    { label: 'Content Strategy', description: 'Planning for high-impact content that resonates with your audience.' },
  ],
  sms: [
    { label: 'Bulk SMS (Promotional)', description: 'Reach large audiences effectively with marketing messages.' },
    { label: 'Transactional SMS', description: 'Automated alerts, OTPs, and notifications for transactions.' },
    { label: 'WhatsApp Marketing', description: 'Direct engagement with customers on WhatsApp.' },
    { label: 'Digital Election Campaign', description: 'Specialized digital outreach for political campaigns.' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const GetStarted = () => {
  const { toast } = useToast();
  const { addServiceRequest } = useAdmin();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedServices: [],
    subServices: [],
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
  });

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => {
      const isSelected = prev.selectedServices.includes(serviceId);
      const newSelectedServices = isSelected
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      
      // Also clear sub-services for deslected parent service
      const possibleSubServices = subServiceOptions[serviceId] || [];
      const newSubServices = isSelected
        ? prev.subServices.filter(s => !possibleSubServices.some(opt => opt.label === s))
        : prev.subServices;

      return {
        ...prev,
        selectedServices: newSelectedServices,
        subServices: newSubServices,
      };
    });
  };

  const handleSubServiceToggle = (subService) => {
    setFormData((prev) => ({
      ...prev,
      subServices: prev.subServices.includes(subService)
        ? prev.subServices.filter((s) => s !== subService)
        : [...prev.subServices, subService],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addServiceRequest({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      projectDetails: formData.projectDetails,
      services: formData.selectedServices.join(', '),
      subServices: formData.subServices.join(', '),
    });
    toast({
      title: 'Request Submitted!',
      description:
        'Our team will contact you within 24 hours to discuss your project.',
    });

    setStep(1);
    setFormData({
      selectedServices: [],
      subServices: [],
      name: '',
      email: '',
      phone: '',
      company: '',
      projectDetails: '',
    });
  };

  const canProceedStep1 = formData.selectedServices.length > 0;
  const canProceedStep2 = formData.subServices.length > 0;
  const canSubmit =
    formData.name && formData.email && formData.projectDetails;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Start Your Journey
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Let's Build Something
              <span className="gradient-text block mt-2">
                Extraordinary
              </span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
              Tell us about your project and we'll help you bring your
              vision to life. Our team is ready to create exceptional
              digital solutions for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex justify-center items-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= s
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 md:w-24 h-1 mx-2 rounded transition-all ${
                      step > s ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Step 1: Select Services */}
            {step === 1 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    What services do you need?
                  </h2>
                  <p className="text-muted-foreground">
                    Select all that apply to your project
                  </p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8"
                >
                  {services.map((service) => (
                      <motion.div
                        key={service.id}
                        variants={itemVariants}
                        onClick={() => handleServiceToggle(service.id)}
                        className={`glass-card p-6 cursor-pointer transition-all hover:scale-105 flex flex-col items-center text-center justify-center min-h-[160px] ${
                          formData.selectedServices.includes(service.id)
                            ? 'border-2 border-primary bg-primary/20 shadow-[0_0_20px_rgba(184,134,94,0.3)]'
                            : 'hover:border-primary/50'
                        }`}
                      >
                        <service.icon
                          className={`w-10 h-10 mb-4 ${
                            formData.selectedServices.includes(service.id)
                              ? 'text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                        <span className={`font-medium text-sm transition-colors ${
                          formData.selectedServices.includes(service.id) ? 'text-primary' : ''
                        }`}>{service.label}</span>
                      </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-end mt-4 md:mt-0">
                  <Button
                    size="lg"
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                    className="w-full sm:w-auto glow-border hover-glow"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {/* Step 2: Specific Service Selection */}
            {step === 2 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    Service Details
                  </h2>
                  <p className="text-muted-foreground">
                    Which specific solutions are you interested in?
                  </p>
                </motion.div>

                <div className="space-y-8 mb-8">
                  {formData.selectedServices.map((serviceId) => {
                    const parentService = services.find(s => s.id === serviceId);
                    const options = subServiceOptions[serviceId] || [];
                    
                    if (options.length === 0) return null;

                    return (
                      <motion.div key={serviceId} variants={itemVariants}>
                        <div className="flex items-center gap-2 mb-4">
                           <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                             <parentService.icon className="w-4 h-4 text-primary" />
                           </div>
                           <h3 className="font-display font-semibold text-lg">{parentService.label}</h3>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                          {options.map((option) => (
                            <div
                              key={option.label}
                              onClick={() => handleSubServiceToggle(option.label)}
                              className={`glass-card p-5 cursor-pointer flex flex-col items-center text-center gap-3 transition-all group min-h-[180px] w-full sm:w-[calc(50%-0.5rem)] md:w-[220px] justify-center flex-shrink-0 ${
                                formData.subServices.includes(option.label)
                                  ? 'border-2 border-primary bg-primary/10 transition-shadow shadow-md'
                                  : 'hover:border-primary/50'
                              }`}
                            >
                              <div className="flex flex-col items-center gap-2 mb-1">
                                <h4 className="font-bold text-sm leading-tight text-foreground transition-colors group-hover:text-primary">{option.label}</h4>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {option.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between gap-4 mt-8 md:mt-0">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="w-full sm:w-auto"
                  >
                    Back
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => setStep(3)}
                    disabled={!canProceedStep2}
                    className="w-full sm:w-auto glow-border hover-glow"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    Tell us about yourself
                  </h2>
                  <p className="text-muted-foreground">
                    We'll use this information to get in touch with you
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="glass-card p-6 md:p-8 mb-8">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Input
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData(prev => ({ ...prev, projectDetails: e.target.value }))}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto"
                  >
                    Back
                  </Button>
                  <Button
                    size="lg"
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="w-full sm:w-auto glow-border hover-glow"
                  >
                    Submit Request
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Why Work With Us?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Quick Response',
                description: 'We respond to all inquiries within 24 hours and provide detailed project proposals.',
              },
              {
                title: 'Transparent Pricing',
                description: 'No hidden costs. We provide detailed quotes with clear breakdown of all expenses.',
              },
              {
                title: 'Dedicated Support',
                description: 'Get a dedicated project manager and 24/7 support throughout your project journey.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;