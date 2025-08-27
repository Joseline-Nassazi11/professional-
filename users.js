// User data array
const users = [
  {
    id: 1,
    name: "Ssebwato Douglas",
    username: "Douglas",
    email: "sdouglas@gmail.com",
    role: "Reporting Attendant",
  },
  {
    id: 2,
    name: "Namutebi Martina",
    username: "Tina",
    email: "Tina@gmail.com",
    role: "Inventory Attendant",
  },
  {
    id: 3,
    name: "Ayebazibwe Precious",
    username: "Precious",
    email: "ayebazibwe@gmail.com",
    role: "Sale Attendant",
  },
  {
    id: 4,
    name: "Lwanga Jonathan",
    username: "Jona",
    email: "jona@gmail.com",
    role: "Stock Attendant",
  },
  {
    id: 5,
    name: "Kabedela James",
    username: "James",
    email: "james@gmail.com",
    role: "Reporting Attendant",
  },
  {
    id: 6,
    name: "Byanyima Winnie",
    username: "Winnie",
    email: "bwinnie@gmail.com",
    role: "Call center Attendant",
  },
  {
    id: 7,
    name: "Namubiru Lynn",
    username: "Lynn",
    email: "nlynn@gmail.com",
    role: "Help desk Attendant",
  },
  {
    id: 8,
    name: "Zawedde Shanitah",
    username: "Shan",
    email: "zshan@gmail.com",
    role: "Sales Attendant",
  },
];

// Populate table dynamically
function loadUsers() {
  const tbody = document.querySelector("#usersTable tbody");
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
  const input = document.getElementById("searchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#usersTable tbody tr");

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    const match = Array.from(cells).some((td) =>
      td.textContent.toLowerCase().includes(input)
    );
    row.style.display = match ? "" : "none";
  });
}

// Event listeners
document.addEventListener("DOMContentLoaded", loadUsers);
document.getElementById("searchInput").addEventListener("keyup", filterUsers);
