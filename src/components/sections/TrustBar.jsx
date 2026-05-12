// src/components/layout/TrustBar.jsx
import React from 'react';

const TrustBar = () => {
  return (
    <div className="trust-bar-container">
      <div className="container">
        <div className="trust-bar-content">
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span className="trust-text">Colis assurés</span>
          </div>
          
          <div className="trust-sep"></div>
          
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span className="trust-text">Support WhatsApp 24/7</span>
          </div>
          
          <div className="trust-sep"></div>
          
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span className="trust-text">Paiement sécurisé</span>
          </div>
          
          <div className="trust-sep"></div>
          
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span className="trust-text">App iOS & Android</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .trust-bar-container {
          background-color: #ffffff;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          padding: 20px 0;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .trust-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
        }

        .trust-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          background-color: #e0f2fe;
          color: #1a3a8f;
          border-radius: 50%;
          font-size: 12px;
          font-weight: bold;
        }

        .trust-text {
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          letter-spacing: 0.3px;
        }

        .trust-sep {
          width: 1px;
          height: 24px;
          background-color: #e2e8f0;
        }

        /* Responsive : Défilement horizontal sur mobile */
        @media (max-width: 768px) {
          .trust-bar-content {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 5px;
            scrollbar-width: none; /* Firefox */
          }
          
          .trust-bar-content::-webkit-scrollbar {
            display: none; /* Chrome/Safari */
          }

          .trust-item {
            padding-right: 10px;
          }

          .trust-sep {
            flex-shrink: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;