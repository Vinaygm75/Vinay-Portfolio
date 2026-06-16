import React from "react";
import { ArrowDown, Eye, Mail, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Hero() {

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen pt-20 pb-10 flex items-center overflow-hidden bg-transparent"
    >
      {/* Absolute Radial Glow elements */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-white/[0.012] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Laser line moving across the grid header */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 opacity-15" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-start text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full border border-white/20 bg-white/5 text-[10px] text-neutral-200 font-semibold tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>
              {PERSONAL_INFO.badgeText}
            </span>
          </div>

          {/* Title / Name */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
              <span className="text-white block font-name font-black tracking-normal mb-1">{PERSONAL_INFO.name}</span>
              <span className="text-white block mt-1 pb-1 text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Data Analyst & BI Developer
              </span>
            </h1>
          </div>

          {/* Roles Badge */}
          <div className="px-4 py-1.5 border-l-2 border-white/40 bg-white/5 rounded-r-md max-w-full">
            <p className="text-[11px] sm:text-xs font-mono text-slate-300 tracking-wide leading-relaxed">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Headline / Core description */}
          <h2 className="text-base sm:text-lg lg:text-xl font-medium text-slate-200 leading-snug max-w-2xl">
            {PERSONAL_INFO.headline}
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
            {PERSONAL_INFO.description}
          </p>

          {/* Actions / Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-3 pt-2 w-full sm:w-auto">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded bg-white hover:bg-neutral-200 border border-transparent text-[#080808] font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer flex-1 sm:flex-initial group whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => handleScrollTo("projects")}
              className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-slate-250 text-xs transition-all duration-300 cursor-pointer flex-1 sm:flex-initial group whitespace-nowrap"
            >
              <Eye className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
              <span>View Projects</span>
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-slate-250 text-xs transition-all duration-300 cursor-pointer flex-1 sm:flex-initial group whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 group-hover:-translate-y-[0.5px] transition-transform" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Quick KPI stats overlay */}
          <div className="grid grid-cols-3 gap-4 pt-8 w-full max-w-xl border-t border-white/10 mt-4">
            <div className="space-y-0.5">
              <span className="text-[9px] font-mono text-slate-500 tracking-wider block uppercase">Core Skills</span>
              <span className="text-xs font-mono font-bold text-white">10+</span>
            </div>
            <div className="space-y-0.5 border-l border-white/10 pl-4">
              <span className="text-[9px] font-mono text-slate-500 tracking-wider block uppercase">Projects Built</span>
              <span className="text-xs font-mono font-bold text-white">5+</span>
            </div>
            <div className="space-y-0.5 border-l border-white/10 pl-4">
              <span className="text-[9px] font-mono text-slate-500 tracking-wider block uppercase">Active Year</span>
              <span className="text-xs font-mono font-bold text-white font-medium">2026</span>
            </div>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8 mt-6">
          <button 
            onClick={() => handleScrollTo("about")}
            className="flex flex-col items-center group opacity-70 hover:opacity-100 transition-opacity cursor-pointer duration-300"
          >
            <span className="font-mono text-[9px] tracking-widest text-slate-400 uppercase group-hover:text-white transition-colors">
              SCROLL SYSTEM INSIGHTS
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-white mt-1.5 animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}

