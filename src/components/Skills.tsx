import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Wrench, 
  Search, 
  Layers, 
  Table, 
  Terminal,
  Cpu,
  Globe,
  GitBranch
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIconMap: Record<string, React.ReactNode> = {
  programming: <Code className="w-4 h-4 text-[#2563EB]" />,
  backend: <Server className="w-4 h-4 text-[#06B6D4]" />,
  database: <Database className="w-4 h-4 text-[#2563EB]" />,
  frontend: <Smartphone className="w-4 h-4 text-[#06B6D4]" />,
  tools: <Wrench className="w-4 h-4 text-[#2563EB]" />
};

const skillIconMap: Record<string, React.ReactNode> = {
  Python: <Terminal className="w-5 h-5 text-[#2563EB]" />,
  JavaScript: <Code className="w-5 h-5 text-[#2563EB]" />,
  PHP: <Globe className="w-5 h-5 text-[#06B6D4]" />,
  HTML: <Globe className="w-5 h-5 text-[#2563EB]" />,
  CSS: <Globe className="w-5 h-5 text-[#06B6D4]" />,
  Flask: <Server className="w-5 h-5 text-[#0F172A]" />,
  'Node.js': <Server className="w-5 h-5 text-[#2563EB]" />,
  'REST APIs': <Server className="w-5 h-5 text-[#06B6D4]" />,
  MySQL: <Database className="w-5 h-5 text-[#2563EB]" />,
  'Database Design': <Database className="w-5 h-5 text-[#06B6D4]" />,
  'SQL Queries': <Table className="w-5 h-5 text-[#2563EB]" />,
  'Data Management': <Database className="w-5 h-5 text-[#06B6D4]" />,
  HTML5: <Globe className="w-5 h-5 text-[#2563EB]" />,
  CSS3: <Globe className="w-5 h-5 text-[#06B6D4]" />,
  'Responsive Design': <Smartphone className="w-5 h-5 text-[#2563EB]" />,
  Git: <GitBranch className="w-5 h-5 text-[#06B6D4]" />,
  GitHub: <GitBranch className="w-5 h-5 text-[#0F172A]" />,
  'VS Code': <Code className="w-5 h-5 text-[#2563EB]" />,
  'Android Studio': <Smartphone className="w-5 h-5 text-[#06B6D4]" />
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredCategories = skillCategories.filter(cat => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    if (!searchTerm.trim()) return true;

    const query = searchTerm.toLowerCase();
    const hasMatchingSkill = cat.skills.some(s => s.name.toLowerCase().includes(query));
    const catMatches = cat.title.toLowerCase().includes(query);
    return hasMatchingSkill || catMatches;
  });

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#2563EB] text-[10px] font-bold uppercase tracking-widest mb-4 shadow-2xs"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tighter"
          >
            Skills & Competencies
          </motion.h2>

          <p className="text-[#64748B] text-sm sm:text-base mt-3 font-medium">
            Core stack and developer tools honed during academic projects and practical software builds
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#F8FAFC] p-1.5 rounded-full border border-[#E2E8F0] w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0F172A] text-white shadow-2xs'
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0]/50'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2563EB] text-white shadow-2xs'
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0]/50'
                }`}
              >
                {categoryIconMap[cat.id]}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] w-4 h-4" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:bg-white transition-all text-[#0F172A]"
            />
          </div>

        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#F8FAFC] p-6 sm:p-8 rounded-[2rem] border border-[#E2E8F0] shadow-2xs"
            >
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[#E2E8F0]">
                <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                  {categoryIconMap[category.id]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#64748B]">
                    {category.skills.length} Technologies & Tools
                  </p>
                </div>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const isMatch = searchTerm.trim() 
                    ? skill.name.toLowerCase().includes(searchTerm.toLowerCase())
                    : true;

                  return (
                    <motion.div
                      key={sIdx}
                      whileHover={{ y: -3 }}
                      className={`p-4 rounded-2xl bg-white border transition-all duration-200 flex flex-col items-center text-center ${
                        isMatch 
                          ? 'border-[#E2E8F0] shadow-2xs hover:border-[#2563EB] hover:shadow-md' 
                          : 'opacity-40 border-slate-100'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] flex items-center justify-center mb-3 border border-[#E2E8F0]">
                        {skillIconMap[skill.name] || <Cpu className="w-5 h-5 text-[#2563EB]" />}
                      </div>

                      <h4 className="font-bold text-[#0F172A] text-xs mb-1">
                        {skill.name}
                      </h4>

                      {skill.level && (
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#2563EB] text-[9px] font-mono font-bold">
                          {skill.level}
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

