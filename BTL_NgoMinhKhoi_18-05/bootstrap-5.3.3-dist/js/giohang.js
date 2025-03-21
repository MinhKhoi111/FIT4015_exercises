document.getElementById("cart-btn").addEventListener("click", function() {
    document.getElementById("cart-popup").classList.add("active");
});

document.getElementById("close-cart").addEventListener("click", function() {
    document.getElementById("cart-popup").classList.remove("active");
});