import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';
import { ExternalLink, ArrowLeft, Trash2 } from 'lucide-react';

export default function PortfolioGallery() {
  const [activeTab, setActiveTab] = useState<'on-page' | 'off-page' | 'gmb' | 'web-pages'>('on-page');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [categories, setCategories] = useState(PORTFOLIO_CATEGORIES);
  const [isAdmin, setIsAdmin] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('portfolio_admin') === 'true' || 
           new URLSearchParams(window.location.search).get('admin') === 'true';
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      localStorage.setItem('portfolio_admin', 'true');
      setIsAdmin(true);
    } else if (params.get('admin') === 'false') {
      localStorage.removeItem('portfolio_admin');
      setIsAdmin(false);
    }
  }, []);

  const filteredCategories = categories.filter(c => c.type === activeTab);

  const handleDeleteBlog = (categoryTitle: string, blogId: string) => {
    setCategories(prev => prev.map(cat => {
      if (cat.title === categoryTitle) {
        return { ...cat, links: cat.links.filter(l => l.id !== blogId) };
      }
      return cat;
    }));
  };

  return (
    <section id="portfolio" className="py-32 px-6 md:px-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-brand font-black uppercase italic text-xs tracking-[0.4em] mb-6">
            Work showcase / {activeTab === 'on-page' ? 'On-Page Blogs' : activeTab === 'off-page' ? 'Off-Page guest posts' : activeTab === 'gmb' ? 'GMB Posts' : 'Web Strategy Docs'}
          </h2>
          
          <div className="flex flex-col xl:flex-row justify-between items-end gap-8">
            <h3 className="text-5xl md:text-8xl font-black italic uppercase text-offwhite tracking-tighter leading-none">
              {selectedCategory === null ? (
                <>Portfolio <br /><span className="text-transparent stroke-text">Verticals.</span></>
              ) : (
                <>Niche <br /><span className="text-transparent stroke-text">Insights.</span></>
              )}
            </h3>

            {selectedCategory === null && (
              <div className="flex bg-offwhite/5 p-1 rounded-full border border-white/10 flex-wrap justify-center">
                <button 
                  onClick={() => setActiveTab('on-page')}
                  className={`px-6 py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'on-page' ? 'bg-brand text-offwhite' : 'text-offwhite/40 hover:text-offwhite'}`}
                >
                  On-Page Blogs
                </button>
                <button 
                  onClick={() => setActiveTab('off-page')}
                  className={`px-6 py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'off-page' ? 'bg-brand text-offwhite' : 'text-offwhite/40 hover:text-offwhite'}`}
                >
                  Off-Page Guest Posts
                </button>
                <button 
                  onClick={() => setActiveTab('gmb')}
                  className={`px-6 py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'gmb' ? 'bg-brand text-offwhite' : 'text-offwhite/40 hover:text-offwhite'}`}
                >
                  GMB Posts
                </button>
                <button 
                  onClick={() => setActiveTab('web-pages')}
                  className={`px-6 py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'web-pages' ? 'bg-brand text-offwhite' : 'text-offwhite/40 hover:text-offwhite'}`}
                >
                  Web Pages
                </button>
              </div>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {selectedCategory === null ? (
            <motion.div 
              key={`${activeTab}-grid`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
            >
              {filteredCategories.map((category, idx) => {
                const IconComponent = (Icons as any)[category.icon] || Icons.HelpCircle;
                const globalIdx = categories.findIndex(c => c.title === category.title);
                return (
                  <motion.button
                    key={category.title}
                    whileHover={{ scale: 1.05, borderColor: 'var(--color-brand)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(globalIdx)}
                    className="aspect-square flex flex-col items-center justify-center p-4 bg-offwhite/[0.03] border border-offwhite/10 rounded-xl transition-all group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="mb-3 text-offwhite/20 group-hover:text-brand transition-all duration-500">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>

                    <span className="text-offwhite font-black uppercase italic text-[8px] md:text-[9px] tracking-widest text-center z-10 group-hover:text-brand transition-colors leading-tight px-1">
                      {category.title}
                    </span>
                    
                    <div className="absolute top-2 right-3 text-offwhite/10 text-[8px] font-mono">
                      {category.links.length}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              key="list"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="relative"
            >
              <button 
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-brand font-black uppercase text-[10px] tracking-widest mb-12 hover:translate-x-[-8px] transition-transform"
              >
                <ArrowLeft size={16} /> Back to {activeTab} Grid
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories[selectedCategory].links.length > 0 ? (
                  categories[selectedCategory].links.map((link) => (
                    <div 
                      key={link.id}
                      className="group flex items-stretch bg-offwhite/[0.03] border border-offwhite/5 rounded-lg overflow-hidden hover:border-brand/30 transition-all"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex justify-between items-center p-6 hover:bg-brand transition-all group/btn"
                      >
                        <span className="text-offwhite font-bold italic uppercase tracking-tight group-hover/btn:text-black transition-colors text-xs md:text-sm">
                          {link.label}
                        </span>
                        <ExternalLink size={16} className="text-offwhite/30 group-hover/btn:text-black transition-colors" />
                      </a>
                      {isAdmin && (
                        <button 
                          onClick={() => handleDeleteBlog(categories[selectedCategory].title, link.id)}
                          className="px-4 flex items-center justify-center bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white transition-all border-l border-offwhite/5"
                          title="Delete entry (Admin Only)"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center border-2 border-dashed border-offwhite/5 rounded-2xl">
                    <p className="text-offwhite/20 font-black uppercase tracking-[0.4em] text-xs">No entries for this category yet</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
