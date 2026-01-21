
import React, { useState, useEffect } from 'react';
import { BUSINESS_NAME, PHONE } from '../constants';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'services' | 'about' | 'reviews' | 'contact') => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: 'home' | 'services' | 'about' | 'reviews' | 'contact', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'About', view: 'about' },
    { label: 'Reviews', view: 'reviews' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled || currentView !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleNavClick('home', e)}
          className="flex items-center gap-3 group"
        >
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight leading-none transition-colors duration-300 ${
              isScrolled || currentView !== 'home' ? 'text-stone-900' : 'text-white'
            }`}>
              Alberto's
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
              isScrolled || currentView !== 'home' ? 'text-emerald-700' : 'text-lime-400'
            }`}>
              Landscaping LLC
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href="#"
              onClick={(e) => handleNavClick(link.view as any, e)}
              className={`font-medium transition-all hover:text-emerald-600 relative group/link ${
                isScrolled || currentView !== 'home' ? 'text-stone-600' : 'text-white/90'
              } ${currentView === link.view ? 'text-emerald-600' : ''}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                currentView === link.view ? 'w-full' : 'w-0 group-hover/link:w-full'
              }`}></span>
            </a>
          ))}
          <a 
            href={`tel:${PHONE.replace(/-/g, '')}`}
            className="flex items-center gap-2 bg-emerald-800 text-white hover:bg-emerald-700 px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-emerald-200/50 hover:-translate-y-0.5"
          >
            <Phone size={18} className="text-lime-400" />
            {PHONE}
          </a>
        </div>

        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled || currentView !== 'home' ? 'bg-stone-100 text-stone-900' : 'bg-white/10 text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center gap-6 md:hidden border-t">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href="#"
              className={`text-xl font-bold transition-colors ${currentView === link.view ? 'text-emerald-600' : 'text-stone-600'}`}
              onClick={(e) => handleNavClick(link.view as any, e)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href={`tel:${PHONE.replace(/-/g, '')}`}
            className="bg-emerald-800 text-white px-10 py-4 rounded-full font-bold mt-4 shadow-xl"
          >
             {PHONE}
          </a>
        </div>
      )}
    </nav>
  );
};
