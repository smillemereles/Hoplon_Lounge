import { motion } from "framer-motion";
import { Utensils, Users } from "lucide-react";
import Counter from "./HoplonCounter";

const HoplonHistoria = () => {
  return (
    <section id="historia" className="relative py-24 overflow-hidden" style={{scrollMarginTop: '80px'}}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hoplonexterior.jpg')`
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
              className="text-3xl md:text-4xl font-cinzel font-bold text-hoplon-black mb-6 text-center uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nuestra Historia
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-6"></div>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed text-center font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hoplon Club es un homenaje vivo a la grandeza de tres culturas: la griega, la hispánica y la paraguaya. 
              Nos inspira el espíritu espartano, la tradición española y la identidad guaraní para crear experiencias
              que fusionan historia, gastronomía y arte.Nuestro nombre evoca el escudo de los hoplitas, símbolo de honor y valentía,
              valores que guían cada experiencia que ofrecemos.
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
            <Counter end={20} suffix="+" />
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
            <Counter end={300} suffix="+" />
            <p className="text-hoplon-white font-medium mt-2">Capacidad de Comensales</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoplonHistoria;