// src/components/layout/Footer.jsx
import React from 'react';
import { Zap, Lock, HeadphonesIcon, Smartphone } from 'lucide-react';
import yobanteLogo from '../../assets/images/Logo Yobante - Version 1.png';

const trustItems = [
  { icon: <Zap size={13} />, label: 'Livraison rapide' },
  { icon: <Lock size={13} />, label: 'Paiement sécurisé' },
  { icon: <HeadphonesIcon size={13} />, label: 'Support en ligne' },
  { icon: <Smartphone size={13} />, label: 'iOS & Android' },
];

const Footer = ({ scrollTo }) => {
  return (
    <footer className="footer">
      <div className="footer-bg-glow glow-1"></div>
      <div className="footer-bg-glow glow-2"></div>

      <div className="container">
        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={yobanteLogo} alt="Yobanté Logo" className="logo-img" />
            </div>
            <p className="footer-description">
              Votre spécialiste de l'expédition de colis et du e-commerce
              entre la France et le Sénégal.
            </p>
          </div>

          {/* TRUST + LINKS */}
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

        <div className="footer-bottom">
          <span className="copyright">© 2026 YOBANTÉ. Tous droits réservés.</span>
        </div>
      </div>

      <style jsx>{`
        * { box-sizing: border-box; }

        .footer {
          position: relative; overflow: hidden;
          background: #053d8f;
          color: white; padding-top: 38px;
        }

        .footer-bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: 0.12; z-index: 0;
        }

        .glow-1 { width: 280px; height: 280px; background: #1E3A8A; top: -90px; right: -90px; }
        .glow-2 { width: 230px; height: 230px; background: #F5C518; bottom: -70px; left: -70px; }

        .container {
          position: relative; z-index: 2;
          max-width: 1100px; margin: 0 auto; padding: 0 28px;
        }

        .footer-main {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 50px; padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .footer-brand { max-width: 290px; flex-shrink: 0; }
        .footer-logo  { margin-bottom: 12px; }

        .logo-img { height: 82px; width: auto; object-fit: contain; }

        .footer-description {
          color: rgba(255,255,255,.58);
          line-height: 1.65; font-size: 13px; margin: 0;
        }

        .footer-right {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 18px;
        }

        .footer-trust {
          display: flex; flex-wrap: wrap; gap: 9px; justify-content: flex-end;
        }

        .trust-item {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 18px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.75);
          font-size: 11.5px; font-weight: 700;
          backdrop-filter: blur(8px);
        }

        .trust-icon { display: flex; align-items: center; color: #F5C518; }

        .footer-links { display: flex; gap: 18px; }

        .footer-links button {
          background: transparent; border: none;
          color: rgba(255,255,255,.5);
          font-size: 12.5px; cursor: pointer; padding: 0;
          transition: color 0.2s;
        }

        .footer-links button:hover { color: rgba(255,255,255,.82); }

        .footer-bottom {
          display: flex; justify-content: center; padding: 14px 0;
        }

        .copyright { color: rgba(255,255,255,.38); font-size: 12.5px; }

        @media (max-width: 768px) {
          .footer-main { flex-direction: column; gap: 24px; }
          .footer-brand { max-width: 100%; }
          .footer-right { align-items: flex-start; }
          .footer-trust { justify-content: flex-start; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

