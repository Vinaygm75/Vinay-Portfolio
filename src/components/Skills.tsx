import React, { useEffect, useState } from "react";
import { Hammer, Cpu, Lightbulb, Zap, TrendingUp, CheckSquare } from "lucide-react";
import { SKILL_CATEGORIES, STRENGTHS } from "../data";

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
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case "Tools & Technologies":
        return <Hammer className="w-5 h-5 text-purple-400" />;
      case "Soft Skills":
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getCategoryStyle = (title: string) => {
    switch (title) {
      case "Data Analytics":
        return "border-cyan-500/20 bg-white/5 hover:border-cyan-400/40";
      case "Tools & Technologies":
        return "border-purple-500/20 bg-white/5 hover:border-purple-400/40";
      case "Soft Skills":
        return "border-cyan-500/20 bg-white/5 hover:border-cyan-400/40";
      default:
        return "border-white/5 bg-white/5";
    }
  };

  const getProgressColor = (categoryTitle: string) => {
    switch (categoryTitle) {
      case "Data Analytics":
        return "bg-cyan-500";
      case "Tools & Technologies":
        return "bg-purple-500";
      case "Soft Skills":
        return "bg-cyan-500";
      default:
        return "bg-cyan-500";
    }
  };

  return (
    <section id="skills" className="py-16 bg-transparent relative border-b border-white/5">
      {/* Background Neon Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-36 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-purple-400">// ANALYTIC ENGINE CAPABILITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
            Technical & Soft <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-[2px] w-10 bg-purple-500/80 mx-auto mt-2 rounded-full" />
        </div>

        {/* 3 Premium Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className={`p-5 rounded-xl border backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${getCategoryStyle(
                category.title
              )}`}
            >
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
                        <span className="font-mono text-cyan-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* High Density progress bar - height 4px */}
                      <div className="skill-bar-bg">
                        <div
                          className={`skill-bar-fill ${getProgressColor(category.title)} transition-all duration-1000 ease-out`}
                          style={{
                            width: animatedIn ? `${skill.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric Label */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono uppercase text-slate-500">
                <span>Category Status</span>
                <span className="text-cyan-400 tracking-wider font-bold">[ Active insights ]</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strengths Pills Section */}
        <div className="mt-12 bg-white/3 border border-white/5 rounded-xl p-5 sm:p-6 text-center relative overflow-hidden">
          {/* Neon side bars */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-400" />
          
          <h3 className="font-display font-semibold text-sm text-slate-200 mb-4 flex items-center justify-center gap-2">
            <CheckSquare className="w-4 h-4 text-cyan-400" /> Professional Strengths & Work Ethics
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {STRENGTHS.map((strength, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg bg-[#020617] border border-white/5 text-[11px] font-sans font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 hover:shadow-[0_0_8px_rgba(34,211,238,0.15)] transition-all duration-300 cursor-default"
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
