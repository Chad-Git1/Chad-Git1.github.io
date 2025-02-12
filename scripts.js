let currentLanguage = 'en';

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

function toggleLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'fr' : 'en';
    
    const langButton = document.getElementById("lang-toggle");
    langButton.textContent = (currentLanguage === 'en') ? 'FR' : 'EN';
    
    document.querySelectorAll('[data-lang]').forEach((element) => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[currentLanguage][key];
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        const navbarHeight = document.querySelector('nav').offsetHeight;

        const offsetAdjustment = -55; 
        const scrollToPosition = target.offsetTop - navbarHeight - offsetAdjustment;

        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    });
});




document.getElementById("location-icon").addEventListener("click", function(event) {
    event.preventDefault();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                if(currentLanguage === 'fr'){
                    alert("Merci d'avoir activé les services de localisation :)");
                } else {
                    alert("Thankyou for enabling location services :)");
                }
                
                
                console.log("Latitude: " + position.coords.latitude);
                console.log("Longitude: " + position.coords.longitude);
            },
            function(error) {
                alert("Location access denied or unavailable.");
                console.error(error);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
