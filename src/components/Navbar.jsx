import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Videos', 'Articles', 'Contact'];

  return (
    <>
      {/* Brand Logo Fixed Top Left */}
      <div
        className={`fixed z-[60] left-6 lg:left-10 transition-all duration-500 text-xl md:text-2xl font-bold font-['Outfit'] tracking-tighter cursor-pointer text-white ${scrolled ? 'top-5' : 'top-8'}`}
      >
        Sachintha<span className="text-brand-cyan ml-1">.</span>
      </div>

      {/* Centered Liquid Glass Pill Navbar (Desktop Only) */}
      <nav
        className={`hidden md:flex fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-auto rounded-full border border-white/10 justify-center items-center backdrop-blur-xl
          ${scrolled
            ? 'top-4 bg-[#0a0f1a]/70 shadow-[0_8px_32px_rgba(0,240,255,0.1)] py-3 px-8'
            : 'top-6 bg-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.3)] py-4 px-10'
          }`}
      >
        <div className="flex space-x-6 lg:space-x-10 items-center">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-[11px] lg:text-xs uppercase tracking-[0.2em] font-medium"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Toggle Fixed Top Right */}
      <button
        className={`md:hidden fixed z-[60] right-6 transition-all duration-500 text-white text-xl focus:outline-none p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full shadow-lg hover:bg-white/20 hover:scale-105 active:scale-95 ${scrolled ? 'top-3' : 'top-5'}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 min-h-screen"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-bold text-white hover:text-brand-cyan transition-colors uppercase tracking-widest"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
