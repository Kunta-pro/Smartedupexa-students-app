// Array of predefined usernames and passwords (you can customize these later)
const validUsers = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "admin", password: "admin123" },
];

// Handle Login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials match any in the validUsers array
    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to the subjects page upon successful login
        window.location.href = "https://kunta-pro.github.io/Smartedupexa-students-app/subjects";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Payment Dialer functions
function dialMTN() {
    alert("Dialing: *165*3#");
}

function dialAirtel() {
    alert("Dialing: *185*9#");
}

// Create Account function to redirect to WhatsApp with a message
function createAccount() {
    const message = "Hello, create for me an account on Smartedupexa";
    const url = `https://wa.me/256742311870?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
