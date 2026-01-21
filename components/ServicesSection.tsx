import React from 'react';
import { SERVICES } from '../constants';
import { Leaf, Trees, Sprout, Wind, Hammer, Palette, Truck, ArrowUpRight, ArrowRight } from 'lucide-react';

const IconMap: Record<string, React.FC<{ size?: number; strokeWidth?: number }>> = {
  Leaf, Trees, Sprout, Wind, Hammer, Palette, Truck
};

interface ServicesSectionProps {
  onSeeAll?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSeeAll }) => {
  return (
    <section id="services" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-100/20 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-4">
               <div className="h-[2px] w-8 bg-emerald-600"></div>
               <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Professional Care</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6">Our Services</h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              From meticulous lawn maintenance to complex tree consultations, we provide the expert care your Pacific Northwest home deserves.
            </p>
          </div>
          
          <button 
            onClick={onSeeAll}
            className="hidden md:flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-stone-200 text-stone-900 font-bold hover:bg-emerald-900 hover:text-white transition-all duration-300 group shadow-sm"
          >
            Explore All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {SERVICES.slice(0, 6).map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div 
                key={service.id}
                onClick={onSeeAll}
                className="group relative bg-white rounded-[3rem] p-10 shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-4 cursor-pointer card-glow overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all duration-500 group-hover:bg-lime-400/20"></div>

                {/* Glowing Icon Header */}
                <div className="mb-8 relative w-fit">
                  <div className="absolute -inset-4 bg-lime-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-20 h-20 bg-stone-50 rounded-3xl flex items-center justify-center text-emerald-800 shadow-sm border border-stone-100 group-hover:bg-emerald-900 group-hover:text-lime-400 hover-glow transition-all duration-500 transform group-hover:rotate-12">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Action Link */}
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-stone-50">
                    <span className="flex items-center gap-2 font-bold text-stone-900 group-hover:text-emerald-600 transition-colors tracking-tight text-sm uppercase">
                      Learn More <ArrowUpRight size={16} className="text-lime-500" />
                    </span>
                    <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-300 group-hover:bg-lime-400 group-hover:text-emerald-950 transition-all duration-500">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center md:hidden">
          <button 
            onClick={onSeeAll}
            className="w-full flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-emerald-900 text-white font-bold transition-all shadow-xl"
          >
            Explore Detailed Services
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};