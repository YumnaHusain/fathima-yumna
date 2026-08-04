import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#2563EB] text-[10px] font-bold uppercase tracking-widest mb-4 shadow-2xs"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tighter"
          >
            Education & Academic Path
          </motion.h2>

          <p className="text-[#64748B] text-sm sm:text-base mt-3 font-medium">
            Structured academic background establishing strong technical fundamentals
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#CBD5E1] -translate-x-1/2"></div>

          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1 z-20 w-8 h-8 rounded-full bg-[#0F172A] border-4 border-white shadow-xs flex items-center justify-center text-[#2563EB]">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-right' : 'sm:text-left'
                  }`}>
                    <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#2563EB] transition-all duration-300 group">
                      
                      {/* Period Badge */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-[10px] font-mono font-bold mb-3 ${
                        isEven ? 'sm:flex-row-reverse' : ''
                      }`}>
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors mb-2">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <div className={`flex items-center gap-2 text-xs font-bold text-[#64748B] mb-4 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <Building2 className="w-4 h-4 text-[#2563EB]" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-[#64748B] text-xs leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skill Tags */}
                      {item.skillsTags && item.skillsTags.length > 0 && (
                        <div className={`flex flex-wrap gap-1.5 pt-4 border-t border-[#F1F5F9] ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}>
                          {item.skillsTags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-full bg-[#F8FAFC] text-[#0F172A] text-[10px] font-mono font-bold border border-[#E2E8F0]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

