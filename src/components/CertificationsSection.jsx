import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const certs = [
  { name: 'AWS Certified Solutions Architect - Professional', issue: 'Amazon Web Services (AWS)', year: '2023' },
  { name: 'Certified Kubernetes Administrator (CKA)', issue: 'Cloud Native Computing Foundation', year: '2022' },
  { name: 'HashiCorp Certified: Terraform Associate', issue: 'HashiCorp', year: '2021' },
  { name: 'Microsoft Certified: Azure Administrator Associate', issue: 'Microsoft', year: '2021' },
  { name: 'Google Cloud Professional Cloud Architect', issue: 'Google Cloud', year: '2020' },
  { name: 'Certified Information Systems Security Professional', issue: 'ISC2', year: '2020' },
  { name: 'Cisco Certified Network Associate (CCNA)', issue: 'Cisco', year: '2019' },
  { name: 'CompTIA Security+', issue: 'CompTIA', year: '2019' },
  { name: 'Red Hat Certified Engineer (RHCE)', issue: 'Red Hat', year: '2018' },
];

const CertificationsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCerts = isExpanded ? certs : certs.slice(0, 6);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-brand-cyan pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Certifications</span></h2>
          <p className="text-gray-400 mt-2">Verified expertise. Showing {isExpanded ? certs.length : 6} of {certs.length} certificates.</p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleCerts.map((cert, index) => (
              <motion.div
                layout
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: (index % 6) * 0.05 }}
                className="relative bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/5 rounded-2xl p-7 group transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,240,255,0.2)] flex flex-col h-full z-10 overflow-hidden hover:-translate-y-1"
              >
                {/* Spotlight gradient effect inside the card */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-cyan/20 blur-[50px] rounded-full group-hover:bg-brand-cyan/40 transition-colors duration-700 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-purple/20 blur-[50px] rounded-full group-hover:bg-brand-purple/40 transition-colors duration-700 pointer-events-none"></div>

                {/* Animated top glowing border line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center pointer-events-none"></div>

                <div className="flex items-start justify-between mb-8 relative z-20">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    <FaAward size={26} />
                  </div>
                  <div className="px-3 py-1.5 bg-brand-purple/10 border border-brand-purple/30 text-brand-cyan rounded-full text-xs font-mono font-bold tracking-wider group-hover:bg-brand-purple/20 transition-colors shadow-sm">
                    {cert.year}
                  </div>
                </div>
                
                <h3 className="text-xl leading-snug font-extrabold text-white/90 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300 relative z-20">
                  {cert.name}
                </h3>
                
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/10 relative z-20">
                  <span className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(176,38,255,0.8)]"></span>
                  <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                    {cert.issue}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {certs.length > 6 && (
          <motion.div layout className="mt-14 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-brand-purple/30 text-white font-bold rounded-full hover:bg-brand-purple/10 hover:border-brand-purple/60 hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all duration-300"
            >
              {isExpanded ? (
                <>Collapse View <FaChevronUp className="text-brand-cyan" /></>
              ) : (
                <>View All Certifications <FaChevronDown className="text-brand-cyan" /></>
              )}
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
