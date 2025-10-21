import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HoplonNavigation from "src/components/HoplonNavigation";
import HoplonFooter from "src/components/HoplonFooter";

const galleryImages = [
  {
    id: 1,
    category: "Nuestros Platos",
    title: "Parrilla de Carnes",
    image: "/CARNES.jpg",
  },
  {
    id: 2,
    category: "Nuestros Platos",
    title: "Vori Vori",
    image: "/BORIBORI.jpg",
  },
  {
    id: 3,
    category: "Nuestros Platos",
    title: "Picada de carnes premium",
    image: "/parrilla2.jpg",
  },
  {
    id: 4,
    category: "Bebidas",
    title: "Pina Colada",
    image: "/pinhacolada.jpg",
  },
  {
    id: 5,
    category: "Bebidas",
    title: "Caipirinhas",
    image: "/caipirinhas.jpg",
  },
  {
    id: 6,
    category: "Bebidas",
    title: "Daikiri de Frutilla",
    image: "/daikirifrozen.jpg",
  },
  {
    id: 7,
    category: "El Restaurante",
    title: "Nuestras bailarinas",
    image: "/nuestrasbailarinas.jpg",
  },
  {
    id: 8,
    category: "El Restaurante",
    title: "fachada del Restaurante",
    image: "/hoplonexterior.jpg",
  },
  {
    id: 9,
    category: "El Restaurante",
    title: "Barra del lounge",
    image: "/LOUNGE.jpg",
  },
  {
    id: 10,
    category: "Nuestros Platos",
    title: "Picanha a la parrilla",
    image: "/picañaalaparrilla.jpg",
  },
  {
    id: 11,
    category: "Bebidas",
    title: "Gin Tonic Premium",
    image: "/gindepomelo.jpg",
  },
  {
    id: 12,
    category: "El Restaurante",
    title: "Logo Exterior",
    image: "/logoexterior.jpg",
  },
  {
    id: 13,
    category: "Nuestros Platos",
    title: "Sopa Paraguaya",
    image: "/SOPA.jpg",
  },
  {
    id: 14,
    category: "Nuestros Platos",
    title: "Tabla de Frios",
    image: "/tabladefrios.jpeg",
  },
  {
    id: 15,
    category: "Nuestros Platos",
    title: "Parrilla de carnes",
    image: "/parrilla.jpg",
  },
  {
    id: 16,
    category: "Nuestros Platos",
    title: "Buffet Paraguayan Nights Show",
    image: "/BUFFET.jpg",
  },
  {
    id: 17,
    category: "Nuestros Platos",
    title: "Buffet Paraguayan Night Show",
    image: "/buffet2.jpg",
  },
  {
    id: 18,
    category: "Nuestros Platos",
    title: "Budin de Pan",
    image: "/postres1.jpg",
  },
  {
    id: 19,
    category: "Nuestros Platos",
    title: "Torta en copita",
    image: "/postres2.jpg",
  },
  {
    id: 20,
    category: "Nuestros Platos",
    title: "Budin de Pan",
    image: "/postre3.jpg",
  },
  {
    id: 21,
    category: "El Restaurante",
    title: "Mesas del Restaurante",
    image: "/mesas1.jpg",
  },
  {
    id: 22,
    category: "El Restaurante",
    title: "Ecenario Principal",
    image: "/mesas2.jpg",
  },
  {
    id: 23,
    category: "El Restaurante",
    title: "Mesas del Restaurante",
    image: "/mesas3.jpg",
  },
  {
    id: 24,
    category: "El Restaurante",
    title: "Mesas del Restaurante",
    image: "/mesas4.jpg",
  },
  {
    id: 25,
    category: "El Restaurante",
    title: "Exterior del Restaurante",
    image: "/exterior.jpg",
  },
  {
    id: 26,
    category: "El Restaurante",
    title: "Estructura de Mesas",
    image: "/estructurademesas.jpg",
  },
  {
    id: 27,
    category: "El Restaurante",
    title: "Preparacion de Mesa",
    image: "/preparaciondemesa.jpg",
  },
  {
    id: 28,
    category: "Bebidas",
    title: "Moscow Mule",
    image: "/moscomulle.jpg",
  },
];

const categories = ["Todo", "Nuestros Platos", "El Restaurante", "Bebidas"];

const Gallery = () => {
  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("Todo");

  const filteredImages =
    activeCategory === "Todo"
      ? galleryImages
      : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen bg-hoplon-black">
      <HoplonNavigation />

      {/* Hero Section with decorative food elements */}
      <section className="relative pt-32 pb-16 bg-hoplon-black overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-hoplon-gold to-hoplon-garnet rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-hoplon-garnet to-hoplon-gold rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-hoplon-gold/20 rounded-full blur-lg"></div>
        </div>

        {/* Decorative Food Elements */}
        <div className="absolute top-20 left-20 hidden lg:block opacity-30">
          <img
            src="/CATERING.JPG"
            alt=""
            className="w-32 h-32 object-cover rounded-lg transform rotate-12"
          />
        </div>
        <div className="absolute top-40 right-20 hidden lg:block opacity-20">
          <img
            src="/buffet2.jpg"
            alt=""
            className="w-28 h-28 object-cover rounded-lg transform -rotate-12"
          />
        </div>
        <div className="absolute bottom-20 left-32 hidden lg:block opacity-25">
          <img
            src="/parrilla.jpg"
            alt=""
            className="w-24 h-24 object-cover rounded-lg transform rotate-45"
          />
        </div>
        <div className="absolute bottom-32 right-32 hidden lg:block opacity-20">
          <img
            src="/vinos.jpg"
            alt=""
            className="w-30 h-30 object-cover rounded-lg transform -rotate-6"
          />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-cinzel font-bold text-hoplon-white tracking-wider mb-8"
          >
            Nuestra Galeria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-hoplon-gold font-light tracking-wide"
          >
            Descubri el arte y la esencia de Hoplon Lounge a traves de nuestra
            galleria.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-hoplon-black border-t border-hoplon-gold/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mb-16"
          >
            <div className="flex flex-wrap gap-2 bg-hoplon-white/5 p-1 rounded-lg backdrop-blur-sm border border-hoplon-gold/10">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-4 rounded-md font-cinzel font-medium text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-hoplon-gold text-hoplon-black shadow-lg shadow-hoplon-gold/30"
                      : "text-hoplon-gold hover:bg-hoplon-gold/10 hover:text-hoplon-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl shadow-hoplon-black/50 border border-hoplon-gold/10 hover:border-hoplon-gold/30 transition-all duration-500">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/90 via-hoplon-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-hoplon-white font-cinzel font-bold text-xl mb-2 tracking-wide">
                      {image.title}
                    </h3>
                    <span className="text-hoplon-gold text-sm font-medium uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>
                  {/* Subtle overlay gradient always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/30 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <HoplonFooter />
    </div>
  );
};

export default Gallery;
