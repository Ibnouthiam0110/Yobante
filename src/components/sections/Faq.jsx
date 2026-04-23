import { useState } from 'react';

const faqs = [
  { q: "Quels objets puis-je envoyer ?", a: "Documents, vêtements, chaussures, produits alimentaires, appareils électroniques et électroménagers, cosmétiques, jouets, produit lessiviel et mobilier. Les produits inflammables et armes sont interdits." },
  { q: "Comment obtenir un devis ?", a: "Télécharger l'application Yobante et répondez aux informations demandées. Selon la demande de catégorie de votre colis une réponse vous sera apportée de façon immédiate ou sous 24h." },
  { q: "Quel est le délai de livraison ?", a: "2 à 4 jours ouvrés entre la France et le Sénégal par avion et 5 à 7 semaines par bateau." },
  { q: "Comment suivre mon colis ?", a: "Un numéro de suivi unique vous est communiqué dès l'expédition. Vous pouvez le consulter en temps réel directement sur notre application mobile." },
];

const PlusIcon = ({ open }) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: 14,
      height: 14,
      transition: 'transform 0.3s ease',
      transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
    }}
  >
    <path
      d="M7 1v12M1 7h12"
      stroke={open ? '#fff' : 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggle = (i) => setActiveFaq(activeFaq === i ? null : i);

  return (
    <section id="faq" className="section">
      <div className="container faq-container">

        <div className="faq-tag">
          <span className="faq-tag-dot" />
          Questions fréquentes
        </div>

        <h2 className="faq-title">
          Vos questions,<br />
          <em>nos réponses.</em>
        </h2>

        <div className="faq-list">
          {faqs.map((faq, i) => {
            const open = activeFaq === i;
            return (
              <div key={i} className={`faq-item ${open ? 'open' : ''}`}>
                <button
                  className="faq-btn"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                >
                  <span className="faq-num">0{i + 1}</span>
                  <span className="faq-q">{faq.q}</span>
                  <span className={`faq-arrow ${open ? 'open' : ''}`}>
                    <PlusIcon open={open} />
                  </span>
                </button>

                <div
                  className="faq-body"
                  style={{ maxHeight: open ? 300 : 0 }}
                >
                  <p className="faq-body-inner">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-container {
          max-width: 780px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .faq-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--blue, #185FA5);
          margin-bottom: 12px;
        }

        .faq-tag-dot {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--blue, #185FA5);
        }

        .faq-title {
          font-size: clamp(26px, 4vw, 36px);
          font-weight: 700;
          color: var(--blue-dark, #1a2540);
          line-height: 1.2;
          margin: 0 0 48px;
        }

        .faq-title em {
          font-style: normal;
          color: var(--blue, #185FA5);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          transition: background 0.2s ease;
        }

        /* ✅ Fond jaune au survol de toute la question ✅ */
        .faq-btn:hover {
          background: var(--yellow, #FFC72C);
          border-radius: 12px;
        }

        .faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 4px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s ease, border-radius 0.2s ease;
        }

        /* Changement de couleur du texte au survol */
        .faq-btn:hover .faq-q {
          color: var(--blue-dark, #1a2540);
        }

        .faq-btn:hover .faq-num {
          color: var(--blue-dark, #1a2540);
        }

        /* Changement du cercle au survol */
        .faq-btn:hover .faq-arrow {
          background: var(--white);
          border-color: var(--white);
        }

        .faq-num {
          font-size: 12px;
          font-weight: 600;
          color: #aaa;
          min-width: 24px;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }

        .faq-q {
          flex: 1;
          font-size: 16px;
          font-weight: 600;
          color: var(--blue-dark, #1a2540);
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .faq-item.open .faq-q,
        .faq-btn:hover .faq-q {
          color: var(--blue-dark, #1a2540);
        }

        .faq-arrow {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--blue-dark, #1a2540);
          background: #f5f5f5;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .faq-arrow.open {
          background: var(--blue, #185FA5);
          border-color: var(--blue, #185FA5);
          color: #fff;
        }

        .faq-body {
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-body-inner {
          margin: 0;
          padding: 0 4px 22px 40px;
          font-size: 15px;
          line-height: 1.7;
          color: #666;
        }
      `}</style>
    </section>
  );
};

export default Faq;