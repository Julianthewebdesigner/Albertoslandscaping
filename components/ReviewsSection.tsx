
import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const PREVIEW_REVIEWS = [
  {
    name: "Sarah Jenkins",
    date: "2 weeks ago",
    rating: 5,
    text: "Alberto and his team did an amazing job on our lawn. They were professional, punctual, and very meticulous with the edging. Our yard hasn't looked this good in years!",
    initials: "SJ"
  },
  {
    name: "Michael Rodriguez",
    date: "1 month ago",
    rating: 5,
    text: "Alberto's crew transformed our backyard with a beautiful paver patio and walkway. They were efficient, cleaned up completely, and the quality of the work is outstanding. Highly recommend!",
    initials: "MR"
  },
  {
    name: "David L.",
    date: "3 months ago",
    rating: 5,
    text: "We hired Alberto for a hardscape installation (pavers and a new walkway). The attention to detail was incredible. Great communication and fair pricing for premium work.",
    initials: "DL"
  }
];

interface ReviewsSectionProps {
  onSeeAll?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onSeeAll }) => {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-stone-50/50 -skew-y-3 origin-top-left pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-[2px] w-8 bg-emerald-600"></div>
              <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Social Proof</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              What Your Neighbors <br/>
              <span className="text-emerald-700 italic">Are Saying</span>
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-stone-600 font-medium">
                <span className="font-bold text-stone-900">4.9/5 Rating</span> based on 150+ Google Reviews
              </p>
            </div>
          </div>
          
          <button 
            onClick={onSeeAll}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-stone-100 text-stone-900 font-bold hover:bg-emerald-900 hover:text-white transition-all duration-300 group shadow-sm"
          >
            Read All Reviews
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/*
            CUSTOMIZE: Add customer photos (optional)
            1. Add photos to: public/images/customer-[name].jpg
            2. Recommended size: 400x400 pixels (square)
            3. Replace the initials div with:
               <img
                 src="/images/customer-[name].jpg"
                 alt={review.name}
                 className="w-14 h-14 rounded-full object-cover shadow-lg border-2 border-white"
               />
          */}
          {PREVIEW_REVIEWS.map((review, i) => (
            <div
              key={i}
              onClick={onSeeAll}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group relative flex flex-col h-full cursor-pointer"
            >
              {/* Quote Icon Overlay */}
              <div className="absolute top-8 right-8 text-stone-50 group-hover:text-lime-400/20 transition-colors duration-500">
                <Quote size={60} />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-emerald-900 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg leading-tight">{review.name}</h4>
                  <p className="text-sm text-stone-400 font-medium">{review.date}</p>
                </div>
              </div>

              <div className="flex text-amber-400 mb-6 gap-1 relative z-10">
                {[...Array(review.rating)].map((_, starI) => (
                  <Star key={starI} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed italic mb-8 flex-grow relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-2 pt-6 border-t border-stone-50 text-stone-400 text-xs font-bold uppercase tracking-widest">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.12 5.4-7.84 5.4-4.8 0-8.68-4.04-8.68-9s3.88-9 8.68-9c2.72 0 4.56 1.16 5.6 2.12l2.6-2.52C19.04 2.4 16.12 1.12 12.48 1.12 6.48 1.12 1.6 6 1.6 12s4.88 10.88 10.88 10.88c6.28 0 10.44-4.44 10.44-10.6 0-.72-.08-1.28-.2-1.84h-10.24z"/>
                </svg>
                Verified Review
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-lime-400/5 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
