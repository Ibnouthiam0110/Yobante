// src/components/sections/Applications.jsx
import expeditionLogo from '../../assets/images/logo2.png';
import boutiqueLogo from '../../assets/images/logo1.png';

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
            <p>L'application dédiée à l'envoi  entre la France et le Sénégal.</p>
            <ul className="app-features">
              <li>✓ Créer et gérer vos expéditions</li>
              <li>✓ Paiement en ligne sécurisé</li>
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
            <p>Notre application e-commerce pour acheter des produits sélectionnés en France.</p>
            <ul className="app-features">
              <li>✓ Catalogue de produits variés</li>
              <li>✓ Commandes livrées au Sénégal</li>
              <li>✓ Paiement sécurisé</li>
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
          background: var(--gray-light);
        }
        
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 64px;
        }
        
        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }
        
        .tag-line {
          width: 30px;
          height: 2px;
          background: var(--yellow);
        }
        
        .section-badge {
          color: var(--blue-dark);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .section-title {
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.2;
          color: var(--blue-dark);
          margin-bottom: 16px;
        }
        
        .apps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        
        .app-card {
          background: var(--white);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--gray);
          transition: all 0.3s;
        }
        
        .app-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 40px -12px rgba(0, 0, 0, 0.15);
          border-color: var(--yellow);
        }
        
        /* ✅ PAS DE CERCLE - JUSTE LE LOGO ✅ */
        .app-logo-container {
          margin: 0 auto 24px;
        }
        
        .app-logo {
          width: 290px;
          height: 90px;
          object-fit: contain;
        }
        
        .app-card h3 {
          font-size: 24px;
          margin-bottom: 12px;
          color: var(--blue-dark);
        }
        
        .app-card p {
          color: var(--text-light);
          margin-bottom: 24px;
          line-height: 1.6;
        }
        
        .app-features {
          list-style: none;
          text-align: left;
          max-width: 280px;
          margin: 0 auto 32px;
        }
        
        .app-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--text-light);
          margin-bottom: 12px;
        }
        
        .app-features li::before {
          content: "✓";
          color: var(--blue);
          font-weight: 700;
        }
        
        .download-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        
        .download-btn {
          padding: 12px 24px;
          border-radius: 40px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }
        
        .download-btn.ios {
          background: var(--blue-dark);
          color: white;
        }
        
        .download-btn.ios:hover {
          background: var(--blue);
          transform: translateY(-2px);
        }
        
        .download-btn.android {
          background: var(--yellow);
          color: var(--blue-dark);
        }
        
        .download-btn.android:hover {
          background: var(--yellow-dark);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 56px 0;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .apps-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .app-card {
            padding: 32px 24px;
          }
          
          .app-logo {
            width: 290px;
            height: 90px;
          }
          
          .app-card h3 {
            font-size: 20px;
          }
          
          .download-buttons {
            flex-direction: column;
          }
          
          .download-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Applications;