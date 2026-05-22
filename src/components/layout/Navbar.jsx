// src/components/layout/Navbar.jsx
import { useState } from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = ({ scrolled, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Applications', id: 'apps' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
    { label: 'Qui sommes-nous ?', id: 'about' },
  ];

  const handleScroll = (id) => {
    scrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          {/* Logo */}
          <button className="logo" onClick={() => handleScroll('hero')}>
            <img
              src={logo}
              alt="YOBANTÉ Logo"
              className="logo-img"
            />
          </button>

          {/* Desktop Links */}
          <div className="nav-links desktop-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            className="nav-cta"
            onClick={() => handleScroll('contact')}
          >
            Nous contacter
          </button>

          {/* Burger */}
          <button
            className={`burger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="mobile-link"
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </button>
          ))}

          <button
            className="mobile-cta"
            onClick={() => handleScroll('contact')}
          >
            Nous contacter
          </button>
        </div>
      </nav>

      <style jsx>{`
    .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 0px 0;

  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,.06);
}

       .navbar.scrolled {
  padding: 8px 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        /* Logo */
        .logo {
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .logo-img {
          width: 140px;
          height: auto;
          object-fit: contain;
        }

        /* Desktop Nav */
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .desktop-links button {
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          transition: color 0.3s ease;
          position: relative;
        }

        .desktop-links button::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: #1E3A8A;
          transition: width 0.3s ease;
        }

        .desktop-links button:hover {
          color: #1E3A8A;
        }

        .desktop-links button:hover::after {
          width: 100%;
        }

        /* CTA */
        .nav-cta {
          border: none;
          background: #1E3A8A;
          color: white;
          padding: 8px 17px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 191, 255, 0.18);
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          background: #1A3278;
        }

        /* Burger */
        .burger {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          border: none;
          background: #f8fafc;
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .burger span {
          width: 22px;
          height: 2px;
          background: #0f172a;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .burger.active span:nth-child(1) {
          transform: rotate(45deg) translateY(10px);
        }

        .burger.active span:nth-child(2) {
          opacity: 0;
        }

        .burger.active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-10px);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          padding: 20px 24px 30px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transform: translateY(-20px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-link {
          border: none;
          background: #f8fafc;
          padding: 15px 18px;
          border-radius: 14px;
          text-align: left;
          font-size: 15px;
          font-weight: 600;
          color: #0f172a;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-link:hover {
          background: #EEF2FF;
          color: #1E3A8A;
        }

        .mobile-cta {
          margin-top: 8px;
          border: none;
          background: #1E3A8A;
          color: white;
          padding: 16px;
          border-radius: 16px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .desktop-links,
          .nav-cta {
            display: none;
          }

          .burger {
            display: flex;
          }

          .logo-img {
            width: 140px;
          }
        }

        @media (min-width: 901px) {
          .mobile-menu {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 18px;
          }

          .logo-img {
            width: 130px;
          }

          .burger {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;