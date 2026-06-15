import React, { useState } from "react";
import { Linkedin, Github, Mail, MapPin, Briefcase, ChevronRight, Compass, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO, STATISTICS, FOCUS_AREAS } from "../data";
import { motion } from "motion/react";

export default function About() {
  const [photoError, setPhotoError] = useState(false);

  const handleScrollToSection = (label: string) => {
    let targetId = "about";
    if (label.includes("Projects")) targetId = "projects";
    else if (label.includes("Certifications")) targetId = "certifications";
    else if (label.includes("Skills")) targetId = "skills";
    else if (label.includes("Programs") || label.includes("Training")) targetId = "experience";

    const element = document.getElementById(targetId);
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

  const photoUrl = PERSONAL_INFO.profilePhoto;

  return (
    <section id="about" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching image exactly */}
        <div className="mb-10 text-left space-y-2">
          <h2 className="text-4xl font-display font-bold text-white tracking-tight">
            About
          </h2>
          <motion.div
            initial={{ width: "16px", opacity: 0.4 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-[2.5px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          />
          <p className="text-slate-400 text-sm mt-1 pb-1">
            Professional snapshot of data, insights, and innovation.
          </p>
        </div>

        {/* Core Side-by-Side Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Profile Quick Card */}
          <div className="lg:col-span-5 xl:col-span-5 h-full">
            <div className="bg-[#0b1224]/75 border border-white/5 rounded-2xl p-6 md:p-8 flex items-center h-full">
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full text-center sm:text-left">
                
                {/* Profile Photo - Round with safe border */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-[2px] bg-gradient-to-b from-cyan-500/30 via-slate-800 to-purple-500/20">
                    {!photoError ? (
                      <img
                        src={photoUrl}
                        onError={() => setPhotoError(true)}
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-mono text-cyan-400 text-lg font-bold">
                        {PERSONAL_INFO.name.slice(0, 2)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Profile Info & Pills */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium font-mono">
                      {PERSONAL_INFO.title}
                    </p>
                  </div>

                  {/* Pills with Icons */}
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <a
                      href={PERSONAL_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/5 bg-slate-950/40 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 font-medium transition-all"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/5 bg-slate-950/40 text-xs text-slate-300 hover:text-purple-400 hover:border-purple-500/30 font-medium transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/5 bg-slate-950/40 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 font-medium transition-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Professional Summary & Key Fokus */}
          <div className="lg:col-span-7 xl:col-span-7 h-full">
            <div className="bg-[#0b1224]/75 border border-white/5 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-slate-100 uppercase tracking-wider font-mono">
                  Professional Summary
                </h3>
                <div className="space-y-3 font-sans text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  <p>
                    Aspiring Data Analyst with hands-on experience in SQL, Excel, Power BI, and Data Visualization. Skilled in transforming raw data into meaningful insights through data cleaning, analysis, and interactive dashboard development. Passionate about solving business problems using data-driven decision-making and continuously enhancing analytical and technical skills. Seeking opportunities to contribute to organizational growth through actionable insights and effective reporting.
                  </p>
                </div>
              </div>

              {/* Grid of 6 Competencies matching reference style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-6">
                
                <div className="bg-slate-900/45 border border-white/5 rounded-xl p-4 hover:border-cyan-500/20 transition-colors">
                  <h4 className="font-bold text-slate-100 text-xs sm:text-sm block mb-1">
                    Data Analytics
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">
                    Data cleaning, trend analysis, and pattern discovery
                  </p>
                </div>

                <div className="bg-slate-900/45 border border-white/5 rounded-xl p-4 hover:border-cyan-500/20 transition-colors">
                  <h4 className="font-bold text-slate-100 text-xs sm:text-sm block mb-1">
                    Business Intelligence
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">
                    Interactive dashboards, reporting automation, and KPI tracking
                  </p>
                </div>

                <div className="bg-slate-900/45 border border-white/5 rounded-xl p-4 hover:border-cyan-500/20 transition-colors">
                  <h4 className="font-bold text-slate-100 text-xs sm:text-sm block mb-1">
                    Excel Modeling
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">
                    Advanced formulas, pivot structures, and automated spreadsheets
                  </p>
                </div>

                <div className="bg-slate-900/45 border border-white/5 rounded-xl p-4 hover:border-purple-500/20 transition-colors">
                  <h4 className="font-bold text-slate-100 text-xs sm:text-sm block mb-1">
                    Power BI
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">
                    DAX measures, Power Query transformations, and modeling
                  </p>
                </div>

                <div className="bg-slate-900/45 border border-white/5 rounded-xl p-4 hover:border-purple-500/20 transition-colors">
                  <h4 className="font-bold text-slate-100 text-xs sm:text-sm block mb-1">
                    SQL Database
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">
                    Optimized queries, database joins, and relational tables
                  </p>
                </div>

                <div className="bg-slate-900/45 border border-white/5 rounded-xl p-4 hover:border-purple-500/20 transition-colors">
                  <h4 className="font-bold text-slate-100 text-xs sm:text-sm block mb-1">
                    Python
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">
                    Basic data wrangling, pandas, and automation scripting
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
