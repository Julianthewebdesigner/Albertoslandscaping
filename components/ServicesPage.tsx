
import React, { useEffect } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { EMAIL } from '../constants';
import { MetaTags } from './MetaTags';

interface ServicesPageProps {
  onNavigate?: (view: 'home' | 'services' | 'about' | 'reviews' | 'contact' | 'projects') => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceInquiry = (serviceTitle: string, serviceDescription: string, features: string[]) => {
    // Create pre-filled email with service details
    const subject = encodeURIComponent(`Service Inquiry - ${serviceTitle}`);
    const body = encodeURIComponent(
      `Hello Alberto,\n\n` +
      `I'm interested in learning more about your ${serviceTitle} services.\n\n` +
      `Service Details:\n${serviceDescription}\n\n` +
      `Specific features I'm interested in:\n` +
      features.map(feature => `- ${feature}`).join('\n') +
      `\n\nPlease contact me to discuss how you can help with my landscaping needs.\n\n` +
      `Thank you!`
    );

    // Try to navigate to contact page, fallback to email
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    }
  };

  const handleGetEstimate = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      const subject = encodeURIComponent('Free Estimate Request');
      const body = encodeURIComponent(
        `Hello Alberto,\n\n` +
        `I'd like to request a free estimate for landscaping services.\n\n` +
        `Please contact me to discuss my project.\n\n` +
        `Thank you!`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    }
  };

  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <MetaTags
        title="Our Services - Professional Landscaping Seattle & Kent | Alberto's Landscaping LLC"
        description="Full-service landscaping in Seattle, Kent & Bellevue: Lawn care, tree trimming, hardscaping, irrigation, seasonal cleanup. Licensed & insured. Free estimates!"
        image="https://albertoslandscaping.com/images/home-page/hardscape.jpeg"
        url="https://albertoslandscaping.com/services"
      />
      <div className="bg-stone-50 min-h-screen">
        {/* Services Hero */}
        <section className="relative py-32 md:py-48 overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 animated-gradient opacity-60 z-0"></div>
        <div className="absolute inset-0 light-beam opacity-40 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
            <span className="text-lime-400 font-bold uppercase tracking-[0.4em] text-xs">Full Capabilities</span>
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Professional Landscaping<br/>
            <span className="italic text-lime-400 font-light">Services in Seattle & Kent</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Elevating properties across Seattle, Kent, Bellevue, Renton, Auburn, and Federal Way with precision care, owner-operated oversight, and professional-grade results.
          </p>
        </div>
      </section>

      {/* Main Services Grid - Transitioned to minimalist single column */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        {/*
          CUSTOMIZE: Add service images
          1. Add images to public/images/ folder:
             - service-lawn-maintenance.jpg
             - service-tree-pruning.jpg
             - service-landscape-design.jpg
             - service-hardscaping.jpg
             - service-cleanup.jpg
             - service-materials.jpg
             - service-irrigation.jpg
          2. Recommended size: 1200x800 pixels
          3. Add <img> tag in each service div below
             Example:
             <img
               src={`/images/service-${service.id}.jpg`}
               alt={service.title}
               className="w-full h-64 object-cover rounded-3xl mb-8"
             />
        */}
        <div className="space-y-32">
          {SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group border-l-2 border-stone-200 pl-8 md:pl-16 hover:border-lime-400 transition-colors duration-500"
              >
                <div className="inline-block text-emerald-600 font-black text-xs uppercase tracking-[0.3em] mb-6">
                  Service Division 0{index + 1}
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-8 leading-tight tracking-tight group-hover:text-emerald-900 transition-colors">
                  {service.title}
                </h2>
                
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                  <div className="lg:col-span-2">
                    <p className="text-xl text-stone-500 mb-10 leading-relaxed font-light">
                      {service.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-4 text-stone-700 font-medium group/feat">
                          <CheckCircle2 size={18} className="text-lime-500" />
                          <span className="text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleServiceInquiry(service.title, service.description, service.features)}
                      className="btn-beam inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-emerald-900 text-white font-bold hover:bg-emerald-800 transition-all duration-300 shadow-xl hover:shadow-emerald-200/50 group/btn cursor-pointer"
                    >
                      Inquire About {service.title}
                      <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>

                  {/* Decorative number for minimalist visual balance */}
                  <div className="hidden lg:flex justify-end pt-4">
                    <span className="text-[12rem] font-black text-stone-100 leading-none select-none group-hover:text-emerald-50 transition-colors duration-700">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-lime-400/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-emerald-400/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Ready to start your <span className="text-lime-400 italic font-light">transformation?</span></h2>
          <p className="text-xl text-white/60 mb-16 leading-relaxed font-light">
            Join hundreds of satisfied homeowners in Kent and Seattle who trust Alberto for their outdoor maintenance and design needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
             <button
               onClick={handleGetEstimate}
               className="px-14 py-6 bg-lime-400 text-emerald-950 rounded-2xl font-bold text-xl hover:bg-lime-300 transition-all shadow-2xl hover:-translate-y-2 cursor-pointer"
             >
               Get Your Free Estimate
             </button>
             <button
               onClick={handleBackToHome}
               className="flex items-center gap-2 text-white/80 hover:text-white font-bold transition-all group cursor-pointer"
             >
               <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> Back to Home Page
             </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
