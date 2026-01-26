
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About & Plans', path: '/about' },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">YARA Brothers<span className="text-indigo-500">.</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                location.pathname === link.path ? 'text-indigo-400' : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="text-sm font-medium text-gray-300 transition-colors hover:text-indigo-400"
          >
            Contact
          </a>
          <Link 
            to="/about" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-b border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-indigo-400' : 'text-gray-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                className="text-lg font-medium text-gray-300"
                onClick={handleContactClick}
              >
                Contact
              </a>
              <Link
                to="/about"
                className="bg-indigo-600 text-white px-5 py-3 rounded-xl text-center font-bold"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
