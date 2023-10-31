// Function to show/hide payment options based on user choice
document.getElementById("payment-method").addEventListener("change", function () {
    const selectedOption = this.value;

    // Hide all payment options
    document.getElementById("upi-payment").classList.add("hidden");
    document.getElementById("card-payment").classList.add("hidden");

    // Show the selected payment option
    if (selectedOption === "upi") {
        document.getElementById("upi-payment").classList.remove("hidden");
    } else if (selectedOption === "card-payment") {
        // Load the card payment page (replace 'payments.html' with the actual file path)
        loadExternalContent("payments.html", "payment-content");
    }
});

// UPI Payment
document.getElementById("make-upi-payment").addEventListener("click", function () {
    // Get the UPI ID entered by the user
    const upiId = document.getElementById("upi-id").value;

    // Implement UPI payment logic here
    if (upiId) {
        alert("UPI payment initiated for UPI ID: " + upiId);
        // You can replace the alert with your actual UPI payment logic
    } else {
        alert("Please enter a valid UPI ID.");
    }
});

// Function to load external HTML content into a specified div
function loadExternalContent(url, targetDivId) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Display the loaded content in the specified div
            document.getElementById(targetDivId).innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
