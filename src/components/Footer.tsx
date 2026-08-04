import React from 'react';
import { GraduationCap, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-[10px] font-mono text-[#06B6D4] font-bold uppercase tracking-widest">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-[#94A3B8] text-xs leading-relaxed max-w-md">
              HNDIT Graduate from SLIATE. Passionate software developer specializing in mobile POS applications, full-stack web solutions, and normalized database management systems.
            </p>
          </div>

          {/* Quick Contact Info */}
          <div className="md:col-span-4 space-y-3 text-xs text-slate-300">
            <p className="font-mono font-bold text-[#94A3B8] uppercase tracking-widest text-[10px] mb-2">
              Direct Contact
            </p>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#2563EB]" />
              <span className="text-[#64748B] text-xs">Email:</span>
              <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-[#2563EB] transition-colors font-medium text-xs">
                {personalInfo.email}
              </a>
            </div>

            

            <p className="text-[#64748B] text-xs mt-2">
              Location: <span className="text-white font-medium">{personalInfo.location}</span>
            </p>
          </div>

          {/* Scroll to Top Button */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-slate-800 hover:bg-[#2563EB] text-white border border-slate-700 hover:border-[#2563EB] transition-all duration-300 group cursor-pointer"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Designed with Editorial Aesthetic & precision
          </p>
        </div>

      </div>
    </footer>
  );
};

