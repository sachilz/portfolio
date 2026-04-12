import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaYoutube, FaMedium, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

const videos = [
  { title: "Jenkins Tutorial for Beginners | Install, Setup & Run First Pipeline", thumbnail: "./src/assets/images/maxresdefault.jpg", link: "https://www.youtube.com/watch?v=8etoaL6szeY&t=526s" },
  { title: "Dockerize React Apps Like a Pro: Live Updates with Volumes! 🐳⚛️", thumbnail: "./src/assets/images/maxresdefault (1).jpg", link: "https://youtu.be/HXarkxibt6s" },
  { title: "What is Nodemon: Stop Restarting Your Node.js Server! 🚀", thumbnail: "./src/assets/images/maxresdefault (2).jpg", link: "https://youtu.be/Bm2Swjo-LVk" },
  { title: "Docker for Beginners | Part 1 - What is Docker & Build Your First Container (Dockerfile Tutorial)", thumbnail: "./src/assets/images/maxresdefault (3).jpg", link: "https://youtu.be/wpfhxn5szmc" },
  { title: "Docker Tutorial | Part 2 - How to Remove Containers & Images + Port Mapping Explained", thumbnail: "./src/assets/images/maxresdefault.webp", link: "https://youtu.be/b5cxuDrQQfw?si=G8Jp8ZltM7rWqIGB" }
];

const articles = [
  { title: "C programming-Introduction", date: "May 26, 2024", thumbnail: "./src/assets/images/medium_01.webp", link: "https://medium.com/@dilshansachiya671_17974/c-programming-introduction-9e07a18c8776" },
  { title: "Deep Dive: Architecting a MERN App with Docker & Nginx Reverse Proxy", date: "April 03, 2026", thumbnail: "./src/assets/images/medium_02.webp", link: "https://medium.com/@dilshansachiya671_17974/deep-dive-architecting-a-mern-app-with-docker-nginx-reverse-proxy-49c45d3816ab" },
  { title: "What is MLOps: Why It's More Than Just Coding", date: "April 09, 2026", thumbnail: "./src/assets/images/medium_03.jpg", link: "" }
];

const VideoCard = ({ vid }) => {
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
        className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 hover:border-red-500/30 group flex flex-col h-full z-10 overflow-hidden transition-colors"
      >
        <div className="rounded-xl overflow-hidden relative shadow-xl mb-5" style={{ transform: "translateZ(30px)" }}>
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all z-10 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-0">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(220,38,38,0.8)]">
              <FaPlay className="text-white text-2xl ml-1" />
            </div>
          </div>
          <img src={vid.thumbnail} alt={vid.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        <h3 className="text-xl leading-snug font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-2 px-2" style={{ transform: "translateZ(40px)" }}>
          {vid.title}
        </h3>
        <div className="mt-auto px-2 pt-6 flex items-center gap-2 text-sm font-bold text-red-500 opacity-80 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(20px)" }}>
          Watch on YouTube <span className="text-lg">&rarr;</span>
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
        className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 hover:border-brand-purple/40 group flex flex-col h-full z-10 overflow-hidden transition-colors"
      >
        <div className="rounded-xl overflow-hidden relative shadow-xl mb-5" style={{ transform: "translateZ(30px)" }}>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-0">
            <div className="w-16 h-16 bg-black border border-white/10 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(0,0,0,0.9)]">
              <FaMedium className="text-white text-3xl" />
            </div>
          </div>
          <img src={article.thumbnail} alt={article.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>

        <p className="px-2 text-xs font-mono text-gray-400 mb-2 group-hover:text-brand-cyan transition-colors" style={{ transform: "translateZ(20px)" }}>{article.date}</p>
        <h3 className="text-xl leading-snug font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-2 px-2" style={{ transform: "translateZ(40px)" }}>
          {article.title}
        </h3>
        <div className="mt-auto px-2 pt-6 flex items-center gap-2 text-sm font-bold text-brand-purple opacity-80 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(20px)" }}>
          Read on Medium <span className="text-lg">&rarr;</span>
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
                  {visibleVideos.map((vid) => (
                    <VideoCard key={vid.title} vid={vid} />
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
                  {visibleArticles.map((article) => (
                    <ArticleCard key={article.title} article={article} />
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
