import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUpRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  return (
    <footer className="relative pt-32 pb-12 px-6 md:px-20 bg-gradient-to-t from-brand/5 to-black overflow-hidden border-t border-offwhite/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-[120px] font-black italic uppercase text-offwhite tracking-tighter leading-[0.8] mb-12">
              Let's <br /><span className="text-transparent stroke-text">Evolve.</span>
            </h2>
            <p className="text-offwhite/50 text-xl font-light mb-12 max-w-lg">
              Architecting high-impact SEO roadmaps and conversion-first content strategy. 
              Let's build your next digital authority together.
            </p>
            
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="group flex items-center gap-4 text-offwhite text-3xl md:text-5xl font-black italic uppercase tracking-tighter border-b-2 border-offwhite/10 pb-6 hover:border-brand transition-all"
            >
              Contact Agent
              <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-brand" size={40} />
            </a>
          </div>

          <div className="flex flex-col items-end gap-10">
            <div className="flex gap-4">
              {[
                { icon: <Linkedin />, label: 'LinkedIn', href: CONTACT_INFO.linkedin },
                { icon: <Mail />, label: 'Email', href: `mailto:${CONTACT_INFO.email}` },
                { icon: <Phone />, label: 'Phone', href: `tel:${CONTACT_INFO.phone}` },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, backgroundColor: '#9003af', borderColor: '#9003af' }}
                  href={social.href}
                  className="w-14 h-14 rounded-full border border-offwhite/10 flex items-center justify-center text-offwhite transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="text-right">
              <p className="text-brand text-[10px] font-black uppercase tracking-[0.4em] mb-2 italic">Official Presence</p>
              <p className="text-offwhite font-bold italic uppercase tracking-tighter text-xl">Global Strategy Lead</p>
            </div>
          </div>
        </div>

        <div className="border-t border-offwhite/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-offwhite/20 text-[9px] font-black uppercase tracking-[0.6em]">
          <p>© 2026 FAZAL-E-SUBHANI PORTFOLIO</p>
          <div className="flex gap-12">
            <span>STRATEGY FIRST</span>
            <span>DATA DRIVEN</span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 blur-[180px] -z-10 rounded-full translate-x-1/4 -translate-y-1/2" />
    </footer>
  );
}
