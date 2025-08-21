import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Noches de vinos",
    price: "Martes",
    ingredients: "VIVE UNA NOCHE DIVINA ENTRE COPAS Y MARIDAJES"
  },
  {
    name: "Mens Night",
    price: "Miercoles",
    ingredients: "Disfruta de una noche exclusiva para hombres con descuentros especiales en bebidas y platos seleccionados"
  },
  {
    name: "Noche de vinos",
    price: "Jueves",
    ingredients: "VIVE UNA NOCHE DIVINA ENTRE COPAS Y MARIDAJES"
  },
  {
    name: "Noche Acustica",
    price: "Viernes",
    ingredients: "Disfruta de una noche magica con musisca en vivo y una experiencia culinaria unica"
  },
  {
    name: "Girls Night",
    price: "Sabado",
    ingredients: "Disfruta de una noche exclusiva para mujeres con descuentos especiales en bebidas y platos seleccionados"
  }
];

const HoplonMenuSemanal = () => {
  return (
    <section id="menu-semanal" className="py-24 bg-gradient-to-b from-hoplon-black via-hoplon-black to-hoplon-garnet relative overflow-hidden" style={{scrollMarginTop: '80px'}}>
      <div className="container mx-auto px-6">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-hoplon-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-hoplon-garnet rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-hoplon-white mb-4 uppercase tracking-wider">
            Esta Semana en Hoplon Lounge
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-hoplon-gold font-medium">
            Eventos Especiales
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-hoplon-black/60 backdrop-blur-sm border border-hoplon-gold/20 rounded-lg p-6 group-hover:border-hoplon-gold group-hover:bg-hoplon-black/80 transition-all duration-300 shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-cinzel font-semibold text-hoplon-white group-hover:text-hoplon-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-hoplon-gold flex-shrink-0 ml-4">
                      {item.price}
                    </span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-hoplon-gold/30 to-transparent mb-3"></div>
                  <p className="text-hoplon-white/70 text-sm leading-relaxed group-hover:text-hoplon-white/90 transition-colors duration-300">
                    {item.ingredients}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoplonMenuSemanal;