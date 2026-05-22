// src/components/sections/Faq.jsx
import { useState } from 'react';

const faqs = [
  {
    q: "Quels objets puis-je envoyer ?",
    a: "Documents, vêtements, chaussures, produits alimentaires, appareils électroniques, électroménagers, cosmétiques, jouets, produits lessiviels et mobilier. Les produits inflammables et les armes sont strictement interdits."
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Téléchargez l'application YOBANTÉ puis renseignez les informations de votre colis. Selon la catégorie, un devis vous sera transmis rapidement."
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    a: "Nous acceptons Orange Money, Wave ainsi que les autres moyens de paiement disponibles lors de la validation de la commande."
  }
];

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 17, height: 17 }}>
    <path d="M12 5V19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggle = (i) => { setActiveFaq(activeFaq === i ? null : i); };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header sr">
          <div className="faq-tag">
            <span className="faq-dot"></span>
            Questions fréquentes
          </div>
          <h2 className="faq-title">
            Vos questions, <span>nos réponses.</span>
          </h2>
          <p className="faq-description">
            Retrouvez ici toutes les réponses concernant les expéditions,
            les livraisons et l'utilisation de nos applications YOBANTÉ.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((faq, i) => {
            const open = activeFaq === i;
            return (
              <div key={i} className={`faq-item ${open ? 'open' : ''}`}>
                <button className="faq-btn" onClick={() => toggle(i)} aria-expanded={open}>
                  <div className="faq-number">0{i + 1}</div>
                  <div className="faq-question">{faq.q}</div>
                  <div className="faq-icon"><PlusIcon /></div>
                </button>
                {open && (
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer">{faq.a}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        .faq-section {
          position: relative; overflow: hidden;
          padding: 90px 0;
          background: #ffffff;
        }

        .faq-container {
          position: relative; z-index: 5;
          max-width: 880px; margin: 0 auto; padding: 0 24px;
        }

        /* HEADER */
        .faq-header { text-align: center; margin-bottom: 44px; }

        .faq-tag {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(30,58,138,.07);
          color: #1E3A8A;
          border-radius: 999px;
          padding: 9px 16px;
          font-size: 12px; font-weight: 800;
          letter-spacing: 0.6px; text-transform: uppercase;
          margin-bottom: 20px;
        }

        .faq-dot {
          width: 7px; height: 7px;
          border-radius: 50%; background: #F5C518;
        }

        .faq-title {
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.18; font-weight: 800;
          color: #1E3A8A; margin-bottom: 16px;
        }

        .faq-title span { color: #152E70; }

        .faq-description {
          max-width: 580px; margin: 0 auto;
          color: #64748b; font-size: 16px; line-height: 1.7;
        }

        /* FAQ LIST */
        .faq-list { display: flex; flex-direction: column; gap: 13px; }

        .faq-item {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,.06);
          box-shadow: 0 3px 16px rgba(0,0,0,.02);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-item.open {
          border-color: rgba(30,58,138,.2);
          box-shadow: 0 8px 28px rgba(30,58,138,.06);
        }

        /* BUTTON */
        .faq-btn {
          width: 100%; border: none; background: transparent;
          padding: 22px 26px;
          display: flex; align-items: center; gap: 18px;
          cursor: pointer; text-align: left;
        }

        .faq-number {
          min-width: 44px; height: 44px; border-radius: 13px;
          background: rgba(30,58,138,.07); color: #1E3A8A;
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 14px;
        }

        .faq-question {
          flex: 1; color: #0f172a;
          font-size: 17px; font-weight: 700; line-height: 1.4;
        }

        .faq-icon {
          min-width: 38px; width: 38px; height: 38px; border-radius: 50%;
          background: #f8fafc; color: #1E3A8A;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
        }

        .faq-item.open .faq-icon {
          transform: rotate(135deg);
          background: #1E3A8A; color: white;
        }

        /* ANSWER */
        .faq-answer-wrapper { width: 100%; }

        .faq-answer {
          padding: 0 26px 20px 88px;
          color: #475569; line-height: 1.7; font-size: 15px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .faq-section { padding: 72px 0; }
          .faq-btn { padding: 18px 20px; gap: 14px; }
          .faq-question { font-size: 15px; }
          .faq-answer { padding: 0 20px 18px 78px; }
        }

        @media (max-width: 520px) {
          .faq-title { font-size: 26px; }
          .faq-btn { align-items: center; }
          .faq-number { min-width: 38px; height: 38px; border-radius: 10px; font-size: 13px; }
          .faq-answer { padding: 0 18px 18px 18px; }
          .faq-icon { min-width: 34px; width: 34px; height: 34px; }
        }
      `}</style>
    </section>
  );
};

export default Faq;

