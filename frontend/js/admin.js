// TOTAL USERS

const users =
JSON.parse(
    localStorage.getItem("users")
) || [];

// TOTAL GAMES

const totalGames =
document.querySelectorAll(
    ".game-card"
).length;

// WISHLIST

const wishlist =
JSON.parse(
    localStorage.getItem("wishlist")
) || [];

// CART

const cart =
JSON.parse(
    localStorage.getItem("cart")
) || [];

// UPDATE UI



document.getElementById(
    "cartCount"
).innerText =
cart.length;
function openCartPage(){

    window.location.href =
    "cart.html";

}