import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";
import { useEffect } from "react";

const services = [
  {
    title: "Eventos Privados, Experiencia Coworking",
    description:
      "Espacios exclusivos para celebraciones corporativas y reuniones especiales. Menús personalizados y servicio de primera clase.",
    image: "/vistadecamarotes.JPG",
    features: [
      "Menús personalizados",
      "Servicio exclusivo",
      "Espacios privados",
    ],
  },
  {
    title: "Reservas Especiales",
    description:
      "Experiencias gastronómicas únicas con maridajes especiales y degustaciones de vinos premium.",
    image: "/esenario2.jpg.JPG",
    features: ["Maridajes únicos", "Degustaciones", "Mesa preferencial"],
  },
  {
    title: "Fiestas",
    description:
      "Celebra tus momentos especiales en un ambiente único. Música, cocteles y gastronomía de primer nivel.",
    image: "/fiestas.jpg",
    features: ["Música en vivo", "Barra libre premium", "Decoración temática"],
  },
  {
    title: "Cumpleaños",
    description:
      "Haz de tu cumpleaños una experiencia legendaria. Tortas especiales y sorpresas únicas.",
    image: "/FIESTADECUMPLEANHOS.JPG",
    features: [
      "Torta personalizada",
      "Decoración especial",
      "Menú de cumpleaños",
    ],
  },
];

const Servicios = () => {
  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReservarEvento = () => {
    const message =
      "Hola, quiero consultar sobre reservar un evento especial en Hoplon Club";
    const phoneNumber = "595994467566";
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-hoplon-black relative overflow-hidden">
      {/* Fondo decorativo - Responsive */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoplon-black via-hoplon-black to-hoplon-garnet/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-8 md:top-20 md:left-16 w-1 h-1 md:w-2 md:h-2 bg-hoplon-gold/20 rounded-full"></div>
        <div className="absolute top-20 right-10 md:top-40 md:right-20 w-0.5 h-0.5 md:w-1 md:h-1 bg-hoplon-gold/30 rounded-full"></div>
        <div className="absolute bottom-16 left-16 md:bottom-32 md:left-32 w-1.5 h-1.5 md:w-3 md:h-3 bg-hoplon-gold/15 rounded-full"></div>
        <div className="absolute top-30 left-1/3 md:top-60 w-0.5 h-0.5 md:w-1 md:h-1 bg-hoplon-gold/25 rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 md:bottom-20 w-1 h-1 md:w-2 md:h-2 bg-hoplon-gold/20 rounded-full"></div>
      </div>

      <HoplonNavigation />

      {/* Hero Section - Mobile Optimized */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-24 relative">
        {/* Elementos decorativos flotantes - Responsive */}
        <div className="absolute top-10 left-5 md:top-20 md:left-10 opacity-20">
          <div className="w-4 h-4 md:w-8 md:h-8 border border-hoplon-gold rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-20 right-8 md:top-40 md:right-16 opacity-30">
          <div className="w-3 h-3 md:w-6 md:h-6 bg-hoplon-gold/20 rounded-full animate-float"></div>
        </div>
        <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 opacity-25">
          <div className="w-2 h-2 md:w-4 md:h-4 border border-hoplon-gold/50 rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <div className="relative inline-block px-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-16 md:h-16 border border-hoplon-gold/30 md:border-2 rounded-full"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-6 h-6 md:w-12 md:h-12 border border-hoplon-gold/20 rotate-45"
              ></motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold text-hoplon-white mb-4 md:mb-6 relative z-10 tracking-wider px-2">
                NUESTROS SERVICIOS
              </h1>
            </div>
            <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-4 md:mb-6"></div>
            <p className="text-sm md:text-xl text-hoplon-gold font-medium tracking-wide uppercase px-4">
              Experiencias legendarias forjadas con honor y distinción
            </p>
          </motion.div>

          {/* Services Cards - Mobile Optimized */}
          <div className="space-y-16 md:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-hoplon-black/80 to-hoplon-garnet/20 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-hoplon-gold/20 shadow-2xl ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } flex flex-col lg:flex-row items-center gap-6 md:gap-12 overflow-hidden`}
              >
                {/* Decorative elements - Responsive */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4">
                  <div className="w-8 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-hoplon-gold to-transparent"></div>
                </div>
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
                  <div className="w-4 h-4 md:w-8 md:h-8 border border-hoplon-gold/30 rotate-45"></div>
                </div>

                {/* Image - Mobile Optimized */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl border border-hoplon-gold/30 md:border-2"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 sm:h-64 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/60 via-transparent to-hoplon-gold/10"></div>
                    <div className="absolute top-2 right-2 md:top-4 md:right-4">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 md:w-6 md:h-6 border border-hoplon-gold md:border-2 rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content - Mobile Optimized */}
                <div className="w-full lg:w-1/2 space-y-4 md:space-y-8 px-2">
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <div className="w-6 md:w-12 h-0.5 md:h-1 bg-hoplon-gold"></div>
                      <span className="text-hoplon-gold text-xs md:text-sm font-medium tracking-widest uppercase">
                        CELEBRACIONES
                      </span>
                    </div>
                    <motion.h2
                      className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-cinzel font-bold text-hoplon-white leading-tight"
                      whileHover={{ color: "hsl(var(--hoplon-gold))" }}
                    >
                      {service.title}
                    </motion.h2>
                  </div>

                  <p className="text-sm md:text-lg text-hoplon-white/80 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Features Grid - Mobile Optimized */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureIndex * 0.1,
                        }}
                        className="flex items-center space-x-2 md:space-x-3 bg-hoplon-black/30 p-2 md:p-3 rounded-lg border border-hoplon-gold/10"
                      >
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-hoplon-gold rounded-full flex-shrink-0"></div>
                        <span className="text-hoplon-white font-medium text-xs md:text-sm leading-tight">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Button - Mobile Optimized */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-4 md:pt-6"
                  >
                    <Button
                      onClick={handleReservarEvento}
                      className="w-full sm:w-auto bg-gradient-to-r from-hoplon-garnet to-hoplon-garnet/80 text-hoplon-white font-bold px-6 md:px-10 py-3 md:py-4 text-sm md:text-lg rounded-xl border border-hoplon-gold/30 hover:shadow-xl hover:shadow-hoplon-garnet/40 transition-all duration-300 hover:border-hoplon-gold/50"
                    >
                      RESERVAR EVENTO
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-16 md:mt-32 mb-12 md:mb-24 h-64 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden mx-2 md:mx-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/upscalemedia-transformed (1).png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <div className="text-center max-w-4xl">
                <div className="text-3xl md:text-6xl text-hoplon-gold font-cinzel mb-3 md:mb-6">
                  "
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-hoplon-white font-light italic leading-relaxed mb-4 md:mb-8 px-2">
                  "En Hoplon Lounge, creamos momentos deliciosos que abrazan el
                  corazón y perduran como recetas de familia"
                </p>
                <div className="w-12 md:w-24 h-0.5 md:h-1 bg-hoplon-gold mx-auto mb-2 md:mb-4"></div>
                <p className="text-hoplon-gold text-sm md:text-lg font-medium tracking-widest uppercase">
                  CHEF MERCEDEZ JIMENEZ
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Section - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative text-center mt-16 md:mt-32 p-6 md:p-16 bg-gradient-to-br from-hoplon-garnet via-hoplon-black to-hoplon-garnet/80 rounded-2xl md:rounded-3xl border border-hoplon-gold/30 overflow-hidden mx-2 md:mx-0"
          >
            {/* Decorative background elements - Responsive */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8">
              <div className="w-10 md:w-20 h-0.5 md:h-1 bg-hoplon-gold"></div>
            </div>
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
              <div className="w-8 h-8 md:w-16 md:h-16 border border-hoplon-gold/30 md:border-2 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2">
              <div className="w-2 h-2 md:w-4 md:h-4 bg-hoplon-gold/20 rotate-45"></div>
            </div>
            <div className="absolute top-1/4 right-6 md:right-12">
              <div className="w-1 h-1 md:w-2 md:h-2 bg-hoplon-gold rounded-full"></div>
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-hoplon-white mb-4 md:mb-6 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ¿Listo para una Experiencia Legendaria?
              </motion.h3>
              <div className="w-16 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-6 md:mb-8"></div>
              <motion.p
                className="text-sm md:text-xl text-hoplon-gold/90 mb-8 md:mb-12 font-light max-w-2xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Contacta con nosotros y crearemos el evento perfecto que refleje
                la grandeza de tus celebraciones más importantes
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={handleReservarEvento}
                  className="w-full sm:w-auto bg-transparent border-2 border-hoplon-gold text-hoplon-gold hover:bg-hoplon-gold hover:text-hoplon-black font-bold px-6 md:px-12 py-3 md:py-4 text-sm md:text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-hoplon-gold/30"
                  size="lg"
                >
                  CONSULTAR DISPONIBILIDAD
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <HoplonFooter />
    </div>
  );
};

export default Servicios;
