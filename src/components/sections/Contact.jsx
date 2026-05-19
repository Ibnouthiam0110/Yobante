// src/components/sections/Contact.jsx

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY || 'a741136d-b23e-4891-a8b4-c6f4f8210215';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: `${formData.prenom} ${formData.nom}`,
          email: formData.email,
          subject: formData.sujet,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          sujet: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* BACKGROUND GLOW (STATIQUE) */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="container">
        <div className="contact-grid">
          {/* LEFT */}
          <div className="contact-details">
            <div className="section-tag">
              <span className="tag-line"></span>
              Contact
            </div>

            <h2 className="contact-title">Parlons de vos projets</h2>

            <p className="contact-description">
              Notre équipe répond à toutes vos questions concernant les achats,
              livraisons et expéditions entre la France et le Sénégal.
            </p>

            {/* INFO CARDS */}
            <div className="contact-info-list">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <strong>Email</strong>
                  <a href="mailto:ibnouthiam69@gmail.com">
                    ibnouthiam69@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div className="contact-text">
                  <strong>WhatsApp</strong>
                  <a
                    href="https://wa.me/33600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +33 6 00 00 00 00
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div className="contact-text">
                  <strong>Disponibilité</strong>
                  <span>Lundi – Samedi • 8h – 20h</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="form-wrapper">
            <div className="form-glow"></div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Avez-vous une question ?</h3>
                <p>Réponse garantie sous 24 heures.</p>
              </div>

              {/* ROW */}
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    placeholder="Prénom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre adresse email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* SUBJECT */}
              <div className="form-group">
                <select
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    Sélectionner un sujet
                  </option>
                  <option value="Demande de devis - Colis -10kg">
                    Demande de devis - Colis -10kg
                  </option>
                  <option value="Demande de devis - Colis +10kg">
                    Demande de devis - Colis +10kg
                  </option>
                  <option value="Envoi de documents">Envoi de documents</option>
                  <option value="Boutique en ligne">Boutique en ligne</option>
                  <option value="Autres">Autres</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Décrivez votre demande..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* FEEDBACK */}
              {status === 'success' && (
                <div className="feedback success">
                  ✅ Message envoyé avec succès.
                </div>
              )}

              {status === 'error' && (
                <div className="feedback error">
                  ❌ Une erreur s'est produite.
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message →'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Le bloc style est maintenant bien à l'intérieur du parent unique <section> */}
      <style jsx>{`
        .contact-section {
          position: relative;
          overflow: hidden;
          padding: 120px 0;
          background: #f8fbff;
        }
        .container {
          position: relative;
          z-index: 5;
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 80px;
          align-items: center;
        }
        .bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.35;
        }
        .glow-1 {
          width: 450px;
          height: 450px;
          background: #00bfff;
          top: -100px;
          left: -100px;
        }
        .glow-2 {
          width: 350px;
          height: 350px;
          background: #faf066;
          bottom: -100px;
          right: -80px;
        }
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #00bfff;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
          font-size: 14px;
        }
        .tag-line {
          width: 32px;
          height: 2px;
          background: #faf066;
        }
        .contact-title {
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.1;
          color: #00bfff;
          font-weight: 900;
          margin-bottom: 22px;
                }
        .contact-description {
          color: #64748b;
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 42px;
          max-width: 500px;
        }
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 22px;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: 0.35s ease;
        }
        .contact-item:hover {
          transform: translateX(8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
        }
        .contact-icon {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        .contact-text {
          display: flex;
          flex-direction: column;
        }
        .contact-text strong {
          color: #00bfff;
          font-size: 15px;
          margin-bottom: 4px;
        }
        .contact-text a,
        .contact-text span {
          color: #475569;
          text-decoration: none;
          font-size: 16px;
        }
        .contact-text a:hover {
          color: #00bfff;
        }
        .form-wrapper {
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(18px);
          border-radius: 34px;
          padding: 42px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }
        .form-glow {
          position: absolute;
          width: 260px;
          height: 260px;
          background: rgba(0, 191, 255, 0.12);
          border-radius: 50%;
          filter: blur(80px);
          top: -100px;
          right: -80px;
        }
        .form-header {
          margin-bottom: 32px;
        }
        .form-header h3 {
          color: #00bfff;
          font-size: 28px;
          font-weight: 900;
          margin-bottom: 8px;
        }
        .form-header p {
          color: #94a3b8;
          font-size: 15px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group {
          margin-bottom: 18px;
        }
        input,
        select,
        textarea {
          width: 100%;
          padding: 16px 18px;
          border: none;
          border-radius: 16px;
          background: #f8fafc;
          font-size: 15px;
          outline: none;
          transition: 0.3s;
          font-family: inherit;
          border: 1px solid transparent;
        }
        input:focus,
        select:focus,
        textarea:focus {
          background: white;
          border-color: #00bfff;
          box-shadow: 0 0 0 4px rgba(0, 191, 255, 0.08);
        }
        textarea {
          resize: none;
        }
        .feedback {
          padding: 14px 16px;
          border-radius: 14px;
          margin-bottom: 18px;
          font-size: 14px;
          font-weight: 600;
        }
        .success {
          background: #ecfdf5;
          color: #166534;
        }
        .error {
          background: #fef2f2;
          color: #991b1b;
        }
        .submit-btn {
          width: 100%;
          border: none;
          padding: 18px;
          border-radius: 18px;
          background: #00bfff;
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: 0.35s ease;
          box-shadow: 0 12px 24px rgba(0, 191, 255, 0.22);
        }
        .submit-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 191, 255, 0.3);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        @media (max-width: 980px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
        @media (max-width: 520px) {
          .contact-section {
            padding: 80px 0;
          }
          .form-wrapper {
            padding: 28px 20px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-title {
            font-size: 42px;
          }
          .form-header h3 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;