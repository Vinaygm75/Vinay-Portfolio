import React, { useState, useEffect } from "react";
import { TrendingUp, BarChart3, GraduationCap, Award, Percent } from "lucide-react";
import { ACHIEVEMENTS } from "../data";
import { motion } from "motion/react";

interface CounterProps {
  target: number;
  suffix: string;
}

function AnimatedCounter({ target, suffix }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const increment = target / (duration / 16); // ~ 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Parse the numbers and suffixes from string (e.g. "5+" -> { val: 5, suf: "+" })
  const parseValue = (valStr: string) => {
    const num = parseInt(valStr.replace(/[^0-9]/g, "")) || 0;
    const suffix = valStr.replace(/[0-9]/g, "");
    return { num, suffix };
  };

  const getIcon = (label: string) => {
    if (label.includes("Projects")) return <BarChart3 className="w-5 h-5 text-white" />;
    if (label.includes("Dashboards")) return <TrendingUp className="w-5 h-5 text-white" />;
    if (label.includes("Training")) return <GraduationCap className="w-5 h-5 text-white" />;
    return <Award className="w-5 h-5 text-white" />;
  };

  return (
    <section id="achievements" className="py-16 bg-transparent relative overflow-hidden">
      {/* Dynamic blurred layout meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.005] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">ANALYTICAL MILESTONES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
            Key Career <span className="text-white">Highlights</span>
          </h2>
          <motion.div
            initial={{ width: "16px", opacity: 0.4 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-[2px] bg-white mx-auto mt-2 rounded-full"
          />
        </div>

        {/* Bento-Style Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ACHIEVEMENTS.map((ach, idx) => {
            const { num, suffix } = parseValue(ach.value);
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(idx)}
                onTouchEnd={() => setHoveredIndex(null)}
                className="p-5 rounded-xl bg-[#121214]/80 border border-neutral-800 hover:border-white/40 hover:bg-[#141416] hover:shadow-[0_0_25px_rgba(255,255,255,0.12)] active:border-white/60 active:bg-[#1c1c1f] active:shadow-[0_0_35px_rgba(255,255,255,0.22)] select-none transition-all duration-300 relative group overflow-hidden text-left cursor-pointer"
              >
                {/* Visual glow node */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/[0.012] rounded-full blur-xl group-hover:bg-white/[0.08] group-active:bg-white/[0.15] transition-all duration-300 pointer-events-none" />

                <div className="space-y-3">
                  
                  {/* Icon Bubble */}
                  <div className="flex items-center justify-between">
                    <div className="p-1.5 w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
                      {getIcon(ach.label)}
                    </div>
                    {hoveredIndex === idx && (
                      <span className="font-mono text-[9px] text-white animate-pulse font-bold uppercase">
                        [ Active hover ]
                      </span>
                    )}
                  </div>

                  {/* Count animation trigger */}
                  <div className="space-y-0.5">
                    <div className="flex items-baseline space-x-1">
                      <AnimatedCounter target={num} suffix={suffix} />
                    </div>
                    <span className="font-display font-bold text-slate-100 text-xs block uppercase tracking-wide">
                      {ach.label}
                    </span>
                  </div>

                  {/* Bullet / Description */}
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {ach.description}
                  </p>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
