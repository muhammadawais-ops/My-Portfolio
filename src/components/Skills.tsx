import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { SKILLS, NICHES } from '../constants';

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="py-32 bg-black overflow-hidden">
      <div className="mb-20 px-6 md:px-20">
        <h2 className="text-brand font-mono text-sm tracking-widest uppercase mb-4 font-bold italic">Core Competencies</h2>
        <h3 className="text-5xl md:text-8xl font-black italic uppercase text-offwhite tracking-tighter">
          Creative<br />Technical <span className="text-transparent stroke-text">Mastery</span>
        </h3>
      </div>

      <div className="space-y-6">
        <motion.div style={{ x: x1 }} className="flex gap-4 whitespace-nowrap">
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <div 
              key={index}
              className="px-12 py-8 border border-offwhite/5 text-offwhite/20 text-5xl font-black italic hover:text-brand hover:border-brand/30 transition-all uppercase tracking-tighter cursor-default"
            >
              {skill.name}
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex gap-4 whitespace-nowrap">
          {[...NICHES, ...NICHES].map((niche, index) => (
            <div 
              key={index}
              className="px-8 py-4 bg-offwhite/5 border border-offwhite/10 text-brand text-2xl font-black uppercase italic tracking-tighter"
            >
              {niche}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-32 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-offwhite/10">
        <div className="p-12 border-offwhite/10 md:border-r hover:bg-offwhite/[0.02] transition-colors group">
          <div className="text-offwhite text-6xl font-black italic mb-4">07+</div>
          <p className="text-brand font-black uppercase tracking-widest text-xs mb-2 italic">Years of Industry Growth</p>
          <p className="text-offwhite/40 text-sm font-medium">Directing high-level SEO and content teams across European and UK markets.</p>
        </div>
        <div className="p-12 border-offwhite/10 md:border-r hover:bg-offwhite/[0.02] transition-colors group">
          <div className="text-offwhite text-6xl font-black italic mb-4">12+</div>
          <p className="text-brand font-black uppercase tracking-widest text-xs mb-2 italic">Verticals Dominated</p>
          <p className="text-offwhite/40 text-sm font-medium">From Fintech & SaaS to Medical niche authority, delivering conversion-driven results.</p>
        </div>
        <div className="p-12 hover:bg-offwhite/[0.02] transition-colors group">
          <div className="text-offwhite text-6xl font-black italic mb-4 flex items-center">FULL<span className="text-brand ml-2">.</span></div>
          <p className="text-brand font-black uppercase tracking-widest text-xs mb-2 italic">Cycle Integration</p>
          <p className="text-offwhite/40 text-sm font-medium">UX-centric strategy, team training, and high-conversion content architecture.</p>
        </div>
      </div>
    </section>
  );
}
