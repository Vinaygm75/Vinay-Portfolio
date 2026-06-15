import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface ParticleType {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<ParticleType[]>([]);

  useEffect(() => {
    // Generate star/grid particles on client mount to make it dynamic
    const count = window.innerWidth < 768 ? 15 : 30; // lower count on mobile for excellent performance
    const newParticles: ParticleType[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x-axis
      y: Math.random() * 100, // percentage y-axis
      size: Math.random() * 2 + 1, // 1 to 3px
      duration: Math.random() * 6 + 6, // 6 to 12s fade/float duration
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030014]">
      {/* 1. Shifting Interactive Cyber Grid Backdrop */}
      <div className="absolute inset-0 cyber-grid opacity-[0.12] sm:opacity-[0.18]" />

      {/* 2. Deep Cosmic Pulsing Nebulae / Ambient Lighting Orbs */}
      <div className="absolute inset-0">
        {/* Cyan Purple Center Glow */}
        <motion.div
          className="absolute top-[10%] left-[-15%] sm:top-[5%] sm:left-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-700/10 rounded-full blur-[100px] sm:blur-[150px]"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple Pink Drifting Orb */}
        <motion.div
          className="absolute bottom-[20%] right-[-10%] sm:bottom-[10%] sm:right-[5%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-purple-900/10 rounded-full blur-[100px] sm:blur-[160px]"
          animate={{
            x: [0, -50, 20, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.85, 1.1, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Deep Blue Bottom-Left Orb */}
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] bg-blue-900/10 rounded-full blur-[90px] sm:blur-[140px]"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, 20, -40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 3. Twinkling & Floating Digital Starlight Particles */}
      <div className="absolute inset-0 bg-transparent">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cyan-400/60 shadow-[0_0_6px_#22d3ee]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              opacity: [0.15, 0.85, 0.15],
              y: [0, -40, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>
      
      {/* Dynamic ambient scanline beam (highly cinematic cyber feel) */}
      <motion.div 
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
        animate={{
          top: ["-5%", "105%"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
