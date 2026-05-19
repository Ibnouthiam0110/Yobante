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
    q: "Comment suivre mon colis ?",
    a: "Un numéro de suivi vous est communiqué dès l’expédition. Vous pouvez suivre votre colis directement depuis l’application mobile YOBANTÉ."
  },

  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Nous acceptons les paiements mobiles, cartes bancaires et certains moyens de paiement locaux selon votre pays."
  },
];

const PlusIcon = ({ open }) => (

  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: 18,
      height: 18,
      transition: 'transform .35s ease',
      transform: open
        ? 'rotate(45deg)'
        : 'rotate(0deg)',
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

    setActiveFaq(
      activeFaq === i
        ? null
        : i
    );

  };

  return (

    <section
      id="faq"
      className="faq-section"
    >

      {/* GLOWS */}

      <div className="faq-glow glow-1"></div>
      <div className="faq-glow glow-2"></div>

      <div className="faq-container">

        {/* HEADER */}

        <div className="faq-header">

          <div className="faq-tag">

            <span className="faq-dot"></span>

            Questions fréquentes

          </div>

          <h2 className="faq-title">

            Vos questions,
            <span> nos réponses.</span>

          </h2>

          <p className="faq-description">

            Retrouvez ici toutes les réponses
            concernant les expéditions,
            les livraisons et l’utilisation
            de nos applications YOBANTÉ.

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

                  <div
                    className={`faq-icon ${open ? 'open' : ''}`}
                  >

                    <PlusIcon open={open} />

                  </div>

                </button>

                {/* ANSWER */}

                <div
                  className="faq-answer-wrapper"
                  style={{
                    maxHeight: open
                      ? '250px'
                      : '0px',

                    opacity: open
                      ? 1
                      : 0,
                  }}
                >

                  <div className="faq-answer">

                    {faq.a}

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

      <style jsx>{`

        .faq-section{
          position:relative;
          overflow:hidden;
          padding:120px 0;
          background:#ffffff;
        }

        .faq-container{
          position:relative;
          z-index:5;
          max-width:950px;
          margin:0 auto;
          padding:0 24px;
        }

        /* ===== GLOWS ===== */

        .faq-glow{
          position:absolute;
          border-radius:50%;
          filter:blur(120px);
          opacity:.18;
        }

        .glow-1{
          width:300px;
          height:300px;
          background:#00BFFF;
          top:-120px;
          left:-100px;
        }

        .glow-2{
          width:250px;
          height:250px;
          background:#faf066;
          bottom:-80px;
          right:-80px;
        }

        /* ===== HEADER ===== */

        .faq-header{
          text-align:center;
          margin-bottom:60px;
        }

        .faq-tag{
          display:inline-flex;
          align-items:center;
          gap:10px;
          background:
            rgba(0,191,255,.08);

          color:#00BFFF;
          border-radius:999px;
          padding:10px 18px;
          font-size:13px;
          font-weight:800;
          letter-spacing:.6px;
          text-transform:uppercase;
          margin-bottom:24px;
        }

        .faq-dot{
          width:8px;
          height:8px;
          border-radius:50%;
          background:#faf066;
          box-shadow:
            0 0 10px #faf066;
        }

        .faq-title{
          font-size:
            clamp(38px,5vw,64px);

          line-height:1.1;
          font-weight:900;
          color:#00BFFF;
          margin-bottom:22px;
        }

        .faq-title span{
          color:#0099dd;
        }

        .faq-description{
          max-width:650px;
          margin:0 auto;
          color:#64748b;
          font-size:17px;
          line-height:1.8;
        }

        /* ===== FAQ LIST ===== */

        .faq-list{
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .faq-item{
          background:white;
          border-radius:28px;
          overflow:hidden;
          border:1px solid rgba(0,0,0,.05);
          transition:.35s ease;
          box-shadow:
            0 10px 30px rgba(0,0,0,.03);
        }

        .faq-item.open{
          border-color:
            rgba(0,191,255,.18);

          box-shadow:
            0 20px 40px rgba(0,191,255,.08);
        }

        .faq-item:hover{
          transform:translateY(-4px);
        }

        /* ===== BUTTON ===== */

        .faq-btn{
          width:100%;
          border:none;
          background:transparent;
          padding:26px 28px;
          display:flex;
          align-items:center;
          gap:22px;
          cursor:pointer;
          text-align:left;
        }

        .faq-number{
          min-width:52px;
          height:52px;
          border-radius:18px;
          background:
            rgba(0,191,255,.08);

          color:#00BFFF;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:900;
          font-size:15px;
        }

        .faq-question{
          flex:1;
          color:#0f172a;
          font-size:18px;
          font-weight:800;
          line-height:1.5;
        }

        .faq-icon{
          min-width:46px;
          width:46px;
          height:46px;
          border-radius:50%;
          background:#f8fafc;
          color:#00BFFF;
          display:flex;
          align-items:center;
          justify-content:center;
          transition:.35s ease;
        }

        .faq-icon.open{
          background:#00BFFF;
          color:white;
          transform:rotate(180deg);
        }

        /* ===== ANSWER ===== */

        .faq-answer-wrapper{
          overflow:hidden;
          transition:
            max-height .45s ease,
            opacity .35s ease;
        }

        .faq-answer{
          padding:
            0 34px 30px 102px;

          color:#475569;
          line-height:1.8;
          font-size:15px;
        }

        /* ===== RESPONSIVE ===== */

        @media(max-width:768px){

          .faq-section{
            padding:90px 0;
          }

          .faq-btn{
            padding:22px 20px;
            gap:16px;
          }

          .faq-question{
            font-size:16px;
          }

          .faq-answer{
            padding:
              0 20px 24px 88px;
          }

        }

        @media(max-width:520px){

          .faq-title{
            font-size:42px;
          }

          .faq-btn{
            align-items:flex-start;
          }

          .faq-number{
            min-width:44px;
            height:44px;
            border-radius:14px;
            font-size:13px;
          }

          .faq-answer{
            padding:
              0 20px 24px 20px;
          }

          .faq-icon{
            min-width:40px;
            width:40px;
            height:40px;
          }

        }

      `}</style>

    </section>

  );

};

export default Faq;