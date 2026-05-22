// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, Phone, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ prenom: '', nom: '', email: '', sujet: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY || 'a741136d-b23e-4891-a8b4-c6f4f8210215';
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
        setFormData({ prenom: '', nom: '', email: '', sujet: '', message: '' });
      } else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <div className="container">
        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-details sr-l">
            <div className="section-tag">
              <span className="tag-line"></span>
              Contact
            </div>
            <h2 className="contact-title">Contactez-nous</h2>
            <p className="contact-description">
              Notre service client est disponible pour répondre à toutes vos questions.
            </p>

            <div className="contact-info-list">
              <div className="contact-item">
                <div className="contact-icon"><Phone size={22} strokeWidth={1.5} color="#1e3a8a" /></div>
                <div className="contact-text">
                  <strong>Téléphone</strong>
                  <a href="tel:+33600000000">+33 6 00 00 00 00</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MessageCircle size={22} strokeWidth={1.5} color="#1e3a8a" /></div>
                <div className="contact-text">
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer">
                    +33 6 00 00 00 00
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Mail size={22} strokeWidth={1.5} color="#1e3a8a" /></div>
                <div className="contact-text">
                  <strong>Email</strong>
                  <a href="mailto:ibnouthiam69@gmail.com">ibnouthiam69@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Clock size={22} strokeWidth={1.5} color="#1e3a8a" /></div>
                <div className="contact-text">
                  <strong>Disponibilité</strong>
                  <span>Lundi – Samedi • 8h – 20h</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="form-wrapper sr-r">
            <div className="form-glow"></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Avez-vous une question ?</h3>
                <p>Notre équipe vous répondra dans les plus brefs délais.</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="prenom" placeholder="Prénom"
                    value={formData.prenom} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="text" name="nom" placeholder="Nom"
                    value={formData.nom} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <input type="email" name="email" placeholder="Votre adresse email"
                  value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <select name="sujet" value={formData.sujet} onChange={handleChange} required>
                  <option value="" disabled hidden>Sélectionner un sujet</option>
                  <option value="Demande de devis - Colis -10kg">Demande de devis - Colis -10kg</option>
                  <option value="Demande de devis - Colis +10kg">Demande de devis - Colis +10kg</option>
                  <option value="Envoi de documents">Envoi de documents</option>
                  <option value="Boutique en ligne">Boutique en ligne</option>
                  <option value="Autres">Autres</option>
                </select>
              </div>

              <div className="form-group">
                <textarea name="message" rows="4" placeholder="Décrivez votre demande..."
                  value={formData.message} onChange={handleChange} required></textarea>
              </div>

              {status === 'success' && (
                <div className="feedback success">
                  <CheckCircle size={15} strokeWidth={2} style={{ marginRight: '7px', verticalAlign: 'middle' }} />
                  Message envoyé avec succès.
                </div>
              )}

              {status === 'error' && (
                <div className="feedback error">
                  <XCircle size={15} strokeWidth={2} style={{ marginRight: '7px', verticalAlign: 'middle' }} />
                  Une erreur s'est produite.
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi en cours...' : (
                  <>Envoyer le message<ArrowRight size={16} strokeWidth={2} style={{ marginLeft: '8px', verticalAlign: 'middle' }} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          position: relative; overflow: hidden;
          padding: 100px 0; background: #f8fbff;
        }

        .container {
          position: relative; z-index: 5;
          max-width: 1250px; margin: 0 auto; padding: 0 24px;
        }

        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.15fr;
          gap: 70px; align-items: center;
        }

        .bg-glow {
          position: absolute; border-radius: 50%;
          filter: blur(120px); opacity: 0.3;
        }

        .glow-1 { width: 400px; height: 400px; background: #1e3a8a; top: -90px; left: -90px; }
        .glow-2 { width: 320px; height: 320px; background: #D4A820; bottom: -90px; right: -70px; }

        .section-tag {
          display: inline-flex; align-items: center; gap: 12px;
          color: #1e3a8a; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; margin-bottom: 20px; font-size: 12px;
        }

        .tag-line { width: 28px; height: 2px; background: #D4A820; }

        .contact-title {
          font-size: clamp(32px, 4.5vw, 52px);
          line-height: 1.12; color: #1e3a8a; font-weight: 900; margin-bottom: 18px;
        }

        .contact-description {
          color: #64748b; font-size: 16px; line-height: 1.75;
          margin-bottom: 36px; max-width: 440px;
        }

        .contact-info-list { display: flex; flex-direction: column; gap: 16px; }

        .contact-item {
          display: flex; align-items: center; gap: 16px;
          padding: 16px;
          background: rgba(255,255,255,0.72);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(6px);
          box-shadow: 0 12px 30px rgba(0,0,0,.05);
        }

        .contact-icon {
          width: 52px; height: 52px; border-radius: 16px;
          background: white; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,.05); flex-shrink: 0;
        }

        .contact-text { display: flex; flex-direction: column; }

        .contact-text strong { color: #1e3a8a; font-size: 14px; margin-bottom: 3px; }

        .contact-text a,
        .contact-text span {
          color: #475569; text-decoration: none; font-size: 15px;
        }

        .contact-text a:hover { color: #1e3a8a; }

        /* FORM */
        .form-wrapper {
          position: relative; overflow: hidden;
          background: rgba(255,255,255,.88);
          backdrop-filter: blur(18px);
          border-radius: 30px; padding: 38px;
          border: 1px solid rgba(255,255,255,.6);
          box-shadow: 0 16px 44px rgba(30,58,138,.08);
        }

        .form-glow {
          position: absolute; width: 240px; height: 240px;
          background: rgba(30,58,138,.08); border-radius: 50%;
          filter: blur(70px); top: -90px; right: -70px;
        }

        .form-header { margin-bottom: 26px; }

        .form-header h3 { color: #1e3a8a; font-size: 24px; font-weight: 900; margin-bottom: 6px; }
        .form-header p  { color: #94a3b8; font-size: 14px; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-group { margin-bottom: 14px; }

        input, select, textarea {
          width: 100%; padding: 14px 16px; border: none;
          border-radius: 14px; background: #f8fafc;
          font-size: 14px; outline: none; transition: 0.25s;
          font-family: inherit;
          border: 1px solid transparent;
        }

        input:focus, select:focus, textarea:focus {
          background: white;
          border-color: #1e3a8a;
          box-shadow: 0 0 0 3px rgba(30,58,138,.08);
        }

        textarea { resize: none; }

        .feedback {
          padding: 12px 14px; border-radius: 12px;
          margin-bottom: 14px; font-size: 13px; font-weight: 600;
        }

        .success { background: #ecfdf5; color: #166534; }
        .error   { background: #fef2f2; color: #991b1b; }

        .submit-btn {
          width: 100%; border: none; padding: 16px; border-radius: 16px;
          background: #1e3a8a; color: white;
          font-size: 15px; font-weight: 800; cursor: pointer;
          transition: 0.3s ease;
          box-shadow: 0 10px 22px rgba(30,58,138,.2);
        }

        .submit-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(30,58,138,.28); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        @media (max-width: 980px) { .contact-grid { grid-template-columns: 1fr; gap: 52px; } }

        @media (max-width: 520px) {
          .contact-section { padding: 76px 0; }
          .form-wrapper { padding: 26px 18px; }
          .form-row { grid-template-columns: 1fr; }
          .contact-title { font-size: 38px; }
          .form-header h3 { font-size: 22px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
