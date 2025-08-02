import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HoplonReserva = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola quiero hacer una reserva en Hoplon";
    const phoneNumber = "549XXXXXXXXX"; // Replace with actual phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="reserva" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-hoplon-black/75"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-hoplon-white mb-8">
            Reservá Tu Mesa Ahora
          </h2>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-hoplon-gold to-hoplon-gold-dark text-hoplon-black font-bold px-12 py-6 text-xl hover:shadow-lg hover:shadow-hoplon-gold/40 transition-all duration-300"
              size="lg"
            >
              RESERVAR MESA
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-hoplon-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hoplon-gold/30 transition-colors duration-300"
            >
              <MapPin className="w-8 h-8 text-hoplon-gold" />
            </motion.div>
            <h3 className="text-hoplon-gold font-semibold mb-2">Dirección</h3>
            <p className="text-hoplon-white text-sm">
              Calle de la Elegancia 123<br />
              Centro Histórico<br />
              Madrid, España
            </p>
          </motion.div>

          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-hoplon-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hoplon-gold/30 transition-colors duration-300"
            >
              <Phone className="w-8 h-8 text-hoplon-gold" />
            </motion.div>
            <h3 className="text-hoplon-gold font-semibold mb-2">Teléfonos</h3>
            <p className="text-hoplon-white text-sm">
              +34 911 123 456<br />
              +34 911 123 457<br />
              WhatsApp disponible
            </p>
          </motion.div>

          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-hoplon-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hoplon-gold/30 transition-colors duration-300"
            >
              <Mail className="w-8 h-8 text-hoplon-gold" />
            </motion.div>
            <h3 className="text-hoplon-gold font-semibold mb-2">Email</h3>
            <p className="text-hoplon-white text-sm">
              reservas@hoplonlounge.es<br />
              info@hoplonlounge.es<br />
              eventos@hoplonlounge.es
            </p>
          </motion.div>

          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-hoplon-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-hoplon-gold/30 transition-colors duration-300"
            >
              <Clock className="w-8 h-8 text-hoplon-gold" />
            </motion.div>
            <h3 className="text-hoplon-gold font-semibold mb-2">Horarios</h3>
            <p className="text-hoplon-white text-sm">
              Lun-Jue: 19:00-01:00<br />
              Vie-Sáb: 19:00-02:00<br />
              Dom: 19:00-00:00
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoplonReserva;