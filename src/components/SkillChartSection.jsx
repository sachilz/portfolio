import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { devOpsSkills, mernStackSkills, aiMlSkills } from './SkillsSection';
import { projects } from './ProjectsSection';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const getProjectCount = (skillName) => {
  const name = skillName.toLowerCase();
  const aliases = [name];
  
  // Custom mapping for specific skill names to project tags
  if (name === 'ci/cd pipelines') aliases.push('jenkins', 'github actions', 'gitlab ci');
  if (name === 'javascript') aliases.push('js');
  if (name === 'docker') aliases.push('container');
  if (name === 'aws') aliases.push('amazon web services');
  if (name === 'mongodb') aliases.push('mongo');
  if (name === 'node.js') aliases.push('nodejs', 'node');
  if (name === 'react') aliases.push('react.js', 'reactjs');
  if (name === 'express.js') aliases.push('express', 'expressjs');
  
  let count = 0;
  projects.forEach(p => {
    const hasSkill = p.tech.some(t => aliases.includes(t.toLowerCase().trim()));
    if (hasSkill) count++;
  });
  return count;
};

const rolesData = {
  "DevOps Infrastructure": devOpsSkills.map(s => ({ subject: s.name, value: s.level, count: getProjectCount(s.name) })),
  "MERN Full-Stack": mernStackSkills.map(s => ({ subject: s.name, value: s.level, count: getProjectCount(s.name) })),
  "AI & MLOps": aiMlSkills.map(s => ({ subject: s.name, value: s.level, count: getProjectCount(s.name) }))
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.2)] flex flex-col gap-3 min-w-[200px]">
        <p className="text-gray-300 font-bold uppercase text-xs tracking-widest border-b border-white/10 pb-2">{data.subject}</p>
        <div className="flex flex-col gap-1">
          <p className="text-brand-cyan font-black text-2xl">{data.value}<span className="text-sm text-gray-500 font-medium">/100</span> <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider ml-1">Proficiency</span></p>
          <p className="text-brand-purple font-black text-lg">{data.count} <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider ml-1 text-right">Projects Included</span></p>
        </div>
      </div>
    );
  }
  return null;
};

const SkillChartSection = () => {
  const [activeRole, setActiveRole] = useState("DevOps Infrastructure");
  const roles = Object.keys(rolesData);

  return (
    <section id="skill-chart" className="py-24 relative overflow-hidden bg-transparent z-10 w-full min-h-[600px] flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
        
        {/* Left Side: Context & Tags */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="mb-8 border-l-4 border-brand-cyan pl-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Skill Metrics</span></h2>
            <p className="text-gray-400 mt-2 max-w-lg leading-relaxed">
              Explore my technical proficiencies mapped across core industry profiles. Select a target role below to re-calibrate the competency matrix.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-5 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 relative overflow-hidden group ${
                  activeRole === role 
                    ? 'text-white border-brand-cyan bg-[#0a0f1a] shadow-[0_0_20px_rgba(0,240,255,0.4)] border shadow-inner' 
                    : 'text-gray-400 border-white/10 hover:border-brand-purple/50 bg-[#111116] hover:text-white border hover:bg-white/5'
                }`}
              >
                {activeRole === role && (
                  <motion.div 
                    layoutId="activeRoleGlow"
                    className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 opacity-50"
                  />
                )}
                <span className="relative z-10">{role}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Recharts Radar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-[500px] h-[400px] lg:h-[500px] relative bg-[#111116]/60 backdrop-blur-3xl border border-white/5 rounded-[40px] p-6 shadow-2xl overflow-hidden"
        >
          {/* Inner ambient glow behind chart */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-cyan/20 blur-[80px] rounded-full pointer-events-none"></div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full h-full absolute inset-0 pt-8"
            >
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={rolesData[activeRole]} margin={{ top: 30, right: 30, left: 0, bottom: 20 }}>
                  <defs>
                    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#b026ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 600 }} axisLine={false} tickLine={false} tickMargin={15} />
                  <YAxis yAxisId="left" hide domain={[0, 100]} />
                  <YAxis yAxisId="right" orientation="right" hide domain={[0, 'dataMax + 1']} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)', strokeWidth: 0 }} />
                  <Line 
                    yAxisId="right" 
                    type="monotone" 
                    dataKey="count" 
                    stroke="#b026ff" 
                    strokeWidth={4} 
                    dot={{ r: 5, fill: '#111116', stroke: '#b026ff', strokeWidth: 3 }} 
                    activeDot={{ r: 8, fill: '#00f0ff', stroke: '#fff', strokeWidth: 2 }}
                  />
                  <Area 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00f0ff" 
                    strokeWidth={3} 
                    fill="url(#colorArea)" 
                    activeDot={{ r: 6, fill: '#b026ff', stroke: '#fff', strokeWidth: 2 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillChartSection;
