
import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Mail, Phone, Send, Check, Leaf, ExternalLink, MessageCircle } from 'lucide-react';
import { EMAIL, PHONE, ADDRESS, AREAS } from '../constants';
import { MetaTags } from './MetaTags';
import { sendLeadEmail, extractFormData } from '../lib/sendLeadEmail';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;

    try {
      // Extract and send form data using helper
      const leadData = extractFormData(form);
      await sendLeadEmail(leadData);

      // Show success message
      setSubmitStatus('success');
      form.reset();

      // Reset success message and button after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Contact Us - Free Quote for Landscaping Seattle & Kent | Alberto's Landscaping LLC"
        description="Get a free estimate for landscaping services in Seattle, Kent, Bellevue & Renton. Call (206) 853-1582 or email Alberto.30am@yahoo.com. Licensed & insured."
        image="https://albertoslandscaping.com/images/home-page/materialdelivery.jpeg"
        url="https://albertoslandscaping.com/contact"
      />
      <div className="bg-stone-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 animated-gradient opacity-60 z-0"></div>
        <div className="absolute inset-0 light-beam opacity-40 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
            <span className="text-lime-400 font-bold uppercase tracking-[0.4em] text-xs">Direct Access</span>
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Let's Start Your <br/>
            <span className="italic text-lime-400 font-light">Transformation</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Reach out today for a free estimate. Alberto and Julian are ready to help you plan your next outdoor project.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto -mt-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Form Side */}
          <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl border border-stone-100 proximity-card relative overflow-hidden">
            <div className="proximity-glow"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-900">
                  <Leaf size={32} className="fill-current" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-stone-900">Project Inquiry</h2>
                  <p className="text-stone-400 font-medium">Expected response within 24 hours</p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-6 py-4 bg-stone-50 rounded-2xl border border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="206-853-1582"
                      required
                      className="w-full px-6 py-4 bg-stone-50 rounded-2xl border border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                    required
                    className="w-full px-6 py-4 bg-stone-50 rounded-2xl border border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Seattle, Kent, etc."
                      required
                      className="w-full px-6 py-4 bg-stone-50 rounded-2xl border border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Preferred Contact Time</label>
                    <select
                      name="time"
                      required
                      className="w-full px-6 py-4 bg-stone-50 rounded-2xl border border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium appearance-none"
                    >
                      <option value="">Select time...</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">Service Type</label>
                  <select
                    name="service"
                    required
                    className="w-full px-6 py-4 bg-stone-50 rounded-2xl border border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="lawn">Lawn Maintenance</option>
                    <option value="landscape">Landscape Design</option>
                    <option value="hardscape">Hardscaping</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2 ml-1">How can we help?</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full px-6 py-4 bg-stone-50 rounded-2xl border border-transparent focus:border-emerald-500 focus:bg-white transition-all outline-none font-medium resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-beam w-full bg-emerald-900 text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-emerald-200 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Your Message'}
                  {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-lime-100 border border-lime-400 text-lime-800 rounded-2xl text-sm font-medium text-center">
                    ✓ Thanks! We'll contact you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-800 rounded-2xl text-sm font-medium text-center">
                    Something went wrong, please call or text us at {PHONE}.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="flex flex-col space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-stone-900 mb-8 tracking-tight">Direct Information</h2>
              <div className="space-y-6">
                 {[
                   { icon: <Phone size={24} />, title: "Call or Text", val: PHONE, href: `tel:${PHONE}` },
                   { icon: <Mail size={24} />, title: "Email Us", val: EMAIL, href: `mailto:${EMAIL}` },
                   { icon: <MapPin size={24} />, title: "Headquarters", val: ADDRESS + ", WA", href: "#" }
                 ].map((item, i) => (
                   <a 
                     key={i} 
                     href={item.href}
                     className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:border-lime-400 transition-all group"
                   >
                     <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-emerald-800 group-hover:bg-emerald-900 group-hover:text-lime-400 transition-all">
                       {item.icon}
                     </div>
                     <div>
                       <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">{item.title}</div>
                       <div className="text-xl font-bold text-stone-900">{item.val}</div>
                     </div>
                   </a>
                 ))}
              </div>
            </div>

            {/* Google Page Feature */}
            <div className="p-8 md:p-10 rounded-[3rem] bg-stone-900 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-full blur-3xl group-hover:bg-lime-400/20 transition-all"></div>
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6">
                    <svg className="w-8 h-8 fill-lime-400" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.12 5.4-7.84 5.4-4.8 0-8.68-4.04-8.68-9s3.88-9 8.68-9c2.72 0 4.56 1.16 5.6 2.12l2.6-2.52C19.04 2.4 16.12 1.12 12.48 1.12 6.48 1.12 1.6 6 1.6 12s4.88 10.88 10.88 10.88c6.28 0 10.44-4.44 10.44-10.6 0-.72-.08-1.28-.2-1.84h-10.24z"/>
                    </svg>
                    <span className="font-black uppercase tracking-[0.2em] text-sm text-lime-400">Google Verified Business</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Check Our Live Ratings</h3>
                 <p className="text-white/60 mb-8 font-light leading-relaxed">
                   View our full portfolio of reviews, photos of recent jobs, and business updates directly on our Google Business page.
                 </p>
                 <a 
                   href="https://share.google/LHqt5ogKvKXscqBWn"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 px-8 py-4 bg-lime-400 text-emerald-950 rounded-2xl font-bold hover:bg-lime-300 transition-all"
                 >
                   Visit Google Page <ExternalLink size={18} />
                 </a>
               </div>
            </div>

            {/* Areas We Cover */}
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-3 text-stone-600 font-medium">
                    <Check size={16} className="text-lime-500" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <MessageCircle size={48} className="mx-auto mb-8 text-emerald-900/20" />
          <p className="text-3xl md:text-4xl text-stone-800 font-light italic leading-tight">
            "Your property is a reflection of your home. We treat it with the same respect we give our own family."
          </p>
          <div className="mt-8 text-emerald-800 font-bold uppercase tracking-widest text-sm">— Alberto Aguilar</div>
        </div>
      </section>
    </div>
    </>
  );
};
