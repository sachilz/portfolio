import React from 'react';
import { motion } from 'framer-motion';
import { FaLinux, FaAws, FaDocker, FaGithub, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaBrain, FaRobot } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiTailwindcss, SiJavascript, SiTypescript, SiPostgresql, SiGo, SiMongodb, SiExpress, SiTensorflow, SiPytorch } from 'react-icons/si';

const devOpsSkills = [
  { name: 'Linux', icon: FaLinux, color: 'text-yellow-500', level: 75 },
  { name: 'AWS', icon: FaAws, color: 'text-orange-500', level: 40 },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500', level: 95 },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600', level: 10 },
  { name: 'Terraform', icon: SiTerraform, color: 'text-purple-500', level: 10 },
  { name: 'Ansible', icon: SiAnsible, color: 'text-red-500', level: 10 },
  { name: 'Prometheus', icon: SiPrometheus, color: 'text-orange-400', level: 10 },
  { name: 'Grafana', icon: SiGrafana, color: 'text-orange-600', level: 10 },
  { name: 'CI/CD Pipelines', icon: FaGithub, color: 'text-white', level: 90 },
];

const mernStackSkills = [
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 85 },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', level: 80 },
  { name: 'React', icon: FaReact, color: 'text-blue-400', level: 90 },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', level: 90 },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', level: 95 },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', level: 85 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', level: 95 },
];

const aiMlSkills = [
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
            <div className="flex items-center gap-4 mb-8 border-b border-yellow-500/30 pb-3 inline-block">
              <h3 className="text-3xl font-bold text-white">DevOps & Cloud Infrastructure</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {devOpsSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
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
