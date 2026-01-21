
import React from 'react';
import { BUSINESS_NAME, PHONE, EMAIL, ADDRESS } from '../constants';

interface FooterProps {
  onNavigate: (view: 'home' | 'services' | 'about' | 'reviews' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="group">
                <span className="text-2xl font-bold tracking-tight block leading-tight group-hover:text-lime-400 transition-colors">{BUSINESS_NAME}</span>
                <span className="text-lime-400 text-xs font-bold uppercase tracking-widest">Est. 2012</span>
              </a>
            </div>
            <p className="text-stone-400 max-w-sm mb-8">
              Transforming outdoor spaces in the Pacific Northwest with professional care, creative design, and a commitment to quality that lasts generations.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-lime-400">Quick Navigation</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-lime-400 transition-colors">Home Page</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="hover:text-lime-400 transition-colors">Our Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="hover:text-lime-400 transition-colors">About Our Team</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('reviews'); }} className="hover:text-lime-400 transition-colors">Client Reviews</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-lime-400 transition-colors text-white font-bold">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-lime-400">Direct Contact</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href={`tel:${PHONE}`} className="hover:text-lime-400 transition-colors font-bold">{PHONE}</a></li>
              <li className="break-all"><a href={`mailto:${EMAIL}`} className="hover:text-lime-400 transition-colors">{EMAIL}</a></li>
              <li>{ADDRESS}, WA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
