document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop auto reload

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Demo user database (replace with real one later)
  const users = [
    {
      email: "admin@mayondo.com",
      password: "12345",
      role: "admin",
      redirect: "admin-dashboard.html",
    },
    {
      email: "manager@mayondo.com",
      password: "12345",
      role: "manager",
      redirect: "manager-dashboard.html",
    },
    {
      email: "employee@mayondo.com",
      password: "12345",
      role: "employee",
      redirect: "employee-dashboard.html",
    },
    {
      email: "customer@mayondo.com",
      password: "12345",
      role: "customer",
      redirect: "customer-dashboard.html",
    },
  ];

  // Find matching user
  let user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    alert("Login successful as " + user.role);
    window.location.href = user.redirect; // redirect based on role
  } else {
    alert("Invalid email or password");
  }
});
