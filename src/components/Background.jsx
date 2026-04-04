import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particle data once on mount
    const newParticles = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1, // 1px to 3px
      x: Math.random() * 100, // 0-100vw
      y: Math.random() * 100, // 0-100vh start positions
      duration: Math.random() * 20 + 20, // 20s to 40s
      delay: Math.random() * 10,
      glow: Math.random() > 0.5 
        ? 'bg-brand-cyan shadow-[0_0_12px_#00f0ff]' 
        : 'bg-brand-purple shadow-[0_0_12px_#b026ff]'
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-50] overflow-hidden bg-[#050505]">
      
      {/* Deep Space Gradient Sky */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple/10 via-[#050505] to-[#050505]"></div>

      {/* Upward Drifting Spark Particles */}
      {particles.map((particle) => (
        <motion.div
           key={particle.id}
           className={`absolute rounded-full ${particle.glow}`}
           style={{
             width: particle.size,
             height: particle.size,
             left: `${particle.x}vw`,
             top: `${particle.y}vh`,
             opacity: 0,
           }}
           animate={{
             y: [0, -800], 
             opacity: [0, 0.4, 0.8, 0.4, 0],
             scale: [0.5, 1.2, 0.5]
           }}
           transition={{
             repeat: Infinity,
             duration: particle.duration,
             delay: particle.delay,
             ease: "linear",
           }}
        />
      ))}
      
      {/* Corner Ambient Glows (Static Backdrop) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-cyan/10 blur-[150px] rounded-full"></div>
    </div>
  );
};

export default Background;
