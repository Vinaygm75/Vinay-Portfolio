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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080808]">
      {/* 1. Shifting Interactive Cyber Grid Backdrop */}
      <div className="absolute inset-0 cyber-grid opacity-[0.06] sm:opacity-[0.1]" />

      {/* 2. Deep Monochromatic Pulsing Nebulae / Ambient Lighting Orbs */}
      <div className="absolute inset-0">
        {/* Soft Center Glow */}
        <motion.div
          className="absolute top-[10%] left-[-15%] sm:top-[5%] sm:left-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-white/[0.012] rounded-full blur-[100px] sm:blur-[150px]"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Muted Drifting Orb */}
        <motion.div
          className="absolute bottom-[20%] right-[-10%] sm:bottom-[10%] sm:right-[5%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-slate-500/[0.012] rounded-full blur-[100px] sm:blur-[160px]"
          animate={{
            x: [0, -50, 20, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 28,
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
            className="absolute rounded-full bg-white/30 shadow-[0_0_4px_rgba(255,255,255,0.2)]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              opacity: [0.1, 0.7, 0.1],
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
      
      {/* Dynamic ambient scanline beam */}
      <motion.div 
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
        animate={{
          top: ["-5%", "105%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
