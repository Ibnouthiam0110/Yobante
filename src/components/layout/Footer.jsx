// src/components/layout/Footer.jsx
import React from 'react';
import { Zap, Lock, HeadphonesIcon, Smartphone } from 'lucide-react';
import yobanteLogo from '../../assets/images/logo5.jpeg';

const trustItems = [
  { icon: <Zap size={14} />, label: 'Livraison rapide' },
  { icon: <Lock size={14} />, label: 'Paiement sécurisé' },
  { icon: <HeadphonesIcon size={14} />, label: 'Support 24/7' },
  { icon: <Smartphone size={14} />, label: 'iOS & Android' },
];

const Footer = ({ scrollTo }) => {
  return (
    <footer className="footer">
      <div className="footer-bg-glow glow-1"></div>
      <div className="footer-bg-glow glow-2"></div>

      <div className="container">

        {/* MAIN ROW */}
        <div className="footer-main">

          {/* GAUCHE : Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={yobanteLogo} alt="Yobanté Logo" className="logo-img" />
            </div>
            <p className="footer-description">
              Votre spécialiste de l'expédition de colis et du e-commerce
              entre la France et le Sénégal.
            </p>
          </div>

          {/* DROITE : Trust + Liens */}
          <div className="footer-right">
            <div className="footer-trust">
              {trustItems.map(({ icon, label }) => (
                <div className="trust-item" key={label}>
                  <span className="trust-icon">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
            <div className="footer-links">
              <button>Mentions légales</button>
              <button>CGV</button>
              <button>Confidentialité</button>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span className="copyright">© 2026 YOBANTÉ. Tous droits réservés.</span>
        </div>

      </div>

      <style jsx>{`
        * { box-sizing: border-box; }

        .footer {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #02131d 0%, #05273a 100%);
          color: white;
          padding-top: 40px;
        }

        .footer-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.13;
          z-index: 0;
        }
        .glow-1 { width: 300px; height: 300px; background: #00BFFF; top: -100px; right: -100px; }
        .glow-2 { width: 250px; height: 250px; background: #faf066; bottom: -80px; left: -80px; }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 60px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-brand {
          max-width: 300px;
          flex-shrink: 0;
        }

        .footer-logo { margin-bottom: 14px; }

        .logo-img {
          height: auto;
          max-width: 150px;
          object-fit: contain;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          font-size: 13.5px;
          margin: 0;
        }

        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 20px;
        }

        .footer-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-end;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 13px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          font-size: 12px;
          font-weight: 700;
          backdrop-filter: blur(8px);
        }

        .trust-icon {
          display: flex;
          align-items: center;
          color: #00BFFF;
        }

        .footer-links {
          display: flex;
          gap: 20px;
        }

        .footer-links button {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.55);
          font-size: 13px;
          cursor: pointer;
          padding: 0;
        }

        .footer-links button:hover {
          color: rgba(255, 255, 255, 0.85);
        }

        .footer-bottom {
          display: flex;
          justify-content: center;
          padding: 16px 0;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.4);
          font-size: 13px;
        }

        @media (max-width: 768px) {
          .footer-main {
            flex-direction: column;
            gap: 28px;
          }
          .footer-brand { max-width: 100%; }
          .footer-right { align-items: flex-start; }
          .footer-trust { justify-content: flex-start; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;