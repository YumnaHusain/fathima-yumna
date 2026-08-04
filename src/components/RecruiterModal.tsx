import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Copy, 
  Check, 
  Printer,
  FileText
} from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copySummaryText = () => {
    const text = `
FATHIMA YUMNA - Candidate Profile Summary
Title: IT Graduate | Software Developer
Email: ${personalInfo.email}
Phone/WhatsApp: ${personalInfo.phone}
Location: ${personalInfo.location}
Qualification: Higher National Diploma in Information Technology (HNDIT) - SLIATE (2023 - 2026)

Key Projects:
1. Mobile-Based Point of Sale System (Flask, MySQL, JS)
2. Cosmetics E-Commerce Platform (PHP, MySQL, JS)
3. Library Management System (SQL, Database System)

Status: ${personalInfo.status}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F172A]/70 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white rounded-[2.5rem] border border-[#E2E8F0] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center text-lg">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#06B6D4] font-mono font-bold uppercase tracking-widest">
                  RECRUITER QUICK SNAPSHOT
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Fathima Yumna - Candidate One-Pager
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Printable Candidate Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-[#0F172A]">
            
            {/* Top Candidate Banner */}
            <div className="p-6 rounded-[2rem] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-200">
                  OPEN FOR INTERNSHIP
                </span>
                <h4 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                  Fathima Yumna
                </h4>
                <p className="text-xs font-semibold text-[#2563EB]">
                  {personalInfo.title}
                </p>
              </div>

              <div className="space-y-1 text-xs text-[#64748B] font-medium">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Candidate Executive Summary */}
            <div>
              <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#94A3B8] mb-2">
                Executive Candidate Summary
              </h5>
              <p className="text-[#64748B] text-xs leading-relaxed bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
                {personalInfo.heroSummary}
              </p>
            </div>

            {/* Qualifications & Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Education Highlight */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold text-xs">
                  <GraduationCap className="w-4 h-4 text-[#2563EB]" />
                  <span>Education & Credentials</span>
                </div>
                
                <div className="space-y-1.5 text-xs">
                  <p className="font-extrabold text-[#0F172A]">
                    Higher National Diploma in Information Technology (HNDIT)
                  </p>
                  <p className="text-[#64748B] font-medium">
                    SLIATE - ATI Anuradhapura (2023 - 2026)
                  </p>
                  <p className="text-[#94A3B8] text-[11px]">
                    Software Development, Database Management, Networking, Cybersecurity, System Analysis.
                  </p>
                </div>
              </div>

              {/* Projects Highlight */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold text-xs">
                  <FileText className="w-4 h-4 text-[#2563EB]" />
                  <span>Verified Projects</span>
                </div>
                
                <div className="space-y-2 text-xs">
                  {projectsData.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="font-bold text-[#0F172A] text-xs">{p.title}</span>
                      <span className="text-[9px] font-mono text-[#2563EB] font-bold">{p.category}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Core Stack */}
            <div>
              <h5 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#94A3B8] mb-2">
                Tech Stack Summary
              </h5>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {["Python", "Flask", "MySQL", "PHP", "JavaScript", "HTML5", "CSS3", "Git/GitHub", "Database Design", "REST APIs", "Android Studio"].map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full bg-[#0F172A] text-white text-[10px] font-mono font-bold">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Toolbar */}
          <div className="p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={copySummaryText}
              className="px-4 py-2.5 rounded-full bg-[#0F172A] hover:bg-black text-white font-semibold text-xs flex items-center gap-2 shadow-2xs transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Snapshot!' : 'Copy Profile Summary'}</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-full bg-white hover:bg-[#F1F5F9] text-[#0F172A] font-semibold text-xs border border-[#E2E8F0] flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Profile</span>
              </button>
              
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

