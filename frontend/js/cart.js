const gameDescriptions ={
    "God of War": "An epic action-adventure game following Kratos through Norse mythology.",

    "WWE 2K23": "A realistic wrestling game featuring WWE superstars and exciting matches.",

    "WWE 2K24": "The latest WWE game with enhanced gameplay and an updated roster.",

    "EA SPORTS FC 25": "A football simulation game featuring top clubs and leagues worldwide.",

    "Half-Life": "A legendary first-person shooter developed by Valve.",

    "GTA V": "An open-world action game set in the city of Los Santos.",

    "PUBG": "A battle royale shooter where players fight to be the last survivor.",

    "Need for Speed": "A high-speed racing game with thrilling street competitions.",

    "Call of Duty": "An action-packed military shooter with multiplayer battles.",

    "Uncharted: The Lost Legacy": "A treasure-hunting adventure featuring Chloe Frazer.",

"Uncharted 4: A Thief's End": "Nathan Drake's final adventure in search of lost treasure.",

    "Delta Force": "A tactical military shooter focused on teamwork and strategy.",

    "Ready or Not": "A realistic SWAT-based tactical shooter game.",

    "Forza Motorsport": "A racing simulator with realistic cars and tracks.",

    "Asphalt Legends": "An arcade racing game with fast cars and exciting stunts.",

    "City Racing": "A casual racing game set in vibrant city environments.",

    "Red Dead Redemption 2": "A western-themed open-world adventure by Rockstar Games.",

    "GTA Vice City": "A classic crime-action game set in the 1980s.",

    "GTA San Andreas": "An iconic open-world game following CJ's journey.",

    "Death Stranding 2": "A story-driven action game from Hideo Kojima.",

    "The Legend of Khiimori": "A fantasy RPG filled with exploration and adventure.",

    "ONE PIECE: PIRATE WARRIORS 4": "An anime action game based on the One Piece series.",

    "Minecraft": "A sandbox game where players build, explore, and survive.",

    "LEGO Worlds": "A creative adventure game built entirely from LEGO bricks.",

    "Roblox": "A platform where users create and play millions of games.",

"Math Games": "Educational games designed to improve mathematical skills.",

    "Puzzles": "Brain-training games that challenge logic and problem-solving."
}
const cartContainer =
document.getElementById("cartContainer");

let cart =
JSON.parse(
  localStorage.getItem("cart")
) || [];

function renderCart() {

  cartContainer.innerHTML = "";

  if (cart.length === 0) {

    cartContainer.innerHTML = `
      <h2>Your cart is empty</h2>
    `;

    return;
  }

  cart.forEach((game,index) => {

    cartContainer.innerHTML += `

    <div class="cart-card">

      <img
      src="${game.image}"
      class="cart-image"
      alt="${game.title}"
      >

      <h3>${game.title}</h3>

      <p></p>

      <div class="cart-buttons">

       

        <button
        class="delete-btn"
        onclick="removeCart(${index})"
        >
        Delete
        </button>

      </div>

    </div>

    `;
  });

}

function removeCart(index){

  cart.splice(index,1);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  renderCart();
}

renderCart();