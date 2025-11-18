import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');
    // Simulação de envio
    setTimeout(() => {
      setStatus(`Obrigado pelo contato, ${formData.name}! Retornaremos em breve.`);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000); // Limpa a mensagem após 5 segundos
    }, 1500);
  };

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Reduced parallax intensity
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);


  return (
    <section id="contact" ref={ref} className="bg-primary py-20 sm:py-28 relative" aria-labelledby="contact-heading">
      <motion.div style={{y}} className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contact-heading" className="font-display text-4xl md:text-5xl font-bold text-light">Vamos Conversar</h2>
          <p className="text-lg text-light/70 mt-4 max-w-2xl mx-auto">
            Pronto para destravar o potencial dos seus dados? Preencha o formulário abaixo e vamos iniciar um projeto incrível.
          </p>
        </motion.div>
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-secondary p-8 rounded-xl shadow-lg"
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={formItemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-light/90 mb-2">Nome Completo</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full bg-primary/50 border border-accent rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-highlight transition-colors"
                placeholder="Seu nome"
              />
            </motion.div>
            <motion.div variants={formItemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-light/90 mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full bg-primary/50 border border-accent rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-highlight transition-colors"
                placeholder="seu@email.com"
              />
            </motion.div>
            <motion.div variants={formItemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-light/90 mb-2">Sua Mensagem</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full bg-primary/50 border border-accent rounded-lg px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-highlight transition-colors"
                placeholder="Como podemos ajudar?"
              />
            </motion.div>
            <motion.div className="text-center" variants={formItemVariants}>
              <button
                type="submit"
                className="bg-highlight text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-light transition-all duration-300 transform hover:scale-105 shadow-lg shadow-highlight/20 w-full sm:w-auto"
              >
                Enviar Mensagem
              </button>
            </motion.div>
          </motion.form>
          {status && <p className="mt-6 text-center text-highlight" aria-live="polite">{status}</p>}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;