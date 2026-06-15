let games=[
  {
name:"God of War",
cat:"action",
img:"i.webp",
price:"₹1609",
rating:"⭐5.0",
views:"2M"
},
 {
name:"WWE 2K23",
cat:"sport",
img:"WWE23_ICON_AG_2D_FOB_FLAT_US_T.jpg",
price:"₹299",
rating:"⭐4.5",
views:"2M"
},
{
name:"WWE 2K24",
cat:"sport",
img:"WWE24-WEBSITE-MARQUEE-BRAY_WYATT_EDITION-FOB.avif",
price:"₹1299",
rating:"⭐5.0",
views:"4M"
},
{
name:"EA SPORTS FC™ 25",
cat:"sport",
img:"capsule_616x353 (2).jpg",
price:"Free",
rating:"⭐5.0",
views:"4M"
},
{
name:"Half Life",
cat:"action",
img:"halflife_coverart.jpg",
price:"Free",
rating:"⭐4.0",
views:"1M"
},
{
name:"GTA V",
cat:"action",
img:"Grand_Theft_Auto_V.png",
price:"₹999",
rating:"⭐4.8",
views:"1.2M"
},
{
name:"PUBG",
cat:"battle",
img:"default.webp",
price:"Free",
rating:"⭐4.5",
views:"2.5M"
},
{
name:"Need For Speed",
cat:"racing",
img:"need-for-speed-screenshot.avif",
price:"₹799",
rating:"⭐4.6",
views:"900K"
},
{
name:"Call of Duty",
cat:"battle",
img:"call-of-duty-pictures-7lrqnchbx478ucgg.jpg",
price:"Free",
rating:"⭐4.7",
views:"3M"
},
{
name:"Uncharted: The Lost Legacy ",
cat:"adventure",
img:"EGS_UNCHARTEDLegacyofThievesCollection_NaughtyDogLLC_S1_2560x1440-e049d7698f04568eb0085598eaee4c9e.jpeg",
price:"Free",
rating:"⭐4.8",
views:"3M"
},
{
name:"Uncharted 4: A Thief's End ",
cat:"adventure",
img:"thumb-1920-681790.jpg",
price:"₹1999",
rating:"⭐4.8",
views:"2M"
},
{
name:"Delta Force ",
cat:"battle",
img:"123456789.jpeg",
price:"₹1900",
rating:"⭐4.8",
views:"1M"
},
{
name:"Ready or not ",
cat:"battle",
img:"images (2).jpeg",
price:"Free",
rating:"⭐3.5",
views:"1M"
},
{
name:"Forza Motorsport ",
cat:"racing",
img:"2.j.jpeg",
price:"Free",
rating:"⭐3.0",
views:"0.1M"
},
{
name:"Asphalt Legends ",
cat:"racing",
img:"3.j.jpeg",
price:"₹999",
rating:"⭐3.0",
views:"0.2M"
},
{
name:"City Racing",
cat:"racing",
img:"H.J.avif",
price:"₹999",
rating:"⭐3.5",
views:"0.2M"
},
{
name:"Red Dead Redemption",
cat:"action",
img:"RDR2.jpg",
price:"₹1999",
rating:"⭐5.0",
views:"4M"
},
{
name:"Grand Theft Auto: Vice City",
cat:"action",
img:"Vice-city-cover.jpg",
price:"Free",
rating:"⭐4.7",
views:"3M"
},
{
name:"Grand Theft Auto: san andress",
cat:"action",
img:"a79ddc6259b7f54675221ffca9e49548.jpg",
price:"Free",
rating:"⭐4.7",
views:"2.5M"
},
{
name:"DEATH STRANDING 2: ON THE BEACH",
cat:"action",
img:"capsule_616x353.jpg",
price:"₹4999",
rating:"⭐4.9",
views:"1.0M"
},
{
name:"The Legend of Khiimori",
cat:"adventure",
img:"the-legend-of-khiimori-2-1920x1080-f418587a5b95.jpg",
price:"₹2480",
rating:"⭐4.9",
views:"1M"
},
{
name:"ONE PIECE: PIRATE WARRIORS 4",
cat:"adventure",
img:"capsule_616x353 (1).jpg",
price:"Free",
rating:"⭐4.0",
views:"1M"
},
{
name:"Minecraft",
cat:"kid",
img:"Minecraft_2024_cover_art.png.webp",
price:"Free",
rating:"⭐4.0",
views:"1M"
},
{
name:"LEGO",
cat:"kid",
img:"Lego-island.jpg",
price:"Free",
rating:"⭐4.0",
views:"1M"
},
{
name:"Roblox",
cat:"kid",
img:"images (3).jpeg",
price:"Free",
rating:"⭐4.0",
views:"1M"
},
{
name:"Math Games",
cat:"kid",
img:"math-games-all.webp",
price:"Free",
rating:"⭐4.0",
views:"1M"
},
{
name:"Puzzles",
cat:"kid",
img:"images (4).jpeg",
price:"Free",
rating:"⭐4.0",
views:"1M"
},
];



function renderGames(list,id){
const c=document.getElementById(id);
if(!c) return;

c.innerHTML="";
list.forEach(g=>{
c.innerHTML+=`
<div class="game-card">
<img src="${g.img}">
<h3>${g.name}</h3>
<p>${g.price}</p>
<p>${g.rating}</p>
<p>${g.views}</p>
<div class="card-buttons">

    <button
    class="download-btn"
    onclick="download('${g.name}')">

        Download

    </button>
<button
    class="cart-btn"
    onclick="addToCart('${g.name}')">

        🛒 Cart

    </button>
</div>`;
});
}

renderGames(games,"gameList");
renderGames(games,"featuredGames");
renderGames(games,"userGames");

function download(name){

}
function Pay(name){
alert(name+" Make payement");
}
function login(){
window.location="dashboard.html";
}

function register(){
window.location="login.html";
}



// Get token
function getToken() {
  return localStorage.getItem("token");
}

// Auth header
function authHeader() {
  return {
    "Authorization": "Bearer " + getToken()
  };
}
function downloadGame(id) {
  window.location.href =
    `downloadurl`;
}
async function downloadGame(gameId) {
  const res = await fetch(`/api/games/download/${gameId}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token")
    }
  });

  if (!res.ok) {
    const err = await res.json();
    alert(err.message || "Download failed");
    return;
  }

  const { url } = await res.json();

  // Trigger download
  window.location.href = url;
}
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[i].classList.add("active");
}

/* NEXT */

next.addEventListener("click", ()=>{

    index++;

    if(index >= slides.length){
        index = 0;
    }

    showSlide(index);
});

/* PREVIOUS */

prev.addEventListener("click", ()=>{

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    showSlide(index);
});
function addToCart(game){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.push(game);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Added to cart");
}

document.getElementById("registerForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Registration Successful");

window.location.href = "login.html";

});


/* ===== LOGOUT ===== */

function logoutUser(){

alert("Logout Successful");

window.location.href = "login.html";

}

/* ===== LIKE BUTTON ===== */

function likeGame(button){

let count = button.querySelector("span");

count.innerText = parseInt(count.innerText) + 1;

}

/* ===== POST COMMENT ===== */

function postComment(button){

const gameCard = button.parentElement.parentElement;

const input = gameCard.querySelector(".comment-input");

const commentsDiv = gameCard.querySelector(".comments");

if(input.value.trim() === ""){

alert("Write a comment");

return;

}

const comment = document.createElement("div");

comment.classList.add("comment");

comment.innerText = input.value;

commentsDiv.appendChild(comment);

input.value = "";

}

function removeCart(id){

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    // REMOVE

    cart =
    cart.filter(
        item => item.id !== id
    );

    // SAVE

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

    // RELOAD

    loadCart();

}
document.getElementById("profileBtn").addEventListener("click", () => {

    const user = localStorage.getItem("username");

    if(user){
        window.location.href = "profile.html";
    }else{
        window.location.href = "login.html";
    }

});

