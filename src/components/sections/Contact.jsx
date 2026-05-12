// src/components/sections/Contact.jsx
import React from 'react';

const Contact = ({ scrollTo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé ! Notre équipe vous répondra sous 24h.');
  };

  return (
    <section id="contact" className="section alt">
      <div className="container contact-grid">
        
        {/* Colonne de gauche : Infos */}
        <div className="contact-details">
          <div className="section-header">
            <div className="section-tag">
              <span className="tag-line"></span>
              Contact
            </div>
            <h2 className="contact-title">Parlons de votre projet d'envoi</h2>
            <p className="contact-description">
              Notre équipe répond à toutes vos questions et organise vos expéditions dans les meilleurs délais vers le Sénégal.
            </p>
          </div>

          <div className="contact-info-list">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-text">
                <strong>Email</strong>
                <a href="mailto:contact@yobante.com">contact@yobante.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">💬</span>
              <div className="contact-text">
                <strong>WhatsApp</strong>
                <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer">+33 6 00 00 00 00</a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div className="contact-text">
                <strong>Disponibilité</strong>
                <span>Lundi – Samedi • 8h00 – 20h00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne de droite : Formulaire */}
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Avez-vous une question ?</h3>
              <p>Réponse garantie sous 24 heures.</p>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Prénom" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Nom" required />
              </div>
            </div>

            <div className="form-group">
              <input type="email" placeholder="Votre adresse email" required />
            </div>

            <div className="form-group">
              <select required defaultValue="">
                <option value="" disabled>Sélectionner un sujet</option>
                <option value="devis-petit">Demande de devis - Colis -10kg</option>
                <option value="devis-grand">Demande de devis - Colis +10kg</option>
                <option value="documents">Envoi de documents</option>
                <option value="boutique">Boutique en ligne</option>
                <option value="autres">Autres</option>
              </select>
            </div>

            <div className="form-group">
              <textarea 
                placeholder="Décrivez votre demande (poids estimé, nature des objets...)" 
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Envoyer le message <span>→</span>
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 100px 0;
        }

        .alt {
          background-color: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        /* --- Infos de gauche --- */
        .section-tag {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #1a3a8f;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .tag-line {
          width: 30px;
          height: 2px;
          background: #faf066;
        }

        .contact-title {
          font-size: 36px;
          color: #1a3a8f;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .contact-description {
          font-size: 16px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .contact-icon {
          font-size: 24px;
          background: white;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .contact-text {
          display: flex;
          flex-direction: column;
        }

        .contact-text strong {
          color: #1a3a8f;
          font-size: 14px;
        }

        .contact-text a, .contact-text span {
          color: #475569;
          text-decoration: none;
          font-size: 16px;
          margin-top: 2px;
        }

        .contact-text a:hover {
          color: #1a3a8f;
          text-decoration: underline;
        }

        /* --- Formulaire de droite --- */
        .form-container {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
        }

        .form-header {
          margin-bottom: 30px;
        }

        .form-header h3 {
          font-size: 22px;
          color: #1a3a8f;
          margin-bottom: 8px;
        }

        .form-header p {
          color: #94a3b8;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        input, select, textarea {
          width: 100%;
          padding: 14px 20px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-size: 15px;
          background: #fdfdfd;
          transition: all 0.3s;
          outline: none;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #1a3a8f;
          box-shadow: 0 0 0 4px rgba(26, 58, 143, 0.05);
          background: white;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: #1a3a8f;
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s;
        }

        .submit-btn:hover {
          background: #152e72;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(26, 58, 143, 0.2);
        }

        /* --- Responsivité --- */
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .contact-title {
            font-size: 30px;
          }
          .form-container {
            padding: 30px 20px;
          }
        }

        @media (max-width: 480px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .section {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;