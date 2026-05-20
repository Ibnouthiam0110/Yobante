// src/components/sections/Hero.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      buttonText: "En savoir plus",
      buttonLink: "services",
      image: deliveryPhone2,
      bgColor: "#faf066",
      textColor: "#00BFFF",
      statColor: "#00BFFF",
      badgeBg: "#ffffff",
      badgeTextColor: "#00BFFF",
      dotColor: "rgba(0,0,0,.2)",
      dotActiveColor: "#00BFFF",
    },
    {
      id: 2,
      title: "Achetez vos marques préférées à prix discount !",
      buttonText: "Explorer",
      buttonLink: "apps",
      image: deliveryPhone,
      bgColor: "#00BFFF",
      textColor: "#ffffff",
      statColor: "#ffffff",
      badgeBg: "rgba(255,255,255,.15)",
      badgeTextColor: "#ffffff",
      dotColor: "rgba(255,255,255,.3)",
      dotActiveColor: "#faf066",
    },
  ];

  const current = slides[currentSlide];

  return (
    <section id="hero" className="hero">

      {/* BACKGROUND */}
      <motion.div
        className="hero-bg"
        animate={{
          background: current.bgColor,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* GLOW */}
      <div className="hero-glow"></div>

      {/* CONTENT */}
      <div className="hero-container">

        {/* TABS */}
        <div className="hero-tabs">
          <div className="tabs-wrapper">
            <button
              className={`tab-btn ${currentSlide === 0 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(0)}
            >
              📦 Expédition
            </button>

            <button
              className={`tab-btn ${currentSlide === 1 ? 'active' : ''}`}
              onClick={() => setCurrentSlide(1)}
            >
              🛍️ Boutique
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
          >
            {/* TEXT */}
            <div className="hero-text">
              <div
                className="hero-badge"
                style={{ background: current.badgeBg }}
              >
                <span className="badge-dot"></span>
                <span style={{ color: current.badgeTextColor }}>
                  Service actif — France → Sénégal
                </span>
              </div>

              <h1
                className="hero-title"
                style={{ color: current.textColor }}
              >
                {current.title}
              </h1>

              {current.id === 1 && (
                <div className="shipping-methods">
                  <div className="method-card">
                    <span className="method-icon">✈️</span>
                    <span className="method-name">Fret Aérien</span>
                    <span className="method-desc">2-4 jours</span>
                  </div>

                  <div className="method-card">
                    <span className="method-icon">🚢</span>
                    <span className="method-name">Fret Maritime</span>
                    <span className="method-desc">5-7 semaines</span>
                  </div>

                  <div className="method-card">
                    <span className="method-icon">📦</span>
                    <span className="method-name">Colis GP</span>
                    <span className="method-desc">7-14 jours</span>
                  </div>
                </div>
              )}

              {/* BUTTON */}
              <button
                className={`hero-btn ${
                  current.id === 1 ? 'expedition' : ''
                }`}
                onClick={() => scrollTo(current.buttonLink)}
              >
                {current.buttonText} →
              </button>

              {/* STORES */}
              <div className="store-buttons">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="store-btn appstore"
                >
                  <AppStoreIcon />

                  <div className="store-text">
                    <small>Télécharger sur</small>
                    <strong>App Store</strong>
                  </div>
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`store-btn ${
                    current.id === 1 ? 'play-yellow' : 'play-blue'
                  }`}
                >
                  <PlayStoreIcon />

                  <div className="store-text">
                    <small>Disponible sur</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>

              {/* STATS */}
              <div className="hero-stats">
                <div className="stat">
                  <span
                    className="stat-number"
                    style={{ color: current.statColor }}
                  >
                    5k+
                  </span>
                  <span className="stat-label">Colis livrés</span>
                </div>

                <div className="stat">
                  <span
                    className="stat-number"
                    style={{ color: current.statColor }}
                  >
                    2-4j
                  </span>
                  <span className="stat-label">Livraison</span>
                </div>

                <div className="stat">
                  <span
                    className="stat-number"
                    style={{ color: current.statColor }}
                  >
                    24/7
                  </span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <motion.div
              className="hero-image"
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img
                src={current.image}
                alt="Application mobile"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className="slide-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              currentSlide === index ? 'active' : ''
            }`}
            style={{
              background:
                currentSlide === index
                  ? current.dotActiveColor
                  : current.dotColor,
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          background: rgba(255, 255, 255, 0.15);
          filter: blur(120px);
          border-radius: 50%;
          top: -150px;
          right: -100px;
          animation: floatGlow 8s ease-in-out infinite;
        }

        @keyframes floatGlow {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-60px, 40px); }
          100% { transform: translate(0, 0); }
        }

        .hero-tabs {
          position: absolute;
          top: 120px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }

        .tabs-wrapper {
          display: flex;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(14px);
          padding: 6px;
          border-radius: 18px;
        }

        .tab-btn {
          border: none;
          padding: 12px 18px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 700;
          background: transparent;
          color: white;
          transition: 0.3s;
        }

        .tab-btn.active {
          background: white;
          color: #00BFFF;
        }

        .hero-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1250px;
          padding: 220px 32px 100px;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .hero-text {
          flex: 1;
          max-width: 560px;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 999px;
          margin-bottom: 28px;
          backdrop-filter: blur(10px);
          font-size: 14px;
          font-weight: 600;
          width: fit-content;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
        }

        .hero-title {
          font-size: clamp(38px, 5vw, 70px);
          line-height: 1.05;
          font-weight: 900;
          margin-bottom: 30px;
        }

        .shipping-methods {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 32px;
        }

        .method-card {
          background: white;
          padding: 16px;
          border-radius: 18px;
          text-align: center;
          transition: 0.35s ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .method-card:hover {
          transform: translateY(-10px) scale(1.03);
        }

        .method-icon {
          display: block;
          font-size: 24px;
          margin-bottom: 8px;
        }

        .method-name {
          display: block;
          font-weight: 800;
          color: #00BFFF;
          font-size: 14px;
        }

        .method-desc {
          font-size: 12px;
          color: #666;
          margin-top: 2px;
        }

        .hero-btn {
          border: none;
          padding: 16px 34px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          margin-bottom: 28px;
          transition: 0.3s;
          background: #faf066;
          color: #00BFFF;
          width: fit-content;
        }

        .hero-btn:hover {
          transform: translateY(-4px);
        }

        .hero-btn.expedition {
          background: #00BFFF;
          color: #faf066;
        }

        .store-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 38px;
        }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          border-radius: 14px;
          text-decoration: none;
          transition: 0.3s;
          min-width: 180px;
        }

        .store-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .store-btn:hover {
          transform: translateY(-4px);
        }

        .appstore {
          background: black;
          color: white;
        }

        .play-yellow {
          background: #faf066;
          color: #00BFFF;
        }

        .play-blue {
          background: white;
          color: #00BFFF;
        }

        .store-btn small {
          display: block;
          font-size: 10px;
          opacity: 0.8;
          white-space: nowrap;
        }

        .store-btn strong {
          font-size: 15px;
          white-space: nowrap;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 900;
          display: block;
        }

        .stat-label {
          color: #222;
          font-size: 13px;
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .hero-image img {
          width: 100%;
          max-width: 430px;
          filter: drop-shadow(0 25px 45px rgba(0, 0, 0, 0.18));
        }

        .slide-dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .dot {
          width: 10px;
          height: 10px;
          border: none;
          border-radius: 999px;
          transition: 0.3s;
          cursor: pointer;
        }

        .dot.active {
          width: 34px;
        }

        @media (max-width: 1024px) {
          .hero-container {
            padding: 200px 24px 80px;
          }

          .hero-content {
            gap: 30px;
          }

          .hero-image img {
            max-width: 340px;
          }
        }

        @media (max-width: 980px) {
          .hero {
            min-height: auto;
          }

          .hero-tabs {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
            margin: 0 auto 30px;
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .hero-container {
            padding: 100px 24px 80px;
          }

          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }

          .hero-text {
            max-width: 640px;
            min-height: 580px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
          }

          .hero-title {
            font-size: 48px;
          }

          .shipping-methods {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            max-width: 500px;
          }

          .shipping-methods .method-card:last-child {
            grid-column: span 2;
            max-width: calc(50% - 7px);
            margin: 0 auto;
            width: 100%;
          }

          .store-buttons {
            justify-content: center;
            width: 100%;
          }

          .hero-stats {
            justify-content: center;
            width: 100%;
          }

          .hero-image img {
            max-width: 300px;
          }
        }

   @media (max-width: 520px) {

  /* =========================
     HERO
  ========================== */

  .hero-container {
    padding: 80px 16px 60px;
  }

  .hero-text {
    min-height: auto;
    align-items: center;
  }

  .hero-title {
    font-size: 32px;
    line-height: 1.15;
    margin-bottom: 24px;
    text-align: center;
  }

  /* =========================
     SHIPPING METHODS
  ========================== */

  .shipping-methods {
    width: 100%;
    max-width: 340px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    margin-bottom: 24px;
  }

  .method-card {
    padding: 14px 10px;
    border-radius: 18px;

    min-height: 110px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
  }

  .shipping-methods .method-card:last-child {
    grid-column: span 2;

    max-width: 100%;
    min-height: 100px;
  }

  .method-icon {
    font-size: 20px;
    margin-bottom: 6px;
  }

  .method-name {
    font-size: 14px;
    line-height: 1.1;
    margin-bottom: 4px;
    text-align: center;
  }

  .method-desc {
    font-size: 12px;
    line-height: 1;
    text-align: center;
  }

  /* =========================
     CTA BUTTON
  ========================== */

  .hero-btn {
    width: 100%;
    max-width: 340px;

    padding: 14px 20px;

    font-size: 16px;
    margin-bottom: 22px;
  }

  /* =========================
     STORE BUTTONS
  ========================== */

  .store-buttons {
    width: 100%;
    max-width: 340px;

    display: flex;
    flex-direction: column;

    gap: 12px;
    margin-bottom: 30px;
  }

  .store-btn {
    width: 100%;
    min-height: 62px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 12px;

    padding: 12px 16px;

    border-radius: 16px;

    box-sizing: border-box;
  }

  .store-btn svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  .store-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    line-height: 1.05;
    text-align: left;
  }

  .store-btn small {
    font-size: 10px;
    white-space: nowrap;
  }

  .store-btn strong {
    font-size: 15px;
    white-space: nowrap;
  }

  /* GOOGLE PLAY EN BLANC */

  .play-yellow {
    background: white;
    color: #00BFFF;
  }

  /* =========================
     STATS
  ========================== */

  .hero-stats {
    width: 100%;
    max-width: 340px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 0;

    margin-top: 10px;
  }

  .stat {
    flex: 1;
    text-align: center;
  }

  .stat-number {
    font-size: 30px;
    line-height: 1;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 13px;
    line-height: 1.2;
  }

  /* =========================
     IMAGE
  ========================== */

  .hero-image img {
    max-width: 220px;
  }
}

        @media (max-width: 768px) {
          .hero-image {
            animation: none !important;
            transform: none !important;
          }

          .method-card:hover,
          .store-btn:hover,
          .hero-btn:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;