import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProfileImage from './ProfileImage';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titlePart1Ref = useRef<HTMLSpanElement>(null);
  const titlePart2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!titlePart1Ref.current || !titlePart2Ref.current) return;

    const tl = gsap.timeline();
    tl.fromTo(
      titlePart1Ref.current,
      { y: 120, opacity: 0, skewY: 10 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: 'power4.out' }
    ).fromTo(
      titlePart2Ref.current,
      { y: 120, opacity: 0, skewY: 10 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: 'power4.out' },
      "-=1"
    );

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      gsap.to('.hero-3d-wrapper', { rotateX: -y, rotateY: x, duration: 0.8 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center px-10 md:px-20 pt-20 overflow-hidden bg-black"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto z-10">
        
        {/* Left: Bold Typography */}
        <div className="flex flex-col space-y-8">
          <div className="overflow-hidden">
            <h1 className="text-[80px] md:text-[120px] leading-[0.85] font-black italic uppercase tracking-tighter flex flex-col">
              <span ref={titlePart1Ref} className="block">Digital</span>
              <span ref={titlePart2Ref} className="block text-transparent stroke-text">Visionary</span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="max-w-md pt-4"
          >
            <p className="text-lg md:text-xl text-offwhite/70 leading-tight font-light border-l-2 border-brand pl-6">
              SEO Strategist. Team Lead. Content Architect. 
              Transforming digital landscapes since 2017 with expertise in high-end global markets.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <button className="px-10 py-5 bg-offwhite text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-neutral-200 transition-all transform hover:scale-105 active:scale-95">
              View Work
            </button>
            <button className="px-10 py-5 border border-offwhite/20 text-offwhite font-black uppercase text-xs tracking-widest rounded-full hover:bg-offwhite/10 transition-all">
              Background
            </button>
          </motion.div>
        </div>

        {/* Right: 3D Visual Composition */}
        <div className="relative h-full flex items-center justify-center py-20 lg:py-0">
          <div className="hero-3d-wrapper relative w-full max-w-[450px]" style={{ perspective: '1200px' }}>
            <ProfileImage />
          </div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-offwhite/[0.02] text-[40vw] font-black italic select-none -z-10 tracking-tighter pointer-events-none">
        FAZAL
      </div>
    </section>
  );
}
