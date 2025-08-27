// Search filter

document.getElementById("searchBox").addEventListener("keyup", function() {
    let searchValue = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");//get All cards

    cards.forEach(card => {
        let title = card.querySelector(".card-title").textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.parentElement.style.display = "block"; // show
        } else {
            card.parentElement.style.display = "none";//hide column
        }
    });
});

let cart = [];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        let productName = this.closest(".card").querySelector(".card-title").textContent;
        cart.push(productName);
        alert(productName + "added to cart!");
    });
});   //This will pop up an alert when you add a product. Later, you can display the cart contents in a sidebar.

document.getElementById("sortPrice").addEventListener("change", function () {
  let products = document.querySelector(".row.g-4");
  let cards = Array.from(products.children);

  cards.sort((a, b) => {
    let priceA = parseInt(
      a.querySelector("p strong").textContent.replace(/\D/g, "")
    );
    let priceB = parseInt(
      b.querySelector("p strong").textContent.replace(/\D/g, "")
    );
    return this.value === "low" ? priceA - priceB : priceB - priceA;
  });

  // Re-append in sorted order
  cards.forEach((card) => products.appendChild(card));
});
