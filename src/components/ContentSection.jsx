import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaYoutube, FaMedium, FaChevronLeft, FaChevronRight, FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
import vidImg1 from '../assets/images/maxresdefault.jpg';
import vidImg2 from '../assets/images/maxresdefault (1).jpg';
import vidImg3 from '../assets/images/maxresdefault (2).jpg';
import vidImg4 from '../assets/images/maxresdefault (3).jpg';
import vidImg5 from '../assets/images/maxresdefault.webp';
import vidImg6 from '../assets/images/maxresdefault (4).png';
import artImg1 from '../assets/images/medium_01.webp';
import artImg2 from '../assets/images/medium_02.webp';
import artImg3 from '../assets/images/medium_03.jpg';

export const videos = [
  { title: "Jenkins Tutorial for Beginners | Install, Setup & Run First Pipeline", description: "Learn how to install, set up, and run your first pipeline using Jenkins in this comprehensive beginner's guide.", thumbnail: vidImg1, link: "https://www.youtube.com/watch?v=8etoaL6szeY&t=526s" },
  { title: "Dockerize React Apps Like a Pro: Live Updates with Volumes! 🐳⚛️", description: "Master Docker for React development. Learn how to achieve live updates utilizing Docker volumes for a seamless workflow.", thumbnail: vidImg2, link: "https://youtu.be/HXarkxibt6s" },
  { title: "What is Nodemon: Stop Restarting Your Node.js Server! 🚀", description: "Improve your Node.js development experience by learning how to use Nodemon to automatically restart your server.", thumbnail: vidImg3, link: "https://youtu.be/Bm2Swjo-LVk" },
  { title: "Docker for Beginners | Part 1 - What is Docker & Build Your First Container (Dockerfile Tutorial)", description: "Dive into the basics of Docker. Understand what Docker is and build your very first container step-by-step.", thumbnail: vidImg4, link: "https://youtu.be/wpfhxn5szmc" },
  { title: "Docker Tutorial | Part 2 - How to Remove Containers & Images + Port Mapping Explained", description: "Expand your Docker knowledge. Learn how to manage containers and images, and understand the crucial concept of port mapping.", thumbnail: vidImg5, link: "https://youtu.be/b5cxuDrQQfw?si=G8Jp8ZltM7rWqIGB" },
  { title: "What is a .env File? | Keep Your Secrets Safe!", description: "A quick guide on securely storing API keys, DB URLs, and secrets using .env files in MERN apps. Keeps projects secure and production-ready", thumbnail: vidImg6, link: "https://youtu.be/MSrD1UmqaJE?si=I4LCNtSLf1TMbf4Q" }
];

export const articles = [
  { title: "C programming-Introduction", description: "Share my journey into web development starting from static websites and the fundamentals that...", date: "May 26, 2024", thumbnail: artImg1, link: "https://medium.com/@sachilz/c-programming-introduction-9e07a18c8776" },
  { title: "Deep Dive: Architecting a MERN App with Docker & Nginx Reverse Proxy", description: "A detailed breakdown of how to architecture and deploy a complete MERN stack application leveraging Docker and Nginx.", date: "April 03, 2026", thumbnail: artImg2, link: "https://medium.com/@sachilz/deep-dive-architecting-a-mern-app-with-docker-nginx-reverse-proxy-49c45d3816ab" },
  { title: "What is MLOps: Why It's More Than Just Coding", description: "An exploration into the world of MLOps. Discover why deploying machine learning models requires more than just writing code.", date: "April 09, 2026", thumbnail: artImg3, link: "https://medium.com/@sachilz" }
];

const VideoCard = ({ vid, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.85, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 150, damping: 15 } }
      }}
      style={{ perspective: 1000 }}
      className="relative w-full h-full"
    >
      <motion.a
        href={vid.link}
        whileHover={{
          rotateX: 15,
          rotateY: -15,
          scale: 1.05,
          z: 30,
          boxShadow: "-20px 20px 40px rgba(220,38,38,0.15)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative bg-[#252535] rounded-xl group flex flex-col h-full z-10 overflow-hidden transition-colors"
      >
        <div className="w-full relative overflow-hidden" style={{ transform: "translateZ(30px)" }}>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(220,38,38,0.8)]">
              <FaPlay className="text-white text-2xl ml-1" />
            </div>
          </div>
          <img src={vid.thumbnail} alt={vid.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        <div className="flex flex-col p-5 flex-grow" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-center gap-2 mb-3">
            <FaYoutube className="text-[#fca5a5] text-lg" />
            <span className="text-[#fca5a5] font-semibold text-sm">YouTube</span>
          </div>
          <h3 className="text-xl leading-snug font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 mb-2">
            {vid.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3 mb-4" style={{ fontFamily: "'Aptos', 'Segoe UI', system-ui, sans-serif" }}>
            {vid.description}
          </p>
          <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#c084fc] hover:text-[#e879f9] transition-colors">
            View Content <FaExternalLinkAlt className="pb-[1px]" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

const ArticleCard = ({ article }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.85, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 150, damping: 15 } }
      }}
      style={{ perspective: 1000 }}
      className="relative w-full h-full"
    >
      <motion.a
        href={article.link}
        whileHover={{
          rotateX: 15,
          rotateY: -15,
          scale: 1.05,
          z: 30,
          boxShadow: "-20px 20px 40px rgba(176,38,255,0.15)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative bg-[#252535] rounded-xl group flex flex-col h-full z-10 overflow-hidden transition-colors"
      >
        <div className="w-full relative overflow-hidden" style={{ transform: "translateZ(30px)" }}>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all z-10 flex items-center justify-center">
            {/* Medium icon overlay could be placed here if desired */}
          </div>
          <img src={article.thumbnail} alt={article.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        <div className="flex flex-col p-5 flex-grow" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-center gap-2 mb-3">
            <FaMedium className="text-[#4ade80] text-lg" />
            <span className="text-[#4ade80] font-semibold text-sm">Medium</span>
          </div>
          <h3 className="text-xl leading-snug font-bold text-white group-hover:text-[#b026ff] transition-colors line-clamp-2 mb-2">
            {article.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3 mb-4" style={{ fontFamily: "'Aptos', 'Segoe UI', system-ui, sans-serif" }}>
            {article.description}
          </p>
          <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#c084fc] hover:text-[#e879f9] transition-colors">
            View Content <FaExternalLinkAlt className="pb-[1px]" />
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

const ContentSection = () => {
  const itemsPerPage = 3;

  const [currentVideoPage, setCurrentVideoPage] = useState(0);
  const totalVideoPages = Math.ceil(videos.length / itemsPerPage);
  const handleNextVideo = () => setCurrentVideoPage((prev) => (prev + 1) % totalVideoPages);
  const handlePrevVideo = () => setCurrentVideoPage((prev) => (prev - 1 + totalVideoPages) % totalVideoPages);
  const visibleVideos = videos.slice(currentVideoPage * itemsPerPage, (currentVideoPage + 1) * itemsPerPage);

  const [currentArticlePage, setCurrentArticlePage] = useState(0);
  const totalArticlePages = Math.ceil(articles.length / itemsPerPage);
  const handleNextArticle = () => setCurrentArticlePage((prev) => (prev + 1) % totalArticlePages);
  const handlePrevArticle = () => setCurrentArticlePage((prev) => (prev - 1 + totalArticlePages) % totalArticlePages);
  const visibleArticles = articles.slice(currentArticlePage * itemsPerPage, (currentArticlePage + 1) * itemsPerPage);

  return (
    <div className="bg-transparent relative border-t border-white/5">
      {/* YouTube Section */}
      <section id="videos" className="pt-24 pb-20">
        <motion.div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12 border-l-4 border-brand-cyan pl-6">
              <div className="flex items-center gap-3">
                <FaYoutube className="text-4xl text-red-500" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">You <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Tube</span></h2>
              </div>
              <p className="text-gray-400 mt-3">Watch my latest tutorials and infrastructure deep-dives. Showing {Math.min(currentVideoPage * itemsPerPage + 1, videos.length)}-{Math.min((currentVideoPage + 1) * itemsPerPage, videos.length)} of {videos.length} videos.</p>
            </div>

            <div className="relative min-h-[400px]">
              {totalVideoPages > 1 && (
                <button
                  onClick={handlePrevVideo}
                  className="absolute -left-6 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-red-500/20 hover:border-red-500/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                  aria-label="Previous Videos"
                >
                  <FaChevronLeft size={18} className="text-red-500" />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideoPage}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                    exit: {
                      opacity: 0,
                      y: 20,
                      scale: 0.95,
                      transition: { duration: 0.2, ease: "easeIn" }
                    }
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full min-h-[300px]"
                >
                  {visibleVideos.map((vid, i) => (
                    <VideoCard key={vid.title} vid={vid} index={currentVideoPage * itemsPerPage + i + 1} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {totalVideoPages > 1 && (
                <button
                  onClick={handleNextVideo}
                  className="absolute -right-6 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-red-500/20 hover:border-red-500/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                  aria-label="Next Videos"
                >
                  <FaChevronRight size={18} className="text-red-500" />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section id="articles" className="pt-16 pb-24">
        <motion.div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12 border-l-4 border-brand-cyan pl-6">
              <div className="flex items-center gap-3">
                <FaMedium className="text-4xl text-white" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Articles</span></h2>
              </div>
              <p className="text-gray-400 mt-3">Deep technical write-ups and architecture guides. Showing {Math.min(currentArticlePage * itemsPerPage + 1, articles.length)}-{Math.min((currentArticlePage + 1) * itemsPerPage, articles.length)} of {articles.length} articles.</p>
            </div>

            <div className="relative min-h-[420px]">
              {totalArticlePages > 1 && (
                <button
                  onClick={handlePrevArticle}
                  className="absolute -left-6 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-brand-purple/20 hover:border-brand-purple/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(176,38,255,0.4)]"
                  aria-label="Previous Articles"
                >
                  <FaChevronLeft size={18} className="text-brand-purple" />
                </button>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentArticlePage}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
                    exit: {
                      opacity: 0,
                      y: 20,
                      scale: 0.95,
                      transition: { duration: 0.2, ease: "easeIn" }
                    }
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full min-h-[300px]"
                >
                  {visibleArticles.map((article, i) => (
                    <ArticleCard key={article.title} article={article} index={currentArticlePage * itemsPerPage + i + 1} />
                  ))}
                </motion.div>
              </AnimatePresence>

              {totalArticlePages > 1 && (
                <button
                  onClick={handleNextArticle}
                  className="absolute -right-6 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-brand-purple/20 hover:border-brand-purple/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(176,38,255,0.4)]"
                  aria-label="Next Articles"
                >
                  <FaChevronRight size={18} className="text-brand-purple" />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContentSection;
