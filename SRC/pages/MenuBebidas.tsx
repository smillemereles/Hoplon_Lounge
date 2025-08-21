import { motion } from "framer-motion";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";

const bebidas = [
  {
    name: "Vega Sicilia Único 2010",
    price: "180.00gs",
    ingredients: "Vino tinto reserva gran reserva, Ribera del Duero, madera noble"
  },
  {
    name: "Whisky Macallan 18 Años",
    price: "gs",
    ingredients: "Whisky escocés single malt, 18 años, barricas de roble jerez"
  },
  {
    name: "Gin Tonic Premium Hendrick's",
    price: "gs",
    ingredients: "Gin Hendrick's, tónica Fever-Tree, pepino, enebro, limón"
  },
  {
    name: "Champagne Dom Pérignon 2012",
    price: "gs",
    ingredients: "Champagne vintage, método champenoise, burbujas elegantes"
  },
  {
    name: "Old Fashioned de Autor",
    price: "gs",
    ingredients: "Bourbon premium, azúcar demerara, bitter de naranja, cereza"
  },
  {
    name: "Martini Dry Clásico",
    price: "gs",
    ingredients: "Gin premium, vermut seco, aceituna española, twist de limón"
  },
  {
    name: "Rioja Gran Reserva 2015",
    price: "gs",
    ingredients: "Tempranillo, crianza 24 meses, D.O.Ca. Rioja, taninos sedosos"
  },
  {
    name: "Manhattan Premium",
    price: "gs",
    ingredients: "Whisky americano, vermut rojo, bitter Angostura, cereza confitada"
  }
];

const MenuBebidas = () => {
  return (
    <div className="min-h-screen bg-hoplon-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoplon-black via-hoplon-garnet/20 to-hoplon-black"></div>
      <div className="absolute top-20 left-10 w-32 h-32 opacity-15">
        <div className="w-full h-full bg-hoplon-gold rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 w-40 h-40 opacity-15">
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
              BEBIDAS
            </h1>
            <div className="w-24 h-1 bg-hoplon-gold mx-auto mb-6"></div>
            <p className="text-xl text-hoplon-gold font-medium max-w-2xl mx-auto">
              Vinos, cocteles y destilados de primera calidad
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {bebidas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-hoplon-garnet/10 backdrop-blur-sm border border-hoplon-gold/30 rounded-lg p-6 hover:border-hoplon-gold/70 transition-all duration-300 hover:shadow-lg hover:shadow-hoplon-gold/30">
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

export default MenuBebidas;