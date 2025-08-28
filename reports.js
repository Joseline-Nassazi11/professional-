// Simple fake report generator (replace with API calls and export)
document.getElementById("btnGenerate").addEventListener("click", () => {
  const type = document.getElementById("rType").value;
  const from = document.getElementById("rFrom").value || "2025-08-01";
  const to = document.getElementById("rTo").value || "2025-08-31";
  const area = document.getElementById("reportArea");
  let html = `<div class="d-flex justify-content-between"><h5 class="mb-0 text-capitalize">${type} report</h5><span>${from} → ${to}</span></div><hr/>`;

  if (type === "sales") {
    html += `<p>Total sales: UGX ${(5280000).toLocaleString()}</p><p>Orders: 174</p>`;
  } else if (type === "stock") {
    html += `<p>Items in stock: 153</p><p>Low stock alerts: 6</p>`;
  } else {
    html += `<p>Top agent: Joel (UGX ${(920000).toLocaleString()})</p>`;
  }
  html += `<div class="mt-3"><button class="btn btn-outline-secondary btn-sm" id="btnExport">Export CSV</button></div>`;
  area.innerHTML = html;

  document.getElementById("btnExport").addEventListener(
    "click",
    () => {
      const rows = [
        ["Type", type],
        ["From", from],
        ["To", to],
      ];
      const csv = rows.map((r) => r.join(",")).join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${type}-report.csv`;
      a.click();
      URL.revokeObjectURL(url);
    },
    { once: true }
  );
});
