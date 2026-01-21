
import React from 'react';
import { Leaf, Trees, Sprout, Wind, Hammer, Palette, Truck } from 'lucide-react';
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
    description: 'Expert mowing, edging, and professional treatment schedules to keep your lawn vibrant and healthy year-round.',
    imageUrl: '',
    icon: 'Leaf',
    features: ['Weekly Mowing & Edging', 'Fertilization & Weed Control', 'Aeration & Over-seeding', 'Sod Installation']
  },
  {
    id: '2',
    title: 'Tree & Shrub Care',
    description: 'Professional tree inspections, expert consultations, precision tree trimming, and meticulous shrub trimming for a safe, beautiful landscape.',
    imageUrl: '',
    icon: 'Trees',
    features: ['Structural Pruning', 'Tree Risk Assessment', 'Hedge & Shrub Shaping', 'Ornamental Tree Care']
  },
  {
    id: '3',
    title: 'Material Delivery & Installation',
    description: 'Bulk material transport including bark, gravel, and compost. We provide both delivery and professional spreading/installation to save you the heavy lifting.',
    imageUrl: '',
    icon: 'Truck',
    features: ['Premium Mulch & Bark', 'Gravel & Decorative Stone', 'Organic Topsoil & Compost', 'Professional Spreading Service']
  },
  {
    id: '4',
    title: 'Seasonal Clean-Up',
    description: 'Comprehensive residential garden maintenance, leaf removal, and bed preparation to keep your home exterior pristine through every season.',
    imageUrl: '',
    icon: 'Wind',
    features: ['Fall Leaf Removal', 'Spring Bed Prep', 'Debris Hauling', 'Perennial Cutting & Pruning']
  },
  {
    id: '5',
    title: 'Landscape Design',
    description: 'Transformative conceptual designs for outdoor living spaces that blend functionality with the natural beauty of the Pacific Northwest.',
    imageUrl: '',
    icon: 'Palette',
    features: ['Site Consultations', 'Custom 2D/3D Designs', 'Planting Plans', 'Sustainable Gardening Solutions']
  },
  {
    id: '6',
    title: 'Hardscape Installation',
    description: 'High-quality patios, walkways, pavers, and retaining walls built with precision to enhance your property value and lifestyle.',
    imageUrl: '',
    icon: 'Hammer',
    features: ['Stone & Paver Patios', 'Retaining Walls', 'Walkway Design', 'Fire Pit Installation']
  }
];

export const AREAS = [
  "Kent", "Seattle", "Renton", "Auburn", "Federal Way", "Des Moines", "Covington", "Maple Valley", "Bellevue", "Tukwila"
];
