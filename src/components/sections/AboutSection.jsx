// src/components/sections/AboutSection.jsx
import { Package, ShoppingBag } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-bg-glow glow-1"></div>
      <div className="about-bg-glow glow-2"></div>

      <div className="container">
        <div className="about-inner">

          {/* HEADER */}
          <div className="about-header sr">
            <div className="section-tag">
              <span className="tag-line"></span>
              À propos
            </div>
            <h2 className="about-title">Qui sommes-nous ?</h2>
            <p className="about-description">
              YOBANTÉ est une entreprise spécialisée dans l'expédition de colis et le commerce
              en ligne entre la France et le Sénégal. Notre mission : faciliter les échanges
              entre les deux pays grâce à des services fiables, accessibles et transparents.
            </p>
          </div>

          {/* CARDS */}
          <div className="about-cards">
            <div className="about-card sr sr-d1">
              <div className="card-icon blue-icon">
                <Package size={28} strokeWidth={1.5} color="white" />
              </div>
              <h3>Expédition de colis</h3>
              <p>
                Nous prenons en charge l'envoi de vos colis depuis la France vers le Sénégal.
                Collecte à domicile, dépôt en point relais, suivi en temps réel — tout est pensé
                pour que votre envoi se déroule en toute sérénité.
              </p>
            </div>

            <div className="about-card sr sr-d2">
              <div className="card-icon gold-icon">
                <ShoppingBag size={28} strokeWidth={1.5} color="#1E3A8A" />
              </div>
              <h3>Yobanté Boutique</h3>
              <p>
                Notre boutique en ligne vous permet d'acheter des produits authentiques à prix
                discount et de les recevoir directement à votre domicile au Sénégal.
                Achat en gros disponible pour les professionnels.
              </p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative; overflow: hidden;
          padding: 90px 0;
          background: linear-gradient(135deg, #0f1f52 0%, #1E3A8A 100%);
          color: white;
        }

        .about-bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: 0.13; pointer-events: none;
        }

        .glow-1 { width: 380px; height: 380px; background: #1E3A8A; top: -110px; right: -90px; }
        .glow-2 { width: 320px; height: 320px; background: #D4A820; bottom: -90px; left: -70px; }

        .container {
          position: relative; z-index: 2;
          max-width: 1100px; margin: 0 auto; padding: 0 28px;
        }

        .about-inner { display: flex; flex-direction: column; gap: 52px; }

        .about-header { max-width: 680px; }

        .section-tag {
          display: inline-flex; align-items: center; gap: 12px;
          color: #D4A820; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; margin-bottom: 18px; font-size: 12px;
        }

        .tag-line { width: 28px; height: 2px; background: #D4A820; }

        .about-title {
          font-size: clamp(30px, 4.5vw, 50px);
          font-weight: 900; line-height: 1.1;
          color: white; margin-bottom: 20px;
        }

        .about-description {
          color: rgba(255,255,255,.72);
          font-size: 16px; line-height: 1.8;
        }

        .about-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 26px; }

        .about-card {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 26px; padding: 36px 32px;
          backdrop-filter: blur(14px);
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .about-card:hover {
          border-color: rgba(212,168,32,.3);
          background: rgba(255,255,255,.07);
        }

        .card-icon {
          width: 58px; height: 58px; border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }

        .blue-icon { background: #1E3A8A; box-shadow: 0 8px 22px rgba(30,58,138,.35); }
        .gold-icon { background: #D4A820; box-shadow: 0 8px 22px rgba(212,168,32,.3); }

        .about-card h3 { font-size: 20px; font-weight: 800; color: white; margin-bottom: 12px; }
        .about-card p  { color: rgba(255,255,255,.65); font-size: 14px; line-height: 1.75; margin: 0; }

        @media (max-width: 768px) {
          .about-section { padding: 76px 0; }
          .about-cards { grid-template-columns: 1fr; }
        }

        @media (max-width: 520px) {
          .about-section { padding: 64px 0; }
          .about-card { padding: 28px 22px; }
          .about-title { font-size: 28px; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
