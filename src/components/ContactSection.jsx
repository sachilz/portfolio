import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube, FaTerminal, FaMapMarkerAlt, FaCheckCircle, FaNetworkWired } from 'react-icons/fa';

const socials = [
  { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/sachilz/', color: 'hover:text-[#0A66C2]', label: 'LinkedIn' },
  { icon: <FaGithub size={20} />, href: 'https://github.com/sachilz', color: 'hover:text-white', label: 'GitHub' },
  { icon: <FaYoutube size={20} />, href: 'https://www.youtube.com/@NextOpz', color: 'hover:text-[#FF0000]', label: 'YouTube' },
  { icon: <FaEnvelope size={20} />, href: 'mailto:dilshansachintha322@gmail.com', color: 'hover:text-red-500', label: 'Email' },
];

const TypewriterText = ({ text, delay = 0, onComplete }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const typeChar = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeChar, 30); // Typing speed
      } else if (onComplete) {
        onComplete();
      }
    };

    const initialDelay = setTimeout(typeChar, delay);
    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success
  const [activeInput, setActiveInput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormState({ name: '', email: '', message: '' });
      }, 4000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden flex items-center min-h-screen">
      {/* Background accents */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full relative z-10">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 font-mono-code"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs mb-3">
            <FaTerminal size={11} />
            <span>$ netcat -vlp 443 --allow-guest</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 flex items-center justify-center gap-4 font-sans">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-cyan to-brand-purple">Open Remote SSH Session</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-mono text-xs uppercase tracking-widest">
            Send transmission packet to initiate encrypted communication
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-full lg:w-2/3 bg-[#0a0d14]/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden relative font-mono-code"
          >
            {/* Terminal Top Bar */}
            <div className="bg-[#0e131f] px-4 py-2.5 flex items-center border-b border-white/5 relative">
              <div className="flex gap-1.5 relative z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-xs text-gray-400 font-mono tracking-wider">sachintha@archlinux: ~/contact (ssh)</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono text-xs md:text-sm relative w-full h-full min-h-[400px] flex flex-col">

              {/* Scanline overlay */}
              <div className="absolute inset-0 terminal-scanlines opacity-20 pointer-events-none z-0"></div>

              <div className="relative z-10 flex flex-col gap-4 flex-grow">

                <div className="text-gray-400">
                  <span className="text-emerald-400 font-bold">guest@arch-terminal</span>:<span className="text-brand-cyan">~</span>$ ssh -p 443 contact@sachintha.dev
                </div>

                <div className="text-gray-400">
                  <TypewriterText text="Authenticating RSA host key... verified." delay={400} />
                </div>

                <div className="text-emerald-400 font-semibold">
                  <TypewriterText text="[OK] Secure TTY socket opened. Enter message parameters:" delay={1200} />
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 relative">

                  {/* Name Input */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                    <label htmlFor="name" className="text-brand-cyan flex whitespace-nowrap min-w-[120px]">
                      <span className="text-gray-500 opacity-50 mr-2">&gt;</span>
                      var name =
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      onFocus={() => setActiveInput('name')}
                      onBlur={() => setActiveInput(null)}
                      className="bg-transparent border-b border-transparent focus:border-brand-cyan outline-none text-white w-full transition-colors pb-1 placeholder-white/20 caret-brand-cyan shadow-none"
                      placeholder="'Sachintha'"
                      disabled={status !== 'idle'}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 group">
                    <label htmlFor="email" className="text-brand-purple flex whitespace-nowrap min-w-[120px]">
                      <span className="text-gray-500 opacity-50 mr-2">&gt;</span>
                      var email =
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      onFocus={() => setActiveInput('email')}
                      onBlur={() => setActiveInput(null)}
                      className="bg-transparent border-b border-transparent focus:border-brand-purple outline-none text-white w-full transition-colors pb-1 placeholder-white/20 caret-brand-purple"
                      placeholder="'Sachintha@example.com'"
                      disabled={status !== 'idle'}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col group mt-2 relative">
                    <label htmlFor="message" className="text-emerald-400 flex items-start mb-1">
                      <span className="text-gray-500 opacity-50 mr-2">&gt;</span>
                      const message = `
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleInputChange}
                      onFocus={() => setActiveInput('message')}
                      onBlur={() => setActiveInput(null)}
                      className="bg-transparent border-l-2 border-emerald-400/30 focus:border-emerald-400 outline-none text-white w-full transition-colors pl-4 ml-6 resize-none placeholder-white/20 caret-emerald-400 mt-1"
                      placeholder="Hi Sachilz, I have a project for you..."
                      disabled={status !== 'idle'}
                    />
                    <span className="text-emerald-400 ml-6 mt-1">`</span>
                  </div>

                  {/* Submit Button & Status */}
                  <div className="mt-8 flex items-center gap-4">
                    <AnimatePresence mode="wait">
                      {status === 'idle' && (
                        <motion.button
                          key="submit-btn"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          type="submit"
                          className="px-6 py-2 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/20 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center gap-2"
                        >
                          <span className="text-gray-500 mr-1">$</span>
                          ./execute payload
                        </motion.button>
                      )}

                      {status === 'sending' && (
                        <motion.div
                          key="sending-state"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3 text-yellow-400"
                        >
                          <FaNetworkWired className="animate-pulse" />
                          <span className="animate-pulse">Transmitting packets...</span>
                        </motion.div>
                      )}

                      {status === 'success' && (
                        <motion.div
                          key="success-state"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-4 py-2 border border-emerald-400/30"
                        >
                          <FaCheckCircle />
                          <span>Transmission successful. Connection closed.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Blinking Cursor if idle and no input focused */}
                    {status === 'idle' && !activeInput && (
                      <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                        className="w-3 h-5 bg-white/50"
                      />
                    )}
                  </div>
                </form>

              </div>
            </div>
          </motion.div>

          {/* Right Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            {/* Status Card */}
            <div className="bg-[#101014]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <FaNetworkWired size={100} />
              </div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
                </div>
                <span className="text-brand-cyan font-mono text-xs uppercase tracking-widest border border-brand-cyan/30 px-2 py-1 rounded bg-brand-cyan/5">Live Node</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 relative z-10">System Status</h3>
              <p className="text-gray-400 text-sm mb-2 relative z-10 leading-relaxed">
                Currently taking on new projects. Actively looking for DevOps & MLOps engineering opportunities locally and remotely.
              </p>

              <div className="mt-8 relative z-10 space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-white/5 text-gray-400">
                    <FaMapMarkerAlt size={14} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono uppercase">Location Base</div>
                    <div className="text-sm font-semibold">Sri Lanka / Global Open</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-white/5 text-gray-400">
                    <FaTerminal size={14} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-mono uppercase">Avg Ping Response</div>
                    <div className="text-sm font-semibold text-emerald-400">&lt; 12 Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Node Web */}
            <div className="bg-[#101014]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 relative">
              <div className="text-xs text-gray-500 font-mono uppercase mb-4 tracking-widest border-b border-white/5 pb-2">External Nodes</div>
              <div className="flex justify-between items-center px-2">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className={`w-12 h-12 rounded-xl border border-white/10 bg-black/50 flex items-center justify-center text-gray-400 transition-colors ${social.color} hover:bg-white/5 relative group`}
                  >
                    {social.icon}

                    {/* Tooltip */}
                    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black border border-white/10 text-white text-xs px-2 py-1 rounded shadow-xl font-mono whitespace-nowrap">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

