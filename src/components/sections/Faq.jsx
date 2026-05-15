// src/components/sections/Faq.jsx
import { useState } from 'react';

const faqs = [
  { 
    q: "Quels objets puis-je envoyer ?", 
    a: "Documents, vêtements, chaussures, produits alimentaires, appareils électroniques et électroménagers, cosmétiques, jouets, produit lessiviel et mobilier. Les produits inflammables et armes sont strictement interdits." 
  },
  { 
    q: "Comment obtenir un devis ?", 
    a: "Téléchargez l'application Yobante et saisissez les informations de votre colis. Selon la catégorie, une réponse vous sera apportée immédiatement ou sous 24h par notre équipe commerciale." 
  },
  { 
    q: "Quel est le délai de livraison ?", 
    a: "Comptez 2 à 4 jours ouvrés entre la France et le Sénégal par fret aérien, et environ 5 à 7 semaines pour les envois par fret maritime (bateau)." 
  },
  { 
    q: "Comment suivre mon colis ?", 
    a: "Un numéro de suivi unique vous est communiqué dès l'expédition. Vous pouvez consulter le statut de votre colis en temps réel directement via l'onglet suivi de notre application mobile." 
  },
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
      stroke={open ? '#ffffff' : 'currentColor'}
      strokeWidth="2"
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
          Vos questions, <em>nos réponses.</em>
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
                  style={{ 
                    maxHeight: open ? '200px' : '0',
                    opacity: open ? 1 : 0 
                  }}
                >
                  <p className="faq-body-inner">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 80px 0;
          background: #ffffff;
        }

        .faq-container {
          max-width: 850px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .faq-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00BFFF;
          margin-bottom: 16px;
        }

        .faq-tag-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #faf066;
        }

        .faq-title {
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 800;
          color: #00BFFF;
          line-height: 1.2;
          margin: 0 0 48px;
        }

        .faq-title em {
          font-style: normal;
          color: #00BFFF;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 15px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s ease;
          border-radius: 12px;
        }

        .faq-btn:hover {
          background: #faf066;
        }

        .faq-num {
          font-size: 14px;
          font-weight: 700;
          color: #94a3b8;
          min-width: 30px;
          transition: color 0.2s ease;
        }

        .faq-q {
          flex: 1;
          font-size: 17px;
          font-weight: 700;
          color: #00BFFF;
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .faq-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          transition: all 0.3s ease;
          color: #00BFFF;
        }

        .faq-arrow.open {
          background: #00BFFF;
          border-color: #00BFFF;
          color: #ffffff;
        }

        .faq-btn:hover .faq-arrow {
          border-color: #ffffff;
        }

        .faq-body {
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-body-inner {
          margin: 0;
          padding: 0 40px 24px 65px;
          font-size: 15px;
          line-height: 1.6;
          color: #475569;
        }

        @media (max-width: 640px) {
          .faq-body-inner {
            padding: 0 15px 20px 50px;
          }
          .faq-btn {
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Faq;