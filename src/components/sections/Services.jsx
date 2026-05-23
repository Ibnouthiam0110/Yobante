// src/components/sections/Services.jsx
import { useCallback } from "react";
import React from "react";
import {
  Mail, Package, Truck, ShoppingBag, ArrowRight,
  Shirt, Smartphone, Sparkles, Home, Footprints, Boxes,
} from "lucide-react";

const STEPS = [
  {
    id: "create",
    num: "01",
    title: "Remplissez le formulaire",
    desc: "Renseignez les informations de votre colis sur notre site ou via l'application."
  },
  {
    id: "pay",
    num: "02",
    title: "Payez en ligne",
    desc: "Choisissez votre mode de paiement : en ligne, à la collecte ou à la livraison."
  },
  {
    id: "deliver",
    num: "03",
    title: "Nous livrons votre colis",
    desc: "Le colis est livré à l'adresse de votre choix."
  }
];

const PRICING_PLANS = [
  {
    id: "docs",
    icon: <Mail size={30} strokeWidth={1.5} color="#1E3A8A" />,
    name: "Documents",
    price: "Tarif fixe",
    desc: "Lettres, documents administratifs, courriers",
    features: ["Poids inférieur à 500g"],
    button: "Effectuez un envoi",
    type: "default"
  },
  {
    id: "colis10",
    icon: <Package size={30} strokeWidth={1.5} color="#1E3A8A" />,
    name: "Colis -10kg",
    price: "Devis",
    desc: "Vêtements, chaussures, Électronique légère...",
    features: ["Jusqu'à 10 kg"],
    button: "Obtenir un devis",
    type: "popular"
  },
  {
    id: "colis20",
    icon: <Truck size={30} strokeWidth={1.5} color="#1E3A8A" />,
    name: "Colis +10kg",
    price: "Devis",
    desc: "Gros colis, électroménagers, mobiliers...",
    features: ["Collecte à domicile"],
    button: "Obtenir un devis",
    type: "default"
  }
];

const BOUTIQUE_STEPS = [
  {
    num: "01",
    title: "Parcourez nos rayons et sélectionnez vos produits",
    desc: ""
  },
  {
    num: "02",
    title: "Validez votre panier",
    desc: "Règlement possible par Orange Money ou Wave."
  },
  {
    num: "03",
    title: "Programmez vos livraisons",
    desc: "Recevez directement votre commande à l'adresse de votre choix."
  }
];

const CATEGORIES = [
  { icon: <Shirt size={26} strokeWidth={1.5} color="white" />, label: "Mode & Textile" },
  { icon: <Smartphone size={26} strokeWidth={1.5} color="white" />, label: "Électronique" },
  { icon: <Sparkles size={26} strokeWidth={1.5} color="white" />, label: "Beauté & Soins" },
  { icon: <Home size={26} strokeWidth={1.5} color="white" />, label: "Maison & Déco" },
  { icon: <Footprints size={26} strokeWidth={1.5} color="white" />, label: "Chaussures" },
  { icon: <Boxes size={26} strokeWidth={1.5} color="white" />, label: "Vente en gros" },
];

const Services = ({ scrollTo }) => {
  const handleClick = useCallback(() => { scrollTo("contact"); }, [scrollTo]);

  return (
    <section id="services" className="section">
      <div className="bg-shape bg1"></div>
      <div className="bg-shape bg2"></div>

      <div className="container">

        {/* HEADER */}
        <div className="section-header sr">
          <div className="section-tag">
            <span className="tag-line"></span>
            Nos services
          </div>
        </div>

        {/* ===== EXPEDITION ===== */}
        <div className="service-card-wrapper glass-card sr">

          <div className="card-left yellow-main">
            <div className="card-title-row">
              <div className="card-icon-circle blue-bg">
                <Package size={28} strokeWidth={1.5} color="white" />
              </div>
              <div>
                <h3 className="card-main-title blue-text">Expédiez votre colis</h3>
              </div>
            </div>

            {/* Comment ça marche */}
            <div className="inner-section">
              <div className="inner-tag blue-text">
                <span className="inner-tag-line blue-bg"></span>
                COMMENT ÇA MARCHE ?
              </div>
              <div className="steps-row">
                {STEPS.map((step, i) => (
                  <div key={step.id} className="step-wrapper">
                    <div className="step-card white-card">
                      <div className="step-num blue-bg">Étape {i + 1}</div>
                      <p className="step-title blue-text">{step.title}</p>
                      <p className="step-desc dark-text">{step.desc}</p>
                    </div>
                    {i < STEPS.length - 1 && <div className="step-arrow"><ArrowRight size={22} strokeWidth={2.5} className="blue-text" /></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Nos tarifs */}
            <div className="inner-section">
              <div className="inner-tag blue-text">
                <span className="inner-tag-line blue-bg"></span>
                NOS TARIFS
              </div>
              <div className="pricing-row">
                {PRICING_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`pricing-card ${plan.type === "popular" ? "popular-card" : "white-card"}`}
                  >
                    {plan.type === "popular" && (
                      <div className="popular-badge">LE + POPULAIRE</div>
                    )}
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

          {/* RIGHT promo expédition */}
          <div className="card-right promo-side">
            <div className="promo-box expedition-gradient">
              <p className="promo-desc expedition-desc">
                Envoyez vos colis depuis la France vers le Sénégal avec collecte à domicile ou dépôt en point relais.
              </p>
              <button className="promo-btn expedition-btn" onClick={handleClick}>
                En savoir plus →
              </button>
            </div>
          </div>
        </div>

        {/* ===== BOUTIQUE ===== */}
        <div className="service-card-wrapper boutique-wrapper glass-card sr" style={{ marginTop: "60px" }}>

          {/* LEFT promo boutique */}
          <div className="card-right promo-side">
            <div className="promo-box boutique-gradient">
              <p className="promo-desc boutique-desc">
                Achetez vos produits préférés à prix discount
              </p>
              <button className="promo-btn boutique-btn" onClick={() => scrollTo("apps")}>
                Explorer nos rayons
              </button>
            </div>
          </div>

          <div className="card-left blue-dark-bg">
            <div className="card-title-row">
              <div className="card-icon-circle gold-bg">
                <ShoppingBag size={28} strokeWidth={1.5} color="#1E3A8A" />
              </div>
              <div>
                <h3 className="card-main-title white-text">Yobanté Boutique</h3>
              </div>
            </div>

            {/* Nos rayons */}
            <div className="inner-section">
              <div className="inner-tag white-text">
                <span className="inner-tag-line gold-bg"></span>
                NOS RAYONS
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

            {/* Parcours client */}
            <div className="inner-section">
              <div className="inner-tag white-text">
                <span className="inner-tag-line gold-bg"></span>
                PARCOURS CLIENT
              </div>
              <div className="steps-row">
                {BOUTIQUE_STEPS.map((step, i) => (
                  <div key={i} className="step-wrapper">
                    <div className="step-card boutique-step-card">
                      <div className="step-num gold-bg step-num-dark">Étape {i + 1}</div>
                      <p className="step-title boutique-step-title">{step.title}</p>
                      {step.desc && <p className="step-desc boutique-step-desc">{step.desc}</p>}
                    </div>
                    {i < BOUTIQUE_STEPS.length - 1 && <div className="step-arrow"><ArrowRight size={22} strokeWidth={2.5} className="gold-text" /></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        * { box-sizing: border-box; }

        .section {
          position: relative;
          padding: 100px 0;
          background:
            radial-gradient(circle at top left, #FDF3CC 0%, transparent 28%),
            radial-gradient(circle at bottom right, #C5D5F0 0%, transparent 32%),
            #f8fafc;
          overflow: hidden;
        }

        .bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.25;
          z-index: 0;
        }

        .bg1 { width: 320px; height: 320px; background: #1E3A8A; top: -90px; right: -90px; }
        .bg2 { width: 280px; height: 280px; background: #F5C518; bottom: -90px; left: -90px; }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HEADER */
        .section-header { text-align: center; margin-bottom: 56px; }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: #1E3A8A;
          letter-spacing: 2px;
          background: rgba(30,58,138,0.06);
          padding: 8px 16px;
          border-radius: 999px;
        }

        .tag-line { width: 20px; height: 2px; background: #F5C518; border-radius: 2px; }

        /* WRAPPERS */
        .service-card-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          border-radius: 30px;
          overflow: hidden;
          align-items: stretch;
          gap: 0;
        }

        .glass-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.45);
          box-shadow: 0 20px 60px rgba(30,58,138,0.1), 0 2px 0 rgba(255,255,255,0.8) inset;
        }

        .boutique-wrapper { grid-template-columns: 1fr 2fr; }

        .card-left {
          padding: 38px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .yellow-main { background: #F5C518; }
        .blue-dark-bg { background: linear-gradient(135deg, #1E3A8A 0%, #152E70 100%); }

        /* COLORS */
        .blue-text   { color: #1E3A8A; }
        .white-text  { color: white; }
        .gold-text   { color: #F5C518; }
        .dark-text   { color: #475569; }
        .blue-bg     { background: #1E3A8A; }
        .gold-bg     { background: #F5C518; }

        /* CARD TITLE */
        .card-title-row { display: flex; align-items: center; gap: 16px; }

        .card-icon-circle {
          width: 62px; height: 62px;
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 22px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }

        .card-main-title {
          font-size: 28px;
          font-weight: 900;
          line-height: 1.1;
        }

        /* INNER */
        .inner-section { display: flex; flex-direction: column; gap: 16px; }

        .inner-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .inner-tag-line { width: 18px; height: 2px; }

        /* STEPS */
        .steps-row { display: flex; gap: 16px; align-items: stretch; width: 100%; }

        .step-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        .step-card {
          width: 100%;
          min-height: 200px;
          padding: 26px 16px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          box-sizing: border-box;
        }

        .white-card {
          background: rgba(255,255,255,0.97);
          transition: all 0.28s cubic-bezier(0.34,1.3,0.64,1);
        }
        .white-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(30,58,138,0.14);
        }

        .boutique-step-card {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          transition: all 0.28s cubic-bezier(0.34,1.3,0.64,1);
        }
        .boutique-step-card:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,0.15);
          box-shadow: 0 14px 32px rgba(0,0,0,0.15);
        }

        .step-num {
          height: 30px;
          border-radius: 50px;
          padding: 0 14px;
          width: auto;
          white-space: nowrap;
          margin: 0 auto 12px;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 900; color: white;
          flex-shrink: 0;
        }

        .step-num-dark { color: #1E3A8A; }

        .step-title {
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 6px;
          min-height: 36px;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
        }

        .step-desc { font-size: 11px; line-height: 1.6; }

        .boutique-step-title { color: #ffffff !important; font-weight: 800; }
        .boutique-step-desc { color: rgba(255,255,255,0.85) !important; }

        .step-arrow {
          font-size: 32px; font-weight: 800;
          display: flex; align-items: center;
          user-select: none; flex-shrink: 0;
        }

        /* PRICING */
        .pricing-row {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          align-items: stretch;
        }

        .pricing-card {
          position: relative;
          border-radius: 20px;
          padding: 20px 14px;
          text-align: center;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .popular-card {
          background: linear-gradient(135deg, #ffffff 0%, #FDF3CC 100%);
          border: 2px solid #1E3A8A;
        }

        .popular-badge {
          position: absolute;
          top: -1px; left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #1E3A8A, #2a52c9);
          color: white;
          padding: 4px 28px;
          border-radius: 0 0 14px 14px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;
          z-index: 10;
          white-space: nowrap;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(30,58,138,0.25);
        }

        .plan-icon-container {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 8px; height: 36px;
        }

        .plan-name { font-size: 15px; font-weight: 900; }

        .plan-price-label {
          margin: 8px 0;
          font-size: 12px; font-weight: 700; color: #0f172a;
        }

        .plan-details-box {
          flex-grow: 1;
          display: flex; flex-direction: column;
          justify-content: flex-start;
          margin-bottom: 14px;
        }

        .plan-desc { font-size: 11px; line-height: 1.5; color: #475569; margin: 0; }
        .plan-feature { margin-top: 8px; font-size: 10px; font-weight: 700; color: #1E3A8A; }

        .plan-btn {
          margin-top: auto;
          width: 100%; border: none;
          padding: 11px; border-radius: 50px;
          background: linear-gradient(135deg, #1E3A8A, #2a52c9);
          color: white;
          font-size: 11px; font-weight: 800; cursor: pointer;
          flex-shrink: 0;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(30,58,138,0.25);
          letter-spacing: 0.3px;
        }
        .plan-btn:hover {
          background: linear-gradient(135deg, #152E70, #1E3A8A);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(30,58,138,0.35);
        }

        /* CATEGORIES */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
        }

        .category-pill {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 18px;
          padding: 14px 10px;
          text-align: center;
          backdrop-filter: blur(12px);
          transition: all 0.25s ease;
          cursor: default;
        }
        .category-pill:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(245,197,24,0.4);
          transform: translateY(-4px);
        }

        .cat-icon {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 8px; height: 28px;
        }

        .cat-label { font-size: 12px; font-weight: 700; color: white; }

        /* PROMO */
        .promo-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
        }

        .promo-box {
          width: 100%; max-width: 300px;
          border-radius: 24px;
          padding: 36px 26px;
          display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          text-align: center;
          box-sizing: border-box;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }

        .promo-box::before {
          content: "";
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          top: -70px; right: -70px;
        }

        .expedition-gradient { background: #F5C518; }
        .boutique-gradient   { background: linear-gradient(135deg, #1E3A8A 0%, #152E70 100%); }

        .promo-desc {
          font-size: 20px; line-height: 1.55;
          font-weight: 800; margin: 0; color: white;
        }

        .expedition-desc { color: #1E3A8A !important; }
        .boutique-desc { color: white !important; }

        .promo-btn {
          width: 100%; max-width: 260px;
          border: none; border-radius: 50px;
          padding: 15px 24px;
          font-size: 14px; font-weight: 800;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          letter-spacing: 0.2px;
        }

        .expedition-btn {
          background: #1E3A8A; color: white;
          box-shadow: 0 8px 24px rgba(30,58,138,0.35);
        }
        .expedition-btn:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 14px 32px rgba(30,58,138,0.45); }

        .boutique-btn {
          background: #F5C518; color: #1E3A8A;
          box-shadow: 0 8px 24px rgba(245,197,24,0.35);
        }
        .boutique-btn:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 14px 32px rgba(245,197,24,0.45); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .service-card-wrapper,
          .boutique-wrapper { grid-template-columns: 1fr; }
          .promo-side { min-height: 280px; }

          /* Expédition : promo passe en premier sur mobile */
          .service-card-wrapper:not(.boutique-wrapper) .card-left { order: 2; }
          .service-card-wrapper:not(.boutique-wrapper) .promo-side { order: 1; }
        }

        @media (max-width: 768px) {
          .section { padding: 80px 0; }
          .promo-box { max-width: 100%; }
          .card-left { padding: 26px 20px; }

          .steps-row { flex-direction: column; align-items: center; }
          .step-wrapper { width: 100%; flex-direction: column; }
          .step-card { width: 100%; max-width: 420px; height: auto; min-height: unset; }
          .step-arrow { transform: rotate(90deg); margin: 8px 0; }

          .pricing-row { grid-template-columns: 1fr; }
          .pricing-card { max-width: 380px; margin: 0 auto; width: 100%; }

          .categories-grid { grid-template-columns: repeat(2,1fr); }
          .promo-desc { font-size: 17px; }
          .promo-side { min-height: 250px; }
        }

        @media (max-width: 480px) {
          .section { padding: 64px 0; }
          .categories-grid { grid-template-columns: 1fr; }
          .card-main-title { font-size: 24px; }
          .card-left { padding: 22px 16px; gap: 22px; }
          .promo-box { padding: 32px 22px; gap: 20px; }
          .promo-desc { font-size: 15px; }
          .promo-btn { max-width: 220px; font-size: 13px; padding: 12px 18px; }
        }
      `}</style>
    </section>
  );
};

export default Services;

