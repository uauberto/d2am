import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

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