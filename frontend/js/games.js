// ===============================
// GAME IMAGES
// ===============================

const gameImages = {
  "God of War": "i.webp",
  "WWE 2K23": "WWE23_ICON_AG_2D_FOB_FLAT_US_T.jpg",
  "WWE 2K24": "WWE24-WEBSITE-MARQUEE-BRAY_WYATT_EDITION-FOB.avif",
  "EA SPORTS FC 25": "capsule_616x353 (2).jpg",
  "Half Life":"halflife_coverart.jpg",
  "GTA V":"Grand_Theft_Auto_V.png",
  "PUBG": "default.webp",
"Need For Speed":"need-for-speed-screenshot.avif",
"Call of Duty":"call-of-duty-pictures-7lrqnchbx478ucgg.jpg",
"Uncharted: The Lost Legacy":"EGS_UNCHARTEDLegacyofThievesCollection_NaughtyDogLLC_S1_2560x1440-e049d7698f04568eb0085598eaee4c9e.jpeg",
"Uncharted 4: A Thief's End":"thumb-1920-681790.jpg",
"Delta Force":"2086790.jpg",
"Ready or Not":"images (2).jpeg",
"Forza Motorsport":"2.j.jpeg",
"Asphalt Legends":"3.j.jpeg",
"City Racing":"H.J.avif",
"Red Dead Redemption 2":"RDR2.jpg",
"Grand Theft Auto: Vice City":"Vice-city-cover.jpg",
"Grand Theft Auto: San Andreas":"a79ddc6259b7f54675221ffca9e49548.jpg",
"DEATH STRANDING 2: ON THE BEACH":"capsule_616x353.jpg",
"The Legend of Khiimori":"the-legend-of-khiimori-2-1920x1080-f418587a5b95.jpg",
"ONE PIECE: PIRATE WARRIORS 4":"capsule_616x353 (1).jpg",
"Minecraft":"Minecraft_2024_cover_art.png.webp",
"LEGO Worlds":"Lego-island.jpg",
"Roblox":"images (3).jpeg",
"Math Games":"math-games-all.webp",
"Puzzles":"images (4).jpeg"
};

// ===============================
// LOAD GAMES
// ===============================

async function loadGames() {
  try {

    const res = await fetch("/api/games");

    const games = await res.json();

    console.log("Games:", games);

    const container =
      document.getElementById("featuredGames");

    if (!container) {
      console.error(
        "featuredGames container not found"
      );
      return;
    }

    container.innerHTML = "";

    games.forEach((game) => {

      const image =
        gameImages[game.title] ||
        "images/default-game.jpg";

      container.innerHTML += `

      <div class="game-card">

        <img
          src="${image}"
          alt="${game.title}"
          class="game-image"
        >

        <div class="game-content">

          <h3 class="game-title">${game.title}</h3>

          <p class="game-desc">
            ${game.description}
          </p>

          <p class="rating">
            ⭐ ${game.rating || 0}
          </p>

          <div class="buttons">

            <button
              class="download-btn"
              onclick="downloadGame('${game.downloadUrl}')"
            >
              ⬇ Link
            </button>

            <button
              class="cart-btn"
              onclick="addToCart(
                '${game._id}',
                '${game.title}',
                '${image}',
                '0'
              )"
            >
              🛒 Cart
            </button>

            <button
              class="like-btn"
              onclick="likeGame(this)"
            >
              🤍
            </button>

            <button
              class="comment-btn"
              onclick="toggleComment(this)"
            >
              💬
            </button>

          </div>

          <div class="comment-section">

            <input
              type="text"
              placeholder="Write comment..."
              class="comment-input"
            >

            <button
              class="post-btn"
              onclick="addComment(this)"
            >
              Post
            </button>

            <div class="comments"></div>

          </div>

        </div>

      </div>

      `;
    });

  } catch (error) {

    console.error(
      "Load Games Error:",
      error
    );

  }
}

// ===============================
// DOWNLOAD
// ===============================

function downloadGame(url) {

  if (!url) {
    alert("Download link missing!");
    return;
  }

  window.open(url, "_blank");
}

// ===============================
// ADD TO CART
// ===============================

function addToCart(
  id,
  title,
  image,
  price
) {

  let cart =
    JSON.parse(
      localStorage.getItem("cart")
    ) || [];

  const exists =
    cart.find(
      item => item.id === id
    );

  if (exists) {
    alert("Already in cart");
    return;
  }

  cart.push({
    id,
    title,
    image,
    price
  });

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert(title + " added to cart");
}

// ===============================
// LIKE
// ===============================

function likeGame(btn) {

  btn.innerHTML = "❤️";
  btn.style.background = "red";
}

// ===============================
// COMMENT TOGGLE
// ===============================

function toggleComment(btn) {

  const card =
    btn.closest(".game-card");

  const commentSection =
    card.querySelector(
      ".comment-section"
    );

  commentSection.classList.toggle(
    "active"
  );
}

// ===============================
// ADD COMMENT
// ===============================

function addComment(btn) {

  const section =
    btn.parentElement;

  const input =
    section.querySelector(
      ".comment-input"
    );

  const comments =
    section.querySelector(
      ".comments"
    );

  if (
    input.value.trim() === ""
  ) {
    return;
  }

  comments.innerHTML += `
    <p class="single-comment">
      💬 ${input.value}
    </p>
  `;

  input.value = "";
}

// ===============================
// START
// ===============================

loadGames();