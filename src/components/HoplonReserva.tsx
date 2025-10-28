import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Copy,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HoplonReserva = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

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

  // Función para copiar dirección al portapapeles
  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.address.full);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
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

          <p className="text-hoplon-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contactanos por WhatsApp para reservar tu mesa y vivir una
            experiencia única en Hoplon Lounge
          </p>
        </motion.div>

        {/* Main Content Grid - Desktop: 2 columns, Mobile: 1 column */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Location Section */}
            <div className="bg-hoplon-black/40 backdrop-blur-sm rounded-2xl p-6 border border-hoplon-gold/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-hoplon-gold" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-hoplon-gold">
                  Ubicación
                </h3>
              </div>

              <p className="text-hoplon-white text-sm leading-relaxed mb-6 whitespace-pre-line">
                {contactInfo.address.display}
              </p>

              {/* Address Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyAddress}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    copiedAddress
                      ? "bg-green-600 text-white"
                      : "bg-hoplon-gold/20 text-hoplon-gold hover:bg-hoplon-gold/30"
                  }`}
                >
                  <Copy className="w-4 h-4" />
                  {copiedAddress ? "¡Copiado!" : "Copiar dirección"}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetDirections}
                  className="flex items-center gap-2 px-4 py-2 bg-hoplon-gold text-hoplon-black rounded-lg text-sm font-medium hover:bg-hoplon-gold/90 transition-all duration-300"
                >
                  <Navigation className="w-4 h-4" />
                  Cómo llegar
                </motion.button>
              </div>
            </div>

            {/* WhatsApp Contact Section */}
            <div className="bg-hoplon-black/40 backdrop-blur-sm rounded-2xl p-6 border border-hoplon-gold/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-hoplon-gold" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-hoplon-gold">
                  Contacto WhatsApp
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-between bg-hoplon-black/30 rounded-lg p-4"
              >
                <span className="text-hoplon-white font-medium text-lg">
                  {contactInfo.phone.display}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  WhatsApp
                </motion.button>
              </motion.div>
            </div>

            {/* Email and Hours */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email Section */}
              <div className="bg-hoplon-black/40 backdrop-blur-sm rounded-2xl p-6 border border-hoplon-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-hoplon-gold" />
                  </div>
                  <h3 className="text-lg font-cinzel font-bold text-hoplon-gold">
                    Email
                  </h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={handleEmailClick}
                  className="text-hoplon-white text-sm hover:text-hoplon-gold transition-colors duration-300 cursor-pointer"
                >
                  {contactInfo.email}
                </motion.button>
              </div>

              {/* Hours Section */}
              <div className="bg-hoplon-black/40 backdrop-blur-sm rounded-2xl p-6 border border-hoplon-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-hoplon-gold" />
                  </div>
                  <h3 className="text-lg font-cinzel font-bold text-hoplon-gold">
                    Horarios
                  </h3>
                </div>
                <div className="space-y-1">
                  <p className="text-hoplon-white text-sm">Lun: Cerrado</p>
                  <p className="text-hoplon-white text-sm font-medium text-hoplon-gold">
                    Mart-Sáb: 19:00-00:00
                  </p>
                  <p className="text-hoplon-white text-sm">Dom: Cerrado</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-hoplon-black/40 backdrop-blur-sm rounded-2xl p-6 border border-hoplon-gold/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-hoplon-gold" />
                </div>
                <h3 className="text-xl font-cinzel font-bold text-hoplon-gold">
                  Nuestra Ubicación
                </h3>
              </div>

              {/* Google Maps Iframe - Actualizado con el mapa correcto */}
              <div className="relative w-full h-96 rounded-xl overflow-hidden border-2 border-hoplon-gold/30">
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

                {/* Overlay gradient for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/20 via-transparent to-hoplon-black/20 pointer-events-none"></div>
              </div>

              {/* Map Actions */}
              <div className="mt-4 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetDirections}
                  className="bg-gradient-to-r from-hoplon-gold to-hoplon-gold-dark text-hoplon-black font-bold px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-hoplon-gold/40 transition-all duration-300 flex items-center gap-3"
                >
                  <Navigation className="w-5 h-5" />
                  Ver en Google Maps
                </motion.button>
              </div>
            </div>

            {/* Quick Reservation CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-hoplon-gold/20 to-hoplon-gold-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-hoplon-gold/40 text-center"
            >
              <h4 className="text-2xl font-cinzel font-bold text-hoplon-white mb-4">
                ¿Listo para reservar?
              </h4>
              <p className="text-hoplon-white/80 mb-6">
                Contactanos ahora y asegura tu mesa para una experiencia
                inolvidable
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-lg flex items-center gap-3 mx-auto"
              >
                <Phone className="w-5 h-5" />
                RESERVAR POR WHATSAPP
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HoplonReserva;
