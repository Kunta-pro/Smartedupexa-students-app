// JavaScript to handle login, payment dial, and WhatsApp message

// Dummy data for login (can be customized later)
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
];

// Function to handle login form submission
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if user credentials are correct
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        // Redirect to the Smartedupexa subjects page if login is successful
        window.location.href = "https://kunta-pro.github.io/Smartedupexa-students-app/subjects";
    } else {
        alert("Invalid username or password.");
    }
}

// Function to handle registration button and redirect to WhatsApp
function handleRegistration() {
    const message = "Hello, create for me an account on Smartedupexa";
    const whatsappUrl = `https://wa.me/256742311870?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
}

// Function to dial MTN USSD code (*165*3#) automatically on mobile
function dialMTN() {
    const ussdCode = "*165*3#";
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        window.location.href = `tel:${ussdCode}`;
    } else {
        alert("This feature is only supported on mobile devices.");
    }
}

// Function to dial Airtel USSD code (*185*9#) automatically on mobile
function dialAirtel() {
    const ussdCode = "*185*9#";
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        window.location.href = `tel:${ussdCode}`;
    } else {
        alert("This feature is only supported on mobile devices.");
    }
}
