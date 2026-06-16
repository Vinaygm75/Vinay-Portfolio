import React, { useEffect, useState } from "react";
import { Hammer, Cpu, Lightbulb, Zap, TrendingUp, CheckSquare } from "lucide-react";
import { SKILL_CATEGORIES, STRENGTHS } from "../data";
import { motion } from "motion/react";

export default function Skills() {
  const [animatedIn, setAnimatedIn] = useState(false);

  useEffect(() => {
    // Simulating delay for animated bar drawing after section mounts
    const timer = setTimeout(() => {
      setAnimatedIn(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Map category title to appropriate icon
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Data Analytics":
        return <TrendingUp className="w-5 h-5 text-white" />;
      case "Tools & Technologies":
        return <Hammer className="w-5 h-5 text-white" />;
      case "Soft Skills":
        return <Lightbulb className="w-5 h-5 text-white" />;
      default:
        return <Cpu className="w-5 h-5 text-white" />;
    }
  };

  const getCategoryStyle = (title: string) => {
    return "border-neutral-800 bg-[#121214]/80 hover:border-white/40 hover:bg-[#141416] hover:shadow-[0_0_25px_rgba(255,255,255,0.12)] active:border-white/60 active:bg-[#1c1c1f] active:shadow-[0_0_35px_rgba(255,255,255,0.22)] cursor-pointer select-none transition-all duration-300";
  };

  const getProgressColor = (categoryTitle: string) => {
    return "bg-white";
  };

  return (
    <section id="skills" className="py-16 bg-transparent relative overflow-hidden">
      {/* Background Neon Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-36 bg-white/[0.008] blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <Zap className="w-4 h-4 text-neutral-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">ANALYTIC ENGINE CAPABILITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
            Technical & Soft <span className="text-white">Skills</span>
          </h2>
          <motion.div
            initial={{ width: "16px", opacity: 0.4 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-[2px] bg-white mx-auto mt-2 rounded-full"
          />
        </div>

        {/* 3 Premium Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className={`p-5 rounded-xl border backdrop-blur-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${getCategoryStyle(
                category.title
              )}`}
            >
              {/* Highlight background glowing node */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-white/[0.012] rounded-full blur-xl group-hover:bg-white/[0.08] group-active:bg-white/[0.15] transition-all duration-300 pointer-events-none" />
              {/* Card Header */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2.5 pb-2 border-b border-white/5">
                  <div className="p-1.5 rounded bg-white/5">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-display font-bold text-xs text-slate-100 tracking-wide uppercase">
                    {category.title}
                  </h3>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-3 pt-1">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1 group/skill">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="font-sans font-medium text-slate-300 group-hover/skill:text-slate-100 transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-white font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* High Density progress bar - height 4px */}
                      <div className="skill-bar-bg">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                          className={`skill-bar-fill ${getProgressColor(category.title)}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric Label */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono uppercase text-slate-500">
                <span>Category Status</span>
                <span className="text-white tracking-wider font-bold">[ Active insights ]</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strengths Pills Section */}
        <div className="mt-12 bg-[#121214]/80 border border-neutral-800 rounded-xl p-5 sm:p-6 text-center relative overflow-hidden">
          
          <h3 className="font-display font-semibold text-sm text-slate-200 mb-4 flex items-center justify-center gap-2">
            <CheckSquare className="w-4 h-4 text-white" /> Professional Strengths & Work Ethics
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {STRENGTHS.map((strength, index) => (
              <span
                key={index}
                className="px-3 py-1.2 rounded bg-[#161619] border border-neutral-800 text-[11px] font-sans font-medium text-slate-300 hover:text-white hover:border-white/40 hover:bg-[#1c1c1f] hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] active:border-white/60 active:bg-[#222226] active:shadow-[0_0_20px_rgba(255,255,255,0.18)] transition-all duration-300 cursor-default select-none"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
