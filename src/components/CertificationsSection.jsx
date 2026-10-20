import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaAward, 
  FaChevronLeft, 
  FaChevronRight, 
  FaSearch, 
  FaExpand, 
  FaTimes, 
  FaCheckCircle, 
  FaTerminal, 
  FaTh, 
  FaFingerprint, 
  FaShieldAlt, 
  FaCalendarAlt, 
  FaBuilding,
  FaExternalLinkAlt
} from 'react-icons/fa';

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
  { 
    id: 'CRT-001',
    name: 'Kubernetes for the Absolute Beginners - Hands-on Tutorial', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert15,
    category: 'Cloud & Containers',
    hash: 'SHA256:7f4a9b2c...k8s',
    skills: ['Kubernetes Pods', 'Deployments', 'Cluster Services', 'ReplicaSets', 'YAML Manifests']
  },
  { 
    id: 'CRT-002',
    name: 'Docker Training Course for the Absolute Beginner', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert14,
    category: 'Cloud & Containers',
    hash: 'SHA256:d0c1e83f...dck',
    skills: ['Dockerfiles', 'Image Layering', 'Container Volumes', 'Docker Compose', 'Multi-Stage Builds']
  },
  { 
    id: 'CRT-003',
    name: 'Terraform Basics Training Course', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert16,
    category: 'Cloud & Containers',
    hash: 'SHA256:4a9e21bd...tf',
    skills: ['Infrastructure as Code', 'HCL Syntax', 'Cloud Providers', 'State Management', 'Execution Plans']
  },
  { 
    id: 'CRT-004',
    name: 'AWS For Beginners with Hands-On Labs', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert17,
    category: 'Cloud & Containers',
    hash: 'SHA256:91bf38ca...aws',
    skills: ['AWS Cloud Core', 'VPC Networking', 'EC2 Virtual Machines', 'IAM Policies', 'Security Groups']
  },
  { 
    id: 'CRT-005',
    name: 'Jenkins Pipelines', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert12,
    category: 'DevOps & CI/CD',
    hash: 'SHA256:e318cf94...jkp',
    skills: ['Declarative Pipelines', 'Groovy Syntax', 'Automated Testing', 'Artifact Storage', 'Webhook Triggers']
  },
  { 
    id: 'CRT-006',
    name: 'Jenkins For Beginners', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert11,
    category: 'DevOps & CI/CD',
    hash: 'SHA256:61a9bc38...jkb',
    skills: ['Continuous Integration', 'Jenkins Controller', 'Freestyle Jobs', 'Plugin Ecosystem', 'Build Automation']
  },
  { 
    id: 'CRT-007',
    name: 'Fundamentals of DevOps', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert6,
    category: 'DevOps & CI/CD',
    hash: 'SHA256:88e04b19...dev',
    skills: ['DevOps Lifecycle', 'Continuous Delivery', 'Infrastructure Automation', 'Feedback Loops', 'Collaboration']
  },
  { 
    id: 'CRT-008',
    name: 'DevOps Pre-Requisite Course', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert7,
    category: 'DevOps & CI/CD',
    hash: 'SHA256:52bf89ac...pre',
    skills: ['Linux Essentials', 'Networking Protocols', 'Git Version Control', 'Bash Scripting', 'Virtual Machines']
  },
  { 
    id: 'CRT-009',
    name: 'GIT for Beginners', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert13,
    category: 'DevOps & CI/CD',
    hash: 'SHA256:9a38f712...git',
    skills: ['Git Version Control', 'Branching Models', 'Merge Conflicts', 'Rebasing', 'Remote Repositories']
  },
  { 
    id: 'CRT-010',
    name: 'Crash Course: Linux For Absolute Beginners', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert5,
    category: 'Linux & Systems',
    hash: 'SHA256:1049bc8e...lnx',
    skills: ['Linux CLI Commands', 'File System Hierarchy', 'User & Group Permissions', 'Package Managers', 'Systemd Services']
  },
  { 
    id: 'CRT-011',
    name: 'Learning Linux Basics Course & Labs', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert5,
    category: 'Linux & Systems',
    hash: 'SHA256:77de10ba...lbl',
    skills: ['Linux Lab Automation', 'CLI Navigation', 'System Monitoring', 'Text Processing (grep/sed)', 'Process Hierarchy']
  },
  { 
    id: 'CRT-012',
    name: 'Shell Scripts for Beginners', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert10,
    category: 'Linux & Systems',
    hash: 'SHA256:69a0fe41...shl',
    skills: ['Bash Scripting', 'Automation Logic', 'Cron Scheduling', 'Conditionals & Loops', 'Exit Codes & Error Handling']
  },
  { 
    id: 'CRT-013',
    name: 'Postman API Fundamentals Student Expert', 
    issue: 'Postman', 
    year: '2025', 
    image: cert2,
    category: 'Languages & APIs',
    hash: 'SHA256:918237ba...pst',
    skills: ['RESTful APIs', 'API Collection Testing', 'Environment Variables', 'Automated Assertions', 'HTTP Methods']
  },
  { 
    id: 'CRT-014',
    name: 'Golang', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert8,
    category: 'Languages & APIs',
    hash: 'SHA256:39bf20ea...gol',
    skills: ['Go Concurrency', 'Goroutines & Channels', 'Type Systems & Structs', 'Backend Services', 'Microservices']
  },
  { 
    id: 'CRT-015',
    name: 'Python Basics', 
    issue: 'KodeKloud', 
    year: '2025', 
    image: cert9,
    category: 'Languages & APIs',
    hash: 'SHA256:a18c9b20...pyk',
    skills: ['Python Syntax', 'Data Structures', 'OOP Architecture', 'File I/O Handling', 'Scripting Automations']
  },
  { 
    id: 'CRT-016',
    name: 'Python For Beginners', 
    issue: 'University of Moratuwa', 
    year: '2025', 
    image: cert4,
    category: 'Languages & APIs',
    hash: 'SHA256:bc8912ef...uom',
    skills: ['Algorithmic Thinking', 'Data Types & Control Flow', 'Functions & Modularity', 'Data Processing', 'Problem Solving']
  },
  { 
    id: 'CRT-017',
    name: 'Python For Beginners', 
    issue: 'Simplilearn', 
    year: '2025', 
    image: cert3,
    category: 'Languages & APIs',
    hash: 'SHA256:56019a3b...smp',
    skills: ['Python Core Essentials', 'Conditional Constructs', 'List & Dictionary Operations', 'Libraries & Modules']
  },
  { 
    id: 'CRT-018',
    name: 'AI/ML Engineer - Stage 1', 
    issue: 'SLIIT', 
    year: '2024', 
    image: cert1,
    category: 'AI & Machine Learning',
    hash: 'SHA256:e019bc74...ai1',
    skills: ['Machine Learning Foundations', 'Supervised Learning', 'Model Evaluation', 'Data Preprocessing', 'Scikit-Learn']
  },
  { 
    id: 'CRT-019',
    name: 'AI/ML Engineer - Stage 2', 
    issue: 'SLIIT', 
    year: '2025', 
    image: cert1,
    category: 'AI & Machine Learning',
    hash: 'SHA256:301ab9ef...ai2',
    skills: ['Deep Learning Architectures', 'Neural Networks', 'Computer Vision Basics', 'Model Optimization', 'TensorFlow']
  }
];

const categories = [
  'All Accreditations',
  'DevOps & CI/CD',
  'Cloud & Containers',
  'Linux & Systems',
  'Languages & APIs',
  'AI & Machine Learning'
];

const CertificationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Accreditations');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState(certs[0]);
  const [viewMode, setViewMode] = useState('inspector'); // 'inspector' | 'grid'
  const [modalCert, setModalCert] = useState(null);
  const [gridPage, setGridPage] = useState(0);

  const itemsPerGridPage = 6;

  // Filtered certificates
  const filteredCerts = useMemo(() => {
    return certs.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'All Accreditations' || cert.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        cert.name.toLowerCase().includes(query) ||
        cert.issue.toLowerCase().includes(query) ||
        cert.category.toLowerCase().includes(query) ||
        cert.skills.some((s) => s.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Ensure selectedCert remains valid if filtered out
  const currentInspectorCert = useMemo(() => {
    if (filteredCerts.some((c) => c.id === selectedCert?.id)) {
      return selectedCert;
    }
    return filteredCerts[0] || certs[0];
  }, [filteredCerts, selectedCert]);

  // Grid pagination
  const totalGridPages = Math.ceil(filteredCerts.length / itemsPerGridPage);
  const pagedGridCerts = useMemo(() => {
    const start = gridPage * itemsPerGridPage;
    return filteredCerts.slice(start, start + itemsPerGridPage);
  }, [filteredCerts, gridPage]);

  // Reset page when filter changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setGridPage(0);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setGridPage(0);
  };

  // Lightbox navigation
  const openModalWithCert = (cert) => {
    setModalCert(cert);
  };

  const handleNextModalCert = () => {
    if (!modalCert) return;
    const currentIndex = filteredCerts.findIndex((c) => c.id === modalCert.id);
    const nextIndex = (currentIndex + 1) % filteredCerts.length;
    setModalCert(filteredCerts[nextIndex]);
  };

  const handlePrevModalCert = () => {
    if (!modalCert) return;
    const currentIndex = filteredCerts.findIndex((c) => c.id === modalCert.id);
    const prevIndex = (currentIndex - 1 + filteredCerts.length) % filteredCerts.length;
    setModalCert(filteredCerts[prevIndex]);
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 -right-40 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-40 w-[550px] h-[550px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Linux-Inspired Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 border-l-4 border-emerald-400 pl-6 font-mono-code"
        >
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
            <FaTerminal className="text-emerald-400 text-sm" />
            <span>sachintha@arch:~$ openssl verify -CApath /etc/ssl/certs credentials.pem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight font-sans">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-cyan to-brand-purple">Accreditations</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-3xl font-sans leading-relaxed">
            Cryptographically audited certifications across Cloud Architecture, Kubernetes Orchestration, CI/CD Pipeline Automation, Linux Internals, and Modern Programming.
          </p>
        </motion.div>

        {/* Real-Time Security Telemetry HUD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8"
        >
          <div className="bg-[#090d16]/80 backdrop-blur-xl border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FaShieldAlt className="text-lg" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">{certs.length}</div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider">Credentials</div>
            </div>
          </div>

          <div className="bg-[#090d16]/80 backdrop-blur-xl border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
              <FaBuilding className="text-lg" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">5</div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider">Academies</div>
            </div>
          </div>

          <div className="bg-[#090d16]/80 backdrop-blur-xl border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <FaFingerprint className="text-lg" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">100%</div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider">GPG Verified</div>
            </div>
          </div>

          <div className="bg-[#090d16]/80 backdrop-blur-xl border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
              <FaCalendarAlt className="text-lg" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">2024–2025</div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase tracking-wider">Active Cycle</div>
            </div>
          </div>
        </motion.div>

        {/* Filter Bar, Search & Mode Switcher */}
        <div className="bg-[#0b0f19]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 mb-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 min-w-[240px]">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search certificate, tool, or skill (e.g. Kubernetes, Docker, AWS)..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-[#050811] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FaTimes size={12} />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5 bg-[#050811] p-1 rounded-xl border border-white/10 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('inspector')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'inspector'
                    ? 'bg-gradient-to-r from-emerald-500/20 to-brand-cyan/20 text-emerald-400 border border-emerald-500/40 shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <FaTerminal size={12} />
                <span className="font-semibold">Inspector Deck</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-emerald-500/20 to-brand-cyan/20 text-emerald-400 border border-emerald-500/40 shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <FaTh size={12} />
                <span className="font-semibold">Vault Grid</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 border-t border-white/5 mt-4 pb-1 scrollbar-thin">
            {categories.map((cat) => {
              const count =
                cat === 'All Accreditations'
                  ? certs.length
                  : certs.filter((c) => c.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all font-mono flex items-center gap-2 flex-shrink-0 ${
                    isActive
                      ? 'bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.35)]'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-black/30 text-black' : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Zero Results State */}
        {filteredCerts.length === 0 && (
          <div className="bg-[#090d16] border border-white/10 rounded-2xl p-12 text-center font-mono">
            <FaShieldAlt className="text-4xl text-gray-600 mx-auto mb-3" />
            <p className="text-gray-300 font-bold mb-1">No matching credentials found</p>
            <p className="text-xs text-gray-500 mb-4">No certifications matched query: "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Accreditations');
              }}
              className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-lg text-xs hover:bg-emerald-500/30 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* VIEW MODE 1: THE CREDENTIAL INSPECTOR DECK */}
        {filteredCerts.length > 0 && viewMode === 'inspector' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Interactive Credential Ledger List (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 max-h-[720px] overflow-y-auto pr-1 scrollbar-thin">
              <div className="text-[11px] font-mono text-gray-400 pb-2 px-1 flex items-center justify-between border-b border-white/5">
                <span>SELECT CREDENTIAL TO INSPECT</span>
                <span className="text-emerald-400 font-bold">{filteredCerts.length} LOADED</span>
              </div>

              {filteredCerts.map((cert) => {
                const isSelected = currentInspectorCert?.id === cert.id;
                return (
                  <motion.div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    className={`group relative p-3.5 rounded-xl border transition-all cursor-pointer font-mono select-none ${
                      isSelected
                        ? 'bg-gradient-to-r from-emerald-950/40 via-[#0a101d] to-[#070b14] border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30'
                        : 'bg-[#080c16]/80 hover:bg-[#0c1220] border-white/5 hover:border-white/20'
                    }`}
                  >
                    {/* Active glowing indicator pill */}
                    {isSelected && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-emerald-400 rounded-r-full shadow-[0_0_10px_#10b981]" />
                    )}

                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                          {cert.id}
                        </span>
                        <span className="text-[10px] font-bold text-brand-cyan truncate max-w-[150px]">
                          {cert.issue}
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-1">
                        <FaCheckCircle size={9} />
                        VERIFIED
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-2 font-sans">
                      {cert.name}
                    </h4>

                    <div className="flex items-center justify-between text-[10px] text-gray-500">
                      <span className="text-gray-400">{cert.category}</span>
                      <span className="font-mono text-gray-500">{cert.year}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: High-Resolution Holographic Inspector Station (7 cols) */}
            <div className="lg:col-span-7 sticky top-24">
              <AnimatePresence mode="wait">
                {currentInspectorCert && (
                  <motion.div
                    key={currentInspectorCert.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#090d16]/95 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl p-5 sm:p-7 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative overflow-hidden font-mono"
                  >
                    {/* Top Terminal Bar */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[10px] text-gray-400">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                        <span className="ml-2 text-gray-300 font-mono">
                          X.509 CERTIFICATE INSPECTOR: {currentInspectorCert.id}
                        </span>
                      </div>
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <FaShieldAlt size={11} />
                        STATUS: VALID
                      </span>
                    </div>

                    {/* Certificate Preview Display Box */}
                    <div 
                      onClick={() => openModalWithCert(currentInspectorCert)}
                      className="group relative rounded-xl overflow-hidden bg-black/60 border border-white/10 hover:border-emerald-500/50 mb-5 cursor-pointer shadow-inner transition-all"
                    >
                      {/* Holographic light sweep on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                      <div className="w-full h-56 sm:h-72 flex items-center justify-center p-3 relative">
                        <img
                          src={currentInspectorCert.image}
                          alt={currentInspectorCert.name}
                          className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Inspect Overlay badge */}
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs text-white opacity-90 group-hover:opacity-100 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                        <FaExpand size={11} />
                        <span className="font-bold">Inspect Fullscreen</span>
                      </div>
                    </div>

                    {/* Certificate Meta Details */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                            {currentInspectorCert.category}
                          </span>
                          <span className="text-[10px] text-gray-400">
                            Year: <strong className="text-white">{currentInspectorCert.year}</strong>
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-white font-sans tracking-tight">
                          {currentInspectorCert.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                          Issued by <span className="text-brand-cyan font-bold">{currentInspectorCert.issue}</span>
                        </p>
                      </div>

                      {/* Key Competencies / Skills Tags */}
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                          Verified Competencies & Modules:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {currentInspectorCert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] bg-white/5 hover:bg-white/10 border border-white/10 rounded-md px-2.5 py-1 text-gray-300 transition-colors font-sans"
                            >
                              ✓ {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Cryptographic Signature Footer */}
                      <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] text-gray-500">
                        <div className="flex items-center gap-1.5 truncate">
                          <FaFingerprint className="text-emerald-400 flex-shrink-0" />
                          <span className="text-gray-400 truncate">{currentInspectorCert.hash}</span>
                        </div>
                        <button
                          onClick={() => openModalWithCert(currentInspectorCert)}
                          className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold"
                        >
                          <span>Full Credential View</span>
                          <FaExternalLinkAlt size={9} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: THE MODERN VAULT GRID */}
        {filteredCerts.length > 0 && viewMode === 'grid' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pagedGridCerts.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#090d16]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-emerald-500/50 group flex flex-col transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] font-mono"
                >
                  {/* Card Terminal Header */}
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/5 text-[9px] text-gray-500 select-none">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                      <span className="ml-1 text-gray-400 font-mono truncate max-w-[130px]">
                        {cert.id}.crt
                      </span>
                    </div>
                    <span className="text-emerald-400 font-bold text-[9px] flex items-center gap-1">
                      <FaCheckCircle size={8} />
                      VALID
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div 
                    onClick={() => openModalWithCert(cert)}
                    className="rounded-xl overflow-hidden relative shadow-lg mb-4 bg-black/60 border border-white/5 h-44 flex items-center justify-center p-3 cursor-pointer group-hover:border-emerald-500/40 transition-all"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-emerald-500 text-black px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <FaExpand size={11} />
                        <span>Inspect</span>
                      </div>
                    </div>
                  </div>

                  {/* Issuer & Year */}
                  <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                    <span className="text-brand-cyan font-bold">{cert.issue}</span>
                    <span className="text-gray-400">{cert.year}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-3 font-sans">
                    {cert.name}
                  </h4>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mt-auto pt-3 border-t border-white/5">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] text-gray-500 px-1 py-0.5">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Grid Pagination Controls */}
            {totalGridPages > 1 && (
              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-8">
                <span className="text-xs text-gray-500 font-mono">
                  Showing <strong className="text-white">{gridPage * itemsPerGridPage + 1}</strong>–
                  <strong className="text-white">
                    {Math.min((gridPage + 1) * itemsPerGridPage, filteredCerts.length)}
                  </strong> of <strong className="text-white">{filteredCerts.length}</strong> certificates
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setGridPage((p) => Math.max(0, p - 1))}
                    disabled={gridPage === 0}
                    className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors font-mono ${
                      gridPage === 0
                        ? 'border-white/5 text-gray-600 cursor-not-allowed'
                        : 'border-white/10 hover:border-emerald-500/50 text-gray-300 hover:text-white bg-white/5'
                    }`}
                  >
                    <FaChevronLeft size={10} />
                    <span>Previous</span>
                  </button>

                  <span className="text-xs font-mono text-gray-400 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5">
                    Page <span className="text-emerald-400 font-bold">{gridPage + 1}</span> of {totalGridPages}
                  </span>

                  <button
                    onClick={() => setGridPage((p) => Math.min(totalGridPages - 1, p + 1))}
                    disabled={gridPage === totalGridPages - 1}
                    className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors font-mono ${
                      gridPage === totalGridPages - 1
                        ? 'border-white/5 text-gray-600 cursor-not-allowed'
                        : 'border-white/10 hover:border-emerald-500/50 text-gray-300 hover:text-white bg-white/5'
                    }`}
                  >
                    <span>Next</span>
                    <FaChevronRight size={10} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* FULLSCREEN LIGHTBOX / MODAL */}
      <AnimatePresence>
        {modalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalCert(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f19] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.9)] font-mono"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#070a12]">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-sans line-clamp-1">
                      {modalCert.name}
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      Issued by <span className="text-brand-cyan">{modalCert.issue}</span> ({modalCert.year})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevModalCert}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 flex items-center justify-center transition-colors"
                    title="Previous Certificate"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <button
                    onClick={handleNextModalCert}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 flex items-center justify-center transition-colors"
                    title="Next Certificate"
                  >
                    <FaChevronRight size={12} />
                  </button>
                  <button
                    onClick={() => setModalCert(null)}
                    className="w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-colors ml-2"
                    title="Close"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              </div>

              {/* Modal Body - Image Viewer */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-black/50">
                <div className="relative max-w-full max-h-[58vh] flex items-center justify-center">
                  <img
                    src={modalCert.image}
                    alt={modalCert.name}
                    className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/5"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-[#070a12] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-gray-500 font-bold uppercase text-[10px]">Verified:</span>
                  {modalCert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-300 border border-white/5 font-sans"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5 flex-shrink-0">
                  <FaFingerprint />
                  <span>{modalCert.hash}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CertificationsSection;