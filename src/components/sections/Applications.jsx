// src/components/sections/Applications.jsx
import expeditionLogo from '../../assets/images/logo.png';
import boutiqueLogo from '../../assets/images/logo.png';
import { Package, ShoppingBag } from 'lucide-react';

const appsData = [
  {
    id: "expedition",
    logo: expeditionLogo,
    alt: "Yobanté Expédition",
    chipIcon: <Package size={15} strokeWidth={1.8} />,
    chipText: "Expédition Internationale",
    chipClass: "expedition",
    title: "YOBANTÉ Expédition",
    description: "Gerez vos envois entre la France et le Sénégal de manière rapide, sécurisée et transparente.",
    features: [
      "Créer et gérer vos expéditions",
      "Paiement sécurisé en ligne",
      "Notifications instantanées"
    ],
    iosUrl: "https://apps.apple.com",
    androidUrl: "https://play.google.com"
  },
  {
    id: "boutique",
    logo: boutiqueLogo,
    alt: "Yobanté Boutique",
    chipIcon: <ShoppingBag size={15} strokeWidth={1.8} />,
    chipText: "Shopping & E-commerce",
    chipClass: "boutique",
    title: "YOBANTÉ Boutique",
    description: "Achetez vos marques préférées et faites-vous livrer directement au Sénégal à prix réduit.",
    features: [
      "Produits variés et tendances",
      "Promotions exclusives",
      "Expérience shopping fluide"
    ],
    iosUrl: "https://apps.apple.com",
    androidUrl: "https://play.google.com"
  }
];

const Applications = () => {
  return (
    <section id="apps" className="apps-section">
      {/* BACKGROUND GLOW */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="container">
        {/* HEADER (Statique) */}
        <div className="section-header">
          <div className="section-badge">
            <span className="tag-line"></span>
            Applications mobiles
          </div>

          <h2 className="section-title">
            Deux applications,
            <br />
            deux expériences premium.
          </h2>

          <p className="section-subtitle">
            Gérez vos expéditions et vos achats depuis une interface moderne, rapide et intuitive.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="apps-grid">
          {appsData.map((app) => (
            <div key={app.id} className="app-card">
              <div className="card-glow"></div>

              <div className="app-logo-container">
                <img
                  src={app.logo}
                  alt={app.alt}
                  className="app-logo"
                />
              </div>

              <div className={`app-chip ${app.chipClass}`}>
                {app.chipIcon}
                {app.chipText}
              </div>


              <h3>{app.title}</h3>
              <p>{app.description}</p>

              <ul className="app-features">
                {app.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="download-buttons">
                <button
                  className="download-btn ios"
                  onClick={() => window.open(app.iosUrl, '_blank')}
                  aria-label={`Télécharger ${app.title} sur l'App Store`}
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22c-1.31,0.05-1.73,-0.75-3.23,-0.75c-1.49,0-1.96,0.73,-3.22,0.78c-1.33,0.05-2.29,-1.32-3.13,-2.53C4.37,17.18 3.05,12.35 4.81,9.31c0.88,-1.52 2.45,-2.48 4.16,-2.51c1.3,-0.02 2.53,0.88 3.32,0.88c0.79,0 2.27,-1.07 3.82,-0.91c0.65,0.03 2.47,0.26 3.64,1.98c-0.09,0.06 -2.17,1.28 -2.15,3.81c0.03,3.02 2.65,4.03 2.68,4.04c-0.03,0.07 -0.42,1.44 -1.38,2.83M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1c-1.09,0.04 -2.41,0.72 -3.19,1.63c-0.67,0.77 -1.25,1.88 -1.09,3.14c1.21,0.09 2.47,-0.6 3.3,-1.6" />
                  </svg>
                  App Store
                </button>
                <button
                  className="download-btn android"
                  onClick={() => window.open(app.androidUrl, '_blank')}
                  aria-label={`Télécharger ${app.title} sur Google Play`}
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                    <path d="M3,5.27V18.73c0,0.59,0.34,1.13,0.88,1.38L13.12,12l-9.24-8.11C3.34,4.14,3,4.68,3,5.27Z" opacity="0.15"/>
                    <path d="M17.85,9.5L4.76,3.12C4.42,2.95,4.03,3,3.88,3.14L13.12,12Z" />
                    <path d="M13.12,12l4.73-2.5L20.4,11c0.41,0.22,0.6,0.69,0.44,1.12c-0.11,0.31-0.4,0.53-0.74,0.53c-0.09,0-0.18-0.02-0.26-0.05l-2.13-1.1Z" />
                    <path d="M13.12,12l-9.24,8.86c0.15,0.14,0.54,0.19,0.88,0.02l13.09-6.38Z" />
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ===== SECTION ===== */
        .apps-section {
          position: relative;
          overflow: hidden;
          padding: 120px 0;
          background: #f8fbff;
        }

        .container {
          position: relative;
          z-index: 5;
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ===== BACKGROUND GLOW ===== */
        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: .35;
          pointer-events: none;
        }

        .glow-1 {
          width: 500px;
          height: 500px;
          background: #00BFFF;
          top: -150px;
          left: -100px;
        }

        .glow-2 {
          width: 400px;
          height: 400px;
          background: #faf066;
          bottom: -120px;
          right: -100px;
        }

        /* ===== HEADER ===== */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #00BFFF;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .tag-line {
          width: 32px;
          height: 2px;
          background: #faf066;
        }

        .section-title {
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1.1;
          font-weight: 900;
          color: #00BFFF;
          margin-bottom: 18px;
        }

        .section-subtitle {
          max-width: 700px;
          margin: 0 auto;
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
        }

        /* ===== GRID ===== */
        .apps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 35px;
         }

        /* ===== CARD ===== */
        .app-card {
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,.8);
          backdrop-filter: blur(18px);
          border-radius: 32px;
          padding: 50px 38px;
          border: 1px solid rgba(255,255,255,.6);
          box-shadow: 0 10px 40px rgba(0,0,0,.06);
          display: flex;
          flex-direction: column;
        }

        .card-glow {
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: rgba(0,191,255,.12);
          filter: blur(80px);
          top: -100px;
          right: -80px;
          pointer-events: none;
        }

        /* ===== LOGO COMPLETEMENT STATIQUE ===== */
        .app-logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 24px;
          height: 80px;
          width: 100%;
        }

        .app-logo {
          max-width: 220px;
          height: 80px;
          object-fit: contain;
        }

        /* ===== CHIPS ===== */
        .app-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 24px;
          align-self: center;
          text-align: center;
        }

        .app-chip.expedition {
          background: rgba(0,191,255,.1);
          color: #00BFFF;
        }

        .app-chip.boutique {
          background: rgba(250,240,102,.25);
          color: #c8a800;
        }

        .app-card h3 {
          font-size: 30px;
          color: #00BFFF;
          margin-bottom: 18px;
          font-weight: 900;
        }

        .app-card p {
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 28px;
          font-size: 15px;
        }

        /* ===== FEATURES ===== */
        .app-features {
          list-style: none;
          padding: 0;
          margin: 0 0 34px;
        }

        .app-features li {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          color: #334155;
          font-size: 15px;
        }

        .app-features li::before {
          content: '✓';
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,191,255,.12);
          color: #00BFFF;
          font-size: 12px;
          font-weight: 900;
          flex-shrink: 0;
        }

        /* ===== BOUTONS SANS EFFET DE DEPLACEMENT ===== */
        .download-buttons {
          display: flex;
          gap: 14px;
          margin-top: auto;
        }

        .download-btn {
          flex: 1;
          border: none;
          border-radius: 16px;
          padding: 16px 20px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .ios {
          background: #00BFFF;
          color: white;
          box-shadow: 0 8px 20px rgba(0,191,255,.15);
        }

        .android {
          background: #faf066;
          color: #00BFFF;
          box-shadow: 0 8px 20px rgba(250,240,102,.2);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .container { padding: 0 32px; }
          .apps-grid { gap: 24px; }
          .app-card { padding: 40px 28px; }
        }

        @media (max-width: 930px) {
          .apps-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
          .section-header { margin-bottom: 50px; }
        }

        @media (max-width: 520px) {
          .apps-section { padding: 70px 0; }
          .container { padding: 0 16px; }
          .app-card { padding: 32px 20px; border-radius: 24px; }
          .download-buttons { flex-direction: column; gap: 12px; }
          .download-btn { width: 100%; padding: 14px 20px; }
          .section-title { font-size: 32px; }
          .app-card h3 { font-size: 24px; }
          .app-chip { font-size: 12px; padding: 8px 14px; }
        }
      `}</style>
    </section>
  );
};

export default Applications;