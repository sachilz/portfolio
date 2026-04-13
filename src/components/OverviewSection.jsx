import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaCode, FaYoutube, FaMediumM, FaArrowRight, FaAward } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from './ProjectsSection';
import { videos, articles } from './ContentSection';
import { certs } from './CertificationsSection';

const OverviewCard = ({ title, subtitle, count, icon: Icon, targetId, index, colorClass, shadowClass }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]);

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

  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80; // Account for fixed navbar if exists
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="relative w-full h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group cursor-pointer bg-[#111116]/90 backdrop-blur-3xl border border-white/5 ${colorClass.hoverBorder} rounded-2xl p-6 md:p-8 flex flex-col justify-between h-48 md:h-56 transition-[box-shadow,border-color,transform] duration-300 hover:shadow-[0_10px_40px_${shadowClass}] relative overflow-hidden`}
      >
        <div style={{ transform: "translateZ(30px)" }} className="absolute inset-0 z-0 pointer-events-none">
          {/* Background Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClass.from} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          
          {/* Moving Ambient Orb */}
          <div className={`absolute -top-10 -right-10 w-32 h-32 ${colorClass.bg} blur-[50px] rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
        </div>

        {/* Top Row: Icon and Count */}
        <div className="flex justify-between items-start relative z-10 w-full mb-8 pointer-events-none" style={{ transform: "translateZ(40px)" }}>
          <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 ${colorClass.groupBg} ${colorClass.groupText} transition-colors duration-500 border border-white/5 ${colorClass.groupBorder}`}>
            <Icon className="text-xl" />
          </div>
          <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-xl filter tracking-tighter">
            {count}
          </span>
        </div>

        {/* Bottom Row: Text and Arrow */}
        <div className="flex justify-between items-end relative z-10 w-full mt-auto pointer-events-none" style={{ transform: "translateZ(50px)" }}>
          <div className="flex flex-col gap-1 w-4/5">
            <h3 className="text-xs tracking-[0.2em] text-gray-300 font-bold uppercase drop-shadow-md">{title}</h3>
            <p className="text-sm text-gray-500 font-medium group-hover:text-gray-300 transition-colors duration-300 line-clamp-1">{subtitle}</p>
          </div>
          <FiArrowUpRight className={`text-gray-500 ${colorClass.groupText} transition-all duration-500 text-2xl mb-1 transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const OverviewSection = () => {
  const stats = [
    {
      title: "Total Projects",
      subtitle: "Innovative web solutions crafted",
      count: projects.length || 0,
      icon: FaCode,
      targetId: "projects",
      colorClass: {
        hoverBorder: "hover:border-brand-cyan/50",
        from: "from-brand-cyan/10",
        bg: "bg-brand-cyan/20",
        groupBg: "group-hover:bg-brand-cyan/20",
        groupText: "group-hover:text-brand-cyan",
        groupBorder: "group-hover:border-brand-cyan/30"
      },
      shadowClass: "rgba(0,240,255,0.15)"
    },
    {
      title: "Tutorial Videos",
      subtitle: "DevOps deep dives & guides",
      count: videos.length || 0,
      icon: FaYoutube,
      targetId: "videos",
      colorClass: {
        hoverBorder: "hover:border-red-500/50",
        from: "from-red-500/10",
        bg: "bg-red-500/20",
        groupBg: "group-hover:bg-red-500/20",
        groupText: "group-hover:text-red-500",
        groupBorder: "group-hover:border-red-500/30"
      },
      shadowClass: "rgba(239,68,68,0.15)"
    },
    {
      title: "Published Articles",
      subtitle: "Architecture concepts unraveled",
      count: articles.length || 0,
      icon: FaMediumM,
      targetId: "articles",
      colorClass: {
        hoverBorder: "hover:border-brand-purple/50",
        from: "from-brand-purple/10",
        bg: "bg-brand-purple/20",
        groupBg: "group-hover:bg-brand-purple/20",
        groupText: "group-hover:text-brand-purple",
        groupBorder: "group-hover:border-brand-purple/30"
      },
      shadowClass: "rgba(176,38,255,0.15)"
    },
    {
      title: "Certifications",
      subtitle: "Professional skills validated",
      count: certs.length || 0,
      icon: FaAward,
      targetId: "certifications",
      colorClass: {
        hoverBorder: "hover:border-yellow-500/50",
        from: "from-yellow-500/10",
        bg: "bg-yellow-500/20",
        groupBg: "group-hover:bg-yellow-500/20",
        groupText: "group-hover:text-yellow-500",
        groupBorder: "group-hover:border-yellow-500/30"
      },
      shadowClass: "rgba(234,179,8,0.15)"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <OverviewCard key={stat.title} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
