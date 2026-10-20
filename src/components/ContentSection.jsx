import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaYoutube, 
  FaMedium, 
  FaPlay, 
  FaExternalLinkAlt, 
  FaTerminal, 
  FaClock, 
  FaBookOpen, 
  FaTimes, 
  FaTh, 
  FaTv,
  FaCheckCircle,
  FaTag
} from 'react-icons/fa';

import vidImg1 from '../assets/images/maxresdefault.jpg';
import vidImg2 from '../assets/images/maxresdefault (1).jpg';
import vidImg3 from '../assets/images/maxresdefault (2).jpg';
import vidImg4 from '../assets/images/maxresdefault (3).jpg';
import vidImg5 from '../assets/images/maxresdefault.webp';
import vidImg6 from '../assets/images/maxresdefault (4).png';

import artImg1 from '../assets/images/medium_01.webp';
import artImg2 from '../assets/images/medium_02.webp';
import artImg3 from '../assets/images/medium_03.jpg';
import artImg4 from '../assets/images/medium_04.jpg';

export const videos = [
  { 
    id: 'VID-001',
    ep: '01',
    youtubeId: '8etoaL6szeY',
    title: "Jenkins Tutorial for Beginners | Install, Setup & Run First Pipeline", 
    description: "Learn how to install, set up, and run your first pipeline using Jenkins in this comprehensive beginner's guide with automated build triggers and agent setup.", 
    thumbnail: vidImg1, 
    link: "https://www.youtube.com/watch?v=8etoaL6szeY&t=526s",
    duration: "14:20",
    category: "CI/CD Automation",
    tools: ["Jenkins", "CI/CD", "Pipelines", "Linux"]
  },
  { 
    id: 'VID-002',
    ep: '02',
    youtubeId: 'HXarkxibt6s',
    title: "Dockerize React Apps Like a Pro: Live Updates with Volumes! 🐳⚛️", 
    description: "Master Docker for modern React development. Learn how to achieve live hot-reloading using bind mounts and Docker volumes for frictionless workflows.", 
    thumbnail: vidImg2, 
    link: "https://youtu.be/HXarkxibt6s",
    duration: "12:45",
    category: "Containerization",
    tools: ["Docker", "React", "Bind Mounts", "Volumes"]
  },
  { 
    id: 'VID-003',
    ep: '03',
    youtubeId: 'Bm2Swjo-LVk',
    title: "What is Nodemon: Stop Restarting Your Node.js Server! 🚀", 
    description: "Improve your Node.js developer experience by learning how to configure Nodemon to automatically restart your server on file changes.", 
    thumbnail: vidImg3, 
    link: "https://youtu.be/Bm2Swjo-LVk",
    duration: "08:15",
    category: "Developer Tooling",
    tools: ["Node.js", "Express", "Nodemon", "DevTools"]
  },
  { 
    id: 'VID-004',
    ep: '04',
    youtubeId: 'wpfhxn5szmc',
    title: "Docker for Beginners | Part 1 - What is Docker & Build Your First Container", 
    description: "Dive into the fundamental concepts of containerization. Understand container vs VM differences and build your very first container step-by-step.", 
    thumbnail: vidImg4, 
    link: "https://youtu.be/wpfhxn5szmc",
    duration: "16:50",
    category: "Containerization",
    tools: ["Docker", "Dockerfile", "Containers", "CLI"]
  },
  { 
    id: 'VID-005',
    ep: '05',
    youtubeId: 'b5cxuDrQQfw',
    title: "Docker Tutorial | Part 2 - How to Remove Containers & Images + Port Mapping", 
    description: "Expand your Docker knowledge with container lifecycle commands, dangling image pruning, and host-to-container port mapping mechanics.", 
    thumbnail: vidImg5, 
    link: "https://youtu.be/b5cxuDrQQfw?si=G8Jp8ZltM7rWqIGB",
    duration: "18:10",
    category: "Docker Networking",
    tools: ["Docker CLI", "Port Mapping", "Lifecycle", "Networking"]
  },
  { 
    id: 'VID-006',
    ep: '06',
    youtubeId: 'MSrD1UmqaJE',
    title: "What is a .env File? | Keep Your Secrets Safe!", 
    description: "A practical guide to securing API keys, database credentials, and production secrets using environment variables in full-stack applications.", 
    thumbnail: vidImg6, 
    link: "https://youtu.be/MSrD1UmqaJE?si=I4LCNtSLf1TMbf4Q",
    duration: "09:30",
    category: "Security & Config",
    tools: [".env", "Security", "Secrets", "Best Practices"]
  }
];

export const articles = [
  { 
    id: 'ART-001',
    title: "What is MLOps: Why It's More Than Just Coding", 
    description: "An exploration into the world of MLOps. Discover why deploying machine learning models requires more than just writing code, detailing model tracking, drift validation, and automated production pipelines.", 
    date: "April 09, 2026", 
    readTime: "6 min read",
    thumbnail: artImg3, 
    link: "https://medium.com/@sachilz/what-is-mlops-why-its-more-than-just-coding-3b9b6c9d043b",
    category: "MLOps & AI",
    takeaways: [
      "Why standard CI/CD falls short for dynamic machine learning models",
      "Model governance, experiment tracking, and data drift detection",
      "Automating reproducible training-to-serving pipelines"
    ]
  },
  { 
    id: 'ART-002',
    title: "How I Solved My React-Node Backend Connection Issue with Nginx in My MERN To-Do App", 
    description: "A troubleshooting breakdown of resolving frontend-to-backend network proxying and CORS issues in a Dockerized MERN stack using an Nginx reverse proxy.", 
    date: "April 05, 2026", 
    readTime: "5 min read",
    thumbnail: artImg4, 
    link: "https://medium.com/@sachilz/how-i-solved-my-react-node-backend-connection-issue-with-nginx-in-my-mern-todo-app-57c49eb61d4d",
    category: "DevOps & Troubleshooting",
    takeaways: [
      "Diagnosing Docker bridge network DNS resolution between containers",
      "Configuring Nginx reverse proxy blocks for unified origin routing",
      "Completely eliminating browser CORS errors without backend hacks"
    ]
  },
  { 
    id: 'ART-003',
    title: "Deep Dive: Architecting a MERN App with Docker & Nginx Reverse Proxy", 
    description: "A detailed breakdown of how to architect and deploy a production-ready MERN stack application leveraging Docker multi-stage builds and Nginx upstream routing.", 
    date: "April 03, 2026", 
    readTime: "8 min read",
    thumbnail: artImg2, 
    link: "https://medium.com/@sachilz/deep-dive-architecting-a-mern-app-with-docker-nginx-reverse-proxy-49c45d3816ab",
    category: "Cloud Architecture",
    takeaways: [
      "Multi-tier container orchestration using Docker Compose",
      "Production-grade Nginx configuration with gzip and proxy caching",
      "Securing communication between internal services and external clients"
    ]
  },
  { 
    id: 'ART-004',
    title: "C programming-Introduction", 
    description: "A comprehensive guide into low-level systems programming fundamentals, memory management mechanics, pointer arithmetic, and foundational algorithmic efficiency.", 
    date: "May 26, 2024", 
    readTime: "4 min read",
    thumbnail: artImg1, 
    link: "https://medium.com/@sachilz/c-programming-introduction-9e07a18c8776",
    category: "Systems Programming",
    takeaways: [
      "Core C compilation pipeline (Preprocessor, Compiler, Linker)",
      "Stack vs Heap memory management with pointers",
      "Foundational systems knowledge crucial for understanding Linux kernel internals"
    ]
  }
];

const ContentSection = () => {
  // Video Studio State
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [videoViewMode, setVideoViewMode] = useState('studio'); // 'studio' | 'grid'
  const [playingModalVideo, setPlayingModalVideo] = useState(null);

  // Article Reader State
  const [activeArticle, setActiveArticle] = useState(articles[1]); // Default to popular Nginx architecture article

  return (
    <div className="bg-transparent relative border-t border-white/5 font-sans">
      
      {/* ============================================================== */}
      {/* 1. YOUTUBE SECTION: NEXTOPS BROADCAST STUDIO                   */}
      {/* ============================================================== */}
      <section id="videos" className="pt-24 pb-20 relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Linux-Inspired Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 border-l-4 border-red-500 pl-6 font-mono-code"
          >
            <div className="flex items-center gap-2 text-red-400 text-xs font-bold mb-2">
              <FaTerminal className="text-red-400" />
              <span>sachintha@arch:~$ mpv --profile=devops-tutorials https://youtube.com/@NextOpz</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
                  <FaYoutube className="text-2xl" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
                  NextOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">Broadcast Studio</span>
                </h2>
              </div>

              {/* View Switcher & Channel Link */}
              <div className="flex items-center gap-2 self-start sm:self-auto font-mono">
                <div className="flex items-center bg-[#090d16] p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setVideoViewMode('studio')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all ${
                      videoViewMode === 'studio'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/40 font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <FaTv size={11} />
                    <span>Cinema Deck</span>
                  </button>
                  <button
                    onClick={() => setVideoViewMode('grid')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all ${
                      videoViewMode === 'grid'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/40 font-bold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <FaTh size={11} />
                    <span>Grid View</span>
                  </button>
                </div>

                <a
                  href="https://www.youtube.com/@NextOpz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.35)]"
                >
                  <FaYoutube size={14} />
                  <span>@NextOpz</span>
                </a>
              </div>
            </div>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm font-sans max-w-2xl">
              Step-by-step engineering tutorials, container workflows, and live infrastructure demos. Master Docker, Jenkins, and modern DevSecOps tooling.
            </p>
          </motion.div>

          {/* MODE A: CINEMA STUDIO DECK (MASTER-DETAIL PLAYER) */}
          {videoViewMode === 'studio' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Big Cinema Broadcast Monitor (7 cols) */}
              <div className="lg:col-span-7 bg-[#090d16]/95 backdrop-blur-xl border border-red-500/30 rounded-2xl p-5 sm:p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative font-mono">
                {/* Terminal Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[10px] text-gray-400">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-gray-300 font-mono">
                      MPV PLAYER: {activeVideo.id} // {activeVideo.category}
                    </span>
                  </div>
                  <span className="text-red-400 font-bold flex items-center gap-1.5">
                    <FaClock size={10} />
                    {activeVideo.duration} • 1080p
                  </span>
                </div>

                {/* Video Stage Frame */}
                <div 
                  onClick={() => setPlayingModalVideo(activeVideo)}
                  className="group relative rounded-xl overflow-hidden bg-black aspect-video border border-white/10 hover:border-red-500/60 mb-5 cursor-pointer shadow-2xl transition-all"
                >
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 border border-white/30 text-white flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.8)] group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-xl sm:text-2xl ml-1" />
                    </div>
                  </div>

                  {/* Episode Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-red-400 border border-red-500/30">
                    EPISODE {activeVideo.ep}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-white flex items-center gap-1.5 border border-white/10">
                    <FaClock size={10} className="text-red-400" />
                    <span>{activeVideo.duration}</span>
                  </div>
                </div>

                {/* Video Info Details */}
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono">
                    <span className="text-[10px] uppercase tracking-wider text-red-400 font-bold px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20">
                      {activeVideo.category}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono">NextOps Engineering Channel</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-white font-sans tracking-tight mb-2 leading-snug">
                    {activeVideo.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed font-sans mb-4">
                    {activeVideo.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {activeVideo.tools.map((tool, idx) => (
                        <span key={idx} className="text-[10px] bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded font-mono">
                          #{tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPlayingModalVideo(activeVideo)}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all"
                      >
                        <FaPlay size={10} />
                        <span>Play Stream</span>
                      </button>
                      <a
                        href={activeVideo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-bold transition-all"
                      >
                        <span>YouTube</span>
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Playlist Queue Docket (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-2.5 max-h-[660px] overflow-y-auto pr-1 scrollbar-thin font-mono">
                <div className="text-[11px] text-gray-400 pb-2 px-1 flex items-center justify-between border-b border-white/5">
                  <span>QUEUE PLAYLIST ({videos.length} EPISODES)</span>
                  <span className="text-red-400 font-bold">1080P HD</span>
                </div>

                {videos.map((vid) => {
                  const isSelected = activeVideo.id === vid.id;
                  return (
                    <motion.div
                      key={vid.id}
                      onClick={() => setActiveVideo(vid)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                      className={`group relative p-3 rounded-xl border transition-all cursor-pointer select-none flex gap-3 ${
                        isSelected
                          ? 'bg-gradient-to-r from-red-950/40 via-[#120a0d] to-[#0a0708] border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.15)] ring-1 ring-red-500/30'
                          : 'bg-[#080c16]/80 hover:bg-[#0c1220] border-white/5 hover:border-white/20'
                      }`}
                    >
                      {/* Active indicator pip */}
                      {isSelected && (
                        <div className="absolute left-0 top-3 bottom-3 w-1 bg-red-500 rounded-r-full shadow-[0_0_8px_#ef4444]" />
                      )}

                      {/* Mini Thumbnail */}
                      <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-black relative border border-white/10">
                        <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent flex items-center justify-center">
                          <FaPlay className={`text-xs ${isSelected ? 'text-red-400' : 'text-white/80'}`} />
                        </div>
                        <span className="absolute bottom-1 right-1 text-[8px] bg-black/80 px-1 rounded text-white font-mono">
                          {vid.duration}
                        </span>
                      </div>

                      {/* Title & Metadata */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-[10px] mb-1">
                            <span className="text-red-400 font-bold">EP {vid.ep}</span>
                            <span className="text-gray-500">{vid.category}</span>
                          </div>
                          <h4 className="text-xs font-bold text-white group-hover:text-red-300 transition-colors line-clamp-2 font-sans">
                            {vid.title}
                          </h4>
                        </div>
                        <div className="text-[10px] text-gray-500 flex items-center justify-between mt-1">
                          <span>$ mpv --play</span>
                          {isSelected && <span className="text-red-400 font-bold">ACTIVE</span>}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          )}

          {/* MODE B: STUDIO GRID */}
          {videoViewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-[#090d16]/90 border border-white/10 hover:border-red-500/50 rounded-2xl p-4 flex flex-col transition-colors duration-200"
                >
                  <div 
                    onClick={() => setPlayingModalVideo(vid)}
                    className="relative aspect-video rounded-xl overflow-hidden bg-black mb-3 cursor-pointer group border border-white/5"
                  >
                    <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <FaPlay className="text-base ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] text-white">
                      {vid.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1.5">
                    <span className="text-red-400 font-bold">EPISODE {vid.ep}</span>
                    <span>{vid.category}</span>
                  </div>

                  <h3 className="text-sm font-bold text-white font-sans line-clamp-2 mb-2 hover:text-red-400 transition-colors">
                    {vid.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-sans line-clamp-2 mb-4 leading-relaxed">
                    {vid.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setPlayingModalVideo(vid)}
                      className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1.5"
                    >
                      <FaPlay size={10} />
                      <span>Play Now</span>
                    </button>
                    <a
                      href={vid.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white flex items-center gap-1"
                    >
                      <span>YouTube</span>
                      <FaExternalLinkAlt size={9} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>


      {/* ============================================================== */}
      {/* 2. ENGINEERING ARTICLES: THE ARCHITECTURE GAZETTE & DOSSIER    */}
      {/* ============================================================== */}
      <section id="articles" className="pt-16 pb-28 relative overflow-hidden border-t border-white/5">
        {/* Glow ambient */}
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 border-l-4 border-emerald-400 pl-6 font-mono-code"
          >
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
              <FaTerminal className="text-emerald-400" />
              <span>sachintha@arch:~$ man 7 devops-architecture-articles</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <FaMedium className="text-2xl" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">
                  Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-cyan to-brand-purple">Publications</span>
                </h2>
              </div>

              <a
                href="https://medium.com/@sachilz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-bold transition-all self-start sm:self-auto font-mono shadow-sm"
              >
                <FaMedium size={14} />
                <span>medium.com/@sachilz</span>
                <FaExternalLinkAlt size={10} />
              </a>
            </div>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm font-sans max-w-2xl">
              Deep-dive architectural blueprints, containerized proxy post-mortems, and MLOps lifecycle engineering guides published on Medium.
            </p>
          </motion.div>

          {/* SPOTLIGHT LEAD FEATURE & ARTICLE DOSSIER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Columns: Featured Editorial Spotlight Card */}
            <div className="lg:col-span-7 bg-[#090d16]/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-5 sm:p-7 shadow-[0_0_40px_rgba(0,0,0,0.8)] font-mono">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-[10px] text-gray-400">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-gray-300 font-mono">
                    MAN-PAGE: {activeArticle.id} // {activeArticle.category}
                  </span>
                </div>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <FaBookOpen size={10} />
                  {activeArticle.readTime}
                </span>
              </div>

              {/* Full Featured Image */}
              <a
                href={activeArticle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-xl overflow-hidden aspect-video bg-black/60 border border-white/10 hover:border-emerald-500/60 mb-5 shadow-inner transition-all"
              >
                <img
                  src={activeArticle.thumbnail}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-xs text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <FaTag size={10} />
                  <span>{activeArticle.category}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-emerald-500 text-black px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 shadow-lg opacity-90 group-hover:opacity-100">
                  <span>Open Story</span>
                  <FaExternalLinkAlt size={10} />
                </div>
              </a>

              {/* Article Content Breakdown */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-mono mb-2">
                    <span>Published: <strong className="text-gray-300">{activeArticle.date}</strong></span>
                    <span>•</span>
                    <span className="text-emerald-400">{activeArticle.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight leading-snug">
                    {activeArticle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans mt-2.5 leading-relaxed">
                    {activeArticle.description}
                  </p>
                </div>

                {/* Key Architecture Highlights */}
                <div className="bg-[#050811] border border-white/10 rounded-xl p-4">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 font-mono flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400" />
                    <span>Key Engineering Learnings & Architecture Patterns:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {activeArticle.takeaways.map((point, idx) => (
                      <li key={idx} className="text-xs text-gray-300 font-sans flex items-start gap-2">
                        <span className="text-emerald-400 font-mono text-sm leading-none">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Link */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono">
                  <span className="text-xs text-gray-500">$ man --view-full</span>
                  <a
                    href={activeArticle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                  >
                    <span>Read Full Article on Medium</span>
                    <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Interactive Publication Docket */}
            <div className="lg:col-span-5 flex flex-col gap-3 font-mono">
              <div className="text-[11px] text-gray-400 pb-2 px-1 flex items-center justify-between border-b border-white/5">
                <span>ALL PUBLICATIONS ({articles.length})</span>
                <span className="text-emerald-400 font-bold">CLICK TO INSPECT</span>
              </div>

              {articles.map((art) => {
                const isSelected = activeArticle.id === art.id;
                return (
                  <motion.div
                    key={art.id}
                    onClick={() => setActiveArticle(art)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    className={`group relative p-3.5 rounded-xl border transition-all cursor-pointer select-none flex gap-3.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-emerald-950/40 via-[#091219] to-[#070d14] border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30'
                        : 'bg-[#080c16]/80 hover:bg-[#0c1220] border-white/5 hover:border-white/20'
                    }`}
                  >
                    {/* Active border pip */}
                    {isSelected && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-emerald-400 rounded-r-full shadow-[0_0_8px_#10b981]" />
                    )}

                    {/* Small Cover Preview */}
                    <div className="w-24 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-black relative border border-white/10">
                      <img src={art.thumbnail} alt={art.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Content text */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[10px] mb-1">
                          <span className="text-emerald-400 font-bold">{art.category}</span>
                          <span className="text-gray-500">{art.readTime}</span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 font-sans leading-snug">
                          {art.title}
                        </h4>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-gray-500 mt-2">
                        <span>{art.date}</span>
                        <a
                          href={art.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-bold"
                        >
                          <span>Open</span>
                          <FaExternalLinkAlt size={9} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* YOUTUBE EMBED VIDEO MODAL PLAYER */}
      <AnimatePresence>
        {playingModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlayingModalVideo(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f19] border border-white/20 rounded-2xl max-w-4xl w-full overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] font-mono"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#070a12]">
                <div className="flex items-center gap-2">
                  <FaYoutube className="text-red-500 text-lg" />
                  <span className="text-xs sm:text-sm font-bold text-white font-sans line-clamp-1">
                    {playingModalVideo.title}
                  </span>
                </div>
                <button
                  onClick={() => setPlayingModalVideo(null)}
                  className="w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 flex items-center justify-center transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              <div className="aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${playingModalVideo.youtubeId}?autoplay=1`}
                  title={playingModalVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-[#070a12] flex items-center justify-between text-xs">
                <span className="text-gray-400 font-mono">Stream: 1080p 60FPS</span>
                <a
                  href={playingModalVideo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1.5"
                >
                  <span>Open on YouTube</span>
                  <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ContentSection;
