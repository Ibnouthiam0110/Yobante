// src/components/sections/Services.jsx
import { useCallback } from "react";

/* ---------- DATA ---------- */

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
    desc: "Vêtements, chaussures, électronique légère, matériel informatique, produits lessiviels, etc...",
    features: ["Jusqu'à 10 kg"],
    button: "Obtenir un devis",
    type: "popular"
  },
  {
    id: "colis20",
    icon: "🚚",
    name: "Colis +10kg",
    price: "Devis sous 24h",
    desc: "Gros colis, électroménagers, mobiliers, matériels informatiques, etc...",
    features: ["Collecte à domicile"],
    button: "Obtenir un devis",
    type: "default"
  }
];

const BOUTIQUE_STEPS = [
  { 
    num: "01", 
    title: "Choisissez vos articles", 
    desc: "Parcourez notre catalogue et sélectionnez vos produits préférés." 
  },
  { 
    num: "02", 
    title: "Commandez en ligne", 
    desc: "Payez en toute sécurité via l'application mobile." 
  },
  { 
    num: "03", 
    title: "Livraison rapide", 
    desc: "Recevez vos articles directement chez vous au Sénégal." 
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
      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-line"></span>
            Nos services
          </div>
          <h2 className="section-title">Des solutions adaptées à vos besoins</h2>
        </div>

        {/* ===== CARTE EXPÉDITION (JAUNE & BLANC) ===== */}
        <div className="service-card-wrapper shadow-lg">
          <div className="card-left yellow-main">
            <div className="card-title-row">
              <div className="card-icon-circle blue-bg">
                <span>📦</span>
              </div>
              <h3 className="card-main-title blue-text">Expédiez votre colis</h3>
            </div>

            {/* Comment ça marche Expédition */}
            <div className="inner-section">
              <div className="inner-tag blue-text">
                <span className="inner-tag-line blue-bg"></span>
                COMMENT ÇA MARCHE
              </div>
              <div className="steps-row">
                {STEPS.map((step, i) => (
                  <div key={step.id} className="step-wrapper">
                    <div className="step-card white-card">
                      <div className="step-num blue-bg">{step.num}</div>
                      <p className="step-title blue-text">{step.title}</p>
                      <p className="step-desc dark-text">{step.desc}</p>
                    </div>
                    {i < STEPS.length - 1 && <div className="step-arrow blue-text">→</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Tarification */}
            <div className="inner-section" style={{ marginTop: '20px' }}>
              <div className="inner-tag blue-text">
                <span className="inner-tag-line blue-bg"></span>
                TARIFICATION
              </div>
              <div className="pricing-row">
                {PRICING_PLANS.map((plan) => (
                  <div key={plan.id} className={`pricing-card ${plan.type === "popular" ? "popular-card" : "white-card"}`}>
                    <div className="plan-icon-container">{plan.icon}</div>
                    <h4 className="plan-name blue-text">{plan.name}</h4>
                    <p className="plan-price-label">{plan.price}</p>
                    <div className="plan-details-box">
                       <p className="plan-desc">{plan.desc}</p>
                       {plan.features.map((f, i) => (
                         <p key={i} className="plan-feature">{f}</p>
                       ))}
                    </div>
                    <button className="plan-btn" onClick={handleClick}>{plan.button}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-right white-bg promo-side">
            <div className="promo-box expedition-gradient">
              <p className="promo-desc">Envoyez vos colis depuis la France vers le Sénégal avec collecte à domicile ou dépôt en point relais.</p>
              <button className="promo-btn" onClick={handleClick}>En savoir plus →</button>
            </div>
          </div>
        </div>

        {/* ===== CARTE BOUTIQUE (BLANC & BLEU) ===== */}
        <div className="service-card-wrapper boutique-wrapper" style={{ marginTop: "60px" }}>
          <div className="card-right white-bg promo-side">
            <div className="promo-box boutique-gradient">
              <p className="promo-desc dark-blue">
                Achetez en France ou au Sénégal et recevez vos produits authentiques à prix discount. 
                <br /><strong>Vente au détail & vente en gros.</strong>
              </p>
              <button className="promo-btn dark-blue-btn" onClick={() => scrollTo("apps")}>Explorer →</button>
            </div>
          </div>

          <div className="card-left blue-dark-bg">
            <div className="card-title-row">
              <div className="card-icon-circle yellow-bg">
                <span>🛍️</span>
              </div>
              <h3 className="card-main-title white-text">Boutique en ligne</h3>
            </div>

            {/* Catégories Boutique */}
            <div className="inner-section">
              <div className="inner-tag white-text">
                <span className="inner-tag-line yellow-bg"></span>
                NOS CATÉGORIES
              </div>
              <div className="categories-grid">
                {CATEGORIES.map((cat, i) => (
                  <div key={i} className="category-pill">
                    <span className="cat-icon">{cat.icon}</span>
                    <span className="cat-label">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment ça marche Boutique */}
            <div className="inner-section">
              <div className="inner-tag white-text">
                <span className="inner-tag-line yellow-bg"></span>
                COMMENT ACHETER ?
              </div>
              <div className="steps-row">
                {BOUTIQUE_STEPS.map((step, i) => (
                  <div key={i} className="step-wrapper">
                    <div className="step-card boutique-step-card">
                      <div className="step-num yellow-bg step-num-dark">{step.num}</div>
                      <p className="step-title boutique-step-title">{step.title}</p>
                      <p className="step-desc boutique-step-desc">{step.desc}</p>
                    </div>
                    {i < BOUTIQUE_STEPS.length - 1 && <div className="step-arrow yellow-text">→</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section { padding: 80px 0; background: #fafafa; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        
        .section-header { text-align: center; margin-bottom: 50px; }
        .section-tag { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 13px; font-weight: 700; text-transform: uppercase; color: #2418d1; }
        .tag-line { width: 30px; height: 2px; background: #faf066; }
        .section-title { font-size: clamp(26px, 4vw, 40px); color: #2418d1; font-weight: 800; }

        /* Wrappers */
        .service-card-wrapper { display: grid; grid-template-columns: 2fr 1fr; border-radius: 30px; overflow: hidden; background: white; align-items: stretch; }
        .boutique-wrapper { grid-template-columns: 1fr 2fr; }
        .shadow-lg { box-shadow: 0 20px 40px rgba(0,0,0,0.06); }

        .card-left { padding: 40px; display: flex; flex-direction: column; gap: 30px; }
        .card-right { padding: 0; display: flex; align-items: center; justify-content: center; }
        .yellow-main { background: #faf066; }
        .blue-dark-bg { background: #2418d1; }
        .white-bg { background: #ffffff; }

        /* Typography & Colors */
        .blue-text { color: #2418d1; }
        .white-text { color: #ffffff; }
        .yellow-text { color: #faf066; }
        .dark-text { color: #444444; }
        .blue-bg { background: #2418d1; }
        .yellow-bg { background: #faf066; }
        .dark-blue { color: #2418d1 !important; }

        .card-title-row { display: flex; align-items: center; gap: 15px; }
        .card-icon-circle { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; }
        .card-main-title { font-size: 26px; font-weight: 800; }

        .inner-section { display: flex; flex-direction: column; gap: 18px; }
        .inner-tag { display: flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; }
        .inner-tag-line { width: 20px; height: 2px; }

        /* Steps */
        .steps-row { display: flex; gap: 10px; align-items: stretch; }
        .step-wrapper { display: flex; align-items: center; gap: 10px; flex: 1; }
        .step-card { flex: 1; padding: 20px 12px; border-radius: 20px; text-align: center; display: flex; flex-direction: column; align-items: center; }
        .white-card { background: #ffffff; }

        /* Boutique step cards — solid white for maximum readability */
        .boutique-step-card {
          background: #ffffff;
          border: none;
        }
        .boutique-step-title {
          color: #2418d1;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .boutique-step-desc {
          color: #555555;
          font-size: 11px;
          line-height: 1.5;
          margin: 0;
        }

        .step-num { width: 30px; height: 30px; border-radius: 50%; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 800; color: #fff; }
        .step-num-dark { color: #2418d1 !important; }
        .step-title { font-size: 13px; font-weight: 700; margin-bottom: 6px; }
        .step-desc { font-size: 11px; line-height: 1.5; margin: 0; }

        /* PRICING — compact square cards */
        .pricing-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; align-items: start; }
        .pricing-card { padding: 16px 10px; border-radius: 16px; text-align: center; position: relative; display: flex; flex-direction: column; align-items: center; border: none; aspect-ratio: 1 / 1; justify-content: center; overflow: hidden; }
        .popular-card { background: #FFFBE6; }
        .popular-badge { position: absolute; top: -10px; background: #faf066; color: #2418d1; font-size: 9px; font-weight: 800; padding: 3px 10px; border-radius: 20px; }
        .plan-icon-container { font-size: 22px; margin-bottom: 6px; }
        .plan-name { font-size: 13px; font-weight: 800; margin: 0; }
        .plan-price-label { font-size: 11px; font-weight: 700; color: #333333; margin: 4px 0 6px; }
        .plan-details-box { margin-bottom: 8px; }
        .plan-desc { font-size: 10px; color: #555555; line-height: 1.4; margin: 0; }
        .plan-feature { font-size: 10px; color: #2418d1; margin-top: 4px; font-weight: 600; }
        .plan-btn { background: #2418d1; color: #fff; border: none; padding: 7px 10px; border-radius: 50px; font-size: 10px; font-weight: 700; cursor: pointer; width: 100%; }

        /* Categories */
        .categories-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .category-pill { background: rgba(255, 255, 255, 0.12); padding: 15px 10px; border-radius: 15px; display: flex; flex-direction: column; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.2); text-align: center; }
        .cat-icon { font-size: 24px; }
        .cat-label { font-size: 12px; font-weight: 600; color: #fff; }

        /* Promo Side — fills full height */
        .promo-side { padding: 24px; display: flex; align-items: center; justify-content: center; }
        .promo-box { padding: 30px 20px; border-radius: 25px; text-align: center; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; box-sizing: border-box; }
        .expedition-gradient { background: linear-gradient(135deg, #2418d1 0%, #2418d1 100%); color: #fff; }
        .boutique-gradient { background: #faf066; color: #2418d1; }
        .promo-desc { font-size: 14px; font-weight: 500; line-height: 1.6; margin-bottom: 20px; }
        .promo-btn { padding: 11px 22px; border-radius: 50px; font-weight: 800; font-size: 13px; border: none; cursor: pointer; background: #FFC72C; color: #1a3a8f; transition: 0.2s; }
        .promo-btn:hover { transform: scale(1.05); }
        .dark-blue-btn { background: #2418d1; color: #fff; }

        @media (max-width: 1024px) {
          .service-card-wrapper, .boutique-wrapper { grid-template-columns: 1fr; }
          .promo-side { grid-row: 2; }
        }

        @media (max-width: 768px) {
          .steps-row { flex-direction: column; }
          .step-arrow { transform: rotate(90deg); margin: 5px 0; }
          .pricing-row { grid-template-columns: 1fr; }
          .categories-grid { grid-template-columns: repeat(2, 1fr); }
          .card-left { padding: 30px 20px; }
        }
      `}</style>
    </section>
  );
};

export default Services;