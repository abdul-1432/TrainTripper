// Get DOM elements
const passengerInput = document.getElementById("passenger");
const coachSelect = document.getElementById("coach");
const totalPriceElement = document.getElementById("total-price");
const passengerInfoContainer = document.getElementById("passenger-info");
const errorMessageElement = document.getElementById("error-message");

// Define pricing information
const prices = {
    economy: 160,
    business: 250,
    'first-class': 1000,
};

// Function to update the passenger information
// Function to update the passenger information
function updatePassengerInfo() {
    const passengerCount = parseInt(passengerInput.value);
    const selectedCoach = coachSelect.value;

    passengerInfoContainer.innerHTML = ""; // Clear existing passenger info

    if (passengerCount > 5) {
        errorMessageElement.textContent = "Maximum 5 passengers allowed.";
        totalPriceElement.textContent = "";
        return; // Exit the function
    } else {
        errorMessageElement.textContent = "";
    }

    for (let i = 1; i <= passengerCount; i++) {
        const passengerDiv = document.createElement("div");
        passengerDiv.className = "passenger-row";
        passengerDiv.innerHTML = `
            <h3>Passenger ${i} Information:</h3>
            <label for="name-${i}">Name:</label>
            <input type="text" id="name-${i}" placeholder="Name" required>
            <label for="age-${i}">Age:</label>
            <input type="number" id="age-${i}" placeholder="Age" required>
            <label for="gender-${i}">Gender:</label>
            <select id="gender-${i}" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        `;
        passengerInfoContainer.appendChild(passengerDiv);
    }

    updateTotalPrice();
}


// Function to update the total price and handle errors
function updateTotalPrice() {
    const passengerCount = parseInt(passengerInput.value);
    const selectedCoach = coachSelect.value;

    if (passengerCount > 5) {
        errorMessageElement.textContent = "Maximum 5 passengers allowed.";
        totalPriceElement.textContent = "";
    } else {
        errorMessageElement.textContent = "";

        let totalPrice = 0;
        for (let i = 1; i <= passengerCount; i++) {
            totalPrice += prices[selectedCoach];
        }

        totalPriceElement.textContent = `$${totalPrice}`;
    }
}

// Event listeners
passengerInput.addEventListener("input", updatePassengerInfo);
coachSelect.addEventListener("change", updateTotalPrice);

// Initial price calculation
updatePassengerInfo();
// Add an event listener to the "Make Payment" button
document.getElementById("payment-button").addEventListener("click", function () {
    // Navigate to the payments.html page (replace 'payments.html' with the actual file path)
    window.location.href ="payment1.html";
});

