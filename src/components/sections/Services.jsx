// src/components/sections/Services.jsx
import { useCallback } from "react";

const STEPS = [
  {
    id: "create",
    num: "01",
    title: "Enregistrez votre colis",
    desc: "Remplissez les informations de votre colis sur notre site ou via l'application."
  },
  {
    id: "pay",
    num: "02",
    title: "Paiement en ligne",
    desc: "Réglez votre expédition en toute sécurité directement depuis l'application."
  },
  {
    id: "deliver",
    num: "03",
    title: "Livraison à domicile",
    desc: "Le colis est livré à l'adresse du destinataire au Sénégal."
  }
];

const PRICING_PLANS = [
  {
    id: "docs",
    icon: "📩",
    name: "Documents",
    price: "Tarif fixe",
    desc: "Lettres, documents administratifs, courriers",
    features: ["Poids inférieur à 500g"],
    button: "Effectuez un envoi",
    type: "default"
  },
  {
    id: "colis10",
    icon: "📦",
    name: "Colis -10kg",
    price: "Devis sous 24h",
    desc: "Vêtements, chaussures, électronique légère...",
    features: ["Jusqu'à 10 kg"],
    button: "Obtenir un devis",
    type: "popular"
  },
  {
    id: "colis20",
    icon: "🚚",
    name: "Colis +10kg",
    price: "Devis sous 24h",
    desc: "Gros colis, électroménagers, mobiliers...",
    features: ["Collecte à domicile"],
    button: "Obtenir un devis",
    type: "default"
  }
];

const BOUTIQUE_STEPS = [
  {
    num: "01",
    title: "Choisissez vos articles",
    desc: "Parcourez notre catalogue et sélectionnez vos produits."
  },
  {
    num: "02",
    title: "Commandez en ligne",
    desc: "Payez en toute sécurité via l'application mobile."
  },
  {
    num: "03",
    title: "Livraison rapide",
    desc: "Recevez vos articles directement chez vous."
  }
];

const CATEGORIES = [
  { icon: "👕", label: "Mode & Textile" },
  { icon: "📱", label: "Électronique" },
  { icon: "💄", label: "Beauté & Soins" },
  { icon: "🏠", label: "Maison & Déco" },
  { icon: "👟", label: "Chaussures" },
  { icon: "📦", label: "Vente en gros" },
];

const Services = ({ scrollTo }) => {
  const handleClick = useCallback(() => {
    scrollTo("contact");
  }, [scrollTo]);

  return (
    <section id="services" className="section">
      <div className="bg-shape bg1"></div>
      <div className="bg-shape bg2"></div>

      <div className="container">

        <div className="section-header">
          <div className="section-tag">
            <span className="tag-line"></span>
            Nos services
          </div>

          <h2 className="section-title">
            Des solutions modernes pour vos besoins
          </h2>

       
        </div>

        {/* ===== EXPEDITION ===== */}
        <div className="service-card-wrapper glass-card">

          <div className="card-left yellow-main">

            <div className="card-title-row">
              <div className="card-icon-circle blue-bg floating">
                📦
              </div>

              <div>
                <span className="mini-label">SERVICE EXPRESS</span>
                <h3 className="card-main-title blue-text">
                  Expédiez votre colis
                </h3>
              </div>
            </div>

            <div className="inner-section">

              <div className="inner-tag blue-text">
                <span className="inner-tag-line blue-bg"></span>
                COMMENT ÇA MARCHE
              </div>

              <div className="steps-row">
                {STEPS.map((step, i) => (
                  <div key={step.id} className="step-wrapper">

                    <div className="step-card white-card hover-card">

                      <div className="step-num blue-bg">
                        {step.num}
                      </div>

                      <p className="step-title blue-text">
                        {step.title}
                      </p>

                      <p className="step-desc dark-text">
                        {step.desc}
                      </p>

                    </div>

                    {i < STEPS.length - 1 && (
                      <div className="step-arrow blue-text">→</div>
                    )}

                  </div>
                ))}
              </div>
            </div>

            {/* Tarification */}
            <div className="inner-section">

              <div className="inner-tag blue-text">
                <span className="inner-tag-line blue-bg"></span>
                TARIFICATION
              </div>

              <div className="pricing-row">
                {PRICING_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`pricing-card ${
                      plan.type === "popular"
                        ? "popular-card"
                        : "white-card"
                    }`}
                  >

                    {plan.type === "popular" && (
                      <div className="popular-badge">
                        POPULAIRE
                      </div>
                    )}

                    <div className="plan-icon-container">
                      {plan.icon}
                    </div>

                    <h4 className="plan-name blue-text">
                      {plan.name}
                    </h4>

                    <p className="plan-price-label">
                      {plan.price}
                    </p>

                    <div className="plan-details-box">
                      <p className="plan-desc">
                        {plan.desc}
                      </p>

                      {plan.features.map((f, i) => (
                        <p key={i} className="plan-feature">
                          {f}
                        </p>
                      ))}
                    </div>

                    <button
                      className="plan-btn"
                      onClick={handleClick}
                    >
                      {plan.button}
                    </button>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="card-right white-bg promo-side">
            <div className="promo-box expedition-gradient">

             
              <p className="promo-desc">
                 Envoyez vos colis depuis la France vers le Sénégal (vice-versa) avec collecte à domicile ou dépôt en point relais.
              </p>

              <button
                className="promo-btn"
                onClick={handleClick}
              >
                En savoir plus →
              </button>

            </div>
          </div>
        </div>

        {/* ===== BOUTIQUE ===== */}
        <div
          className="service-card-wrapper boutique-wrapper glass-card"
          style={{ marginTop: "70px" }}
        >

          <div className="card-right white-bg promo-side">

            <div className="promo-box boutique-gradient">

             

              <p className="promo-desc dark-blue">
                Achetez vos marques préférées et recevez-les directement au Sénégal.
              </p>

              <button
                className="promo-btn dark-blue-btn"
                onClick={() => scrollTo("apps")}
              >
                Explorer →
              </button>

            </div>
          </div>

          <div className="card-left blue-dark-bg">

            <div className="card-title-row">

              <div className="card-icon-circle yellow-bg floating">
                🛍️
              </div>

              <div>
                <span className="mini-label yellow-text">
                  BOUTIQUE
                </span>

                <h3 className="card-main-title white-text">
                  Boutique en ligne
                </h3>
              </div>
            </div>

            {/* Categories */}
            <div className="inner-section">

              <div className="inner-tag white-text">
                <span className="inner-tag-line yellow-bg"></span>
                NOS CATÉGORIES
              </div>

              <div className="categories-grid">
                {CATEGORIES.map((cat, i) => (
                  <div key={i} className="category-pill">
                    <span className="cat-icon">
                      {cat.icon}
                    </span>

                    <span className="cat-label">
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="inner-section">

              <div className="inner-tag white-text">
                <span className="inner-tag-line yellow-bg"></span>
                COMMENT ACHETER ?
              </div>

              <div className="steps-row">
                {BOUTIQUE_STEPS.map((step, i) => (
                  <div key={i} className="step-wrapper">

                    <div className="step-card boutique-step-card">

                      <div className="step-num yellow-bg step-num-dark">
                        {step.num}
                      </div>

                      <p className="step-title boutique-step-title">
                        {step.title}
                      </p>

                      <p className="step-desc boutique-step-desc">
                        {step.desc}
                      </p>

                    </div>

                    {i < BOUTIQUE_STEPS.length - 1 && (
                      <div className="step-arrow yellow-text">
                        →
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .section {
          position: relative;
          padding: 120px 0;
          background:
            radial-gradient(circle at top left, #fef9c3 0%, transparent 30%),
            radial-gradient(circle at bottom right, #bae6fd 0%, transparent 35%),
            #f8fafc;
          overflow: hidden;
        }

        .bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.3;
          z-index: 0;
        }

        .bg1 {
          width: 350px;
          height: 350px;
          background: #00BFFF;
          top: -100px;
          right: -100px;
        }

        .bg2 {
          width: 300px;
          height: 300px;
          background: #faf066;
          bottom: -100px;
          left: -100px;
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          color: #00BFFF;
          letter-spacing: 1.5px;
        }

        .tag-line {
          width: 32px;
          height: 2px;
          background: #faf066;
        }

        .section-title {
          font-size: clamp(32px, 5vw, 54px);
          line-height: 1.1;
          color: #00BFFF;
          font-weight: 900;
          margin-bottom: 16px;
        }

        .section-subtitle {
          max-width: 650px;
          margin: 0 auto;
          color: #64748b;
          font-size: 18px;
          line-height: 1.7;
        }

        /* WRAPPERS */

        .service-card-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  border-radius: 34px;
  overflow: hidden;
  align-items: start; /* IMPORTANT */
  position: relative;
  gap: 24px;
}

        .glass-card {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }

        .boutique-wrapper {
          grid-template-columns: 1fr 2fr;
        }

        .card-left {
          padding: 45px;
          display: flex;
          flex-direction: column;
          gap: 35px;
        }

        .yellow-main {
          background: linear-gradient(135deg,#faf066 0%, #fff8b3 100%);
        }

        .blue-dark-bg {
          background:
            linear-gradient(
              135deg,
              #00BFFF 0%,
              #0284c7 100%
            );
        }

        .white-bg {
          background: #ffffff;
        }

        /* TYPO */

        .blue-text {
          color: #00BFFF;
        }

        .white-text {
          color: white;
        }

        .yellow-text {
          color: #faf066;
        }

        .dark-text {
          color: #475569;
        }

        .blue-bg {
          background: #00BFFF;
        }

        .yellow-bg {
          background: #faf066;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .card-icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .floating {
          animation: floating 4s ease-in-out infinite;
        }

        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .mini-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 6px;
          opacity: 0.7;
        }

        .card-main-title {
          font-size: 34px;
          font-weight: 900;
          line-height: 1.1;
        }

        /* INNER */

        .inner-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .inner-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .inner-tag-line {
          width: 20px;
          height: 2px;
        }

        /* STEPS */

       .steps-row {
  display: flex;
  gap: 20px;
  align-items: stretch;
}

.step-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
}

.step-card {
  flex: 1;
  background: #ffffff;
  padding: 24px 18px;
  border-radius: 24px;

.step-title {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;

  min-height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  min-height: 230px; /* même hauteur */
  height: 100%;

  text-align: center;
  box-sizing: border-box;
}

        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 30px rgba(0,0,0,0.08);
        }

        .white-card {
          background: rgba(255,255,255,0.95);
        }

        .boutique-step-card {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
        }

        .step-num {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          margin: 0 auto 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 900;
          color: white;
        }

        .step-num-dark {
          color: #00BFFF;
        }

        .step-title {
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .step-desc {
          font-size: 12px;
          line-height: 1.6;
        }

        .boutique-step-title {
      color: #ffffff;
      font-weight: 800;
    }

    .boutique-step-desc {
      color: #ebf0f5; /* bleu très clair */
    }

        .step-arrow {
          font-size: 24px;
          font-weight: 800;
        }

        /* PRICING */

        .pricing-row {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .pricing-card {
          position: relative;
          border-radius: 24px;
          padding: 24px 16px;
          text-align: center;
          transition: all 0.35s ease;
          overflow: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-10px);
        }

        .popular-card {
          background:
            linear-gradient(
              135deg,
              #ffffff 0%,
              #fff8b3 100%
            );
          border: 2px solid #00BFFF;
        }

        .popular-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #00BFFF;
          color: white;
          font-size: 9px;
          font-weight: 800;
          padding: 5px 10px;
          border-radius: 50px;
        }

        .plan-icon-container {
          font-size: 34px;
          margin-bottom: 10px;
        }

        .plan-name {
          font-size: 17px;
          font-weight: 900;
        }

        .plan-price-label {
          margin: 10px 0;
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }

        .plan-desc {
          font-size: 12px;
          line-height: 1.6;
          color: #475569;
        }

        .plan-feature {
          margin-top: 10px;
          font-size: 11px;
          font-weight: 700;
          color: #00BFFF;
        }

        .plan-btn {
          margin-top: 18px;
          width: 100%;
          border: none;
          padding: 12px;
          border-radius: 50px;
          background: #00BFFF;
          color: white;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .plan-btn:hover {
          transform: scale(1.03);
          background: #0284c7;
        }

        /* CATEGORIES */

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
        }

        .category-pill {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 18px 12px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
        }

        .category-pill:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,0.18);
        }

        .cat-icon {
          display: block;
          font-size: 28px;
          margin-bottom: 10px;
        }

        .cat-label {
          font-size: 13px;
          font-weight: 700;
          color: white;
        }

        /* PROMO */

        .promo-side {
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

        .promo-box {
          width: 100%;
          height: 100%;
          border-radius: 28px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .promo-box::before {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          top: -80px;
          right: -80px;
        }

        .expedition-gradient {
          background:
            linear-gradient(
              135deg,
              #00BFFF 0%,
              #0284c7 100%
            );
          color: white;
        }

        .boutique-gradient {
          background:
            linear-gradient(
              135deg,
              #faf066 0%,
              #fff8b3 100%
            );
        }

        .promo-badge {
          display: inline-flex;
          align-self: center;
          padding: 8px 16px;
          border-radius: 50px;
          background: rgba(255,255,255,0.18);
          color: white;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }

        .blue-badge {
          background: rgba(0,191,255,0.15);
          color: #00BFFF;
        }

        .promo-desc {
          font-size: 22px;
          line-height: 1.6;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .dark-blue {
          color: #00BFFF;
        }

        .promo-btn {
          border: none;
          border-radius: 50px;
          padding: 15px 24px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
          color: #00BFFF;
        }

        .promo-btn:hover {
          transform: translateY(-4px);
        }

        .dark-blue-btn {
          background: #00BFFF;
          color: white;
        }

        /* RESPONSIVE */

        @media (max-width: 1024px) {

          .service-card-wrapper,
          .boutique-wrapper {
            grid-template-columns: 1fr;
          }

          .promo-side {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {

          .section {
            padding: 90px 0;
          }

          .card-left {
            padding: 30px 22px;
          }

          .steps-row {
            flex-direction: column;
          }

          .step-arrow {
            transform: rotate(90deg);
            align-self: center;
          }

          .pricing-row {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            grid-template-columns: repeat(2,1fr);
          }

          .promo-desc {
            font-size: 18px;
          }
        }

     @media (max-width: 480px) {

  .section {
    padding: 70px 0;
  }

  .section-title {
    font-size: 32px;
    line-height: 1.15;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .card-main-title {
    font-size: 28px;
  }

  .card-left {
    padding: 24px 18px;
    gap: 24px;
  }

  /* CARD PROMO MOBILE */
  .promo-side {
    min-height: auto;
    padding: 14px;
  }

  .promo-box {
  width: 100%;
  max-width: 340px; /* largeur compacte */
  min-height: 420px; /* taille contrôlée */
  margin: auto;

  border-radius: 28px;
  padding: 32px 26px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  text-align: center;
  position: relative;
  overflow: hidden;
}

  .promo-box::before {
    width: 140px;
    height: 140px;
    top: -50px;
    right: -50px;
  }

.promo-desc {
  font-size: 16px; /* avant 22px */
  line-height: 1.7;
  font-weight: 800;
  margin-bottom: 22px;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
}

  .promo-btn {
  width: 100%;
  max-width: 260px;
  margin: 0 auto;

  padding: 14px 22px;
  border-radius: 999px;
  font-size: 15px;
}

  .step-card {
    min-height: auto;
    padding: 20px 16px;
  }

  .step-title {
    min-height: auto;
    font-size: 14px;
  }

  .step-desc {
    font-size: 12px;
  }
}
      `}</style>
    </section>
  );
};

export default Services;