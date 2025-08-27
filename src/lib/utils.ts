import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases CSS de manera inteligente usando clsx y tailwind-merge
 * @param inputs - Clases CSS a combinar
 * @returns String de clases CSS combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formatea un precio en formato de moneda
 * @param price - Precio en centavos o número
 * @param currency - Código de moneda (por defecto 'USD')
 * @returns String formateado del precio
 */
export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Formatea una fecha en formato legible
 * @param date - Fecha a formatear
 * @param locale - Locale para el formato (por defecto 'es-PY')
 * @returns String formateado de la fecha
 */
export function formatDate(date: Date | string, locale: string = 'es-PY'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Formatea una hora en formato legible
 * @param time - Hora a formatear
 * @param locale - Locale para el formato (por defecto 'es-PY')
 * @returns String formateado de la hora
 */
export function formatTime(time: string, locale: string = 'es-PY'): string {
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
}

/**
 * Valida si un email tiene formato válido
 * @param email - Email a validar
 * @returns Boolean indicando si el email es válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida si un número de teléfono tiene formato válido
 * @param phone - Teléfono a validar
 * @returns Boolean indicando si el teléfono es válido
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Debounce function para optimizar llamadas a funciones
 * @param func - Función a debounce
 * @param wait - Tiempo de espera en ms
 * @returns Función debounced
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function para limitar la frecuencia de llamadas
 * @param func - Función a throttle
 * @param limit - Límite de tiempo en ms
 * @returns Función throttled
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Genera un ID único
 * @returns String con ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Capitaliza la primera letra de una cadena
 * @param str - String a capitalizar
 * @returns String con primera letra capitalizada
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Trunca un texto a una longitud específica
 * @param text - Texto a truncar
 * @param maxLength - Longitud máxima
 * @param suffix - Sufijo a agregar (por defecto '...')
 * @returns Texto truncado
 */
export function truncateText(text: string, maxLength: number, suffix: string = '...'): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Verifica si el dispositivo es móvil
 * @returns Boolean indicando si es móvil
 */
export function isMobile(): boolean {
  return window.innerWidth < 768;
}

/**
 * Verifica si el dispositivo es tablet
 * @returns Boolean indicando si es tablet
 */
export function isTablet(): boolean {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
}

/**
 * Verifica si el dispositivo es desktop
 * @returns Boolean indicando si es desktop
 */
export function isDesktop(): boolean {
  return window.innerWidth >= 1024;
}
