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
    // Generate star/grid particles on client mount
    const count = window.innerWidth < 768 ? 20 : 50; 
    const newParticles: ParticleType[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x-axis
      y: Math.random() * 100, // percentage y-axis
      size: Math.random() * 1.5 + 1.2, // 1.2px to 2.7px crisp star particles
      duration: Math.random() * 6 + 5, // 5s to 11s duration
      delay: Math.random() * -10, // negative delay so they start already scattered at different twinkling timestamps
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#040405]">
      {/* 1. Static Extremely Subtile Deep Ambiance (No color banding gradients) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-[#040405] to-[#020203] opacity-100" />

      {/* 2. Twinkling & Floating Deep Space Starlight Particles */}
      <div className="absolute inset-0 bg-transparent">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-slate-100 shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              opacity: [0.1, 0.95, 0.1],
              y: [0, -40, 0], // Gentle floating drift upward and back
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
    </div>
  );
}
