// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, Phone, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '' });
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
          telephone: formData.telephone,
          subject: formData.sujet,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '' });
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
                  <a href="mailto:yobante@gmail.com">yobante@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Clock size={22} strokeWidth={1.5} color="#1e3a8a" /></div>
                <div className="contact-text">
                  <strong>Disponibilité</strong>
                  <span>Lundi – Samedi · 8h – 20h</span>
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
                <div className="phone-input-wrapper">
                  <span className="phone-prefix">
                    <Phone size={14} strokeWidth={2} />
                  </span>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Votre numéro de téléphone ou WhatsApp"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="phone-input"
                  />
                </div>
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
        .glow-2 { width: 320px; height: 320px; background: #F5C518; bottom: -90px; right: -70px; }

        .section-tag {
          display: inline-flex; align-items: center; gap: 12px;
          color: #1e3a8a; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; margin-bottom: 20px; font-size: 12px;
        }

        .tag-line { width: 28px; height: 2px; background: #F5C518; }

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
          padding: 16px 18px;
          background: rgba(255,255,255,0.82);
          border-radius: 20px;
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.6);
          transition: transform 0.28s cubic-bezier(0.34,1.3,0.64,1), box-shadow 0.28s ease;
        }

        .contact-item:hover {
          transform: translateX(8px);
          box-shadow: 0 12px 32px rgba(30,58,138,.09);
          border-color: rgba(30,58,138,.12);
        }

        .contact-icon {
          width: 54px; height: 54px; border-radius: 16px;
          background: linear-gradient(135deg, #EEF2FF, white);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 18px rgba(30,58,138,.08); flex-shrink: 0;
          border: 1px solid rgba(30,58,138,.08);
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
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(20px);
          border-radius: 30px; padding: 38px;
          border: 1px solid rgba(255,255,255,.7);
          box-shadow: 0 20px 56px rgba(30,58,138,.1);
        }

        .form-glow {
          position: absolute; width: 240px; height: 240px;
          background: rgba(30,58,138,.08); border-radius: 50%;
          filter: blur(70px); top: -90px; right: -70px;
        }

        .form-header { margin-bottom: 26px; }

        .form-header h3 { color: #1e3a8a; font-size: 24px; font-weight: 900; margin-bottom: 6px; }
        .form-header p  { color: #94a3b8; font-size: 14px; margin-bottom: 14px; }

        .form-contact-shortcuts {
          display: flex; gap: 10px; flex-wrap: wrap;
        }

        .shortcut-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 14px; border-radius: 50px;
          font-size: 13px; font-weight: 700;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .shortcut-btn:hover { opacity: 0.85; }

        .shortcut-phone { background: rgba(30,58,138,.1); color: #1e3a8a; }
        .shortcut-wa    { background: rgba(37,211,102,.15); color: #15803d; }

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

        /* PHONE INPUT */
        .phone-input-wrapper {
          display: flex; align-items: center;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px solid transparent;
          transition: 0.25s;
          overflow: hidden;
        }

        .phone-input-wrapper:focus-within {
          background: white;
          border-color: #1e3a8a;
          box-shadow: 0 0 0 3px rgba(30,58,138,.08);
        }

        .phone-prefix {
          display: flex; align-items: center; justify-content: center;
          padding: 0 14px;
          color: #25D366;
          flex-shrink: 0;
        }

        .phone-input {
          flex: 1; border: none !important;
          background: transparent !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          padding: 14px 16px 14px 4px !important;
        }

        .phone-input:focus {
          background: transparent !important;
          border-color: transparent !important;
          box-shadow: none !important;
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
          background: linear-gradient(135deg, #1e3a8a 0%, #2a52c9 100%);
          color: white;
          font-size: 15px; font-weight: 800; cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 28px rgba(30,58,138,.25);
          letter-spacing: 0.2px;
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

