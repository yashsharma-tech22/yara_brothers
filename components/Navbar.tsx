
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
    { name: 'About / Plans', path: '/about-plans' },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'backdrop-blur-lg bg-white/5 py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative bg-indigo-600 p-2.5 rounded-2xl group-hover:-rotate-6 transition-transform duration-500 border border-indigo-400/30">
            <Rocket className="text-white w-6 h-6 fill-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">YARA Brothers<span className="text-indigo-400">.</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold tracking-widest uppercase transition-all hover:text-white ${
                location.pathname === link.path ? 'text-indigo-400' : 'text-slate-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" onClick={handleContactClick} className="text-sm font-bold tracking-widest uppercase transition-all hover:text-white text-slate-400">Contact</a>
          <Link
            to="/about-plans"
            className="relative group overflow-hidden bg-white text-indigo-950 px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-indigo-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white transition-colors p-3 glass rounded-2xl border border-white/10"
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
            className="md:hidden bg-[#030014]/95 backdrop-blur-3xl border-b border-white/5"
          >
            <div className="px-8 pt-4 pb-12 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-6 py-5 text-lg font-bold text-slate-300 hover:text-indigo-400 hover:bg-white/5 rounded-3xl transition-all ${
                    location.pathname === link.path ? 'text-indigo-400' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a href="#contact" className="block px-6 py-5 text-lg font-bold text-slate-300 hover:text-indigo-400 hover:bg-white/5 rounded-3xl transition-all" onClick={handleContactClick}>Contact</a>
              <Link to="/about-plans" className="w-full block text-center bg-indigo-600 text-white py-5 rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-indigo-600/20" onClick={() => setIsOpen(false)}>Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
