/**
 * translations.js
 * ─────────────────────────────────────────────
 * Tots els textos del portfolio en CA / ES / EN.
 * Edita NOMÉS aquest fitxer per canviar qualsevol text.
 *
 * Com funciona:
 *   - Cada clau (ex. "hero.desc") correspon a un element
 *     de l'HTML que té data-i18n="hero.desc"
 *   - Pots usar <strong>, <em> i altres etiquetes HTML
 *     dins dels textos si cal
 * ─────────────────────────────────────────────
 */

const T = {

  // ══════════════════════════════════════════
  // CATALÀ
  // ══════════════════════════════════════════
  ca: {

    // Navegació
    "nav.about":    "Sobre mi",
    "nav.skills":   "Stack",
    "nav.projects": "Projectes",
    "nav.contact":  "Contacte",

    // Hero (caixa gran esquerra)
    "hero.eyebrow": "Full Stack Developer · Igualada",
    "hero.desc":    "M'agrada fer les coses simples per dins i boniques per fora.",
    "hero.cta":     "→ Contacta'm",

    // Status (caixetes de punts de colors)
    "status.role":      "Full Stack Developer",
    "status.degree":    "Grau en Enginyeria Informàtica (en curs)",
    "status.available": "Disponible",
    "status.open":      "Obert a projectes",

    // Role (caixa petita lila)
    "role.label": "Especialitat",
    "role.title": "Backend & sistemes\ncrítics de producció",

    // Sobre mi
    "about.label":      "Sobre mi",
    "about.text":       "Dissenyo i mantinc sistemes CRM crítics. M'apassiona l'arquitectura de software neta, les bones pràctiques i la integració amb APIs. A la UOC estudio Enginyeria Informàtica compaginant-ho amb la feina a temps complet.",
    "about.chip.edu":   "🎓 UOC",
    "about.chip.langs": "🗣 CA · ES · EN",

    // Stack tecnològic
    "stack.label": "Stack tecnològic",

    // Projectes
    "projects.label": "Projectes",

    "proj.1.title": "CRM Telecomunicacions & Energia",
    "proj.1.desc":  "Sistema de gestió integral per a clients i contractes de fibra, VoIP, mòbil i energia.",

    "proj.2.title": "Gestió d'Obres de Xarxa",
    "proj.2.desc":  "Mòdul de planificació de desplegaments FTTH amb màquina d'estats i càlcul de ROI.",

    "proj.3.title": "Automatització de Fluxos Financers",
    "proj.3.desc":  "Pipeline automatitzat amb signatura digital, integracions externes i notificacions legals.",

    "proj.4.title": "Integracions de tercers",
    "proj.4.desc":  "Integració de sistemes de tercers via API REST",

    "proj.5.title": "juga_truites",
    "proj.5.desc":  "Compte d'Instagram sobre jocs de taula. Contingut en català per a la comunitat jugadora.",

    // Contacte
    "contact.label": "Contacte",
    "contact.title": "Parlem.",
    "contact.desc":  "Obert a col·laboracions i consultes tècniques.",
    "contact.cta":   "→ Escriu-me",

    // Interessos (fora del codi)
    "interests.label":  "Fora del codi",
    "int.cycling":      "Ciclisme",
    "int.gym":          "Gimnàs",
    "int.boardgames":   "Jocs de taula",
    "int.printing":     "Impressió 3D",
    "int.travel":       "Viatges",
    "int.music":        "Música",

    // Localització i footer
    "loc.sub":           "Spain · Europe",
    "footer.available":  "Disponible per a projectes",
  },

  // ══════════════════════════════════════════
  // CASTELLÀ
  // ══════════════════════════════════════════
  es: {

    "nav.about":    "Sobre mí",
    "nav.skills":   "Stack",
    "nav.projects": "Proyectos",
    "nav.contact":  "Contacto",

    "hero.eyebrow": "Full Stack Developer · Igualada",
    "hero.desc":    "Me gusta hacer las cosas simples por dentro y bonitas por fuera.",
    "hero.cta":     "→ Contáctame",

    "status.role":      "Full Stack Developer",
    "status.degree":    "Grado en Ingeniería Informática (en curso)",
    "status.available": "Disponible",
    "status.open":      "Abierto a proyectos",

    "role.label": "Especialidad",
    "role.title": "Backend & sistemas\ncríticos de producción",

    "about.label":      "Sobre mí",
    "about.text":       "Diseño y mantengo sistemas CRM propios para la gestión de servicios de telecomunicaciones y energía. Me apasiona la arquitectura de software limpia, las buenas prácticas y la integración con APIs. En la UOC estudio Ingeniería Informática compaginándolo con el trabajo a tiempo completo.",
    "about.chip.edu":   "🎓 UOC",
    "about.chip.langs": "🗣 CA · ES · EN",

    "stack.label": "Stack tecnológico",

    "projects.label": "Proyectos",

    "proj.1.title": "CRM Telecomunicaciones & Energía",
    "proj.1.desc":  "Sistema de gestión integral para clientes y contratos de fibra, VoIP, móvil y energía.",

    "proj.2.title": "Gestión de Obras de Red",
    "proj.2.desc":  "Módulo de planificación de despliegues FTTH con máquina de estados y cálculo de ROI.",

    "proj.3.title": "Automatización de Flujos Financieros",
    "proj.3.desc":  "Pipeline automatizado con firma digital, integraciones externas y notificaciones legales.",

    "proj.4.title": "Integraciones de terceros",
    "proj.4.desc":  "Integración de sistemas de terceros via API REST",

    "proj.5.title": "juga_truites",
    "proj.5.desc":  "Cuenta de Instagram sobre juegos de mesa. Contenido en catalán para la comunidad jugadora.",

    "contact.label": "Contacto",
    "contact.title": "Hablemos.",
    "contact.desc":  "Abierto a colaboraciones y consultas técnicas.",
    "contact.cta":   "→ Escríbeme",

    "interests.label": "Fuera del código",
    "int.cycling":     "Ciclismo",
    "int.gym":         "Gimnasio",
    "int.boardgames":  "Juegos de mesa",
    "int.printing":    "Impresión 3D",
    "int.travel":      "Viajes",
    "int.music":       "Música",

    "loc.sub":          "Spain · Europe",
    "footer.available": "Disponible para proyectos",
  },

  // ══════════════════════════════════════════
  // ANGLÈS
  // ══════════════════════════════════════════
  en: {

    "nav.about":    "About",
    "nav.skills":   "Stack",
    "nav.projects": "Projects",
    "nav.contact":  "Contact",

    "hero.eyebrow": "Full Stack Developer · Igualada",
    "hero.desc":    "I like to make things simple on the inside and beautiful on the outside.",
    "hero.cta":     "→ Get in touch",

    "status.role":      "Full Stack Developer",
    "status.degree":    "Computer Engineering (in progress)",
    "status.available": "Available",
    "status.open":      "Open to projects",

    "role.label": "Specialty",
    "role.title": "Backend & production\ncritical systems",

    "about.label":      "About me",
    "about.text":       "I design and maintain proprietary CRM systems for managing telecommunications and energy services. I'm passionate about clean software architecture, best practices and integration with APIs. At UOC I study Computer Engineering alongside full-time work.",
    "about.chip.edu":   "🎓 UOC",
    "about.chip.langs": "🗣 CA · ES · EN",

    "stack.label": "Tech stack",

    "projects.label": "Projects",

    "proj.1.title": "Telecom & Energy CRM",
    "proj.1.desc":  "Comprehensive management system for fiber, VoIP, mobile and energy customers and contracts.",

    "proj.2.title": "Network Infrastructure Management",
    "proj.2.desc":  "FTTH deployment planning module with state machine and ROI calculation.",

    "proj.3.title": "Financial Flow Automation",
    "proj.3.desc":  "Automated pipeline with digital signature, external integrations and legal notifications.",

    "proj.4.title": "Third-party Integrations",
    "proj.4.desc":  "Integration of third-party systems via REST API.",

    "proj.5.title": "juga_truites",
    "proj.5.desc":  "Instagram account about board games. Content in Catalan for the gaming community.",

    "contact.label": "Contact",
    "contact.title": "Let's talk.",
    "contact.desc":  "Open to collaborations and technical consulting.",
    "contact.cta":   "→ Write to me",

    "interests.label": "Outside of code",
    "int.cycling":     "Cycling",
    "int.gym":         "Gym",
    "int.boardgames":  "Board games",
    "int.printing":    "3D Printing",
    "int.travel":      "Travel",
    "int.music":       "Music",

    "loc.sub":          "Spain · Europe",
    "footer.available": "Available for projects",
  },

};
