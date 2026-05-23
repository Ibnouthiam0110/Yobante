// src/components/sections/Faq.jsx
import { useState } from 'react';

const faqs = [
  {
    q: "Quels objets puis-je envoyer ?",
    a: "Documents, vêtements, chaussures, produits alimentaires, appareils électroniques, électroménagers, cosmétiques, jouets, produits lessiviels et mobilier. Les produits inflammables et les armes sont strictement interdits."
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Téléchargez l'application Yobanté Rêk puis renseignez les informations de votre colis. Selon la catégorie, un devis vous sera transmis rapidement."
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
          background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
        }

        .faq-section::before {
          content: '';
          position: absolute;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%);
          top: -100px; right: -120px;
          pointer-events: none;
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
        .faq-list { display: flex; flex-direction: column; gap: 14px; }

        .faq-item {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid rgba(0,0,0,.055);
          box-shadow: 0 2px 12px rgba(0,0,0,.03);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease;
        }

        .faq-item:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(30,58,138,.07); }

        .faq-item.open {
          border-color: rgba(30,58,138,.22);
          box-shadow: 0 10px 32px rgba(30,58,138,.08);
          transform: translateY(-2px);
        }

        /* BUTTON */
        .faq-btn {
          width: 100%; border: none; background: transparent;
          padding: 22px 26px;
          display: flex; align-items: center; gap: 18px;
          cursor: pointer; text-align: left;
        }

        .faq-number {
          min-width: 46px; height: 46px; border-radius: 14px;
          background: linear-gradient(135deg, rgba(30,58,138,.1), rgba(30,58,138,.06));
          color: #1E3A8A;
          display: flex; align-items: center; justify-content: center;
          font-weight: 900; font-size: 14px;
          border: 1px solid rgba(30,58,138,.1);
          flex-shrink: 0;
        }

        .faq-item.open .faq-number {
          background: linear-gradient(135deg, #1E3A8A, #2a52c9);
          color: white; border-color: transparent;
          box-shadow: 0 4px 14px rgba(30,58,138,.28);
        }

        .faq-question {
          flex: 1; color: #0f172a;
          font-size: 16.5px; font-weight: 700; line-height: 1.45;
        }

        .faq-icon {
          min-width: 36px; width: 36px; height: 36px; border-radius: 50%;
          background: #f1f5ff; color: #1E3A8A;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s;
          flex-shrink: 0;
        }

        .faq-item.open .faq-icon {
          transform: rotate(135deg);
          background: #1E3A8A; color: white;
          box-shadow: 0 4px 12px rgba(30,58,138,.3);
        }

        /* ANSWER */
        .faq-answer-wrapper { width: 100%; }

        .faq-answer {
          padding: 0 26px 22px 90px;
          color: #475569; line-height: 1.75; font-size: 15px;
          border-top: 1px solid rgba(30,58,138,.06);
          margin-top: -2px;
          padding-top: 16px;
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

