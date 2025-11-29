import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HoplonReserva = () => {
  // Información de contacto actualizada
  const contactInfo = {
    address: {
      full: "Avenida Mariscal José F. Estrigarriba con, Picuiba 5, Lago de la República, Ciudad del Este, Paraguay",
      display:
        "Avenida Mariscal José F. Estrigarriba con, Picuiba 5\nLago de la República\nCiudad del Este, Paraguay",
    },
    phone: {
      number: "+595994467566",
      display: "+595 994 467566",
    },
    email: "reservas@hoplonclub.com.py",
    hours: "Mart-Sáb: 19:00-00:00",
  };

  // Función para manejar WhatsApp
  const handleWhatsAppClick = () => {
    const message = "Hola, quiero hacer una reserva en Hoplon Lounge";
    const cleanNumber = contactInfo.phone.number.replace(/\s+/g, "");
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Función para abrir Google Maps con direcciones
  const handleGetDirections = () => {
    const encodedAddress = encodeURIComponent(contactInfo.address.full);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(url, "_blank");
  };

  // Función para abrir email
  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, "_blank");
  };

  return (
    <section
      id="reserva"
      className="relative py-16 md:py-20 overflow-hidden"
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Main CTA - Más compacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-hoplon-white mb-4 uppercase tracking-wider">
            Reservá Tu Mesa
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-4"></div>
          <p className="text-hoplon-white/80 text-base md:text-lg max-w-xl mx-auto">
            Contactanos para vivir una experiencia única
          </p>
        </motion.div>

        {/* Main Content - Compacto y centrado */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 md:gap-8">
            {/* Left Column - Contact Information más compacto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Email Section - Compacto */}
              <div className="bg-hoplon-black/40 backdrop-blur-sm rounded-xl p-4 border border-hoplon-gold/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-hoplon-gold" />
                  </div>
                  <h3 className="text-sm font-cinzel font-bold text-hoplon-gold">
                    Email
                  </h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={handleEmailClick}
                  className="text-hoplon-white text-xs hover:text-hoplon-gold transition-colors duration-300 cursor-pointer break-all"
                >
                  {contactInfo.email}
                </motion.button>
              </div>

              {/* Hours Section - Compacto */}
              <div className="bg-hoplon-black/40 backdrop-blur-sm rounded-xl p-4 border border-hoplon-gold/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-hoplon-gold" />
                  </div>
                  <h3 className="text-sm font-cinzel font-bold text-hoplon-gold">
                    Horarios
                  </h3>
                </div>
                <div className="space-y-1">
                  <p className="text-hoplon-white text-xs">Lun: Cerrado</p>
                  <p className="text-hoplon-gold text-xs font-medium">
                    Mart-Sáb: 19:00-00:00
                  </p>
                  <p className="text-hoplon-white text-xs">Dom: Cerrado</p>
                </div>
              </div>

              {/* CTA Button - Compacto */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-hoplon-gold/20 to-hoplon-gold-dark/30 backdrop-blur-sm rounded-xl p-4 border border-hoplon-gold/40 text-center"
              >
                <h4 className="text-base font-cinzel font-bold text-hoplon-white mb-2">
                  ¿Listo para reservar?
                </h4>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2.5 rounded-lg transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  RESERVAR POR WHATSAPP
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Google Maps más grande */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-hoplon-black/40 backdrop-blur-sm rounded-xl p-4 border border-hoplon-gold/20 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-hoplon-gold" />
                  </div>
                  <h3 className="text-lg font-cinzel font-bold text-hoplon-gold">
                    Nuestra Ubicación
                  </h3>
                </div>

                {/* Google Maps Iframe - Más grande y proporcional */}
                <div className="relative w-full h-64 md:h-80 lg:h-[400px] rounded-lg overflow-hidden border-2 border-hoplon-gold/30 mb-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.551178867289!2d-54.62455952385496!3d-25.520010936460665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68f5d1d10f461%3A0x651fbfacea0623df!2sHoplon%20Club!5e0!3m2!1ses-419!2spy!4v1761652531968!5m2!1ses-419!2spy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Hoplon Club"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/20 via-transparent to-hoplon-black/20 pointer-events-none"></div>
                </div>

                {/* Map Button - Más compacto */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleGetDirections}
                  className="w-full bg-gradient-to-r from-hoplon-gold to-hoplon-gold-dark text-hoplon-black font-bold px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-hoplon-gold/40 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  Ver en Google Maps
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoplonReserva;
