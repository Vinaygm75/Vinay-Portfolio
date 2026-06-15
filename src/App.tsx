/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Dynamic active scroll section tracking via IntersectionObserver
    const sections = [
      "hero",
      "about",
      "skills",
      "experience",
      "projects",
      "certifications",
      "achievements",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // Trigger when section occupies the major center of the viewport
      threshold: 0.15
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((secId) => {
      const element = document.getElementById(secId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((secId) => {
        const element = document.getElementById(secId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div id="app-root-container" className="min-h-screen bg-[#030014] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-300 relative">
      
      {/* Background ambient stars / matrix effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle cyan/purple radial lights */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#082f49]/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#1e1b4b]/15 rounded-full blur-[160px]" />
        
        {/* Interactive digital overlay grids */}
        <div className="absolute inset-0 cyber-grid opacity-100" />
      </div>

      {/* Main sticky top header menu navigation */}
      <Header activeSection={activeSection} />

      {/* Main scrolling layout blocks */}
      <main className="flex-grow z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer brand and copyright index */}
      <Footer />
    </div>
  );
}
