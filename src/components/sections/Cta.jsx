// src/components/sections/Cta.jsx
import React from 'react';

const Cta = ({ scrollTo }) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          
          {/* BADGE */}
          <div className="cta-badge">
            <span className="badge-dot"></span>
            Livraison - Expédition - Shopping
          </div>

          {/* TITLE */}
          <h2 className="cta-title">
            Prêt à acheter vos produits ou expédier vos colis ?
          </h2>

          {/* DESCRIPTION */}
          <p className="cta-description">
            Rejoignez des centaines de clients qui font confiance à 
            <strong> YOBANTÉ </strong>
            pour leurs achats et expéditions entre la France et le Sénégal.
          </p>

          {/* BUTTONS */}
          <div className="cta-buttons">
            <button
              className="cta-btn secondary"
              onClick={() => scrollTo('hero')}
            >
              Télécharger nos applications
            </button>
          </div>

          {/* TRUST */}
          <div className="cta-trust">
            <div className="trust-item">
              +50 colis livrés
            </div>
            <div className="trust-item">
              Envois sécurisés
            </div>
            <div className="trust-item">
              Support rapide
            </div>
          </div>

        </div>
      </div>

      {/* Déplacé à l'intérieur de la balise <section> pour corriger l'erreur de parent unique */}
      <style jsx>{`
        .cta-section {
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          background: linear-gradient(135deg, #0f1f52 0%, #1E3A8A 80%, #2a52c9 100%);
          text-align: center;
          color: white;
        }

        .container {
          position: relative;
          z-index: 5;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .cta-content {
          max-width: 850px;
          margin: 0 auto;
        }

        /* ===== BADGE ===== */
        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(14px);
          padding: 10px 20px;
          border-radius: 999px;
          margin-bottom: 28px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #faf066;
        }

        /* ===== TITLE ===== */
        .cta-title {
          font-size: clamp(32px, 4.5vw, 56px);
          line-height: 1.15;
          font-weight: 800;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }

        /* ===== DESCRIPTION ===== */
        .cta-description {
          max-width: 680px;
          margin: 0 auto 40px;
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.95);
        }

        .cta-description strong {
          color: #faf066;
          font-weight: 700;
        }

        /* ===== BUTTONS ===== */
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }

        .cta-btn {
          border: none;
          border-radius: 999px;
          padding: 16px 36px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .secondary {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(14px);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        /* ===== TRUST ===== */
        .cta-trust {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .trust-item {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          padding: 12px 20px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .cta-section {
            padding: 80px 0;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-btn {
            width: 100%;
          }

          .cta-trust {
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
            gap: 12px;
          }

          .trust-item {
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .cta-title {
            font-size: 28px;
          }

          .cta-description {
            font-size: 16px;
          }

          .cta-badge {
            font-size: 12px;
            padding: 8px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Cta;