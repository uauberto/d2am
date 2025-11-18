import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Reduced parallax intensity for better performance and subtlety
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  const title = "Transformando Dados em Decisões Estratégicas";
  const titleWords = title.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 1 } },
  };

  return (
    <section id="hero" ref={ref} className="relative bg-secondary overflow-hidden h-screen flex items-center justify-center" aria-labelledby="hero-heading">
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-10"
        style={{ y: yBg, backgroundSize: '3rem 3rem' }}
        aria-hidden="true"
      />
      <motion.div 
        style={{ y: yText }}
        className="relative container mx-auto px-6 text-center z-10"
      >
        <motion.h1 
          id="hero-heading"
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-light mb-4 tracking-tighter"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`inline-block mr-3 ${word === "Decisões" || word === "Estratégicas" ? "text-highlight" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          className="max-w-3xl mx-auto text-lg md:text-xl text-light/80 mb-8"
          variants={fadeInUp}
           initial="hidden"
           animate="visible"
        >
          Na d2am, extraímos insights valiosos dos seus dados para impulsionar o crescimento, otimizar operações e revelar novas oportunidades para o seu negócio.
        </motion.p>
        <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
        >
          <button
            onClick={scrollToContact}
            className="bg-highlight text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-light transition-all duration-300 transform hover:scale-105 shadow-lg shadow-highlight/20"
          >
            Inicie sua Jornada de Dados
          </button>
        </motion.div>
      </motion.div>
      <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(73, 184, 133, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(73, 184, 133, 0.1) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
