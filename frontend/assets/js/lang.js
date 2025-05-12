const translations = {
  es: {
    welcome_message: "Bienvenido a mi sitio",
    intro_text: "Este es un sitio web de prueba",
  },
  en: {
    welcome_message: "Welcome to my site",
    intro_text: "This is a test website",
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

if (userLang && userLang.startsWith("es")) {
  lang = "es";
} else if (userLang) {
  lang = "en";
} else {
  lang = "es";
}

setLanguage(lang);
