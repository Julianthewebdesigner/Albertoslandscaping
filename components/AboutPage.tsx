
import React, { useEffect } from 'react';
import { CheckCircle, Shield, Clock, DollarSign, Rocket, ThumbsUp, Heart } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (view: 'home' | 'services' | 'about' | 'reviews' | 'contact') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theSixDones = [
    { label: "SAFELY", prefix: "DONE", icon: <Shield size={24} /> },
    { label: "ON TIME", prefix: "DONE", icon: <Clock size={24} /> },
    { label: "ON BUDGET", prefix: "DONE", icon: <DollarSign size={24} /> },
    { label: "AS PROMISED", prefix: "DONE", icon: <CheckCircle size={24} /> },
    { label: "WITH INNOVATION", prefix: "DONE", icon: <Rocket size={24} /> },
    { label: "AS A TEAM", prefix: "DONE", icon: <ThumbsUp size={24} /> },
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 animated-gradient opacity-60 z-0"></div>
        <div className="absolute inset-0 light-beam opacity-40 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
            <span className="text-lime-400 font-bold uppercase tracking-[0.4em] text-xs">Our Legacy</span>
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            The Story Behind <br/>
            <span className="italic text-lime-400 font-light">The Green</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            A family-run commitment to craftsmanship, integrity, and the beauty of Washington landscapes.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Alberto */}
          <div className="group bg-white p-12 rounded-[3rem] shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="mb-8">
               <div className="mb-6">
                 <img
                   src="/images/about-us/alberto.jpg"
                   alt="Alberto Aguilar - Owner and master landscaper with 20+ years experience in Seattle and Kent WA"
                   className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg border-4 border-emerald-100 group-hover:border-lime-400 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500"
                   loading="lazy"
                 />
               </div>
               <h2 className="text-4xl font-bold text-stone-900 mb-2">Alberto Aguilar</h2>
               <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Owner & Master Craftsman</p>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 font-light">
              With over <span className="font-bold text-stone-900">20 years of experience</span> in the landscaping industry, Alberto is the bedrock of this company. His journey began with a simple pair of shears and a deep respect for the natural world.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Alberto doesn't just manage projects; he's on the ground, ensuring every cut, every plant, and every stone is placed with the precision that has defined his career. His expertise transforms ordinary yards into enduring outdoor sanctuaries.
            </p>
          </div>

          {/* Julian */}
          <div className="group bg-white p-12 rounded-[3rem] shadow-sm border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="mb-8">
               <div className="mb-6">
                 <img
                   src="/images/about-us/julian.jpg"
                   alt="Julian Aguilar - Project Manager for landscaping services in Seattle, Kent, and Bellevue WA"
                   className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-lg border-4 border-emerald-100 group-hover:border-lime-400 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500"
                   loading="lazy"
                 />
               </div>
               <h2 className="text-4xl font-bold text-stone-900 mb-2">Julian Aguilar</h2>
               <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Project Manager & Digital Director</p>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6 font-light">
              Representing the next generation, Julian brings a modern edge to the company. A dedicated young worker with exceptional communication skills, he bridges the gap between old-school craftsmanship and modern client needs.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Julian manages the online presence, developed this website, and oversees project logistics to ensure everything runs smoothly. His passion lies in making sure every client's vision is accurately communicated and flawlessly executed.
            </p>
          </div>
        </div>
      </section>

      {/* The 6 Dones Section */}
      <section className="py-24 bg-stone-100/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 uppercase tracking-tight">THE 6 DONES</h2>
            <p className="text-xl text-stone-500 max-w-3xl leading-relaxed">
              The 6 DONES are our foundational principles and the guide bar in which we carry out our daily commitments to our clients and our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theSixDones.map((done, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex items-center gap-6 group hover:shadow-xl hover:border-lime-400 transition-all duration-300"
              >
                <div className="text-stone-400 group-hover:text-emerald-800 transition-colors">
                  {done.icon}
                </div>
                <div>
                  <div className="text-stone-900 font-black text-xl leading-none">{done.prefix}</div>
                  <div className="text-emerald-800 font-black text-2xl uppercase tracking-tight">{done.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Unique Proposition */}
      <section className="py-32 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-8">
           <Heart className="text-lime-500 fill-current" size={24} />
           <span className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-sm">What Makes Us Unique</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-10 leading-tight">
          A Legacy of <span className="text-emerald-700 italic">Trust</span>
        </h2>
        <div className="space-y-8 text-xl text-stone-600 font-light leading-relaxed">
          <p>
            What sets Alberto's Landscaping LLC apart isn't just the tools we use or the plants we select—it's the family bond that fuels our work. We combine decades of field-tested wisdom with modern project management to provide a service that is both reliable and revolutionary.
          </p>
          <p>
            We don't believe in "one size fits all." Every project is a unique collaboration. You trust us with your home, and we honor that trust by delivering results that are <span className="font-bold text-stone-900 italic">As Promised</span>, every single time.
          </p>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-24 bg-emerald-900 text-white text-center">
         <h3 className="text-3xl font-bold mb-8">Ready to experience the Alberto's difference?</h3>
         <button
           onClick={() => onNavigate('contact')}
           className="px-12 py-5 bg-lime-400 text-emerald-950 rounded-2xl font-bold text-lg hover:bg-lime-300 transition-all shadow-xl hover:-translate-y-1"
         >
           Book Your Consultation
         </button>
      </section>
    </div>
  );
};
