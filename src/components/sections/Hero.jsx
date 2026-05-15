// src/components/sections/Hero.jsx
import { useState } from 'react';
import deliveryPhone from '../../assets/images/mockeup.png';
import deliveryPhone2 from '../../assets/images/mockeup2.png';

const AppStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.37.21.8.22 1.2.04l11.9-6.53-2.58-2.58-10.52 9.07zM20.44 10.2L17.63 8.62 14.75 11.5l2.88 2.87 2.83-1.59c.8-.45.8-1.74-.02-2.18zM1.07 1.43C1.03 1.61 1 1.8 1 2v20c0 .2.03.38.07.56l11.44-11.13L1.07 1.43zM4.38.24L15.25 6.35l-2.58 2.58L2.39.3c.63-.32 1.36-.3 1.99-.06z"/>
  </svg>
);

const Hero = ({ scrollTo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Expédiez vos colis depuis chez vous !",
      subtitle: "Fret Aérien • Fret Maritime • Colis GP",
      buttonText: "En savoir plus",
      buttonLink: "services",
      image: deliveryPhone2,
      bgColor: "#faf066",
      textColor: "#0059ff",
      statColor: "#0059ff",
      badgeBg: "#f0f0f0",
      badgeTextColor: "#0059ff",
      dotColor: "rgba(0, 0, 0, 0.2)",
      dotActiveColor: "#0059ff",
    },
    {
      id: 2,
      title: "Achetez vos marques préférées à prix discount !",
      buttonText: "Explorer",
      buttonLink: "apps",
      image: deliveryPhone,
      bgColor: "#0059ff",
      textColor: "#ffffff",
      statColor: "#ffffff",
      badgeBg: "rgba(0, 0, 0, 0.4)",
      badgeTextColor: "#ffffff",
      dotColor: "rgba(255, 255, 255, 0.99)",
      dotActiveColor: "#faf066",
    }
  ];

  const current = slides[currentSlide];

  return (
    // ✅ FIX : id="hero" ajouté ici
    <section className="hero" id="hero">
      {/* Background Layer */}
      <div 
        className="hero-bg" 
        style={{ background: current.bgColor }}
      />

      {/* Tabs Navigation */}
      <div className="hero-tabs">
        <div className="tabs-wrapper">
          <button
            className={`tab-btn ${currentSlide === 0 ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => setCurrentSlide(0)}
          >
            <span className="tab-icon">📦</span>
            <span className="tab-label">Yobante Expédition</span>
          </button>
          <button
            className={`tab-btn ${currentSlide === 1 ? 'tab-active' : 'tab-inactive'}`}
            onClick={() => setCurrentSlide(1)}
          >
            <span className="tab-icon">🛍️</span>
            <span className="tab-label">Yobante Boutique</span>
          </button>
        </div>
      </div>

      <div className="slides-container">
        <div 
          className="slides-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="hero-content-wrapper">
                <div className="hero-container">
                  
                  <div className="hero-text">
                    <div className="hero-badge" style={{ background: slide.badgeBg }}>
                      <span className="badge-dot"></span>
                      <span style={{ color: slide.badgeTextColor }}>Service actif — France → Sénégal</span>
                    </div>
                    
                    <h1 className="hero-title" style={{ color: slide.textColor }}>
                      {slide.title}
                    </h1>
                    
                    {slide.id === 1 && (
                      <div className="shipping-methods">
                        <div className="method-card">
                          <span className="method-icon">✈️</span>
                          <span className="method-name">Fret Aérien</span>
                          <span className="method-desc">Rapide • 2-4 j</span>
                        </div>
                        <div className="method-card">
                          <span className="method-icon">🚢</span>
                          <span className="method-name">Fret Maritime</span>
                          <span className="method-desc">Éco • 5-7 sem</span>
                        </div>
                        <div className="method-card">
                          <span className="method-icon">📦</span>
                          <span className="method-name">Colis GP</span>
                          <span className="method-desc">Std • 7-14 j</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="hero-buttons">
                      <button 
                        className={`btn-primary ${slide.id === 1 ? 'btn-expedition' : ''}`}
                        onClick={() => scrollTo(slide.buttonLink)}
                      >
                        {slide.buttonText} →
                      </button>
                    </div>

                    <div className="store-buttons">
                      <a href="#" className="store-btn appstore" onClick={(e) => { e.preventDefault(); window.open('https://apps.apple.com', '_blank'); }}>
                        <AppStoreIcon />
                        <div className="store-text">
                          <span>Télécharger sur l'</span>
                          <strong>App Store</strong>
                        </div>
                      </a>
                      <a href="#" className={`store-btn googleplay ${slide.id === 1 ? 'btn-expedition-gp' : ''}`} onClick={(e) => { e.preventDefault(); window.open('https://play.google.com', '_blank'); }}>
                        <PlayStoreIcon />
                        <div className="store-text">
                          <span>Disponible sur</span>
                          <strong>Google Play</strong>
                        </div>
                      </a>
                    </div>
                    
                    <div className="hero-stats">
                      <div className="stat">
                        <span className="stat-number" style={{ color: slide.statColor }}>5k+</span>
                        <span className="stat-label">Colis livrés</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number" style={{ color: slide.statColor }}>2-4j</span>
                        <span className="stat-label">Par avion</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number" style={{ color: slide.statColor }}>24/7</span>
                        <span className="stat-label">Support</span>
                      </div>
                    </div>
                  </div>

                  <div className="hero-image">
                    <div className="image-wrapper">
                      <img src={slide.image} alt="Application mobile" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slide-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            style={{ 
              background: currentSlide === index ? slides[currentSlide].dotActiveColor : slides[currentSlide].dotColor 
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          transition: background 0.6s ease;
        }

        /* ===== TABS ===== */
        .hero-tabs {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          z-index: 10;
          display: flex;
          justify-content: center;
          padding: 0 20px;
        }

        .tabs-wrapper {
          display: flex;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 4px;
          gap: 4px;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .tab-active {
          background: #ffffff;
          color: #0059ff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .tab-inactive {
          background: transparent;
          color: rgba(255, 255, 255, 0.9);
        }

        /* ===== SLIDER ===== */
        .slides-container {
          flex: 1;
          display: flex;
          align-items: center;
          z-index: 2;
        }

        .slides-track {
          display: flex;
          width: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide {
          flex: 0 0 100%;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .hero-content-wrapper {
          width: 100%;
          padding: 140px 0 80px;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* ===== TEXT CONTENT ===== */
        .hero-text {
          flex: 1;
          max-width: 550px;
          text-align: left;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 24px;
          font-size: 13px;
          font-weight: 500;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10b981;
        }

        .hero-title {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        /* ===== SHIPPING CARDS ===== */
        .shipping-methods {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }

        .method-card {
          background: white;
          padding: 12px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .method-icon { font-size: 20px; display: block; margin-bottom: 4px; }
        .method-name { font-weight: 700; font-size: 13px; color: #1a3a8f; display: block; }
        .method-desc { font-size: 10px; color: #64748b; }

        /* ===== BUTTONS ===== */
        .hero-buttons { margin-bottom: 24px; }

        .btn-primary {
          background: #faf066;
          color: #0059ff;
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .btn-expedition { background: #0059ff; color: #faf066; }

        .store-buttons { display: flex; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; }
        .store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: 10px;
          text-decoration: none;
          min-width: 160px;
        }

        .appstore { background: #000; color: white; }
        .googleplay { background: #faf066; color: #0059ff; }
        .googleplay.btn-expedition-gp { background: #0059ff; color: #faf066; }

        .store-text span { font-size: 9px; display: block; opacity: 0.8; }
        .store-text strong { font-size: 14px; display: block; }

        /* ===== STATS ===== */
        .hero-stats { display: flex; gap: 32px; }
        .stat-number { font-size: 24px; font-weight: 800; display: block; }
        .stat-label { font-size: 12px; opacity: 0.7; color:#000 ; }

        /* ===== IMAGE ===== */
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .image-wrapper {
          width: 100%;
          max-width: 450px;
        }

        .image-wrapper img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 50px rgba(0,0,0,0.15));
        }

        .slide-dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          border: none;
          transition: all 0.3s;
          cursor: pointer;
        }

        .dot.active { width: 24px; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 968px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
            padding-top: 40px;
          }
          .hero-text { text-align: center; max-width: 100%; order: 2; }
          .hero-image { order: 1; justify-content: center; }
          .image-wrapper { max-width: 250px; }
          .hero-badge, .hero-buttons, .store-buttons, .hero-stats { justify-content: center; }
          .shipping-methods { max-width: 400px; margin: 0 auto 32px; }
        }

        @media (max-width: 480px) {
          .hero-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .tab-label { display: none; }
          .tab-btn { padding: 10px 15px; }
          .shipping-methods { grid-template-columns: 1fr; }
          .store-btn { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;