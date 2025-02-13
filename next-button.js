document.getElementById('next-button').addEventListener('click', function() {
    // Get the selected service and date-time input
    const selectedService = document.getElementById('service-selection').value;
    const selectedDateTime = document.getElementById('date-selection').value;

    // Check if a valid date and service are selected
    if (selectedService && selectedDateTime) {
        // Format the date-time for display
        const formattedDateTime = new Date(selectedDateTime).toLocaleString();

        // Set the content for the pop-up
        document.getElementById('popup-service').innerText = `You selected: ${capitalizeFirstLetter(selectedService)} Service`;
        document.getElementById('popup-datetime').innerText = `Date and Time: ${formattedDateTime}`;

        // Show the pop-up
        document.getElementById('popup').style.display = 'flex';
    } else {
        alert("Please select both a service and a date/time.");
    }
});

// Close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
