import React from "react";
import { Award, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { CERTIFICATIONS } from "../data";
import { motion } from "motion/react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-transparent relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-85 h-85 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-purple-400">// ANALYTICAL VALIDATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
            Accredited <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <motion.div
            initial={{ width: "16px", opacity: 0.4 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-[2.5px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-2 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)]"
          />
        </div>

        {/* 3 Columns Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => {
            const isTATA = cert.provider.toLowerCase().includes("tata");
            return (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group bg-white/3 ${
                  isTATA 
                    ? "border-purple-500/25 hover:border-purple-400/50 shadow-[0_4px_30px_rgba(139,92,246,0.05)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.2)]" 
                    : "border-white/5 hover:border-cyan-500/30"
                }`}
              >
                {/* Glowing subtle hover accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/5 via-transparent to-transparent pointer-events-none" />

                <div className="space-y-3">
                  
                  {/* Badge Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-cyan-400 group-hover:text-purple-350 transition-colors">
                      {isTATA ? (
                        <Cpu className="w-4 h-4 text-purple-400" />
                      ) : (
                        <Award className="w-4 h-4 text-cyan-400" />
                      )}
                    </div>

                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block font-bold">
                      [ Verified credentials ]
                    </span>
                  </div>

                  {/* Title block */}
                  <div className="space-y-1 text-left">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-100 tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="font-sans font-medium text-[11px] text-cyan-400">
                      {cert.provider}
                    </p>
                  </div>

                  {/* Description details */}
                  <p className="text-slate-400 text-xs font-light leading-relaxed text-left">
                    {cert.details}
                  </p>

                  {/* Verified Credentials */}
                  {cert.credentialId && (
                    <div className="pt-2 flex">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Verified credentials : {cert.credentialId}
                      </span>
                    </div>
                  )}

                </div>

                {/* Verification footer label */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono uppercase text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Security: SECURE
                  </span>
                  <span className="text-cyan-400 font-bold">[ 100% ISSUED ]</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
