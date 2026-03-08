document.addEventListener("DOMContentLoaded", function () {

const container = document.getElementById("author-alexandre-games");
if (!container) return;

const path = window.location.pathname;


/* ==============================
CSS
================================ */

if (!document.getElementById("alex-author-style")) {

const style = document.createElement("style");
style.id = "alex-author-style";

style.textContent = `

.about-author{
display:flex;
gap:15px;
margin:40px 0 25px;
padding:20px;
border:1px solid #e5e5e5;
border-radius:8px;
background:#fafafa;
align-items:flex-start;
}

.about-author img{
width:90px;
height:90px;
border-radius:50%;
object-fit:cover;
}

.author-text h3{
margin-top:0;
font-size:18px;
}

.author-text p{
margin-bottom:10px;
font-size:16px;
line-height:1.5;
}

/* Creator Box */

.creator-support-box{
margin:30px 0;
padding:25px;
border-radius:10px;
background:linear-gradient(135deg,#1e293b,#111827);
color:#ffffff;
text-align:center;
box-shadow:0 6px 20px rgba(0,0,0,0.25);
}

.creator-support-box p,
.creator-support-box strong,
.creator-support-box span,
.creator-support-box a{
color:#ffffff;
}

.creator-header{
font-size:22px;
font-weight:700;
margin-bottom:10px;
}

.creator-text{
font-size:17px;
margin-bottom:12px;
opacity:0.9;
color:white;
}

.creator-code-box{
background:white;
color:#d32f2f;
display:inline-block;
padding:10px 18px;
border-radius:8px;
margin:12px 0;
font-size:18px;
font-weight:700;
}

.creator-code-box span{
display:block;
font-size:16px;
color:#444;
font-weight:500;
}

.creator-main-button{
display:inline-block;
margin-top:12px;
padding:12px 24px;
background:#ff3b3b;
color:white;
text-decoration:none;
border-radius:8px;
font-weight:700;
font-size:15px;
transition:0.2s;
}

.creator-main-button:hover{
background:#ff1f1f;
transform:scale(1.05);
}

.creator-small{
font-size:16px;
margin-top:10px;
opacity:0.8;
}

`;

document.head.appendChild(style);

}


/* ==============================
Auteur
================================ */

const authorHTML = `

<div class="about-author">

<img src="/imagens/alexandre-domingos.webp"
alt="Alexandre Domingos - Auteur du blog"
loading="lazy">

<div class="author-text">

<h3>À propos de l’auteur</h3>

<p>
<strong>Alexandre Domingos</strong> est titulaire d’un diplôme de troisième cycle en ingénierie et travaille comme superviseur de production.
Pendant son temps libre, il est
<a href="https://www.youtube.com/channel/UCVXIv4Movg3KAaPHVE7dstw" target="_blank" rel="noopener">
<strong>YouTuber</strong></a>, <strong>blogueur</strong> et
<strong>webmaster</strong> de
<a href="https://alexandregames.com"><strong>Alexandre Games</strong></a>.
</p>

<p>
Il joue aux jeux vidéo depuis l’âge de 5 ans, en commençant par des plateformes classiques comme le MSX, Master System,
Nintendo et les anciens PC 286.
Depuis 2019, il crée des guides, des tutoriels et des stratégies avancées pour la communauté des joueurs.
</p>

</div>

</div>

`;

/* ==============================
GIVE ME a Coffee HTML FOR HERO WARS: DOMINION ERA
================================ */
const coffeeHTML = `

<div class="creator-support-box">

<div class="creator-header">
☕ Vous avez aimé ce guide ?
</div>

<p class="creator-text">
Si ce guide vous a aidé, pensez à soutenir le projet
<strong>Alexandre Games</strong> avec un café.
</p>

<a href="https://ko-fi.com/alexandregamesoficial"
target="_blank"
rel="noopener"
class="creator-main-button">
Soutenir avec un café ☕
</a>

<p class="creator-small">
Votre soutien aide à maintenir de nouveaux guides et stratégies sur le site.
</p>

</div>

`;


/* ==============================
Code Créateur
================================ */

const creatorHTML = `

<div class="creator-support-box">

<div class="creator-header">
🎮 Ce guide vous a été utile ?
</div>

<p class="creator-text">
Si ce guide vous a aidé à gagner des combats ou à améliorer votre gameplay,
vous pouvez soutenir le travail de <strong>Alexandre Games</strong>.
</p>

<p class="creator-text">
Utilisez le code créateur suivant dans la boutique officielle Hero Wars :
</p>

<div class="creator-code-box">
<span>Code Créateur</span>
ALEXANDREGAMES
</div>

<a href="https://hwa.nexters.com/c/ALEXANDREGAMES"
target="_blank"
rel="noopener"
class="creator-main-button">
Visiter la boutique officielle
</a>

<p class="creator-small">
Utiliser ce code aide à soutenir la création de nouveaux guides et tutoriels,
sans coût supplémentaire pour vous.
<br>
🔥 Plus de 50 joueurs ont déjà soutenu Alexandre Games !
</p>

</div>

`;


/* ==============================
Insert Author
================================ */

container.innerHTML = authorHTML;


/* ==============================
Creator Code (only hero-wars-alliance)
================================ */

if (path.includes("hero-wars-alliance")) {
container.innerHTML += creatorHTML;
}

if (path.includes("hero-wars-dominion-era")) {
container.innerHTML += coffeeHTML;
}

});