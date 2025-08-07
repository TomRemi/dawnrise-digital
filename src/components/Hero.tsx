import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Award, TrendingUp, Cpu, Zap, Wifi } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const stats = [
    { icon: Cpu, label: 'AI-Powered Learning', value: '5000+', color: 'primary' },
    { icon: Zap, label: 'Neural Networks', value: '100%', color: 'secondary' },
    { icon: Wifi, label: 'Quantum Boost', value: '4.9★', color: 'primary' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-neon opacity-5 rounded-full blur-3xl animate-neon-pulse"></div>
      </div>

      {/* Dark overlay with tech pattern */}
      <div className="absolute inset-0 bg-background/80">
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFA500' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Neon Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl neon-glow"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 bg-secondary/30 rounded-full blur-lg neon-glow-cyan"
          animate={{
            y: [0, 25, 0],
            x: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-accent/40 rounded-full blur-md shadow-glow-intense"
          animate={{
            y: [0, -35, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Additional tech particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 glass neon-glow-cyan rounded-full text-secondary text-sm font-medium font-inter"
          >
            🚀 Next-Gen Technology Institute
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-orbitron"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text glitch">Transform Your Future</span>
            <br />
            <span className="text-foreground">with Technology</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Enter the future of technology education. Master AI, blockchain, quantum computing, 
            and next-gen development with our immersive training programs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button variant="glow" size="xl" className="text-lg px-8 py-6 font-orbitron group" asChild>
              <Link to="/courses">
                Explore Courses
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" className="text-lg px-8 py-6 font-inter group">
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-2 glass p-4 rounded-lg"
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-neon-orange)" }}
            >
              <span className="text-primary font-bold text-2xl font-orbitron neon-glow">5000+</span>
              <span className="font-inter">Future Engineers</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 glass p-4 rounded-lg"
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-neon-cyan)" }}
            >
              <span className="text-secondary font-bold text-2xl font-orbitron neon-glow-cyan">100%</span>
              <span className="font-inter">Success Rate</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2 glass p-4 rounded-lg"
              whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow-intense)" }}
            >
              <span className="text-primary font-bold text-2xl font-orbitron neon-glow">4.9★</span>
              <span className="font-inter">Neural Rating</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass neon-glow rounded-xl p-6 text-center hover-lift relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "var(--shadow-glow-intense)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-neon opacity-5"></div>
                <div className="relative z-10">
                  <div className="text-primary mb-4 text-4xl neon-glow">
                    <stat.icon size={48} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 font-orbitron gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-inter">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-12 border-2 border-primary rounded-full flex justify-center neon-glow relative">
          <div className="w-1 h-4 bg-gradient-neon rounded-full mt-2 animate-neon-pulse" />
          <div className="absolute -inset-2 border border-secondary/30 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;