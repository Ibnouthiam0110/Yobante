// src/App.js
import { useState, useEffect } from 'react';
import './styles/global.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import Hero from './components/sections/Hero';
import TrustBar from './components/sections/TrustBar';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import Pricing from './components/sections/Pricing';
import Applications from './components/sections/Applications';
import Faq from './components/sections/Faq';
import Contact from './components/sections/Contact';
import Cta from './components/sections/Cta';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Navbar scrolled={scrolled} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <TrustBar />
      <Services scrollTo={scrollTo} />
      <HowItWorks />
      <Pricing scrollTo={scrollTo} />
      <Applications />
      <Faq />
      <Contact scrollTo={scrollTo} />
      <Cta scrollTo={scrollTo} />
      <Footer scrollTo={scrollTo} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;