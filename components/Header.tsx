import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  const pathVariants = {
    closed: { d: "M4 6h16M4 12h16m-7 6h7", transition: { duration: 0.3 } },
    open: { d: "M6 18L18 6M6 6l12 12", transition: { duration: 0.3 } },
  }

  return (
    <header className="bg-primary/80 backdrop-blur-sm sticky top-0 z-50 w-full shadow-md shadow-black/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#hero"
          className="font-display text-3xl font-bold cursor-pointer text-light" 
          whileHover={{ 
            scale: 1.05,
            transition: { type: 'spring', stiffness: 300 }
          }}
          animate={{
            scale: [1, 1.04],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          D2<span className="text-highlight">am</span>
        </motion.a>
        <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-light hover:text-highlight transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:block bg-highlight text-primary font-bold py-2 px-6 rounded-lg hover:bg-light transition-all duration-300 transform hover:scale-105"
        >
          Fale Conosco
        </a>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-light focus:outline-none z-50 relative"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                variants={pathVariants}
                animate={isMenuOpen ? "open" : "closed"}
              />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          id="mobile-menu"
          className="md:hidden bg-secondary overflow-hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <nav className="flex flex-col items-center py-4 space-y-4" aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className="text-light hover:text-highlight transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="bg-highlight text-primary font-bold py-2 px-6 rounded-lg hover:bg-light transition-all duration-300"
            >
              Fale Conosco
            </a>
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;