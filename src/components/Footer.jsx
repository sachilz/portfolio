import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaMedium, FaArrowUp, FaLinux } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, href: 'https://github.com/sachilz', label: 'GitHub', hoverColor: '#00ff66' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sachilz/', label: 'LinkedIn', hoverColor: '#00f0ff' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@NextOpz', label: 'YouTube', hoverColor: '#ff4444' },
  { icon: FaMedium, href: 'https://medium.com/@sachilz', label: 'Medium', hoverColor: '#ffffff' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-white/10 font-mono-code">

      <div className="bg-[#06080d]/95 backdrop-blur-xl px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">

          {/* Left — Linux Tmux / System Statusline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-gray-400 flex-wrap justify-center md:justify-start"
          >
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <FaLinux size={15} />
              <span>archlinux-lts</span>
            </div>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">utf-8</span>
            <span className="text-gray-600">|</span>
            <span className="text-emerald-400">exit 0</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300 font-medium">
              © {new Date().getFullYear()} Sachintha Dissanayaka
            </span>
          </motion.div>

          {/* Right — Socials + Back to Top */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socials.map(({ icon: Icon, href, label, hoverColor }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                className="text-gray-600 transition-colors duration-300"
                onMouseEnter={e => (e.currentTarget.style.color = hoverColor)}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                <Icon size={15} />
              </motion.a>
            ))}

            {/* Divider */}
            <div className="w-px h-4 bg-white/10 mx-1" />

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.15, color: '#00f0ff' }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              aria-label="Back to top"
              className="text-gray-600 hover:text-brand-cyan transition-colors duration-300"
            >
              <FaArrowUp size={13} />
            </motion.button>
          </motion.div>

        </div>
      </div>


    </footer>
  );
};

export default Footer;
