import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';

const ContactCard = ({ icon, title, detail, color, borderHover, shadowHover }) => (
  <motion.a
    href="#"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`flex items-center gap-6 p-6 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-2xl transition-all duration-300 group hover:-translate-y-1 ${borderHover} ${shadowHover}`}
  >
    <div className={`w-14 h-14 rounded-full bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-2xl ${color} group-hover:scale-110 transition-transform shadow-lg`}>
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{title}</h3>
      <p className="text-sm font-mono text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">{detail}</p>
    </div>
  </motion.a>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-purple/5 -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl w-full mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16"
      >
        {/* Left side: Header and Form */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 border-l-4 border-brand-cyan pl-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Connect</span></h2>
            <p className="text-gray-400 mt-2">Open for opportunities or just a chat about infrastructure!</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-[#0a0f1a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] group"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Ambient form glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 -z-10"></div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold ml-1">Name</label>
                <input type="text" className="w-full bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/30 transition-all font-mono text-sm shadow-inner" placeholder="Sachintha Dissanayaka" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold ml-1">Email</label>
                <input type="email" className="w-full bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/30 transition-all font-mono text-sm shadow-inner" placeholder="Sachintha@gmail.com" />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold ml-1">Message</label>
              <textarea rows="4" className="w-full bg-[#111827]/60 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple/30 transition-all resize-none font-mono text-sm shadow-inner" placeholder="Anything what u want to say me..."></textarea>
            </div>

            <button className="w-full relative overflow-hidden bg-white/5 border border-white/10 text-white font-bold py-4 rounded-xl hover:bg-gradient-to-r hover:from-brand-cyan/20 hover:to-brand-purple/20 hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 flex justify-center items-center space-x-3 group/btn">
              <span className="relative z-10 group-hover/btn:text-brand-cyan transition-colors">Send Transmission</span>
              <FaPaperPlane className="relative z-10 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 group-hover/btn:text-brand-cyan transition-all" />
            </button>
          </motion.form>
        </div>

        {/* Right side: Contact Cards */}
        <div className="flex flex-col justify-center gap-6 mt-16 lg:mt-0 xl:pl-10">
          <ContactCard icon={<FaEnvelope />} title="Direct Email" detail="dilshansachintha322@gmail.com" color="text-red-400" borderHover="hover:border-red-400/50" shadowHover="hover:shadow-[0_0_20px_rgba(248,113,113,0.2)]" />
          <ContactCard icon={<FaLinkedin />} title="LinkedIn Network" detail="Connect professionally" color="text-blue-400" borderHover="hover:border-blue-400/50" shadowHover="hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]" />
          <ContactCard icon={<FaGithub />} title="GitHub" detail="Open Source Contributions" color="text-white" borderHover="hover:border-white/50" shadowHover="hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" />

        </div>

      </motion.div>
    </section>
  );
};

export default ContactSection;
