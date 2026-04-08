import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Cloud-Native Microservices Deployment',
    description: 'Designed and deployed a highly available Kubernetes cluster spanning multiple AWS zones. Fully automated using Terraform and ArgoCD.',
    tech: ['Kubernetes', 'AWS EKS', 'Terraform', 'ArgoCD'],
    github: '#',
    live: '#',
    image: '/projects/cloud-native.png',
  },
  {
    title: 'Serverless Data Pipeline',
    description: 'Built an event-driven data pipeline using AWS Lambda, SQS, and DynamoDB for real-time analytics processing.',
    tech: ['AWS Lambda', 'DynamoDB', 'Python', 'Serverless Framework'],
    github: '#',
    live: '#',
    image: '/projects/serverless.png',
  },
  {
    title: 'Zero-Downtime Migration Tool',
    description: 'A modern CLI tool written in Go to automate database migrations across multi-tenant environments with zero downtime.',
    tech: ['Golang', 'PostgreSQL', 'Docker'],
    github: '#',
    live: '#',
    image: '/projects/migration.png',
  },
  {
    title: 'Real-Time Collaboration Platform',
    description: 'Developed an offline-first collaborative workspace using WebSockets, Yjs, and React. Ensures deep synchronicity.',
    tech: ['React', 'Node.js', 'Socket.io', 'Redis'],
    github: '#',
    live: '#',
    image: '/projects/realtime.png',
  },
  {
    title: 'AI-Powered Log Analyzer',
    description: 'Created a machine learning pipeline that automatically highlights anomalies in complex system logs using TensorFlow.',
    tech: ['Python', 'TensorFlow', 'ELK Stack'],
    github: '#',
    live: '#',
    image: '/projects/analyzer.png',
  },
  {
    title: 'Automated CI/CD Dashboard',
    description: 'A dedicated visualization panel for GitHub Actions that tracks deployment frequencies, failure rates, and build times.',
    tech: ['Vue.js', 'Go', 'GitHub APIs'],
    github: '#',
    live: '#',
    image: '/projects/cicd.png',
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        perspective: 1000
      }}
      className="relative w-full"
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
          className="h-48 xl:h-56 w-full bg-cover bg-center rounded-xl mb-6 shadow-xl relative overflow-hidden brightness-110 group-hover:brightness-125 transition-all duration-500"
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
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-4 py-2 rounded-xl text-sm transition-colors w-max flex-shrink-0">
              <FaExternalLinkAlt size={12} />
              See Details
            </a>
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
  return (
    <section id="projects" className="py-24 bg-transparent relative z-10 border-t border-white/5">
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Projects</span></h2>
          <p className="text-gray-400 mt-2">Real-world solutions and interactive deployments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
