const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

// Initialize default admin (optional)
let users = JSON.parse(localStorage.getItem("users")) || [];
if (!users.find(u => u.username === "admin")) {
  users.push({ username: "admin", password: "12345" });
  localStorage.setItem("users", JSON.stringify(users));
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", username);
    if (username === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "attendance.html";
    }
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});
