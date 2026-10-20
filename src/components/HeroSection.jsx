import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaMedium, FaTerminal, FaDocker, FaAws, FaDownload } from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(15px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: "tween", duration: 1.0, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-24 pb-16 overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center z-10 relative">

        {/* Systemd Active Daemon Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center space-x-3 bg-[#0a0d14]/90 border border-emerald-500/40 rounded-full px-4 py-2 mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,102,0.15)] font-mono-code"
        >
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full relative">
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-[11px] text-gray-300 tracking-wider">
            <span className="text-emerald-400 font-bold">systemd:</span> ACTIVE (RUNNING) · <span className="text-brand-cyan">READY FOR HIRE</span>
          </span>
        </motion.div>

        {/* Linux Inspired Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-['Outfit'] tracking-tighter leading-tight mb-6 flex flex-col md:flex-row md:flex-wrap justify-center gap-x-6 md:gap-x-8"
        >
          <motion.span variants={wordVariants} className="text-white inline-block">
            Automate.
          </motion.span>
          <motion.span variants={wordVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-cyan to-blue-500 inline-block">
            Scale.
          </motion.span>
          <motion.span variants={wordVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-brand-purple inline-block">
            Deploy.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mb-10 font-normal leading-relaxed px-4 md:px-0 font-mono-code"
        >
          <span className="text-emerald-400 font-bold">$</span> I am a <strong className="text-white font-semibold">DevOps & Cloud Engineer</strong> architecting zero-downtime environments, heterogeneous Linux fleet automation, and cloud-native CI/CD pipelines.
        </motion.p>

        {/* Action Commands Row */}

        {/* Linux Styled Action Commands Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full font-mono-code"
        >
          {/* SSH / Initiate Contact Command Button */}
          <a 
            href="#contact" 
            className="relative group cursor-pointer flex items-center bg-[#0a0d14]/90 hover:bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 rounded-xl px-5 py-3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,102,0.25)] w-full md:w-auto justify-center"
          >
            <FaTerminal className="text-emerald-400 text-sm mr-2 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-white tracking-wide text-xs sm:text-sm">
              <span className="text-emerald-400 mr-1">$</span>./initiate_contact.sh
            </span>
          </a>

          {/* Curl / Download CV Command Button */}
          <a 
            href="/resume.pdf" 
            download 
            className="relative group cursor-pointer flex items-center bg-[#0a0d14]/90 hover:bg-brand-cyan/10 border border-brand-cyan/30 hover:border-brand-cyan rounded-xl px-5 py-3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] w-full md:w-auto justify-center"
          >
            <FaDownload className="text-brand-cyan text-sm mr-2 group-hover:-translate-y-0.5 transition-transform" />
            <span className="font-semibold text-white tracking-wide text-xs sm:text-sm">
              <span className="text-brand-cyan mr-1">$</span>curl -O resume.pdf
            </span>
          </a>

          <div className="h-8 w-px bg-white/10 hidden lg:block"></div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <SocialIcon href="https://github.com/sachilz" Icon={FaGithub} label="git" />
            <SocialIcon href="https://www.linkedin.com/in/sachilz/" Icon={FaLinkedin} label="in" />
            <SocialIcon href="https://www.youtube.com/@NextOpz" Icon={FaYoutube} label="yt" />
            <SocialIcon href="https://medium.com/@sachilz" Icon={FaMedium} label="md" />
          </div>
        </motion.div>

      </div>

      {/* Floating System Architecture Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotateZ: [-4, 4, -4] }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-24 left-4 md:top-[18%] md:left-[8%] z-20 text-blue-500 opacity-90 drop-shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:scale-110 transition-all cursor-pointer"
        title="Kubernetes Cluster"
      >
        <SiKubernetes className="text-3xl sm:text-5xl md:text-6xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotateZ: [8, -8, 8] }}
        transition={{ y: { duration: 7, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-10 left-4 md:bottom-[15%] md:left-[10%] z-20 text-brand-cyan opacity-90 drop-shadow-[0_0_35px_rgba(0,240,255,0.6)] hover:scale-110 transition-all cursor-pointer"
        title="Docker Engine"
      >
        <FaDocker className="text-3xl sm:text-5xl md:text-7xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotateZ: [10, -5, 10] }}
        transition={{ y: { duration: 8, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-1/4 right-2 md:top-[18%] md:right-[10%] z-20 text-orange-400 opacity-90 drop-shadow-[0_0_35px_rgba(251,146,60,0.6)] hover:scale-110 transition-all cursor-pointer"
        title="AWS Cloud Platform"
      >
        <FaAws className="text-3xl sm:text-5xl md:text-7xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], rotateZ: [-8, 8, -8] }}
        transition={{ y: { duration: 9, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 9, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-10 right-4 md:bottom-[20%] md:right-[10%] z-20 text-white opacity-90 drop-shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:scale-110 transition-all cursor-pointer"
        title="GitHub CI/CD"
      >
        <FaGithub className="text-3xl sm:text-5xl md:text-6xl" />
      </motion.div>

    </section>
  );
};

const SocialIcon = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 bg-[#0a0d14]/90 border border-white/10 rounded-xl hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 hover:-translate-y-1 transition-all duration-300 shadow-md"
  >
    <Icon className="text-base sm:text-lg text-gray-400 hover:text-emerald-400 transition-colors" />
  </a>
);

export default HeroSection;
