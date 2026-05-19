// src/components/layout/Footer.jsx
import React from 'react';

const Footer = ({ scrollTo }) => {
  return (
    <footer className="footer">
      <div className="footer-bg-glow glow-1"></div>
      <div className="footer-bg-glow glow-2"></div>

      <div className="container">
        {/* TOP */}
        <div className="footer-top">
          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-logo">
              YOBAN<span>TÉ</span>
            </div>

            <p className="footer-description">
              Votre spécialiste de l'expédition de colis et du e-commerce
              entre la France et le Sénégal.
            </p>

            <div className="socials">
              <a href="#">
                <span>Facebook</span>
              </a>
              <a href="#">
                <span>Instagram</span>
              </a>
              <a href="#">
                <span>WhatsApp</span>
              </a>
              <a href="#">
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <button onClick={() => scrollTo('services')}>
                    Expédition
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('services')}>
                    Boutique
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('services')}>
                    Tarifs
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Entreprise</h4>
              <ul>
                <li>
                  <button onClick={() => scrollTo('faq')}>
                    FAQ
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('contact')}>
                    Contact
                  </button>
                </li>
                <li>
                  <button>
                    Recrutement
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Légal</h4>
              <ul>
                <li>
                  <button>
                    Mentions légales
                  </button>
                </li>
                <li>
                  <button>
                    CGV
                  </button>
                </li>
                <li>
                  <button>
                    Confidentialité
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* TRUST BAR */}
        <div className="footer-trust">
          <div className="trust-item">
            Livraison rapide
          </div>
          <div className="trust-item">
            Paiement sécurisé
          </div>
          <div className="trust-item">
            Support 24/7
          </div>
          <div className="trust-item">
            Apps iOS & Android
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span className="copyright">
            © 2026 YOBANTÉ. Tous droits réservés.
          </span>

          <div className="footer-bottom-links">
            <button>
              Mentions légales
            </button>
            <button>
              CGV
            </button>
            <button>
              Confidentialité
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .footer {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            #02131d 0%,
            #05273a 100%
          );
          color: white;
          padding-top: 90px;
        }

        .footer-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          z-index: 0;
        }

        .glow-1 {
          width: 350px;
          height: 350px;
          background: #00BFFF;
          top: -120px;
          right: -120px;
        }

        .glow-2 {
          width: 300px;
          height: 300px;
          background: #faf066;
          bottom: -100px;
          left: -100px;
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* TOP */
        .footer-top {
          display: flex;
          justify-content: space-between;
          gap: 80px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-brand {
          max-width: 360px;
        }

        .footer-logo {
          font-size: 42px;
          font-weight: 900;
          letter-spacing: -1px;
          margin-bottom: 20px;
          color: white;
        }

        .footer-logo span {
          color: #faf066;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.8;
          font-size: 15px;
          margin-bottom: 30px;
        }

        /* SOCIALS */
        .socials {
          display: flex;
          gap: 14px;
        }

        .socials a {
          padding: 10px 16px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }

        /* LINKS */
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px;
          flex: 1;
        }

        .footer-column h4 {
          color: white;
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 22px;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-column button {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.68);
          font-size: 15px;
          cursor: pointer;
          text-align: left;
          padding: 0;
        }

        /* TRUST */
        .footer-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          justify-content: center;
          padding: 40px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .trust-item {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
          font-weight: 700;
          backdrop-filter: blur(12px);
        }

        /* BOTTOM */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 0;
          gap: 20px;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-bottom-links button {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          font-size: 13px;
        }

        /* RESPONSIVE */
        @media (max-width: 968px) {
          .footer-top {
            flex-direction: column;
            gap: 50px;
          }

          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .footer-brand {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding-top: 70px;
          }

          .footer-links-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
          }

          .footer-logo {
            font-size: 34px;
          }

          .trust-item {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;