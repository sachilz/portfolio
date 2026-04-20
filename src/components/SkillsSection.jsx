import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinux, FaAws, FaDocker, FaGithub, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaBrain, FaRobot, FaCloud, FaServer, FaCodeBranch, FaChartLine } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiTailwindcss, SiJavascript, SiTypescript, SiPostgresql, SiGo, SiMongodb, SiExpress, SiTensorflow, SiPytorch } from 'react-icons/si';

export const devOpsSkills = [
  { name: 'Linux', icon: FaLinux, color: 'text-yellow-500', level: 75, description: 'The core operating system powering my infrastructure, utilized for high-performance server management, secure networking, and robust automation.' },
  { name: 'AWS', icon: FaAws, color: 'text-orange-500', level: 40, description: 'Cloud provider used to architect globally distributed, highly-available, and strictly secured microservice infrastructure patterns.' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500', level: 95, description: 'Essential containerization engine guaranteeing isolated, strictly reproducible software environments from local testing straight into production.' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600', level: 10, description: 'Industry-standard orchestration layer natively managing containerized workloads, auto-scaling operations, and self-healing deployment meshes.' },
  { name: 'Terraform', icon: SiTerraform, color: 'text-purple-500', level: 10, description: 'Infrastructure as Code (IaC) layer utilized to declaratively provision, mutate, and safely version-control complex cloud service resources.' },
  { name: 'Ansible', icon: SiAnsible, color: 'text-red-500', level: 10, description: 'Configuration management platform executing automated, agentless provisioning workflows to enforce precise state consistency across server fleets.' },
  { name: 'Prometheus', icon: SiPrometheus, color: 'text-orange-400', level: 10, description: 'Centralized time-series metrics core dedicated to continuously monitoring system-level events and generating high-accuracy observability telemetry.' },
  { name: 'Grafana', icon: SiGrafana, color: 'text-orange-600', level: 10, description: 'Advanced data visualization engine automatically parsing raw telemetry to generate actionable infrastructure observability dashboards.' },
  { name: 'CI/CD Pipelines', icon: FaGithub, color: 'text-white', level: 90, description: 'Automated Continuous Integration and Delivery pipelines ensuring frictionless, rigorously tested code deployment straight from repository to server.' },
];

export const mernStackSkills = [
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 85 },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', level: 80 },
  { name: 'React', icon: FaReact, color: 'text-blue-400', level: 90 },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', level: 90 },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 95 },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', level: 85 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 95 },
];

export const aiMlSkills = [
  { name: 'Python', icon: FaPython, color: 'text-yellow-400', level: 90 },
  { name: 'AI/ML Theory', icon: FaBrain, color: 'text-pink-400', level: 10 },
  { name: 'MLOps Workflows', icon: FaRobot, color: 'text-brand-cyan', level: 8 },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500', level: 5 },
  { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500', level: 5 },
];

// Helper Component for Skill Cards
const SkillCard = ({ skill, index, isMarquee = false }) => (
  <motion.div
    initial={isMarquee ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    whileInView={isMarquee ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: isMarquee ? 0 : index * 0.05 }}
    whileHover={{
      scale: 1.04,
      y: -8,
      boxShadow: "0px 15px 35px rgba(0, 240, 255, 0.15)",
      borderColor: "rgba(0, 240, 255, 0.4)",
      backgroundColor: "rgba(0, 240, 255, 0.03)",
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }}
    whileTap={{ scale: 0.96 }}
    style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}
    className="bg-brand-card border-2 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer group relative overflow-hidden"
  >
    {/* Background Interaction Layer */}
    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors z-0"></div>

    {/* Skill Icon */}
    <skill.icon className={`text-5xl ${skill.color} group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 z-10 pointer-events-none`} />

    {/* Skill Name */}
    <span className="text-sm font-bold tracking-wide text-gray-200 group-hover:text-white transition-colors duration-200 text-center z-10 pointer-events-none mt-1">
      {skill.name}
    </span>

    {/* Modern Percentage Bar */}
    <div className={`w-full mt-2 z-10 pointer-events-none ${skill.color}`}>
      <div className="flex justify-between items-center mb-1.5 px-1">
        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold group-hover:text-white/80 transition-colors">Proficiency</span>
        <span className="text-xs font-mono font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden shadow-inner" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={isMarquee ? { width: `${skill.level}%` } : undefined}
          whileInView={isMarquee ? undefined : { width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: isMarquee ? 0 : 0.3 + (index * 0.05), ease: "easeOut" }}
          className="h-full bg-current rounded-full shadow-[0_0_8px_currentColor] relative"
        />
      </div>
    </div>
  </motion.div>
);

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


const MarqueeRow = ({ title, skills, direction = "left", speedMultiplier = 3.2, colorClass }) => {
  // Creating a 4x repetition guarantees we have enough width to seamlessly loop 50% of the track length
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  // Calculate a dynamic duration so that arrays of different lengths travel at a steady visual speed based on the multiplier
  const calculatedDuration = skills.length * 2 * speedMultiplier;

  return (
    <div className="w-full mt-10">
      <div className={`flex items-center gap-4 mb-8 border-b ${colorClass} pb-3 inline-block`}>
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>

      <div
        className="w-full overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <motion.div
          animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: calculatedDuration }}
          className="flex items-center gap-6 w-max py-4"
        >
          {duplicatedSkills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="w-48 sm:w-56 shrink-0">
              <SkillCard skill={skill} index={index} isMarquee={true} />
            </div>
          ))}
        </motion.div>
      </div>
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
          className="mb-20 border-l-4 border-brand-cyan pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Skills</span></h2>
          <p className="text-gray-400 mt-2 max-w-2xl">A comprehensive breakdown of my technical proficiency and expertise levels.</p>
        </motion.div>

        <div className="flex flex-col gap-16">

          {/* Top Section: DevOps Skills */}
          <div className="w-full">
            <div className="flex items-center gap-4 mb-4 border-b border-brand-cyan/40 pb-3 inline-block">
              <h3 className="text-3xl font-bold text-white tracking-tight">DevOps & Cloud Infrastructure Mesh</h3>
            </div>
            <DevOpsMeshChart skills={devOpsSkills} />
          </div>

          {/* Bottom Sections: Marquee Tracks */}
          <div className="flex flex-col gap-4 mt-8 w-full overflow-hidden">
            <MarqueeRow
              title="MERN Stack Development"
              skills={mernStackSkills}
              direction="left"
              speedMultiplier={2.6}
              colorClass="border-brand-purple/30"
            />

            <MarqueeRow
              title="AI / ML & MLOps (Enthusiast)"
              skills={aiMlSkills}
              direction="right"
              speedMultiplier={2.6} // Lower multiplier equals FASTER visual velocity
              colorClass="border-brand-cyan/30"
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
