const translations = {
  en: {
    greeting: "I am Iván",
    description: "IT specialist with knowledge of programming, cybersecurity and the cloud",
    section_one_title: "About me",
    section_one_text: "Developer with experience in backend computing (Java, Python, PHP) and a cybersecurity specialist. I've worked in development, cybersecurity consulting, and cloud management with Kubernetes and AWS. I'm currently interested in SEO, modern web development, and automation.",
    learn_more: "Learn More",
    recent_work: "Recent Work",
    work_1_title: "AI Web Scraper",
    work_1_desc: "Scrape and extract specific information from any website using local AI-based parsing",
    work_2_title: "Advance FastAPI CRUD",
    work_2_desc: "Robust backend application developed with FastAPI. Automatic documentation with OpenAPI.Uses the SQLAlchemy ORM, Alembic for database version control, and Pydantic for data validation. Includes unit and integrated testing with pytest and httpx, and maintains quality standards with pre-commit hooks.",
    work_3_title: "Project Three",
    work_3_desc: "Short description of Project Three.",
    work_4_title: "Project Four",
    work_4_desc: "Short description of Project Four.",
    work_5_title: "Project Five",
    work_5_desc: "Short description of Project Five.",
    work_6_title: "Project Six",
    work_6_desc: "Short description of Project Six.",
    full_portfolio: "Full Portfolio",
    get_in_touch: "Get In Touch",
    contact_text: "Feel free to reach out by filling the form below.",
    name: "Iván",
    email: "Email",
    message: "Message",
    send_message: "Send Message",
    address_label: "Address",
    address_text: "1234 Example St. City, Country",
    phone_label: "Phone",
    phone_text: "123-456-7890",
    email_label: "Email",
    email_text: "ivnro.dev@gmail.com",

  },

  es: {
    greeting: "Soy Iván",
    description: "Especialista en TI con conocimientos en programación, nube y ciberseguridad",
    section_one_title: "Sobre mí",
    section_one_text: " Informatico con experiencia en backend (Java, Python, php) y especialista en ciberseguridad. He trabajado en desarrollo, asesoria de ciberseguridad y gestión en la nube con Kubernetes y AWS. Actualmente me interesa el SEO, el desarrollo web moderno y la automatización.",
    learn_more: "Saber más",
    recent_work: "Trabajos Recientes",
    work_1_title: "Proyecto Uno",
    work_1_desc: "Descripción breve del Proyecto Uno.",
    work_2_title: "Proyecto Dos",
    work_2_desc: "Descripción breve del Proyecto Dos.",
    work_3_title: "Proyecto Tres",
    work_3_desc: "Descripción breve del Proyecto Tres.",
    work_4_title: "Proyecto Cuatro",
    work_4_desc: "Descripción breve del Proyecto Cuatro.",
    work_5_title: "Proyecto Cinco",
    work_5_desc: "Descripción breve del Proyecto Cinco.",
    work_6_title: "Proyecto Seis",
    work_6_desc: "Descripción breve del Proyecto Seis.",
    full_portfolio: "Portafolio Completo",
    get_in_touch: "Contacto",
    contact_text: "No dudes en contactarme completando el siguiente formulario.",
    name: "Iván",
    email: "Correo electrónico",
    message: "Mensaje",
    send_message: "Enviar Mensaje",
    address_label: "Dirección",
    address_text: "1234 Calle Ejemplo. Ciudad, País",
    phone_label: "Teléfono",
    phone_text: "123-456-7890",
    email_label: "Correo",
    email_text: "ivnro.dev@gmail.com",

    
  },
};


function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || `[${key}]`;
  });
}

const userLang = navigator.language || navigator.userLanguage;
let lang;

// Establecer el idioma basado en la detección
if (userLang.startsWith("es")) {
  lang = "es";
} else if (userLang) {
  lang = "en"; 
} else {
  lang = "es"; 
}

setLanguage(lang);
