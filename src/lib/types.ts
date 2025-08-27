// Navigation Types
export interface NavigationItem {
  name: string;
  path: string;
}

// Menu Item Types
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  allergens?: string[];
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

// Reservation Types
export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

// Gallery Types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category: 'food' | 'ambiance' | 'events';
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: number;
  duration?: string;
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Validation Types
export interface ValidationError {
  field: string;
  message: string;
}

// Scroll Position Types
export interface ScrollPosition {
  x: number;
  y: number;
}

// Window Size Types
export interface WindowSize {
  width: number;
  height: number;
}

// Breakpoint Types
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Route Parameters
export interface RouteParams {
  [key: string]: string;
}

// Query Parameters
export interface QueryParams {
  [key: string]: string | string[] | undefined;
} 