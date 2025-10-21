import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Entradas", path: "/menu-entradas" },
  { name: "Picadas", path: "/menu-picadas" },
  { name: "Bebidas", path: "/menu-bebidas" },
  { name: "Parrilla", path: "/menu-parrilla" },
  { name: "Platos", path: "/menu-platos" },
  { name: "Postres", path: "/menu-postres" },
];

const HoplonNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil cuando se redimensiona la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar menús cuando cambia la ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactoClick = () => {
    scrollToSection("reserva");
  };

  const handleInicioClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer z-60"
            >
              <Link to="/">
                <img
                  src="/logo-hoplon.png"
                  alt="Hoplon Club Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </motion.div>

            {/* Menú de escritorio */}
            <div className="hidden md:flex space-x-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleInicioClick}
                className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
              >
                Inicio
              </motion.button>

              {/* Dropdown Menú */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-1 text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
                >
                  <span>Menú</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 bg-hoplon-black/95 backdrop-blur-lg rounded-lg shadow-xl border border-hoplon-gold/20 min-w-[200px]"
                    >
                      {menuItems.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block w-full text-left px-4 py-3 text-hoplon-white hover:text-hoplon-gold hover:bg-hoplon-gold/10 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/gallery"
                  className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
                >
                  Gallery
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/servicios"
                  className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
                >
                  Servicios
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactoClick}
                className="text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium"
              >
                Contacto
              </motion.button>
            </div>

            {/* Botón hamburguesa para móviles */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-hoplon-white z-60 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={32} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={32} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-hoplon-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menú móvil */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-hoplon-black/95 backdrop-blur-lg shadow-2xl z-50 md:hidden border-l border-hoplon-gold/20"
            >
              <div className="flex flex-col h-full">
                {/* Header del menú móvil */}
                <div className="flex items-center justify-between p-6 border-b border-hoplon-gold/20">
                  <img
                    src="/logo-hoplon.png"
                    alt="Hoplon Club Logo"
                    className="h-10 w-auto"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-hoplon-white hover:text-hoplon-gold transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Enlaces del menú móvil */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="flex flex-col space-y-2 px-6">
                    <motion.button
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleInicioClick}
                      className="text-left py-4 text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium border-b border-hoplon-gold/10"
                    >
                      Inicio
                    </motion.button>

                    {/* Sección de Menú */}
                    <div className="py-4 border-b border-hoplon-gold/10">
                      <h3 className="text-hoplon-gold font-semibold mb-3">
                        Menú
                      </h3>
                      <div className="flex flex-col space-y-3 ml-4">
                        {menuItems.map(item => (
                          <motion.div
                            key={item.name}
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Link
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-hoplon-white hover:text-hoplon-gold transition-colors duration-300"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/servicios"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-left py-4 text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium border-b border-hoplon-gold/10"
                      >
                        Servicios
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/gallery"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-left py-4 text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium border-b border-hoplon-gold/10"
                      >
                        Gallery
                      </Link>
                    </motion.div>

                    <motion.button
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleContactoClick}
                      className="text-left py-4 text-hoplon-white hover:text-hoplon-gold transition-colors duration-300 font-medium border-b border-hoplon-gold/10"
                    >
                      Contacto
                    </motion.button>
                  </div>
                </div>

                {/* Footer del menú móvil */}
                <div className="p-6 border-t border-hoplon-gold/20">
                  <p className="text-hoplon-white/60 text-sm text-center">
                    © 2024 Hoplon Lounge
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HoplonNavigation;
