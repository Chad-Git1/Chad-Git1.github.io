let currentLanguage = localStorage.getItem('language') || 'en'; 

const translations = {
    en: {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "booking": "Booking",
        "home-section-title": "Velotous",
        "home-section-content": "Pedal without worries",
        "about-section-title": "About Us",
        "about-section-content": "Email : Info@velotous.com \n\nPhone : 613-123-1234 \n\nVelotous - Mobile bike repair \n\nAt Velotous, we make bike repair simpler than ever. Our experts go directly to you to help you with all you bicycle needs. \n\nPedal without worries",
        "services-section-title": "Services",
        "booking-section-title": "Booking",
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
        "profile-title" : "User Profile",
        "bronze" : "Bronze $29.97",
        "bronze-content" : "Basic bike repair",
        "silver" : "Silver $36.57",
        "silver-content" : "Bike cleaning",
        "gold" : "Gold $41.00",
        "gold-content" : "Safety inspection",
        "platinum" : "Platinum $48.97",
        "platinum-content" : "Performance adjustments",
        "choose-date" : "Choose Date and Time",
        "next-button" : "Next",
        "popup-text" : "Check your emails",
        "quote-section-title" : "Get a quote",
        "quote-section-content" : "Upload a photo",
        "quote-section-click" : "Submit",
        "services-section-subtitle" : "Servicing price = Package price + Bike parts price | No extra fees",
        "bike-parts-section-title" : "Bike Parts",
        "part-1" : "Brake - $7",
        "part-2" : "Tire - $25",
        "part-3" : "Chain - $8",
        "part-4" : "Handlebar - $10",
        "part-5" : "Pedal - $4",
        "part-6" : "Wheel - $14",
        "part-7" : "Seat - $15",
        "part-8" : "Tube - $8"
    },
    fr: {
        "home": "Accueil",
        "about": "À propos",
        "services": "Services",
        "booking": "Réservation",
        "home-section-title": "Velotous",
        "home-section-content": "Pedalez sans soucis",
        "about-section-content": "Courriel : Info@velotous.com \n\nTéléphone : 613-123-1234 \n\nVelotous - Réparation de vélo à domicile \n\nChez Vélotous, nous rendons la réparation de vélo plus simple que jamais. Nos experts se rendent directement chez vous assister avec tous vos besoins de vélo. \n\nPédalez sans soucis",
        "about-section-title": "À propos de nous",
        "services-section-title": "Services",
        "booking-section-title": "Réservation",
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
        "profile-title" : "Profil usager",
        "bronze" : "Bronze $29,97",
        "bronze-content" : "Réparation de vélo basique",
        "silver" : "Argent $36,57",
        "silver-content" : "Nettoyage de vélo",
        "gold" : "Or $41,00",
        "gold-content" : "Inspection de sécurité",
        "platinum" : "Platine $48,97",
        "platinum-content" : "Ajustements de performance",
        "choose-date" : "Choisir une date et temps",
        "next-button" : "Prochain",
        "popup-text" : "Vérifer vous courriels",
        "quote-section-title" : "Obtenir un devis",
        "quote-section-content" : "Ajouter une photo",
        "quote-section-click" : "Soumettre",
        "services-section-subtitle" : "Prix de service = Prix de pacquet + Prix de pièces de vélo | Pas de frais supplémentaires",
        "bike-parts-section-title" : "Pièces de vélo",
        "part-1" : "Frein - $7",
        "part-2" : "Pneu - $25",
        "part-3" : "Chaine - $8",
        "part-4" : "Guidon - $10",
        "part-5" : "Pedale - $4",
        "part-6" : "Roue - $14",
        "part-7" : "Siege - $15",
        "part-8" : "Tube - $8"
    }
};


function applyTranslations() {
    document.querySelectorAll('[data-lang]').forEach((element) => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLanguage][key]) {
            if (element.tagName === "INPUT") {
                element.setAttribute("placeholder", translations[currentLanguage][key]);
            } else {
                element.innerHTML = translations[currentLanguage][key].replace(/\n/g, "<br>");
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

function showQuotePopup() {
    const fileInput = document.getElementById('file-upload');
    if (fileInput.files.length === 0) {
        if(currentLanguage === 'fr'){
            alert('Veuillez ajouter un fichier avant de soumettre.');
        } else {
            alert('Please upload a file before submitting.');
        }
        return;
    }

    const quotePopup = document.getElementById('quote-popup');
    const quotePopupText = document.getElementById('quote-popup-text');
    
    const fileName = fileInput.files[0].name;
    if(currentLanguage === 'fr'){
        quotePopupText.innerText = `Votre devis vous sera envoyé par courriel sous peu. Fichier soumis : ${fileName}`;
    } else {
        quotePopupText.innerText = `Your quote will be sent to your e-mail shortly. File uploaded : ${fileName}`;
    }

    quotePopup.style.display = 'flex';
}

function closeQuotePopup() {
    const quotePopup = document.getElementById('quote-popup');
    quotePopup.style.display = 'none';
}
