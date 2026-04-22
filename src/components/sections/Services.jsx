// src/components/sections/Services.jsx
import { useCallback, memo } from "react";

// Import des images de fond
import expeditionBg from '../../assets/images/tracking-bg.png';
import boutiqueBg from '../../assets/images/boutique-bg.png';
import trackingBg from '../../assets/images/expedition-bg.png';

// données séparées (meilleur perf)
const SERVICES = [
  {
    id: "expedition",
    title: "Expédition de colis",
    desc: "Envoyez vos colis depuis la France vers le Sénégal avec collecte ou dépôt en point relais.",
    bgImage: expeditionBg
  },
  {
    id: "boutique",
    title: "Boutique en ligne",
    desc: "Achetez en France et recevez vos produits directement au Sénégal.",
    bgImage: boutiqueBg
  },
  {
    id: "tracking",
    title: "Suivi des colis",
    desc: "Suivi en temps réel avec notifications à chaque étape.",
    bgImage: trackingBg
  }
];

// composant carte isolé (réutilisable + memo)
const ServiceCard = memo(({ title, desc, bgImage, onClick }) => {
  return (
    <div 
      className="service-card"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="service-overlay"></div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <button className="service-link" onClick={onClick}>
          En savoir plus →
        </button>
      </div>
    </div>
  );
});

const Services = ({ scrollTo }) => {

  // fonction mémorisée
  const handleClick = useCallback(() => {
    scrollTo("contact");
  }, [scrollTo]);

  return (
    <section id="services" className="section">
      <div className="container">

        {/* header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-line"></span>
            Nos services
          </div>
          <h2 className="section-title">Des solutions adaptées à vos besoins</h2>
        </div>

        {/* grid */}
        <div className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onClick={handleClick}
            />
          ))}
        </div>

      </div>

      <style jsx>{`
        .section {
          padding: 80px 0;
          background: var(--white);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--blue-dark);
        }

        .tag-line {
          width: 24px;
          height: 2px;
          background: var(--yellow);
        }

        .section-title {
          font-size: clamp(28px, 4vw, 42px);
          color: var(--blue-dark);
          line-height: 1.3;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .service-card {
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 24px;
          overflow: hidden;
          min-height: 320px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        /* Overlay sombre pour la lisibilité du texte */
        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(68, 73, 88, 0.85) 0%, rgba(26, 58, 143, 0.75) 100%);
          transition: opacity 0.3s ease;
        }

        .service-card:hover .service-overlay {
          background: linear-gradient(135deg, rgba(26, 58, 143, 0.92) 0%, rgba(26, 58, 143, 0.85) 100%);
        }

        .service-content {
          position: relative;
          z-index: 2;
          padding: 32px 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 320px;
          justify-content: center;
        }

        .service-card h3 {
          color: var(--yellow);
          margin-bottom: 12px;
          font-size: 22px;
          font-weight: 700;
        }

        .service-card p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          line-height: 1.6;
          max-width: 260px;
        }

        /* Bouton "En savoir plus" - fond bleu, écriture jaune */
        .service-link {
          background: var(--blue-dark);
          border: none;
          color: var(--yellow);
          font-weight: 600;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .service-link:hover {
          background: var(--yellow);
          color: var(--blue-dark);
          transform: translateY(-2px);
          gap: 12px;
        }

        @media (max-width: 768px) {
          .section {
            padding: 50px 0;
          }

          .services-grid {
            gap: 20px;
          }

          .service-card {
            min-height: 280px;
          }

          .service-content {
            padding: 24px 20px;
            min-height: 280px;
          }

          .service-card h3 {
            font-size: 20px;
          }

          .service-link {
            padding: 10px 24px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;