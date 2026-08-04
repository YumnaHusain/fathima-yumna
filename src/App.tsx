import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { EducationTimeline } from './components/EducationTimeline';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { RecruiterModal } from './components/RecruiterModal';

export default function App() {
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* Sticky Translucent Apple-Style Header */}
      <Navbar onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />

        {/* Quick Stats Banner */}
        <Stats />

        {/* About Fathima Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Education Timeline Section */}
        <EducationTimeline />

        {/* Projects Showcase Section */}
        <Projects />

        {/* Certifications Section */}
        <Certificates />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Recruiter Quick Summary Modal */}
      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
      />

    </div>
  );
}
