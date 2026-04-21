export type Language = "fr" | "ar";

export const dictionaries = {
  fr: {
    nav: {
      acheter: "Acheter",
      louer: "Louer",
      vendre: "Vendre",
      contact: "Contact",
      whatsappBtn: "Contactez-nous",
      switchTo: "العربية"
    },
    hero: {
      title: "Trouvez Votre Bien Idéal au Maroc",
      subtitle: "Appartements, Villas et Locaux Commerciaux à Rabat, Casablanca et Marrakech",
      search: {
        city: "Ville",
        propertyType: "Type de Bien",
        budget: "Budget",
        button: "Rechercher",
        cities: ["Rabat", "Casablanca", "Marrakech", "Tanger", "Agadir"],
        types: ["Appartement", "Villa", "Local Commercial", "Terrain"],
        budgets: ["Moins de 1M", "1M - 3M", "Plus de 3M"]
      }
    },
    featured: {
      title: "Nos Biens en Vedette",
      bedrooms: "Chambres",
      viewDetails: "Voir Détails",
      askWhatsApp: "Demander sur WhatsApp"
    },
    propertyTypes: {
      apartments: "Appartements",
      villas: "Villas",
      commercial: "Locaux Commerciaux",
      lands: "Terrains"
    },
    whyUs: {
      expTitle: "10 Ans d'Expérience",
      expDesc: "Une expertise reconnue sur le marché immobilier marocain.",
      salesTitle: "+500 Biens Vendus",
      salesDesc: "Des centaines de clients satisfaits qui nous ont fait confiance.",
      legalTitle: "Accompagnement Juridique Gratuit",
      legalDesc: "Nos experts vous assistent dans toutes vos démarches.",
      estimateTitle: "Estimation Gratuite",
      estimateDesc: "Obtenez la vraie valeur de votre bien rapidement."
    },
    howItWorks: {
      title: "Comment ça marche ?",
      step1Title: "Contactez-nous",
      step1Desc: "Faites-nous part de vos besoins et critères de recherche.",
      step2Title: "Visitez les biens",
      step2Desc: "Nous organisons des visites adaptées à vos disponibilités.",
      step3Title: "Signez en toute sérénité",
      step3Desc: "Un accompagnement complet jusqu'à la remise des clés."
    },
    testimonials: {
      title: "Ce que disent nos clients",
    },
    coverage: {
      title: "Notre Zone de Couverture",
      subtitle: "Nous sommes présents dans les villes principales du Royaume."
    },
    contact: {
      title: "Contactez-nous",
      address: "Quartier Hay Riad, Rabat",
      whatsappCTA: "Contactez-nous sur WhatsApp",
      email: "contact@MubawabLuxe.ma"
    },
    footer: {
      rights: "Tous droits réservés."
    },
    propertiesList: [
      { id: 1, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", title: "Appartement Moderne - Hay Riad", type: "Appartement", price: "850,000 MAD", bedrooms: 3, surface: "95m²", location: "Rabat" },
      { id: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", title: "Villa de Luxe - Palmeraie", type: "Villa", price: "4,500,000 MAD", bedrooms: 5, surface: "400m²", location: "Marrakech" },
      { id: 3, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", title: "Appartement Vue Mer - Anfa", type: "Appartement", price: "2,200,000 MAD", bedrooms: 2, surface: "120m²", location: "Casablanca" },
      { id: 4, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80", title: "Villa Contemporaine - Souissi", type: "Villa", price: "8,900,000 MAD", bedrooms: 6, surface: "650m²", location: "Rabat" },
      { id: 5, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", title: "Local Commercial - Maarif", type: "Local Commercial", price: "1,500,000 MAD", bedrooms: 0, surface: "80m²", location: "Casablanca" },
      { id: 6, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80", title: "Appartement Duplex - Agdal", type: "Appartement", price: "1,850,000 MAD", bedrooms: 4, surface: "160m²", location: "Rabat" }
    ]
  },
  ar: {
    nav: {
      acheter: "شراء",
      louer: "كراء",
      vendre: "بيع",
      contact: "اتصل بنا",
      whatsappBtn: "تواصل معنا",
      switchTo: "Français"
    },
    hero: {
      title: "ابحث عن عقارك المثالي في المغرب",
      subtitle: "شقق، فيلات ومحلات تجارية في الرباط، الدار البيضاء ومراكش",
      search: {
        city: "المدينة",
        propertyType: "نوع العقار",
        budget: "الميزانية",
        button: "بحث",
        cities: ["الرباط", "الدار البيضاء", "مراكش", "طنجة", "أكادير"],
        types: ["شقة", "فيلا", "محل تجاري", "أرض"],
        budgets: ["أقل من مليون", "1 إلى 3 مليون", "أكثر من 3 مليون"]
      }
    },
    featured: {
      title: "عقاراتنا المميزة",
      bedrooms: "غرف",
      viewDetails: "التفاصيل",
      askWhatsApp: "استفسر عبر واتساب"
    },
    propertyTypes: {
      apartments: "شقق",
      villas: "فيلات",
      commercial: "محلات تجارية",
      lands: "أراضي"
    },
    whyUs: {
      expTitle: "10 سنوات من الخبرة",
      expDesc: "خبرة معترف بها في سوق العقارات المغربي.",
      salesTitle: "أكثر من 500 عقار مباع",
      salesDesc: "مئات العملاء الراضين الذين وضعوا ثقتهم بنا.",
      legalTitle: "مواكبة قانونية مجانية",
      legalDesc: "خبراؤنا يساعدونك في جميع إجراءاتك.",
      estimateTitle: "تقييم مجاني",
      estimateDesc: "احصل على القيمة الحقيقية لعقارك بسرعة."
    },
    howItWorks: {
      title: "كيف نعمل؟",
      step1Title: "اتصل بنا",
      step1Desc: "شاركنا احتياجاتك ومعايير البحث الخاصة بك.",
      step2Title: "زيارة العقارات",
      step2Desc: "ننظم زيارات تتناسب مع أوقات فراغك.",
      step3Title: "توقيع بكل راحة",
      step3Desc: "مواكبة شاملة حتى تسليم المفاتيح."
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
    },
    coverage: {
      title: "مناطق تغطيتنا",
      subtitle: "نتواجد في المدن الرئيسية بالمملكة."
    },
    contact: {
      title: "اتصل بنا",
      address: "حي الرياض، الرباط",
      whatsappCTA: "تواصل معنا عبر واتساب",
      email: "contact@MubawabLuxe.ma"
    },
    footer: {
      rights: "جميع الحقوق محفوظة."
    },
    propertiesList: [
      { id: 1, image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", title: "شقة عصرية - حي الرياض", type: "شقة", price: "850,000 درهم", bedrooms: 3, surface: "95m²", location: "الرباط" },
      { id: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", title: "فيلا فاخرة - النخيل", type: "فيلا", price: "4,500,000 درهم", bedrooms: 5, surface: "400m²", location: "مراكش" },
      { id: 3, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", title: "شقة مطلة على البحر - أنفا", type: "شقة", price: "2,200,000 درهم", bedrooms: 2, surface: "120m²", location: "الدار البيضاء" },
      { id: 4, image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80", title: "فيلا معاصرة - السويسي", type: "فيلا", price: "8,900,000 درهم", bedrooms: 6, surface: "650m²", location: "الرباط" },
      { id: 5, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", title: "محل تجاري - المعاريف", type: "محل تجاري", price: "1,500,000 درهم", bedrooms: 0, surface: "80m²", location: "الدار البيضاء" },
      { id: 6, image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80", title: "شقة دوبلكس - أكدال", type: "شقة", price: "1,850,000 درهم", bedrooms: 4, surface: "160m²", location: "الرباط" }
    ]
  }
};

export type TranslationProps = typeof dictionaries["fr"];
