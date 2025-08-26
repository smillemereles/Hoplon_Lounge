import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Instagram, Clock, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Maintenance = () => {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 30,
    seconds: 0
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotifyMe = () => {
    if (!email) {
      toast.error("Por favor ingresa tu email");
      return;
    }
    
    // Here you would typically send the email to your backend
    toast.success("¡Te notificaremos cuando estemos listos!");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-hoplon-black flex items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoplon-garnet/10 via-hoplon-black to-hoplon-gold/5"></div>
      <div className="absolute top-32 left-16 w-40 h-40 bg-hoplon-gold/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-hoplon-garnet/15 rounded-full blur-xl"></div>
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-hoplon-gold/5 rounded-full blur-lg animate-float"></div>
      
      <div className="text-center z-10 px-8 max-w-4xl">
        {/* Sparkle icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-hoplon-gold/20 rounded-full">
            <Sparkles size={48} className="text-hoplon-gold" />
          </div>
        </div>
        
        {/* Main message */}
        <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-hoplon-gold mb-6 tracking-wide">
          Estamos en Mantenimiento
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-hoplon-white mb-4 font-light">
          Volvemos en breve
        </p>
        
        <p className="text-lg text-hoplon-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Estamos mejorando nuestra experiencia gastronómica digital para ofrecerte 
          el mejor servicio. Mientras tanto, síguenos en nuestras redes sociales.
        </p>
        
        {/* Countdown timer */}
        <div className="bg-hoplon-white/5 backdrop-blur-sm border border-hoplon-gold/20 rounded-2xl p-8 mb-12 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="text-hoplon-gold" size={24} />
            <span className="text-hoplon-white font-semibold">Tiempo estimado</span>
          </div>
          
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-hoplon-gold font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-sm text-hoplon-white/60">Horas</div>
            </div>
            <div className="text-hoplon-gold text-3xl font-bold">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hoplon-gold font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-sm text-hoplon-white/60">Minutos</div>
            </div>
            <div className="text-hoplon-gold text-3xl font-bold">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hoplon-gold font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-sm text-hoplon-white/60">Segundos</div>
            </div>
          </div>
        </div>
        
        {/* Email notification */}
        <div className="bg-hoplon-white/5 backdrop-blur-sm border border-hoplon-garnet/20 rounded-2xl p-8 mb-8 max-w-md mx-auto">
          <h3 className="text-hoplon-white font-semibold mb-4 flex items-center justify-center gap-2">
            <Bell size={20} className="text-hoplon-gold" />
            Recibe una notificación
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-hoplon-black/50 border-hoplon-white/20 text-hoplon-white placeholder:text-hoplon-white/50 focus:border-hoplon-gold"
            />
            <Button 
              onClick={handleNotifyMe}
              className="bg-gradient-to-r from-hoplon-gold to-hoplon-gold-dark text-hoplon-black hover:from-hoplon-gold-dark hover:to-hoplon-gold transition-all duration-300 font-semibold whitespace-nowrap"
            >
              Notificarme
            </Button>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-hoplon-garnet to-hoplon-garnet-light text-hoplon-white hover:from-hoplon-garnet-light hover:to-hoplon-garnet transition-all duration-300 font-semibold px-8 py-3"
          >
            <a 
              href="https://instagram.com/hoplonlounge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram size={20} />
              Ir a Instagram
            </a>
          </Button>
          
          <Button 
            variant="outline"
            asChild
            className="border-hoplon-white/30 text-hoplon-white hover:bg-hoplon-white/10 hover:border-hoplon-white/50 transition-all duration-300 px-8 py-3"
          >
            <a href="mailto:contacto@hoplon.com" className="flex items-center gap-2">
              Contactar por Email
            </a>
          </Button>
        </div>
        
        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-hoplon-gold/50 to-transparent w-96"></div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;