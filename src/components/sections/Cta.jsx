const Cta = ({ scrollTo }) => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <h2>Prêt à envoyer votre premier colis ?</h2>
        <p>Rejoignez des milliers de familles et d'entreprises qui font confiance à YOBANTÉ.</p>
        <div className="cta-buttons">
          <button className="cta-primary" onClick={() => scrollTo('contact')}>Commencer maintenant</button>
          <button className="cta-secondary" onClick={() => scrollTo('apps')}>Télécharger l'application</button>
        </div>
      </div>
    </section>
  );
};

export default Cta;