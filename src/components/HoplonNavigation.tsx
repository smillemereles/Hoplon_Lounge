import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { ROUTES, NAVIGATION_ITEMS, SECTIONS, NAVBAR_SCROLL_THRESHOLD, ANIMATION_DURATIONS } from "@/lib/constants";

const HoplonNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleNavigation } = useScrollNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > NAVBAR_SCROLL_THRESHOLD);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (window.location.pathname === ROUTES.HOME) {
      handleNavigation(ROUTES.HOME, SECTIONS.HERO);
    } else {
      handleNavigation(ROUTES.HOME);
    }
  };

  const handleInicioClick = () => {
    if (window.location.pathname === ROUTES.HOME) {
      handleNavigation(ROUTES.HOME, SECTIONS.HERO);
    } else {
      handleNavigation(ROUTES.HOME);
    }
  };

  const handleContactoClick = () => {
    if (window.location.pathname === ROUTES.HOME) {
      handleNavigation(ROUTES.HOME, SECTIONS.RESERVA);
    } else {
      handleNavigation(ROUTES.HOME, SECTIONS.RESERVA);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-hoplon-black/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={handleLogoClick}
          >
            <img 
              src="public/LOGO HOPLON SIMPLIFICADO CREMA.png" 
              alt="Hoplon Club Logo" 
              className="h-12 w-auto"
            />
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInicioClick}
              className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
            >
              Inicio
            </motion.button>
            
            {/* Menu Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-1 text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
              >
                <span>Menú</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: ANIMATION_DURATIONS.FAST }}
                    className="absolute top-full left-0 mt-2 w-48 bg-hoplon-white shadow-xl rounded-lg overflow-hidden z-50"
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    {NAVIGATION_ITEMS.map((item) => (
                      <motion.button
                        key={item.name}
                        whileHover={{ backgroundColor: "hsl(var(--hoplon-gold) / 0.1)" }}
                        onClick={() => {
                          handleNavigation(item.path);
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-hoplon-black hover:text-hoplon-garnet transition-colors duration-200 font-medium border-b border-gray-100 last:border-b-0"
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation(ROUTES.GALLERY)}
              className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
            >
              Gallery
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation(ROUTES.SERVICIOS)}
              className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
            >
              Servicios
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactoClick}
              className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
            >
              Contacto
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default HoplonNavigation;