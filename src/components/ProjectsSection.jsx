import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import project1 from '../assets/project-pic/DevSecOps MERN Pipeline on AWS.png';
import project2 from '../assets/project-pic/Secure Multi-Tier MERN on AWS.png';
import project3 from '../assets/project-pic/Cloud-Native DevSecOps Pipeline.png';

export const projects = [
  {
    title: 'Automated DevSecOps Pipeline: Securing & Deploying a MERN Stack App on AWS',
    description: 'A containerized MERN stack application featuring an Nginx reverse proxy, Docker Compose orchestration, and seamless service communication.',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Jenkins', 'AWS', 'EC2'],
    github: 'https://github.com/sachilz/Securing-Deploying-a-MERN-Stack-App-on-AWS.git',
    image: project1,
  },
  {
    title: 'Secure Multi-Tier MERN Deployment: AWS VPC Networking & Docker Orchestration',
    description: 'A production-style MERN To-Do application containerized with Docker, orchestrated using Docker Compose, and deployed with Nginx reverse proxy',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Jenkins', 'Nginx', 'AWS', 'VPC', 'EC2', 'ECR'],
    github: 'https://github.com/sachilz/Secure-Multi-Tier-MERN-Deployment-AWS.git',
    image: project2,
  },
  {
    title: 'Cloud-Native DevSecOps Pipeline: Secure Flask Web Application on AWS',
    description: 'Developed a Flask media app with a secure DevSecOps pipeline using Jenkins, Docker, AWS EC2, IAM, ECR, SonarQube, and Trivy for automated deployment and vulnerability scanning.',
    tech: ['Flask', 'Python', 'Docker', 'Jenkins', 'AWS', 'EC2', 'ECR', 'SonarQube', 'Trivy'],
    github: 'https://github.com/sachilz/Secure-Flask-Web-Application-on-AWS.git',
    image: project3,
  }
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
        whileHover={{ scale: 1.03, y: -5 }}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="group h-full flex flex-col"
      >
        {/* Project Image */}
        <div
          className="w-full aspect-video bg-cover bg-center rounded-xl mb-6 shadow-xl relative overflow-hidden brightness-110 group-hover:brightness-125 transition-all duration-500 border border-white/5"
          style={{ backgroundImage: `url(${project.image})`, transform: "translateZ(30px)" }}
        >
          <div className="absolute inset-0 bg-transparent group-hover:bg-white/5 transition-colors duration-500"></div>
        </div>

        <div className="flex-grow flex flex-col" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-xl font-bold text-brand-cyan mb-3" style={{ transform: "translateZ(50px)" }}>
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-grow" style={{ transform: "translateZ(30px)" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6" style={{ transform: "translateZ(25px)" }}>
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs font-medium text-white px-3 py-1 rounded-full border border-brand-cyan/70 bg-transparent">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-auto pt-2" style={{ transform: "translateZ(35px)" }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-brand-cyan/20 hover:border-brand-cyan text-gray-300 hover:text-brand-cyan px-4 py-2 rounded-xl text-sm transition-colors w-max flex-shrink-0">
              <FaGithub size={14} />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleProjects = projects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section id="projects" className="py-24 bg-transparent relative z-10 border-t border-white/5">
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
          className="mb-16 border-l-4 border-brand-cyan pl-6 flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Projects</span></h2>
            <p className="text-gray-400 mt-2">Real-world solutions and interactive deployments. Showing {Math.min(currentPage * itemsPerPage + 1, projects.length)}-{Math.min((currentPage + 1) * itemsPerPage, projects.length)} of {projects.length} projects.</p>
          </div>
        </motion.div>

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
              key={currentPage}
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
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
