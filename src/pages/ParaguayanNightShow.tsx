import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";
import { useEffect } from "react";

const showDetails = {
  arpa: {
    title: "Show de Arpa Paraguaya",
    description:
      "Experimenta la magia del arpa paraguaya, instrumento nacional que llevará tu alma a través de melodías tradicionales interpretadas por virtuosos músicos.",
    image: "/arpa.jpg",
    features: [
      "Música folklórica tradicional",
      "Artistas profesionales",
      "Repertorio clásico y moderno",
      "Ambiente íntimo y cultural",
    ],
  },
  bailes: {
    title: "Danzas Típicas Paraguayas",
    description:
      "Déjate cautivar por la gracia y colorido de nuestras bailarinas que interpretan polkas, guaranias y danzas folclóricas en trajes típicos auténticos.",
    image: "/nuestrasbailarinas.jpg",
    features: [
      "Polka paraguaya tradicional",
      "Guaranias románticas",
      "Trajes típicos auténticos",
      "Coreografías originales",
    ],
  },
  gastronomia: {
    title: "Buffet Libre & Parrilla",
    description:
      "Complementa la experiencia cultural con nuestra exquisita gastronomía paraguaya. Buffet libre con platos típicos y parrilla con las mejores carnes.",
    image: "/BUFFET.jpg",
    features: [
      "Sopa paraguaya tradicional",
      "Chipa guazú y mandioca",
      "Parrilla con cortes premium",
      "Postres típicos caseros",
    ],
  },
};

const packages = [
  {
    name: "Experiencia Completa",
    price: "Consultar",
    duration: "3 horas",
    includes: [
      "Show de arpa paraguaya (45 min)",
      "Espectáculo de danzas (30 min)",
      "Buffet libre completo",
      "Parrilla premium",
      "Bebidas incluidas",
      "Mesa reservada",
    ],
    popular: true,
  },
  {
    name: "Cultural Show",
    price: "Consultar",
    duration: "2 horas",
    includes: [
      "Show de arpa paraguaya",
      "Danzas típicas",
      "Aperitivos paraguayos",
      "2 bebidas por persona",
      "Mesa estándar",
    ],
    popular: false,
  },
  {
    name: "Cena Show",
    price: "Consultar",
    duration: "2.5 horas",
    includes: [
      "Espectáculo completo",
      "Cena con platos típicos",
      "Parrilla incluida",
      "Vino de la casa",
      "Mesa preferencial",
    ],
    popular: false,
  },
];

const ParaguayanNightShow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReservation = () => {
    const message =
      "Hola, quiero reservar una mesa en el Paraguayan Night Show en Hoplon Club. ¿Podrían darme más información sobre horarios y disponibilidad?";
    const phoneNumber = "595994467566";
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B${phoneNumber}&text=${encodeURIComponent(
      message
    )}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-hoplon-black relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoplon-black via-hoplon-garnet/10 to-hoplon-black"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-16 w-2 h-2 bg-hoplon-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-hoplon-gold rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-hoplon-gold rounded-full"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-hoplon-gold rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-hoplon-gold rounded-full"></div>
      </div>

      <HoplonNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative">
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
              <h1 className="text-4xl md:text-7xl font-cinzel font-bold text-hoplon-white mb-6 relative z-10 tracking-wider">
                PARAGUAYAN NIGHT SHOW
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-hoplon-gold font-medium tracking-wide uppercase mb-8">
              Una velada única de cultura, música y gastronomía paraguaya
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                onClick={handleReservation}
                className="bg-gradient-to-r from-hoplon-garnet to-hoplon-garnet/80 text-hoplon-white font-bold px-10 py-4 text-lg rounded-xl border border-hoplon-gold/30 hover:shadow-xl hover:shadow-hoplon-garnet/40 transition-all duration-300"
                size="lg"
              >
                RESERVAR AHORA
              </Button>
            </motion.div>
          </motion.div>

          {/* Show Details */}
          <div className="space-y-32">
            {Object.entries(showDetails).map(([key, detail], index) => (
              <motion.div
                key={key}
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
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-hoplon-gold/30"
                  >
                    <img
                      src={detail.image}
                      alt={detail.title}
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
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-1 bg-hoplon-gold"></div>
                      <span className="text-hoplon-gold text-sm font-medium tracking-widest uppercase">
                        EXPERIENCIA CULTURAL
                      </span>
                    </div>
                    <motion.h2
                      className="text-3xl md:text-5xl font-cinzel font-bold text-hoplon-white leading-tight"
                      whileHover={{ color: "hsl(var(--hoplon-gold))" }}
                    >
                      {detail.title}
                    </motion.h2>
                  </div>

                  <p className="text-lg text-hoplon-white/80 leading-relaxed font-light">
                    {detail.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {detail.features.map((feature, featureIndex) => (
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* Packages Section */}
          {/*<motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-hoplon-white mb-4">
                PAQUETES DISPONIBLES
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-4"></div>
              <p className="text-xl text-hoplon-gold font-medium">
                Elige la experiencia perfecta para ti
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    pkg.popular
                      ? "bg-gradient-to-br from-hoplon-gold/20 to-hoplon-gold-dark/30 border-hoplon-gold shadow-lg shadow-hoplon-gold/20"
                      : "bg-gradient-to-br from-hoplon-black/80 to-hoplon-garnet/20 border-hoplon-gold/20"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-hoplon-gold text-hoplon-black px-4 py-1 rounded-full text-sm font-bold uppercase">
                        Más Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-cinzel font-bold text-hoplon-white">
                      {pkg.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-hoplon-gold">
                        {pkg.price}
                      </div>
                      <div className="text-hoplon-white/60 text-sm">
                        {pkg.duration}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    {pkg.includes.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-hoplon-gold rounded-full"></div>
                        <span className="text-hoplon-white/90 text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button
                      onClick={handleReservation}
                      className={`w-full font-bold py-3 rounded-xl transition-all duration-300 ${
                        pkg.popular
                          ? "bg-hoplon-gold text-hoplon-black hover:bg-hoplon-gold/90"
                          : "bg-transparent border border-hoplon-gold text-hoplon-gold hover:bg-hoplon-gold hover:text-hoplon-black"
                      }`}
                    >
                      RESERVAR
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>*/}

          {/* Call to Action Final */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-32 p-16 bg-gradient-to-br from-hoplon-garnet via-hoplon-black to-hoplon-garnet/80 rounded-3xl border border-hoplon-gold/30"
          >
            <h3 className="text-3xl md:text-4xl font-cinzel font-bold text-hoplon-white mb-6">
              ¿Listo para una Noche Inolvidable?
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-hoplon-gold/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Sumérgete en la rica cultura paraguaya con una experiencia única
              que combina música tradicional, danzas folclóricas y la mejor
              gastronomía local
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleReservation}
                className="bg-transparent border-2 border-hoplon-gold text-hoplon-gold hover:bg-hoplon-gold hover:text-hoplon-black font-bold px-12 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-hoplon-gold/30"
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

export default ParaguayanNightShow;
