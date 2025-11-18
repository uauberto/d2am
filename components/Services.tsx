import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const hoverFocusEffect = { 
    y: -8, 
    scale: 1.03, 
    boxShadow: "0 10px 15px -3px rgba(73, 184, 133, 0.1), 0 4px 6px -2px rgba(73, 184, 133, 0.05)" 
  };
  const titleId = `service-title-${service.title.replace(/\s+/g, '-')}`;

  return (
    <motion.div 
      className="bg-secondary p-8 rounded-xl shadow-lg transition-all duration-300 border border-transparent hover:border-highlight/50 focus:border-highlight/50 h-full focus:outline-none cursor-pointer"
      variants={cardVariants}
      whileHover={hoverFocusEffect}
      whileFocus={hoverFocusEffect}
      tabIndex={0}
      role="group"
      aria-labelledby={titleId}
    >
      <div className="mb-4 text-highlight">{service.icon}</div>
      <h3 id={titleId} className="font-display text-2xl font-bold text-light mb-3">{service.title}</h3>
      <p className="text-light/70">{service.description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Reduced parallax intensity
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="services" ref={ref} className="bg-primary py-20 sm:py-28 relative" aria-labelledby="services-heading">
      <motion.div style={{ y }} className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="services-heading" className="font-display text-4xl md:text-5xl font-bold text-light">Nossas Soluções</h2>
          <p className="text-lg text-light/70 mt-4 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender a todas as suas necessidades de dados.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;