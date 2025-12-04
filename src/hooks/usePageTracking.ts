import { useEffect } from "react";
import { sendPageView } from "@/lib/analytics";

/**
 * Hook personalizado para rastrear cambios de página en Google Analytics
 * Se ejecuta cada vez que cambia la URL
 */
export const usePageTracking = () => {
  useEffect(() => {
    // Rastrear la página inicial
    sendPageView(
      window.location.pathname + window.location.search,
      document.title
    );

    // Escuchar cambios en el historial (navegación SPA)
    const handleRouteChange = () => {
      sendPageView(
        window.location.pathname + window.location.search,
        document.title
      );
    };

    // Observar cambios en el historial
    window.addEventListener("popstate", handleRouteChange);

    // Limpiar el listener al desmontar
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);
};
