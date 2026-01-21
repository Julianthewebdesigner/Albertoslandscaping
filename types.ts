
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface Area {
  name: string;
  coordinates: { lat: number; lng: number };
}

export type ServiceType = 'Lawn Care' | 'Tree & Shrub' | 'Hardscaping' | 'Cleanup' | 'Landscape Design';
