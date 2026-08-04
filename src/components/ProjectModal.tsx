import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-white rounded-[2.5rem] border border-[#E2E8F0] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          
          {/* Top Bar Header */}
          <div className="p-6 sm:p-8 bg-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-[#06B6D4] text-[10px] font-mono font-bold uppercase tracking-widest border border-blue-400/30">
                {project.category}
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight text-white mt-2">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-[#0F172A]">
            
            {/* Subtitle / Highlight */}
            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <p className="text-xs font-semibold text-[#0F172A]">
                {project.subtitle}
              </p>
            </div>

            {/* Comprehensive Description */}
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#94A3B8] mb-2">
                Overview & Impact
              </h4>
              <p className="text-[#64748B] text-xs leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features Grid */}
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#94A3B8] mb-3">
                Key System Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0F172A]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.systemArchitecture && (
              <div>
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#94A3B8] mb-2">
                  System Architecture
                </h4>
                <p className="text-xs text-[#64748B] bg-blue-50/60 p-4 rounded-2xl border border-blue-100 leading-relaxed font-medium">
                  {project.systemArchitecture}
                </p>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#94A3B8] mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-[#0F172A] text-white text-[10px] font-mono font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action Bar */}
          <div className="p-6 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
            <div className="text-[10px] font-mono text-[#94A3B8] uppercase font-bold tracking-widest">
              Verified Academic Engineering Build
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#0F172A] hover:bg-black text-white font-semibold text-xs flex items-center gap-2 shadow-2xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-full bg-white hover:bg-[#F1F5F9] text-[#0F172A] font-semibold text-xs border border-[#E2E8F0] transition-colors cursor-pointer"
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

