
import React, { useEffect } from 'react';

const Methodology: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const criteria = [
    { title: "Performance and Impact", desc: "Evaluation based on real business outcomes, ROI, and measurable market impact achieved for client portfolios." },
    { title: "Market Reputation", desc: "Analysis of third-party reviews, industry standing, and qualitative feedback from the professional ecosystem." },
    { title: "Strategic Clarity", desc: "Precision of the agency's positioning and the efficiency of their specialized service delivery model." },
    { title: "Execution Consistency", desc: "Track record of maintaining high-quality results across diverse campaigns and multi-year engagements." }
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="pt-40 pb-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#C5A059] mb-12 block">The Standard</span>
          <h1 className="text-8xl md:text-[11rem] font-extrabold tracking-tighter leading-[0.85] text-white mb-16">
            OUR <br/><span className="text-[#C5A059]">METHOD.</span>
          </h1>
          <div className="max-w-3xl prose prose-invert">
            <p className="text-2xl md:text-3xl font-medium text-zinc-500 leading-tight">
              A transparent evaluation based on public data and proprietary criteria to define the American marketing elite.
            </p>
          </div>
        </div>
      </div>

      <div className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
          <div className="md:col-span-4">
             <div className="sticky top-40">
                <h2 className="text-4xl font-extrabold tracking-tighter mb-8 text-white">Evaluation <br/>Criteria.</h2>
                <div className="w-20 h-1 bg-[#C5A059]"></div>
             </div>
          </div>
          
          <div className="md:col-span-8 space-y-20">
            {criteria.map((item, idx) => (
              <div key={idx} className="group border-b border-zinc-900 pb-12">
                <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.4em]">Metric 0{idx + 1}</span>
                <h3 className="text-3xl md:text-5xl font-extrabold mt-6 mb-8 tracking-tighter text-white group-hover:text-[#C5A059] transition-colors">{item.title}</h3>
                <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}

            <div className="pt-20 space-y-12">
              <div className="bg-zinc-950 p-12 border border-zinc-900">
                <h3 className="text-2xl font-extrabold mb-6 tracking-tighter text-white">Core Commitments</h3>
                <ul className="space-y-6 text-zinc-500 font-medium">
                  <li className="flex items-start">
                    <span className="text-[#C5A059] mr-4 font-black">/</span>
                    Rankings organized exclusively by niche for maximum relevance.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C5A059] mr-4 font-black">/</span>
                    Rankings updated annually to reflect the current market landscape.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C5A059] mr-4 font-black">/</span>
                    Zero paid influence. No agency can purchase their position on the AAA Index.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
