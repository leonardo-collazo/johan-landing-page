// ('á', '\u00e1');
// ('é', '\u00e9');
// ('í', '\u00ed');
// ('ó', '\u00f3');
// ('ú', '\u00fa');
// ('Á', '\u00c1');
// ('É', '\u00c9');
// ('Í', '\u00cd');
// ('Ó', '\u00d3');
// ('Ú', '\u00da');
// ('ñ', '\u00f1');
// ('Ñ', '\u00d1');

const languageKey = "vionel-landing-page-language";

const languages = {
  spanish: "esp",
  english: "eng",
};

const i18n = {
  eng: {
    // Header Tabs
    "about-tab": "Who We Are",
    "services-tab": "What We Offer",
    "contact-tab": "Contact Us",

    // Mobile Menu Options
    "about-option": "Who We Are",
    "services-option": "What We Offer",
    "contact-option": "Contact Us",

    // Hero Section - First Text
    "hero-section-header-1": "Trusted Cleaning Company",
    "hero-section-info-1": "AMAZING SOLUTION",

    // Hero Section - Second Text
    "hero-section-header-2": "Best Service Company",
    "hero-section-info-2": "AMAZING SERVICE",

    // Hero Section - Button
    "hero-section-button": "Read More",

    // About Section - Header
    "about-section-header": "WHO WE ARE",

    // About Section - Info
    "about-section-info-1":
      "Our company offers comprehensive home care solutions, including professional cleaning, maintenance, repairs, and high-quality painting. We focus on delivering impeccable results using specialized products and equipment that protect every surface and personal item.",

    "about-section-info-2":
      "In the area of cleaning, we transform every space into a fresh, healthy, and welcoming environment. We use modern, safe techniques that remove dirt and bacteria without damaging furniture or materials.",

    "about-section-info-3":
      "We also provide maintenance and repair services to ensure your home runs smoothly. Additionally, we perform interior and exterior painting with professional finishes that refresh and enhance every space.",

    // Services Section - Header
    "service-section-header": "WHAT WE OFFER",

    // Services Section - Info
    "service-section-info":
      "Our pricing is customized to meet your specific needs. We perform a thorough initial assessment of your property and the requested services to provide an accurate and competitive estimate.",

    // Services Section - Individual Services
    "service-name-1": "General Cleaning",
    "service-details-1":
      "We provide deep cleaning services to keep your home spotless, healthy, and well-organized. We use specialized products and equipment that protect every surface while delivering high-quality results.",

    "service-name-2": "Handyman Services",
    "service-details-2":
      "We perform a wide variety of practical household tasks. From installations and minor repairs to preventive maintenance, we ensure safety and proper functionality.",

    "service-name-3": "Interior and Exterior Painting",
    "service-details-3":
      "We provide professional interior and exterior painting services to refresh and protect your home. We use high-quality materials and precise techniques to achieve durable and uniform finishes.",

    "service-name-4": "Cabinet Painting",
    "service-details-4":
      "We transform your cabinets with specialized paint that enhances their appearance without the need for replacement. Our process ensures a clean, durable, and visually appealing finish.",

    // Contact Section
    "contact-section-header": "CONTACT US",
    "contact-section-address": "Address",
    "contact-section-phone": "Phone",
    "contact-section-email": "Email",
    "contact-section-hours-header": "Hours",
    "contact-section-hours-info":
      "Monday - Friday:\n8am - 6pm\n\nSaturday:\n9am - 4pm\n\nSunday:\nClosed",

    "reference-icons8": "Icons by",
  },
  esp: {
    // Header Tabs
    "about-tab": "Qui\u00e9nes Somos",
    "services-tab": "Qu\u00e9 Ofrecemos",
    "contact-tab": "Cont\u00e1ctanos",

    // Mobile Menu Options
    "about-option": "Qui\u00e9nes Somos",
    "services-option": "Qu\u00e9 Ofrecemos",
    "contact-option": "Cont\u00e1ctanos",

    // Hero Section - First Text
    "hero-section-header-1": "Empresa de Limpieza de Confianza",
    "hero-section-info-1": "SOLUCI\u00d3N INCRE\u00cdBLE",

    // Hero Section - Second Text
    "hero-section-header-2": "Mejor Compa\u00f1\u00eda de Servicios",
    "hero-section-info-2": "SERVICIO ASOMBROSO",

    // Hero Section - Button
    "hero-section-button": "Leer m\u00e1s",

    // About Section - Header
    "about-section-header": "QUI\u00c9NES SOMOS",

    // About Section - Info
    "about-section-info-1":
      "Nuestra compa\u00f1\u00eda ofrece soluciones integrales para el cuidado del hogar, incluyendo limpieza profesional, mantenimiento, reparaciones y pintura de alta calidad. Nos enfocamos en resultados impecables utilizando productos y equipos especializados que protegen cada superficie y pertenencia.",

    "about-section-info-2":
      "En el \u00e1rea de limpieza, transformamos cada espacio en un ambiente fresco, saludable y acogedor. Aplicamos t\u00e9cnicas modernas y seguras que eliminan suciedad y bacterias sin da\u00f1ar muebles ni materiales.",

    "about-section-info-3":
      "Tambi\u00e9n brindamos servicios de mantenimiento y reparaci\u00f3n para asegurar el buen funcionamiento del hogar. Adem\u00e1s, realizamos trabajos de pintura interior y exterior con acabados profesionales que renuevan y realzan cada espacio.",

    // Services Section - Header
    "service-section-header": "QU\u00c9 OFRECEMOS",

    // Services Section - Info
    "service-section-info":
      "Nuestros precios se adaptan a sus necesidades espec\u00edficas. Realizamos una evaluaci\u00f3n inicial exhaustiva de su propiedad y de los servicios solicitados para ofrecerle un presupuesto preciso y competitivo.",

    // Services Section - Individual Services
    "service-name-1": "Limpieza general",
    "service-details-1":
      "Ofrecemos servicios de limpieza profunda para mantener su hogar impecable, saludable y organizado. Utilizamos productos y equipos especializados que protegen cada superficie y garantizan resultados de alta calidad.",

    "service-name-2": "Servicios de handyman",
    "service-details-2":
      "Realizamos una amplia variedad de trabajos pr\u00e1cticos para el hogar. Desde instalaciones y reparaciones menores hasta mantenimiento preventivo, garantizamos seguridad y buen funcionamiento.",

    "service-name-3": "Pintura interior y exterior",
    "service-details-3":
      "Ofrecemos servicios profesionales de pintura interior y exterior para renovar y proteger su hogar. Utilizamos materiales de alta calidad y t\u00e9cnicas precisas para lograr acabados duraderos y uniformes.",

    "service-name-4": "Pintura de gabinetes",
    "service-details-4":
      "Transformamos sus gabinetes con pintura especializada que mejora su apariencia sin necesidad de reemplazarlos. Nuestro proceso garantiza un acabado resistente, limpio y visualmente atractivo.",

    // Contact Section
    "contact-section-header": "CONT\u00c1CTANOS",
    "contact-section-address": "Direcci\u00f3n",
    "contact-section-phone": "Tel\u00e9fono",
    "contact-section-email": "Correo",
    "contact-section-hours-header": "Horario",
    "contact-section-hours-info":
      "Lunes - Viernes:\n8am - 6pm\n\nS\u00e1bado:\n9am - 4pm\n\nDomingo:\nCerrado",

    "reference-icons8": "\u00cdconos por",
  },
};

const languageIconSources = {
  esp: "./src/assets/icons/spain-flag.png",
  eng: "./src/assets/icons/usa-flag.png",
};

export { languageKey, languages, i18n, languageIconSources };
