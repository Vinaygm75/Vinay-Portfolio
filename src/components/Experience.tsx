import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, GraduationCap, ServerCrash, Library } from "lucide-react";
import { EXPERIENCES } from "../data";
import { motion } from "motion/react";

export default function Experience() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-16 bg-transparent relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-white/[0.012] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-12 space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <Briefcase className="w-4 h-4 text-white" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">ANALYTIC CHRONOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
            Experience & <span className="text-white">Training</span>
          </h2>
          <motion.div
            initial={{ width: "16px", opacity: 0.4 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-[2px] bg-white mx-auto md:mx-0 mt-2 rounded-full"
          />
        </div>

        {/* Premium Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto md:ml-6">
          
          {/* Glowing central vertical connector lines - pure grey */}
          <div className="absolute left-[11px] md:left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-neutral-600 via-neutral-800 to-transparent opacity-30 blur-[1px]" />
          <div className="absolute left-[11px] md:left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-neutral-700 via-neutral-800 to-transparent opacity-85" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {EXPERIENCES.map((item, index) => {
              const isFirst = index === 0;
              return (
                <div
                  key={item.id}
                  className="relative flex items-start space-x-4 md:space-x-8 pl-0"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Glowing Node Icon - High Density Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 mt-[10px] w-6 h-6 flex items-center justify-center ml-0 md:ml-2">
                    {/* Pulsing Outer Glowing Ring */}
                    <motion.div
                      className="absolute w-5 h-5 rounded-full border border-white/20 bg-white/5"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.4
                      }}
                    />
                    
                    {/* Inner glowing core */}
                    <div
                      className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        hoveredId === item.id 
                          ? "bg-white scale-125 border border-white" 
                          : "bg-neutral-600 border border-neutral-700/30"
                      }`}
                    />
                  </div>

                  {/* Glassmorphism Content Card */}
                  <div className={`flex-grow p-5 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                    hoveredId === item.id
                      ? "bg-[#121214] border-white/20 -translate-y-[2px]"
                      : "bg-[#121214]/60 border-neutral-850"
                  }`}>
                    
                    {/* Card Header metadata */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 pb-3 border-b border-white/5">
                      <div className="space-y-0.5 text-left">
                        <span className="font-mono text-[9px] text-neutral-400 tracking-wider uppercase font-bold">
                          [ {isFirst ? "TRAINEE PROGRAM" : "INTERNSHIP"} ]
                        </span>
                        <h3 className="text-base font-display font-bold text-slate-100">
                          {item.role}
                        </h3>
                        <p className="font-sans font-medium text-xs text-white">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[10px] font-mono text-slate-400 md:text-right">
                        <div className="flex items-center gap-1 justify-start md:justify-end">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-start md:justify-end">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet responsibilities */}
                    <ul className="mt-4 space-y-2 text-left text-xs text-slate-400 list-disc ml-4 font-light">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="leading-relaxed hover:text-slate-200 transition-colors">
                          {resp}
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
