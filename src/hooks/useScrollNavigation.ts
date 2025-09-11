import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES, SECTIONS, NAVBAR_HEIGHT_OFFSET, SCROLL_BEHAVIOR } from "@/lib/constants";

export const useScrollNavigation = () => {
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - NAVBAR_HEIGHT_OFFSET;
      window.scrollTo({
        top: offsetTop,
        behavior: SCROLL_BEHAVIOR.SMOOTH,
      });
    }
  }, []);

  const navigateToHomeAndScroll = useCallback((sectionId: string) => {
    if (window.location.pathname !== ROUTES.HOME) {
      navigate(ROUTES.HOME, { replace: true });
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  }, [navigate, scrollToSection]);

  const handleNavigation = useCallback((path: string, sectionId?: string) => {
    if (path === ROUTES.HOME && sectionId) {
      navigateToHomeAndScroll(sectionId);
    } else {
      navigate(path);
    }
  }, [navigate, navigateToHomeAndScroll]);

  return {
    scrollToSection,
    navigateToHomeAndScroll,
    handleNavigation,
  };
}; 