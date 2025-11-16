import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LOGO_BASE64 } from '../assets/logo';

const AboutUs: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Reduced parallax intensity
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  return (
    <section id="about" ref={ref} className="bg-secondary py-20 sm:py-28 overflow-hidden relative" aria-labelledby="about-heading">
      <motion.div style={{ y }} className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 id="about-heading" className="font-display text-4xl md:text-5xl font-bold text-light mb-6">
              Sobre a <span className="text-highlight animate-highlight">D2am</span>
            </h2>
            <p className="text-lg text-light/80 mb-4">
              Nascemos da paixão por dados e da crença de que toda empresa, independentemente do tamanho, pode se beneficiar de uma cultura orientada a dados. Nossa missão é ser a ponte entre a complexidade dos dados e a clareza das decisões de negócio.
            </p>
            <p className="text-lg text-light/80">
              Com uma equipe de especialistas em ciência de dados, engenharia e análise de negócios, a d2am se dedica a construir soluções personalizadas que não apenas resolvem problemas, mas também criam valor sustentável e vantagem competitiva para nossos clientes.
            </p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            <img 
              src={LOGO_BASE64}
              alt="Logo D2am Consulting" 
              className="rounded-xl shadow-2xl shadow-black/30 max-w-sm w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;