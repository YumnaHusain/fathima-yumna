import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Mail, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenRecruiterModal: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiterModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', ...navLinks.map(link => link.href.substring(1))];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm text-[#0F172A]' 
          : 'py-5 bg-transparent text-[#0F172A]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Editorial Brand Mark FY. */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-baseline space-x-1.5 group cursor-pointer"
          >
            <span className="text-2xl font-bold tracking-tighter uppercase text-[#0F172A]">
              FY
            </span>
            <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></div>
          </a>

          {/* Editorial Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] font-semibold uppercase tracking-widest text-[#64748B]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#2563EB]'
                      : 'hover:text-[#0F172A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2563EB] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Editorial Pill Badge & Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center px-4 py-2 bg-white border border-[#E2E8F0] rounded-full shadow-xs">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A]">
                Open for Internship
              </span>
            </div>

            <button
              onClick={onOpenRecruiterModal}
              className="px-4 py-2 bg-[#0F172A] text-white rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xs hover:bg-black transition-colors cursor-pointer flex items-center gap-2"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>CV / Summary</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenRecruiterModal}
              className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#0F172A] text-white flex items-center gap-1.5"
            >
              <Briefcase className="w-3 h-3 text-[#2563EB]" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0F172A] hover:bg-[#E2E8F0]/50 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-[#E2E8F0] text-[#0F172A] px-6 pt-4 pb-6 space-y-3 mt-2 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#2563EB]'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest rounded-xl bg-[#0F172A] text-white flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
