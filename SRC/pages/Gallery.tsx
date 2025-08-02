import { useState } from "react";
import { motion } from "framer-motion";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";
import galleryAppetizers from "@/assets/gallery-appetizers.jpg";
import galleryDrinks from "@/assets/gallery-drinks.jpg";
import galleryRestaurant from "@/assets/gallery-restaurant.jpg";

const galleryImages = [
  {
    id: 1,
    category: "Comidas",
    title: "Entrantes Gourmet",
    image: galleryAppetizers,
  },
  {
    id: 2,
    category: "Comidas",
    title: "Chuletón Premium",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Comidas",
    title: "Cordero Lechal",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Tragos",
    title: "Cocteles Premium",
    image: galleryDrinks,
  },
  {
    id: 5,
    category: "Tragos",
    title: "Vinos Selectos",
    image: "https://images.unsplash.com/photo-1506377247777-fd62a73d376d?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Tragos",
    title: "Whisky Collection",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "El Restaurante",
    title: "Ambiente Elegante",
    image: galleryRestaurant,
  },
  {
    id: 8,
    category: "El Restaurante",
    title: "Sala Principal",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 9,
    category: "El Restaurante",
    title: "Barra de Bar",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 10,
    category: "Comidas",
    title: "Postres de Autor",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 11,
    category: "Tragos",
    title: "Gin Tonic Premium",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 12,
    category: "El Restaurante",
    title: "Mesa Privada",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2340&auto=format&fit=crop",
  }
];

const categories = ["Todo", "Comidas", "Tragos", "El Restaurante"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Todo");

  const filteredImages = activeCategory === "Todo" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

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
              Gallery
            </h1>
            <p className="text-xl text-hoplon-garnet font-medium">
              Una mirada a la experiencia Hoplon Lounge
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-4 bg-hoplon-black/5 p-2 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-hoplon-gold text-hoplon-black shadow-lg"
                      : "text-hoplon-black hover:bg-hoplon-gold/20"
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-2xl hover:shadow-hoplon-gold/20 transition-all duration-500">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-hoplon-white font-serif font-bold text-xl mb-2">
                      {image.title}
                    </h3>
                    <span className="text-hoplon-gold text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
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