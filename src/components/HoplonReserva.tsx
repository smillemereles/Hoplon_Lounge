import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";

const HoplonReserva = () => {
  // ============================================
  // FUNCIÓN PARA TRACKING DE WHATSAPP
  // ============================================
  const handleWhatsAppClick = () => {
    // Google Analytics tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "reserva_whatsapp", {
        event_category: "conversion",
        event_label: "click_whatsapp",
        value: 1,
      });
    }

    const message = `Hola Hoplon Lounge! 🍽️\n\nQuiero hacer una reserva:\n- Fecha: \n- Hora: \n- Cantidad de personas: \n- Ocasión especial: `;
    const whatsappUrl = `https://wa.me/595994467566?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "llamada_telefono", {
        event_category: "conversion",
        event_label: "click_phone",
        value: 1,
      });
    }
  };

  const handleMapClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "ver_mapa", {
        event_category: "engagement",
        event_label: "click_google_maps",
        value: 1,
      });
    }
  };

  return (
    <section id="reserva" className="relative py-16 overflow-hidden">
      {/* ============================================ */}
      {/* IMAGEN DE FONDO CON OVERLAY */}
      {/* ============================================ */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/mesas1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-hoplon-black/90 via-hoplon-black/85 to-hoplon-black/90"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-cinzel font-bold text-hoplon-gold text-center mb-8"
        >
          Reserva tu Experiencia
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Información de Contacto - Más Compacta */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-hoplon-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-hoplon-white mb-1">
                  Teléfono
                </h3>
                <a
                  href="tel:+595994467566"
                  onClick={handlePhoneClick}
                  className="text-hoplon-gold hover:text-hoplon-gold-dark transition-colors"
                >
                  +595 994 467 566
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-hoplon-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-hoplon-white mb-1">
                  Horarios
                </h3>
                <p className="text-hoplon-white/80 text-sm">
                  Martes a Sábado | 19:00 - 00:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-hoplon-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-hoplon-white mb-1">
                  Ubicación
                </h3>
                <p className="text-hoplon-white/80 text-sm">
                  Av. Pioneros del Este, Ciudad del Este
                </p>
                <a
                  href="https://www.google.com/maps/place/Hoplon+Club/@-25.520010936460874,-54.62455952373067,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMapClick}
                  className="inline-block mt-1 text-hoplon-gold hover:text-hoplon-gold-dark transition-colors text-sm underline"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Botón de WhatsApp - Más Compacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-hoplon-garnet/30 backdrop-blur-md rounded-lg p-6 border border-hoplon-gold/30 shadow-xl"
          >
            <h3 className="text-xl font-bold text-hoplon-gold mb-3 text-center">
              Reserva por WhatsApp
            </h3>
            <p className="text-hoplon-white/80 text-center mb-4 text-sm">
              Respuesta inmediata. Confirma tu reserva en minutos.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-hoplon-gold to-hoplon-gold-dark text-hoplon-black font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-hoplon-gold/30 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              RESERVAR AHORA
            </button>
          </motion.div>
        </div>

        {/* ============================================ */}
        {/* MAPA COMPACTO */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <h3 className="text-2xl font-cinzel font-bold text-hoplon-gold text-center mb-4">
            Cómo Llegar
          </h3>
          <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-2xl border-2 border-hoplon-gold/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.5511788672825!2d-54.62455952373067!3d-25.520010936460874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68f5d1d10f461%3A0x651fbfacea0623df!2sHoplon%20Club!5e0!3m2!1ses!2spy!4v1764445635889!5m2!1ses!2spy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Hoplon Club en Ciudad del Este"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Overlay compacto */}
            <div className="absolute bottom-3 left-3 bg-hoplon-black/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-hoplon-gold/50 pointer-events-none">
              <p className="text-hoplon-gold font-bold text-xs">
                📍 Hoplon Club - Ciudad del Este
              </p>
              <p className="text-hoplon-white/80 text-[10px] mt-0.5">
                Estacionamiento disponible
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoplonReserva;
