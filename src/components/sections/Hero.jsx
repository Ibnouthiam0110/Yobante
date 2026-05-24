// src/components/sections/Hero.jsx

import { useState, useEffect } from 'react';
import { Package, ShoppingBag, Plane, Ship, ArrowRight } from 'lucide-react';
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
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 980 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 980);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Expédiez vos colis depuis chez vous !",
      buttonText: "En savoir plus",
      buttonLink: "services",
      image: deliveryPhone2,
      bgColor: "#F5C518",
      textColor: "#1E3A8A",
      statColor: "#1E3A8A",
      labelColor: "rgba(30,58,138,0.65)",
      badgeBg: "#ffffff",
      badgeTextColor: "#1E3A8A",
      dotColor: "rgba(0,0,0,.15)",
      dotActiveColor: "#1E3A8A",
    },
    {
      id: 2,
      title: "Achetez vos marques préférées à prix discount !",
      buttonText: "Explorer",
      buttonLink: "apps",
      image: deliveryPhone,
      bgColor: "#1E3A8A",
      textColor: "#ffffff",
      statColor: "#ffffff",
      labelColor: "rgba(255,255,255,0.65)",
      badgeBg: "rgba(255,255,255,.15)",
      badgeTextColor: "#ffffff",
      dotColor: "rgba(255,255,255,.3)",
      dotActiveColor: "#F5C518",
    },
  ];

  const current = slides[currentSlide];

  return (
    <section id="hero" className="hero">

      {/* BACKGROUND */}
      <motion.div
        className="hero-bg"
        animate={{ background: current.bgColor }}
        transition={{ duration: 0.6 }}
      />

      {/* GLOW */}
      <div className="hero-glow"></div>

      {/* CONTENT */}
      <div className="hero-container">

        {/* TABS */}
        <div className="hero-tabs">
          <div className="tabs-wrapper">
            <button className={`tab-btn ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}>
              <Package size={14} strokeWidth={1.8} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
               Yobanté Rek
            </button>
            <button className={`tab-btn ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}>
              <ShoppingBag size={14} strokeWidth={1.8} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
               Yobanté Boutique
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55 }}
          >
            {/* TEXT */}
            <div className="hero-text">
              <div className="hero-badge" style={{ background: current.badgeBg }}>
                <span className="badge-dot"></span>
                <span style={{ color: current.badgeTextColor }}>
                  Expédition de colis - Boutique en ligne
                </span>
              </div>

              <h1 className="hero-title" style={{ color: current.textColor }}>
                {current.title}
              </h1>

              {current.id === 1 && (
                <div className="shipping-methods">
                  <div className="method-card">
                    <span className="method-icon"><Plane size={22} strokeWidth={1.5} color="#1E3A8A" /></span>
                    <span className="method-name">Fret Aérien</span>
                  </div>
                  <div className="method-card">
                    <span className="method-icon"><Ship size={22} strokeWidth={1.5} color="#1E3A8A" /></span>
                    <span className="method-name">Fret Maritime</span>
                  </div>
                  <div className="method-card">
                    <span className="method-icon"><Package size={22} strokeWidth={1.5} color="#1E3A8A" /></span>
                    <span className="method-name">Colis GP</span>
                  </div>
                </div>
              )}

              {/* BUTTON */}
              <button
                className={`hero-btn ${current.id === 1 ? 'expedition' : ''}`}
                onClick={() => scrollTo(current.buttonLink)}
              >
                {current.buttonText}
                <ArrowRight size={15} strokeWidth={2} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
              </button>

              {/* STORES */}
              <div className="store-buttons">
                <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={`store-btn ${current.id === 1 ? 'appstore' : 'appstore-white'}`}>
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
                  className={`store-btn ${current.id === 1 ? 'play-gold' : 'play-white'}`}
                >
                  <PlayStoreIcon />
                  <div className="store-text">
                    <small>Disponible sur</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>

            </div>

            {/* IMAGE */}
            <motion.div
              className="hero-image"
              animate={isMobile ? {} : { y: [0, -16, 0] }}
              transition={isMobile ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src={current.image} alt="Application mobile" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className="slide-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            style={{
              background: currentSlide === index ? current.dotActiveColor : current.dotColor,
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
          width: 600px;
          height: 600px;
          background: rgba(255,255,255,0.12);
          filter: blur(110px);
          border-radius: 50%;
          top: -130px;
          right: -80px;
          animation: floatGlow 8s ease-in-out infinite;
        }

        @keyframes floatGlow {
          0% { transform: translate(0,0); }
          50% { transform: translate(-50px,35px); }
          100% { transform: translate(0,0); }
        }

        .hero-tabs {
          position: absolute;
          top: 108px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }

        .tabs-wrapper {
          display: flex;
          gap: 6px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          padding: 5px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }

        .tab-btn {
          border: none;
          padding: 10px 20px;
          border-radius: 14px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          background: transparent;
          color: rgba(255,255,255,0.85);
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          letter-spacing: 0.1px;
        }

        .tab-btn:hover:not(.active) { color: white; background: rgba(255,255,255,0.12); }

        .tab-btn.active {
          background: white;
          color: #1E3A8A;
          box-shadow: 0 4px 14px rgba(0,0,0,0.14);
        }

        .hero-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1250px;
          padding: 200px 32px 90px;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .hero-text {
          flex: 1;
          max-width: 540px;
          min-height: 490px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 16px;
          border-radius: 999px;
          margin-bottom: 22px;
          backdrop-filter: blur(10px);
          font-size: 13px;
          font-weight: 600;
          width: fit-content;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16,185,129,0.5);
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.55); }
          60%  { box-shadow: 0 0 0 7px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }

        .hero-title {
          font-size: clamp(34px, 4.5vw, 62px);
          line-height: 1.07;
          font-weight: 900;
          margin-bottom: 26px;
          letter-spacing: -0.5px;
        }

        .shipping-methods {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-bottom: 28px;
        }

        .method-card {
          background: white;
          padding: 16px 12px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(30,58,138,0.12);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border: 1px solid rgba(30,58,138,0.06);
        }

        .method-card:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 16px 36px rgba(30,58,138,0.18);
          border-color: rgba(30,58,138,0.14);
        }

        .method-icon {
          display: block;
          margin-bottom: 8px;
        }

        .method-name {
          display: block;
          font-weight: 800;
          color: #1E3A8A;
          font-size: 12px;
          letter-spacing: 0.2px;
        }

        .hero-btn {
          border: none;
          padding: 15px 34px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          margin-bottom: 24px;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          background: #F5C518;
          color: #1E3A8A;
          width: fit-content;
          box-shadow: 0 10px 28px rgba(245,197,24,0.38);
          letter-spacing: 0.2px;
        }

        .hero-btn:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 16px 36px rgba(245,197,24,0.45); }

        .hero-btn.expedition {
          background: #1E3A8A;
          color: #F5C518;
          box-shadow: 0 10px 28px rgba(30,58,138,0.28);
        }

        .hero-btn.expedition:hover { box-shadow: 0 16px 36px rgba(30,58,138,0.38); }

        .store-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 15px;
          text-decoration: none;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          min-width: 165px;
        }

        .store-btn:hover { transform: translateY(-4px) scale(1.03); }

        .store-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .appstore       { background: #1E3A8A; color: white;   box-shadow: 0 6px 18px rgba(30,58,138,0.28); }
        .appstore-white { background: white;   color: #1E3A8A; box-shadow: 0 6px 18px rgba(255,255,255,0.3);  border: 1px solid rgba(255,255,255,0.5); }
        .play-gold  { background: #ffffff; color: #1E3A8A; box-shadow: 0 6px 18px rgba(0,0,0,0.14); }
        .play-white { background: #F5C518; color: #1E3A8A; box-shadow: 0 6px 18px rgba(245,197,24,0.35); }

        .store-btn small { font-size: 10px; opacity: 0.65; }
        .store-btn strong { font-size: 14px; font-weight: 800; letter-spacing: 0.1px; }

        .hero-stats { display: flex; gap: 36px; }

        .stat-number {
          font-size: 26px;
          font-weight: 900;
          display: block;
        }

        .stat-label { font-size: 12px; }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .hero-image::before {
          content: '';
          position: absolute;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: rgba(255,255,255,0.14);
          filter: blur(70px);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
        }

        .hero-image img {
          width: 100%;
          max-width: 400px;
          filter: drop-shadow(0 28px 50px rgba(0,0,0,0.22));
          position: relative;
          z-index: 1;
        }

        .slide-dots {
          position: absolute;
          bottom: 34px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .dot {
          width: 9px;
          height: 9px;
          border: none;
          border-radius: 999px;
          transition: 0.3s;
          cursor: pointer;
        }

        .dot.active { width: 30px; }

        /* �"?�"?�"? RESPONSIVE �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
        @media (max-width: 1024px) {
          .hero-container { padding: 190px 24px 74px; }
          .hero-content { gap: 28px; }
          .hero-image img { max-width: 320px; }
        }

        @media (max-width: 980px) {
          .hero { min-height: auto; }

          .hero-tabs {
            position: relative;
            top: 0; left: 0; transform: none;
            margin: 0 auto 26px;
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .hero-container { padding: 120px 24px 72px; }

          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 36px;
          }

          .hero-text {
            max-width: 600px;
            min-height: auto;
            align-items: center;
          }

          .hero-title { font-size: 42px; }

          .shipping-methods {
            grid-template-columns: repeat(2,1fr);
            width: 100%;
            max-width: 480px;
          }

          .shipping-methods .method-card:last-child {
            grid-column: span 2;
            width: calc(50% - 6px);
            max-width: calc(50% - 6px);
            margin: 0 auto;
          }

          .store-buttons { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-image img { max-width: 280px; }
        }

        @media (max-width: 520px) {
          .hero-container { padding: 115px 16px 56px; }
          .hero-title { font-size: 30px; line-height: 1.17; margin-bottom: 20px; }

          .shipping-methods {
            width: 100%; max-width: 320px;
            grid-template-columns: repeat(2,1fr);
            gap: 9px; margin-bottom: 20px;
          }

          .method-card { padding: 12px 8px; border-radius: 14px; }
          .method-name { font-size: 12px; }

          .shipping-methods .method-card:last-child {
            grid-column: span 2;
            width: calc(50% - 4.5px);
            max-width: calc(50% - 4.5px);
            margin: 0 auto;
          }

          .hero-btn { width: 100%; max-width: 320px; padding: 13px 18px; font-size: 15px; margin-bottom: 18px; }

          .store-buttons {
            width: 100%; max-width: 320px;
            flex-direction: column; gap: 10px; margin-bottom: 26px;
          }

          .store-btn { width: 100%; min-height: 56px; }

          .hero-stats { width: 100%; max-width: 320px; justify-content: center; gap: 36px; }
          .stat-number { font-size: 26px; }
          .hero-image img { max-width: 200px; }
        }

      `}</style>
    </section>
  );
};

export default Hero;

