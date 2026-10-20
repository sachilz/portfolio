import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const telemetrySnippets = [
  "[OK] Mounted /sys/fs/cgroup",
  "kernel: Linux 6.12.8-arch1-1-lts",
  "systemd: Started Docker Container Engine",
  "LISTEN 0.0.0.0:443 (nginx)",
  "TCP 127.0.0.1:6443 ESTABLISHED",
  "devops@arch:~$ ./deploy.sh --prod",
  "0x7fff5fbff8a0 [STACK_OK]",
  "Ansible: ok=14 changed=2 unreachable=0",
  "Terraform: 12 added, 0 changed, 0 destroyed",
  "ping 1.1.1.1: 64 bytes time=1.42ms",
  "[OK] Reached target Multi-User System",
  "CPU0: 1.8% | RAM: 4.8GiB/32GiB",
  "k8s: pod/production-api-7b8c9d Running",
  "iptables: ACCEPT all -- 10.0.0.0/16"
];

const Background = () => {
  const [particles, setParticles] = useState([]);
  const [telemetry, setTelemetry] = useState([]);

  useEffect(() => {
    // Generate particle data
    const newParticles = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 10,
      color: Math.random() > 0.6 
        ? 'bg-emerald-400 shadow-[0_0_10px_#10b981]' 
        : Math.random() > 0.3
        ? 'bg-brand-cyan shadow-[0_0_10px_#00f0ff]'
        : 'bg-brand-purple shadow-[0_0_10px_#b026ff]'
    }));
    setParticles(newParticles);

    // Generate floating telemetry logs
    const newTelemetry = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      text: telemetrySnippets[i % telemetrySnippets.length],
      x: Math.random() * 85 + 5,
      y: Math.random() * 80 + 10,
      duration: Math.random() * 20 + 25,
      delay: i * 3
    }));
    setTelemetry(newTelemetry);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-50] overflow-hidden bg-[#06080d]">
      
      {/* Linux Terminal Grid & Subtle Scanlines */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00ff66 1px, transparent 1px),
            linear-gradient(to bottom, #00ff66 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Terminal Scanline Vignette */}
      <div className="absolute inset-0 terminal-scanlines opacity-40 pointer-events-none" />

      {/* Deep Kernel Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-cyan-500/5 blur-[180px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.03] blur-[200px] rounded-full" />

      {/* Drifting Floating Telemetry Packets */}
      {telemetry.map((t) => (
        <motion.div
          key={t.id}
          className="absolute font-mono-code text-[11px] text-emerald-400/20 whitespace-nowrap select-none hidden lg:block tracking-wider"
          style={{
            left: `${t.x}vw`,
            top: `${t.y}vh`,
          }}
          animate={{
            y: [0, -180, -360],
            opacity: [0, 0.25, 0.4, 0.2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: t.duration,
            delay: t.delay,
            ease: "linear",
          }}
        >
          {t.text}
        </motion.div>
      ))}

      {/* Drifting Upward Phosphor Spark Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: [0, -700], 
            opacity: [0, 0.3, 0.7, 0.3, 0],
            scale: [0.6, 1.2, 0.6]
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Background;
