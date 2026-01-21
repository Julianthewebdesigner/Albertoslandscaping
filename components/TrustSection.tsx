
import React from 'react';
import { Award, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';
import { BUSINESS_NAME } from '../constants';

interface TrustSectionProps {
  onAboutClick?: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onAboutClick }) => {
  const stats = [
    { icon: <Clock className="text-emerald-700" />, label: "Years Experience", value: "20+" },
    { icon: <Award className="text-emerald-700" />, label: "Finished Projects", value: "2.5k+" },
    { icon: <ShieldCheck className="text-emerald-700" />, label: "Client Satisfaction", value: "99%" },
    { icon: <Users className="text-emerald-700" />, label: "Expert Workers", value: "12" },
  ];

  return (
    <section id="aboutus" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle light beam texture background */}
      <div className="absolute inset-0 light-beam opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 justify-center">
             <div className="h-[2px] w-8 bg-emerald-600"></div>
             <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Our Mission</span>
             <div className="h-[2px] w-8 bg-emerald-600"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight">
            Rooted in Kent,<br/>
            <span className="text-emerald-700 italic">Growing Across Washington</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            At {BUSINESS_NAME}, we believe your outdoor space should be an extension of your home. Led by Alberto Aguilar and his son Julian, we prioritize health, aesthetics, and long-term sustainability.
          </p>
          
          <div className="inline-block p-10 bg-stone-50 rounded-[3rem] border-t-4 border-lime-400 mb-12 shadow-sm relative group">
            {/* Animated Glow on hover */}
            <div className="absolute -inset-1 bg-lime-400/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <p className="relative z-10 text-2xl md:text-3xl text-stone-800 font-medium italic leading-relaxed">
              "We don't just mow lawns; we cultivate spaces where your family can thrive in the beauty of the Pacific Northwest."
            </p>
          </div>

          <div className="mb-20">
            <button 
              onClick={onAboutClick}
              className="inline-flex items-center gap-2 text-emerald-800 font-black uppercase tracking-widest text-sm hover:text-lime-600 transition-colors group"
            >
              Meet The Founders <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-white border border-stone-100 hover:border-emerald-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-default"
              >
                <div className="p-4 bg-stone-50 rounded-2xl shadow-sm group-hover:bg-emerald-800 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 28 })}
                </div>
                <div>
                  <div className="text-4xl font-bold text-stone-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-stone-400 tracking-[0.2em] uppercase">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
