const Footer = ({ scrollTo }) => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo-text">YOBAN<span>TÉ</span></div>
          <p>Votre spécialiste de l'expédition de colis et du e-commerce entre la France et le Sénégal.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><button onClick={() => scrollTo('services')}>Expédition</button></li>
            <li><button onClick={() => scrollTo('services')}>Boutique</button></li>
            <li><button onClick={() => scrollTo('tarifs')}>Tarifs</button></li>
          </ul>
        </div>
        <div>
          <h4>Entreprise</h4>
          <ul>
            <li><button onClick={() => scrollTo('faq')}>FAQ</button></li>
            <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
            <li><button>Recrutement</button></li>
          </ul>
        </div>
        <div>
          <h4>Légal</h4>
          <ul>
            <li><button>Mentions légales</button></li>
            <li><button>CGV</button></li>
            <li><button>Confidentialité</button></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 YOBANTÉ. Tous droits réservés.</span>
        <div>
          <button>Mentions légales</button>
          <button>CGV</button>
          <button>Confidentialité</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;