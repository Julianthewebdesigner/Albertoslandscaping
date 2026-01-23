
import React, { useEffect } from 'react';
import { CheckCircle, MapPin, Hammer } from 'lucide-react';
import { ImageCarousel } from './ImageCarousel';
import { EMAIL, PHONE } from '../constants';
import { MetaTags } from './MetaTags';

/*
  PROJECT CONFIGURATION
  =====================
  To add a new project, add an entry to the PROJECTS array below:

  {
    id: 'project-folder-name',           // Unique identifier
    name: 'Client Name or Project Title',
    location: 'City, State',
    description: 'Brief description of the project and work completed.',
    services: ['Service 1', 'Service 2'], // List of services provided
    images: [                             // List of image filenames
      '/images/project-folder-name/photo1.jpg',
      '/images/project-folder-name/photo2.jpg',
      // Add more images here
    ]
  }

  STEPS TO ADD A NEW PROJECT:
  1. Create folder: public/images/project-folder-name/
  2. Add your JPG/PNG images to that folder
  3. Add a new project object to the PROJECTS array below
  4. List all image paths in the 'images' array
  5. The carousel will display them in the order listed

  TIP: Name your images descriptively (e.g., 'front-yard-before.jpg', 'backyard-after.jpg')
*/

interface Project {
  id: string;
  name: string;
  location: string;
  description: string;
  services: string[];
  images: string[];
}

// ⬇️ ADD NEW PROJECTS HERE ⬇️
const PROJECTS: Project[] = [
  {
    id: 'dan-trutman',
    name: 'Dan Trutman',
    location: 'Kent, WA',
    description: 'Complete landscape transformation featuring professional lawn care, strategic plantings, and hardscape enhancements. This project showcases our commitment to precision and aesthetic excellence.',
    services: ['Landscape Design', 'Lawn Maintenance', 'Hardscaping', 'Plant Installation'],
    images: [
      // Your actual Dan Trutman project images
      '/images/dan-trutman/before-1.jpg',
      '/images/dan-trutman/before-2.jpg',
      '/images/dan-trutman/before-3.jpg',
      '/images/dan-trutman/during-1.jpg',
      '/images/dan-trutman/during-2.jpg',
      // ⬆️ Add more images here as needed ⬆️
    ]
  },
  {
    id: 'grass-installation-burien-wa',
    name: 'Grass Installation – Burien WA',
    location: 'Burien, WA',
    description: 'Professional grass installation project transforming an outdoor space with lush, healthy turf. Expert preparation, grading, and installation techniques ensure long-lasting results and a beautiful lawn.',
    services: ['Grass Installation', 'Soil Preparation', 'Grading & Leveling', 'Lawn Care'],
    images: [
      '/images/grass-installation-burien-wa/IMG_0936.jpeg',
      '/images/grass-installation-burien-wa/IMG_0937.jpeg',
      '/images/grass-installation-burien-wa/IMG_0938.jpeg',
      '/images/grass-installation-burien-wa/IMG_0939.jpeg',
      '/images/grass-installation-burien-wa/IMG_0940.jpeg',
      '/images/grass-installation-burien-wa/IMG_0943.jpeg',
      '/images/grass-installation-burien-wa/IMG_0944.jpeg',
      '/images/grass-installation-burien-wa/IMG_0945.jpeg',
      '/images/grass-installation-burien-wa/IMG_0946.jpeg',
      '/images/grass-installation-burien-wa/IMG_0948.jpeg',
      '/images/grass-installation-burien-wa/IMG_0949.jpeg',
      '/images/grass-installation-burien-wa/IMG_0956.jpeg',
      '/images/grass-installation-burien-wa/IMG_2326.jpeg',
    ]
  },
  // Add more projects here following the same pattern
  // Example:
  // {
  //   id: 'smith-residence',
  //   name: 'Smith Residence',
  //   location: 'Seattle, WA',
  //   description: 'Modern backyard oasis with custom water features and native plantings...',
  //   services: ['Landscape Design', 'Irrigation', 'Water Features'],
  //   images: [
  //     '/images/smith-residence/front-view.jpg',
  //     '/images/smith-residence/backyard-1.jpg',
  //     '/images/smith-residence/water-feature.jpg',
  //   ]
  // },
];

// No helper function needed - images are specified directly in the PROJECTS array

interface ProjectsPageProps {
  onNavigate?: (view: 'home' | 'services' | 'about' | 'reviews' | 'contact' | 'projects') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConsultation = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      // Fallback to email if navigation not available
      window.location.href = `mailto:${EMAIL}?subject=Consultation Request - Project Portfolio&body=Hello Alberto,%0D%0A%0D%0AI'm interested in scheduling a consultation for my landscaping project.%0D%0A%0D%0APlease contact me at your earliest convenience.%0D%0A%0D%0AThank you!`;
    }
  };

  return (
    <>
      <MetaTags
        title="Our Projects - Landscaping Portfolio Seattle & Kent | Alberto's Landscaping LLC"
        description="View our completed landscaping projects in Seattle, Kent, Bellevue & Renton. Real transformations featuring lawn care, hardscaping, design & installation work."
        image="https://albertoslandscaping.com/images/grass-installation-burien-wa/IMG_0956.jpeg"
        url="https://albertoslandscaping.com/projects"
      />
      <div className="bg-stone-50 min-h-screen">
        {/* Projects Hero */}
        <section className="relative py-32 md:py-48 overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 animated-gradient opacity-60 z-0"></div>
        <div className="absolute inset-0 light-beam opacity-40 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
            <span className="text-lime-400 font-bold uppercase tracking-[0.4em] text-xs">Portfolio</span>
            <div className="h-[1px] w-12 bg-lime-400/50"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Featured <br/>
            <span className="italic text-lime-400 font-light">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our transformative landscaping work across Seattle, Kent, Bellevue, and the greater Puget Sound area, where craftsmanship meets natural beauty.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectSection key={project.id} project={project} index={index} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-lime-400/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-emerald-400/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">
            Ready for your own <span className="text-lime-400 italic font-light">transformation?</span>
          </h2>
          <p className="text-xl text-white/60 mb-16 leading-relaxed font-light">
            Let's discuss your vision and create an outdoor space that reflects your style and enhances your home.
          </p>
          <button
            onClick={handleConsultation}
            className="px-14 py-6 bg-lime-400 text-emerald-950 rounded-2xl font-bold text-xl hover:bg-lime-300 transition-all shadow-2xl hover:-translate-y-2 cursor-pointer"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
    </>
  );
};

// Individual project section component
const ProjectSection: React.FC<{
  project: Project;
  index: number;
  onNavigate?: (view: 'home' | 'services' | 'about' | 'reviews' | 'contact' | 'projects') => void;
}> = ({ project, index, onNavigate }) => {

  const handleQuoteRequest = () => {
    // Create pre-filled email with project details
    const subject = encodeURIComponent(`Quote Request - Similar to ${project.name} Project`);
    const body = encodeURIComponent(
      `Hello Alberto,\n\n` +
      `I'm interested in getting a quote for landscaping work similar to your "${project.name}" project in ${project.location}.\n\n` +
      `Services I'm interested in:\n` +
      project.services.map(service => `- ${service}`).join('\n') +
      `\n\nPlease contact me to discuss my project.\n\n` +
      `Thank you!`
    );

    // Try to navigate to contact page, fallback to email
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="group">
      {/* Project header */}
      <div className="mb-12">
        <div className="inline-block text-emerald-600 font-black text-xs uppercase tracking-[0.3em] mb-4">
          Project {String(index + 1).padStart(2, '0')}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 leading-tight tracking-tight group-hover:text-emerald-900 transition-colors">
          {project.name}
        </h2>
        <div className="flex items-center gap-2 text-stone-500 mb-6">
          <MapPin size={18} className="text-lime-500" />
          <span className="font-medium">{project.location}</span>
        </div>
      </div>

      {/* Two-column layout: Image carousel + Details */}
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Image carousel - takes up 3 columns */}
        <div className="lg:col-span-3">
          <ImageCarousel images={project.images} alt={project.name} />
        </div>

        {/* Project details - takes up 2 columns */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-3">
              <Hammer size={20} className="text-emerald-600" />
              Project Overview
            </h3>
            <p className="text-stone-600 leading-relaxed font-light">
              {project.description}
            </p>
          </div>

          {/* Services provided */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Services Provided</h3>
            <div className="space-y-3">
              {project.services.map((service, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle size={18} className="text-lime-500 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-emerald-900 p-8 md:p-10 rounded-3xl shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in similar work?</h3>
            <p className="text-white/80 mb-6 font-light leading-relaxed">
              Get in touch to discuss your project and receive a free, no-obligation quote.
            </p>
            <button
              onClick={handleQuoteRequest}
              className="w-full btn-beam bg-lime-400 text-emerald-950 font-bold py-4 rounded-2xl hover:bg-lime-300 transition-all shadow-lg cursor-pointer"
            >
              Request Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
