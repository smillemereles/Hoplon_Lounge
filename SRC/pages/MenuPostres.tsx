import { motion } from "framer-motion";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";

const postres = [
  {
    name: "Brownie de chocolate",
    price: "35.000gs",
    ingredients: "Chocolate Valrhona, corazón líquido, helado de vainilla bourbon"
  },
  {
    name: "Crema Catalana Trufada",
    price: "28.000gs",
    ingredients: "Crema catalana tradicional, trufa negra, azúcar caramelizado"
  },
  {
    name: "Tiramisu de Autor",
    price: "28.000gs",
    ingredients: "Mascarpone italiano, café espresso, cacao en polvo, bizcocho de soletilla"
  },
  {
    name: "Helado Artesanal Trío",
    price: "28.000gs",
    ingredients: "Tres sabores de temporada, chocolate, vainilla, frutos rojos"
  },
  {
    name: "Budin de Pan Casero",
    price: "20.000gs",
    ingredients: "Huevos camperos, leche fresca, caramelo líquido, nata montada"
  },
  {
    name: "Crepe de dulce de leche con helado y coñac flameado",
    price: "35.000gs",
    ingredients: "Crepe francés, dulce de leche artesanal, helado de crema, coñac flameado"
  }
];

const MenuPostres = () => {
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
              POSTRES
            </h1>
            <div className="w-24 h-1 bg-hoplon-gold mx-auto mb-6"></div>
            <p className="text-xl text-hoplon-gold font-medium max-w-2xl mx-auto">
              El final perfecto de una experiencia legendaria
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {postres.map((item, index) => (
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

export default MenuPostres;