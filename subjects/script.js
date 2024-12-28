// Handle subject card clicks
document.querySelectorAll(".subject-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank"); // Open the link in a new tab
    }
  });
});

// Handle Book Lesson button
const bookLessonButton = document.getElementById("bookLesson");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

bookLessonButton.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Handle Join Channel button
document.getElementById("joinChannel").addEventListener("click", () => {
  window.open("https://join-channel-link.com", "_blank");
});

// Handle Logout button
document.getElementById("logout").addEventListener("click", () => {
  if (confirm("Are you sure you want to logout?")) {
    window.open("https://github.com/logout", "_blank");
  }
});
