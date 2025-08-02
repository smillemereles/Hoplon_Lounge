import { motion } from "framer-motion";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";

const entradas = [
  {
    name: "Jamón Ibérico de Bellota 36 Meses",
    price: "€24",
    ingredients: "Jamón ibérico curado 36 meses, pan cristal, tomate rallado, aceite virgen extra"
  },
  {
    name: "Tartar de Atún Rojo Almadraba",
    price: "€22",
    ingredients: "Atún rojo de almadraba, aguacate, sésamo negro, wasabi, soja premium"
  },
  {
    name: "Croquetas de Jamón Trufadas",
    price: "€16",
    ingredients: "Bechamel artesanal, jamón ibérico, trufa negra, pan rallado casero"
  },
  {
    name: "Pulpo a la Gallega Premium",
    price: "€26",
    ingredients: "Pulpo de ría, patatas cachelo, pimentón de La Vera, aceite de oliva arbequina"
  },
  {
    name: "Foie Gras a la Plancha",
    price: "€28",
    ingredients: "Foie gras fresco, reducción de Pedro Ximénez, higos confitados"
  },
  {
    name: "Huevos Rotos con Trufa",
    price: "€18",
    ingredients: "Huevos camperos, patatas confitadas, trufa negra, jamón ibérico"
  },
  {
    name: "Ostras Gillardeau",
    price: "€32",
    ingredients: "Ostras francesas frescas, granita de limón, caviar Ossetra"
  },
  {
    name: "Carpaccio de Buey Madurado",
    price: "€20",
    ingredients: "Buey madurado 45 días, rúcula salvaje, parmesano 24 meses, aceite de trufa"
  }
];

const MenuEntradas = () => {
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
              Entradas
            </h1>
            <p className="text-xl text-hoplon-garnet font-medium">
              El comienzo perfecto de una experiencia legendaria
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {entradas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="border-b border-hoplon-gold/30 pb-6 mb-6 group-hover:border-hoplon-gold transition-colors duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-serif font-semibold text-hoplon-black group-hover:text-hoplon-garnet transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold text-hoplon-gold flex-shrink-0 ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
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

export default MenuEntradas