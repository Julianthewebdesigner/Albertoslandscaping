
import React, { useEffect } from 'react';
import { Star, Quote, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';

const DETAILED_REVIEWS = [
  {
    name: "Sarah Jenkins",
    location: "Seattle, WA",
    date: "2 weeks ago",
    rating: 5,
    text: "Alberto and his team did an amazing job on our lawn. They were professional, punctual, and very meticulous with the edging. Our yard hasn't looked this good in years!",
    initials: "SJ"
  },
  {
    name: "Michael Rodriguez",
    location: "Kent, WA",
    date: "1 month ago",
    rating: 5,
    text: "Best tree trimming service in Kent. They handled a difficult tree removal with ease and safety. They cleaned up every branch and left the property spotless. Highly recommend!",
    initials: "MR"
  },
  {
    name: "David L.",
    location: "Renton, WA",
    date: "3 months ago",
    rating: 5,
    text: "We hired Alberto for a hardscape installation (pavers and a new walkway). The attention to detail was incredible. Great communication and fair pricing for premium work.",
    initials: "DL"
  },
  {
    name: "Emily W.",
    location: "Auburn, WA",
    date: "4 months ago",
    rating: 5,
    text: "I appreciated how Julian handled the project management side. It was so easy to coordinate. Alberto's 20 years of experience really shows in how he handles delicate ornamental shrubs.",
    initials: "EW"
  },
  {
    name: "Robert M.",
    location: "Des Moines, WA",
    date: "6 months ago",
    rating: 5,
    text: "Honest, hard-working family business. They've been doing my seasonal clean-ups for 3 years now and I wouldn't trust anyone else with my garden.",
    initials: "RM"
  },
  {
    name: "Jessica P.",
    location: "Federal Way, WA",
    date: "7 months ago",
    rating: 5,
    text: "Highly professional. They actually showed up when they said they would—a rarity in contracting these days. The final result exceeded my expectations.",
    initials: "JP"
  }
];

export const ReviewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Reviews Hero */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 animated-gradient opacity-60 z-0"></div>
        <div className="absolute inset-0 light-beam opacity-40 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
            <span className="text-lime-400 font-bold uppercase tracking-[0.4em] text-xs">Trust & Reputation</span>
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Our Clients' <br/>
            <span className="italic text-lime-400 font-light">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Real stories from homeowners in Kent, Seattle, and beyond who trust Alberto's Landscaping LLC.
          </p>
        </div>
      </section>

      {/* Aggregate Rating Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto -mt-20 relative z-20">
        <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-stone-100 grid lg:grid-cols-3 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-stone-900 text-3xl font-bold mb-4">Unmatched Quality</h2>
            <p className="text-stone-500 text-lg font-light leading-relaxed">
              We take pride in our 4.9-star average. Our commitment to excellence is reflected in every project we complete.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center border-y lg:border-y-0 lg:border-x border-stone-100 py-12 lg:py-0">
            <div className="text-7xl font-black text-emerald-900 mb-4 tracking-tighter">4.9</div>
            <div className="flex text-amber-400 mb-4 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
            </div>
            <p className="text-stone-400 font-bold uppercase tracking-widest text-xs">Average Google Rating</p>
          </div>

          <div className="text-center lg:text-right">
             <div className="text-3xl font-bold text-stone-900 mb-2">150+</div>
             <p className="text-stone-500 mb-8 font-light">Verified reviews from satisfied neighbors in the Greater Seattle area.</p>
             <a 
               href="https://share.google/LHqt5ogKvKXscqBWn" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn-beam inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-900 text-white font-bold hover:bg-emerald-800 transition-all shadow-xl"
             >
               View Google Page <ExternalLink size={18} />
             </a>
          </div>
        </div>
      </section>

      {/* Full Review Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {DETAILED_REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="break-inside-avoid-column bg-white p-10 rounded-[3rem] border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative flex flex-col"
            >
              <Quote className="absolute top-10 right-10 text-stone-50 group-hover:text-lime-400/20 transition-colors" size={50} />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-emerald-900 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 leading-tight">{review.name}</h4>
                  <p className="text-xs text-stone-400 font-bold uppercase tracking-widest">{review.location}</p>
                </div>
              </div>

              <div className="flex text-amber-400 mb-6 gap-1 relative z-10">
                {[...Array(review.rating)].map((_, starI) => (
                  <Star key={starI} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed font-light mb-8 relative z-10">
                "{review.text}"
              </p>

              <div className="mt-auto pt-6 border-t border-stone-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.15em] text-stone-400">
                <span>{review.date}</span>
                <span className="flex items-center gap-1 text-emerald-700/50">
                  <CheckCircle size={10} /> Verified Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-32 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-400/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <MessageCircle size={60} className="mx-auto mb-10 text-lime-400" />
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Work with us <span className="text-lime-400 italic font-light">recently?</span></h2>
          <p className="text-xl text-white/60 mb-16 leading-relaxed max-w-2xl mx-auto font-light">
            We value your feedback. Sharing your experience helps us grow and helps your neighbors find quality landscaping care.
          </p>
          <a 
            href="https://share.google/LHqt5ogKvKXscqBWn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-14 py-6 bg-lime-400 text-emerald-950 rounded-2xl font-bold text-xl hover:bg-lime-300 transition-all shadow-2xl hover:-translate-y-2"
          >
            Leave a Google Review
          </a>
        </div>
      </section>
    </div>
  );
};
