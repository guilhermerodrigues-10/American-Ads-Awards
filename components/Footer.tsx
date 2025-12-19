
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-6">
            <span className="text-3xl font-black tracking-tighter mb-8 block text-white">AAA <span className="text-[#C5A059]">INDEX</span></span>
            <p className="text-zinc-600 text-sm font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm mb-12">
              The independent authority for marketing agency rankings in the United States. 
            </p>
            <div className="flex space-x-6">
               <a href="#" className="text-zinc-800 hover:text-[#C5A059] transition-colors text-xl"><i className="fab fa-linkedin"></i></a>
               <a href="#" className="text-zinc-800 hover:text-[#C5A059] transition-colors text-xl"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C5A059] mb-10">Navigation</h4>
            <ul className="space-y-6 text-[10px] font-black uppercase tracking-[0.3em]">
              <li><Link to="/" className="text-zinc-500 hover:text-white transition-colors">The Index</Link></li>
              <li><Link to="/methodology" className="text-zinc-500 hover:text-white transition-colors">Methodology</Link></li>
              <li><Link to="/legal" className="text-zinc-500 hover:text-white transition-colors">Legal Division</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C5A059] mb-10">Inquiries</h4>
            <p className="text-xs font-bold text-white uppercase tracking-widest border-b border-[#C5A059] pb-2 w-fit mb-4">board@americanadsawards.com</p>
            <p className="text-[10px] font-medium text-zinc-700 uppercase tracking-widest">Global HQ — New York City</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.5em] text-zinc-800 border-t border-zinc-900 pt-12">
          <p>&copy; 2024 American Ads Awards Board. All rights reserved.</p>
          <div className="mt-8 md:mt-0 space-x-12">
             <span className="text-zinc-900">PRIVATE & CONFIDENTIAL</span>
             <span className="text-[#C5A059]">VOLUME 01</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
