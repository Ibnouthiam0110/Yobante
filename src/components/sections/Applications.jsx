// src/components/sections/Applications.jsx

import expeditionLogo from '../../assets/images/logo.png';
import boutiqueLogo from '../../assets/images/logo.png';

const Applications = () => {
  return (
    <section id="apps" className="apps-section">

      {/* BACKGROUND GLOW */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="container">

        {/* HEADER */}
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
            Gérez vos expéditions et vos achats depuis une
            interface moderne, rapide et intuitive.
          </p>

        </div>

        {/* CARDS */}
        <div className="apps-grid">

          {/* CARD 1 */}
          <div className="app-card">

            <div className="card-glow"></div>

            <div className="app-logo-container">
              <img
                src={expeditionLogo}
                alt="Yobanté Expédition"
                className="app-logo"
              />
            </div>

            <div className="app-chip">
              📦 Expédition Internationale
            </div>

            <h3>
              YOBANTÉ Expédition
            </h3>

            <p>
              Gérez vos envois entre la France et le Sénégal
              avec un suivi rapide, sécurisé et transparent.
            </p>

            <ul className="app-features">

              <li>
                Créer et gérer vos expéditions
              </li>

              <li>
                Suivi en temps réel des colis
              </li>

              <li>
                Paiement sécurisé en ligne
              </li>

              <li>
                Notifications instantanées
              </li>

            </ul>

            <div className="download-buttons">

              <button
                className="download-btn ios"
                onClick={() =>
                  window.open(
                    'https://apps.apple.com',
                    '_blank'
                  )
                }
              >
                 App Store
              </button>

              <button
                className="download-btn android"
                onClick={() =>
                  window.open(
                    'https://play.google.com',
                    '_blank'
                  )
                }
              >
                ▶ Google Play
              </button>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="app-card">

            <div className="card-glow"></div>

            <div className="app-logo-container">
              <img
                src={boutiqueLogo}
                alt="Yobanté Boutique"
                className="app-logo"
              />
            </div>

            <div className="app-chip boutique">
              🛍️ Shopping & E-commerce
            </div>

            <h3>
              YOBANTÉ Boutique
            </h3>

            <p>
              Achetez vos marques préférées et faites-vous
              livrer directement au Sénégal à prix réduit.
            </p>

            <ul className="app-features">

              <li>
                Produits variés et tendances
              </li>

              <li>
                Livraison internationale
              </li>

              <li>
                Promotions exclusives
              </li>

              <li>
                Expérience shopping fluide
              </li>

            </ul>

            <div className="download-buttons">

              <button
                className="download-btn ios"
                onClick={() =>
                  window.open(
                    'https://apps.apple.com',
                    '_blank'
                  )
                }
              >
                 App Store
              </button>

              <button
                className="download-btn android"
                onClick={() =>
                  window.open(
                    'https://play.google.com',
                    '_blank'
                  )
                }
              >
                ▶ Google Play
              </button>

            </div>

          </div>

        </div>

      </div>

      <style jsx>{`

        .apps-section{
          position:relative;
          overflow:hidden;
          padding:120px 0;
          background:#f8fbff;
        }

        .container{
          position:relative;
          z-index:5;
          max-width:1250px;
          margin:0 auto;
          padding:0 24px;
        }

        /* ===== BACKGROUND GLOW ===== */

        .bg-glow{
          position:absolute;
          border-radius:50%;
          filter:blur(120px);
          opacity:.35;
          animation:floatGlow 10s ease-in-out infinite;
        }

        .glow-1{
          width:500px;
          height:500px;
          background:#00BFFF;
          top:-150px;
          left:-100px;
        }

        .glow-2{
          width:400px;
          height:400px;
          background:#faf066;
          bottom:-120px;
          right:-100px;
        }

        @keyframes floatGlow{

          0%{
            transform:translate(0,0);
          }

          50%{
            transform:translate(40px,-30px);
          }

          100%{
            transform:translate(0,0);
          }

        }

        /* ===== HEADER ===== */

        .section-header{
          text-align:center;
          margin-bottom:80px;
        }

        .section-badge{
          display:inline-flex;
          align-items:center;
          gap:12px;
          margin-bottom:20px;
          color:#00BFFF;
          font-size:14px;
          font-weight:800;
          letter-spacing:1.5px;
          text-transform:uppercase;
        }

        .tag-line{
          width:32px;
          height:2px;
          background:#faf066;
        }

        .section-title{
          font-size:clamp(34px,5vw,56px);
          line-height:1.1;
          font-weight:900;
          color:#00BFFF;
          margin-bottom:18px;
        }

        .section-subtitle{
          max-width:700px;
          margin:0 auto;
          color:#64748b;
          font-size:17px;
          line-height:1.7;
        }

        /* ===== GRID ===== */

        .apps-grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:35px;
        }

        /* ===== CARD ===== */

        .app-card{
          position:relative;
          overflow:hidden;
          background:rgba(255,255,255,.8);
          backdrop-filter:blur(18px);
          border-radius:32px;
          padding:50px 38px;
          border:1px solid rgba(255,255,255,.6);
          box-shadow:
            0 10px 40px rgba(0,0,0,.06);
          transition:.45s ease;
        }

        .app-card:hover{
          transform:translateY(-14px);
          box-shadow:
            0 25px 60px rgba(0,0,0,.12);
        }

        .card-glow{
          position:absolute;
          width:250px;
          height:250px;
          border-radius:50%;
          background:rgba(0,191,255,.12);
          filter:blur(80px);
          top:-100px;
          right:-80px;
          transition:.5s;
        }

        .app-card:hover .card-glow{
          transform:scale(1.2);
        }

        .app-logo-container{
          display:flex;
          justify-content:center;
          margin-bottom:24px;
        }

        .app-logo{
          width:100%;
          max-width:220px;
          height:80px;
          object-fit:contain;
          animation:floatLogo 4s ease-in-out infinite;
        }

        @keyframes floatLogo{

          0%{
            transform:translateY(0px);
          }

          50%{
            transform:translateY(-10px);
          }

          100%{
            transform:translateY(0px);
          }

        }

        .app-chip{
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:rgba(0,191,255,.1);
          color:#00BFFF;
          padding:10px 16px;
          border-radius:999px;
          font-size:13px;
          font-weight:700;
          margin-bottom:24px;
        }

        .app-chip.boutique{
          background:rgba(250,240,102,.25);
          color:#c8a800;
        }

        .app-card h3{
          font-size:30px;
          color:#00BFFF;
          margin-bottom:18px;
          font-weight:900;
        }

        .app-card p{
          color:#64748b;
          line-height:1.7;
          margin-bottom:28px;
          font-size:15px;
        }

        /* ===== FEATURES ===== */

        .app-features{
          list-style:none;
          padding:0;
          margin:0 0 34px;
        }

        .app-features li{
          display:flex;
          align-items:center;
          gap:14px;
          margin-bottom:16px;
          color:#334155;
          font-size:15px;
        }

        .app-features li::before{
          content:'✓';
          width:24px;
          height:24px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          background:rgba(0,191,255,.12);
          color:#00BFFF;
          font-size:12px;
          font-weight:900;
          flex-shrink:0;
        }

        /* ===== BUTTONS ===== */

        .download-buttons{
          display:flex;
          gap:14px;
          margin-top:auto;
        }

        .download-btn{
          flex:1;
          border:none;
          border-radius:16px;
          padding:16px 20px;
          font-size:15px;
          font-weight:800;
          cursor:pointer;
          transition:.35s ease;
        }

        .download-btn:hover{
          transform:translateY(-4px);
        }

        .ios{
          background:#00BFFF;
          color:white;
          box-shadow:
            0 10px 20px rgba(0,191,255,.25);
        }

        .android{
          background:#faf066;
          color:#00BFFF;
          box-shadow:
            0 10px 20px rgba(250,240,102,.35);
        }

        /* ===== RESPONSIVE ===== */

        @media(max-width:980px){

          .apps-grid{
            grid-template-columns:1fr;
          }

        }

        @media(max-width:520px){

          .apps-section{
            padding:80px 0;
          }

          .app-card{
            padding:38px 24px;
          }

          .download-buttons{
            flex-direction:column;
          }

          .section-title{
            font-size:38px;
          }

          .app-card h3{
            font-size:24px;
          }

        }

      `}</style>

    </section>
  );
};

export default Applications;