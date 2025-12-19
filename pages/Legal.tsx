
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Legal: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-black min-h-screen py-32">
      <motion.div 
        className="max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-16"
        >
          LEGAL & <br/><span className="text-[#C5A059]">PRIVACY.</span>
        </motion.h1>
        
        <div className="space-y-20">
          <motion.section variants={itemVariants} className="border-t border-zinc-900 pt-10">
            <h2 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.5em] mb-6">Terms of Use</h2>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              The content provided on American Ads Awards is for informational purposes only. While we strive for accuracy, rankings are based on proprietary analysis and public data which may change. We are not responsible for business decisions made based on this information.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="border-t border-zinc-900 pt-10">
            <h2 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.5em] mb-6">Privacy Policy</h2>
            <div className="space-y-6">
              <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                This site does not collect personal user data via forms or logins. We utilize standard, anonymous web analytics to improve site performance and understand user navigation patterns.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest text-zinc-700">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mr-3"></span> No cookies for marketing</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mr-3"></span> No third-party data sharing</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mr-3"></span> No registration required</li>
              </ul>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="border-t border-zinc-900 pt-10">
            <h2 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.5em] mb-6">Intellectual Property</h2>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              The American Ads Awards name, branding, and ranking methodology are intellectual property of the American Ads Awards Board. Unauthorized reproduction or use of the ranking badges without certification is prohibited.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="border-t border-zinc-900 pt-10">
            <h2 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.5em] mb-6">Direct Contact</h2>
            <p className="text-xl text-white font-extrabold tracking-tight">
              board@americanadsawards.com
            </p>
            <p className="text-sm text-zinc-600 mt-2 font-medium">For inquiries regarding our ranking process or data corrections.</p>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Legal;
