let cart = [];

function addToCart() {
    const product = {
        name: "Wireless Earbuds",
        price: 5000,
        quantity: 1
    };

    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    updateCartSummary();
}

function toggleCart() {
    const cartSummary = document.getElementById("cartSummary");
    cartSummary.style.display = cartSummary.style.display === "none" ? "block" : "none";
}

function updateCartSummary() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "No items added yet.";
        totalPriceElement.innerHTML = "₹0.00";
    } else {
        let total = 0;
        cartItemsContainer.innerHTML = cart.map(item => {
            total += item.price * item.quantity;
            return `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`;
        }).join("<br>");

        totalPriceElement.innerHTML = total.toFixed(2);
    }
}

function confirmOrder() {
    alert("Order confirmed!");
    cart = [];
    updateCartSummary();
}

function increaseQuantity(button) {
    const quantitySpan = button.previousElementSibling;
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
}

function decreaseQuantity(button) {
    const quantitySpan = button.nextElementSibling;
    const currentQuantity = parseInt(quantitySpan.textContent);
    if (currentQuantity > 1) {
        quantitySpan.textContent = currentQuantity - 1;
    }
}
