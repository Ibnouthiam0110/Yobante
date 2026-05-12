// src/components/layout/Navbar.jsx
import { useState } from 'react';
const Navbar = ({ scrolled, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Tarifs', id: 'tarifs' },
    { label: 'Applications', id: 'apps' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button className="logo" onClick={() => scrollTo('hero')}>
          
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </div>

        <button className="nav-cta" onClick={() => scrollTo('contact')}>
          Nous contacter
        </button>

        <button className="burger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>

    </nav>
  );
};

export default Navbar;