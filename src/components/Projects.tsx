import React, { useState } from "react";
import { FolderGit2, Calendar, FileDown, ExternalLink, SlidersHorizontal, Eye, X, BarChart3, TrendingUp, Search, Info } from "lucide-react";
import { PROJECTS } from "../data";
import { ProjectItem } from "../types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  // States of simulated interactive dashboard for Swiggy & retail sales
  const [swiggyCuisine, setSwiggyCuisine] = useState<string>("All");
  const [swiggyCity, setSwiggyCity] = useState<string>("All");
  const [swiggySearch, setSwiggySearch] = useState<string>("");
  const [netflixType, setNetflixType] = useState<string>("All");

  // Power BI Swiggy Slicer Interactive States 
  const [swiggySelRes, setSwiggySelRes] = useState<string>("All");
  const [swiggySelCui, setSwiggySelCui] = useState<string>("All");
  const [swiggySelLoc, setSwiggySelLoc] = useState<string>("All");
  const [swiggySelPay, setSwiggySelPay] = useState<string>("All");

  // Retail Sales & Profit Simulation States
  const [retailRegion, setRetailRegion] = useState<string>("All");
  const [retailCategory, setRetailCategory] = useState<string>("All");

  const swiggyData = [
    { name: "Biryani Zone", cuisine: "Indian", city: "Bengaluru", rating: 4.4, priceForTwo: 450, orders: 1240 },
    { name: "China Pearl", cuisine: "Chinese", city: "Bengaluru", rating: 4.2, priceForTwo: 600, orders: 850 },
    { name: "Pizza Hut", cuisine: "Italian", city: "Bengaluru", rating: 4.1, priceForTwo: 500, orders: 1420 },
    { name: "Truffles", cuisine: "Continental", city: "Bengaluru", rating: 4.5, priceForTwo: 700, orders: 1980 },
    { name: "Thalassery Kitchen", cuisine: "Indian", city: "Chennai", rating: 4.3, priceForTwo: 350, orders: 940 },
    { name: "Mario's Italian", cuisine: "Italian", city: "Mumbai", rating: 4.6, priceForTwo: 800, orders: 720 },
    { name: "Wok Express", cuisine: "Chinese", city: "Mumbai", rating: 4.0, priceForTwo: 400, orders: 1100 },
    { name: "Corner House", cuisine: "Desserts", city: "Bengaluru", rating: 4.8, priceForTwo: 300, orders: 2200 },
  ];

  const filteredSwiggy = swiggyData.filter(item => {
    const matchCuisine = swiggyCuisine === "All" || item.cuisine === swiggyCuisine;
    const matchCity = swiggyCity === "All" || item.city === swiggyCity;
    const matchSearch = item.name.toLowerCase().includes(swiggySearch.toLowerCase()) || item.cuisine.toLowerCase().includes(swiggySearch.toLowerCase());
    return matchCuisine && matchCity && matchSearch;
  });

  const swiggyTotalOrders = filteredSwiggy.reduce((acc, curr) => acc + curr.orders, 0);
  const swiggyAverageRating = (filteredSwiggy.reduce((acc, curr) => acc + curr.rating, 0) / (filteredSwiggy.length || 1)).toFixed(1);
  const swiggyAvgPrice = (filteredSwiggy.reduce((acc, curr) => acc + curr.priceForTwo, 0) / (filteredSwiggy.length || 1)).toFixed(0);

  const getAccentClass = (color?: string) => {
    switch (color) {
      case "cyan":
        return "border-cyan-400/20 text-cyan-400 focus:border-cyan-400/40";
      case "blue":
        return "border-blue-400/20 text-blue-400 focus:border-blue-400/40";
      case "purple":
        return "border-purple-400/20 text-purple-400 focus:border-purple-400/40";
      case "amber":
        return "border-amber-400/20 text-amber-400 focus:border-amber-400/40";
      default:
        return "border-slate-800 text-slate-400";
    }
  };

  const getAccentBg = (color?: string) => {
    switch (color) {
      case "cyan":
        return "bg-cyan-500/10";
      case "blue":
        return "bg-blue-500/10";
      case "purple":
        return "bg-purple-500/10";
      case "amber":
        return "bg-amber-500/10";
      default:
        return "bg-slate-900/40";
    }
  };

  return (
    <section id="projects" className="py-16 bg-transparent relative border-b border-white/5">
      {/* Visual glowing clouds */}
      <div className="absolute top-1/10 left-1/12 w-[500px] h-32 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/12 w-[500px] h-32 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">// ANALYTIC PROJECTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-xs max-w-lg mx-auto font-light mt-1 text-center">
            Click on any dashboard to launch an interactive live emulator, read metrics summary, or retrieve official PDF sheets.
          </p>
          <div className="h-[2px] w-10 bg-cyan-400/80 mx-auto mt-2 rounded-full" />
        </div>

        {/* 2x2 Clean Dashboard Layout Grid representing real projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden bg-white/3 border-white/5 hover:border-cyan-500/30`}
            >
              {/* Highlight background glowing node */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/5 to-transparent blur-md pointer-events-none" />

              <div className="space-y-3">
                {/* Upper row: Folder & Duration */}
                <div className="flex items-center justify-between">
                  {/* Technology indicator tag */}
                  <div className={`p-2 rounded-lg ${getAccentBg(project.accentColor)} flex items-center justify-center`}>
                    <BarChart3 className={`w-4 font-bold h-4 ${
                      project.accentColor === "cyan" ? "text-cyan-400 animate-pulse" :
                      project.accentColor === "blue" ? "text-blue-400" :
                      project.accentColor === "purple" ? "text-purple-400" : "text-amber-400"
                    }`} />
                  </div>

                  {project.duration && (
                    <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{project.duration}</span>
                    </div>
                  )}
                </div>

                {/* Info block */}
                <div className="space-y-1.5 text-left">
                  <h3 className="text-base font-display font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#020617] border border-white/5 text-[9px] font-mono tracking-wide text-slate-300 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-400 text-xs font-light leading-relaxed pt-1 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Rows */}
              <div className="pt-4 mt-4 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-2.5">
                
                {/* Action button: Interactive Preview Modal launcher */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 hover:text-slate-100 hover:bg-cyan-600 hover:border-transparent transition-all duration-300 flex items-center justify-center space-x-1.5 text-[11px] font-bold uppercase tracking-wide cursor-pointer flex-1 sm:flex-none"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive Preview</span>
                </button>

                {/* PDF/External Link button */}
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#020617] border border-white/15 text-slate-300 hover:text-slate-150 hover:border-cyan-500/35 transition-all text-[11px] flex items-center justify-center space-x-1.5"
                  >
                    <span>Analyze Document</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Live Dashboard Preview Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-md">
            
            <div className="w-full max-w-4xl max-h-[90vh] glass-panel bg-[#020617] border border-cyan-500/30 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-4 bg-[#020617] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className={`p-1.5 rounded-lg ${getAccentBg(selectedProject.accentColor)}`}>
                    <FolderGit2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <span className="font-mono text-[9px] text-cyan-400 tracking-wider block uppercase font-bold">[ BUSINESS INTELLIGENCE LAB ]</span>
                    <h3 className="font-display font-bold text-slate-100 text-sm sm:text-base leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-md bg-[#020617] text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Core Area: Scrollable */}
              <div className="p-4 sm:p-5 overflow-y-auto space-y-5 flex-grow text-left">
                
                {/* Meta summary */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-white/3 p-3 rounded-lg border border-white/5">
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase font-mono text-slate-500 block font-bold">Duration</span>
                    <span className="text-xs font-mono text-slate-200">{selectedProject.duration || "Self-Paced / 2026"}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] uppercase font-mono text-slate-500 block font-bold">Status</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">100% Production</span>
                  </div>
                  <div className="space-y-0.5 md:col-span-2">
                    <span className="text-[9px] uppercase font-mono text-slate-500 block font-bold">Analysis Stack</span>
                    <div className="flex flex-wrap gap-1 mt-0.5">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[#020617] border border-white/5 text-[9px] font-mono text-slate-300">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-xs text-slate-200 flex items-center gap-1.5 uppercase tracking-wide font-mono">
                    <Info className="w-3.5 h-3.5 text-cyan-400" /> Analytical Case Summary
                  </h4>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Live Simulated / Embed Viewer Sandbox */}
                <div className="space-y-3.5">
                  <h4 className="font-display font-bold text-xs text-slate-200 flex items-center gap-1.5 uppercase font-mono tracking-wider">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-purple-400" /> [ Interactive Analytics Sandbox ]
                  </h4>

                  {/* Swiggy Sales Dashboard Simulator */}
                  {selectedProject.title.includes("Swiggy") ? (
                    <div className="border-4 border-slate-900 rounded-2xl bg-[#ebf3f7] p-3 text-slate-800 text-[11px] font-sans selection:bg-sky-200 shadow-2xl relative overflow-hidden">
                      {/* Power BI Title Banner */}
                      <div className="bg-[#59b2e0] border-2 border-slate-800 rounded-lg py-2 px-4 shadow-[3px_3px_0px_rgba(0,0,0,1)] text-center mb-3 relative flex items-center justify-between">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-950" />
                        <h1 className="text-lg sm:text-xl font-serif font-black tracking-widest text-[#000000] uppercase select-none">
                          Swiggy Sales Dashboard
                        </h1>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-950" />
                      </div>

                      {/* Info Bar / Reset Button */}
                      <div className="flex justify-between items-center bg-white/70 border border-slate-300 rounded mb-3 px-2 py-1 text-[10px] font-mono">
                        <div className="flex gap-2">
                          <span className="text-slate-500">ACTIVE FILTERS:</span>
                          <span className="text-sky-700 font-bold">
                            Rest: {swiggySelRes} | Cui: {swiggySelCui} | City: {swiggySelLoc} | Pay: {swiggySelPay}
                          </span>
                        </div>
                        {(swiggySelRes !== "All" || swiggySelCui !== "All" || swiggySelLoc !== "All" || swiggySelPay !== "All") && (
                          <button
                            onClick={() => {
                              setSwiggySelRes("All");
                              setSwiggySelCui("All");
                              setSwiggySelLoc("All");
                              setSwiggySelPay("All");
                            }}
                            className="bg-red-500 hover:bg-red-650 text-white px-2 py-0.5 rounded font-bold cursor-pointer text-[9px] uppercase"
                          >
                            Reset Slicers
                          </button>
                        )}
                      </div>

                      {/* Main Power BI Center Work Grid */}
                      <div className="grid grid-cols-12 gap-3">
                        {/* LEFT & MIDDLE: Dashboard Charts Container (9 Cols) */}
                        <div className="col-span-12 lg:col-span-9 space-y-3">
                          
                          {/* Top Row: Sum of Final Amount Monthly Column, Order Count by Payment Ring, Sum of Final Amount by Restaurant Bar */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            
                            {/* Card 1: Month Column Chart */}
                            <div className="bg-white border border-slate-300 rounded p-2.5 shadow-[1px_1px_1px_rgba(0,0,0,0.05)] text-left flex flex-col justify-between">
                              <div>
                                <span className="font-sans text-[8px] text-slate-500 uppercase tracking-wide block font-bold mb-1">Sum of Final Amount (₹)</span>
                                <h4 className="text-[10px] font-bold text-slate-700">Total by Months</h4>
                              </div>
                              
                              {/* Custom SVG Column Chart with overlay linear trendline */}
                              <div className="h-[90px] w-full mt-2 relative flex items-end justify-around pb-3 border-b border-slate-200">
                                {/* January Column */}
                                <div className="flex flex-col items-center w-8">
                                  <span className="text-[8px] font-bold text-slate-600 mb-1">45.2k</span>
                                  <div 
                                    className={`w-4 bg-[#4ade80] rounded-t transition-all duration-300 ${swiggySelLoc === "Pune" ? "opacity-40" : "opacity-100"}`} 
                                    style={{ height: swiggySelCui === "All" ? "45px" : swiggySelCui === "Burgers" ? "15px" : "30px" }} 
                                  />
                                  <span className="text-[8px] text-slate-500 mt-1">Jan</span>
                                </div>
                                {/* February Column */}
                                <div className="flex flex-col items-center w-8">
                                  <span className="text-[8px] font-bold text-slate-600 mb-1">39.5k</span>
                                  <div 
                                    className={`w-4 bg-[#4ade80] rounded-t transition-all duration-300 ${swiggySelLoc === "Mumbai" ? "opacity-40" : "opacity-100"}`} 
                                    style={{ height: swiggySelCui === "All" ? "39px" : swiggySelCui === "Indian" ? "12px" : "27px" }} 
                                  />
                                  <span className="text-[8px] text-slate-500 mt-1">Feb</span>
                                </div>
                                {/* March Column */}
                                <div className="flex flex-col items-center w-8">
                                  <span className="text-[8px] font-bold text-slate-600 mb-1">52.8k</span>
                                  <div 
                                    className={`w-4 bg-[#4ade80] rounded-t transition-all duration-300`} 
                                    style={{ height: swiggySelCui === "All" ? "53px" : swiggySelCui === "Pizza" ? "40px" : "20px" }} 
                                  />
                                  <span className="text-[8px] text-slate-500 mt-1">Mar</span>
                                </div>

                                {/* Power BI Linear Trend dotted line */}
                                <svg className="absolute inset-x-0 bottom-3 h-[45px] w-full overflow-visible pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                  <line x1="16" y1="50" x2="84" y2="20" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3,3" />
                                </svg>
                              </div>
                              <span className="text-[6px] text-right font-mono text-slate-400 block mt-1">Order Date • Year 2023</span>
                            </div>

                            {/* Card 2: Payment Donut Ring Chart */}
                            <div className="bg-white border border-slate-300 rounded p-2.5 shadow-[1px_1px_1px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                              <div>
                                <span className="font-sans text-[8px] text-slate-500 uppercase tracking-wide block font-bold mb-1">Sum of Order Count</span>
                                <h4 className="text-[10px] font-bold text-slate-700">Total by Payment Mode</h4>
                              </div>

                              {/* Donut layout */}
                              <div className="flex items-center justify-around my-1 gap-1">
                                <div className="relative w-14 h-14">
                                  {/* Simple SVG Donut charts segment */}
                                  <svg className="w-full h-full rotate-[-95deg]" viewBox="0 0 36 36">
                                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#22d3ee" strokeWidth="3" strokeDasharray="22 78" strokeDashoffset="100" />
                                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#06b6d4" strokeWidth="3" strokeDasharray="26 74" strokeDashoffset="78" />
                                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#0ea5e9" strokeWidth="3" strokeDasharray="23 77" strokeDashoffset="52" />
                                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#0284c7" strokeWidth="3" strokeDasharray="29 71" strokeDashoffset="29" />
                                  </svg>
                                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-1 text-[9px] font-bold text-slate-600">
                                    <span>200</span>
                                  </div>
                                </div>
                                {/* Legend panel style */}
                                <div className="text-[7.5px] space-y-0.5 text-slate-500">
                                  <div className={`flex items-center gap-1 ${swiggySelPay === "Card" ? "bg-cyan-50 font-bold" : ""}`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                                    <span>Card (44)</span>
                                  </div>
                                  <div className={`flex items-center gap-1 ${swiggySelPay === "COD" ? "bg-cyan-50 font-bold" : ""}`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                                    <span>COD (52)</span>
                                  </div>
                                  <div className={`flex items-center gap-1 ${swiggySelPay === "UPI" ? "bg-cyan-50 font-bold" : ""}`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                                    <span>UPI (47)</span>
                                  </div>
                                  <div className={`flex items-center gap-1 ${swiggySelPay === "Wallet" ? "bg-cyan-50 font-bold" : ""}`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" />
                                    <span>Wallet (57)</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card 3: Restaurants Final Amount Horizontal Row bar */}
                            <div className="bg-white border border-slate-300 rounded p-2.5 shadow-[1px_1px_1px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                              <div>
                                <span className="font-sans text-[8px] text-slate-500 uppercase tracking-wide block font-bold mb-1">Sum of Final Amount (₹)</span>
                                <h4 className="text-[10px] font-bold text-slate-700">Total by Restaurants</h4>
                              </div>

                              <div className="space-y-1 block mt-1.5">
                                {[
                                  { name: "Burger King", val: 21218, barPct: 100 },
                                  { name: "Domino's", val: 19960, barPct: 94 },
                                  { name: "Cafe Coffee...", val: 18150, barPct: 85 },
                                  { name: "Biryani House", val: 17170, barPct: 80 },
                                  { name: "Pizza Hut", val: 13956, barPct: 65 }
                                ].map((res) => {
                                  const isSelected = swiggySelRes === "All" || res.name.includes(swiggySelRes);
                                  return (
                                    <div key={res.name} className={`text-[8px] transition-all duration-200 ${isSelected ? "opacity-100" : "opacity-30"}`}>
                                      <div className="flex justify-between font-mono leading-none mb-0.5 text-slate-600">
                                        <span>{res.name}</span>
                                        <span className="font-bold">₹{res.val.toLocaleString()}</span>
                                      </div>
                                      <div className="w-full h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
                                        <div className="bg-[#0ea5e9] h-full" style={{ width: `${res.barPct}%` }} />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                          </div>

                          {/* Bottom Row: Cuisine Type Pie, Cancel vs Deliver Column, Location Bar */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            
                            {/* Card 4: Cuisine Pie */}
                            <div className="bg-white border border-slate-300 rounded p-2.5 shadow-[1px_1px_1px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                              <div>
                                <span className="font-sans text-[8px] text-slate-500 uppercase tracking-wide block font-bold mb-1">Sum of Order Count</span>
                                <h4 className="text-[10px] font-bold text-slate-700">Cuisine Types Distribution</h4>
                              </div>

                              <div className="flex items-center justify-around my-1 gap-1">
                                <div className="relative w-14 h-14">
                                  {/* Simple solid segmented colored SVG represent pie */}
                                  <svg className="w-full h-full rotate-[-45deg]" viewBox="0 0 32 32">
                                    <circle r="16" cx="16" cy="16" fill="transparent" stroke="#14b8a6" strokeWidth="32" strokeDasharray="21 100" strokeDashoffset="0" />
                                    <circle r="16" cx="16" cy="16" fill="transparent" stroke="#0d9488" strokeWidth="32" strokeDasharray="18 100" strokeDashoffset="21" />
                                    <circle r="16" cx="16" cy="16" fill="transparent" stroke="#0f766e" strokeWidth="32" strokeDasharray="22 100" strokeDashoffset="39" />
                                    <circle r="16" cx="16" cy="16" fill="transparent" stroke="#115e59" strokeWidth="32" strokeDasharray="24 100" strokeDashoffset="61" />
                                    <circle r="16" cx="16" cy="16" fill="transparent" stroke="#134e4a" strokeWidth="32" strokeDasharray="15 100" strokeDashoffset="85" />
                                  </svg>
                                </div>
                                <div className="text-[7.5px] space-y-0.5 text-slate-500">
                                  <div className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-[#14b8a6] rounded-full" />
                                    <span>Burgers (32)</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-[#0d9488] rounded-full" />
                                    <span>Cafe (27)</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-[#0f766e] rounded-full" />
                                    <span>Chinese (33)</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-[#115e59] rounded-full" />
                                    <span>Indian (37)</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-[#134e4a] rounded-full" />
                                    <span>Pizza (38)</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Card 5: Deliver vs Cancel Columns */}
                            <div className="bg-white border border-slate-300 rounded p-2.5 shadow-[1px_1px_1px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                              <div>
                                <span className="font-sans text-[8px] text-slate-500 uppercase tracking-wide block font-bold mb-1">Sum of Order Count</span>
                                <h4 className="text-[10px] font-bold text-slate-700">Order Delivery Status</h4>
                              </div>

                              <div className="h-[80px] flex items-end justify-around pb-2 border-b border-slate-200 mt-2">
                                <div className="flex flex-col items-center w-12">
                                  <span className="text-[8px] font-extrabold text-[#e11d48]">112</span>
                                  <div className="w-6 bg-[#e11d48] rounded-t" style={{ height: "55px" }} />
                                  <span className="text-[7.5px] text-slate-500 mt-1 uppercase">Cancelled</span>
                                </div>
                                <div className="flex flex-col items-center w-12">
                                  <span className="text-[8px] font-extrabold text-[#059669]">88</span>
                                  <div className="w-6 bg-[#059669] rounded-t" style={{ height: "43px" }} />
                                  <span className="text-[7.5px] text-slate-500 mt-1 uppercase">Delivered</span>
                                </div>
                              </div>
                            </div>

                            {/* Card 6: Customer Location horizontal columns */}
                            <div className="bg-white border border-slate-300 rounded p-2.5 shadow-[1px_1px_1px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                              <div>
                                <span className="font-sans text-[8px] text-slate-500 uppercase tracking-wide block font-bold mb-1">Sum of Order Count</span>
                                <h4 className="text-[10px] font-bold text-slate-700">Customer Location Cities</h4>
                              </div>

                              <div className="space-y-1 block mt-1.5 flex flex-col justify-center">
                                {[
                                  { city: "Pune", val: 39, pct: 100 },
                                  { city: "Hyderabad", val: 37, pct: 94 },
                                  { city: "Mumbai", val: 34, pct: 87 },
                                  { city: "Delhi", val: 33, pct: 84 },
                                  { city: "Chennai", val: 33, pct: 84 },
                                  { city: "Bangalore", val: 24, pct: 60 }
                                ].map((loc) => {
                                  const isSelected = swiggySelLoc === "All" || loc.city === swiggySelLoc;
                                  return (
                                    <div key={loc.city} className={`text-[8px] transition-all duration-200 ${isSelected ? "opacity-100" : "opacity-30"}`}>
                                      <div className="flex justify-between font-mono leading-none mb-0.5 text-slate-600">
                                        <span>{loc.city}</span>
                                        <span className="font-bold">{loc.val}</span>
                                      </div>
                                      <div className="w-full h-1 bg-[#f1f5f9] rounded-full overflow-hidden">
                                        <div className="bg-[#10b981] h-full" style={{ width: `${loc.pct}%` }} />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                          </div>

                          {/* Order Date Interactive Slicer Strip */}
                          <div className="bg-white border border-slate-300 rounded p-2 text-left">
                            <span className="font-mono text-[8px] text-slate-400 uppercase font-bold tracking-widest block mb-1">Order Date timeline filter</span>
                            <div className="flex items-center justify-between text-[7px] text-slate-500 border-b border-slate-100 pb-1">
                              <span className="font-bold">ALL PERIODS</span>
                              <span>MONTHS 2023</span>
                            </div>
                            <div className="flex items-center justify-between gap-1 text-[8px] pt-1 select-none flex-wrap font-mono font-bold">
                              {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"].map((m) => (
                                <span 
                                  key={m} 
                                  className={`px-1 rounded border border-slate-100 text-center flex-grow transition-all cursor-pointer py-0.5 ${
                                    m === "JAN" || m === "FEB" || m === "MAR"
                                      ? "bg-[#59b2e0]/20 border-slate-400 text-slate-900" 
                                      : "bg-slate-50 text-slate-400 opacity-60"
                                  }`}
                                >
                                  {m}
                                </span>
                              ))}
                            </div>
                            <div className="mt-1 h-1 bg-slate-300 rounded relative">
                              <div className="absolute left-0 w-1/4 bg-[#59b2e0] h-full rounded" />
                              <div className="absolute left-0 -top-1 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-white" />
                              <div className="absolute left-[25%] -top-1 w-2.5 h-2.5 rounded-full bg-slate-800 border-2 border-white" />
                            </div>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Power BI Slicers Checkbox Panel (3 Cols) */}
                        <div className="col-span-12 lg:col-span-3 space-y-3 font-mono">
                          
                          {/* Slicer 1: Restaurant checklist */}
                          <div className="bg-white border border-slate-300 rounded p-2 shadow-sm text-left">
                            <div className="flex justify-between items-center border-b border-slate-200 pb-1 mb-1 text-[8px] font-bold text-slate-700">
                              <span>RESTAURANTS</span>
                              <SlidersHorizontal className="w-2.5 h-2.5 text-slate-400" />
                            </div>
                            <div className="space-y-0.5 max-h-[75px] overflow-y-auto pr-1">
                              {[
                                "Biryani House", "Burger King", "Cafe Coffee Day", "Domino's", "KFC", "McDonald's", "Pizza Hut"
                              ].map((res) => (
                                <label 
                                  key={res} 
                                  onClick={() => setSwiggySelRes(swiggySelRes === res ? "All" : res)}
                                  className={`flex items-center gap-1.5 px-1 py-0.5 hover:bg-slate-50 rounded cursor-pointer leading-[1] text-[8.5px] font-bold ${
                                    swiggySelRes === res ? "bg-sky-100 text-sky-900 font-extrabold" : "text-slate-600"
                                  }`}
                                >
                                  <input 
                                    type="checkbox" 
                                    readOnly
                                    checked={swiggySelRes === res} 
                                    className="w-2.5 h-2.5 text-sky-600 accent-sky-500 border-slate-300 rounded focus:ring-0" 
                                  />
                                  <span>{res}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Slicer 2: Cuisine checklist */}
                          <div className="bg-white border border-slate-300 rounded p-2 shadow-sm text-left">
                            <div className="flex justify-between items-center border-b border-slate-200 pb-1 mb-1 text-[8px] font-bold text-slate-700">
                              <span>CUISINES</span>
                              <SlidersHorizontal className="w-2.5 h-2.5 text-slate-400" />
                            </div>
                            <div className="space-y-0.5 max-h-[75px] overflow-y-auto pr-1">
                              {[
                                "Burgers", "Cafe", "Chinese", "Indian", "Pizza", "Snacks"
                              ].map((cui) => (
                                <label 
                                  key={cui} 
                                  onClick={() => setSwiggySelCui(swiggySelCui === cui ? "All" : cui)}
                                  className={`flex items-center gap-1.5 px-1 py-0.5 hover:bg-slate-50 rounded cursor-pointer leading-[1] text-[8.5px] font-bold ${
                                    swiggySelCui === cui ? "bg-sky-100 text-sky-950 font-extrabold" : "text-slate-600"
                                  }`}
                                >
                                  <input 
                                    type="checkbox" 
                                    readOnly
                                    checked={swiggySelCui === cui} 
                                    className="w-2.5 h-2.5 text-sky-600 accent-sky-500 border-slate-300 rounded focus:ring-0" 
                                  />
                                  <span>{cui}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Slicer 3: Customer checklist */}
                          <div className="bg-white border border-slate-300 rounded p-2 shadow-sm text-left">
                            <div className="flex justify-between items-center border-b border-slate-200 pb-1 mb-1 text-[8px] font-bold text-slate-700">
                              <span>CUSTOMER CITY</span>
                              <SlidersHorizontal className="w-2.5 h-2.5 text-slate-400" />
                            </div>
                            <div className="space-y-0.5 max-h-[75px] overflow-y-auto pr-1">
                              {[
                                "Bangalore", "Chennai", "Delhi", "Hyderabad", "Mumbai", "Pune"
                              ].map((city) => (
                                <label 
                                  key={city} 
                                  onClick={() => setSwiggySelLoc(swiggySelLoc === city ? "All" : city)}
                                  className={`flex items-center gap-1.5 px-1 py-0.5 hover:bg-slate-50 rounded cursor-pointer leading-[1] text-[8.5px] font-bold ${
                                    swiggySelLoc === city ? "bg-sky-100 text-sky-955 font-extrabold" : "text-slate-600"
                                  }`}
                                >
                                  <input 
                                    type="checkbox" 
                                    readOnly
                                    checked={swiggySelLoc === city} 
                                    className="w-2.5 h-2.5 text-sky-600 accent-sky-500 border-slate-300 rounded focus:ring-0" 
                                  />
                                  <span>{city}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          {/* Slicer 4: Payment checklist */}
                          <div className="bg-white border border-slate-300 rounded p-2 shadow-sm text-left">
                            <div className="flex justify-between items-center border-b border-slate-200 pb-1 mb-1 text-[8px] font-bold text-slate-700">
                              <span>PAYMENT MODE</span>
                              <SlidersHorizontal className="w-2.5 h-2.5 text-slate-400" />
                            </div>
                            <div className="space-y-0.5 max-h-[75px] overflow-y-auto pr-1">
                              {[
                                "Card", "COD", "UPI", "Wallet"
                              ].map((pay) => (
                                <label 
                                  key={pay} 
                                  onClick={() => setSwiggySelPay(swiggySelPay === pay ? "All" : pay)}
                                  className={`flex items-center gap-1.5 px-1 py-0.5 hover:bg-slate-50 rounded cursor-pointer leading-[1] text-[8.5px] font-bold ${
                                    swiggySelPay === pay ? "bg-sky-100 text-sky-955 font-extrabold" : "text-slate-600"
                                  }`}
                                >
                                  <input 
                                    type="checkbox" 
                                    readOnly
                                    checked={swiggySelPay === pay} 
                                    className="w-2.5 h-2.5 text-sky-600 accent-sky-500 border-slate-300 rounded focus:ring-0" 
                                  />
                                  <span>{pay}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                  ) : selectedProject.title.includes("Sales & Profit") ? (
                    /* High Fidelity Visual Emulator of "Sales & Profit Analysis Dashboard" Matching Image 2 */
                    <div className="border border-slate-300 rounded-2xl bg-[#ebf0f3] p-4 text-slate-800 text-[11px] font-sans selection:bg-teal-100 shadow-2xl relative overflow-hidden">
                      
                      {/* Dashboard Header Banner (image 2 banner style) */}
                      <div className="bg-white border border-slate-200 py-2.5 px-6 rounded-xl shadow-sm text-center mb-3 max-w-sm sm:max-w-md mx-auto">
                        <h1 className="text-slate-400 uppercase tracking-widest text-[8px] border-b border-slate-100 pb-0.5 font-mono font-bold leading-none">Power BI Executive Analytics Workspace</h1>
                        <h2 className="text-base sm:text-lg font-serif font-extrabold text-slate-900 tracking-tight select-none mt-1">
                          Sales & Profit Analysis Dashboard
                        </h2>
                      </div>

                      {/* Interactive Cross-Filtering Indicator */}
                      <div className="flex justify-between items-center bg-teal-800/10 border border-teal-800/20 px-3 py-1 rounded text-[10px] mb-3 text-slate-600 font-mono">
                        <div>
                          <span>CROSS-FILTER: </span>
                          <span className="text-teal-700 font-extrabold uppercase">Region: {retailRegion} | Category: {retailCategory}</span>
                        </div>
                        {(retailRegion !== "All" || retailCategory !== "All") && (
                          <button
                            onClick={() => {
                              setRetailRegion("All");
                              setRetailCategory("All");
                            }}
                            className="text-[9px] uppercase bg-teal-700 text-white font-bold px-2 py-0.5 rounded cursor-pointer leading-[1.3] shadow hover:bg-teal-850 transition"
                          >
                            Clear Cross-Filters
                          </button>
                        )}
                      </div>

                      {/* Top Row: 4 KPI Scorecards */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                        {/* KPI 1: Revenue */}
                        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
                          <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold block mb-0.5">Total Revenue</span>
                          <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight block">
                            {retailRegion === "All" && retailCategory === "All" ? "$63.72M" :
                             retailRegion === "West" ? "$16.03M" :
                             retailRegion === "East" ? "$14.31M" : 
                             retailCategory === "Technology" ? "$38.50M" : "$12.45M"}
                          </span>
                        </div>
                        {/* KPI 2: Total Profit */}
                        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
                          <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold block mb-0.5">Total Profit</span>
                          <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight block">
                            {retailRegion === "All" && retailCategory === "All" ? "$13.96M" :
                             retailRegion === "West" ? "$3.52M" :
                             retailRegion === "East" ? "$3.15M" :
                             retailCategory === "Technology" ? "$9.10M" : "$2.43M"}
                          </span>
                        </div>
                        {/* KPI 3: Profit Margin */}
                        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
                          <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold block mb-0.5">Profit Margin</span>
                          <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight block text-teal-600">
                            {retailRegion === "All" && retailCategory === "All" ? "21.91%" :
                             retailRegion === "Central" ? "19.50%" : "23.64%"}
                          </span>
                        </div>
                        {/* KPI 4: Total Orders */}
                        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
                          <span className="text-[8px] uppercase tracking-wider text-slate-500 font-bold block mb-0.5">Total Orders</span>
                          <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight block">
                            {retailRegion === "All" && retailCategory === "All" ? "50,000" :
                             retailRegion === "West" ? "12,500" : "8,200"}
                          </span>
                        </div>
                      </div>

                      {/* Main Charts area */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        {/* Region bar chart */}
                        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
                          <span className="font-mono text-[8px] text-slate-400 uppercase font-bold tracking-widest block mb-1.5">// SALES DISTRIBUTION</span>
                          <h4 className="text-[10px] font-bold text-slate-700 mb-2">Revenue by Region</h4>
                          <div className="space-y-2">
                            {[
                              { r: "West", rev: "$16.0M", pct: 100 },
                              { r: "East", rev: "$14.3M", pct: 89 },
                              { r: "North", rev: "$12.3M", pct: 77 },
                              { r: "South", rev: "$11.4M", pct: 71 },
                              { r: "Central", rev: "$9.7M", pct: 60 }
                            ].map((row) => {
                              const isClick = retailRegion === row.r;
                              return (
                                <div 
                                  key={row.r} 
                                  onClick={() => setRetailRegion(retailRegion === row.r ? "All" : row.r)}
                                  className={`group cursor-pointer transition-all duration-200 ${retailRegion === "All" || isClick ? "opacity-100" : "opacity-30"}`}
                                >
                                  <div className="flex justify-between font-mono text-[8.5px] text-slate-600 mb-0.5">
                                    <span className="font-bold group-hover:text-teal-600 transition-colors">{row.r}</span>
                                    <span>{row.rev}</span>
                                  </div>
                                  <div className="w-full h-2 bg-[#f1f5f9] rounded overflow-hidden">
                                    <div className="bg-[#618a8d] h-full rounded transition-all duration-500" style={{ width: `${row.pct}%` }} />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Category donut chart */}
                        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex flex-col justify-between">
                          <div>
                            <span className="font-mono text-[8px] text-slate-400 uppercase font-bold tracking-widest block mb-1.5">// CATEGORY SNAPSHOT</span>
                            <h4 className="text-[10px] font-bold text-slate-700">Sales by Category</h4>
                          </div>

                          <div className="flex items-center justify-around my-1.5 gap-1.5">
                            <div className="relative w-16 h-16">
                              <svg className="w-full h-full rotate-[-95deg]" viewBox="0 0 36 36">
                                <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#225a5c" strokeWidth="4.5" strokeDasharray="65 35" strokeDashoffset="100" />
                                <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#377678" strokeWidth="4.5" strokeDasharray="19 81" strokeDashoffset="35" />
                                <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#4c8a8d" strokeWidth="4.5" strokeDasharray="10 90" strokeDashoffset="16" />
                                <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#79aaad" strokeWidth="4.5" strokeDasharray="6 94" strokeDashoffset="6" />
                              </svg>
                              <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center m-1 bg-white rounded-full text-[7.5px] font-mono text-slate-400 font-bold">
                                <span>65.5% Tech</span>
                              </div>
                            </div>
                            <div className="text-[7.5px] space-y-0.5 text-slate-500 font-mono font-bold leading-normal">
                              {[
                                { cat: "Technology", val: "65.54%", c: "bg-[#225a5c]" },
                                { cat: "Electronics", val: "19.03%", c: "bg-[#377678]" },
                                { cat: "Furniture", val: "10.30%", c: "bg-[#4c8a8d]" },
                                { cat: "Office Supplies", val: "5.13%", c: "bg-[#79aaad]" }
                              ].map((item) => (
                                <div 
                                  key={item.cat} 
                                  onClick={() => setRetailCategory(retailCategory === item.cat ? "All" : item.cat)}
                                  className={`flex items-center gap-1 cursor-pointer p-0.5 rounded hover:bg-slate-50 ${
                                    retailCategory === item.cat ? "bg-teal-50 font-bold text-teal-800" : ""
                                  }`}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full ${item.c}`} />
                                  <span>{item.cat} ({item.val})</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Wide Bottom Monthly revenue trend line/area chart (from screenshot 2) */}
                      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="text-[10px] font-bold text-slate-700 font-sans">Monthly Revenue Trend (2023–2024)</h4>
                          <span className="font-mono text-[7px] text-slate-400 font-bold uppercase">Peak (July: $5.44M)</span>
                        </div>
                        {/* Shaded Area line chart */}
                        <div className="h-[75px] w-full relative mt-1.5">
                          <svg className="w-full h-full text-teal-800/20" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="retail-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4c8a8d" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#4c8a8d" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Wave representing Jan to Dec monthly values */}
                            <path
                              d="M 0 30 L 8 13 L 16 19 L 24 12 L 32 13 L 40 16 L 48 18 L 56 12 L 64 12 L 72 21 L 80 13 L 88 15 L 100 16 L 100 30 Z"
                              fill="url(#retail-grad)"
                              stroke="#377678"
                              strokeWidth="0.8"
                              className="transition-all duration-300"
                            />
                            {/* Small nodes */}
                            <circle cx="8" cy="13" r="1" fill="#225a5c" />
                            <circle cx="56" cy="12" r="1.2" fill="#e11d48" className="animate-pulse" /> {/* July Peak peak */}
                          </svg>
                          <div className="absolute inset-x-0 bottom-0 flex justify-between font-mono text-[6.5px] text-slate-400 font-bold pt-1 pointer-events-none">
                            <span>Jan ($5.37M)</span>
                            <span>Mar ($5.40)</span>
                            <span>May ($5.29)</span>
                            <span>July ($5.44)</span>
                            <span>Sep ($5.12)</span>
                            <span>Nov ($5.30)</span>
                            <span>Dec ($5.28)</span>
                          </div>
                        </div>
                      </div>

                      {/* Segments performance and Profit vs Sales */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-0.5">
                        {/* Segment performance table */}
                        <div className="bg-white border border-slate-200 rounded-xl p-2.5 shadow-sm">
                          <span className="font-mono text-[7px] text-slate-400 block font-bold mb-1">// SEGMENT MATRIX</span>
                          <span className="text-[9.5px] font-bold text-slate-700 block mb-1">Segment Performance metrics</span>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left font-mono text-[8px] leading-tight select-none">
                              <thead>
                                <tr className="border-b border-slate-100 text-[7px] text-slate-400">
                                  <th className="py-1">Segment</th>
                                  <th className="py-1 text-right">Revenue</th>
                                  <th className="py-1 text-right">Margin %</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-50 text-slate-600">
                                {[
                                  { s: "Consumer", r: "27.03M", m: "21.83%" },
                                  { s: "Corporate", r: "17.57M", m: "22.06%" },
                                  { s: "Small Business", r: "9.62M", m: "21.80%" },
                                  { s: "Home Office", r: "9.49M", m: "21.97%" }
                                ].map((row) => (
                                  <tr key={row.s} className="hover:bg-slate-50">
                                    <td className="py-1 font-bold text-slate-800">{row.s}</td>
                                    <td className="py-1 text-right">{row.r}</td>
                                    <td className="py-1 text-right text-teal-600 font-bold">{row.m}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Profit vs Sales (by category) bar chart */}
                        <div className="bg-white border border-slate-200 rounded-xl p-2.5 shadow-sm flex flex-col justify-between">
                          <div>
                            <span className="font-mono text-[7px] text-slate-400 block font-bold mb-1">// COMPARATIVE ANALYSIS</span>
                            <span className="text-[9.5px] font-bold text-slate-700 block">Profit vs Sales (by Category)</span>
                          </div>
                          
                          <div className="grid grid-cols-5 gap-1.5 h-[62px] items-end pb-1 border-b border-slate-150 mt-1">
                            {[
                              { c: "Tech", val: 56 },
                              { c: "Furn", val: 40 },
                              { c: "Elec", val: 32 },
                              { c: "Cloth", val: 24 },
                              { c: "Off-S", val: 18 }
                            ].map((bar) => (
                              <div key={bar.c} className="flex flex-col items-center">
                                <div className="bg-[#2a5b5e] w-2.5 rounded-t" style={{ height: `${bar.val}px` }} />
                                <span className="text-[6.5px] font-mono text-slate-500 mt-1">{bar.c}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  ) : selectedProject.title.includes("Netflix") ? (
                    <div className="border border-red-600/20 rounded-xl bg-[#000000] p-4 text-left space-y-4 shadow-[0_10px_30px_rgba(239,68,68,0.1)]">
                      {/* Controller Filters Pane */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 min-w-max">
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                          <span className="font-mono text-[10px] text-slate-300 font-bold uppercase tracking-wider">NETFLIX ENTERTAINMENT COMPONENT</span>
                        </div>
                        {/* Interactive Segment Buttons */}
                        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
                          {["All", "Movie", "TV Show"].map((type) => (
                            <button
                              key={type}
                              onClick={() => setNetflixType(type)}
                              className={`px-3 py-1 rounded font-mono text-[9px] sm:text-[10px] uppercase font-bold transition-all cursor-pointer ${
                                netflixType === type
                                  ? "bg-red-600 text-white shadow-lg"
                                  : "text-slate-405 hover:text-slate-200"
                              }`}
                            >
                              {type === "All" ? "All Content" : type === "Movie" ? "Movies" : "TV Shows"}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Scorecards Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-display">
                        {[
                          { label: "Total Show ID", value: netflixType === "All" ? "8,799" : netflixType === "Movie" ? "2,680" : "6,131" },
                          { label: "Total Ratings", value: netflixType === "All" ? "18" : netflixType === "Movie" ? "14" : "9" },
                          { label: "Genres", value: netflixType === "All" ? "514" : netflixType === "Movie" ? "312" : "202" },
                          { label: "Start Date", value: netflixType === "All" ? "1925" : netflixType === "Movie" ? "1942" : "1925" },
                          { label: "End Date", value: "2021" }
                        ].map((score, i) => (
                          <div key={i} className="bg-white/3 border border-white/5 rounded-lg p-2 flex flex-col justify-center text-center">
                            <span className="font-mono text-[8px] text-slate-400 uppercase tracking-wider block mb-0.5">{score.label}</span>
                            <span className="text-sm font-extrabold text-red-500 font-mono tracking-tight">{score.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Main Power BI Center Area */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        {/* Left column: Rating Chart */}
                        <div className="bg-white/3 border border-white/10 rounded-lg p-3 md:col-span-4 flex flex-col justify-between min-h-[160px]">
                          <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest font-semibold mb-2 block">Rating by Total Shows</span>
                          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
                            {[
                              { label: "TV-MA", value: netflixType === "All" ? 3207 : netflixType === "Movie" ? 950 : 2257, max: 3207 },
                              { label: "TV-14", value: netflixType === "All" ? 2150 : netflixType === "Movie" ? 610 : 1540, max: 3207 },
                              { label: "TV-PG", value: netflixType === "All" ? 863 : netflixType === "Movie" ? 210 : 653, max: 3207 },
                              { label: "R", value: netflixType === "All" ? 799 : netflixType === "Movie" ? 785 : 14, max: 3207 },
                              { label: "PG-13", value: netflixType === "All" ? 490 : netflixType === "Movie" ? 482 : 8, max: 3207 }
                            ].map((row, i) => {
                              const pct = Math.max(3, (row.value / row.max) * 100);
                              return (
                                <div key={i} className="text-[10px]">
                                  <div className="flex justify-between text-slate-400 font-mono text-[9px]">
                                    <span>{row.label}</span>
                                    <span className="text-red-400">{row.value.toLocaleString()}</span>
                                  </div>
                                  <div className="w-full h-1.5 bg-white/5 rounded-full mt-0.5 overflow-hidden">
                                    <div className="bg-red-600 h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Middle Column: Brand Poster, Movies & TV Shows Distribution */}
                        <div className="bg-gradient-to-b from-red-950/20 to-black border border-red-600/20 rounded-lg p-3 md:col-span-4 flex flex-col items-center justify-between text-center min-h-[160px] relative overflow-hidden group">
                          {/* Background shadow glow */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600/10 blur-[40px] rounded-full pointer-events-none" />
                          
                          <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block font-medium">// BRAND CLASSIFICATION</span>
                          
                          <div className="my-2 select-none">
                            <h1 className="text-3xl font-display font-black text-red-600 tracking-wider drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] hover:scale-105 transition-transform duration-300">
                              NETFLIX
                            </h1>
                            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.3em] block mt-1">Analytics Studio</span>
                          </div>

                          {/* Distribution breakdown */}
                          <div className="w-full bg-white/5 border border-white/5 rounded p-1.5 flex justify-around text-center text-[10px] font-mono mt-2 gap-1 z-10">
                            <div>
                              <span className="text-red-400 block font-bold text-[11px]">
                                {netflixType === "TV Show" ? "0.0%" : netflixType === "Movie" ? "100%" : "30.4%"}
                              </span>
                              <span className="text-slate-400 text-[8px] uppercase">Movie</span>
                            </div>
                            <div className="w-[1px] bg-white/10 self-stretch" />
                            <div>
                              <span className="text-red-500 block font-bold text-[11px]">
                                {netflixType === "Movie" ? "0.0%" : netflixType === "TV Show" ? "100%" : "69.6%"}
                              </span>
                              <span className="text-slate-400 text-[8px] uppercase">TV Show</span>
                            </div>
                          </div>
                        </div>

                        {/* Right column: Genres Chart */}
                        <div className="bg-white/3 border border-white/10 rounded-lg p-3 md:col-span-4 flex flex-col justify-between min-h-[160px]">
                          <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest font-semibold mb-2 block">Genres by Total Shows</span>
                          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
                            {[
                              { label: "Dramas", value: netflixType === "All" ? 4210 : netflixType === "Movie" ? 3210 : 1000, max: 4210 },
                              { label: "Documentaries", value: netflixType === "All" ? 3150 : netflixType === "Movie" ? 3020 : 130, max: 4210 },
                              { label: "Comedies", value: netflixType === "All" ? 1280 : netflixType === "Movie" ? 920 : 360, max: 4210 },
                              { label: "Stand-Up", value: netflixType === "All" ? 1490 : netflixType === "Movie" ? 1090 : 400, max: 4210 },
                              { label: "Kids' TV", value: netflixType === "All" ? 840 : netflixType === "Movie" ? 0 : 840, max: 4210 }
                            ].map((row, i) => {
                              const pct = Math.max(3, (row.value / row.max) * 100);
                              return (
                                <div key={i} className="text-[10px]">
                                  <div className="flex justify-between text-slate-400 font-mono text-[9px]">
                                    <span>{row.label}</span>
                                    <span className="text-red-400">{row.value.toLocaleString()}</span>
                                  </div>
                                  <div className="w-full h-1.5 bg-white/5 rounded-full mt-0.5 overflow-hidden">
                                    <div className="bg-red-500 h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Bottom row: Release Year trend area chart & countries list */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-1">
                        {/* Left map list */}
                        <div className="bg-white/3 border border-white/10 rounded-lg p-3 md:col-span-5 text-[10px]">
                          <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest font-semibold mb-2 block">Top Countries by Volume</span>
                          <div className="space-y-1.5">
                            {[
                              { country: "United States", volume: netflixType === "All" ? "3,695" : netflixType === "Movie" ? "2,010" : "1,685", share: "42.0%" },
                              { country: "India", volume: netflixType === "All" ? "972" : netflixType === "Movie" ? "890" : "82", share: "11.0%" },
                              { country: "United Kingdom", volume: netflixType === "All" ? "724" : netflixType === "Movie" ? "220" : "504", share: "8.2%" },
                              { country: "Canada", volume: netflixType === "All" ? "421" : netflixType === "Movie" ? "180" : "241", share: "4.8%" }
                            ].map((c, idx) => (
                              <div key={idx} className="flex items-center justify-between font-mono text-[9px] border-b border-white/5 pb-1">
                                <span className="text-slate-300 font-medium">{c.country}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-red-400 font-bold">{c.volume}</span>
                                  <span className="text-[8px] bg-red-950/45 text-red-500 px-1 py-0.5 rounded">{c.share}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Area trend chart */}
                        <div className="bg-white/3 border border-white/10 rounded-lg p-3 md:col-span-7 flex flex-col justify-between">
                          <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest font-semibold mb-1 block">Total Shows by Release Years</span>
                          {/* Rich area SVG */}
                          <div className="h-[90px] w-full mt-2 relative">
                            <svg className="w-full h-full text-red-600" viewBox="0 0 100 30" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>
                              {/* Glowing path */}
                              <path
                                d={
                                  netflixType === "Movie"
                                    ? "M 0 30 L 10 28 L 30 25 L 50 18 L 70 8 L 85 5 L 100 20 L 100 30 Z"
                                    : netflixType === "TV Show"
                                    ? "M 0 30 L 10 29 L 30 27 L 50 25 L 70 12 L 85 2 L 100 10 L 100 30 Z"
                                    : "M 0 30 L 10 28 L 30 25 L 50 15 L 70 6 L 85 1 L 100 12 L 100 30 Z"
                                }
                                fill="url(#area-grad)"
                                stroke="#ef4444"
                                strokeWidth="0.8"
                                className="transition-all duration-300"
                              />
                            </svg>
                            {/* Year labels block */}
                            <div className="absolute inset-x-0 bottom-0 flex justify-between font-mono text-[7px] text-slate-500 pt-1 pointer-events-none">
                              <span>Start Year 1925</span>
                              <span>2000</span>
                              <span>2015</span>
                              <span>Peak (2018-2020)</span>
                              <span>2021</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  ) : selectedProject.projectImage ? (
                    // E-Commerce project or any other project with a dedicated image
                    <div className="border border-white/10 rounded-xl overflow-hidden bg-[#020617] p-2 flex flex-col items-center w-full">
                      <div className="w-full min-h-[300px] sm:min-h-[400px] max-h-[60vh] rounded-lg overflow-hidden relative group flex items-center justify-center bg-slate-950/60 p-2 border border-white/5">
                        <img
                          src={selectedProject.projectImage}
                          alt={selectedProject.title}
                          className="max-h-[450px] w-auto h-auto object-contain transition-all duration-300 rounded"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-slate-950/95 backdrop-blur-sm border-t border-white/10 p-3 flex justify-between items-center text-[11px] font-mono">
                          <span className="text-slate-300 font-medium">✨ Analytical Intelligence Preview Block</span>
                          <a
                            href={selectedProject.projectImage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 font-bold transition-colors"
                          >
                            <span>Open Image in New Tab</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Other projects that have direct PDF docs: e.g. Sales & Profit or Netflix Dashboard PDF
                    <div className="border border-white/5 rounded-lg bg-white/3 p-4 flex flex-col items-center justify-center min-h-[140px] text-center space-y-3">
                      <BarChart3 className="w-10 h-10 text-cyan-400 animate-pulse" />
                      <div className="space-y-0.5">
                        <p className="text-slate-250 text-xs font-semibold">Official BI Analytical Report Configured</p>
                        <p className="text-slate-500 text-[11px] font-light max-w-md mx-auto">
                          Review structured workbook summaries, queries logic, data cleaning records, and KPIs in the official project document.
                        </p>
                      </div>

                      <div className="flex gap-2">
                        {selectedProject.projectLink && (
                          <a
                            href={selectedProject.projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wide flex items-center space-x-1"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Launch BI Dashboard Sheet</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Modal Actions Footer */}
              <div className="p-3 bg-[#020617] border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#8b5cf6] uppercase tracking-widest block">// SECURED VIA PORTFOLIO CORE</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-1.5 rounded bg-[#020617] border border-white/10 text-slate-300 hover:text-slate-100 transition-colors text-[11px] font-bold"
                >
                  Close Laboratory
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
