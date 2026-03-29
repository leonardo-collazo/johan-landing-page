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
    "about-tab": "About Me",
    "services-tab": "Services",
    "contact-tab": "Contact",

    // Mobile Menu Options
    "about-option": "About Me",
    "services-option": "Services",
    "contact-option": "Contact",

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
      "Our company specializes in providing comprehensive solutions for home care and maintenance, combining professional cleaning services, maintenance, general repairs, and high-quality painting. We focus on delivering impeccable results, using specialized products and equipment that ensure the protection of every surface, piece of furniture, and item in your home. We know that every space is unique, so we tailor our methods to preserve the beauty and durability of your belongings, from carpets and upholstery to delicate decorative items.",

    "about-section-info-2":
      "When it comes to cleaning, we are dedicated to transforming every corner of your home into a fresh, healthy, and welcoming environment. Our team pays close attention to detail, ensuring a deep clean without compromising the integrity of your furniture or materials. We use modern techniques and safe products that eliminate dirt, dust, and bacteria, taking care of both your home and your family\u2019s well-being.",

    "about-section-info-3":
      "In addition, we offer maintenance and repair services to resolve any issues or damage in your home. From small repairs to more complex fixes, our goal is to ensure that everything works properly and safely. To complement these services, we perform interior and exterior painting, including cabinets, with professional finishes that refresh and enhance the appearance of your home. We are committed to delivering quality, efficiency, and reliability in every project, making us your ideal partner for comprehensive home maintenance.",

    "service-section-header": "Our Professional Services",
    "service1-name": "Advanced Electronic Diagnostics",
    "service1-details":
      "Complete inspection with OEM equipment to identify faults in the starter, modules, CAN network, sensors, actuators, and safety systems. Includes code reading, active testing, and verification of communication between modules.",
    "service1-price": "From $250",
    "service2-name": "Module Programming and Coding",
    "service2-details":
      "Reprogramming, coding, or replacement of modules such as ECU, TCM, BCM, ABS, immobilizers, among others. Use of official software and tools compatible with manufacturers (GM, Ford, Chrysler, Honda, etc.).",
    "service2-price": "From $200",
    "service3-name": "Professional Automotive Locksmith",
    "service3-details":
      "Generation, cloning, and programming of smart keys, chips, remote controls, and emergency keys. Specialized service for lost, damaged, or duplicate keys. Includes vehicles with Keyless and Proximity systems.",
    "service3-price": "From $60",
    "service4-name": "Automotive Air Conditioning Service",
    "service4-details":
      "Diagnosis and repair of A/C systems. R-134a or R-1234yf gas charging, leak detection, compressor inspection, pressure and electronic operation checks. Mobile service with recovery, vacuum and recharge equipment.",
    "service4-price": "From $150",
    "service-section-footer":
      "All our services have a starting price as shown. If the job requires it, the price may increase, but not without first letting the customer know.",

    "contact-section-header": "Contact",
    "contact-section-address": "Address",
    "contact-section-phone": "Phone",
    "contact-section-email": "Email",

    "reference-icons8": "Icons by",
  },
  esp: {
    // Header Tabs
    "about-tab": "Sobre m\u00ed",
    "services-tab": "Servicios",
    "contact-tab": "Contacto",

    // Mobile Menu Options
    "about-option": "Sobre m\u00ed",
    "services-option": "Servicios",
    "contact-option": "Contacto",

    // Hero Section - First Text
    "hero-section-header-1": "Empresa de Limpieza de Confianza",
    "hero-section-info-1": "SOLUCI\u00d3N INCRE\u00cdBLE",

    // Hero Section - Second Text
    "hero-section-header-2": "Mejor Compañ\u00eda de Servicios",
    "hero-section-info-2": "SERVICIO ASOMBROSO",

    // Hero Section - Button
    "hero-section-button": "Leer m\u00e1s",

    // About Section - Header
    "about-section-header": "QUI\u00c9NES SOMOS",

    // About Section - Info
    "about-section-info-1":
      "Nuestra compa\u00f1\u00eda se especializa en ofrecer soluciones integrales para el cuidado y mantenimiento del hogar, combinando servicios de limpieza profesional, mantenimiento, reparaciones generales y pintura de alta calidad. Nos enfocamos en brindar resultados impecables, utilizando productos y equipos especializados que garantizan la protecci\u00f3n de cada superficie, mueble y objeto dentro de su hogar. Sabemos que cada espacio es \u00fanico, por lo que adaptamos nuestros m\u00e9todos para mantener la belleza y durabilidad de sus pertenencias, desde alfombras y tapicer\u00edas hasta delicados elementos decorativos.",

    "about-section-info-2":
      "En el \u00e1rea de limpieza, nos dedicamos a transformar cada rinc\u00f3n de su casa en un ambiente fresco, saludable y acogedor. Nuestro equipo presta atenci\u00f3n a los detalles, asegurando una limpieza profunda sin comprometer la integridad de sus muebles o materiales. Utilizamos t\u00e9cnicas modernas y productos seguros que eliminan suciedad, polvo y bacterias, cuidando tanto de su hogar como del bienestar de su familia.",

    "about-section-info-3":
      "Adem\u00e1s, ofrecemos servicios de mantenimiento y reparaci\u00f3n para resolver cualquier problema o desperfecto en su vivienda. Desde peque\u00f1as reparaciones hasta arreglos m\u00e1s complejos, nuestro objetivo es garantizar que todo funcione correctamente y con total seguridad. Complementando estos servicios, realizamos trabajos de pintura interior y exterior, incluyendo gabinetes, con acabados profesionales que renuevan y realzan la apariencia de su hogar. Nos comprometemos a ofrecer calidad, eficiencia y confianza en cada proyecto, convirti\u00e9ndonos en su aliado ideal para el mantenimiento completo de su casa.",

    "service-section-header": "Nuestros Servicios Profesionales",
    "service1-name": "Diagn\u00f3stico Electr\u00f3nico Avanzado",
    "service1-details":
      "Inspecci\u00f3n completa con equipos OEM para identificar fallos en arranque, m\u00f3dulos, red CAN, sensores, actuadores y sistemas de seguridad. Incluye lectura de c\u00f3digos, pruebas activas y verificaci\u00f3n de comunicaci\u00f3n entre m\u00f3dulos.",
    "service1-price": "Desde $250",
    "service2-name": "Programaci\u00f3n y Codificaci\u00f3n de M\u00f3dulos",
    "service2-details":
      "Reprogramaci\u00f3n, codificaci\u00f3n o reemplazo de m\u00f3dulos como ECU, TCM, BCM, ABS, inmovilizadores, entre otros. Uso de software oficial y herramientas compatibles con fabricantes (GM, Ford, Chrysler, Honda, etc.).",
    "service2-price": "Desde $200",
    "service3-name": "Cerrajer\u00eda Automotriz Profesional",
    "service3-details":
      "Generaci\u00f3n, clonaci\u00f3n y programaci\u00f3n de llaves inteligentes, chip, control remoto y llaves de emergencia. Servicio especializado para llaves perdidas, dañadas o duplicadas. Incluye veh\u00edculos con sistemas Keyless y Proximity.",
    "service3-price": "Desde $60",
    "service4-name": "Servicio de Aire Acondicionado Automotriz",
    "service4-details":
      "Diagn\u00f3stico y reparaci\u00f3n de sistemas de A/C. Carga de gas R-134a o R-1234yf, detecci\u00f3n de fugas, revisi\u00f3n de compresor, presiones y funcionamiento electr\u00f3nico. Servicio m\u00f3vil con equipos de recuperaci\u00f3n, vac\u00edo y recarga.",
    "service4-price": "Desde $150",
    "service-section-footer":
      "Todos nuestros servicios tienen un precio inicial como se muestra. Si el trabajo lo requiere, el precio podr\u00eda aumentar, pero no sin antes dejarle saber al cliente.",

    "contact-section-header": "Contacto",
    "contact-section-address": "Direcci\u00f3n",
    "contact-section-phone": "Tel\u00e9fono",
    "contact-section-email": "Correo",

    "reference-icons8": "\u00cdconos por",
  },
};

const languageIconSources = {
  esp: "./src/assets/icons/spain-flag.png",
  eng: "./src/assets/icons/usa-flag.png",
};

export { languageKey, languages, i18n, languageIconSources };
