import { memo } from "react";

/* ---------- DATA ---------- */

const PRICING_PLANS = [
  {
    id: "docs",
    icon: "📄",
    name: "Documents",
    price: "Tarif fixe",
    desc: "Lettres, documents administratifs, courriers",
    features: ["Poids inférieur à 500g", "Suivi inclus"],
    button: "Demander un envoi",
    type: "default"
  },
  {
    id: "colis10",
    icon: "📦",
    name: "Colis -10kg",
    price: "Devis sous 24h",
    desc: "Vêtements, chaussures, électronique légère",
    features: ["Jusqu'à 10 kg", "Assurance incluse", "Suivi GPS"],
    button: "Obtenir un devis",
    type: "popular"
  },
  {
    id: "colis20",
    icon: "🚚",
    name: "Colis +10kg",
    price: "Devis sous 24h",
    desc: "Gros envois, électroménagers, meubles",
    features: ["Collecte à domicile", "Assurance premium", "Gestionnaire dédié"],
    button: "Obtenir un devis",
    type: "default"
  }
];

/* ---------- CARD ---------- */

const PricingCard = memo(({ plan, onClick }) => {
  return (
    <article className={`pricing-card ${plan.type === "popular" ? "popular" : ""}`}>

      {plan.type === "popular" && (
        <div className="badge">Populaire</div>
      )}

      <div className="icon">{plan.icon}</div>

      <h3>{plan.name}</h3>

      <div className="price">{plan.price}</div>

      <p>{plan.desc}</p>

      <ul>
        {plan.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <button onClick={onClick}>
        {plan.button}
      </button>

    </article>
  );
});

/* ---------- MAIN ---------- */

const Pricing = ({ scrollTo }) => {

  const handleClick = () => {
    scrollTo("contact");
  };

  return (
    <section id="tarifs" className="section">
      <div className="container">

        {/* header */}
        <header className="section-header">
          <div className="section-tag">
            <span className="tag-line"></span>
            Tarification
          </div>

        </header>

        {/* grid */}
        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onClick={handleClick}
            />
          ))}
        </div>

      </div>

      <style jsx>{`
        .section {
          padding: 90px 0;
          background: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #1a3a8f;
        }

        .tag-line {
          width: 28px;
          height: 2px;
          background: #FFC72C;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 44px);
          color: #1a3a8f;
          line-height: 1.2;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        /* card */
        .pricing-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 20px;
          padding: 28px;
          text-align: center;
          transition: 0.2s ease;
        }

        .pricing-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .popular {
          border: 2px solid #FFC72C;
          position: relative;
        }

        .badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: #FFC72C;
          padding: 4px 10px;
          font-size: 12px;
          border-radius: 12px;
          font-weight: 600;
        }

        .icon {
          font-size: 40px;
          margin-bottom: 10px;
        }

        h3 {
          color: #1a3a8f;
          margin-bottom: 6px;
        }

        .price {
          font-weight: 700;
          margin-bottom: 10px;
        }

        p {
          font-size: 14px;
          color: #666;
          margin-bottom: 12px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }

        li {
          font-size: 13px;
          margin-bottom: 6px;
          color: #444;
        }

        button {
          background: #1a3a8f;
          color: #fff;
          border: none;
          padding: 10px 18px;
          border-radius: 50px;
          cursor: pointer;
        }

        button:hover {
          background: #0f2a66;
        }
      `}</style>
    </section>
  );
};

export default Pricing;