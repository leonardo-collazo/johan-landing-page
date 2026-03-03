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
    "about-tab": "About Me",
    "services-tab": "Services",
    "contact-tab": "Contact",

    "about-option": "About Me",
    "services-option": "Services",
    "contact-option": "Contact",

    "hero-section-header": "Car Diagnostic",
    "hero-section-info": "Your car doesn't talk... but we understand it.",
    "hero-section-button": "Services",

    "about-section-header": "About Me",
    "about-section-info":
      "Specialists in cars that won't start. We decode codes, reprogram modules, and restore full access to your vehicle. All from our mobile unit, wherever you are.",

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
    "about-tab": "Sobre m\u00ed",
    "services-tab": "Servicios",
    "contact-tab": "Contacto",

    "about-option": "Sobre m\u00ed",
    "services-option": "Servicios",
    "contact-option": "Contacto",

    "hero-section-header": "Diagn\u00f3stico Automotriz",
    "hero-section-info":
      "Tu auto no habla... pero nosotros s\u00ed lo entendemos.",
    "hero-section-button": "Servicios",

    "about-section-header": "Sobre m\u00ed",
    "about-section-info":
      "Especialistas en autos que no encienden. Desciframos c\u00f3digos, reprogramamos m\u00f3dulos y recuperamos el acceso total a su veh\u00edculo. Todo desde nuestra unidad m\u00f3vil, donde quiera que usted se encuentre.",

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
