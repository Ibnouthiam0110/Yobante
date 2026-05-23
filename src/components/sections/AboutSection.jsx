// src/components/sections/AboutSection.jsx

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-bg-glow glow-1"></div>
      <div className="about-bg-glow glow-2"></div>

      {/* Décoration grande quote */}
      <div className="about-quote-deco" aria-hidden="true">"</div>

      <div className="container">
        <div className="about-inner">

          {/* HEADER */}
          <div className="about-header sr">
            <div className="section-tag">
              <span className="tag-dot"></span>
              À propos
            </div>
            <h2 className="about-title">Qui sommes-nous ?</h2>

            <div className="about-divider"></div>

            <p className="about-description">
              YOBANTÉ est une entreprise spécialisée dans l'expédition de colis et le commerce
              en ligne entre la France et le Sénégal. Notre mission : faciliter les échanges
              entre les deux pays grâce à des services fiables, accessibles et transparents.
            </p>

            <div className="about-badges">
              <span className="about-badge">🇫🇷 France</span>
              <span className="about-badge-arrow">→</span>
              <span className="about-badge">🇸🇳 Sénégal</span>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative; overflow: hidden;
          padding: 100px 0;
          background: linear-gradient(135deg, #0a1535 0%, #1E3A8A 60%, #152E70 100%);
          color: white;
        }

        .about-bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(130px); opacity: 0.18; pointer-events: none;
        }

        .glow-1 { width: 420px; height: 420px; background: #2a52c9; top: -120px; right: -100px; }
        .glow-2 { width: 350px; height: 350px; background: #F5C518; bottom: -100px; left: -80px; }

        /* Déco grande guillemet */
        .about-quote-deco {
          position: absolute;
          font-size: 380px;
          font-weight: 900;
          color: rgba(255,255,255,0.03);
          line-height: 1;
          top: -60px; right: 5%;
          pointer-events: none;
          font-family: Georgia, serif;
          user-select: none;
        }

        .container {
          position: relative; z-index: 2;
          max-width: 900px; margin: 0 auto; padding: 0 28px;
        }

        .about-inner { display: flex; flex-direction: column; }

        .about-header { max-width: 100%; }

        /* TAG */
        .section-tag {
          display: inline-flex; align-items: center; gap: 10px;
          color: #F5C518; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 20px; font-size: 11px;
          background: rgba(245,197,24,0.1);
          padding: 8px 16px; border-radius: 999px;
          border: 1px solid rgba(245,197,24,0.2);
        }

        .tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #F5C518;
          box-shadow: 0 0 0 0 rgba(245,197,24,0.4);
          animation: pulse-gold 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-gold {
          0%   { box-shadow: 0 0 0 0 rgba(245,197,24,0.5); }
          60%  { box-shadow: 0 0 0 7px rgba(245,197,24,0); }
          100% { box-shadow: 0 0 0 0 rgba(245,197,24,0); }
        }

        .about-title {
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 900; line-height: 1.08;
          color: white; margin-bottom: 28px;
          letter-spacing: -0.5px;
        }

        /* Diviseur doré */
        .about-divider {
          width: 64px; height: 4px;
          background: linear-gradient(90deg, #F5C518, rgba(245,197,24,0.3));
          border-radius: 4px;
          margin-bottom: 28px;
        }

        .about-description {
          color: rgba(255,255,255,.78);
          font-size: 17px; line-height: 1.85;
          max-width: 720px;
          margin-bottom: 36px;
        }

        /* Badges pays */
        .about-badges {
          display: flex; align-items: center; gap: 14px;
          flex-wrap: wrap;
        }

        .about-badge {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 15px; font-weight: 700;
          backdrop-filter: blur(10px);
          letter-spacing: 0.2px;
        }

        .about-badge-arrow {
          font-size: 20px; color: #F5C518; font-weight: 800;
        }

        @media (max-width: 768px) {
          .about-section { padding: 80px 0; }
          .about-quote-deco { font-size: 240px; right: -20px; }
          .about-description { font-size: 15px; }
        }

        @media (max-width: 520px) {
          .about-section { padding: 68px 0; }
          .about-title { font-size: 30px; }
          .about-description { font-size: 14px; }
          .about-badges { gap: 10px; }
          .about-badge { font-size: 13px; padding: 8px 14px; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
