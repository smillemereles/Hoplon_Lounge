import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { SECTIONS, ANIMATION_DURATIONS } from "@/lib/constants";

const HoplonHero = () => {
  const { scrollToSection } = useScrollNavigation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/herofrontpage.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hoplon-black/80 via-hoplon-black/60 to-hoplon-garnet/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATIONS.VERY_SLOW, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-cinzel font-bold text-hoplon-white mb-6 leading-tight uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            Solo Servimos Platos{" "}
            <span className="text-hoplon-gold">Legendarios</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-hoplon-gold font-medium mb-12 font-cinzel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.VERY_SLOW, delay: 1 }}
          >
            Donde el honor espartano se encuentra con el sabor Paraguayo y
            Español.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.VERY_SLOW, delay: 1.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection(SECTIONS.RESERVA)}
                className="bg-gradient-to-r from-hoplon-gold to-hoplon-gold-dark text-hoplon-black font-bold px-8 py-6 text-lg hover:shadow-lg hover:shadow-hoplon-gold/30 transition-all duration-300"
                size="lg"
              >
                RESERVAR MESA
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection(SECTIONS.MENU)}
                variant="outline"
                className="bg-hoplon-garnet/80 border-hoplon-garnet text-hoplon-white hover:bg-hoplon-garnet hover:text-hoplon-white font-bold px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
                size="lg"
              >
                NUESTROS SERVICIOS
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATIONS.VERY_SLOW, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-hoplon-gold rounded-full flex justify-center"
          >
            <motion.div
              className="w-1 h-3 bg-hoplon-gold rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoplonHero;
