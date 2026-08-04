import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Github, Check, ArrowRight, Laptop, Smartphone, Database } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

const projectVisualIcons: Record<string, React.ReactNode> = {
  'pos-system': <Smartphone className="w-6 h-6 text-[#2563EB]" />,
  'cosmetics-ecommerce': <Laptop className="w-6 h-6 text-[#06B6D4]" />,
  'library-system': <Database className="w-6 h-6 text-[#2563EB]" />
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#2563EB] text-[10px] font-bold uppercase tracking-widest mb-4 shadow-2xs"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Portfolio & Engineering Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tighter"
          >
            Featured Projects
          </motion.h2>

          <p className="text-[#64748B] text-sm sm:text-base mt-3 font-medium">
            Key software applications designed and developed during my IT graduate program
          </p>
        </div>

        {/* Project Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#F8FAFC] rounded-[2rem] border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#2563EB] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              
              {/* Card Header Illustration Visual */}
              <div className="p-8 bg-[#0F172A] text-white relative overflow-hidden flex flex-col justify-between min-h-[180px]">
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-[#06B6D4] text-[10px] font-mono font-bold uppercase tracking-wider border border-blue-400/30">
                    {project.category}
                  </span>

                  <div className="p-3 rounded-2xl bg-slate-800 text-white">
                    {projectVisualIcons[project.id] || <Code className="w-5 h-5" />}
                  </div>
                </div>

                <div className="z-10 mt-4">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight leading-snug group-hover:text-[#06B6D4] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Description */}
                <p className="text-[#64748B] text-xs leading-relaxed">
                  {project.description}
                </p>

                {/* Key Feature Bullets */}
                <div className="space-y-2 pt-4 border-t border-[#E2E8F0]">
                  <p className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest">
                    Core Capabilities
                  </p>
                  {project.features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#0F172A] font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#0F172A] text-[10px] font-mono font-bold shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-black text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-2xs transition-all duration-200 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white hover:bg-[#F1F5F9] text-[#0F172A] font-semibold border border-[#E2E8F0] shadow-2xs transition-colors"
                      title="View GitHub Repository"
                      aria-label="GitHub Repo"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};

