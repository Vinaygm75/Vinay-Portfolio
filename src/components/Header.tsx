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
          ? "glass-panel bg-[#080808]/90 border-b border-white/10 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
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
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="flex items-center justify-center w-full h-full bg-[#080808] rounded-[7px]">
                <Database className="w-4 h-4 text-white transition-colors duration-300" />
              </div>
              <div className="absolute inset-0 bg-white/10 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            <div>
              <span className="font-name font-black text-sm tracking-wide text-white transition-colors">
                <span>Vinay</span>
              </span>
              <span className="hidden sm:inline-block ml-1.5 text-[9px] font-mono uppercase tracking-[0.25em] text-white/60">
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
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/10"
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute bottom-[-2px] left-3 right-3 h-[1.5px] bg-white rounded-full" />
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
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded bg-white text-[#080808] hover:bg-neutral-200 transition-all duration-300 text-[10px] font-bold tracking-wider uppercase group"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-1.5 rounded bg-white text-[#080808] hover:bg-neutral-200 transition-all text-xs"
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
        className={`lg:hidden fixed inset-x-0 top-14 bg-[#080808]/95 border-b border-white/10 transition-all duration-300 overflow-hidden ${
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
                  ? "bg-white/10 text-white border border-white/10"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/30"
              }`}
            >
              <span className="font-display font-medium">{item.label}</span>
              {activeSection === item.id ? (
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
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
