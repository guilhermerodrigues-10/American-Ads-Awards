
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NICHES } from '../constants';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } 
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* 3) HOME — Hero Section com animação staggered */}
      <section className="pt-40 pb-32 border-b border-zinc-900 overflow-hidden relative">
        <motion.div 
          className="max-w-7xl mx-auto px-6 relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex flex-col items-start">
            <motion.h1 
              variants={itemVariants}
              className="text-7xl md:text-[11rem] font-extrabold leading-[0.85] tracking-tighter text-white mb-10"
            >
              AMERICAN <br/>
              ADS <span className="text-[#C5A059]">AWARDS.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-3xl text-zinc-500 max-w-2xl font-medium leading-tight tracking-tight mb-12"
            >
              Independent analysis and ranking of the top marketing companies in the United States.
            </p>
            
            <motion.div variants={itemVariants}>
              <a href="#featured" className="inline-block bg-[#C5A059] text-black px-12 py-6 text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95">
                View Current Rankings
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
           <span className="text-[40vw] font-black tracking-tighter text-[#C5A059] select-none">AAA</span>
        </motion.div>
      </section>

      {/* 3) Seção: “Top Agencies by Niche” com Scroll Reveal */}
      <section id="featured" className="py-32 border-b border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">Top Agencies <span className="text-[#C5A059]">By Niche.</span></h2>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-[0.3em]">The #1 Ranked Operations</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden">
            {NICHES.map((niche, index) => {
              const topAgency = niche.agencies[0];
              return (
                <motion.div 
                  key={niche.id} 
                  className="bg-black p-12 group hover:bg-zinc-900 transition-all duration-500 flex flex-col h-full relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="mb-12">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#C5A059] block mb-2">{niche.title}</span>
                    <motion.div 
                      className="h-px bg-[#C5A059]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "2.5rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-4xl font-extrabold text-white mb-2 tracking-tighter group-hover:text-[#C5A059] transition-colors">{topAgency.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-8 flex items-center">
                      <i className="fas fa-location-dot mr-2"></i> {topAgency.location}
                    </p>
                    <p className="text-zinc-500 font-medium leading-relaxed italic mb-10 group-hover:text-zinc-300 transition-colors">
                      "{topAgency.highlight}"
                    </p>
                  </div>

                  <Link 
                    to={`/niche/${niche.slug}`}
                    className="inline-block text-center border border-[#C5A059] text-[#C5A059] px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-[#C5A059] group-hover:text-black transition-all overflow-hidden relative"
                  >
                    View Niche Ranking
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4) Seção: “Our Niches” com micro-interações */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="max-w-xl mb-20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tighter">Our Niches.</h2>
            <p className="text-zinc-500 font-medium leading-relaxed">
              Explore our comprehensive evaluation across the three critical pillars of modern American advertising.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NICHES.map((niche, index) => (
              <motion.div
                key={niche.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={`/niche/${niche.slug}`}
                  className="group p-10 border border-zinc-900 hover:border-[#C5A059] transition-all duration-500 flex flex-col justify-between h-full hover:shadow-[0_0_40px_rgba(197,160,89,0.05)]"
                >
                  <div>
                    <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center mb-10 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500">
                       <i className={`fas ${niche.id === 'performance' ? 'fa-bolt' : niche.id === 'sales-integration' ? 'fa-link' : 'fa-pen-nib'}`}></i>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tighter group-hover:text-[#C5A059] transition-colors">{niche.title}</h3>
                    <p className="text-sm text-zinc-600 font-medium leading-relaxed group-hover:text-zinc-400 transition-colors">
                      {niche.shortDescription}
                    </p>
                  </div>
                  <div className="mt-12 text-[9px] font-black uppercase tracking-[0.3em] text-[#C5A059] flex items-center">
                    Expand Category <i className="fas fa-chevron-right ml-3 transform group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
