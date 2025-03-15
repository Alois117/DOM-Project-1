// Select all elements needed
const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const heartButtons = document.querySelectorAll(".fa-heart");
const totalPriceElement = document.querySelector(".total");

// Function to update total price
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".card-body").forEach((card) => {
    let quantity = parseInt(card.querySelector(".quantity").textContent);
    let unitPrice = parseInt(card.querySelector(".unit-price").textContent);
    total += quantity * unitPrice;
  });
  totalPriceElement.textContent = `${total} $`;
}

// Increase quantity
plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotal();
  });
});

// Decrease quantity
minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
      updateTotal();
    }
  });
});

// Delete item
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let card = button.closest(".card-body");
    card.remove();
    updateTotal();
  });
});

// Like item
heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked");
    button.style.color = button.classList.contains("liked") ? "red" : "black";
  });
});
