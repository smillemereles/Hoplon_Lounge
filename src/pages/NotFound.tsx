import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-hoplon-black flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-hoplon-gold/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-hoplon-garnet/20 rounded-full blur-lg"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-hoplon-gold/5 rounded-full blur-md"></div>
      
      <div className="text-center z-10 px-8 max-w-2xl">
        {/* Main 404 */}
        <h1 className="text-8xl md:text-9xl font-cinzel font-bold text-hoplon-gold mb-6 tracking-wider">
          404
        </h1>
        
        {/* Main message */}
        <h2 className="text-3xl md:text-4xl font-cinzel font-semibold text-hoplon-white mb-4">
          Página no encontrada
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-hoplon-white/80 mb-12 leading-relaxed">
          La página que buscas no existe o ha sido movida. 
          <br className="hidden md:block" />
          Regresa al inicio para explorar nuestro mundo gastronómico.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-hoplon-gold to-hoplon-gold-dark text-hoplon-black hover:from-hoplon-gold-dark hover:to-hoplon-gold transition-all duration-300 font-semibold px-8 py-3 text-base"
          >
            <a href="/" className="flex items-center gap-2">
              <Home size={20} />
              Volver al Inicio
            </a>
          </Button>
          
          <Button 
            variant="outline"
            asChild
            className="border-hoplon-white/30 text-hoplon-white hover:bg-hoplon-white/10 hover:border-hoplon-white/50 transition-all duration-300 px-8 py-3 text-base"
          >
            <a href="mailto:contacto@hoplon.com" className="flex items-center gap-2">
              <Mail size={20} />
              Contactar Soporte
            </a>
          </Button>
        </div>
        
        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-hoplon-gold/50 to-transparent w-64"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;