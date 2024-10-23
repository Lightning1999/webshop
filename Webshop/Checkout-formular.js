document.getElementById('checkout-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form submission for validation

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postal-code').value;
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (validateForm(name, address, city, postalCode, cardName, cardNumber, expiryDate, cvv)) {
        alert("Purchase complete! Thank you for your order.");
    } else {
        alert("Please fill in all fields correctly.");
    }
});

function validateForm(name, address, city, postalCode, cardName, cardNumber, expiryDate, cvv) {
    const cardNumberPattern = /^\d{16}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
    const cvvPattern = /^\d{3}$/;

    if (name === "" || address === "" || city === "" || postalCode === "" || cardName === "") {
        return false;
    }
    if (!cardNumberPattern.test(cardNumber)) {
        alert("Card number must be 16 digits.");
        return false;
    }
    if (!expiryDatePattern.test(expiryDate)) {
        alert("Expiry date must be in MM/YY format.");
        return false;
    }
    if (!cvvPattern.test(cvv)) {
        alert("CVV must be 3 digits.");
        return false;
    }
    return true;
}