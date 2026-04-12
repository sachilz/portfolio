import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaAward, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const certs = [
  { name: 'AI/ML Engineer - Stage 1', issue: 'SLIIT', year: '2024', image: './src/assets/Cert/1.png' },
  { name: 'Python For Beginners', issue: 'University of Moratuwa', year: '2025', image: './src/assets/Cert/4.png' },
  { name: 'Python For Beginners', issue: 'Simplilearn', year: '2025', image: './src/assets/Cert/3.png' },
  { name: 'AI/ML Engineer - Stage 2', issue: 'SLIIT', year: '2025', image: './src/assets/Cert/1.png' },
  { name: 'Postman API Fundamentals Student Expert', issue: 'Postman', year: '2025', image: './src/assets/Cert/2.png' },
  { name: 'Crash Course: Linux For Absolute Beginners', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/5.png' },
  { name: 'Fundamentals of DevOps', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/6.png' },
  { name: 'DevOps Pre-Requisite Course', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/7.png' },
  { name: 'Golang', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/8.png' },
  { name: 'Python Basics', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/9.png' },
  { name: 'Shell Scripts for Beginners', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/10.png' },
  { name: 'Jenkins For Beginners', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/11.png' },
  { name: 'Jenkins Pipelines', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/12.png' },
  { name: 'GIT for Beginners', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/13.png' },
  { name: 'Docker Training Course for the Absolute Beginner', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/14.png' },
  { name: 'Kubernetes for the Absolute Beginners - Hands-on Tutorial', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/15.png' },
  { name: 'Terraform Basics Training Course', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/16.png' },
  { name: 'AWS For Beginners with Hands-On Labs', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/17.png' },
  { name: 'Learning Linux Basics Course & Labs', issue: 'KodeKloud', year: '2025', image: './src/assets/Cert/5.png' },
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
        className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 hover:border-brand-cyan/40 group flex flex-col h-full z-10 overflow-hidden transition-colors"
      >
        <div className="rounded-xl overflow-hidden relative shadow-xl mb-5 bg-[#111]" style={{ transform: "translateZ(30px)" }}>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-0">
            <div className="w-16 h-16 bg-[#0a0a0a] border border-brand-cyan/30 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-110 group-hover:rotate-[280deg] transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
              <FaAward className="text-brand-cyan text-3xl" />
            </div>
          </div>
          {cert.image ? (
            <img src={cert.image} alt={cert.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
          ) : (
            <div className="w-full h-56 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#050505]">
              <span className="text-gray-600 font-mono text-xs tracking-widest uppercase">Image Pending</span>
            </div>
          )}
        </div>

        <p className="px-2 text-xs font-mono text-gray-400 mb-2 group-hover:text-brand-cyan transition-colors" style={{ transform: "translateZ(20px)" }}>{cert.year}</p>
        <h3 className="text-lg leading-snug font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-2 px-2" style={{ transform: "translateZ(40px)" }}>
          {cert.name}
        </h3>

        <div className="mt-auto px-2 pt-6 flex items-center gap-2 text-sm font-bold text-brand-purple opacity-80 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(20px)" }}>
          Issued by {cert.issue}
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

        <div className="relative min-h-[420px]">
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