// src/components/sections/Faq.jsx
import { useState } from 'react';

const faqs = [
  {
    q: "Quels objets puis-je envoyer ?",
    a: "Documents, vêtements, chaussures, produits alimentaires, appareils électroniques, électroménagers, cosmétiques, jouets, produits lessiviels et mobilier. Les produits inflammables et les armes sont strictement interdits."
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Téléchargez l'application YOBANTÉ puis renseignez les informations de votre colis. Selon la catégorie, un devis vous sera transmis immédiatement ou sous 24h."
  },
  {
    q: "Quel est le délai de livraison ?",
    a: "Le fret aérien prend généralement entre 2 et 4 jours ouvrés entre la France et le Sénégal. Le fret maritime nécessite environ 5 à 7 semaines."
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Nous acceptons les paiements mobiles, cartes bancaires et certains moyens de paiement locaux selon votre pays."
  }
];

const PlusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: 18,
      height: 18
    }}
  >
    <path
      d="M12 5V19"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggle = (i) => {
    setActiveFaq(activeFaq === i ? null : i);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        
        {/* HEADER */}
        <div className="faq-header">
          <div className="faq-tag">
            <span className="faq-dot"></span>
            Questions fréquentes
          </div>

          <h2 className="faq-title">
            Vos questions, <span>nos réponses.</span>
          </h2>

          <p className="faq-description">
            Retrouvez ici toutes les réponses concernant les expéditions,
            les livraisons et l’utilisation de nos applications YOBANTÉ.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((faq, i) => {
            const open = activeFaq === i;

            return (
              <div
                key={i}
                className={`faq-item ${open ? 'open' : ''}`}
              >
                <button
                  className="faq-btn"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                >
                  {/* NUMBER */}
                  <div className="faq-number">
                    0{i + 1}
                  </div>

                  {/* QUESTION */}
                  <div className="faq-question">
                    {faq.q}
                  </div>

                  {/* ICON */}
                  <div className="faq-icon">
                    <PlusIcon />
                  </div>
                </button>

                {/* ANSWER */}
                {open && (
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Le bloc style est désormais bien englobé par le parent unique <section> */}
      <style jsx>{`
        .faq-section {
          position: relative;
          overflow: hidden;
          padding: 100px 0;
          background: #ffffff;
        }

        .faq-container {
          position: relative;
          z-index: 5;
          max-width: 950px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ===== HEADER ===== */
        .faq-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .faq-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 191, 255, 0.08);
          color: #00BFFF;
          border-radius: 999px;
          padding: 10px 18px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .faq-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #faf066;
        }

        .faq-title {
          font-size: clamp(32px, 4.5vw, 54px);
          line-height: 1.15;
          font-weight: 800;
          color: #00BFFF;
          margin-bottom: 20px;
        }

        .faq-title span {
          color: #0099dd;
        }

        .faq-description {
          max-width: 650px;
          margin: 0 auto;
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
        }

        /* ===== FAQ LIST ===== */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-item.open {
          border-color: rgba(0, 191, 255, 0.25);
          box-shadow: 0 10px 30px rgba(0, 191, 255, 0.05);
        }

        /* ===== BUTTON ===== */
        .faq-btn {
          width: 100%;
          border: none;
          background: transparent;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          text-align: left;
        }

        .faq-number {
          min-width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(0, 191, 255, 0.08);
          color: #00BFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 15px;
        }

        .faq-question {
          flex: 1;
          color: #0f172a;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
        }

        .faq-icon {
          min-width: 40px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f8fafc;
          color: #00BFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Animation de rotation du plus en croix */
        .faq-item.open .faq-icon {
          transform: rotate(135deg);
          background: #00BFFF;
          color: white;
        }

        /* ===== ANSWER ===== */
        .faq-answer-wrapper {
          width: 100%;
        }

        .faq-answer {
          padding: 0 28px 24px 96px;
          color: #475569;
          line-height: 1.7;
          font-size: 15px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .faq-section {
            padding: 80px 0;
          }

          .faq-btn {
            padding: 20px;
            gap: 16px;
          }

          .faq-question {
            font-size: 16px;
          }

          .faq-answer {
            padding: 0 20px 20px 84px;
          }
        }

        @media (max-width: 520px) {
          .faq-title {
            font-size: 28px;
          }

          .faq-btn {
            align-items: center;
          }

          .faq-number {
            min-width: 40px;
            height: 40px;
            border-radius: 10px;
            font-size: 13px;
          }

          .faq-answer {
            padding: 0 20px 20px 20px;
          }

          .faq-icon {
            min-width: 36px;
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default Faq;