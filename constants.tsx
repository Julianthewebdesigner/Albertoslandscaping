
import React from 'react';
import { Leaf, Sprout, Wind, Hammer, Palette, Truck } from 'lucide-react';
import { Service } from './types';

export const BUSINESS_NAME = "Alberto's Landscaping LLC";
export const PHONE = "206-853-1582";
export const EMAIL = "Alberto.30am@yahoo.com";
export const ADDRESS = "Kent, WA";

export interface DetailedService extends Service {
  features: string[];
}

export const SERVICES: DetailedService[] = [
  {
    id: '1',
    title: 'Complete Lawn Solutions',
    description: 'Expert lawn mowing, edging, and professional treatment schedules serving Seattle, Kent, and Bellevue to keep your lawn vibrant and healthy year-round in the Pacific Northwest climate.',
    imageUrl: '',
    icon: 'Leaf',
    features: ['Weekly Mowing & Edging', 'Fertilization & Weed Control', 'Aeration & Over-seeding', 'Sod Installation']
  },
  {
    id: '3',
    title: 'Material Delivery & Installation',
    description: 'Bulk landscape material transport and installation throughout Kent, Auburn, and Federal Way including bark, gravel, and compost. We provide both delivery and professional spreading to save you the heavy lifting.',
    imageUrl: '',
    icon: 'Truck',
    features: ['Premium Mulch & Bark', 'Gravel & Decorative Stone', 'Organic Topsoil & Compost', 'Professional Spreading Service']
  },
  {
    id: '4',
    title: 'Seasonal Clean-Up',
    description: 'Comprehensive residential garden maintenance, leaf removal, and bed preparation for Seattle area homes to keep your property pristine through every Pacific Northwest season.',
    imageUrl: '',
    icon: 'Wind',
    features: ['Fall Leaf Removal', 'Spring Bed Prep', 'Debris Hauling', 'Perennial Cutting & Pruning']
  },
  {
    id: '5',
    title: 'Landscape Design',
    description: 'Transformative landscape design for outdoor living spaces in Bellevue, Renton, and surrounding areas that blend functionality with the natural beauty of the Pacific Northwest.',
    imageUrl: '',
    icon: 'Palette',
    features: ['Site Consultations', 'Custom 2D/3D Designs', 'Planting Plans', 'Sustainable Gardening Solutions']
  },
  {
    id: '6',
    title: 'Hardscape Installation',
    description: 'High-quality patio, walkway, paver, and retaining wall installation in Seattle and Kent built with precision to enhance your property value and outdoor lifestyle.',
    imageUrl: '',
    icon: 'Hammer',
    features: ['Stone & Paver Patios', 'Retaining Walls', 'Walkway Design', 'Fire Pit Installation']
  }
];

export const AREAS = [
  "Kent", "Seattle", "Renton", "Auburn", "Federal Way", "Des Moines", "Covington", "Maple Valley", "Bellevue", "Tukwila"
];
