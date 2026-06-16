import React from "react";
import { ArrowUp, Database, Sparkles, TrendingUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-transparent border-t border-white/5 py-10 relative overflow-hidden">
      {/* Subtle particle node glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-white/[0.005] blur-[50px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Logo Brand / Copy */}
          <div className="space-y-1.5 text-left">
            <div className="flex items-center space-x-2">
              <Database className="w-4 h-4 text-white" />
              <span className="font-name font-black text-sm tracking-wide text-slate-100 uppercase">
                GM VINAY KUMAR
              </span>
            </div>
            <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block font-bold">
              // Aspiring Data Analyst
            </p>
            <p className="text-slate-400 text-xs font-light italic max-w-sm">
              "Transforming Data Into Decisions"
            </p>
          </div>

          {/* Quick blueprint jump actions / return back block */}
          <div className="flex items-center space-x-4 justify-start md:justify-end">
            <div className="flex items-center space-x-1.5 text-[10px] text-slate-550 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Recruiter Portal v1.0.0</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 px-3 rounded bg-[#121214] border border-neutral-800 text-slate-300 hover:text-white hover:border-white/20 transition-all flex items-center gap-1.5 text-[10px] uppercase font-mono cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 animate-pulse" />
              <span>Reset Position</span>
            </button>
          </div>

        </div>

        {/* Separator / Copyright lower block */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] font-mono text-slate-600">
          <p className="text-left font-light">
            &copy; 2026 <span className="font-name font-bold">GM Vinay Kumar</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <span className="hover:text-slate-400 cursor-default">Designed for recruiting officers</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-default">Secure transmission verified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
