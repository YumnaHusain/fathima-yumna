import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Rocket, MessageSquare, Users, GraduationCap, Check } from 'lucide-react';
import { personalInfo, strengthCards } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  FaLightbulb: <Lightbulb className="w-5 h-5 text-[#2563EB]" />,
  FaRocket: <Rocket className="w-5 h-5 text-[#2563EB]" />,
  FaComments: <MessageSquare className="w-5 h-5 text-[#06B6D4]" />,
  FaUsers: <Users className="w-5 h-5 text-[#2563EB]" />
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#2563EB] text-[10px] font-bold uppercase tracking-widest mb-4 shadow-2xs"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tighter"
          >
            About Fathima
          </motion.h2>

          <p className="text-sm text-[#64748B] mt-3 font-medium">
            IT Graduate with a focus on Software Development & Database Administration
          </p>
        </div>

        {/* Narrative & Highlights Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-[#64748B] text-sm sm:text-base leading-relaxed bg-white p-8 sm:p-10 rounded-[2rem] border border-[#E2E8F0] shadow-xs flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4 border-b border-[#F1F5F9] pb-4 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                Passion for Technology & Software Development
              </h3>

              <div className="space-y-4 text-[#475569] text-sm leading-relaxed">
                {personalInfo.aboutStory.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F1F5F9] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#0F172A] mt-6">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>SLIATE Higher National Diploma (HNDIT)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Hands-on Systems Architecture</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Database Administration & Queries</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Ready for IT & Developer Internships</span>
              </div>
            </div>
          </motion.div>

          {/* Right Highlight Bento Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-[#0F172A] text-white p-8 sm:p-10 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10 space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-blue-500/20 text-[#06B6D4] text-[10px] font-bold uppercase tracking-widest border border-blue-400/30">
                At A Glance
              </div>

              <h4 className="text-2xl font-extrabold text-white tracking-tight leading-snug">
                Empowering Digital Innovation through Code
              </h4>

              <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
                Dedicated to clean code standards, normalized database designs, and intuitive user experiences for real-world application needs.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#1E293B] border border-[#334155] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#64748B]">Academic Background</p>
                    <p className="text-sm font-bold text-white mt-0.5">HNDIT @ SLIATE</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#06B6D4]">2023 - 2026</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#1E293B] border border-[#334155] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#64748B]">Primary Focus</p>
                    <p className="text-sm font-bold text-white mt-0.5">Full-Stack & DB Engineering</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">Active</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Personal Strengths Section Header */}
        <div className="mb-8 text-center sm:text-left flex items-baseline justify-between border-b border-[#E2E8F0] pb-4">
          <div>
            <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
              Personal Strengths
            </h3>
            <p className="text-xs text-[#64748B] mt-1">
              Core attributes that drive my daily learning and collaborative success
            </p>
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-[#2563EB]">
            04 KEY ATTRIBUTES
          </span>
        </div>

        {/* 4 Strength Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengthCards.map((strength, index) => (
            <motion.div
              key={strength.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-[2rem] bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-50 transition-all duration-300">
                    {iconMap[strength.iconName] || <Lightbulb className="w-5 h-5 text-[#2563EB]" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#2563EB]">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {strength.title}
                </h4>

                <p className="text-[#64748B] text-xs leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

