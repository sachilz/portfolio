import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FaMicrosoft, 
  FaYoutube, 
  FaShieldAlt, 
  FaMedium, 
  FaLinkedin, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaGraduationCap, 
  FaSchool 
} from 'react-icons/fa';
import campusImg from '../assets/images/images.png';
import schoolImg from '../assets/images/school.jpeg';

export const experienceData = [
  {
    type: "Ambassador",
    title: "Microsoft Student Ambassador",
    subtitle: "Microsoft · Part-time",
    period: "Oct 2026 - Present",
    location: "Sri Lanka · Remote",
    description: "Selected as a Microsoft Student Ambassador, representing Microsoft within the student and technology community. Organizing technical workshops, hosting cloud sessions, and empowering peers with Microsoft Azure, cloud computing, and developer tools.",
    skills: ["Microsoft Azure", "Cloud Computing", "Community Leadership", "Technical Mentorship"],
    link: "https://mvp.microsoft.com/en-US/studentambassadors/profile/a65c8c64-948c-4b85-92c6-136b6935ae5b",
    linkText: "Ambassador Profile",
    icon: <FaMicrosoft size={20} className="text-[#00a4ef]" />,
    brandBg: "bg-[#00a4ef]/10 border-[#00a4ef]/30 text-[#00a4ef]",
    accentGlow: "from-[#00a4ef] to-brand-cyan",
    dotColor: "border-[#00a4ef]"
  },
  {
    type: "Educator",
    title: "Content Creator & Founder",
    subtitle: "NextOps · YouTube",
    period: "Mar 2026 - Present",
    location: "Remote · Online",
    description: "As an Undergraduate specializing in DevOps, founded NextOps to bridge the gap between learning and teaching. Authoring and producing step-by-step video tutorials on Linux, AWS, Docker, and automation tools to empower engineers worldwide.",
    skills: ["Build Automation", "DevOps", "Linux", "AWS", "Docker", "CI/CD"],
    link: "https://www.youtube.com/@NextOpz",
    linkText: "YouTube · NextOps",
    icon: <FaYoutube size={22} className="text-[#ff0000]" />,
    brandBg: "bg-[#ff0000]/10 border-[#ff0000]/30 text-[#ff4444]",
    accentGlow: "from-[#ff0000] to-brand-purple",
    dotColor: "border-[#ff4444]"
  },
  {
    type: "Community",
    title: "Core Member",
    subtitle: "Community of Cyber Security in Horizon (C2SH)",
    period: "Nov 2024 - Present",
    location: "Colombo, Sri Lanka · On-site",
    description: "Active core member of C2SH Club at Horizon Campus, participating in cybersecurity workshops, defensive security sessions, and collaborative problem-solving to strengthen communication, teamwork, and security skills.",
    skills: ["Cybersecurity", "Program Management", "Defensive Security", "Team Collaboration"],
    link: "https://c2sh.lk/",
    linkText: "C2SH Community",
    icon: <FaShieldAlt size={20} className="text-emerald-400" />,
    brandBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    accentGlow: "from-emerald-400 to-brand-cyan",
    dotColor: "border-emerald-400"
  },
  {
    type: "Author",
    title: "Technical Writer",
    subtitle: "Medium · Engineering Blog",
    period: "May 2024 - Present",
    location: "Remote · Online",
    description: "Publishing in-depth technical blogs and architecture guides on Medium. Creating well-researched content on DevOps workflows, containerization with Docker and Nginx, and system automation to share knowledge and inspire other developers.",
    skills: ["Technical Writing", "DevOps Guides", "Cloud Architecture", "Blog Creation"],
    link: "https://medium.com/@sachilz",
    linkText: "Medium Articles",
    icon: <FaMedium size={20} className="text-white" />,
    brandBg: "bg-white/10 border-white/20 text-white",
    accentGlow: "from-brand-purple to-brand-cyan",
    dotColor: "border-brand-purple"
  }
];

export const educationData = [
  {
    type: "University",
    title: "Horizon Campus",
    subtitle: "BSc Hons in Information Technology",
    cardLogo: campusImg,
    period: "Undergraduate",
    location: "Malabe, Sri Lanka",
    icon: <FaGraduationCap size={22} className="text-brand-cyan" />,
    description: "Comprehensive study of advanced IT concepts, with a specialized focus on DevOps engineering, cloud infrastructure automation, CI/CD pipelines, and modern systems architecture. Developing a strong foundation in bridging software development and operational excellence.",
    skills: ["DevOps Specialization", "Cloud Systems", "Software Architecture", "Linux Systems"],
    brandBg: "bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan",
    accentGlow: "from-brand-cyan to-brand-purple",
    dotColor: "border-brand-cyan"
  },
  {
    type: "School",
    title: "B/Kandakapulpotha National College",
    subtitle: "Primary & Secondary Education",
    cardLogo: schoolImg,
    period: "Completed",
    location: "Badulla, Sri Lanka",
    icon: <FaSchool size={22} className="text-yellow-400" />,
    description: "Built foundational knowledge and skills with a robust academic background in science, mathematics, and computer fundamentals.",
    skills: ["Physical Science", "Mathematics", "Foundational Computing"],
    brandBg: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    accentGlow: "from-yellow-500 to-orange-500",
    dotColor: "border-yellow-400"
  }
];

const TimelineCard = ({ item, isEven }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{ perspective: 1200 }}
      className={`relative ${isEven ? 'md:ml-12' : 'md:mr-12'} z-10`}
    >
      {/* Connection Line to Dot (Desktop only) */}
      <div className={`hidden md:block absolute top-1/2 w-12 h-0.5 bg-brand-cyan/30 transform -translate-y-1/2 ${isEven ? '-left-12' : '-right-12'} -z-10`}></div>

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="bg-[#111116]/85 backdrop-blur-xl border border-white/10 p-7 md:p-8 rounded-2xl hover:border-brand-cyan/40 transition-colors duration-500 shadow-2xl h-full w-full group relative overflow-hidden"
      >
        <div style={{ transform: "translateZ(40px)" }}>
          {/* Header Row: Type & Subtitle */}
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${item.brandBg}`}>
              {item.type}
            </span>
            {item.subtitle && (
              <span className="text-xs font-mono text-gray-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {item.subtitle}
              </span>
            )}
          </div>

          {/* Institution Logo if available */}
          {item.cardLogo && (
            <div className="mb-4">
              <div className="relative w-16 h-16 rounded-xl bg-white p-2.5 shadow-xl overflow-hidden border border-white/20">
                <img src={item.cardLogo} alt={`${item.title} Logo`} className="w-full h-full object-contain" />
              </div>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-brand-cyan transition-colors tracking-tight">
            {item.title}
          </h3>

          {/* Meta Info: Period & Location */}
          {(item.period || item.location) && (
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mb-5">
              {item.period && (
                <div className="flex items-center gap-1.5 text-brand-cyan">
                  <FaCalendarAlt size={12} />
                  <span>{item.period}</span>
                </div>
              )}
              {item.location && (
                <div className="flex items-center gap-1.5 text-gray-400">
                  <FaMapMarkerAlt size={12} />
                  <span>{item.location}</span>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm mb-6">
            {item.description}
          </p>

          {/* Skills / Focus Tags */}
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {item.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="text-[11px] font-medium text-gray-300 px-2.5 py-1 rounded-lg border border-white/10 bg-black/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Action Link Button if available */}
          {item.link && (
            <div className="pt-2 border-t border-white/5">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-brand-cyan/30 hover:border-brand-cyan bg-brand-cyan/5 hover:bg-brand-cyan/15 text-gray-200 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <span>{item.linkText}</span>
                <FaExternalLinkAlt size={10} className="text-brand-cyan" />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('experience');

  // Listen to hash changes (e.g. #experience vs #education in navbar)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#education') {
        setActiveTab('education');
      } else if (hash === '#experience') {
        setActiveTab('experience');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const activeData = activeTab === 'experience' ? experienceData : educationData;

  return (
    <section id="experience" className="py-24 bg-transparent relative z-10 border-t border-white/5">
      {/* Anchor for #education link */}
      <span id="education" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Switcher Button */}
        <div className="mb-16 border-l-4 border-brand-cyan pl-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
              {activeTab === 'experience' ? (
                <>Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Experience</span></>
              ) : (
                <>Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Education</span></>
              )}
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              {activeTab === 'experience'
                ? "Professional milestones, community leadership, content creation, and technical education."
                : "The academic foundation of my information technology and DevOps engineering journey."
              }
            </p>
          </div>

          {/* Interactive Switcher Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 p-1.5 bg-[#0a0a0f]/90 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl">
              <button
                onClick={() => setActiveTab('experience')}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                  activeTab === 'experience' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeTab === 'experience' && (
                  <motion.div
                    layoutId="activeLadderTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-cyan/25 to-brand-purple/25 border border-brand-cyan/60 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <FaBriefcase className="relative z-10 text-brand-cyan" size={13} />
                <span className="relative z-10">Experience</span>
                <span className="relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan font-bold">
                  {experienceData.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                  activeTab === 'education' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeTab === 'education' && (
                  <motion.div
                    layoutId="activeLadderTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-cyan/25 to-brand-purple/25 border border-brand-cyan/60 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <FaGraduationCap className="relative z-10 text-brand-purple" size={15} />
                <span className="relative z-10">Education</span>
                <span className="relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-purple/20 text-brand-purple font-bold">
                  {educationData.length}
                </span>
              </button>
            </div>

            {activeTab === 'experience' && (
              <a
                href="https://www.linkedin.com/in/sachilz"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 border border-blue-500/30 hover:border-blue-500 bg-blue-500/10 text-blue-400 hover:text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap"
              >
                <FaLinkedin size={14} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>

        {/* Dynamic Timeline Ladder Container */}
        <div className="relative min-h-[500px]">
          {/* Vertical Central Ladder Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent rounded-full transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(0,240,255,0.6)]"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-16 lg:space-y-24"
            >
              {activeData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={`${activeTab}-${index}`} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                    
                    {/* Timeline Node Dot & Icon */}
                    <div className={`absolute left-[24px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 w-12 h-12 rounded-full border-2 ${item.dotColor} bg-[#0b0c14] shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-all duration-300`}>
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </span>
                    </div>

                    {/* Card Container */}
                    <div className="w-full pl-20 md:pl-0 md:w-1/2 relative z-20">
                      <TimelineCard item={item} isEven={isEven} />
                    </div>
                    
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
