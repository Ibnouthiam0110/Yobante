export const siteContent = {
  hero: {
    badge: "Service actif — France → Sénégal",
    title: "Vos colis entre la France et le Sénégal.",
    subtitle: "YOBANTÉ vous propose un service d'expédition fiable et transparent, ainsi qu'une boutique en ligne pour envoyer et recevoir ce qui compte le plus.",
    stats: [
      { value: "5k+", label: "Colis livrés" },
      { value: "7–14j", label: "Délai moyen" },
      { value: "7j/7", label: "Support" }
    ]
  },
  services: [
    { id: "expedition", num: "01", title: "Expédition de colis", description: "Envoyez vos colis depuis la France vers le Sénégal. Collecte à domicile ou dépôt en point relais.", link: "pricing", icon: "package" },
    { id: "boutique", num: "02", title: "Boutique en ligne", description: "Achetez des produits sélectionnés en France et faites-les livrer directement à vos proches.", link: "applications", icon: "shopping" },
    { id: "tracking", num: "03", title: "Traçabilité", description: " Notifications à chaque étape.", link: "applications", icon: "clock" },
    { id: "delivery", num: "04", title: "Livraison à domicile", description: "Vos colis sont livrés directement à l'adresse choisie partout au Sénégal.", link: "contact", icon: "truck" },
    { id: "payment", num: "05", title: "Paiement en ligne", description: "Réglez vos expéditions directement depuis l'application.", link: "applications", icon: "credit" },
    { id: "support", num: "06", title: "Assistance", description: "Notre équipe est disponible 7 jours sur 7 sur WhatsApp.", link: "contact", icon: "message" }
  ],
  steps: [
    { num: "01", title: "Créez votre envoi", description: "Remplissez les informations de votre colis sur notre site ou via l'application." },
    { num: "02", title: "Déposez ou collecte", description: "Apportez votre colis dans un point de dépôt ou demandez une collecte à domicile." },
    { num: "03", title: "Payez en ligne", description: "Réglez votre expédition directement depuis l'application." },
    { num: "04", title: "Livraison à domicile", description: "Votre destinataire reçoit son colis à l'adresse indiquée." }
  ],
  pricing: {
    note: "Pour les colis de moins de 10 kg et plus de 10 kg, un devis vous est envoyé sous 24h après soumission de votre demande.",
    plans: [
      { 
        name: "Documents", 
        description: "Lettres, documents administratifs, courriers", 
        price: "Tarif fixe", 
        unit: "par envoi", 
        popular: false, 
        features: ["Documents, courriers, enveloppes", "Poids inférieur à 500g",  "Livraison à domicile"] 
      },
      { 
        name: "Colis -10kg", 
        description: "Vêtements, chaussures, électronique légère", 
        price: "Devis", 
        unit: "sous 24h", 
        popular: true, 
        features: ["Jusqu'à 10 kg", "Devis personnalisé rapide", "Paiement via l'application",  "Assurance incluse", "Livraison prioritaire"] 
      },
      { 
        name: "Colis +10kg", 
        description: "Gros envois, électroménagers, meubles", 
        price: "Devis", 
        unit: "sous 24h", 
        popular: false, 
        features: ["Plus de 10 kg", "Devis personnalisé détaillé", "Collecte à domicile incluse", "Assurance premium", "Gestionnaire dédié"] 
      }
    ]
  },
  applications: [
    { 
      name: "YOBANTÉ Expédition", 
      description: "L'application dédiée à l'envoi de  colis entre la France et le Sénégal.", 
      features: ["Créer et gérer vos expéditions", "Paiement en ligne sécurisé", "Notifications à chaque étape"],
      icon: "package"
    },
    { 
      name: "YOBANTÉ Boutique", 
      description: "Notre application e-commerce pour acheter des produits sélectionnés en France.", 
      features: ["Catalogue de produits sélectionnés", "Commandes livrées au Sénégal", "Paiement en ligne sécurisé"],
      icon: "shopping"
    }
  ],
  faq: [
    { q: "Quels objets puis-je envoyer ?", a: "Vous pouvez envoyer des documents, vêtements, chaussures, produits alimentaires non périssables, appareils électroniques, cosmétiques, jouets, médicaments (avec ordonnance). Les produits inflammables, armes, et périssables sont interdits." },
    { q: "Comment obtenir un devis pour mon colis ?", a: "Pour les colis (moins de 10 kg ou plus de 10 kg), remplissez le formulaire de contact en indiquant le poids estimé et la nature des objets. Nous vous répondons sous 24 heures avec un tarif personnalisé." },
    { q: "Quel est le délai de livraison ?", a: "Le délai standard est de 7 à 14 jours ouvrés depuis la France vers le Sénégal. Les délais peuvent varier selon les douanes et la destination exacte." },
    { q: "Comment suivre mon colis ?", a: "Dès la prise en charge. Utilisez-le directement depuis l'application YOBANTÉ Expédition." },
    { q: "Le paiement en ligne est-il sécurisé ?", a: "Oui, le paiement est entièrement sécurisé via notre application. Nous utilisons des protocoles de chiffrement standard pour protéger vos données bancaires." }
  ],
  contact: {
    email: "contact@yobante.com",
    whatsapp: "+33 6 00 00 00 00",
    availability: "Lundi – Samedi · 8h00 – 20h00"
  },
  footer: {
    description: "Votre spécialiste de l'expédition de colis et du e-commerce entre la France et le Sénégal.",
    links: {
      services: ["Expédition de colis", "Boutique en ligne", "Nos tarifs"],
      company: ["FAQ", "Contact", "Recrutement"],
      legal: ["Mentions légales", "CGV", "Confidentialité"]
    }
  }
};