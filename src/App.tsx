import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import AboutUs from './components/AboutUs.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
