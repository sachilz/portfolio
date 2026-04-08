import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaAward, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const certs = [
  { name: 'AI/ML Engineer - Stage 1', issue: 'SLIIT', year: '2024' },
  { name: 'Python For Beginners', issue: 'University of Moratuwa', year: '2025' },
  { name: 'Python For Beginners', issue: 'Simplilearn', year: '2025' },
  { name: 'AI/ML Engineer - Stage 2', issue: 'SLIIT', year: '2025' },
  { name: 'Postman API Fundamentals Student Expert', issue: 'Postman', year: '2025' },
  { name: 'Crash Course: Linux For Absolute Beginners', issue: 'KodeKloud', year: '2025' },
  { name: 'Fundamentals of DevOps', issue: 'KodeKloud', year: '2025' },
  { name: 'DevOps Pre-Requisite Course', issue: 'KodeKloud', year: '2025' },
  { name: 'Golang', issue: 'KodeKloud', year: '2025' },
  { name: 'Python Basics', issue: 'KodeKloud', year: '2025' },
  { name: 'Shell Scripts for Beginners', issue: 'KodeKloud', year: '2025' },
  { name: 'Jenkins For Beginners', issue: 'KodeKloud', year: '2025' },
  { name: 'Jenkins Pipelines', issue: 'KodeKloud', year: '2025' },
  { name: 'GIT for Beginners', issue: 'KodeKloud', year: '2025' },
  { name: 'Docker Training Course for the Absolute Beginner', issue: 'KodeKloud', year: '2025' },
  { name: 'Kubernetes for the Absolute Beginners - Hands-on Tutorial', issue: 'KodeKloud', year: '2025' },
  { name: 'Terraform Basics Training Course', issue: 'KodeKloud', year: '2025' },
  { name: 'AWS For Beginners with Hands-On Labs', issue: 'KodeKloud', year: '2025' },
  { name: 'Learning Linux Basics Course & Labs', issue: 'KodeKloud', year: '2025' },
];

const CertCard = ({ cert }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.85, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { type: "spring", stiffness: 150, damping: 15 }
        }
      }}
      style={{ perspective: 1000 }}
      className="relative w-full h-full"
    >
      <motion.div
        whileHover={{
          rotateX: 15,
          rotateY: -15,
          scale: 1.05,
          z: 30,
          boxShadow: "-20px 20px 40px rgba(0,240,255,0.15)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative bg-[#0a0a0a] border border-brand-cyan/20 rounded-2xl p-7 group flex flex-col h-full z-10 overflow-hidden"
      >
        {/* Certificate Thumbnail Full Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 z-0 mix-blend-luminosity hover:mix-blend-normal"
          style={{ backgroundImage: `url(${cert.image})` }}
        ></div>

        {/* Deep shadow overlay to ensure text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/40 z-0 pointer-events-none"></div>

        {/* Spotlight gradient effect inside the card */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-cyan/30 blur-[50px] rounded-full group-hover:bg-brand-cyan/50 transition-colors duration-700 pointer-events-none z-0"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-purple/30 blur-[50px] rounded-full group-hover:bg-brand-purple/50 transition-colors duration-700 pointer-events-none z-0"></div>

        {/* Animated top glowing border line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center pointer-events-none"></div>

        <div className="flex items-start justify-between mb-8 relative z-20" style={{ transform: "translateZ(40px)" }}>
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            <FaAward size={26} />
          </div>
          <div className="px-3 py-1.5 bg-brand-purple/10 border border-brand-purple/30 text-brand-cyan rounded-full text-xs font-mono font-bold tracking-wider group-hover:bg-brand-purple/20 transition-colors shadow-sm">
            {cert.year}
          </div>
        </div>

        <h3 className="text-xl leading-snug font-extrabold text-white/90 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300 relative z-20" style={{ transform: "translateZ(50px)" }}>
          {cert.name}
        </h3>

        <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/10 relative z-20" style={{ transform: "translateZ(30px)" }}>
          <span className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(176,38,255,0.8)]"></span>
          <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
            {cert.issue}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(certs.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleCerts = certs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-brand-cyan pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Certifications</span></h2>
          <p className="text-gray-400 mt-2">Verified expertise. Showing {Math.min(currentPage * itemsPerPage + 1, certs.length)}-{Math.min((currentPage + 1) * itemsPerPage, certs.length)} of {certs.length} certificates.</p>
        </motion.div>

        <div className="relative">
          {totalPages > 1 && (
            <button
              onClick={handlePrev}
              className="absolute -left-6 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-brand-purple/20 hover:border-brand-purple/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(176,38,255,0.4)]"
              aria-label="Previous Certifications"
            >
              <FaChevronLeft size={18} className="text-brand-cyan" />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                },
                exit: {
                  opacity: 0,
                  y: 20,
                  scale: 0.95,
                  transition: { duration: 0.2, ease: "easeIn" }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-h-[300px]"
            >
              {visibleCerts.map((cert) => (
                <CertCard key={cert.name} cert={cert} />
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <button
              onClick={handleNext}
              className="absolute -right-6 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-brand-purple/20 hover:border-brand-purple/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(176,38,255,0.4)]"
              aria-label="Next Certifications"
            >
              <FaChevronRight size={18} className="text-brand-cyan" />
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;