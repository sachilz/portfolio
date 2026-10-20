import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaMedium, FaArrowUp } from 'react-icons/fa';

const socials = [
  { icon: FaGithub, href: 'https://github.com/sachilz', label: 'GitHub', hoverColor: '#ffffff' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sachilz/', label: 'LinkedIn', hoverColor: '#0A66C2' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@NextOpz', label: 'YouTube', hoverColor: '#FF0000' },
  { icon: FaMedium, href: 'https://medium.com/@sachilz', label: 'Medium', hoverColor: '#ffffff' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-white/10">

      <div className="bg-[#07070a]/90 backdrop-blur-xl px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left — Branding */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono text-gray-500 whitespace-nowrap"
          >
            © {new Date().getFullYear()}{' '}
            <span className="text-gray-300 font-semibold">
              Sachintha Dissanayaka
            </span>
          </motion.p>

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
