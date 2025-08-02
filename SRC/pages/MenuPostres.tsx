import { motion } from "framer-motion";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";

const postres = [
  {
    name: "Coulant de Chocolate Negro 70%",
    price: "€12",
    ingredients: "Chocolate Valrhona, corazón líquido, helado de vainilla bourbon"
  },
  {
    name: "Crema Catalana Trufada",
    price: "€10",
    ingredients: "Crema catalana tradicional, trufa negra, azúcar caramelizado"
  },
  {
    name: "Tiramisu de Autor",
    price: "€11",
    ingredients: "Mascarpone italiano, café espresso, cacao en polvo, bizcocho de soletilla"
  },
  {
    name: "Tarta de Queso al Horno",
    price: "€9",
    ingredients: "Queso cremoso, base de galleta, coulis de frutos rojos"
  },
  {
    name: "Milhojas de Crema Pastelera",
    price: "€13",
    ingredients: "Hojaldre artesanal, crema pastelera, almendra tostada, azúcar glass"
  },
  {
    name: "Helado Artesanal Trío",
    price: "€8",
    ingredients: "Tres sabores de temporada, chocolate, vainilla, frutos rojos"
  },
  {
    name: "Flan de Huevo Casero",
    price: "€7",
    ingredients: "Huevos camperos, leche fresca, caramelo líquido, nata montada"
  },
  {
    name: "Torrija Moderna",
    price: "€10",
    ingredients: "Pan brioche, leche canela, helado de turrón, miel de romero"
  }
];

const MenuPostres = () => {
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
              Postres
            </h1>
            <p className="text-xl text-hoplon-garnet font-medium">
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

export default MenuPostres;