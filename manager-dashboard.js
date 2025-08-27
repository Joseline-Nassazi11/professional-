// Simulated sales counts
let johnCount = 0;
let maryCount = 0;

function updateJohn() {
  johnCount++;
  document.getElementById("johnSalesCount").textContent = johnCount;
}

function updateMary() {
  maryCount++;
  document.getElementById("marySalesCount").textContent = maryCount;
}

// Example: Populate products table dynamically
const products = [
  { name: "Chair", type: "Furniture", price: 50, quantity: 20 },
  { name: "Desk", type: "Furniture", price: 150, quantity: 5 },
];

function loadProducts() {
  const tbody = document.querySelector("#productsTable tbody");
  tbody.innerHTML = "";
  let totalStockValue = 0;

  products.forEach((p) => {
    const value = p.price * p.quantity;
    totalStockValue += value;

    const row = `
      <tr>
        <td>${p.name}</td>
        <td>${p.type}</td>
        <td>$${p.price}</td>
        <td>${p.quantity}</td>
        <td>$${value}</td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", row);
  });

  document.getElementById(
    "totalStockValue"
  ).textContent = `$${totalStockValue}`;
}

document.addEventListener("DOMContentLoaded", loadProducts);
