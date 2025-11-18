import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface NavLink {
  id: string;
  label: string;
}