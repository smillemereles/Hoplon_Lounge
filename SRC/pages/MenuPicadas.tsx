import { motion } from "framer-motion";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";

const picadas = [
  {
    name: "Picanha en fetas",
    price: "100.000gs",
    ingredients: "Picanha de res, sal marina, chimichurri casero, papas rústicas"
  },
  {
    name: "Ojo de Bife y verduras asadas",
    price: "80.000gs",
    ingredients: " Ojo de bife, verduras de temporada asadaas "
  },
  {
    name: "Parrilla Familiar",
    price: "215.000gs",
    ingredients: "Asado de tira, vacío, chorizo, morcilla, ensalada mixta, papas al horno"
  },
  {
    name: "Picanha en tira con encebollado",
    price: "80.000gs",
    ingredients: " picanha de res, cebolla caramelizada, chimichurri, tostadas de pan y salsa de ajo"
  },
  {
    name: "Cachopo con patatas y morrones",
    price: "105.000gs",
    ingredients: "Cachopo de ternera, jamón serrano, queso manchego, pimientos asados, papas fritas"
  },
  {
    name: "Pechuga de pollo marinada en colchon de vegetales",
    price: "40.000gs",
    ingredients: "Pechuga de pollo, pimientos, cebolla, calabacín, especias mediterráneas"
  },
  {
    name: "Lomo de Perseo",
    price: "120.000gs",
    ingredients: "medallon de lomo a la parrilla, cremoso alligot de mandico"
  },
  {
    name: "Cazuela de carne desmechada ",
    price: "50.000gs",
    ingredients: " Carne de res desmechada, papas, zanahorias, cebolla, especias, arroz"
  },
  {
    name: "Hamburguesa Hoplon",
    price: "45.000gs",
    ingredients: "Carne de res, queso cheddar, lechuga, tomate, cebolla morada, pan brioche, papas fritas"
  },
  {
    name: "baguette de carne   ",
    price: "35.000gs",
    ingredients: "Baguette de carne de res, cebolla caramelizada, queso fundido, mostaza y mayonesa, papas fritas"
  },
  {
    name: "Pinchos marunos de pollo, con mandioca frita",
    price: "35.000gs",
    ingredients: "Pinchos de pollo marinados, especias árabes, mandioca frita, salsa de yogur"
  },
  {
    name: "Tortilla española alioli de ajo asado",
    price: "35.000gs",
    ingredients: "Tortilla de patatas, cebolla, huevo, alioli de ajo asado"
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