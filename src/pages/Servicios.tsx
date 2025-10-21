import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";
import { useEffect } from "react";

const services = [
  {
    title: "Eventos Privados,Experiencia Coworking",
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
    image: "/FIESTADECUMPLEANHOS.JPG", // ✅ Corregido: "image" en minúscula
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
      "Hola, quiero consultar sobre reservar un evento especial en Hoplon Lounge";
    const phoneNumber = "595994467566";
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-hoplon-black relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoplon-black via-hoplon-black to-hoplon-garnet/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-16 w-2 h-2 bg-hoplon-gold/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-hoplon-gold/30 rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-hoplon-gold/15 rounded-full"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-hoplon-gold/25 rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-hoplon-gold/20 rounded-full"></div>
      </div>

      <HoplonNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="w-8 h-8 border border-hoplon-gold rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-40 right-16 opacity-30">
          <div className="w-6 h-6 bg-hoplon-gold/20 rounded-full animate-float"></div>
        </div>
        <div className="absolute bottom-20 left-20 opacity-25">
          <div className="w-4 h-4 border border-hoplon-gold/50 rotate-45"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-4 -left-4 w-16 h-16 border-2 border-hoplon-gold/30 rounded-full"
              ></motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 w-12 h-12 border border-hoplon-gold/20 rotate-45"
              ></motion.div>
              <h1 className="text-6xl md:text-7xl font-cinzel font-bold text-hoplon-white mb-6 relative z-10 tracking-wider">
                NUESTROS SERVICIOS
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-hoplon-gold font-medium tracking-wide uppercase">
              Experiencias legendarias forjadas con honor y distinción
            </p>
          </motion.div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-hoplon-black/80 to-hoplon-garnet/20 backdrop-blur-sm rounded-3xl p-8 border border-hoplon-gold/20 shadow-2xl ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } flex flex-col lg:flex-row items-center gap-12`}
              >
                {/* Decorative elements */}
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-hoplon-gold to-transparent"></div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 border border-hoplon-gold/30 rotate-45"></div>
                </div>

                {/* Image */}
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-hoplon-gold/30"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/60 via-transparent to-hoplon-gold/10"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-hoplon-gold/20 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-hoplon-gold rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-1 bg-hoplon-gold"></div>
                      <span className="text-hoplon-gold text-sm font-medium tracking-widest uppercase">
                        CELEBRACIONES
                      </span>
                    </div>
                    <motion.h2
                      className="text-4xl md:text-5xl font-cinzel font-bold text-hoplon-white leading-tight"
                      whileHover={{ color: "hsl(var(--hoplon-gold))" }}
                    >
                      {service.title}
                    </motion.h2>
                  </div>

                  <p className="text-lg text-hoplon-white/80 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureIndex * 0.1,
                        }}
                        className="flex items-center space-x-3 bg-hoplon-black/30 p-3 rounded-lg border border-hoplon-gold/10"
                      >
                        <div className="w-2 h-2 bg-hoplon-gold rounded-full"></div>
                        <span className="text-hoplon-white font-medium text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-6"
                  >
                    <Button
                      onClick={handleReservarEvento}
                      className="bg-gradient-to-r from-hoplon-garnet to-hoplon-garnet/80 text-hoplon-white font-bold px-10 py-4 text-lg rounded-xl border border-hoplon-gold/30 hover:shadow-xl hover:shadow-hoplon-garnet/40 transition-all duration-300 hover:border-hoplon-gold/50"
                    >
                      RESERVAR EVENTO
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-32 mb-24 h-96 rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/upscalemedia-transformed (1).png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl px-8">
                <div className="text-6xl text-hoplon-gold font-cinzel mb-6">
                  "
                </div>
                <p className="text-2xl md:text-3xl text-hoplon-white font-light italic leading-relaxed mb-8">
                  "En Hoplon Lounge, creamos momentos deliciosos que abrazan el
                  corazón y perduran como recetas de familia"
                </p>
                <div className="w-24 h-1 bg-hoplon-gold mx-auto mb-4"></div>
                <p className="text-hoplon-gold text-lg font-medium tracking-widest uppercase">
                  CHEF MERCEDEZ JIMENEZ
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative text-center mt-32 p-16 bg-gradient-to-br from-hoplon-garnet via-hoplon-black to-hoplon-garnet/80 rounded-3xl border border-hoplon-gold/30 overflow-hidden"
          >
            {/* Decorative background elements */}
            <div className="absolute top-8 left-8">
              <div className="w-20 h-1 bg-hoplon-gold"></div>
            </div>
            <div className="absolute bottom-8 right-8">
              <div className="w-16 h-16 border-2 border-hoplon-gold/30 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <div className="w-4 h-4 bg-hoplon-gold/20 rotate-45"></div>
            </div>
            <div className="absolute top-1/4 right-12">
              <div className="w-2 h-2 bg-hoplon-gold rounded-full"></div>
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-4xl md:text-5xl font-cinzel font-bold text-hoplon-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ¿Listo para una Experiencia Legendaria?
              </motion.h3>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-8"></div>
              <motion.p
                className="text-xl text-hoplon-gold/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed"
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
                  className="bg-transparent border-2 border-hoplon-gold text-hoplon-gold hover:bg-hoplon-gold hover:text-hoplon-black font-bold px-12 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-hoplon-gold/30"
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
