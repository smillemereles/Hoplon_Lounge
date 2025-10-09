import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HoplonReserva = () => {
  const handleWhatsAppClick = () => {
    const message = "Hola quiero hacer una reserva en Hoplon";
    const phoneNumber = "+595994467566";
    const url = `https://wa.me/${phoneNumber.replace(/\s+/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="reserva"
      className="relative py-24 overflow-hidden"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/RESERVA.jpg')`,
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
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-hoplon-white mb-8 uppercase tracking-wider">
            Reservá Tu Mesa Ahora
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-8"></div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
              Avenida Mariscal José F. Estrigarriba con, Picuiba 5<br />
              Lago de la República
              <br />
              Ciudad del Este, Paraguay
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
              +595 994 467566
              <br />
              +595 983 800020
              <br />
              +595 983 810005
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
              comercial@lto.com
              <br />
              hoplonmarketing@gmail.com
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
              Lun: Cerrado
              <br />
              Mart-Sáb: 19:00-00:00
              <br />
              Dom: Cerrado
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoplonReserva;
