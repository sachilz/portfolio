import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaChevronLeft, FaChevronRight, FaTerminal, FaCodeBranch } from 'react-icons/fa';
import project1 from '../assets/project-pic/DevSecOps MERN Pipeline on AWS.png';
import project2 from '../assets/project-pic/Secure Multi-Tier MERN on AWS.png';
import project3 from '../assets/project-pic/Cloud-Native DevSecOps Pipeline.png';
import project4 from '../assets/project-pic/AWS Infrastructure Provisioning and Deployment Automation.png';
import project5 from '../assets/project-pic/Automating AWS EC2 Server Configuration with Ansible.png';
import project6 from '../assets/project-pic/Multi-OS Configuration Management Using Ansible.png';
import project7 from '../assets/project-pic/IntelliTutor AI Microservices Platform.png';
import project8 from '../assets/project-pic/Career Advisor Agentic AI.png';
import project9 from '../assets/project-pic/FND Neural Optimization.png';

export const projects = [
  {
    title: 'Automated DevSecOps Pipeline: Securing & Deploying a MERN Stack App on AWS',
    description: 'A containerized MERN stack application featuring an Nginx reverse proxy, Docker Compose orchestration, and seamless service communication.',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Jenkins', 'AWS', 'EC2'],
    github: 'https://github.com/sachilz/Securing-Deploying-a-MERN-Stack-App-on-AWS.git',
    image: project1,
    category: 'DevOps & Cloud'
  },
  {
    title: 'Secure Multi-Tier MERN Deployment: AWS VPC Networking & Docker Orchestration',
    description: 'A production-style MERN To-Do application containerized with Docker, orchestrated using Docker Compose, and deployed with Nginx reverse proxy.',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Jenkins', 'Nginx', 'AWS', 'VPC', 'EC2', 'ECR'],
    github: 'https://github.com/sachilz/Secure-Multi-Tier-MERN-Deployment-AWS.git',
    image: project2,
    category: 'DevOps & Cloud'
  },
  {
    title: 'Cloud-Native DevSecOps Pipeline: Secure Flask Web Application on AWS',
    description: 'Developed a Flask media app with a secure DevSecOps pipeline using Jenkins, Docker, AWS EC2, IAM, ECR, SonarQube, and Trivy for automated deployment and vulnerability scanning.',
    tech: ['Flask', 'Python', 'Docker', 'Jenkins', 'AWS', 'EC2', 'ECR', 'SonarQube', 'Trivy'],
    github: 'https://github.com/sachilz/Secure-Flask-Web-Application-on-AWS.git',
    image: project3,
    category: 'DevOps & Cloud'
  },
  {
    title: 'AWS Infrastructure Provisioning & Deployment Automation',
    description: 'End-to-end DevSecOps cloud architecture utilizing Terraform for VPC & EC2 provisioning, Ansible for automated Docker configuration, and a 14-stage Jenkins CI/CD pipeline with Gitleaks, SonarQube, and Trivy.',
    tech: ['Terraform', 'Ansible', 'AWS', 'Docker', 'Jenkins', 'DevSecOps', 'SonarQube', 'Trivy'],
    github: 'https://github.com/sachilz/AWS-Infrastructure-Provisioning-Deployment-Automation',
    image: project4,
    category: 'DevOps & Cloud'
  },
  {
    title: 'Automated Remote Server Configuration with Ansible & AWS',
    description: 'Enterprise-ready IaC & configuration management automating AWS EC2 provisioning via Boto3, secure SSH authentication, and modular Ansible roles deploying an Apache web tier and MariaDB database tier.',
    tech: ['Ansible', 'AWS', 'EC2', 'Python', 'Boto3', 'Apache', 'MariaDB', 'Linux'],
    github: 'https://github.com/sachilz/Automating-AWS-EC2-server-configuration-with-Ansible',
    image: project5,
    category: 'DevOps & Cloud'
  },
  {
    title: 'Multi-OS Configuration Management Using Ansible on AWS',
    description: 'Automated configuration management provisioning and managing heterogeneous Linux distributions (Ubuntu 22.04 LTS & CentOS Stream 10) on AWS EC2 using a centralized Ansible control node and dynamic conditionals.',
    tech: ['Ansible', 'AWS', 'EC2', 'Ubuntu', 'CentOS', 'Linux', 'YAML'],
    github: 'https://github.com/sachilz/Multi-OS-Configuration-Management-Using-Ansible',
    image: project6,
    category: 'DevOps & Cloud'
  },
  {
    title: 'IntelliTutor: Microservices LMS with AI RAG Intelligent Tutor',
    description: 'An enterprise microservices-based Learning Management System featuring an AI-powered RAG intelligent tutor for personalized student learning. Built with Spring Boot 3, Java 17, React, MongoDB, Keycloak SSO, and Docker.',
    tech: ['Spring Boot 3', 'Java 17', 'React', 'MongoDB', 'Keycloak', 'Docker', 'RAG AI'],
    github: 'https://github.com/sachilz/intellitutor-platform',
    image: project7,
    category: 'AI & Microservices'
  },
  {
    title: 'Career Advisor: Autonomous Multi-Agent AI Platform with RAG',
    description: 'Autonomous multi-agent career advisor designed for IT students and graduates with skills-gap analysis and industry roadmap generation. Built with LangGraph, ChromaDB RAG, Groq Llama-3.1, and Streamlit.',
    tech: ['LangGraph', 'Multi-Agent', 'ChromaDB', 'RAG', 'Llama-3.1', 'Streamlit', 'Python', 'Docker'],
    github: 'https://github.com/sachilz/career-advisor-agentic-ai',
    image: project8,
    category: 'AI & Microservices'
  },
  {
    title: 'FND: Fake News Detection with PSO-Optimized Neural Network',
    description: 'AI-powered classification system evaluating Particle Swarm Optimization (PSO) for hyperparameter tuning in PyTorch Multi-Layer Perceptrons with TF-IDF text representation, CLI, and modern Web UI inference.',
    tech: ['PyTorch', 'Python', 'NLP', 'TF-IDF', 'PSO Algorithm', 'Docker', 'Vite', 'Nginx'],
    github: 'https://github.com/sachilz/fnd-neural-optimization',
    image: project9,
    category: 'AI & Microservices'
  }
];

const categories = [
  'All Deployments',
  'DevOps & Cloud',
  'AI & Microservices'
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 150, damping: 15 } }
      }}
      style={{ perspective: 1000 }}
      className="relative w-full h-full min-h-[460px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02, y: -4 }}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="group h-full flex flex-col rounded-xl bg-[#0a0d14]/90 border border-white/10 hover:border-emerald-500/40 p-4 shadow-xl backdrop-blur-xl transition-[border-color,box-shadow] duration-300 font-mono-code"
      >
        {/* Terminal Window Chrome */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/5 text-[9px] text-gray-500 select-none">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
            <span className="ml-1.5 text-gray-400 font-mono truncate max-w-[170px]">
              ~/deployments/{project.github ? project.github.split('/').pop().replace('.git', '') : 'repo'}
            </span>
          </div>
          <span className="text-emerald-400 font-bold text-[9px] uppercase">
            [PROD: READY]
          </span>
        </div>

        {/* Project Image */}
        <div
          className="w-full aspect-video bg-cover bg-center rounded-lg mb-4 shadow-lg relative overflow-hidden brightness-105 group-hover:brightness-115 transition-all duration-500 border border-white/5 bg-[#050811]"
          style={{ backgroundImage: `url("${project.image}")`, transform: "translateZ(25px)" }}
        >
          <div className="absolute inset-0 bg-transparent group-hover:bg-emerald-500/5 transition-colors duration-500"></div>
        </div>

        <div className="flex-grow flex flex-col font-sans" style={{ transform: "translateZ(35px)" }}>
          <div className="flex items-center gap-2 mb-1.5 font-mono">
            <span className="text-[10px] text-brand-cyan font-bold px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
              {project.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-gray-400 text-xs mb-4 leading-relaxed flex-grow line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4 font-mono-code" style={{ transform: "translateZ(20px)" }}>
            {project.tech.map((tech) => (
              <span key={tech} className="text-[10px] text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                [{tech.toLowerCase()}]
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-auto pt-2 font-mono-code" style={{ transform: "translateZ(30px)" }}>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 border border-emerald-500/30 hover:border-emerald-400 bg-emerald-500/10 text-emerald-300 hover:text-white px-3.5 py-1.5 rounded-lg text-xs transition-all w-max flex-shrink-0"
            >
              <FaGithub size={13} />
              <span>$ gh repo view</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Deployments');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Deployments') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(0);
  };

  const visibleProjects = filteredProjects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="projects" className="py-24 bg-transparent relative z-10 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24"
      >
        {/* Linux-inspired header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 border-l-4 border-emerald-400 pl-6 flex flex-col md:flex-row md:justify-between md:items-end gap-6 font-mono-code"
        >
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
              <FaTerminal className="text-emerald-400" />
              <span>sachintha@arch:~$ ls -la /var/deployments/</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight font-sans">
              Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-cyan to-brand-purple">Deployments</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-sans max-w-2xl">
              Containerized microservices, autonomous multi-agent AI architectures, IaC blueprints, and multi-OS server orchestration.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 bg-[#090d16] p-1.5 rounded-xl border border-white/10 self-start md:self-auto flex-wrap">
            {categories.map((cat) => {
              const count = cat === 'All Deployments' ? projects.length : projects.filter(p => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.35)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-black/30 text-black' : 'bg-white/10 text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Carousel Grid */}
        <div className="relative min-h-[460px]">
          {totalPages > 1 && (
            <button
              onClick={handlePrev}
              className="absolute -left-6 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-brand-cyan/20 hover:border-brand-cyan/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              aria-label="Previous Projects"
            >
              <FaChevronLeft size={18} className="text-brand-cyan" />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentPage}`}
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
            >
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={currentPage * itemsPerPage + index + 1} />
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <button
              onClick={handleNext}
              className="absolute -right-6 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full hover:bg-brand-cyan/20 hover:border-brand-cyan/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              aria-label="Next Projects"
            >
              <FaChevronRight size={18} className="text-brand-cyan" />
            </button>
          )}
        </div>

        {/* Carousel Pagination Footer */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-8 font-mono">
            <p className="text-xs text-gray-500">
              Showing <strong className="text-white">{currentPage * itemsPerPage + 1}</strong>–
              <strong className="text-white">{Math.min((currentPage + 1) * itemsPerPage, filteredProjects.length)}</strong> of <strong className="text-white">{filteredProjects.length}</strong> deployments
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                  currentPage === 0
                    ? 'border-white/5 text-gray-600 cursor-not-allowed'
                    : 'border-white/10 hover:border-emerald-500/50 text-gray-300 hover:text-white bg-white/5'
                }`}
              >
                <FaChevronLeft size={10} />
                <span>Previous</span>
              </button>

              <span className="text-xs text-gray-400 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5">
                Page <span className="text-emerald-400 font-bold">{currentPage + 1}</span> of {totalPages}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1}
                className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                  currentPage === totalPages - 1
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

      </motion.div>
    </section>
  );
};

export default ProjectsSection;
