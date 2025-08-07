import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Zap, Wifi } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Placements', href: '/placements' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar - Hidden on large screens */}
      <div className="bg-gradient-neon text-background px-4 py-2 text-sm lg:hidden">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="flex items-center gap-1">
            <Zap size={14} />
            +91 98765 43210
          </span>
          <span className="flex items-center gap-1">
            <Cpu size={14} />
            info@iattechnologies.com
          </span>
          <span className="flex items-center gap-1">
            <Wifi size={14} />
            100% Neural Network
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border/20 transition-all duration-300",
          scrolled 
            ? "glass neon-glow" 
            : "bg-background/20 backdrop-blur-sm"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="IAT Technologies" 
                className="h-10 w-10 object-contain neon-glow rounded-lg"
              />
              <span className="font-bold text-xl gradient-text font-orbitron">
                IAT Technologies
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    to={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-inter",
                      isActive(item.href)
                        ? "text-primary neon-glow-cyan bg-primary/10"
                        : "text-foreground hover:text-primary hover:shadow-neon-orange hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-neon"
                        layoutId="activeTab"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="glow" size="sm" className="hidden md:flex font-orbitron">
                Get Started
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 glass neon-glow border-b border-primary/20"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 font-inter",
                        isActive(item.href)
                          ? "text-primary neon-glow bg-primary/10"
                          : "text-foreground hover:text-primary hover:shadow-neon-orange hover:bg-primary/5"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button variant="glow" className="w-full mt-4 font-orbitron">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;