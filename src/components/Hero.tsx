import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  FileText,
  GraduationCap,
  Zap,
  Lightbulb,
  Code,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenRecruiterModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterModal }) => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Editorial Hero Main Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Mono Eyebrow */}
              <p className="text-[#2563EB] font-mono text-xs mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
                Hello, I'm
              </p>

              {/* High Contrast Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-tighter text-[#0F172A] mb-6">
                Fathima <br />
                <span className="text-[#0F172A]">Yumna</span>
              </h1>

              {/* Editorial Subtitle */}
              <h2 className="text-lg sm:text-xl text-[#64748B] font-medium mb-6 leading-relaxed max-w-md">
                IT Graduate & <span className="text-[#0F172A] font-bold">Software Developer</span> passionate about database management and efficient digital systems.
              </h2>

              {/* Bio Summary */}
              <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-8 max-w-md">
                {personalInfo.heroSummary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <button
                  onClick={() => handleScrollTo('projects')}
                  className="px-7 py-3.5 bg-[#0F172A] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-2xl hover:bg-black transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleScrollTo('contact')}
                  className="px-6 py-3.5 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#F1F5F9] transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <span>Contact Me</span>
                </button>

                <button
                  onClick={onOpenRecruiterModal}
                  className="px-5 py-3.5 bg-blue-50/80 border border-blue-200/80 text-[#2563EB] rounded-xl text-xs sm:text-sm font-semibold hover:bg-blue-100/80 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Profile Summary</span>
                </button>
              </div>
            </div>

            {/* Editorial Highlight Feature Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0]">
              <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <Lightbulb className="w-5 h-5 text-[#2563EB]" />
                  <span className="text-xs font-mono font-bold text-[#2563EB]">01</span>
                </div>
                <h4 className="text-sm font-bold text-[#0F172A]">Problem Solver</h4>
                <p className="text-[11px] text-[#64748B] mt-1 leading-snug">Analytical thinking with practical execution.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <Zap className="w-5 h-5 text-[#06B6D4]" />
                  <span className="text-xs font-mono font-bold text-[#06B6D4]">02</span>
                </div>
                <h4 className="text-sm font-bold text-[#0F172A]">Fast Learner</h4>
                <p className="text-[11px] text-[#64748B] mt-1 leading-snug">Adapting quickly to software tools.</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 2x2 Bento Grid matching Editorial Design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Card 1: Education Dark Bento Block */}
            <div className="bg-[#0F172A] p-6 rounded-[2rem] text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl pointer-events-none"></div>

              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">
                  Education & Degree
                </span>
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-[#2563EB]">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 inline-block mb-3">
                  GRADUATE 2026
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight mb-1 text-white">
                  HND in IT
                </h3>
                <p className="text-xs text-[#94A3B8] font-medium">
                  SLIATE - ATI Anuradhapura
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  <span className="text-[9px] font-mono border border-[#334155] text-slate-300 px-2.5 py-1 rounded-full bg-slate-800/50">
                    MySQL & SQL
                  </span>
                  <span className="text-[9px] font-mono border border-[#334155] text-slate-300 px-2.5 py-1 rounded-full bg-slate-800/50">
                    Python & Flask
                  </span>
                  <span className="text-[9px] font-mono border border-[#334155] text-slate-300 px-2.5 py-1 rounded-full bg-slate-800/50">
                    PHP & Web
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Featured Project Bento Block */}
            <div 
              onClick={() => handleScrollTo('projects')}
              className="bg-white p-6 rounded-[2rem] border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">
                    Featured Project
                  </span>
                  <div className="w-9 h-9 bg-blue-50 flex items-center justify-center rounded-xl text-[#2563EB] group-hover:scale-110 transition-transform">
                    <Code className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mt-2 group-hover:text-[#2563EB] transition-colors">
                  Mobile POS System
                </h3>
                <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                  SME Point of Sale System built with Python, Flask & MySQL. Real-time billing & receipts.
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[#F1F5F9] mt-6">
                <span className="text-[10px] font-mono text-[#64748B]">Fullstack Mobile App</span>
                <ArrowRight className="w-4 h-4 text-[#2563EB] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Technical Competency Bars */}
            <div className="bg-white p-6 rounded-[2rem] border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-4 block">
                Technical Stack Overview
              </span>

              <div className="space-y-3.5">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0F172A] mb-1">
                    <span>Python & Flask</span>
                    <span className="text-[10px] font-mono text-[#64748B]">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-[#2563EB] h-full w-[85%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0F172A] mb-1">
                    <span>Database (MySQL)</span>
                    <span className="text-[10px] font-mono text-[#64748B]">90%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-[#06B6D4] h-full w-[90%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0F172A] mb-1">
                    <span>PHP & Web Dev</span>
                    <span className="text-[10px] font-mono text-[#64748B]">75%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-[#2563EB] h-full w-[75%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0F172A] mb-1">
                    <span>System Analysis</span>
                    <span className="text-[10px] font-mono text-[#64748B]">80%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-[#06B6D4] h-full w-[80%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Quick Contact Block */}
            <div className="bg-white p-6 rounded-[2rem] border border-[#E2E8F0] shadow-xs flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-[#F1F5F9] rounded-full pointer-events-none"></div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#64748B] mb-4 block">
                  Quick Contact
                </span>

                <div className="space-y-3 z-10 relative">
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="flex items-center space-x-3 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-[#0F172A] truncate">
                      {personalInfo.email}
                    </span>
                  </a>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-[#06B6D4]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-[#0F172A]">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => handleScrollTo('contact')}
                className="mt-6 flex items-center justify-center h-10 w-full border border-dashed border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#94A3B8] transition-colors"
              >
                Let's talk →
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

