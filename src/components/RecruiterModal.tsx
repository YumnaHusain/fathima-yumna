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
  Code,
  Layers,
  Database,
  Globe,
  Smartphone,
  ChevronRight,
  Phone,
  User
} from 'lucide-react';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const candidateData = {
  name: 'Fathima Yumna',
  title: 'IT Graduate | Software Developer',
  email: 'yumnahusain1993@gmail.com',
  location: 'Sri Lanka',
  status: 'Open for Opportunities',
  summary:
    'Motivated Information Technology graduate with a Higher National Diploma in Information Technology (HNDIT) from SLIATE. Experienced in developing academic software projects, including a Mobile-Based Point of Sale System, an E-Commerce Platform, and a Library Management System. Strong foundation in software development, database management, and problem-solving with excellent communication skills. Eager to apply technical knowledge, continuously learn new technologies, and contribute to organizational success in an entry-level IT position.',
  education: [
    {
      degree: 'Higher National Diploma in Information Technology (HNDIT)',
      institution: 'SLIATE, ATI Anuradhapura',
      year: '2026',
      details:
        'Software development, networking, database management, system analysis, cybersecurity fundamentals.'
    },
    {
      degree: 'G.C.E. Advanced Level (A/L)',
      institution: 'Mercy Education Campus, Puttalam',
      year: '2022',
      details: 'Analytical, communication, and problem-solving skills.'
    },
    {
      degree: 'Intermediate English Course',
      institution: 'Kekirawa English Academy',
      year: '2023',
      details: 'Grammar, Listening, Reading & Comprehension, Speaking, Writing.'
    },
    {
      degree: 'G.C.E. Ordinary Level (O/L)',
      institution: 'Department of Examinations, Sri Lanka',
      year: '2019',
      details: 'Strong academic foundation for advanced studies.'
    }
  ],
  projects: [
    {
      title: 'Mobile-Based Point of Sale (POS) System',
      type: 'Final Year Project | 2026',
      category: 'Full Stack',
      tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      icon: Smartphone,
      highlights: [
        'Mobile-friendly POS system for small and medium-sized businesses.',
        'Secure authentication, inventory management, sales processing.',
        'Responsive interface focused on business efficiency.'
      ]
    },
    {
      title: 'E-Commerce Platform for Cosmetics Shop',
      type: 'Academic Project',
      category: 'Web App',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      icon: Globe,
      highlights: [
        'Fully functional e-commerce platform for cosmetics retail.',
        'Product catalog, shopping cart, order management, admin dashboard.',
        'Responsive and user-friendly online shopping experience.'
      ]
    },
    {
      title: 'Library Management System',
      type: 'Academic Project',
      category: 'Database System',
      tech: ['SQL', 'Database Design'],
      icon: Database,
      highlights: [
        'Automated library operations with efficient database structure.',
        'Book management, member registration, borrowing/returning, fines.',
        'Improved accuracy and efficiency of library administration.'
      ]
    }
  ],
  skills: {
    languages: ['Python', 'PHP', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
    frameworks: ['Flask', 'REST APIs'],
    tools: ['Git', 'GitHub', 'Android Studio', 'VS Code'],
    databases: ['MySQL', 'Database Design'],
    concepts: [
      'Software Development',
      'Networking',
      'System Analysis',
      'Cybersecurity',
      'Problem Solving'
    ]
  }
};

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copySummaryText = () => {
    const text = `
FATHIMA YUMNA — Digital CV Summary
Title: ${candidateData.title}
Email: ${candidateData.email}

Location: ${candidateData.location}

SUMMARY:
${candidateData.summary}

EDUCATION:
${candidateData.education.map((e) => `• ${e.degree} — ${e.institution} (${e.year})`).join('\n')}

PROJECTS:
${candidateData.projects.map((p) => `• ${p.title} [${p.category}] — ${p.tech.join(', ')}`).join('\n')}

SKILLS:
Languages: ${candidateData.skills.languages.join(', ')}
Frameworks: ${candidateData.skills.frameworks.join(', ')}
Tools: ${candidateData.skills.tools.join(', ')}
Databases: ${candidateData.skills.databases.join(', ')}
Concepts: ${candidateData.skills.concepts.join(', ')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    const printContent = document.getElementById('cv-print-area');
    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Fathima Yumna - Digital CV</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #1e293b;
            padding: 32px;
            line-height: 1.5;
            font-size: 13px;
          }
          .header {
            text-align: center;
            padding-bottom: 16px;
            border-bottom: 2px solid #2563eb;
            margin-bottom: 20px;
          }
          .header h1 { font-size: 26px; color: #0f172a; margin-bottom: 4px; }
          .header p { font-size: 14px; color: #2563eb; font-weight: 600; }
          .contact-row {
            display: flex;
            justify-content: center;
            gap: 24px;
            margin-top: 8px;
            font-size: 12px;
            color: #475569;
          }
          .section { margin-bottom: 18px; }
          .section-title {
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #2563eb;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 4px;
            margin-bottom: 10px;
          }
          .summary { font-size: 12.5px; color: #475569; line-height: 1.6; }
          .edu-item { margin-bottom: 10px; }
          .edu-item h4 { font-size: 13px; color: #0f172a; }
          .edu-item .inst { font-size: 11.5px; color: #64748b; }
          .edu-item .details { font-size: 11px; color: #94a3b8; margin-top: 2px; }
          .project-item { margin-bottom: 12px; }
          .project-item h4 { font-size: 13px; color: #0f172a; }
          .project-item .meta { font-size: 11px; color: #2563eb; font-weight: 600; }
          .project-item ul { padding-left: 16px; margin-top: 4px; }
          .project-item li { font-size: 11.5px; color: #475569; margin-bottom: 2px; }
          .project-item .tech { font-size: 11px; color: #64748b; margin-top: 4px; }
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .skill-group h5 { font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 3px; }
          .skill-group p { font-size: 12px; color: #334155; }
          @media print {
            body { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${candidateData.name}</h1>
          <p>${candidateData.title}</p>
          <div class="contact-row">
            <span>${candidateData.email}</span>
           
            <span>${candidateData.location}</span>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Professional Summary</div>
          <p class="summary">${candidateData.summary}</p>
        </div>

        <div class="section">
          <div class="section-title">Education</div>
          ${candidateData.education
            .map(
              (e) => `
            <div class="edu-item">
              <h4>${e.degree} <span style="float:right;font-size:11px;color:#2563eb;">${e.year}</span></h4>
              <p class="inst">${e.institution}</p>
              <p class="details">${e.details}</p>
            </div>
          `
            )
            .join('')}
        </div>

        <div class="section">
          <div class="section-title">Academic Projects</div>
          ${candidateData.projects
            .map(
              (p) => `
            <div class="project-item">
              <h4>${p.title}</h4>
              <p class="meta">${p.type} · ${p.category}</p>
              <ul>
                ${p.highlights.map((h) => `<li>${h}</li>`).join('')}
              </ul>
              <p class="tech">Tech: ${p.tech.join(', ')}</p>
            </div>
          `
            )
            .join('')}
        </div>

        <div class="section">
          <div class="section-title">Technical Skills</div>
          <div class="skills-grid">
            <div class="skill-group">
              <h5>Languages</h5>
              <p>${candidateData.skills.languages.join(', ')}</p>
            </div>
            <div class="skill-group">
              <h5>Frameworks</h5>
              <p>${candidateData.skills.frameworks.join(', ')}</p>
            </div>
            <div class="skill-group">
              <h5>Tools</h5>
              <p>${candidateData.skills.tools.join(', ')}</p>
            </div>
            <div class="skill-group">
              <h5>Databases</h5>
              <p>${candidateData.skills.databases.join(', ')}</p>
            </div>
            <div class="skill-group">
              <h5>Concepts</h5>
              <p>${candidateData.skills.concepts.join(', ')}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  };

  

  const handleEmail = () => {
    window.open(`mailto:${candidateData.email}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* ────────── HEADER ────────── */}
          <div className="flex-shrink-0 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-5 sm:p-7">
            {/* Top Row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-mono font-bold uppercase tracking-widest">
                  Available for Opportunities
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Identity */}
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-md bg-emerald-500 border-2 border-[#0F172A] flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white" />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  {candidateData.name}
                </h2>
                <p className="text-sm font-semibold text-blue-300 mt-0.5">
                  {candidateData.title}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  <button
                    onClick={handleEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    <Mail className="w-3 h-3 text-blue-400" />
                    <span className="truncate max-w-[160px] sm:max-w-none">
                      {candidateData.email}
                    </span>
                  </button>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-white/60 text-[11px] font-medium">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {candidateData.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ────────── SCROLLABLE BODY ────────── */}
          <div id="cv-print-area" className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
            {/* Professional Summary */}
            <section>
              <SectionHeading icon={Briefcase} color="blue" label="Professional Summary" />
              <p className="text-[13px] text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {candidateData.summary}
              </p>
            </section>

            {/* Education */}
            <section>
              <SectionHeading icon={GraduationCap} color="indigo" label="Education & Credentials" />
              <div className="space-y-3">
                {candidateData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-200 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-blue-500 ring-4 ring-blue-50 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="text-[13px] font-bold text-slate-900">{edu.degree}</h4>
                          <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full flex-shrink-0">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-[12px] font-medium text-slate-500 mt-0.5">{edu.institution}</p>
                        <p className="text-[11px] text-slate-400 mt-1">{edu.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <SectionHeading icon={Layers} color="violet" label="Academic Projects" />
              <div className="space-y-4">
                {candidateData.projects.map((project, idx) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200"
                    >
                      {/* Project Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h4 className="text-[13px] font-extrabold text-slate-900">{project.title}</h4>
                            <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full flex-shrink-0">
                              {project.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5">{project.type}</p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-1.5 mb-3 pl-0 sm:pl-12">
                        {project.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <ChevronRight className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                            <p className="text-[12px] text-slate-600 leading-relaxed">{h}</p>
                          </div>
                        ))}
                      </div>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-1.5 pl-0 sm:pl-12">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-mono font-bold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <SectionHeading icon={Code} color="cyan" label="Technical Skills" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'Languages', items: candidateData.skills.languages, dot: 'bg-blue-500' },
                  { label: 'Frameworks & APIs', items: candidateData.skills.frameworks, dot: 'bg-violet-500' },
                  { label: 'Tools', items: candidateData.skills.tools, dot: 'bg-emerald-500' },
                  { label: 'Databases', items: candidateData.skills.databases, dot: 'bg-amber-500' },
                  { label: 'Core Concepts', items: candidateData.skills.concepts, dot: 'bg-rose-500' }
                ].map((group, gIdx) => (
                  <div key={gIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${group.dot}`} />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        {group.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item, iIdx) => (
                        <span
                          key={iIdx}
                          className="px-2.5 py-1 rounded-md bg-white text-slate-700 text-[11px] font-semibold border border-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ────────── FOOTER ────────── */}
          <div className="flex-shrink-0 p-4 sm:p-5 bg-slate-50 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                onClick={copySummaryText}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy Profile'}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  Print CV
                </button>
                
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* ─── Reusable Section Heading ─── */
const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  violet: 'bg-violet-50 text-violet-600',
  cyan: 'bg-cyan-50 text-cyan-600'
};

const SectionHeading = ({
  icon: Icon,
  color,
  label
}: {
  icon: React.ElementType;
  color: string;
  label: string;
}) => (
  <div className="flex items-center gap-2 mb-3">
    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${colorMap[color] || colorMap.blue}`}>
      <Icon className="w-3.5 h-3.5" />
    </div>
    <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
      {label}
    </h3>
  </div>
);