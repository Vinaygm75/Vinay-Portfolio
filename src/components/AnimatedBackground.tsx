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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    // Generate star/grid particles on client mount to make it dynamic
    const count = window.innerWidth < 768 ? 15 : 35; // lower count on mobile for excellent performance
    const newParticles: ParticleType[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x-axis
      y: Math.random() * 100, // percentage y-axis
      size: Math.random() * 2 + 0.8, // 0.8 to 2.8px
      duration: Math.random() * 8 + 7, // 7s to 15s fade/float duration
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    // Track mouse movement for professional ambient interactive spotlight
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
        active: true,
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        setMousePos({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          active: true,
        });
      }
    };

    const handleMouseLeave = () => {
      setMousePos((prev) => ({ ...prev, active: false }));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050506]">
      {/* 1. Shifting Interactive Cyber Grid Backdrop with radial mask */}
      <div className="absolute inset-0 cyber-grid opacity-[0.14] sm:opacity-[0.24]" />

      {/* 2. Interactive Spotlight Pointer Glow (glowing following the finger or mouse cursor) */}
      {mousePos.active && (
        <div
          className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-500/[0.045] blur-[100px] sm:blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* 3. Deep Monochromatic Pulsing Nebulae / Ambient Lighting Orbs */}
      <div className="absolute inset-0">
        {/* Soft Indigo Top-Left Glow */}
        <motion.div
          className="absolute top-[5%] left-[-10%] sm:top-[-10%] sm:left-[15%] w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-indigo-600/[0.035] rounded-full blur-[110px] sm:blur-[160px]"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.12, 0.93, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Sophisticated Soft Teal/Slate Center-Right Glow */}
        <motion.div
          className="absolute bottom-[25%] right-[-10%] sm:bottom-[15%] sm:right-[10%] w-[300px] h-[300px] sm:w-[550px] sm:h-[550px] bg-slate-400/[0.025] rounded-full blur-[100px] sm:blur-[150px]"
          animate={{
            x: [0, -40, 25, 0],
            y: [0, 35, -20, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 4. Twinkling & Floating Digital Starlight Particles */}
      <div className="absolute inset-0 bg-transparent">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/40 shadow-[0_0_5px_rgba(255,255,255,0.3)]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              y: [0, -35, 0],
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
        className="absolute left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
        animate={{
          top: ["-5%", "105%"]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
