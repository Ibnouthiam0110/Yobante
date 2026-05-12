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
    title: "Paiement en ligne à la collecte ou au retrait",
    desc: "Réglez votre expédition directement depuis l'application."
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
  { num: "01", title: "Choisissez vos articles", desc: "Parcourez notre boutique et ajoutez vos articles au panier." },
  { num: "02", title: "Passez commande", desc: "Payez en ligne en toute sécurité depuis l'application." },
  { num: "03", title: "Recevez chez vous", desc: "Vos articles sont livrés directement à votre adresse au Sénégal." }
];

const CATEGORIES = [
  { icon: "👕", label: "Mode" },
  { icon: "📱", label: "Électronique" },
  { icon: "🏠", label: "Maison" },
  { icon: "💄", label: "Beauté" },
  { icon: "👟", label: "Chaussures" },
  { icon: "🎮", label: "Jeux & Loisirs" },
];

const Services = ({ scrollTo }) => {
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

        {/* ===== CARTE EXPÉDITION : 2/3 jaune + 1/3 blanc ===== */}
        <div className="service-card-wrapper">
          {/* Gauche 2/3 : jaune */}
          <div className="card-left yellow">
            <div className="card-title-row">
              <div className="card-icon-circle blue-circle">
                <span>📦</span>
              </div>
              <h3 className="card-main-title blue-text">Expédiez votre colis</h3>
            </div>

            {/* Comment ça marche */}
            <div className="inner-section">
              <div className="inner-tag">
                <span className="inner-tag-line"></span>
                Comment ça marche
              </div>
              <p className="inner-subtitle blue-text">Expédier un colis en 3 étapes simples.</p>

              <div className="steps-row">
                {STEPS.map((step, i) => (
                  <div key={step.id} className="step-wrapper">
                    <div className="step-card white-card">
                      <div className="step-num">{step.num}</div>
                      <p className="step-title blue-text">{step.title}</p>
                      <p className="step-desc">{step.desc}</p>
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
              <div className="inner-tag">
                <span className="inner-tag-line"></span>
                Tarification
              </div>

              <div className="pricing-row">
                {PRICING_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`pricing-card white-card ${plan.type === "popular" ? "popular-card" : ""}`}
                  >
                    {plan.type === "popular" && (
                      <span className="popular-badge">Populaire</span>
                    )}
                    <div className="plan-icon">{plan.icon}</div>
                    <p className="plan-name blue-text">{plan.name}</p>
                    <p className="plan-price">{plan.price}</p>
                    <p className="plan-desc">{plan.desc}</p>
                    {plan.features.map((f, i) => (
                      <p key={i} className="plan-feature">{f}</p>
                    ))}
                    <button className="plan-btn" onClick={handleClick}>
                      {plan.button}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Droite 1/3 : blanc */}
          <div className="card-right white">
            <div className="text-card expedition-card">
              <h4 className="text-card-title"></h4>
              <p className="text-card-desc">
                Envoyez vos colis depuis la France vers le Sénégal (vice-versa) avec collecte ou dépôt en point relais.
              </p>
              <button className="text-card-btn" onClick={handleClick}>En savoir plus →</button>
            </div>
          </div>
        </div>

        {/* ===== CARTE BOUTIQUE : 1/3 blanc gauche + 2/3 bleu droite ===== */}
        <div className="service-card-wrapper boutique-wrapper" style={{ marginTop: "100px" }}>

          {/* Gauche 1/3 : blanc */}
          <div className="card-right white boutique-left">
            <div className="text-card boutique-card">
              <h4 className="text-card-title boutique-card-title"></h4>
              <p className="text-card-desc boutique-card-desc">
                Achetez en France ou au Sénégal et recevez vos produits authentiques à prix discount. Vente en détail &amp; vente en gros.
              </p>
              <button className="text-card-btn boutique-card-btn" onClick={() => scrollTo("apps")}>Explorer →</button>
            </div>
          </div>

          {/* Droite 2/3 : bleu */}
          <div className="card-left blue-dark-bg">
            <div className="card-title-row">
              <div className="card-icon-circle yellow-circle">
                <span>🛍️</span>
              </div>
              <h3 className="card-main-title white-text">Boutique en ligne</h3>
            </div>

            {/* Catégories */}
            <div className="inner-section">
              <div className="inner-tag white-tag">
                <span className="inner-tag-line yellow-line"></span>
                Nos catégories
              </div>

              <div className="categories-grid">
                {CATEGORIES.map((cat, i) => (
                  <div key={i} className="category-card">
                    <span className="cat-icon">{cat.icon}</span>
                    <span className="cat-label">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment ça marche boutique */}
            <div className="inner-section">
              <div className="inner-tag white-tag">
                <span className="inner-tag-line yellow-line"></span>
                Comment ça marche
              </div>

              <div className="steps-row">
                {BOUTIQUE_STEPS.map((step, i, arr) => (
                  <div key={i} className="step-wrapper">
                    <div className="step-card dark-card">
                      <div className="step-num yellow-num">{step.num}</div>
                      <p className="step-title white-text">{step.title}</p>
                      <p className="step-desc light-text">{step.desc}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="step-arrow yellow-text">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button className="boutique-btn" onClick={() => scrollTo("apps")}>
              Explorer la boutique →
            </button>
          </div>
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

        /* ===== WRAPPER ===== */
        .service-card-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
        }

        .boutique-wrapper {
          grid-template-columns: 1fr 2fr;
        }

        /* ===== GAUCHE ===== */
        .card-left {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .yellow { background: #faf066; }
        .blue-dark-bg { background: #1a3a8f; }

        /* ===== DROITE ===== */
        .card-right {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          border-left: 1px solid #e5e7eb;
        }

        .white { background: #ffffff; }

        .boutique-left {
          border-left: none;
          border-right: 1px solid #e5e7eb;
        }

        /* ===== TITLE ROW ===== */
        .card-title-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .card-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .blue-circle { background: #1a3a8f; }
        .yellow-circle { background: #faf066; }

        .card-main-title {
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }

        /* ===== INNER SECTION ===== */
        .inner-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .inner-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #1a3a8f;
        }

        .white-tag {
          color: rgb(248, 244, 244);
        }

        .inner-tag-line {
          width: 18px;
          height: 2px;
          background: #1a3a8f;
        }

        .yellow-line { background: #faf066 !important; }

        .inner-subtitle {
          font-size: 15px;
          font-weight: 600;
          margin: 0;
        }

        /* ===== STEPS ===== */
        .steps-row {
          display: flex;
          align-items: stretch;
          gap: 6px;
        }

        .step-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
        }

        .step-card {
          flex: 1;
          border-radius: 14px;
          padding: 14px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
        }

        .white-card { background: #ffffff; }

        .dark-card {
          background: rgba(255, 255, 255, 0.99);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #1a3a8f;
          color: #faf066;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .yellow-num {
          background: #faf066;
          color: #1a3a8f;
        }

        .step-title {
          margin: 0;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
        }

        .step-desc {
          margin: 0;
          font-size: 11px;
          color: #ece7e7;
          line-height: 1.4;
        }

        .step-arrow {
          font-size: 18px;
          flex-shrink: 0;
        }

        /* ===== PRICING ===== */
        .pricing-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .pricing-card {
          border-radius: 14px;
          padding: 14px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4px;
          position: relative;
          border: 1px solid #e5e7eb;
        }

        .popular-card {
          border: 2px solid #faf066;
          background: #fffbe6;
        }

        .popular-badge {
          position: absolute;
          top: -10px;
          background: #faf066;
          color: #1a3a8f;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 20px;
        }

        .plan-icon { font-size: 24px; margin-bottom: 2px; }
        .plan-name { margin: 0; font-size: 13px; font-weight: 700; }
        .plan-price { margin: 0; font-size: 11px; font-weight: 600; color: #444; }
        .plan-desc { margin: 0; font-size: 10px; color: #666; line-height: 1.4; }
        .plan-feature { margin: 0; font-size: 10px; color: #888; }

        .plan-btn {
          margin-top: 6px;
          background: #1a3a8f;
          color: #faf066;
          border: none;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 600;
          cursor: pointer;
        }

        .plan-btn:hover { background: #0f2a66; }

        /* ===== CATEGORIES ===== */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .category-card {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 12px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-align: center;
        }

        .cat-icon { font-size: 22px; }
        .cat-label { font-size: 12px; font-weight: 600; color: #ffffff; }

        /* ===== BOUTIQUE BTN ===== */
        .boutique-btn {
          align-self: flex-start;
          background: #faf066;
          color: #1a3a8f;
          border: none;
          padding: 10px 24px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .boutique-btn:hover { opacity: 0.9; }

        /* ===== TEXT CARDS ===== */
        .text-card {
          border-radius: 20px;
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .expedition-card {
          background: linear-gradient(135deg, #1a3a8f 0%, #2a5abf 50%, #1a3a8f 100%);
          box-shadow: 0 8px 30px rgba(26, 58, 143, 0.35);
        }

        .boutique-card {
          background: linear-gradient(135deg, #faf066 0%, #faf066 50%, #faf066 100%);
          box-shadow: 0 8px 30px rgba(255, 199, 44, 0.4);
        }

        .text-card-title {
          font-size: 18px;
          font-weight: 700;
          margin: 0;
          color: #faf066;
        }

        .boutique-card-title {
          color: #1a3a8f;
        }

        .text-card-desc {
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
          color: rgba(255, 255, 255, 0.95);
        }

        .boutique-card-desc {
          color: #1a3a8f;
        }

        .text-card-btn {
          background: #faf066;
          color: #1a3a8f;
          border: none;
          padding: 10px 24px;
          border-radius: 40px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 4px;
        }

        .text-card-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .boutique-card-btn {
          background: #1a3a8f;
          color: #faf066;
        }

        /* ===== RIGHT PANEL TEXT ===== */
        .right-big-text {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
        }

        .yellow-on-white { color: #faf066; }

        .boutique-sub-text {
          font-size: 15px;
          font-weight: 500;
          color: #1a3a8f;
          line-height: 1.7;
          margin: 0;
        }

        /* ===== COLORS ===== */
        .blue-text { color: #1a3a8f; }
        .white-text { color: #ffffff; }
        .yellow-text { color: #faf066; }
        .light-text { color: rgba(255, 255, 255, 0.8); }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 900px) {
          .service-card-wrapper,
          .boutique-wrapper {
            grid-template-columns: 1fr;
          }

          .boutique-left {
            border-right: none;
            border-bottom: 1px solid #e5e7eb;
          }

          .card-right {
            border-left: none;
            border-top: 1px solid #e5e7eb;
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
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .card-left, .card-right {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;