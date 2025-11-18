import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-accent/20">
      <div className="container mx-auto px-6 py-8 text-center text-light/60">
        <p>&copy; {new Date().getFullYear()} d2am Consultoria de Dados. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Transformando Dados em Decisões.</p>
      </div>
    </footer>
  );
};

export default Footer;
