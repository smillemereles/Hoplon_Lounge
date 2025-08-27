// Environment Configuration
export const ENV = {
  NODE_ENV: 'development' as const,
  VITE_APP_TITLE: 'Hoplon Lounge',
  VITE_APP_VERSION: '1.5.0',
  VITE_API_URL: 'http://localhost:3000',
  VITE_APP_URL: 'http://localhost:5173',
} as const;

// App Configuration
export const APP_CONFIG = {
  name: 'Hoplon Lounge',
  version: ENV.VITE_APP_VERSION,
  description: 'Donde el honor espartano se encuentra con el sabor paraguayo y español',
  author: 'Hoplon Lounge Team',
  contact: {
    email: 'info@hoplonlounge.com',
    phone: '+595 21 123 456',
    address: 'Asunción, Paraguay',
  },
} as const;

// Feature Flags
export const FEATURES = {
  ENABLE_ANALYTICS: false,
  ENABLE_DEBUG_MODE: true,
  ENABLE_PWA: true,
  ENABLE_OFFLINE_MODE: false,
} as const;

// Performance Configuration
export const PERFORMANCE = {
  LAZY_LOAD_THRESHOLD: 0.1,
  IMAGE_LOADING_STRATEGY: 'lazy' as const,
  ANIMATION_REDUCED_MOTION: false,
  SCROLL_THROTTLE_DELAY: 16, // ~60fps
} as const;

// SEO Configuration
export const SEO = {
  DEFAULT_TITLE: 'Hoplon Lounge - Platos Legendarios',
  DEFAULT_DESCRIPTION: 'Restaurante de lujo en Asunción, Paraguay. Sabores únicos que combinan la tradición paraguaya con la elegancia española.',
  DEFAULT_KEYWORDS: ['restaurante', 'paraguay', 'asuncion', 'gastronomia', 'lujo', 'español'],
  DEFAULT_IMAGE: '/og-image.jpg',
  SITE_URL: ENV.VITE_APP_URL,
} as const;

// Validation Rules
export const VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 50,
  MIN_PHONE_LENGTH: 8,
  MAX_PHONE_LENGTH: 15,
  MIN_GUESTS: 1,
  MAX_GUESTS: 20,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 500,
} as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  DEFAULT_DURATION: 0.3,
  FAST_DURATION: 0.15,
  SLOW_DURATION: 0.6,
  VERY_SLOW_DURATION: 1.0,
  STAGGER_DELAY: 0.1,
  HOVER_SCALE: 1.05,
  TAP_SCALE: 0.95,
} as const;

// Breakpoints Configuration
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'hoplon-theme',
  LANGUAGE: 'hoplon-language',
  USER_PREFERENCES: 'hoplon-user-preferences',
  CART_ITEMS: 'hoplon-cart-items',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Algo salió mal. Por favor, inténtalo de nuevo.',
  NETWORK: 'Error de conexión. Verifica tu internet.',
  VALIDATION: 'Por favor, verifica los datos ingresados.',
  NOT_FOUND: 'El recurso solicitado no fue encontrado.',
  UNAUTHORIZED: 'No tienes permisos para acceder a este recurso.',
  SERVER_ERROR: 'Error del servidor. Inténtalo más tarde.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  RESERVATION_CREATED: 'Reserva creada exitosamente.',
  MESSAGE_SENT: 'Mensaje enviado exitosamente.',
  PROFILE_UPDATED: 'Perfil actualizado exitosamente.',
  PREFERENCES_SAVED: 'Preferencias guardadas exitosamente.',
} as const; 