import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaYoutube, FaMedium, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const videos = [
  { title: "Kubernetes Explained in 10 Minutes", thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "My AWS Certifications Journey", thumbnail: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Terraform Best Practices for Infrastructure", thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Dockerizing React Applications", thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "CI/CD Pipeline with GitHub Actions", thumbnail: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Prometheus & Grafana Monitoring Tutorial", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "AWS ECS Deployment Deep Dive", thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Nginx Reverse Proxy Basics", thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Mastering CLI & Bash Scripts", thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&h=250&fit=crop", link: "#" },
];

const articles = [
  { title: "Scaling Node.js on EKS", date: "Oct 12, 2023", thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Why Terraform Cloud is a Gamechanger", date: "Sep 05, 2023", thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Securing CI/CD Pipelines with GitHub Actions", date: "Aug 20, 2023", thumbnail: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Managing Multi-Cloud Secrets Securely", date: "Jul 10, 2023", thumbnail: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "The Ultimate AWS Services Architect Guide", date: "Jun 15, 2023", thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Building Serverless Apps with AWS Lambda", date: "May 22, 2023", thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "A Guide to Zero-Downtime Blue-Green Deployments", date: "Apr 04, 2023", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Advanced Database Migration Strategies", date: "Feb 28, 2023", thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=400&h=250&fit=crop", link: "#" },
  { title: "Optimizing Frontend Build Pipelines", date: "Jan 12, 2023", thumbnail: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=400&h=250&fit=crop", link: "#" },
];

const ContentSection = () => {
  const [expandVideos, setExpandVideos] = useState(false);
  const visibleVideos = expandVideos ? videos : videos.slice(0, 6);

  const [expandArticles, setExpandArticles] = useState(false);
  const visibleArticles = expandArticles ? articles : articles.slice(0, 6);

  return (
    <div className="bg-transparent relative border-t border-white/5">
      {/* YouTube Section */}
      <section id="videos" className="pt-24 pb-20">
        <motion.div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12 border-l-4 border-brand-cyan pl-6">
              <div className="flex items-center gap-3">
                <FaYoutube className="text-4xl text-red-500" />
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">NextOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Tube</span></h2>
              </div>
              <p className="text-gray-400 mt-3">Watch my latest tutorials and infrastructure deep-dives. Showing {expandVideos ? videos.length : 6} of {videos.length} videos.</p>
            </div>
            
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {visibleVideos.map((vid, i) => (
                  <motion.a 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: (i % 6) * 0.05 }}
                    key={vid.title} 
                    href={vid.link} 
                    className="flex flex-col bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 hover:border-red-500/30 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(220,38,38,0.2)] transition-all duration-300 group"
                  >
                    <div className="rounded-xl overflow-hidden relative shadow-xl mb-5">
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all z-10 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-0">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(220,38,38,0.8)]">
                          <FaYoutube className="text-white text-3xl ml-1" />
                        </div>
                      </div>
                      <img src={vid.thumbnail} alt={vid.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    <h3 className="text-xl leading-snug font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-2 px-2">
                      {vid.title}
                    </h3>
                    <div className="mt-auto px-2 pt-6 flex items-center gap-2 text-sm font-bold text-red-500 opacity-80 group-hover:opacity-100 transition-opacity">
                      Watch on YouTube <span className="text-lg">&rarr;</span>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>

            {videos.length > 6 && (
              <motion.div layout className="mt-14 flex justify-center">
                <button
                  onClick={() => setExpandVideos(!expandVideos)}
                  className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-red-500/30 text-white font-bold rounded-full hover:bg-red-500/10 hover:border-red-500/80 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300"
                >
                  {expandVideos ? (
                    <>Collapse View <FaChevronUp className="text-red-500" /></>
                  ) : (
                    <>View All Videos <FaChevronDown className="text-red-500" /></>
                  )}
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section id="articles" className="pt-16 pb-24">
        <motion.div className="max-w-7xl mx-auto px-6">
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
              <p className="text-gray-400 mt-3">Deep technical write-ups and architecture guides. Showing {expandArticles ? articles.length : 6} of {articles.length} articles.</p>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {visibleArticles.map((article, i) => (
                  <motion.a 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: (i % 6) * 0.05 }}
                    key={article.title} 
                    href={article.link} 
                    className="flex flex-col bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-5 hover:border-brand-purple/40 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(176,38,255,0.2)] transition-all duration-300 group"
                  >
                    <div className="rounded-xl overflow-hidden relative shadow-xl mb-5">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10 flex items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-0">
                        <div className="w-16 h-16 bg-black border border-white/10 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(0,0,0,0.9)]">
                          <FaMedium className="text-white text-3xl" />
                        </div>
                      </div>
                      <img src={article.thumbnail} alt={article.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    <p className="px-2 text-xs font-mono text-gray-400 mb-2 group-hover:text-brand-cyan transition-colors">{article.date}</p>
                    <h3 className="text-xl leading-snug font-bold text-gray-200 group-hover:text-white transition-colors line-clamp-2 px-2">
                      {article.title}
                    </h3>
                    <div className="mt-auto px-2 pt-6 flex items-center gap-2 text-sm font-bold text-brand-purple opacity-80 group-hover:opacity-100 transition-opacity">
                      Read on Medium <span className="text-lg">&rarr;</span>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>

            {articles.length > 6 && (
              <motion.div layout className="mt-14 flex justify-center">
                <button
                  onClick={() => setExpandArticles(!expandArticles)}
                  className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-brand-purple/30 text-white font-bold rounded-full hover:bg-brand-purple/10 hover:border-brand-purple/60 hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all duration-300"
                >
                  {expandArticles ? (
                    <>Collapse View <FaChevronUp className="text-brand-cyan" /></>
                  ) : (
                    <>View All Articles <FaChevronDown className="text-brand-cyan" /></>
                  )}
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContentSection;
