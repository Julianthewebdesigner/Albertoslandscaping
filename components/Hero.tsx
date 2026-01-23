
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, isEmailConfigured } from '../emailConfig';

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    service: '',
    location: '',
    phone: '',
    from_name: ''  // Added for EmailJS template
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Check if EmailJS is configured
    if (!isEmailConfigured()) {
      alert(`Thank you! Alberto will contact you regarding ${formData.service} at ${formData.location}.\n\n⚠️ EMAIL NOT CONFIGURED: To receive form submissions, please set up EmailJS.\nSee emailConfig.ts for detailed instructions.`);
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email to Alberto.30am@yahoo.com using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.from_name || 'Quick Quote Request',
          service: formData.service,
          location: formData.location,
          phone: formData.phone,
          to_email: EMAILJS_CONFIG.RECIPIENT_EMAIL,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ service: '', location: '', phone: '', from_name: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    formRef.current.style.setProperty('--x', `${x}px`);
    formRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with animated overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home-page/completelawnsolutions.jpeg"
          alt="Professional lawn care and landscaping services in Seattle, Kent, and Bellevue WA - Alberto's Landscaping"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-emerald-950/70" />
        <div className="absolute inset-0 animated-gradient opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="text-white">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest">Accepting New Year Projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Highest-Rated <span className="text-lime-400 italic">Lawn Care</span> & Landscaping Services In Seattle, Kent & Bellevue
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg leading-relaxed font-light">
            Professional landscape design and maintenance serving Seattle, Kent, Renton, Bellevue, Auburn, and Federal Way. Family-owned with 20+ years of Pacific Northwest expertise since 2012.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center">
                <CheckCircle className="text-lime-400" size={18} />
              </div>
              <span className="text-sm font-semibold tracking-wide uppercase">Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center">
                <CheckCircle className="text-lime-400" size={18} />
              </div>
              <span className="text-sm font-semibold tracking-wide uppercase">Owner-Operated Care</span>
            </div>
          </div>
        </div>

        {/* Quick Quote Form */}
        <div 
          ref={formRef}
          onMouseMove={handleMouseMove}
          className="proximity-card relative bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 transform transition-all duration-500"
        >
          <div className="proximity-glow"></div>
          
          <h2 className="text-3xl font-bold text-stone-900 mb-2 relative z-10">Get a Free Quotation</h2>
          <p className="text-stone-500 mb-8 relative z-10">Send us your project details and we'll be in touch within 24 hours.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Type of Service</label>
              <select 
                required
                className="w-full px-5 py-4 bg-stone-100 rounded-2xl border-none focus:ring-2 focus:ring-emerald-600 transition-all outline-none text-stone-900 font-medium"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Select a service...</option>
                <option value="Lawn Maintenance">Lawn Maintenance</option>
                <option value="Tree Pruning">Tree Pruning</option>
                <option value="Landscape Design">Landscape Design</option>
                <option value="Hardscaping">Hardscaping</option>
                <option value="Clean-up">Seasonal Clean-up</option>
                <option value="Material">Material Delivery & Install</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Location</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Kent, WA"
                  className="w-full px-5 py-4 bg-stone-100 rounded-2xl border-none focus:ring-2 focus:ring-emerald-600 transition-all outline-none text-stone-900 font-medium"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="206-853-1582"
                  className="w-full px-5 py-4 bg-stone-100 rounded-2xl border-none focus:ring-2 focus:ring-emerald-600 transition-all outline-none text-stone-900 font-medium"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-beam w-full bg-emerald-900 text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-emerald-200/50 flex items-center justify-center gap-3 group mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Request My Free Quote'}
              </span>
              {!isSubmitting && <ArrowRight className="relative z-10 transform group-hover:translate-x-2 transition-transform" />}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-lime-100 border border-lime-400 text-lime-800 rounded-2xl text-sm font-medium text-center">
                ✓ Thank you! We'll contact you within 24 hours.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-800 rounded-2xl text-sm font-medium text-center">
                Something went wrong. Please try calling us directly at (253) 630-1741.
              </div>
            )}
          </form>

          <p className="text-center text-[10px] text-stone-400 mt-6 uppercase tracking-widest font-bold">
            Guaranteed Response Within 24 Hours
          </p>
        </div>
      </div>
    </section>
  );
};
