// src/components/sections/Applications.jsx
import expeditionLogo from '../../assets/images/logo.png';
import boutiqueLogo from '../../assets/images/logo.png';

const Applications = () => {
  return (
    <section id="apps" className="section alt">
      <div className="container">
        <div className="section-header center">
          <div className="section-badge">
            <span className="tag-line"></span>
            Applications mobiles
          </div>
          <h2 className="section-title">Deux applications,<br/>deux usages distincts.</h2>
        </div>

        <div className="apps-grid">
          
          {/* Carte 1 - YOBANTÉ Expédition */}
          <div className="app-card">
            <div className="app-logo-container">
              <img 
                src={expeditionLogo} 
                alt="Yobanté Expédition" 
                className="app-logo"
              />
            </div>
            <h3>YOBANTÉ Expédition</h3>
            <p>L'application dédiée à l'envoi de colis et à la gestion logistique entre la France et le Sénégal.</p>
            <ul className="app-features">
              <li>Créer et gérer vos expéditions</li>
              <li>Suivi en temps réel de vos colis</li>
              <li>Paiement en ligne sécurisé</li>
            </ul>
            <div className="download-buttons">
              <button className="download-btn ios" onClick={() => window.open('https://apps.apple.com', '_blank')}>
                App Store
              </button>
              <button className="download-btn android" onClick={() => window.open('https://play.google.com', '_blank')}>
                Google Play
              </button>
            </div>
          </div>

          {/* Carte 2 - YOBANTÉ Boutique */}
          <div className="app-card">
            <div className="app-logo-container">
              <img 
                src={boutiqueLogo} 
                alt="Yobanté Boutique" 
                className="app-logo"
              />
            </div>
            <h3>YOBANTÉ Boutique</h3>
            <p>Notre plateforme e-commerce pour shopper vos marques préférées et vous faire livrer au pays.</p>
            <ul className="app-features">
              <li>Catalogue de produits variés</li>
              <li>Commandes livrées au Sénégal</li>
              <li>Promotions et prix discount</li>
            </ul>
            <div className="download-buttons">
              <button className="download-btn ios" onClick={() => window.open('https://apps.apple.com', '_blank')}>
                App Store
              </button>
              <button className="download-btn android" onClick={() => window.open('https://play.google.com', '_blank')}>
                Google Play
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 96px 0;
        }
        
        .alt {
          background: #f8fafc;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          color: #00BFFF;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        
        .tag-line {
          width: 30px;
          height: 2px;
          background: #faf066;
        }
        
        .section-title {
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.2;
          color: #00BFFF;
          font-weight: 800;
        }
        
        .apps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        
        .app-card {
          background: #ffffff;
          border-radius: 28px;
          padding: 48px 40px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .app-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #faf066;
        }
        
        .app-logo-container {
          margin-bottom: 32px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .app-logo {
          width: 100%;
          max-width: 240px;
          height: 80px;
          object-fit: contain;
        }
        
        .app-card h3 {
          font-size: 24px;
          margin-bottom: 16px;
          color: #00BFFF;
          font-weight: 700;
        }
        
        .app-card p {
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.6;
          font-size: 15px;
        }
        
        .app-features {
          list-style: none;
          padding: 0;
          text-align: left;
          width: 100%;
          max-width: 300px;
          margin: 0 auto 32px;
        }
        
        .app-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #475569;
          margin-bottom: 12px;
        }
        
        .app-features li::before {
          content: "✓";
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: rgba(0, 191, 255, 0.1);
          color: #00BFFF;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 900;
          flex-shrink: 0;
        }
        
        .download-buttons {
          display: flex;
          gap: 12px;
          width: 100%;
          margin-top: auto;
        }
        
        .download-btn {
          flex: 1;
          padding: 14px 20px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          white-space: nowrap;
        }
        
        .download-btn.ios {
          background: #00BFFF;
          color: #ffffff;
        }
        
        .download-btn.android {
          background: #f7fa66;
          color: #00BFFF;
        }
        
        .download-btn:hover {
          transform: translateY(-3px);
          filter: brightness(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        @media (max-width: 968px) {
          .apps-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .app-card {
            padding: 40px 24px;
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 60px 0;
          }
          .download-buttons {
            flex-direction: column;
          }
          .app-logo {
            max-width: 200px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Applications;