import { motion } from "framer-motion";

const menuCategories = [
  {
    title: "Entradas",
    description: "Tapas y aperitivos que despiertan los sentidos",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2340&auto=format&fit=crop"
  },
  {
    title: "Plato Principal", 
    description: "Carnes premium y pescados de la más alta calidad",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2340&auto=format&fit=crop"
  },
  {
    title: "Postres",
    description: "Dulces tentaciones para culminar la experiencia",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2340&auto=format&fit=crop"
  }
];

const HoplonMenuCards = () => {
  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-hoplon-black to-hoplon-garnet">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-hoplon-white mb-4">
            Nuestros Menús
          </h2>
          <p className="text-xl text-hoplon-gold font-medium">
            Una experiencia culinaria forjada con honor y tradición
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-hoplon-white shadow-2xl hover:shadow-hoplon-gold/20 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-2xl font-serif font-bold text-hoplon-black mb-3 group-hover:text-hoplon-garnet transition-colors duration-300"
                  >
                    {category.title}
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-hoplon-gold/10 to-hoplon-garnet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

                {/* Gold Border on Hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-hoplon-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoplonMenuCards;