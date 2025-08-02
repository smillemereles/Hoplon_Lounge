import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HoplonNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
            className="text-2xl font-serif font-bold text-hoplon-gold cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            HOPLON
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("hero")}
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
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-hoplon-white shadow-xl rounded-lg overflow-hidden z-50"
                    onMouseLeave={() => setIsMenuOpen(false)}
                  >
                    {[
                      { name: "Entradas", path: "/menu/entradas" },
                      { name: "Platos", path: "/menu/platos" },
                      { name: "Bebidas", path: "/menu/bebidas" },
                      { name: "Postres", path: "/menu/postres" }
                    ].map((item) => (
                      <motion.button
                        key={item.name}
                        whileHover={{ backgroundColor: "hsl(var(--hoplon-gold) / 0.1)" }}
                        onClick={() => {
                          navigate(item.path);
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
              onClick={() => navigate("/gallery")}
              className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
            >
              Gallery
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/servicios")}
              className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
            >
              Servicios
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("reserva")}
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