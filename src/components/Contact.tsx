import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, FileDown, Copy, Check, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { motion } from "motion/react";

interface SavedInquiry {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate database pipeline delay
    setTimeout(() => {
      const records: SavedInquiry[] = JSON.parse(localStorage.getItem("portfolio_inquiries") || "[]");
      const newInquiry: SavedInquiry = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      records.push(newInquiry);
      localStorage.setItem("portfolio_inquiries", JSON.stringify(records));

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-1.5">
          <div className="inline-flex items-center space-x-2">
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-purple-400">// COMMUNICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-slate-400 text-xs max-w-sm mx-auto font-light mt-1 text-center">
            Send a message or connect directly. Let's transform raw numbers into strategic growth.
          </p>
          <motion.div
            initial={{ width: "16px", opacity: 0.4 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-[2.5px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-2 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-3">
            
            <h3 className="text-base font-display font-bold text-slate-100 text-left mb-4 flex items-center space-x-2">
              <span>Direct Link Coordinates</span>
            </h3>

            {/* Email card with integrated Copy clipboard helper */}
            <div className="p-3.5 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-500/30 active:scale-[0.99] transition-all flex items-center justify-between group">
              <div className="flex items-center space-x-3.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block font-bold">EMAIL ADDRESS</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 text-xs font-semibold hover:text-cyan-400 hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-md bg-[#020617] border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* LinkedIn Connection Card */}
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-500/30 active:scale-[0.99] transition-all flex items-center space-x-3.5 group text-left block"
            >
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block font-bold">LINKEDIN PROFILE</span>
                <span className="text-slate-200 text-xs font-semibold group-hover:text-cyan-350 transition-colors">
                  LinkedIn
                </span>
              </div>
            </a>

            {/* Github Connection Card */}
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-500/30 active:scale-[0.99] transition-all flex items-center space-x-3.5 group text-left block"
            >
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block font-bold">GITHUB REPOSITORIES</span>
                <span className="text-slate-200 text-xs font-semibold group-hover:text-cyan-350 transition-colors">
                  GitHub
                </span>
              </div>
            </a>

            {/* Location Coordinate Card */}
            <div className="p-3.5 rounded-xl bg-white/3 border border-white/5 flex items-center space-x-3.5 text-left">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block font-bold">OFFICE CO-ORDINATE</span>
                <span className="text-slate-200 text-xs font-semibold">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Large Dedicated Resume download trigger */}
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 text-cyan-300 hover:text-slate-100 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider group"
              >
                <FileDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-cyan-400" />
                <span>Download Analyst Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7">
            
            <div className="p-5 sm:p-6 rounded-xl border border-white/10 bg-white/3 backdrop-blur-md relative">
              
              {/* Highlight corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-transparent blur-md pointer-events-none" />

              {!isSuccess ? (
                // Clean Inquiry Form
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="text-left space-y-1">
                    <label className="font-mono text-[9px] uppercase text-slate-400 tracking-wider font-bold">
                      Your Identity / Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Recruiters, Hiring Managers, Founders"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-[#020617] border border-white/10 rounded-lg text-slate-100 text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans transition-colors"
                    />
                  </div>

                  <div className="text-left space-y-1">
                    <label className="font-mono text-[9px] uppercase text-slate-400 tracking-wider font-bold">
                      Your Connection Channel / Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-[#020617] border border-white/10 rounded-lg text-slate-100 text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans transition-colors"
                    />
                  </div>

                  <div className="text-left space-y-1">
                    <label className="font-mono text-[9px] uppercase text-slate-400 tracking-wider font-bold">
                      Analytical Proposal / Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your job opening, team coordinates, or desired dashboard specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 bg-[#020617] border border-white/10 rounded-lg text-slate-100 text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans leading-relaxed transition-colors resize-none"
                    />
                  </div>

                  {/* Submission row */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold uppercase tracking-wider text-xs duration-300 transition-all flex items-center justify-center space-x-1.5 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                          <span>Routing message packets...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-slate-950" />
                          <span>Transmit Proposal</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                // Success diagnostic ticket view
                <div className="p-4 text-center space-y-4 animate-fade-in text-left">
                  <div className="flex justify-center">
                    <div className="p-2.5 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-center">
                    <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase">[ Packet transmission successful ]</span>
                    <h4 className="font-display font-extrabold text-slate-100 text-sm sm:text-base">
                      Proposal Dispatched Successfully!
                    </h4>
                    <p className="text-slate-400 text-xs max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Your message log has been buffered in the local database queue and mock-routed to GM Vinay Kumar.
                    </p>
                  </div>

                  {/* Local Diagnostic Receipt Card */}
                  <div className="p-3.5 rounded-lg bg-[#020617] border border-white/5 text-left space-y-1.5 text-xs font-mono">
                    <div className="text-slate-500 flex justify-between">
                      <span>PACKET METRICS:</span>
                      <span className="text-cyan-400 font-bold">[ LOCAL DB SECURE ]</span>
                    </div>
                    <div className="h-[1px] bg-white/5 w-full" />
                    <div>
                      <span className="text-slate-450 block font-bold">TRANSMISSION TIMESTAMP:</span>
                      <span className="text-slate-300 block">{new Date().toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-slate-450 block font-bold">DESTINATION COORDINATE:</span>
                      <span className="text-slate-300 block">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-4 py-2 rounded-lg bg-[#020617] border border-white/10 text-slate-300 hover:text-slate-100 text-[10px] uppercase tracking-wider font-mono hover:border-cyan-500/30 transition-all cursor-pointer"
                    >
                      [ Transmit new packet ]
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
