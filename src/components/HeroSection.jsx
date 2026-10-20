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
        staggerChildren: 0.6,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 80, filter: 'blur(20px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: "tween", duration: 1.4, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center z-10 relative">

        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 md:mb-12 backdrop-blur-md hover:bg-white/10 transition-colors"
        >
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full relative">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <span className="text-[10px] sm:text-xs font-mono text-gray-300 uppercase tracking-widest">Available for hire</span>
        </motion.div>

        {/* Animated Staggering Typography */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-['Outfit'] tracking-tighter leading-tight mb-8 flex flex-col md:flex-row md:flex-wrap justify-center gap-x-6 md:gap-x-8"
        >
          <motion.span variants={wordVariants} className="text-white pb-2 md:pb-4 -mb-2 md:-mb-4 inline-block">
            Automate.
          </motion.span>
          <motion.span variants={wordVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-500 pb-2 md:pb-4 -mb-2 md:-mb-4 inline-block">
            Scale.
          </motion.span>
          <motion.span variants={wordVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-brand-purple pb-2 md:pb-4 -mb-2 md:-mb-4 inline-block">
            Deploy.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-400 text-sm sm:text-base md:text-xl max-w-2xl mb-12 font-light leading-relaxed px-4 md:px-0"
        >
          I am a <strong className="text-white font-medium">DevOps Engineer</strong> architecting zero-downtime environments, cloud native data pipelines, and next-generation Kubernetes clusters.
        </motion.p>

        {/* Interactive Action Row with Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full"
        >
          {/* Avatar Button Alternative */}
          <a href="#contact" className="relative group cursor-pointer flex items-center bg-white/5 hover:bg-white/10 border border-brand-cyan/20 rounded-full p-2 pr-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:border-brand-cyan w-full md:w-auto justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple p-[2px]">
              <div className="w-full h-full bg-brand-dark rounded-full overflow-hidden flex items-center justify-center shadow-inner relative">
                <FaTerminal className="text-brand-cyan text-lg sm:text-xl relative z-10 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <span className="ml-4 font-bold text-white tracking-wide text-sm sm:text-base">Initiate Contact</span>
          </a>

          {/* Download Resume Button */}
          <a href="/resume.pdf" download className="relative group cursor-pointer flex items-center bg-white/5 hover:bg-white/10 border border-brand-purple/20 rounded-full p-2 pr-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(176,38,255,0.2)] hover:border-brand-purple w-full md:w-auto justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-brand-purple to-brand-cyan p-[2px]">
              <div className="w-full h-full bg-brand-dark rounded-full overflow-hidden flex items-center justify-center shadow-inner relative">
                <FaDownload className="text-brand-purple text-lg sm:text-xl relative z-10 group-hover:-translate-y-[2px] transition-transform" />
              </div>
            </div>
            <span className="ml-4 font-bold text-white tracking-wide text-sm sm:text-base">Download CV</span>
          </a>

          <div className="h-10 w-px bg-white/20 hidden lg:block"></div>

          <div className="flex space-x-4">
            <SocialIcon href="https://github.com/sachilz" Icon={FaGithub} />
            <SocialIcon href="https://www.linkedin.com/in/sachilz/" Icon={FaLinkedin} />
            <SocialIcon href="https://www.youtube.com/@NextOpz" Icon={FaYoutube} />
            <SocialIcon href="https://medium.com/@sachilz" Icon={FaMedium} />
          </div>
        </motion.div>

      </div>



      {/* 3D Floating Isometric Icons (Hidden on very small screens to prevent clutter) */}

      {/* Kubernetes - Top Left */}
      <motion.div
        animate={{ y: [0, -20, 0], rotateZ: [-5, 5, -5] }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-24 left-4 md:top-[20%] md:left-[10%] z-20 text-blue-500 opacity-100 drop-shadow-[0_0_40px_rgba(59,130,246,0.8)] hover:scale-110 transition-all duration-75 cursor-pointer"
      >
        <SiKubernetes className="text-3xl sm:text-5xl md:text-7xl" />
      </motion.div>



      {/* Docker - Bottom Left */}
      <motion.div
        animate={{ y: [0, 25, 0], rotateZ: [10, -10, 10] }}
        transition={{ y: { duration: 7, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-10 left-4 md:bottom-[18%] md:left-[20%] z-20 text-brand-cyan opacity-100 drop-shadow-[0_0_40px_rgba(0,240,255,0.8)] hover:scale-110 transition-all duration-75 cursor-pointer"
      >
        <FaDocker className="text-3xl sm:text-6xl md:text-8xl" />
      </motion.div>

      {/* AWS - Top Right */}
      <motion.div
        animate={{ y: [0, -25, 0], rotateZ: [15, 0, 15] }}
        transition={{ y: { duration: 8, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-1/4 right-2 md:top-[18%] md:right-[15%] z-20 text-orange-400 opacity-100 drop-shadow-[0_0_40px_rgba(251,146,60,0.8)] hover:scale-110 transition-all duration-75 cursor-pointer"
      >
        <FaAws className="text-3xl sm:text-6xl md:text-8xl" />
      </motion.div>

      {/* GitHub - Bottom Right */}
      <motion.div
        animate={{ y: [0, 30, 0], rotateZ: [-10, 10, -10] }}
        transition={{ y: { duration: 9, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 9, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-10 right-4 md:bottom-[25%] md:right-[15%] z-20 text-white opacity-100 drop-shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:scale-110 transition-all duration-75 cursor-pointer"
      >
        <FaGithub className="text-3xl sm:text-5xl md:text-7xl" />
      </motion.div>

    </section>
  );
};

const SocialIcon = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-full hover:bg-brand-cyan/10 hover:text-brand-cyan hover:border-brand-cyan/50 hover:-translate-y-1 transition-all duration-300 shadow-lg"
  >
    <Icon className="text-lg sm:text-xl text-gray-400 transition-colors" />
  </a>
);

export default HeroSection;
