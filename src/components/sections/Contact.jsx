// src/components/sections/Contact.jsx
import React, { useState } from 'react';

const Contact = ({ scrollTo }) => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'a741136d-b23e-4891-a8b4-c6f4f8210215',
          name: `${formData.prenom} ${formData.nom}`,
          email: formData.email,
          subject: formData.sujet,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ prenom: '', nom: '', email: '', sujet: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
                <a href="mailto:ibnouthiam69@gmail.com">ibnouthiam69@gmail.com</a>
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
                <input
                  type="text"
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
                  name="nom"
                  placeholder="Nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre adresse email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <select
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Sélectionner un sujet</option>
                <option value="Demande de devis - Colis -10kg">Demande de devis - Colis -10kg</option>
                <option value="Demande de devis - Colis +10kg">Demande de devis - Colis +10kg</option>
                <option value="Envoi de documents">Envoi de documents</option>
                <option value="Boutique en ligne">Boutique en ligne</option>
                <option value="Autres">Autres</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Décrivez votre demande (poids estimé, nature des objets...)"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Feedback messages */}
            {status === 'success' && (
              <div className="feedback success">
                ✅ Message envoyé ! On vous répond sous 24h.
              </div>
            )}
            {status === 'error' && (
              <div className="feedback error">
                ❌ Une erreur s'est produite. Réessayez ou contactez-nous par WhatsApp.
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi en cours...' : <>Envoyer le message <span>→</span></>}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .section { padding: 100px 0; }
        .alt { background-color: #f8fafc; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }

        .section-tag { display: flex; align-items: center; gap: 12px; color: #0059ff; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; font-size: 14px; margin-bottom: 20px; }
        .tag-line { width: 30px; height: 2px; background: #faf066; }
        .contact-title { font-size: 36px; color: #0059ff; font-weight: 800; margin-bottom: 20px; line-height: 1.2; }
        .contact-description { font-size: 16px; color: #64748b; line-height: 1.6; margin-bottom: 40px; }

        .contact-info-list { display: flex; flex-direction: column; gap: 24px; }
        .contact-item { display: flex; gap: 16px; align-items: flex-start; }
        .contact-icon { font-size: 24px; background: white; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .contact-text { display: flex; flex-direction: column; }
        .contact-text strong { color: #0059ff; font-size: 14px; }
        .contact-text a, .contact-text span { color: #475569; text-decoration: none; font-size: 16px; margin-top: 2px; }
        .contact-text a:hover { color: #0059ff; text-decoration: underline; }

        .form-container { background: white; padding: 40px; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
        .form-header { margin-bottom: 30px; }
        .form-header h3 { font-size: 22px; color: #0059ff; margin-bottom: 8px; }
        .form-header p { color: #94a3b8; font-size: 14px; }

        .form-group { margin-bottom: 16px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 0; }

        input, select, textarea { width: 100%; padding: 14px 20px; border: 1px solid #e2e8f0; border-radius: 12px; font-size: 15px; background: #fdfdfd; transition: all 0.3s; outline: none; font-family: inherit; }
        input:focus, select:focus, textarea:focus { border-color: #0059ff; box-shadow: 0 0 0 4px rgba(0,89,255,0.05); background: white; }

        .feedback { padding: 12px 16px; border-radius: 10px; font-size: 14px; font-weight: 500; margin-bottom: 16px; }
        .feedback.success { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }
        .feedback.error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }

        .submit-btn { width: 100%; padding: 16px; background: #0059ff; color: white; border: none; border-radius: 12px; font-weight: 700; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.3s; }
        .submit-btn:hover:not(:disabled) { background: #0059ff; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,89,255,0.2); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        @media (max-width: 968px) {
          .contact-grid { grid-template-columns: 1fr; gap: 50px; }
          .contact-title { font-size: 30px; }
          .form-container { padding: 30px 20px; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr; }
          .section { padding: 60px 0; }
        }
      `}</style>
    </section>
  );
};

export default Contact;