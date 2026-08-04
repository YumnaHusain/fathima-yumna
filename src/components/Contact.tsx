import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Briefcase 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ContactFormState } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#2563EB] text-[10px] font-bold uppercase tracking-widest mb-4 shadow-2xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tighter"
          >
            Let's Work Together
          </motion.h2>

          <p className="text-[#64748B] text-sm sm:text-base mt-3 font-medium">
            Open for software development internships, entry-level IT positions, and technical collaborations
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="bg-[#0F172A] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-[#06B6D4] text-[10px] font-mono font-bold uppercase tracking-widest border border-blue-400/30 inline-flex items-center gap-1.5 mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                <span>INTERNSHIP READY</span>
              </span>

              <h3 className="text-2xl font-extrabold tracking-tight text-white mb-3">
                Open for Opportunities
              </h3>

              <p className="text-[#94A3B8] text-xs leading-relaxed mb-6">
                I'm currently looking for internship and entry-level opportunities where I can apply my IT knowledge and grow as a software professional.
              </p>

              <div className="p-4 rounded-2xl bg-[#1E293B] border border-[#334155] flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono font-bold text-[#64748B] uppercase tracking-widest">Degree</p>
                  <p className="text-xs font-bold text-white mt-0.5">HNDIT Graduate (SLIATE)</p>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
            </div>

            {/* Contact Method Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-[2rem] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between hover:border-[#2563EB] hover:bg-white transition-all duration-200 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest">Email Me</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2.5 rounded-full bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB] transition-colors cursor-pointer shadow-2xs"
                  title="Copy email address"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="p-5 rounded-[2rem] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between hover:border-emerald-500 hover:bg-white transition-all duration-200 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest">WhatsApp / Phone</p>
                    <a 
                      href="https://wa.me/94760771993"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0F172A] hover:text-emerald-600 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-full bg-white border border-[#E2E8F0] text-[#64748B] hover:text-emerald-600 hover:border-emerald-500 transition-colors cursor-pointer shadow-2xs"
                  title="Copy phone number"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-[2rem] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] text-[#2563EB] flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest">Location</p>
                  <p className="text-xs font-bold text-[#0F172A]">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#F8FAFC] p-8 sm:p-10 rounded-[2rem] border border-[#E2E8F0] shadow-xs"
          >
            <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-[#64748B] mb-8">
              Fill out the form below to reach out directly regarding hiring, interviews, or inquiries.
            </p>

            {submitted ? (
              <div className="p-8 rounded-[2rem] bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-900">
                  Message Delivered Successfully!
                </h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out, {formData.name || 'recruiter'}. I will review your message and respond promptly to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-xs bg-white border border-[#E2E8F0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all text-[#0F172A]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-xs bg-white border border-[#E2E8F0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all text-[#0F172A]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Internship opportunity / Entry-level role"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-xs bg-white border border-[#E2E8F0] rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all text-[#0F172A]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono font-bold text-[#0F172A] uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-xs bg-white border border-[#E2E8F0] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all resize-none text-[#0F172A]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#0F172A] hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 shadow-2xs transition-all duration-300 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#2563EB]" />
                  <span>Send Message</span>
                </button>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

