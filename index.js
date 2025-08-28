// User data array
const users = [
  {
    id: 1,
    name: "Ssebwato Douglas",
    username: "Douglas",
    email: "sdouglas@gmail.com",
    password: "12345", // Added password
    role: "Reporting Attendant",
  },
  {
    id: 2,
    name: "Namutebi Martina",
    username: "Tina",
    email: "tina@gmail.com",
    password: "12345",
    role: "Inventory Attendant",
  },
  {
    id: 3,
    name: "Ayebazibwe Precious",
    username: "Precious",
    email: "ayebazibwe@gmail.com",
    password: "12345",
    role: "Sale Attendant",
  },
  {
    id: 4,
    name: "Lwanga Jonathan",
    username: "Jona",
    email: "jona@gmail.com",
    password: "12345",
    role: "Stock Attendant",
  },
  {
    id: 5,
    name: "Kabedela James",
    username: "James",
    email: "james@gmail.com",
    password: "12345",
    role: "Reporting Attendant",
  },
  {
    id: 6,
    name: "Byanyima Winnie",
    username: "Winnie",
    email: "bwinnie@gmail.com",
    password: "12345",
    role: "Call center Attendant",
  },
  {
    id: 7,
    name: "Namubiru Lynn",
    username: "Lynn",
    email: "nlynn@gmail.com",
    password: "12345",
    role: "Help desk Attendant",
  },
  {
    id: 8,
    name: "Zawedde Shanitah",
    username: "Shan",
    email: "zshan@gmail.com",
    password: "12345",
    role: "Sales Attendant",
  },
];

// Handle login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  // Find user with matching email + password
  const user = users.find(
    (u) => u.email.toLowerCase() === email && u.password === password
  );

  if (user) {
    alert("Welcome " + user.name + "! Redirecting to dashboard...");
    // Save logged in user to localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    // Redirect
    window.location.href = "manager-dashboard.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }
});

// Populate table dynamically
function loadUsers() {
  const tbody = document.querySelector("#usersTable tbody");
  if (!tbody) return; // Only run if dashboard table exists
  tbody.innerHTML = "";

  users.forEach((user) => {
    const row = `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

// Live search/filter
function filterUsers() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const searchValue = input.value.toLowerCase();
  const rows = document.querySelectorAll("#usersTable tbody tr");

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    const match = Array.from(cells).some((td) =>
      td.textContent.toLowerCase().includes(searchValue)
    );
    row.style.display = match ? "" : "none";
  });
}

// Event listeners for dashboard
document.addEventListener("DOMContentLoaded", () => {
  loadUsers();
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", filterUsers);
  }
});
