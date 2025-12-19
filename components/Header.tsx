
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-black/90 backdrop-blur-xl sticky top-0 z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="group">
            <span className="text-xl font-extrabold tracking-tighter text-white flex items-center">
              AAA <span className="ml-2 px-2 py-0.5 border border-[#C5A059] text-[#C5A059] text-[9px] tracking-[0.3em] uppercase">The Index</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-12 items-center">
            <Link to="/" className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors hover:text-[#C5A059] ${location.pathname === '/' ? 'text-[#C5A059]' : 'text-zinc-500'}`}>Rankings</Link>
            <Link to="/methodology" className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors hover:text-[#C5A059] ${location.pathname === '/methodology' ? 'text-[#C5A059]' : 'text-zinc-500'}`}>Methodology</Link>
            <Link to="/methodology" className="bg-[#C5A059] text-black px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all transform hover:-translate-y-0.5">
              Submit Agency
            </Link>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#C5A059]">
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800 p-6 space-y-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-xs font-black uppercase tracking-widest text-[#C5A059]">Rankings</Link>
          <Link to="/methodology" onClick={() => setIsOpen(false)} className="block text-xs font-black uppercase tracking-widest text-white">Methodology</Link>
          <Link to="/methodology" onClick={() => setIsOpen(false)} className="block text-center bg-[#C5A059] text-black py-3 text-[10px] font-black uppercase tracking-widest">Submit</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
