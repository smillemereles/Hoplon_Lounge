import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";
import servicesPrivateEvents from "@/assets/services-private-events.jpg";
import servicesCelebrations from "@/assets/services-celebrations.jpg";

const services = [
  {
    title: "Eventos Privados",
    description: "Espacios exclusivos para celebraciones corporativas y reuniones especiales. Menús personalizados y servicio de primera clase.",
    image: servicesPrivateEvents,
    features: ["Menús personalizados", "Servicio exclusivo", "Espacios privados", "Equipo audiovisual"]
  },
  {
    title: "Reservas Especiales",
    description: "Experiencias gastronómicas únicas con maridajes especiales y degustaciones de vinos premium.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2340&auto=format&fit=crop",
    features: ["Maridajes únicos", "Degustaciones", "Mesa preferencial", "Sommelier privado"]
  },
  {
    title: "Fiestas",
    description: "Celebra tus momentos especiales en un ambiente único. Música, cocteles y gastronomía de primer nivel.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2340&auto=format&fit=crop",
    features: ["Música en vivo", "Barra libre premium", "Decoración temática", "Fotografía profesional"]
  },
  {
    title: "Cumpleaños",
    description: "Haz de tu cumpleaños una experiencia legendaria. Tortas especiales y sorpresas únicas.",
    image: servicesCelebrations,
    features: ["Torta personalizada", "Decoración especial", "Menú de cumpleaños", "Sorpresas exclusivas"]
  }
];

const Servicios = () => {
  const handleReservarEvento = () => {
    const message = "Hola, quiero consultar sobre reservar un evento especial en Hoplon Lounge";
    const phoneNumber = "549XXXXXXXXX"; // Reemplazar con el número real
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-hoplon-white">
      <HoplonNavigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-hoplon-black mb-4">
              Servicios
            </h1>
            <p className="text-xl text-hoplon-garnet font-medium">
              Experiencias únicas forjadas con honor y distinción
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden rounded-lg shadow-2xl"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/40 to-transparent"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <motion.h2
                    className="text-3xl md:text-4xl font-serif font-bold text-hoplon-black"
                    whileHover={{ color: "hsl(var(--hoplon-garnet))" }}
                  >
                    {service.title}
                  </motion.h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-hoplon-gold rounded-full"></div>
                        <span className="text-hoplon-black font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pt-4"
                  >
                    <Button
                      onClick={handleReservarEvento}
                      className="bg-gradient-to-r from-hoplon-gold to-hoplon-gold-dark text-hoplon-black font-bold px-8 py-3 hover:shadow-lg hover:shadow-hoplon-gold/30 transition-all duration-300"
                    >
                      RESERVAR EVENTO
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-24 p-12 bg-gradient-to-r from-hoplon-black to-hoplon-garnet rounded-lg"
          >
            <h3 className="text-3xl font-serif font-bold text-hoplon-white mb-4">
              ¿Listo para una Experiencia Legendaria?
            </h3>
            <p className="text-hoplon-gold text-lg mb-8">
              Contacta con nosotros y crearemos el evento perfecto para ti
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleReservarEvento}
                variant="outline"
                className="bg-transparent border-hoplon-gold text-hoplon-gold hover:bg-hoplon-gold hover:text-hoplon-black font-bold px-8 py-3 text-lg"
                size="lg"
              >
                CONSULTAR DISPONIBILIDAD
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <HoplonFooter />
    </div>
  );
};

export default Servicios;