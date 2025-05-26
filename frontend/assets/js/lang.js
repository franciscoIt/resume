const translations = {
  en: {
    greeting: "I am Iván",
    description: "IT specialist with knowledge of programming, cybersecurity and the cloud",
    section_one_title: "About me",
    section_one_text: "Developer with backend experience (Java, Python, php) and technical and practical training in cybersecurity. I have worked in software development, cybersecurity consulting and management in the AWS cloud.",
    learn_more: "Learn More",
    recent_work: "Recent Work",
    work_1_title: "AI Web Scraper",
    work_1_desc: "Scrape and extract specific information from any website using local AI-based parsing",
    work_2_title: "Advance FastAPI CRUD",
    work_2_desc: "Robust backend application developed with FastAPI. Automatic documentation with OpenAPI.Uses the SQLAlchemy ORM, Alembic for database version control, and Pydantic for data validation. Includes unit and integrated testing with pytest and httpx, and automatic linting with pre-commit hooks.",
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
    email_text: "",


  },
  es: {
    greeting: "Soy Iván",
    description: "Especialista en TI con conocimientos en programación, nube y ciberseguridad",
    section_one_title: "Sobre mí",
    section_one_text: "Desarrollador con experiencia en backend (Java, Python, php) y formación técnica y práctica en ciberseguridad. He trabajado en desarrollo, asesoria de ciberseguridad y gestión en la nube AWS.",
    learn_more: "Saber más",
    recent_work: "Trabajos Recientes",
    work_1_title: "Web Scraper con IA",
    work_1_desc: "Extractor de información web mediante una IA local.",
    work_2_title: "Back end FastAPI",
    work_2_desc: "Aplicación con el ORM SQLAlchemy, Alembic para el control de versiones de la base de datos y Pydantic para la validación de datos. Incluye pruebas unitarias e integradas con pytest y httpx y linting automatico con pre-commit.",
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
    email_text: "",

    
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
