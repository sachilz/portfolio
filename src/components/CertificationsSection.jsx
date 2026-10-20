import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaAward, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import cert1 from '../assets/Cert/1.png';
import cert2 from '../assets/Cert/2.png';
import cert3 from '../assets/Cert/3.png';
import cert4 from '../assets/Cert/4.png';
import cert5 from '../assets/Cert/5.png';
import cert6 from '../assets/Cert/6.png';
import cert7 from '../assets/Cert/7.png';
import cert8 from '../assets/Cert/8.png';
import cert9 from '../assets/Cert/9.png';
import cert10 from '../assets/Cert/10.png';
import cert11 from '../assets/Cert/11.png';
import cert12 from '../assets/Cert/12.png';
import cert13 from '../assets/Cert/13.png';
import cert14 from '../assets/Cert/14.png';
import cert15 from '../assets/Cert/15.png';
import cert16 from '../assets/Cert/16.png';
import cert17 from '../assets/Cert/17.png';

export const certs = [
  { name: 'AI/ML Engineer - Stage 1', issue: 'SLIIT', year: '2024', image: cert1 },
  { name: 'Python For Beginners', issue: 'University of Moratuwa', year: '2025', image: cert4 },
  { name: 'Python For Beginners', issue: 'Simplilearn', year: '2025', image: cert3 },
  { name: 'AI/ML Engineer - Stage 2', issue: 'SLIIT', year: '2025', image: cert1 },
  { name: 'Postman API Fundamentals Student Expert', issue: 'Postman', year: '2025', image: cert2 },
  { name: 'Crash Course: Linux For Absolute Beginners', issue: 'KodeKloud', year: '2025', image: cert5 },
  { name: 'Fundamentals of DevOps', issue: 'KodeKloud', year: '2025', image: cert6 },
  { name: 'DevOps Pre-Requisite Course', issue: 'KodeKloud', year: '2025', image: cert7 },
  { name: 'Golang', issue: 'KodeKloud', year: '2025', image: cert8 },
  { name: 'Python Basics', issue: 'KodeKloud', year: '2025', image: cert9 },
  { name: 'Shell Scripts for Beginners', issue: 'KodeKloud', year: '2025', image: cert10 },
  { name: 'Jenkins For Beginners', issue: 'KodeKloud', year: '2025', image: cert11 },
  { name: 'Jenkins Pipelines', issue: 'KodeKloud', year: '2025', image: cert12 },
  { name: 'GIT for Beginners', issue: 'KodeKloud', year: '2025', image: cert13 },
  { name: 'Docker Training Course for the Absolute Beginner', issue: 'KodeKloud', year: '2025', image: cert14 },
  { name: 'Kubernetes for the Absolute Beginners - Hands-on Tutorial', issue: 'KodeKloud', year: '2025', image: cert15 },
  { name: 'Terraform Basics Training Course', issue: 'KodeKloud', year: '2025', image: cert16 },
  { name: 'AWS For Beginners with Hands-On Labs', issue: 'KodeKloud', year: '2025', image: cert17 },
  { name: 'Learning Linux Basics Course & Labs', issue: 'KodeKloud', year: '2025', image: '' },
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
          rotateX: 12,
          rotateY: -12,
          scale: 1.03,
          z: 30,
          boxShadow: "-20px 20px 40px rgba(0,255,102,0.15)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative bg-[#0a0d14]/90 border border-white/10 rounded-xl p-4 sm:p-5 hover:border-emerald-500/40 group flex flex-col h-full z-10 overflow-hidden transition-colors font-mono-code"
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-[9px] text-gray-500 select-none">
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
            <span className="ml-1 text-gray-400 font-mono truncate max-w-[140px]">
              {cert.issue.toLowerCase().replace(/[^a-z0-9]/g, '_')}.crt
            </span>
          </div>
          <span className="text-emerald-400 font-bold text-[9px]">
            [GPG: VERIFIED]
          </span>
        </div>

        <div className="rounded-lg overflow-hidden relative shadow-lg mb-4 bg-[#05070a] border border-white/5" style={{ transform: "translateZ(25px)" }}>
          <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-all duration-300 z-10 flex items-center justify-center">
            <div className="w-14 h-14 bg-[#0a0d14]/90 border border-emerald-500/40 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-110 group-hover:rotate-[280deg] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,102,0.4)] opacity-0 group-hover:opacity-100">
              <FaAward className="text-emerald-400 text-2xl" />
            </div>
          </div>
          {cert.image ? (
            <img src={cert.image} alt={cert.name} className="w-full h-44 sm:h-52 object-contain object-center group-hover:scale-105 transition-transform duration-700 bg-white/5" />
          ) : (
            <div className="w-full h-44 sm:h-52 flex items-center justify-center bg-gradient-to-br from-[#10141f] to-[#06080d]">
              <span className="text-emerald-400/60 font-mono text-xs tracking-widest uppercase">Valid Certificate</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-1 mb-2 text-xs font-mono" style={{ transform: "translateZ(20px)" }}>
          <span className="text-gray-400 group-hover:text-emerald-400 transition-colors">Year: {cert.year}</span>
          <span className="text-[10px] text-gray-500 font-mono">SHA-256 OK</span>
        </div>

        <h3 className="text-base font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-2 px-1 font-sans" style={{ transform: "translateZ(35px)" }}>
          {cert.name}
        </h3>

        <div className="mt-auto px-1 pt-4 flex items-center gap-2 text-xs font-bold text-emerald-400/80 group-hover:text-emerald-300 transition-colors" style={{ transform: "translateZ(20px)" }}>
          Issued by: {cert.issue}
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
          className="mb-16 border-l-4 border-emerald-400 pl-6 font-mono-code"
        >
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
            <span>sachintha@arch:~$ openssl verify -CApath /etc/ssl/certs credentials.pem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight font-sans">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-cyan to-brand-purple">Certifications</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-sans">
            Cryptographically verifiable skills & credentials. Showing {Math.min(currentPage * itemsPerPage + 1, certs.length)}-{Math.min((currentPage + 1) * itemsPerPage, certs.length)} of {certs.length} verified certificates.
          </p>
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