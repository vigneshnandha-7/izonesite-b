import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { useNavigate } from 'react-router-dom';

const Career = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden bg-background">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              Build Your Career
              <span className="gradient-text block">With Us</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Join a team of passionate innovators shaping the future of web development. 
              We're always looking for talented individuals to grow with us.
            </p>

            {/* Quick Action Cards */}
            <div className="grid md:grid-cols-2 gap-8 text-left mt-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 hover-glow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Job Openings</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    Join our talented team and build innovative web solutions for global clients. 
                    Explore exciting career opportunities and grow with us.
                  </p>
                </div>
                <Button 
                  onClick={() => {
                    navigate('/career/jobs');
                    window.scrollTo(0, 0);
                  }} 
                  className="glow-border hover-glow w-fit font-display"
                >
                  Apply for Job
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-8 hover-glow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">Internship Program</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    Kickstart your career with our internship program. Work on real projects, 
                    learn from experienced developers, and gain practical industry experience.
                  </p>
                </div>
                <Button 
                  onClick={() => {
                    navigate('/career/internships');
                    window.scrollTo(0, 0);
                  }} 
                  className="glow-border hover-glow w-fit font-display"
                >
                  Apply for Internship
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
