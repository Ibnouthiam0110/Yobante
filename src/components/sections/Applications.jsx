// src/components/sections/Applications.jsx
import expeditionLogo from '../../assets/images/logo.png';
import boutiqueLogo from '../../assets/images/logo.png';
import { Package, ShoppingBag } from 'lucide-react';

const appsData = [
  {
    id: "expedition",
    logo: expeditionLogo,
    alt: "Yobanté Expédition",
    chipIcon: <Package size={14} strokeWidth={1.8} />,
    chipText: "Expédition & Suivi",
    chipClass: "expedition",
    title: "YOBANTÉ Expédition",
    description: "Gérez vos envois entre la France et le Sénégal de manière rapide, sécurisée et transparente.",
    features: [
      "Simulez votre envoi",
      "Payez en toute sécurité",
      "Suivez l'acheminement de votre envoi"
    ],
    iosUrl: "https://apps.apple.com",
    androidUrl: "https://play.google.com"
  },
  {
    id: "boutique",
    logo: boutiqueLogo,
    alt: "Yobanté Boutique",
    chipIcon: <ShoppingBag size={14} strokeWidth={1.8} />,
    chipText: "Boutique en ligne",
    chipClass: "boutique",
    title: "YOBANTÉ Boutique",
    description: "Achetez vos produits préférés à prix discount et faites-les livrer directement au Sénégal.",
    features: [
      "Produits authentiques",
      "Possibilité d'achat en gros",
      "Expérience d'achat simple et pratique"
    ],
    iosUrl: "https://apps.apple.com",
    androidUrl: "https://play.google.com"
  }
];

const Applications = () => {
  return (
    <section id="apps" className="apps-section">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="container">
        {/* HEADER */}
        <div className="section-header sr">
          <div className="section-badge">
            <span className="tag-line"></span>
            Nos applications mobiles
          </div>
        </div>

        {/* CARDS */}
        <div className="apps-grid">
          {appsData.map((app, i) => (
            <div key={app.id} className={`app-card sr sr-d${i + 1}`}>
              <div className="card-glow"></div>

              <div className="card-inner">
                <div className="app-logo-container">
                  <img src={app.logo} alt={app.alt} className="app-logo" />
                </div>

                <div className={`app-chip ${app.chipClass}`}>
                  {app.chipIcon}
                  {app.chipText}
                </div>

                <p>{app.description}</p>

                <ul className="app-features">
                  {app.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={`download-buttons${app.id === 'boutique' ? ' boutique-download-wrap' : ''}`} style={{ padding: '0 34px' }}>
                <button
                  className={`download-btn ios${app.id === 'boutique' ? ' ios-boutique' : ''}`}
                  onClick={() => window.open(app.iosUrl, '_blank')}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ marginRight: '7px', verticalAlign: 'middle' }}>
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22c-1.31,0.05-1.73,-0.75-3.23,-0.75c-1.49,0-1.96,0.73,-3.22,0.78c-1.33,0.05-2.29,-1.32-3.13,-2.53C4.37,17.18 3.05,12.35 4.81,9.31c0.88,-1.52 2.45,-2.48 4.16,-2.51c1.3,-0.02 2.53,0.88 3.32,0.88c0.79,0 2.27,-1.07 3.82,-0.91c0.65,0.03 2.47,0.26 3.64,1.98c-0.09,0.06 -2.17,1.28 -2.15,3.81c0.03,3.02 2.65,4.03 2.68,4.04c-0.03,0.07 -0.42,1.44 -1.38,2.83M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1c-1.09,0.04 -2.41,0.72 -3.19,1.63c-0.67,0.77 -1.25,1.88 -1.09,3.14c1.21,0.09 2.47,-0.6 3.3,-1.6" />
                  </svg>
                  App Store
                </button>
                <button
                  className="download-btn android"
                  onClick={() => window.open(app.androidUrl, '_blank')}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ marginRight: '7px', verticalAlign: 'middle' }}>
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
        .card-inner { padding: 30px 34px 0; display: flex; flex-direction: column; flex: 1; }

        .apps-section {
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          background: #f8fbff;
        }

        .container {
          position: relative; z-index: 5;
          max-width: 1250px; margin: 0 auto; padding: 0 24px;
        }

        .bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: .3; pointer-events: none;
        }

        .glow-1 { width: 450px; height: 450px; background: #1E3A8A; top: -130px; left: -80px; }
        .glow-2 { width: 380px; height: 380px; background: #F5C518; bottom: -100px; right: -80px; }

        /* HEADER */
        .section-header { text-align: center; margin-bottom: 40px; }

        .section-badge {
          display: inline-flex; align-items: center; gap: 12px;
          margin-bottom: 18px; color: #1E3A8A;
          font-size: 11px; font-weight: 800;
          letter-spacing: 2px; text-transform: uppercase;
          background: rgba(30,58,138,0.06);
          padding: 9px 18px; border-radius: 999px;
        }

        .tag-line { width: 20px; height: 2px; background: #F5C518; border-radius: 2px; }

        .section-title {
          font-size: clamp(30px, 4.5vw, 50px);
          line-height: 1.12; font-weight: 900;
          color: #1E3A8A; margin-bottom: 16px;
        }

        .section-subtitle {
          max-width: 640px; margin: 0 auto;
          color: #64748b; font-size: 16px; line-height: 1.7;
        }

        /* GRID */
        .apps-grid {
          display: grid; grid-template-columns: repeat(2,1fr); gap: 30px;
        }

        /* CARD */
        .app-card {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,.9);
          backdrop-filter: blur(20px);
          border-radius: 28px;
          padding: 0 0 34px;
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 8px 40px rgba(30,58,138,.08);
          display: flex; flex-direction: column;
          transition: box-shadow 0.32s ease, transform 0.32s ease;
        }

        .app-card:hover {
          box-shadow: 0 20px 56px rgba(30,58,138,.15);
          transform: translateY(-6px);
        }

        .card-inner {
          padding: 34px 34px 0;
          display: flex; flex-direction: column; flex: 1;
        }

        .card-glow {
          position: absolute;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(30,58,138,.07);
          filter: blur(80px);
          top: -100px; right: -80px; pointer-events: none;
        }

        .app-logo-container {
          display: flex; justify-content: center; align-items: center;
          margin-bottom: 20px; height: 72px; width: 100%;
        }

        .app-logo { max-width: 200px; height: 72px; object-fit: contain; }

        /* CHIPS */
        .app-chip {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 7px; padding: 8px 16px; border-radius: 999px;
          font-size: 11.5px; font-weight: 700;
          margin-bottom: 18px; align-self: center;
          letter-spacing: 0.2px;
        }

        .app-chip.expedition {
          background: rgba(30,58,138,.1); color: #1E3A8A;
          border: 1px solid rgba(30,58,138,.12);
        }
        .app-chip.boutique {
          background: rgba(245,197,24,.2); color: #8a6600;
          border: 1px solid rgba(245,197,24,.3);
        }

        .app-card h3 { font-size: 26px; color: #1E3A8A; margin-bottom: 14px; font-weight: 900; }
        .app-card p  { color: #64748b; line-height: 1.7; margin-bottom: 24px; font-size: 14px; }

        /* FEATURES */
        .app-features { list-style: none; padding: 0; margin: 0 0 28px; }

        .app-features li {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 12px; color: #334155; font-size: 14px;
          line-height: 1.5;
        }

        .app-features li::before {
          content: '✓'; width: 24px; height: 24px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #1E3A8A, #2a52c9);
          color: white;
          font-size: 11px; font-weight: 900; flex-shrink: 0;
          box-shadow: 0 3px 8px rgba(30,58,138,.25);
        }

        /* BUTTONS */
        .download-buttons { display: flex; gap: 12px; margin-top: auto; }

        .boutique-download-wrap {
          background: white;
          border-radius: 18px;
          padding: 16px;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 4px 14px rgba(0,0,0,.04);
          margin-top: auto;
        }

        .download-btn {
          flex: 1; border: none; border-radius: 14px;
          padding: 14px 18px; font-size: 14px; font-weight: 800;
          cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.25s cubic-bezier(0.34,1.4,0.64,1);
          letter-spacing: 0.1px;
        }

        .download-btn:hover { transform: translateY(-3px); opacity: 0.92; }

        .ios     { background: #1E3A8A; color: white; box-shadow: 0 6px 18px rgba(30,58,138,.2); }
        .android { background: #F5C518; color: #1E3A8A; box-shadow: 0 6px 18px rgba(245,197,24,.2); }

        /* Boutique : App Store fond blanc (évite bleu sur blanc de carte) */
        .ios-boutique {
          background: white !important;
          color: #1E3A8A !important;
          border: 1.5px solid rgba(30,58,138,.2);
          box-shadow: 0 4px 12px rgba(30,58,138,.08) !important;
        }
        .ios-boutique:hover { background: #f0f4ff !important; opacity: 1; }

        /* RESPONSIVE */
        @media (max-width: 1024px) { .container { padding: 0 28px; } .apps-grid { gap: 22px; } }

        @media (max-width: 930px) {
          .apps-grid { grid-template-columns: 1fr; max-width: 580px; margin: 0 auto; }
          .section-header { margin-bottom: 48px; }
        }

        @media (max-width: 520px) {
          .apps-section { padding: 70px 0; }
          .container { padding: 0 16px; }
          .app-card { padding: 28px 18px; border-radius: 22px; }
          .download-buttons { flex-direction: column; gap: 10px; }
          .download-btn { width: 100%; padding: 13px 18px; }
          .section-title { font-size: 28px; }
          .app-card h3 { font-size: 22px; }
        }
      `}</style>
    </section>
  );
};

export default Applications;

