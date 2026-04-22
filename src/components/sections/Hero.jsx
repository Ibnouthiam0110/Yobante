// src/components/sections/Hero.jsx (version avec défilement gauche/droite)
import { useState, useEffect } from 'react';
import deliveryPhone from '../../assets/images/mockeup.png';
import bgImage from '../../assets/images/image.jpg'; // Changé pour image.png
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Expédiez vos colis facilement",
      highlight: "Expédiez",
      description: "La solution simple et rapide pour envoyer vos colis de la France vers le Sénégal. Suivi en temps réel, tarifs transparents.",
      buttonText: "En savoir plus",
      buttonLink: "services",
      image: deliveryPhone2,
      bgColor: "white",
      textColor: "#1a3a8f",
      descriptionColor: "#4a5568",
      statColor: "#1a3a8f",
      badgeBg: "rgba(0, 0, 0, 0.05)",
      badgeTextColor: "#1a3a8f",
      dotColor: "rgba(26, 58, 143, 0.3)",
      dotActiveColor: "#1a3a8f",
    },
   // Dans le slide 2 (boutique), supprimez l'overlay
{
  id: 2,
  title: "Découvrez notre boutique en ligne",
  highlight: "boutique",
  description: "Achetez des produits sélectionnés en France et faites-les livrer directement à vos proches au Sénégal.",
  buttonText: "Explorer",
  buttonLink: "apps",
  image: deliveryPhone,
  bgColor: "transparent", // ou laissez vide
  bgImage: bgImage,
  textColor: "white",
  descriptionColor: "rgba(255, 255, 255, 0.9)",
  statColor: "white",
  badgeBg: "rgba(0, 0, 0, 0.5)", // fond sombre pour que le badge reste lisible
  badgeTextColor: "white",
  dotColor: "rgba(255, 255, 255, 0.5)",
  dotActiveColor: "#FFC72C",
  hasOverlay: false, // Ajoutez cette propriété
}
  ];

  const current = slides[currentSlide];

  return (
    <section className="hero">
      {/* Fond dynamique selon le slide */}
      <div className="hero-bg" style={{ 
        background: current.bgColor,
        backgroundImage: current.bgImage ? `url(${current.bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {current.bgImage && <div className="hero-overlay"></div>}
      </div>

      {/* Slides avec défilement horizontal */}
      <div className="slides-container">
        <div 
          className="slides-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="hero-content-wrapper">
                <div className="hero-container">
                  
                  {/* Partie gauche - Texte */}
                  <div className="hero-text" style={{ color: slide.textColor }}>
                    <div className="hero-badge" style={{ background: slide.badgeBg }}>
                      <span className="badge-dot"></span>
                      <span style={{ color: slide.badgeTextColor }}>Service actif — France → Sénégal</span>
                    </div>
                    
                    <h1 className="hero-title" style={{ color: slide.textColor }}>
                      {slide.title.split(slide.highlight)[0]}
                      <span className="hero-highlight">{slide.highlight}</span>
                      {slide.title.split(slide.highlight)[1]}
                    </h1>
                    
                    <p className="hero-description" style={{ color: slide.descriptionColor }}>{slide.description}</p>
                    
                    <div className="hero-buttons">
                      <button 
                        className="btn-primary"
                        onClick={() => scrollTo(slide.buttonLink)}
                      >
                        {slide.buttonText} →
                      </button>
                      
                    </div>

                    <div className="store-buttons">
                      <a 
                        href="#" 
                        className="store-btn appstore"
                        onClick={() => window.open('https://apps.apple.com', '_blank')}
                      >
                        <AppStoreIcon />
                        <div className="store-text">
                          <span>Télécharger sur l'</span>
                          <strong>App Store</strong>
                        </div>
                      </a>
                      <a 
                        href="#" 
                        className="store-btn googleplay"
                        onClick={() => window.open('https://play.google.com', '_blank')}
                      >
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
                        <span className="stat-label" style={{ color: slide.badgeTextColor === 'white' ? 'rgba(255,255,255,0.7)' : '#718096' }}>Colis livrés</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number" style={{ color: slide.statColor }}>7-14j</span>
                        <span className="stat-label" style={{ color: slide.badgeTextColor === 'white' ? 'rgba(255,255,255,0.7)' : '#718096' }}>Délai moyen</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number" style={{ color: slide.statColor }}>24/7</span>
                        <span className="stat-label" style={{ color: slide.badgeTextColor === 'white' ? 'rgba(255,255,255,0.7)' : '#718096' }}>Support</span>
                      </div>
                    </div>
                  </div>

                  {/* Partie droite - Image du téléphone */}
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

      {/* Indicateurs */}
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
          overflow: hidden;
        }

        /* Fond dynamique */
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(26, 58, 143, 0.7) 0%, rgba(26, 58, 143, 0.6) 100%);
        }

        /* Conteneur des slides */
        .slides-container {
          position: relative;
          z-index: 2;
          width: 100%;
          overflow: hidden;
        }

        .slides-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
        }

        .slide {
          flex: 0 0 100%;
          width: 100%;
        }

        .hero-content-wrapper {
          width: 100%;
          padding: 120px 0 80px;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
        }

        .hero-text {
          flex: 1;
          max-width: 550px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 100px;
          margin-bottom: 28px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
        }

        .hero-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .hero-highlight {
          color: #FFC72C;
          display: inline-block;
        }

        .hero-description {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }

        .btn-primary {
          background: #FFC72C;
          color: #1a3a8f;
          border: none;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          background: #e0b000;
          transform: translateY(-2px);
        }

        .store-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s;
          cursor: pointer;
        }

        .store-btn.appstore {
          background: #000000;
        }

        .store-btn.googleplay {
          background: #FFC72C;
        }

        .store-btn:hover {
          transform: translateY(-2px);
        }

        .store-text {
          display: flex;
          flex-direction: column;
        }

        .store-text span {
          font-size: 9px;
          opacity: 0.8;
        }

        .store-text strong {
          font-size: 13px;
          font-weight: 700;
        }

        .store-btn.appstore .store-text span,
        .store-btn.appstore .store-text strong {
          color: white;
        }

        .store-btn.googleplay .store-text span,
        .store-btn.googleplay .store-text strong {
          color: #1a1a1a;
        }

        .hero-stats {
          display: flex;
          gap: 48px;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 28px;
          font-weight: 700;
        }

        .stat-label {
          font-size: 13px;
          margin-top: 4px;
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin-top: -170px;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 350px;
          text-align: center;
        }

        .image-wrapper img {
          width: 150%;
          height: auto;
          filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.2));
        }

        .slide-dots {
          position: absolute;
          bottom: 30px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 12px;
          z-index: 10;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          width: 30px;
          border-radius: 5px;
        }

        @media (max-width: 968px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }

          .hero-text {
            max-width: 100%;
            text-align: center;
          }

          .hero-buttons, .store-buttons, .hero-stats {
            justify-content: center;
          }

          .hero-image {
            order: -1;
            margin-top: 0;
          }

          .image-wrapper {
            max-width: 280px;
          }
        }

        @media (max-width: 768px) {
          .hero-content-wrapper {
            padding: 100px 0 60px;
          }

          .hero-container {
            padding: 0 20px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-buttons, .store-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary, .store-btn {
            width: 100%;
            max-width: 220px;
            justify-content: center;
          }

          .hero-stats {
            flex-wrap: wrap;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;