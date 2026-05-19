// src/components/sections/Cta.jsx

import React from 'react';

const Cta = ({ scrollTo }) => {

  return (

    <section className="cta-section">

      {/* BACKGROUND GLOWS */}

      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      {/* FLOATING CIRCLES */}

      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="floating-circle circle-3"></div>

      <div className="container">

        <div className="cta-content">

          {/* BADGE */}

          <div className="cta-badge">

            <span className="badge-dot"></span>

            Livraison • Expédition • Shopping

          </div>

          {/* TITLE */}

          <h2 className="cta-title">

            Prêt à acheter vos produits
            ou expédier vos colis ?

          </h2>

          {/* DESCRIPTION */}

          <p className="cta-description">

            Rejoignez des centaines de clients
            qui font confiance à

            <strong> YOBANTÉ </strong>

            pour leurs achats et expéditions
            entre la France et le Sénégal.

          </p>

          {/* BUTTONS */}

          <div className="cta-buttons">

           

    <button
  className="cta-btn secondary"
  onClick={() => scrollTo('hero')}
>
  Télécharger nos applications
</button>
          </div>

          {/* TRUST */}

          <div className="cta-trust">

            <div className="trust-item">
              +50 colis livrés
            </div>

            <div className="trust-item">
               Envois sécurisés
            </div>

            <div className="trust-item">
               Support rapide
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`

        .cta-section{
          position:relative;
          overflow:hidden;
          padding:130px 0;
          background:
            linear-gradient(
              135deg,
              #00BFFF 0%,
              #0099dd 100%
            );
          text-align:center;
          color:white;
        }

        .container{
          position:relative;
          z-index:5;
          max-width:1200px;
          margin:0 auto;
          padding:0 24px;
        }

        .cta-content{
          max-width:850px;
          margin:0 auto;
        }

        /* ===== GLOWS ===== */

        .glow{
          position:absolute;
          border-radius:50%;
          filter:blur(120px);
          opacity:.25;
          animation:floatGlow 8s ease-in-out infinite;
        }

        .glow-1{
          width:450px;
          height:450px;
          background:#faf066;
          top:-150px;
          left:-120px;
        }

        .glow-2{
          width:380px;
          height:380px;
          background:white;
          bottom:-120px;
          right:-100px;
        }

        @keyframes floatGlow{

          0%{
            transform:translate(0,0);
          }

          50%{
            transform:translate(50px,-30px);
          }

          100%{
            transform:translate(0,0);
          }

        }

        /* ===== FLOATING ELEMENTS ===== */

        .floating-circle{
          position:absolute;
          border-radius:50%;
          border:1px solid rgba(255,255,255,.12);
          animation:floatCircle 12s linear infinite;
        }

        .circle-1{
          width:120px;
          height:120px;
          top:20%;
          left:8%;
        }

        .circle-2{
          width:180px;
          height:180px;
          bottom:10%;
          right:8%;
          animation-duration:16s;
        }

        .circle-3{
          width:70px;
          height:70px;
          top:15%;
          right:20%;
          animation-duration:10s;
        }

        @keyframes floatCircle{

          0%{
            transform:translateY(0px);
          }

          50%{
            transform:translateY(-25px);
          }

          100%{
            transform:translateY(0px);
          }

        }

        /* ===== BADGE ===== */

        .cta-badge{
          display:inline-flex;
          align-items:center;
          gap:10px;
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.15);
          backdrop-filter:blur(14px);
          padding:12px 18px;
          border-radius:999px;
          margin-bottom:28px;
          font-size:14px;
          font-weight:700;
          letter-spacing:.3px;
        }

        .badge-dot{
          width:10px;
          height:10px;
          border-radius:50%;
          background:#faf066;
          box-shadow:
            0 0 12px #faf066;
        }

        /* ===== TITLE ===== */

        .cta-title{
          font-size:clamp(38px,5vw,68px);
          line-height:1.08;
          font-weight:900;
          margin-bottom:24px;
        }

        /* ===== DESCRIPTION ===== */

        .cta-description{
          max-width:720px;
          margin:0 auto 42px;
          font-size:18px;
          line-height:1.8;
          color:rgba(255,255,255,.9);
        }

        .cta-description strong{
          color:#faf066;
        }

        /* ===== BUTTONS ===== */

        .cta-buttons{
          display:flex;
          justify-content:center;
          gap:18px;
          flex-wrap:wrap;
          margin-bottom:46px;
        }

        .cta-btn{
          border:none;
          border-radius:999px;
          padding:18px 34px;
          font-size:16px;
          font-weight:800;
          cursor:pointer;
          transition:.35s ease;
          display:flex;
          align-items:center;
          gap:12px;
        }

        .cta-btn:hover{
          transform:translateY(-5px);
        }

        .primary{
          background:#faf066;
          color:#00BFFF;
          box-shadow:
            0 12px 24px rgba(250,240,102,.3);
        }

        .primary:hover{
          box-shadow:
            0 20px 40px rgba(250,240,102,.45);
        }

        .secondary{
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(14px);
          color:white;
          border:1px solid rgba(255,255,255,.18);
        }

        .secondary:hover{
          background:rgba(255,255,255,.15);
        }

        .btn-icon{
          font-size:20px;
          transition:.3s;
        }

        .primary:hover .btn-icon{
          transform:translateX(6px);
        }

        /* ===== TRUST ===== */

        .cta-trust{
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:18px;
        }

        .trust-item{
          background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.12);
          backdrop-filter:blur(12px);
          padding:14px 18px;
          border-radius:18px;
          font-size:14px;
          font-weight:600;
          color:rgba(255,255,255,.9);
          transition:.35s ease;
        }

        .trust-item:hover{
          transform:translateY(-4px);
          background:rgba(255,255,255,.14);
        }

        /* ===== RESPONSIVE ===== */

        @media(max-width:768px){

          .cta-section{
            padding:100px 0;
          }

          .cta-buttons{
            flex-direction:column;
            align-items:center;
          }

          .cta-btn{
            width:100%;
            justify-content:center;
          }

        }

        @media(max-width:520px){

          .cta-title{
            font-size:42px;
          }

          .cta-description{
            font-size:16px;
          }

          .cta-trust{
            flex-direction:column;
          }

        }

      `}</style>

    </section>

  );

};

export default Cta;