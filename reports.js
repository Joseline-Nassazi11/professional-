// Sample data for reports
const reportData = {
  totalSales: 25000000,
  totalStockValue: 18500000,
  totalCustomers: 82,
  topProducts: [
    {
      id: 1,
      name: "Sofa Set",
      type: "Finished",
      quantity: 15,
      revenue: 6000000,
    },
    { id: 2, name: "Poles", type: "Raw", quantity: 100, revenue: 2000000 },
    {
      id: 3,
      name: "Dining Table",
      type: "Finished",
      quantity: 7,
      revenue: 4200000,
    },
    { id: 4, name: "Timber", type: "Raw", quantity: 250, revenue: 7500000 },
  ],
};

// Utility: Format numbers with commas and UGX
function formatUGX(amount) {
  return "UGX " + amount.toLocaleString();
}

// Populate cards
function populateCards() {
  document.querySelector(".card.text-bg-success .card-text").textContent =
    formatUGX(reportData.totalSales);
  document.querySelector(".card.text-bg-primary .card-text").textContent =
    formatUGX(reportData.totalStockValue);
  document.querySelector(".card.text-bg-warning .card-text").textContent =
    reportData.totalCustomers;
}

// Populate table
function populateTable() {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = ""; // clear old rows

  reportData.topProducts.forEach((product) => {
    const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.type}</td>
                <td>${product.quantity}</td>
                <td>${formatUGX(product.revenue)}</td>
            </tr>
        `;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  populateCards();
  populateTable();
});
