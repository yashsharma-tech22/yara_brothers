
// Fix: Import React to resolve the 'React' namespace error for type definitions
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
