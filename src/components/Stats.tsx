import React from 'react';
import { motion } from 'motion/react';
import { Code, GraduationCap, Layers, Briefcase } from 'lucide-react';
import { quickStats } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  FaCode: <Code className="w-5 h-5 text-[#2563EB]" />,
  FaGraduationCap: <GraduationCap className="w-5 h-5 text-[#2563EB]" />,
  FaLayerGroup: <Layers className="w-5 h-5 text-[#06B6D4]" />,
  FaBriefcase: <Briefcase className="w-5 h-5 text-[#2563EB]" />
};

export const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-[#E2E8F0] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:bg-white hover:shadow-md transition-all duration-300 group flex items-start justify-between"
            >
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tighter mb-1 group-hover:text-[#2563EB] transition-colors">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-[11px] font-medium text-[#64748B] mt-0.5">
                  {stat.sublabel}
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-300">
                {iconMap[stat.iconName] || <Code className="w-5 h-5 text-[#2563EB]" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

