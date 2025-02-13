document.getElementById('next-button').addEventListener('click', function() {
    const selectedService = document.getElementById('service-selection').value;
    const selectedDateTime = document.getElementById('date-selection').value;

    if (selectedService && selectedDateTime) {
        const formattedDateTime = new Date(selectedDateTime).toLocaleString();

        document.getElementById('popup-service').innerText = `You selected: ${capitalizeFirstLetter(selectedService)} Service`;
        document.getElementById('popup-datetime').innerText = `Date and Time: ${formattedDateTime}`;

        document.getElementById('popup').style.display = 'flex';
    } else {
        alert("Please select both a service and a date/time.");
    }
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
