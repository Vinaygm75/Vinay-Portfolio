import React, { useState, useEffect } from "react";
import { Menu, X, Database, ChevronRight, FileDown } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Hero", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" }
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel bg-[#020617]/90 border-b border-cyan-500/25 backdrop-blur-md shadow-[0_4px_20px_rgba(2,6,23,0.9)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / Brand */}
          <div 
            onClick={() => handleScrollTo("hero")}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-500 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="flex items-center justify-center w-full h-full bg-[#020617] rounded-[7px]">
                <Database className="w-4 h-4 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
              </div>
              <div className="absolute inset-0 bg-cyan-400/25 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
                GM <span className="text-cyan-400 group-hover:text-purple-400">VINAY</span>
              </span>
              <span className="hidden sm:inline-block ml-1.5 text-[9px] font-mono uppercase tracking-[0.25em] text-cyan-400/80">
                // Analytics
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleScrollTo(item.id)}
                className={`relative px-3 py-1.5 rounded-md font-sans text-[11px] tracking-wide uppercase transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/10"
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute bottom-[-2px] left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-[0_0_8px_#22d3ee]" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA / Resume Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="desktop-resume-btn"
              className="flex items-center space-x-2 px-4 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:text-slate-100 hover:bg-cyan-600 hover:border-transparent transition-all duration-300 text-[10px] font-bold tracking-wider uppercase group"
            >
              <FileDown className="w-3.5 h-3.5 group-hover:translate-y-[1px] transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all text-xs"
              title="Download Resume"
            >
              <FileDown className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 focus:outline-none border border-transparent hover:border-slate-800 transition-all"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-14 bg-[#020617]/95 border-b border-cyan-500/25 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] py-4 opacity-100 backdrop-blur-lg" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-1.5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`flex items-center justify-between w-full px-4 py-2 rounded-lg text-left text-xs uppercase tracking-wide transition-all ${
                activeSection === item.id
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/30"
              }`}
            >
              <span className="font-display font-medium">{item.label}</span>
              {activeSection === item.id ? (
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              )}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
