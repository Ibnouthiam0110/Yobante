// src/components/layout/Navbar.jsx
import { useState } from 'react';
import logo from '../../assets/images/logo.png';  // IMPORT DU LOGO

const Navbar = ({ scrolled, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Tarifs', id: 'tarifs' },
    { label: 'Applications', id: 'apps' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button className="logo" onClick={() => scrollTo('hero')}>
          {/* AFFICHAGE DU LOGO IMPORTÉ */}
          <img src={logo} alt="Yobanté Logo" className="logo-image" />
          
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

      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          background: none;
          border: none;
        }
        
        .logo-image {
          height: 180px;
          width: auto;
        }
        
        .logo-text {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--blue-dark);
        }
        
        .logo-text span {
          color: var(--yellow);
        }
        
        @media (max-width: 768px) {
          .logo-image {
            height: 32px;
          }
          
          .logo-text {
            font-size: 18px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;