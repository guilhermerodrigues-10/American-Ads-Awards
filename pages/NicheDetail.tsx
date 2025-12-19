
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NICHES } from '../constants';
import RankingCard from '../components/RankingCard';

const NicheDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const niche = NICHES.find((n) => n.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!niche) {
    return <Navigate to="/" replace />;
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Editorial Header com animação de entrada */}
      <div className="pt-32 pb-20 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.nav 
            className="flex space-x-4 mb-12 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="hover:text-[#C5A059] transition-colors">The Index</Link>
            <span className="text-zinc-800">/</span>
            <span className="text-[#C5A059]">Rankings</span>
          </motion.nav>
          
          <div className="max-w-4xl">
            <motion.h1 
              className="text-6xl md:text-9xl font-extrabold text-white tracking-tighter leading-[0.85] mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              {niche.title.split(' ')[0]} <br/>
              <span className="text-[#C5A059]">{niche.title.split(' ').slice(1).join(' ')}.</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-3xl text-zinc-500 font-medium leading-tight tracking-tight max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {niche.shortDescription}
            </motion.p>
          </div>
        </div>
      </div>

      {/* The Ranking List com entrada escalonada */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="mb-10 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-zinc-700 border-b border-zinc-900 pb-8 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>OFFICIAL RANKING</span>
            <span>VERIFIED STATUS</span>
          </motion.div>
          
          <motion.div 
            className="border-b border-zinc-900"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {niche.agencies.map((agency) => (
              <RankingCard 
                key={agency.name} 
                agency={agency} 
                isFirst={agency.rank === 1} 
              />
            ))}
          </motion.div>

          <motion.div 
            className="mt-32 p-16 bg-zinc-950 border border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-12"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-xl">
              <h3 className="text-4xl font-extrabold text-white mb-6 tracking-tighter">Independent Selection.</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">
                Agencies listed are analyzed annually based on performance metrics and market reputation. We maintain a zero-tolerance policy for paid placements.
              </p>
            </div>
            <Link to="/methodology" className="bg-[#C5A059] text-black px-12 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-white transition-all whitespace-nowrap transform hover:scale-105 active:scale-95">
              Review Methodology
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NicheDetail;
