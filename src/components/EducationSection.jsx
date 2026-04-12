import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import campusImg from '../assets/images/images.png';
import schoolImg from '../assets/images/school.jpeg';

const educationData = [
  {
    type: "University",
    institution: "Horizon Campus",
    degree: "BSc Hons in Information Technology",
    cardLogo: campusImg,
    icon: <FaGraduationCap size={20} className="text-white" />,
    description: "Comprehensive study of advanced IT concepts, with a specialized focus on DevOps engineering, cloud infrastructure automation, CI/CD pipelines, and modern systems architecture. Developing a strong foundation in bridging software development and operational excellence.",
  },
  {
    type: "School",
    institution: "B/Kandakapulpotha National College",
    degree: "Primary & Secondary Education",
    cardLogo: schoolImg,
    icon: <FaSchool size={20} className="text-white" />,
    description: "Built my foundational knowledge and skills with a robust academic background.",
  }
];

const EducationCard = ({ item, isEven }) => {
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
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.2 }}
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
        className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-brand-purple/50 transition-colors duration-500 shadow-2xl h-full w-full"
      >
        <div style={{ transform: "translateZ(40px)" }}>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
            {item.cardLogo && (
              <div className="relative shrink-0 group-hover:-translate-y-2 transition-transform duration-500">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan to-brand-purple blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl"></div>
                {/* Logo container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white p-3 shadow-2xl z-10 overflow-hidden border border-white/20">
                  <img src={item.cardLogo} alt={`${item.institution} Logo`} className="w-full h-full object-contain" />
                </div>
              </div>
            )}
            
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/20 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3 border border-brand-purple/30">
                {item.type}
              </div>
              
              <h3 className="text-xl sm:text-2xl xl:text-3xl font-extrabold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300 tracking-tight">
                {item.institution}
              </h3>
              <h4 className="text-lg font-medium text-brand-cyan">
                {item.degree}
              </h4>
            </div>
          </div>
          
          <p className="text-gray-400 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 border-l-4 border-brand-cyan pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Education</span>
          </h2>
          <p className="text-gray-400 mt-2">The foundation of my engineering journey.</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-purple via-brand-cyan to-transparent rounded-full transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(176,38,255,0.6)]"
          ></motion.div>

          <div className="space-y-16 lg:space-y-24">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Timeline Dot & Icon */}
                  <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 w-12 h-12 rounded-full border-2 border-brand-cyan bg-brand-dark shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-110 group-hover:bg-brand-cyan transition-all duration-300">
                    <span className="group-hover:text-brand-dark transition-colors duration-300">
                       {item.icon}
                    </span>
                  </div>

                  <div className="w-full pl-20 md:pl-0 md:w-1/2 relative z-20">
                    <EducationCard item={item} isEven={isEven} />
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
