
import React from 'react';
import { motion } from 'framer-motion';
import { Agency } from '../types';

interface RankingCardProps {
  agency: Agency;
  isFirst?: boolean;
}

const RankingCard: React.FC<RankingCardProps> = ({ agency, isFirst }) => {
  return (
    <motion.div 
      className={`group relative py-12 border-t border-zinc-900 transition-all duration-700 hover:bg-zinc-950 px-6`}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-1">
          <span className={`text-5xl font-extrabold tracking-tighter ${isFirst ? 'text-[#C5A059]' : 'text-zinc-800'}`}>
            {agency.rank.toString().padStart(2, '0')}
          </span>
        </div>
        
        <div className="md:col-span-4">
          <h3 className={`text-3xl font-extrabold mb-1 group-hover:translate-x-2 transition-transform duration-500 ${isFirst ? 'text-white' : 'text-zinc-200'}`}>
            {agency.name}
          </h3>
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C5A059]">
            {agency.location}
          </p>
        </div>
        
        <div className="md:col-span-5">
          <p className="text-zinc-500 leading-relaxed text-sm md:text-base font-medium italic group-hover:text-zinc-300 transition-colors">
            "{agency.description}"
          </p>
        </div>

        <div className="md:col-span-2 flex md:justify-end">
          {isFirst ? (
            <motion.div 
              className="flex flex-col items-end"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#C5A059] mb-2">Category Winner</span>
              <div className="w-12 h-12 border border-[#C5A059] flex items-center justify-center rounded-full text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-colors">
                <i className="fas fa-crown text-sm"></i>
              </div>
            </motion.div>
          ) : (
             <span className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-700 border border-zinc-800 px-3 py-1 group-hover:border-zinc-700 group-hover:text-zinc-500 transition-colors">
              Qualified
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RankingCard;
