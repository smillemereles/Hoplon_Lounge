import { motion } from "framer-motion";
import { Utensils, Users } from "lucide-react";
import Counter from "./HoplonCounter";

const HoplonHistoria = () => {
  return (
    <section id="historia" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-hoplon-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Historia Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-hoplon-white/95 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-hoplon-black mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nuestra Historia
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed text-center font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              En Hoplon Lounge, cada plato cuenta una historia de honor y tradición. 
              Inspirados en la disciplina espartana y la pasión culinaria española, 
              creamos experiencias gastronómicas que trascienden lo ordinario. 
              Nuestros chefs maestros seleccionan solo los mejores cortes de carne 
              y los vinos más exquisitos, forjando cada comida como una obra de arte 
              digna de los más grandes guerreros.
            </motion.p>
          </div>
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
        >
          <motion.div 
            className="text-center bg-hoplon-black/80 backdrop-blur-sm rounded-lg p-8 border border-hoplon-gold/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Utensils className="w-12 h-12 text-hoplon-gold mx-auto mb-4" />
            </motion.div>
            <Counter end={50} suffix="+" />
            <p className="text-hoplon-white font-medium mt-2">Variedades de Platos</p>
          </motion.div>

          <motion.div 
            className="text-center bg-hoplon-black/80 backdrop-blur-sm rounded-lg p-8 border border-hoplon-gold/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-hoplon-gold mx-auto mb-4" />
            </motion.div>
            <Counter end={100} suffix="+" />
            <p className="text-hoplon-white font-medium mt-2">Capacidad de Comensales</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoplonHistoria;