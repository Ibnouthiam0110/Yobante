// src/components/sections/Cta.jsx
import React from 'react';

const Cta = ({ scrollTo }) => {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="container cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Prêt à envoyer votre premier colis ?</h2>
          <p className="cta-description">
            Rejoignez des milliers de familles et d'entreprises qui font confiance à 
            <strong> YOBANTÉ</strong> pour leurs envois entre la France et le Sénégal.
          </p>
          
          <div className="cta-buttons">
            <button 
              className="cta-btn cta-primary" 
              onClick={() => scrollTo('contact')}
            >
              Commencer maintenant
              <span className="btn-icon">→</span>
            </button>
            <button 
              className="cta-btn cta-secondary" 
              onClick={() => scrollTo('apps')}
            >
              Télécharger l'application
            </button>
          </div>
          
          <div className="cta-trust">
            <span className="trust-item"> Plus de 500 colis livrés</span>
            <span className="trust-divider">|</span>
            <span className="trust-item"> Envois sécurisés</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(135deg, #00BFFF 0%, #00BFFF 100%);
          color: white;
          overflow: hidden;
          text-align: center;
        }

        .cta-section::before {
          content: "";
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255, 199, 44, 0.1);
          z-index: 1;
        }

        .cta-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: clamp(30px, 5vw, 48px);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .cta-description {
          font-size: clamp(16px, 2vw, 20px);
          opacity: 0.9;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .cta-btn {
          padding: 18px 36px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cta-primary {
          background-color: #faf066;
          color: #00BFFF;
        }

        .cta-primary:hover {
          background-color: #faf066;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .cta-secondary {
          background-color: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .cta-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-3px);
        }

        .btn-icon {
          font-size: 20px;
          transition: transform 0.3s;
        }

        .cta-primary:hover .btn-icon {
          transform: translateX(5px);
        }

        .cta-trust {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          font-size: 14px;
          opacity: 0.7;
        }

        .trust-divider {
          opacity: 0.3;
        }

        @media (max-width: 640px) {
          .cta-section {
            padding: 80px 0;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-btn {
            width: 100%;
            justify-content: center;
          }

          .cta-trust {
            flex-direction: column;
            gap: 10px;
          }

          .trust-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Cta;