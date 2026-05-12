const Contact = ({ scrollTo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé ! Nous vous répondrons sous 24h.');
  };

  return (
    <section id="contact" className="section alt">
      <div className="container contact-grid">
        <div>
          <div className="section-header">
            <div className="section-tag">
              <span className="tag-line"></span>
              Contact
            </div>
           
            <p>Notre équipe répond à toutes vos questions et organise vos expéditions dans les meilleurs délais.</p>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <div><span>Email : </span><a href="/cdn-cgi/l/email-protection#12717d7c66737167527b6d60636c76673c7460">contact@yobante.com</a></div>
            </div>
            <div className="contact-item">
              <span>💬</span>
              <div><span>WhatsApp : </span><a href="https://wa.me/33600000000">+33 6 00 00 00 00</a></div>
            </div>
            <div className="contact-item">
              <span>⏰</span>
              <div><span>Disponibilité : </span><div>Lundi – Samedi · 8h00 – 20h00</div></div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Avez-vous une question ?</h3>
          <p>Réponse garantie sous 24 heures.</p>
          <div className="form-row">
            <input type="text" placeholder="Prénom" required />
            <input type="text" placeholder="Nom" required />
          </div>
          <input type="email" placeholder="Email" required />
          <select>
            <option>Sélectionner un sujet</option>
            <option>Autres</option>
            <option>Demande de devis - Colis -10kg</option>
            <option>Demande de devis - Colis +10kg</option>
            <option>Envoi de documents</option>
            <option>Boutique en ligne</option>
          </select>
          <textarea placeholder="Décrivez votre demande (poids estimé, nature des objets...)" rows="4"></textarea>
          <button type="submit" className="submit-btn">Envoyer le message →</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;