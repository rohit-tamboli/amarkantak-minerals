  import { useState, useEffect } from 'react';
  import { Menu, X, Droplets } from 'lucide-react';
  import { motion, AnimatePresence } from 'motion/react';

  export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Products', href: '#products' },
      { name: 'Process', href: '#process' },
      { name: 'Contact', href: '#contact' },
    ];

    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-panel shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 z-50">
              <Droplets className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-xl lg:text-2xl tracking-tight text-dark">
                Amarkantak <span className="text-primary">Minerals</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-dark hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#distributor"
                className="bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-full text-base font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Become Distributor
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 z-50 text-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 md:hidden"
            >
              <div className="flex flex-col px-4 py-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-dark hover:text-primary p-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#distributor"
                  className="bg-primary text-white text-center px-6 py-3 rounded-full font-medium mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become Distributor
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }
