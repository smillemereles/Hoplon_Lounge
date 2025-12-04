/**
 * Utilidades para Google Analytics 4
 * Manejo de pageviews y eventos personalizados
 */

// Definir el tipo para gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Verifica si Google Analytics está disponible
 */
export const isGAAvailable = (): boolean => {
  return typeof window !== "undefined" && typeof window.gtag === "function";
};

/**
 * Envía un pageview a Google Analytics
 * Debe llamarse en cada cambio de ruta en una SPA
 */
export const sendPageView = (url: string, title?: string) => {
  if (!isGAAvailable()) {
    console.warn("Google Analytics no está disponible");
    return;
  }

  try {
    window.gtag!("event", "page_view", {
      page_path: url,
      page_title: title || document.title,
      page_location: window.location.href,
    });
    console.log("GA4 Pageview enviado:", url);
  } catch (error) {
    console.error("Error al enviar pageview:", error);
  }
};

/**
 * Envía un evento personalizado a Google Analytics
 */
export const sendEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (!isGAAvailable()) {
    console.warn("Google Analytics no está disponible");
    return;
  }

  try {
    window.gtag!("event", eventName, eventParams);
    console.log("GA4 Evento enviado:", eventName, eventParams);
  } catch (error) {
    console.error("Error al enviar evento:", error);
  }
};

/**
 * Envía un evento de conversión
 */
export const sendConversion = (conversionName: string, value?: number) => {
  sendEvent(conversionName, {
    value: value,
    currency: "PYG",
  });
};

/**
 * Tracking de clics en botones
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  sendEvent("button_click", {
    button_name: buttonName,
    button_location: location || "unknown",
  });
};

/**
 * Tracking de navegación
 */
export const trackNavigation = (destination: string, source?: string) => {
  sendEvent("navigation_click", {
    link_text: destination,
    link_url: destination,
    source: source || "navigation",
  });
};

/**
 * Tracking de reservas
 */
export const trackReservation = (
  action: string,
  details?: Record<string, any>
) => {
  sendEvent("reservation_action", {
    action: action,
    ...details,
  });
};

/**
 * Tracking de interacciones con el menú
 */
export const trackMenuInteraction = (menuType: string, itemName?: string) => {
  sendEvent("menu_interaction", {
    menu_type: menuType,
    item_name: itemName,
  });
};

/**
 * Tracking de visualizaciones de galería
 */
export const trackGalleryView = (galleryName: string) => {
  sendEvent("gallery_view", {
    gallery_name: galleryName,
  });
};

/**
 * Tracking de reproducción de videos
 */
export const trackVideoPlay = (videoTitle: string) => {
  sendEvent("video_play", {
    video_title: videoTitle,
  });
};

/**
 * Tracking de scroll
 */
export const trackScroll = (percentage: number, section?: string) => {
  sendEvent("scroll_depth", {
    scroll_percentage: percentage,
    section: section,
  });
};

/**
 * Tracking de formularios
 */
export const trackFormSubmit = (formName: string, success: boolean) => {
  sendEvent("form_submit", {
    form_name: formName,
    success: success,
  });
};
