import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Calendar, MapPin } from 'lucide-react';
import ProfileImage from './ProfileImage';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-brand font-black uppercase italic text-xs tracking-[0.4em] mb-6">Expertise & History</h2>
              <h3 className="text-5xl md:text-7xl font-black italic uppercase text-offwhite mb-16 tracking-tighter leading-none">
                Evolution <br /><span className="text-offwhite/30 italic">of a Leader.</span>
              </h3>
              
              <div className="space-y-8 text-offwhite/50 text-xl font-light leading-relaxed border-l border-offwhite/10 pl-8">
                <p>
                  Started in 2017 with YouTube automation, I mastered the full spectrum 
                  of digital content—from niche identification to technical SEO and script execution.
                </p>
                <p>
                  Today, I lead global operations for high-end UK agencies, 
                  synthesizing UI/UX, deep SEO strategy, and high-impact NLP copywriting 
                  into a singular, cohesive digital vision.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <h4 className="text-offwhite/80 text-xs font-black uppercase tracking-[0.4em] mb-12">Milestone Path</h4>
            <div className="relative space-y-16">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="text-brand/40 group-hover:text-brand transition-colors font-black text-xs pt-1 italic">
                    0{index + 1}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4 text-offwhite/30 text-[10px] font-black uppercase tracking-widest">
                      <span className="flex items-center gap-1 italic">{exp.period}</span>
                      {exp.location && <span className="flex items-center gap-1 opacity-50 px-2 py-0.5 border border-offwhite/10 rounded-full">{exp.location}</span>}
                    </div>
                    <h5 className="text-offwhite text-2xl font-black italic uppercase tracking-tighter">{exp.role}</h5>
                    <p className="text-brand text-xs font-black uppercase tracking-widest">{exp.company}</p>
                    <p className="text-offwhite/40 text-sm mt-3 max-w-md font-medium leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
