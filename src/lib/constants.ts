// Application Routes
export const ROUTES = {
  HOME: "/",
  MENU: {
    ENTRADAS: "/menu/entradas",
    PICADAS: "/menu/picadas",
    PLATOS: "/menu/platos",
    PARRILLA: "/menu/parrilla",
    BEBIDAS: "/menu/bebidas",
    POSTRES: "/menu/postres",
  },
  GALLERY: "/gallery",
  SERVICIOS: "/servicios",
  MAINTENANCE: "/maintenance",
} as const;

// Navigation Menu Items
export const NAVIGATION_ITEMS = [
  { name: "Entradas", path: ROUTES.MENU.ENTRADAS },
  { name: "Picadas", path: ROUTES.MENU.PICADAS },
  { name: "Platos", path: ROUTES.MENU.PLATOS },
  { name: "Sabores a la parrilla", path: ROUTES.MENU.PARRILLA },
  { name: "Bebidas", path: ROUTES.MENU.BEBIDAS },
  { name: "Postres", path: ROUTES.MENU.POSTRES },
] as const;

// Section IDs for scroll navigation
export const SECTIONS = {
  HERO: "hero",
  MENU: "menu",
  RESERVA: "reserva",
} as const;

// Animation durations
export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5,
  VERY_SLOW: 1.0,
} as const;

// Scroll behavior
export const SCROLL_BEHAVIOR = {
  SMOOTH: "smooth" as const,
  INSTANT: "auto" as const,
} as const;

// Navbar scroll threshold
export const NAVBAR_SCROLL_THRESHOLD = 50;

// Navbar height offset for scroll calculations
export const NAVBAR_HEIGHT_OFFSET = 80; 