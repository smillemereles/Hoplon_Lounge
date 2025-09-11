import { motion } from "framer-motion";
import HoplonNavigation from "src/components/HoplonNavigation";
import HoplonFooter from "src/components/HoplonFooter";

const picadas = [
  {
    name: "Papas Fritas en Salsa Andaluza",
    price: "Gs.30.000",
    ingredients: "Papas doradas y crujientes acompañadas de nuestra distintiva Salsa Andaluza: cremosa, sabrosa y con personalidad. Un clásico con acento de.sur."
  },
  {
    name: "Picada: Jamón, Queso y Aceitunas",
    price: "Gs.40.000",
    ingredients: "Cubos de jamón y queso listos para el ataque, escoltados por aceitunas verdes. Simple, directo y perfecto para abrir la batalla del sabor. Para compartir... o defender con honor."
  },
  {
    name: "Picaña en Tiritas Encebollada",
    price: "Gs.80.000",
    ingredients: "Tiras tiernas de picaña salteadas con cebolla hasta alcanzar su punto de caramelización. Jugosas, intensas, servidas con mandioca frita y salsa completan la experiencia. Un bocado que no se rinde."
  }
];

const MenuPicadas = () => {
  return (
    <div className="min-h-screen bg-hoplon-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoplon-black via-gray-900 to-hoplon-black"></div>
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
        <div className="w-full h-full bg-hoplon-gold rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 w-40 h-40 opacity-10">
        <div className="w-full h-full bg-hoplon-garnet rounded-full blur-xl"></div>
      </div>
      
      <HoplonNavigation />
      
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-hoplon-white mb-6 tracking-wider">
            PICADAS
            </h1>
            <div className="w-24 h-1 bg-hoplon-gold mx-auto mb-6"></div>
            <p className="text-xl text-hoplon-gold font-medium max-w-2xl mx-auto">
                Disfruta de una experiencia gastronómica única con nuestras picadas
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {picadas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-hoplon-black/40 backdrop-blur-sm border border-hoplon-gold/20 rounded-lg p-6 hover:border-hoplon-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-hoplon-gold/20">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-cinzel font-semibold text-hoplon-white group-hover:text-hoplon-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold text-hoplon-gold flex-shrink-0 ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.ingredients}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HoplonFooter />
    </div>
  );
};

export default MenuPicadas;