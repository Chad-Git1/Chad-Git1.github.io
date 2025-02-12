let currentLanguage = localStorage.getItem('language') || 'en'; 

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
        "booking-section-content": "Content for the booking section.",
        "name": "Name : ",
        "name-content": "John Doe",
        "address": "Address : ", 
        "address-content": "123, Bellvue Ave",
        "email": "E-mail : ",
        "email2": "E-mail",
        "email-content": "JohnDoe@velotous.com",
        "phone-number": "Phone Number : ",
        "phone-number-content": "613-123-1234",
        "payment": "Payment : ",
        "payment-content": "******-******-****00",
        "reservation": "Reservations : ",
        "reservation-content": "Platinum service : 2025-02-07 4pm",
        "inventory": "Inventory : ",
        "inventory-content": "3 x Gold service : exp : 2026-01-01, 1 x Platinum service : exp : 2026-09-01",
        "logout": "Log out",
        "login": "Log in",
        "password": "Password",
        "confirm-password": "Confirm Password",
        "register": "Register",
        "fullname": "Full Name",
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
        "booking-section-content": "Contenu de la section Réservation",
        "name": "Nom : ",
        "name-content": "John Doe",
        "address": "Adresse : ", 
        "address-content": "123, Rue Bellvue",
        "email": "Courriel : ",
        "email2": "Courriel",
        "email-content": "JohnDoe@velotous.com",
        "phone-number": "Numéro de téléphone : ",
        "phone-number-content": "613-123-1234",
        "payment": "Paiement : ", 
        "payment-content": "******-******-****00",
        "reservation": "Réservations : ",
        "reservation-content": "Service platine : 2025-02-07 16h",
        "inventory": "Inventaire : ",
        "inventory-content": "3 x Service or : exp : 2026-01-01, 1 x Service platine : exp : 2026-09-01",
        "logout": "Déconnexion",
        "login": "Connexion",
        "password": "Mot de passe",
        "confirm-password": "Confirmer le mot de passe",
        "register": "Nouveau client",        
        "fullname": "Nom complet",
    }
};


function applyTranslations() {
    document.querySelectorAll('[data-lang]').forEach((element) => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLanguage][key]) {
            if (element.tagName === "INPUT") {
                element.setAttribute("placeholder", translations[currentLanguage][key]);
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
        element.style.visibility = "visible"; 
    });

    const langButton = document.getElementById("lang-toggle");
    if (langButton) {
        langButton.textContent = (currentLanguage === 'en') ? 'FR' : 'EN';
    }
}

function toggleLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'fr' : 'en';

    localStorage.setItem('language', currentLanguage);

    applyTranslations();
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
                if(currentLanguage === 'fr'){
                    alert("Accès à la localisation refusé ou indisponible.");
                } else {
                    alert("Location access denied or unavailable.");
                }
                console.error(error);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('register-tab').classList.add('active');
}


document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
});
