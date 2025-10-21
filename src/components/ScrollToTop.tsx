// SRC/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll inmediato sin animación para mejor UX
    window.scrollTo(0, 0);

    // Alternativa: scroll con animación suave después de un pequeño delay
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 100);
  }, [pathname]);

  return null;
}
