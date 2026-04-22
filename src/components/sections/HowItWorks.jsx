// src/components/sections/HowItWorks.jsx

import { memo } from "react";

/* ---------- DATA ---------- */

const STEPS = [
  {
    id: "create",
    num: "01",
    title: "Créez votre envoi",
    desc: "Remplissez les informations de votre colis sur notre site ou via l'application."
  },
  {
    id: "drop",
    num: "02",
    title: "Déposez ou collecte",
    desc: "Déposez en point relais ou demandez une collecte à domicile."
  },
  {
    id: "pay",
    num: "03",
    title: "Payez en ligne",
    desc: "Réglez votre expédition directement depuis l'application."
  },
  {
    id: "deliver",
    num: "04",
    title: "Livraison à domicile",
    desc: "Le colis est livré à l'adresse du destinataire au Sénégal."
  }
];

/* ---------- ARROW ---------- */

const Arrow = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="var(--yellow)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- STEP CARD ---------- */

const StepCard = memo(({ num, title, desc }) => {
  return (
    <article className="step-card">
      <div className="step-number">{num}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
});

/* ---------- MAIN ---------- */

const HowItWorks = () => {
  return (
    <section id="process" className="section">
      <div className="container">

        {/* header */}
        <header className="section-header">
          <div className="section-tag">
            <span className="tag-line"></span>
            Comment ça marche
          </div>

          <h2 className="section-title">
            Expédier un colis<br />
            en 4 étapes simples.
          </h2>
        </header>

        {/* steps */}
        <ol className="steps">
          {STEPS.map((step, i) => (
            <li key={step.id} className="step-item">

              <StepCard {...step} />

              {i < STEPS.length - 1 && (
                <div className="arrow">
                  <Arrow />
                </div>
              )}

            </li>
          ))}
        </ol>

      </div>

      <style jsx>{`
        .section {
          padding: 90px 0;
          background: var(--gray-light);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          margin-bottom: 50px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--blue-dark);
        }

        .tag-line {
          width: 28px;
          height: 2px;
          background: var(--yellow);
        }

        .section-title {
          font-size: clamp(28px, 4vw, 46px);
          color: var(--blue-dark);
          line-height: 1.2;
          margin-top: 10px;
        }

        /* steps layout */
        .steps {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
          flex-wrap: wrap;
        }

        .step-item {
          display: flex;
          align-items: center;
        }

        /* card */
        .step-card {
          background: #fff;
          padding: 28px 22px;
          border-radius: 18px;
          width: 240px;
          text-align: center;
          border: 1px solid #eee;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          will-change: transform;
        }

        .step-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
          border-color: var(--yellow);
        }

        .step-number {
          width: 52px;
          height: 52px;
          margin: 0 auto 16px;
          border-radius: 50%;
          background: var(--blue-dark);
          color: var(--yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .step-card h3 {
          font-size: 16px;
          margin-bottom: 10px;
          color: var(--blue-dark);
        }

        .step-card p {
          font-size: 13px;
          color: #666;
          line-height: 1.5;
        }

        /* arrow */
        .arrow {
          margin: 0 6px;
          animation: move 1.8s infinite;
        }

        @keyframes move {
          0%, 100% { transform: translateX(0); opacity: 0.6; }
          50% { transform: translateX(6px); opacity: 1; }
        }

        /* responsive */
        @media (max-width: 900px) {
          .steps {
            flex-direction: column;
          }

          .step-item {
            flex-direction: column;
          }

          .arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;