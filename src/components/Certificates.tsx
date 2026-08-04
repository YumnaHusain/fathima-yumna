import React from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#2563EB] text-[10px] font-bold uppercase tracking-widest mb-4 shadow-2xs"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tighter"
          >
            Certifications & Accomplishments
          </motion.h2>

          <p className="text-[#64748B] text-sm sm:text-base mt-3 font-medium">
            Official academic completions and verified professional qualifications
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="bg-white p-8 rounded-[2rem] border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#2563EB] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-white flex items-center justify-center shadow-xs group-hover:bg-[#2563EB] transition-colors duration-300">
                    <Award className="w-5 h-5" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#F8FAFC] text-[#2563EB] text-[10px] font-mono font-bold flex items-center gap-1.5 border border-[#E2E8F0]">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.year}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-[10px] font-mono font-bold text-[#2563EB] mb-4 uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{cert.issuer}</span>
                </p>

                {/* Description */}
                <p className="text-[#64748B] text-xs leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Credential ID Badge */}
              <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] font-mono font-bold text-[#94A3B8]">
                <span className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Qualification</span>
                </span>
                {cert.credentialId && (
                  <span>
                    {cert.credentialId}
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

