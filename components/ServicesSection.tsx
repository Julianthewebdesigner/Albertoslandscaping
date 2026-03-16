import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const ServiceImageMap: Record<string, string> = {
  'Complete Lawn Solutions': '/images/home-page/completelawnsolutions.jpeg',
  'Material Delivery & Installation': '/images/home-page/materialdelivery.jpeg',
  'Seasonal Clean-Up': '/images/home-page/seasonalcleanups.jpeg',
  'Hardscape Installation': '/images/home-page/hardscape.jpeg',
  'Landscape Design': '/images/home-page/completelawnsolutions.jpeg', // Fallback to lawn image
};

const ServiceAltTextMap: Record<string, string> = {
  'Complete Lawn Solutions': 'Professional lawn mowing and maintenance services in Seattle and Kent WA',
  'Material Delivery & Installation': 'Landscape material delivery and installation in Auburn and Federal Way WA',
  'Seasonal Clean-Up': 'Fall and spring seasonal cleanup services in Seattle metro area',
  'Hardscape Installation': 'Custom patio and hardscape installation in Kent and Seattle WA',
  'Landscape Design': 'Professional landscape design services for Seattle area homes',
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
              From meticulous lawn maintenance to custom hardscaping and landscape design, we provide the expert care your Pacific Northwest home deserves.
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
            const serviceImage = ServiceImageMap[service.title];
            const altText = ServiceAltTextMap[service.title];
            return (
              <div
                key={service.id}
                onClick={onSeeAll}
                className="group relative bg-white rounded-[3rem] shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-4 cursor-pointer card-glow overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative w-full h-48 overflow-hidden rounded-t-[3rem]">
                  <img
                    src={serviceImage}
                    alt={altText}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow p-10">
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