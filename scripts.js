// JavaScript for language toggling

// Store the current language in localStorage or as a global variable
let currentLanguage = 'en';

// Language dictionary to handle translation
const translations = {
    en: {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "booking": "Booking",
        "home-section-title": "Home Section",
        "home-section-content": "Content for the home section.",
        "about-section-title": "About Section",
        "about-section-content": "Content for the about section.",
        "services-section-title": "Services Section",
        "services-section-content": "Content for the services section.",
        "booking-section-title": "Booking Section",
        "booking-section-content": "Content for the booking section."
    },
    fr: {
        "home": "Accueil",
        "about": "À propos",
        "services": "Services",
        "booking": "Réservation",
        "home-section-title": "Section d'accueil",
        "home-section-content": "Contenu de la section d'accueil.",
        "about-section-title": "Section À propos",
        "about-section-content": "Contenu de la section À propos.",
        "services-section-title": "Section Services",
        "services-section-content": "Contenu de la section Services.",
        "booking-section-title": "Section Réservation",
        "booking-section-content": "Contenu de la section Réservation."
    }
};

// Toggle language function
function toggleLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'fr' : 'en';
    
    // Change the button text based on the current language
    const langButton = document.getElementById("lang-toggle");
    langButton.textContent = (currentLanguage === 'en') ? 'FR' : 'EN';
    
    // Update all the text content based on the selected language
    document.querySelectorAll('[data-lang]').forEach((element) => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[currentLanguage][key];
    });
}

// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
