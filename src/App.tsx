/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ThreeCanvas from './components/ThreeCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import PortfolioGallery from './components/PortfolioGallery';
import Contact from './components/Contact';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Smooth scroll configuration or any global animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <main className="relative bg-black text-offwhite selection:bg-brand selection:text-white overflow-x-hidden">
      <ThreeCanvas />
      
      {/* Global Glowing Elements */}
      <div className="fixed top-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-8 z-50 backdrop-blur-sm bg-black/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-offwhite rounded-full overflow-hidden flex items-center justify-center transform hover:rotate-12 transition-transform cursor-pointer border border-brand/20">
            <img 
              src="https://aqlionix.com/wp-content/uploads/2026/05/ChatGPTImageMay13202609_53_44A.jpeg" 
              alt="Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-black tracking-tighter text-xl uppercase italic">Muhammad Awais</span>
        </div>
        <div className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.3em] text-offwhite/50">
          <a href="#hero" className="text-offwhite border-b border-offwhite pb-1">Overview</a>
          <a href="#about" className="hover:text-offwhite transition-colors">Excellence</a>
          <a href="#skills" className="hover:text-offwhite transition-colors">History</a>
          <a href="#portfolio" className="hover:text-offwhite transition-colors">Portfolio</a>
          <a href="mailto:fazalsubhaniwriter@gmail.com" className="hover:text-offwhite transition-colors">Contact</a>
        </div>
      </nav>

      {/* Side Status Rail */}
      <div className="fixed left-10 bottom-32 hidden xl:flex flex-col space-y-4 z-40">
        <div className="w-[1px] h-20 bg-gradient-to-b from-offwhite/0 to-offwhite" />
        <p className="rail-text text-offwhite font-black opacity-40">BASED IN PAKISTAN • SERVING GLOBALLY</p>
      </div>

      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>

      <section id="portfolio">
        <PortfolioGallery />
      </section>
      
      <Contact />

      {/* Aesthetic Overlays */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 border-[20px] border-black/10 mix-blend-overlay" />
    </main>
  );
}

