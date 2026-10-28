import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinux, FaAws, FaDocker, FaGithub, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaCloud, FaServer, FaCodeBranch, FaChartLine, FaDatabase, FaShieldAlt, FaNetworkWired, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiTailwindcss, SiJavascript, SiTypescript, SiPostgresql, SiGo, SiMongodb, SiExpress, SiApachekafka, SiApachespark, SiSnowflake } from 'react-icons/si';

export const devOpsSkills = [
  { name: 'Linux', icon: FaLinux, color: 'text-yellow-500', level: 90, description: 'The core operating system powering my infrastructure, utilized for heterogeneous multi-OS management (Ubuntu, CentOS), package workflows, systemd daemons, and secure shell automation.' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-500', level: 88, description: 'Core cloud provider used to architect VPC networking, public route tables, security groups, EC2 instances, ECR repositories, and IAM programmatic access.' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500', level: 95, description: 'Essential containerization engine guaranteeing isolated, strictly reproducible software environments from local testing straight into production.' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600', level: 80, description: 'Industry-standard orchestration layer managing multi-tier microservices, Pods, Deployments, ClusterIP & NodePort Services, PVC storage, and Helm 3 charts on Minikube.' },
  { name: 'Terraform', icon: SiTerraform, color: 'text-purple-500', level: 80, description: 'Infrastructure as Code (IaC) layer utilized to declaratively build custom VPCs, route tables, subnets, and EC2 resources with reproducible lifecycle state.' },
  { name: 'Ansible', icon: SiAnsible, color: 'text-red-500', level: 85, description: 'Configuration management platform executing automated playbooks, modular roles, and multi-OS server fleet provisioning across Ubuntu and CentOS.' },
  { name: 'Prometheus', icon: SiPrometheus, color: 'text-orange-400', level: 10, description: 'Centralized time-series metrics core dedicated to continuously monitoring system-level events and generating high-accuracy observability telemetry.' },
  { name: 'Grafana', icon: SiGrafana, color: 'text-orange-600', level: 10, description: 'Advanced data visualization engine automatically parsing raw telemetry to generate actionable infrastructure observability dashboards.' },
  { name: 'CI/CD Pipelines', icon: FaGithub, color: 'text-white', level: 95, description: 'Multi-stage automated Continuous Integration & Delivery pipelines integrating Gitleaks secret detection, SonarQube quality analysis, and Trivy vulnerability scans.' },
];

export const cloudEngineeringSkills = [
  { name: 'AWS Cloud', icon: FaAws, color: 'text-orange-500', level: 90, category: 'Cloud Platform', tagline: 'VPC, EC2, IAM, ECR & Security Group Topology', status: 'Core' },
  { name: 'Terraform', icon: SiTerraform, color: 'text-purple-500', level: 85, category: 'IaC Automation', tagline: 'Declarative Cloud Provisioning & State Management', status: 'Core' },
  { name: 'Linux Systems', icon: FaLinux, color: 'text-yellow-500', level: 90, category: 'Operating System', tagline: 'Heterogeneous Multi-OS Ubuntu, CentOS & Systemd Daemons', status: 'Core' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500', level: 95, category: 'Containerization', tagline: 'Production Multi-Stage Images & Compose Orchestration', status: 'Core' },
  { name: 'CI/CD Automation', icon: FaGithub, color: 'text-white', level: 95, category: 'Delivery Pipeline', tagline: 'Jenkins Multi-Stage Pipelines with Automated Security Scanning', status: 'Core' },
  { name: 'Cloud Networking', icon: FaNetworkWired, color: 'text-cyan-400', level: 85, category: 'Networking', tagline: 'Custom VPC Subnets, Internet Gateways & CIDR Routing', status: 'Core' },
  { name: 'Cloud Security', icon: FaShieldAlt, color: 'text-emerald-400', level: 85, category: 'DevSecOps', tagline: 'Pre-Deployment Gitleaks, SonarQube & Trivy Security Gates', status: 'Core' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600', level: 80, category: 'Orchestration', tagline: 'Minikube Clusters, Declarative Manifests, Helm 3 & Health Probes', status: 'Core' },
];

export const dataEngineeringSkills = [
  { name: 'Python', icon: FaPython, color: 'text-yellow-400', level: 60, category: 'Scripting', tagline: 'Automated Cloud Scripting, Boto3 SDK & Data Processing', status: 'Scripting' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 50, category: 'NoSQL Database', tagline: 'Document Store Schemas, Queries & Data Aggregations', status: 'Applied' },
  { name: 'SQL / Databases', icon: FaDatabase, color: 'text-blue-400', level: 40, category: 'Relational DB', tagline: 'Relational Schemas, CRUD Queries & MariaDB Server Setup', status: 'Foundational' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-indigo-400', level: 65, category: 'RDBMS', tagline: 'Stateful Container Persistence with Kubernetes PVC & Migrations', status: 'Applied' },
  { name: 'Data Pipelines', icon: FaChartLine, color: 'text-cyan-400', level: 20, category: 'Pipeline Design', tagline: 'Foundational ETL Flow Design & Automated Data Syncing', status: 'Enthusiast' },
  { name: 'Apache Kafka', icon: SiApachekafka, color: 'text-red-500', level: 15, category: 'Event Streaming', tagline: 'Distributed Pub/Sub Topics & Real-Time Event Stream Concepts', status: 'Enthusiast' },
  { name: 'Apache Spark', icon: SiApachespark, color: 'text-orange-500', level: 12, category: 'Big Data Processing', tagline: 'Distributed Batch Processing & Cluster Computation Theory', status: 'Enthusiast' },
  { name: 'Snowflake', icon: SiSnowflake, color: 'text-sky-300', level: 10, category: 'Cloud Warehouse', tagline: 'Modern Cloud Data Warehousing & Analytical Storage Concepts', status: 'Enthusiast' },
];

export const mernStackSkills = [
  { name: 'React', icon: FaReact, color: 'text-blue-400', level: 90, category: 'Frontend Core', tagline: 'Interactive SPAs, Modern Hooks & State Management', status: 'Production' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', level: 90, category: 'Backend Runtime', tagline: 'Asynchronous Event-Driven Services & Microservice APIs', status: 'Production' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 85, category: 'Database Tier', tagline: 'Clustered Document Database & Containerized Persistence', status: 'Production' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', level: 80, category: 'API Routing', tagline: 'RESTful API Routing, Middleware & Authentication Handlers', status: 'Production' },
  { name: 'JavaScript (ES6+)', icon: SiJavascript, color: 'text-yellow-400', level: 95, category: 'Core Language', tagline: 'Async/Await, Closures, DOM Architecture & Event Loops', status: 'Production' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', level: 85, category: 'Typed Language', tagline: 'Strict Type Safety, Interfaces & Generics Architecture', status: 'Production' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 95, category: 'UI Styling', tagline: 'High-Performance Utility-First Design Systems & Animations', status: 'Production' },
];



// DevOps Cyber Mesh Network Component
const DevOpsMeshChart = ({ skills }) => {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Layout calculations
  const viewBoxSize = 1000; // Significantly expanded canvas to support longer lines
  const radius = 320; // Pushed base nodes much further away from the center
  const centerX = 500;
  const centerY = 500;

  const nodes = skills.map((skill, index) => {
    const angle = (index * (360 / skills.length) * Math.PI) / 180;
    // deeply staggers alternating nodes for a highly dynamic, far-reaching mesh
    const r = radius + (index % 2 === 0 ? 0 : 80); 
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    return { 
       ...skill, x, y, index, 
       leftPct: `${(x / viewBoxSize) * 100}%`, 
       topPct: `${(y / viewBoxSize) * 100}%` 
    };
  });

  // Shortens a line by an explicit pixel amount at the start and end, preventing lines from poking into transparent SVGs.
  const getLineArgs = (x1, y1, x2, y2, insetStart = 0, insetEnd = 40) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx*dx + dy*dy);
    if (length <= insetStart + insetEnd) return { x1, y1, x2, y2 };
    const ux = dx / length;
    const uy = dy / length;
    return {
      x1: x1 + ux * insetStart,
      y1: y1 + uy * insetStart,
      x2: x2 - ux * insetEnd,
      y2: y2 - uy * insetEnd
    };
  };

  return (
    <div className="w-full mx-auto py-12 flex flex-col xl:flex-row items-center justify-center gap-12 lg:gap-20 relative">
        {/* Interactive SVG Mesh Canvas */}
        <div className="relative w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] aspect-square flex-shrink-0">
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: -10 }} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
             {/* Draw connections from center to nodes */}
             {nodes.map((node) => {
               const coords = getLineArgs(centerX, centerY, node.x, node.y, 40, 40);
               return (
                 <motion.line
                    key={`line-center-${node.name}`}
                    x1={coords.x1} y1={coords.y1}
                    x2={coords.x2} y2={coords.y2}
                    stroke={hoveredNode === null || hoveredNode === node.index ? "url(#lineGradient)" : "rgba(255,255,255,0.05)"}
                    strokeWidth={hoveredNode === node.index ? 3 : 1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + node.index * 0.1 }}
                 />
               );
             })}
             {/* Draw mesh connections between adjacent nodes */}
             {nodes.map((node, i) => {
               const nextNode = nodes[(i + 1) % nodes.length];
               const coords = getLineArgs(node.x, node.y, nextNode.x, nextNode.y, 40, 40);
               return (
                 <motion.line
                    key={`line-mesh-${node.name}`}
                    x1={coords.x1} y1={coords.y1}
                    x2={coords.x2} y2={coords.y2}
                    stroke={(hoveredNode === node.index || hoveredNode === nextNode.index) ? "rgba(0, 240, 255, 0.4)" : "rgba(255,255,255,0.05)"}
                    strokeWidth={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
                 />
               );
             })}
             {/* Sub-mesh lines pointing across to create a complex web look */}
             {nodes.map((node, i) => {
               if(i % 2 !== 0) return null; // only draw a few cross lines
               const acrossNode = nodes[(i + 4) % nodes.length];
               const coords = getLineArgs(node.x, node.y, acrossNode.x, acrossNode.y, 40, 40);
               return (
                 <motion.line
                    key={`line-cross-${node.name}`}
                    x1={coords.x1} y1={coords.y1}
                    x2={coords.x2} y2={coords.y2}
                    stroke="rgba(255,255,255,0.03)"
                    strokeDasharray="4 4"
                    strokeWidth={1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1.5 + i * 0.1 }}
                 />
               );
             })}
            
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                 <stop offset="100%" stopColor="#b026ff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Orbit Rings (Decorative) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-white/5 border-dashed z-0 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />

          {/* Central Hub Node */}
          <motion.div
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-[#0a0f1a] border-2 border-brand-cyan shadow-[0_0_50px_rgba(0,240,255,0.3)] flex items-center justify-center z-20 backdrop-blur-md cursor-pointer"
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ type: "spring", bounce: 0.5, duration: 1 }}
             onMouseEnter={() => setHoveredNode(null)}
          >
            <div className="absolute inset-0 rounded-full border border-brand-cyan animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
            <div className="absolute w-full h-full bg-brand-cyan/10 rounded-full blur-md"></div>
            <FaCloud className="text-4xl sm:text-5xl md:text-6xl text-brand-cyan drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] z-10" />
          </motion.div>

         {/* Peripheral Skill Nodes */}
          {nodes.map((node) => {
             const Icon = node.icon;
             const dir = node.index % 2 === 0 ? 1 : -1;
             return (
               <motion.div
                 key={node.name}
                 className="absolute z-30"
                 style={{ left: node.leftPct, top: node.topPct }}
               >
                 <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    
                    {/* INVISIBLE STATIC HITBOX: Catches mice consistently so floating visuals don't slide out from underneath the pointer causing flickering */}
                    <div 
                      className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full z-50 cursor-pointer"
                      onMouseEnter={() => setHoveredNode(node.index)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setHoveredNode(node.index)}
                    ></div>

                    {/* FLOAT PHYSICS (Pointer events disabled so the static hitbox above takes all input strictly) */}
                    <motion.div
                      animate={{
                        y: [-10, 10, -10],
                        rotateZ: [0, 3 * dir, -3 * dir, 0]
                      }}
                      transition={{
                        duration: 5 + (node.index % 4),
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative pointer-events-none"
                    >
                      {/* ENTRANCE ANIMATION LAYER (Framer Motion exclusively manages the initial page load appearance here) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                      >
                         {/* HOVER INTERACTION LAYER (Native CSS explicitly handles interactivity to avoid Framer Motion state conflicts) */}
                         <div
                           className={`opacity-100 ${node.color} flex items-center justify-center p-4 rounded-full transition-all duration-300`}
                           style={{ 
                             transform: hoveredNode === node.index ? 'scale(1.3)' : 'scale(1)',
                             filter: hoveredNode === node.index ? 'drop-shadow(0px 0px 45px currentColor)' : 'drop-shadow(0px 0px 15px currentColor)' 
                           }}
                         >
                            <Icon className="text-5xl sm:text-6xl md:text-7xl" />
                         </div>
                      </motion.div>
                    </motion.div>

                    {/* Tooltip visible on hover (Hidden on Mobile viewports) */}
                    <AnimatePresence>
                      {hoveredNode === node.index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.9 }}
                          className="hidden md:block absolute top-[90%] left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0a0f1a]/95 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-[0_15px_40px_rgba(0,240,255,0.15)] pointer-events-none z-50 min-w-[160px]"
                        >
                          <p className="text-white font-bold text-sm mb-2 text-center tracking-wide">{node.name}</p>
                          <div className="w-full bg-black/60 rounded-full h-1.5 mb-1.5 overflow-hidden shadow-inner">
                            <div className={`h-full ${node.color} bg-current relative`} style={{ width: `${node.level}%` }}>
                              <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/40 blur-[1px] rounded-full" />
                            </div>
                          </div>
                          <div className="flex justify-between items-center w-full">
                            <span className="text-[10px] text-gray-500 uppercase font-semibold">Proficiency</span>
                            <span className="text-xs text-white font-mono">{node.level}%</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                 </div>
               </motion.div>
             );
          })}
        </div>

        {/* Dynamic Context Panel */}
        <div className="flex-1 w-full max-w-md bg-[#111116]/60 backdrop-blur-3xl border border-white/5 p-8 lg:p-10 rounded-[2rem] min-h-[300px] flex flex-col justify-center relative overflow-hidden shadow-2xl group transition-all duration-500">
           {/* Ambient inner glow */}
           <div className={`absolute top-0 right-0 w-48 h-48 blur-[80px] rounded-full pointer-events-none transition-colors duration-700 ${hoveredNode !== null ? 'bg-brand-cyan/10' : 'bg-brand-purple/10'}`}></div>
           
           {hoveredNode !== null ? (
              <motion.div
                 key="hovered"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="relative z-10"
              >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="p-4 bg-black/40 rounded-2xl border border-white/5 shadow-inner">
                       {React.createElement(nodes[hoveredNode].icon, { className: `text-4xl ${nodes[hoveredNode].color}` })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white tracking-tight">{nodes[hoveredNode].name}</h3>
                      <p className="text-xs text-brand-cyan uppercase tracking-widest font-semibold mt-1">Active Mesh Node</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-black/30 p-5 rounded-2xl border border-white/5">
                      <div className="flex justify-between text-sm mb-3 font-semibold text-gray-300">
                        <span className="uppercase tracking-wider text-xs">Competency Level</span>
                        <span className="text-brand-cyan font-mono text-base">{nodes[hoveredNode].level}%</span>
                      </div>
                      <div className="w-full bg-black/80 rounded-full h-2.5 overflow-hidden border border-white/5">
                        <motion.div 
                          className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple relative"
                          initial={{ width: 0 }}
                          animate={{ width: `${nodes[hoveredNode].level}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/30 blur-[2px] rounded-full" />
                        </motion.div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium min-h-[60px]">
                      {nodes[hoveredNode].description}
                    </p>
                  </div>
              </motion.div>
           ) : (
              <motion.div
                 key="default"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="relative z-10"
              >
                 <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-brand-cyan/10 rounded-xl text-brand-cyan">
                      <FaServer className="text-2xl" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white">DevOps Ecosystem</h3>
                 </div>
                 <p className="text-gray-400 text-sm leading-relaxed mb-8">
                   My infrastructure and CI/CD workflow represents a deeply interconnected network rather than isolated tools.
                   <br/><br/>
                   <span className="text-brand-cyan font-semibold block bg-brand-cyan/5 px-4 py-3 rounded-lg border border-brand-cyan/10">
                     <span className="animate-pulse inline-block mr-2">⚫</span>
                     Hover over a node in the mesh to isolate specific pipeline capabilities and view deep telemetry.
                   </span>
                 </p>
                 <div className="flex gap-3 flex-wrap">
                    <span className="px-4 py-1.5 bg-[#0a0f1a] border border-white/10 rounded-full text-xs text-gray-300 font-mono tracking-wide shadow-inner">
                      <span className="text-brand-cyan font-bold">{nodes.length}</span> Active Nodes
                    </span>
                    <span className="px-4 py-1.5 bg-[#0a0f1a] border border-brand-purple/30 rounded-full text-xs text-brand-purple font-mono tracking-wide shadow-inner">
                      Cloud-Native Web
                    </span>
                 </div>
              </motion.div>
           )}
        </div>
    </div>
  );
};


// Interactive Modern Skill Card with Dynamic Cursor Spotlight & Circular SVG Gauge (Optimized for 2-column layout)
const ModernSkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Core':
      case 'Production':
        return 'border-brand-cyan/40 text-brand-cyan bg-brand-cyan/10';
      case 'Enthusiast':
      case 'Exploring':
        return 'border-brand-purple/40 text-purple-300 bg-brand-purple/10';
      case 'Scripting':
      case 'Applied':
        return 'border-amber-400/40 text-amber-300 bg-amber-500/10';
      default:
        return 'border-white/20 text-gray-300 bg-white/5';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -100, y: -100 })}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative rounded-xl bg-[#0a0d14]/90 border border-white/10 hover:border-emerald-500/40 p-4 sm:p-5 overflow-hidden group shadow-lg backdrop-blur-xl transition-[border-color,box-shadow] duration-300 font-mono-code"
    >
      {/* Terminal Mini Header Bar */}
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-[9px] text-gray-500 select-none">
        <div className="flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
          <span className="ml-1 text-gray-400 font-mono">
            {skill.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}.service
          </span>
        </div>
        <span className="text-emerald-400 font-bold">
          [STATUS: 200 OK]
        </span>
      </div>

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 255, 102, 0.1), transparent 70%)`
        }}
      />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left Side: Icon + Details */}
        <div className="flex items-start gap-4 flex-grow min-w-0">
          <div className={`p-3 rounded-xl bg-black/60 border border-white/10 ${skill.color} shadow-inner group-hover:scale-105 group-hover:shadow-[0_0_20px_currentColor] transition-all duration-300 flex-shrink-0 mt-0.5`}>
            <skill.icon size={24} />
          </div>

          <div className="flex flex-col min-w-0 flex-grow">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 font-medium">
                {skill.category}
              </span>
              <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${getStatusColor(skill.status)} font-semibold`}>
                {skill.status}
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
              {skill.name}
            </h4>

            <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed font-sans">
              {skill.tagline}
            </p>
          </div>
        </div>

        {/* Right Side: Circular Gauge & Tier */}
        <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-2 sm:pl-4 sm:border-l border-white/5 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg className="w-12 h-12 -rotate-90 transform" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="text-white/10"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="transparent"
              />
              <motion.circle
                cx="22"
                cy="22"
                r={radius}
                className={skill.color}
                strokeWidth="3.5"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: strokeDashoffset }}
                transition={{ duration: 1, delay: 0.1 + index * 0.03, ease: 'easeOut' }}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>
            <span className="absolute text-[11px] font-mono font-bold text-white">
              {skill.level}%
            </span>
          </div>

          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
            {skill.level >= 80 ? 'Advanced' : skill.level >= 45 ? 'Intermediate' : 'Foundational'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Modern Multi-Domain Tech Matrix Component with 4 rows x 2 columns & Arrow Pagination
const ModernDomainMatrix = () => {
  const [activeDomain, setActiveDomain] = useState('cloud');
  const [currentPage, setCurrentPage] = useState(0);

  const domains = [
    {
      id: 'cloud',
      label: 'Cloud Engineering',
      count: cloudEngineeringSkills.length,
      skills: cloudEngineeringSkills,
      description: 'Production-grade cloud architecture, multi-region AWS topology, VPC networking, declarative Terraform IaC, container orchestration, and automated DevSecOps pipelines.',
      badge: 'Core Competency',
      badgeColor: 'border-brand-cyan/40 text-brand-cyan bg-brand-cyan/10',
      avgLevel: Math.round(cloudEngineeringSkills.reduce((acc, s) => acc + s.level, 0) / cloudEngineeringSkills.length)
    },
    {
      id: 'data',
      label: 'Data Engineering (Enthusiast)',
      count: dataEngineeringSkills.length,
      skills: dataEngineeringSkills,
      description: 'Enthusiast exploration into distributed message streams, ETL automation, and scalable database schemas. Realistically calibrated for foundational learning alongside DevOps.',
      badge: 'Enthusiast / Exploratory',
      badgeColor: 'border-brand-purple/40 text-purple-300 bg-brand-purple/10',
      avgLevel: Math.round(dataEngineeringSkills.reduce((acc, s) => acc + s.level, 0) / dataEngineeringSkills.length)
    },
    {
      id: 'mern',
      label: 'MERN Full-Stack',
      count: mernStackSkills.length,
      skills: mernStackSkills,
      description: 'Reactive full-stack web architectures featuring componentized React SPAs, Node/Express asynchronous microservices, and MongoDB data persistence.',
      badge: 'Application Tier',
      badgeColor: 'border-emerald-400/40 text-emerald-300 bg-emerald-500/10',
      avgLevel: Math.round(mernStackSkills.reduce((acc, s) => acc + s.level, 0) / mernStackSkills.length)
    },
    {
      id: 'all',
      label: 'All Disciplines',
      count: cloudEngineeringSkills.length + dataEngineeringSkills.length + mernStackSkills.length,
      skills: [...cloudEngineeringSkills, ...dataEngineeringSkills, ...mernStackSkills],
      description: 'A unified directory across cloud architecture, data pipelines, and full-stack software applications.',
      badge: 'Cross-Disciplinary',
      badgeColor: 'border-white/20 text-gray-300 bg-white/5',
      avgLevel: Math.round(
        [...cloudEngineeringSkills, ...dataEngineeringSkills, ...mernStackSkills].reduce((acc, s) => acc + s.level, 0) /
        (cloudEngineeringSkills.length + dataEngineeringSkills.length + mernStackSkills.length)
      )
    }
  ];

  const currentDomainInfo = domains.find(d => d.id === activeDomain) || domains[0];

  const handleDomainChange = (id) => {
    setActiveDomain(id);
    setCurrentPage(0);
  };

  const itemsPerPage = 8; // 8 cards per page: 4 rows x 2 columns
  const totalPages = Math.ceil(currentDomainInfo.skills.length / itemsPerPage);

  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleSkills = currentDomainInfo.skills.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="w-full mt-12 flex flex-col gap-8">
      {/* Matrix Controls & Domain Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-6">
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span>Specialized Engineering Domains</span>
          </h3>
          <p className="text-gray-400 text-sm mt-1">Interactive capability matrix across cloud, data, and application stacks.</p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0a0a0f]/90 border border-white/10 rounded-2xl backdrop-blur-xl w-max max-w-full">
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => handleDomainChange(domain.id)}
              className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeDomain === domain.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {activeDomain === domain.id && (
                <motion.div
                  layoutId="activeDomainPill"
                  className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border border-brand-cyan/50 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{domain.label}</span>
              <span className={`relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeDomain === domain.id ? 'bg-brand-cyan/20 text-brand-cyan font-bold' : 'bg-white/5 text-gray-500'
              }`}>
                {domain.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Domain HUD Banner */}
      <motion.div
        key={currentDomainInfo.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-[#0d0e15]/90 via-[#10111a]/90 to-[#0d0e15]/90 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h4 className="text-xl font-bold text-white tracking-tight">{currentDomainInfo.label}</h4>
            <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${currentDomainInfo.badgeColor} font-semibold`}>
              {currentDomainInfo.badge}
            </span>
          </div>
          <p className="text-sm text-gray-400 max-w-3xl leading-relaxed">
            {currentDomainInfo.description}
          </p>
        </div>

        <div className="flex items-center gap-4 relative z-10 flex-shrink-0">
          <div className="px-5 py-3 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center">
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Domain Avg</span>
            <span className="text-xl font-bold font-mono text-brand-cyan">{currentDomainInfo.avgLevel}%</span>
          </div>
          <div className="px-5 py-3 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center">
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Total Tools</span>
            <span className="text-xl font-bold font-mono text-brand-purple">{currentDomainInfo.count}</span>
          </div>
        </div>
      </motion.div>

      {/* 4 Rows x 2 Columns Grid with Navigation Arrows */}
      <div className="relative min-h-[440px]">
        {totalPages > 1 && (
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-8 lg:-left-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-full hover:bg-brand-cyan/20 hover:border-brand-cyan/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            aria-label="Previous Skills Page"
          >
            <FaChevronLeft size={16} className="text-brand-cyan" />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDomain}-page-${currentPage}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          >
            {visibleSkills.map((skill, index) => (
              <ModernSkillCard
                key={`${currentDomainInfo.id}-${skill.name}-${index}`}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-8 lg:-right-14 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-full hover:bg-brand-cyan/20 hover:border-brand-cyan/50 text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            aria-label="Next Skills Page"
          >
            <FaChevronRight size={16} className="text-brand-cyan" />
          </button>
        )}
      </div>

      {/* Pagination Footer Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-4">
          <p className="text-xs text-gray-500 font-mono">
            Showing <span className="text-gray-300 font-bold">{currentPage * itemsPerPage + 1}–{Math.min((currentPage + 1) * itemsPerPage, currentDomainInfo.skills.length)}</span> of <span className="text-gray-300 font-bold">{currentDomainInfo.skills.length}</span> skills
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors font-medium ${
                currentPage === 0
                  ? 'border-white/5 text-gray-600 cursor-not-allowed'
                  : 'border-white/10 hover:border-brand-cyan/50 text-gray-300 hover:text-white bg-white/5'
              }`}
            >
              <FaChevronLeft size={10} />
              <span>Previous</span>
            </button>

            <span className="text-xs font-mono text-gray-400 px-3 py-1.5 rounded-lg bg-black/40 border border-white/5">
              Page <span className="text-brand-cyan font-bold">{currentPage + 1}</span> of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors font-medium ${
                currentPage === totalPages - 1
                  ? 'border-white/5 text-gray-600 cursor-not-allowed'
                  : 'border-white/10 hover:border-brand-cyan/50 text-gray-300 hover:text-white bg-white/5'
              }`}
            >
              <span>Next</span>
              <FaChevronRight size={10} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative z-10 w-full overflow-hidden">
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
          className="mb-16 border-l-4 border-emerald-400 pl-6 font-mono-code"
        >
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
            <span>sachintha@arch:~$ pacman -Qe --devops-stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight font-sans">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand-cyan to-brand-purple">Arsenal</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-2xl text-xs sm:text-sm">
            Zero-downtime infrastructure tooling, heterogeneous Linux fleet orchestration, and cloud architecture capabilities.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20">

          {/* Top Section: DevOps Skills Mesh */}
          <div className="w-full">
            <div className="flex items-center gap-4 mb-4 border-b border-brand-cyan/40 pb-3 inline-block">
              <h3 className="text-3xl font-bold text-white tracking-tight">DevOps & Cloud Infrastructure Mesh</h3>
            </div>
            <DevOpsMeshChart skills={devOpsSkills} />
          </div>

          {/* Bottom Section: Modern Engineering Domain Matrix */}
          <ModernDomainMatrix />

        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
